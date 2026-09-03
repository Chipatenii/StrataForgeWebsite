<script>
    import { onMount } from 'svelte';

    let canvas;
    let ready = $state(false); // WebGL scene is live; hide the poster underneath
    let failed = $state(false);

    onMount(() => {
        const reduceMotion =
            typeof window !== 'undefined' &&
            window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

        if (reduceMotion) {
            // Ship the static poster only. No real-time render for these visitors.
            return;
        }

        let renderer, scene, camera, mesh, edges, glowLight, rafId;
        let disposed = false;
        const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
        let scrollY = 0;

        async function init() {
            let THREE;
            try {
                THREE = await import('three');
            } catch {
                failed = true;
                return;
            }

            try {
                renderer = new THREE.WebGLRenderer({
                    canvas,
                    antialias: true,
                    alpha: true,
                    powerPreference: 'high-performance'
                });
            } catch {
                failed = true;
                return;
            }

            const parent = canvas.parentElement;
            const size = () => ({ w: parent.clientWidth, h: parent.clientHeight });

            renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
            const { w, h } = size();
            renderer.setSize(w, h, false);

            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(42, w / h, 0.1, 100);
            camera.position.set(0, 0, 6);

            // The mark: a faceted, low-poly form — "forged" geometry.
            const geometry = new THREE.IcosahedronGeometry(1.7, 1);
            const material = new THREE.MeshStandardMaterial({
                color: 0x203590, // Strata Forge navy
                metalness: 0.55,
                roughness: 0.35,
                flatShading: true
            });
            mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);

            // Orange wireframe overlay — the energy accent on the edges.
            const edgeGeo = new THREE.EdgesGeometry(geometry, 12);
            const edgeMat = new THREE.LineBasicMaterial({
                color: 0xff7e5f,
                transparent: true,
                opacity: 0.55
            });
            edges = new THREE.LineSegments(edgeGeo, edgeMat);
            mesh.add(edges);

            // Lighting: cool key + warm orange rim.
            scene.add(new THREE.AmbientLight(0x223066, 0.9));
            const key = new THREE.DirectionalLight(0xdfe6ff, 1.1);
            key.position.set(3, 4, 5);
            scene.add(key);
            glowLight = new THREE.PointLight(0xff7e5f, 30, 20, 2);
            glowLight.position.set(-3, -1.5, 3);
            scene.add(glowLight);

            const onResize = () => {
                if (disposed) return;
                const { w, h } = size();
                if (!w || !h) return;
                camera.aspect = w / h;
                camera.updateProjectionMatrix();
                renderer.setSize(w, h, false);
            };

            const isDesktop = window.matchMedia('(min-width: 768px)').matches;
            const onPointer = (e) => {
                // Flat, calm version on small screens: no pointer parallax.
                if (!isDesktop) return;
                pointer.tx = (e.clientX / window.innerWidth - 0.5) * 2;
                pointer.ty = (e.clientY / window.innerHeight - 0.5) * 2;
            };
            const onScroll = () => {
                scrollY = window.scrollY || 0;
            };

            window.addEventListener('resize', onResize);
            window.addEventListener('pointermove', onPointer, { passive: true });
            window.addEventListener('scroll', onScroll, { passive: true });

            let last = performance.now();
            const render = (now) => {
                if (disposed) return;
                const dt = Math.min((now - last) / 1000, 0.05);
                last = now;

                // Ease pointer toward target for smooth motion.
                pointer.x += (pointer.tx - pointer.x) * 0.05;
                pointer.y += (pointer.ty - pointer.y) * 0.05;

                mesh.rotation.y += dt * 0.28;
                mesh.rotation.x = pointer.y * 0.4 + Math.sin(now / 4000) * 0.12;
                mesh.rotation.z = pointer.x * 0.15;
                mesh.position.y = -scrollY * 0.0012;

                renderer.render(scene, camera);
                rafId = requestAnimationFrame(render);
            };
            rafId = requestAnimationFrame(render);
            ready = true;

            // Store cleanup for the outer scope.
            cleanup = () => {
                disposed = true;
                cancelAnimationFrame(rafId);
                window.removeEventListener('resize', onResize);
                window.removeEventListener('pointermove', onPointer);
                window.removeEventListener('scroll', onScroll);
                geometry.dispose();
                material.dispose();
                edgeGeo.dispose();
                edgeMat.dispose();
                renderer.dispose();
            };
        }

        let cleanup = () => {};
        init();

        return () => cleanup();
    });
</script>

<div class="stage" aria-hidden="true">
    <div class="glow"></div>
    <!-- Static poster frame: always rendered, hidden once the live scene is up. -->
    <div class="poster" class:hidden={ready && !failed}>
        <img src="/assets/logo-mark-white.svg" alt="" class="poster-mark" />
    </div>
    <canvas bind:this={canvas} class="scene" class:visible={ready && !failed}></canvas>
</div>

<style>
    .stage {
        position: relative;
        width: 100%;
        aspect-ratio: 1 / 1;
        max-width: 520px;
        margin: 0 auto;
    }

    .glow {
        position: absolute;
        inset: 0;
        background: radial-gradient(
            circle at 50% 45%,
            rgba(255, 126, 95, 0.34),
            rgba(255, 126, 95, 0.08) 40%,
            transparent 68%
        );
        filter: blur(6px);
        pointer-events: none;
    }

    .scene {
        position: relative;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: opacity 0.8s var(--ease-out);
    }

    .scene.visible {
        opacity: 1;
    }

    .poster {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity 0.6s var(--ease-out);
    }

    .poster.hidden {
        opacity: 0;
    }

    .poster-mark {
        width: 46%;
        height: auto;
        filter: drop-shadow(0 20px 50px rgba(255, 126, 95, 0.35));
        animation: float 6s ease-in-out infinite;
    }

    @keyframes float {
        0%, 100% { transform: translateY(-6px); }
        50% { transform: translateY(6px); }
    }

    @media (prefers-reduced-motion: reduce) {
        .poster-mark { animation: none; }
    }
</style>
