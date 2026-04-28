// Animates a numeric textContent from 0 → target when the node enters the viewport.
// Pass a number, or a string like "20+" / "4+" — the suffix is preserved.
//
// Usage in markup:
//   <span use:countUp={'20+'}>20+</span>
//   <span use:countUp={{ value: 4, suffix: '+', duration: 1400 }}>4+</span>

export function countUp(node, options) {
    const opts = parseOptions(options);
    let target = opts.value;
    let suffix = opts.suffix;
    let duration = opts.duration;

    const reduceMotion = typeof window !== 'undefined'
        && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || !Number.isFinite(target)) {
        node.textContent = `${target}${suffix}`;
        return { destroy() {} };
    }

    node.textContent = `0${suffix}`;
    let started = false;
    let rafId = 0;

    const start = () => {
        if (started) return;
        started = true;

        const startTime = performance.now();
        const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

        const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const current = Math.round(easeOutCubic(progress) * target);
            node.textContent = `${current}${suffix}`;
            if (progress < 1) {
                rafId = requestAnimationFrame(tick);
            }
        };

        rafId = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    start();
                    observer.unobserve(node);
                }
            });
        },
        { threshold: 0.4 }
    );

    observer.observe(node);

    return {
        update(newOptions) {
            const next = parseOptions(newOptions);
            target = next.value;
            suffix = next.suffix;
            duration = next.duration;
        },
        destroy() {
            observer.disconnect();
            cancelAnimationFrame(rafId);
        }
    };
}

function parseOptions(input) {
    if (typeof input === 'number') {
        return { value: input, suffix: '', duration: 1200 };
    }
    if (typeof input === 'string') {
        const match = input.match(/^(\d+)(.*)$/);
        if (match) {
            return { value: parseInt(match[1], 10), suffix: match[2], duration: 1200 };
        }
        return { value: NaN, suffix: input, duration: 1200 };
    }
    if (input && typeof input === 'object') {
        return {
            value: Number(input.value),
            suffix: input.suffix ?? '',
            duration: input.duration ?? 1200
        };
    }
    return { value: 0, suffix: '', duration: 1200 };
}
