<script>
    // A contribution-style grid: one cell per working day of the last year.
    // Dense stretches read as build phases, quiet ones as review and testing.
    // The pattern is deterministic (seeded), atmospheric rather than measured.
    const WEEKS = 52;
    const DAYS = 7;

    // Small seeded PRNG so the grid is stable between renders.
    function makeRand(seed) {
        let s = seed >>> 0;
        return () => {
            s = (s * 1664525 + 1013904223) >>> 0;
            return s / 4294967296;
        };
    }

    function buildGrid() {
        const rand = makeRand(20260903);
        const cols = [];
        for (let w = 0; w < WEEKS; w++) {
            // A slow wave sets the "phase" of the week: peaks are build sprints.
            const phase = (Math.sin(w / 4.2) + 1) / 2; // 0..1
            const col = [];
            for (let d = 0; d < DAYS; d++) {
                const weekend = d === 0 || d === 6;
                let base = phase * 3.2 + rand() * 1.8 - (weekend ? 1.6 : 0);
                let level = Math.max(0, Math.min(4, Math.round(base)));
                col.push(level);
            }
            cols.push(col);
        }
        return cols;
    }

    const grid = buildGrid();
</script>

<div class="activity" role="img" aria-label="A year of studio activity, shown as a contribution grid of build and review phases.">
    <div class="grid">
        {#each grid as col, w (w)}
            <div class="col">
                {#each col as level, d (d)}
                    <span class="cell" data-level={level}></span>
                {/each}
            </div>
        {/each}
    </div>
    <div class="legend">
        <span>Quieter</span>
        <span class="cell" data-level="0"></span>
        <span class="cell" data-level="1"></span>
        <span class="cell" data-level="2"></span>
        <span class="cell" data-level="3"></span>
        <span class="cell" data-level="4"></span>
        <span>Busier</span>
    </div>
</div>

<style>
    .activity {
        overflow-x: auto;
        padding-bottom: 6px;
    }

    .grid {
        display: flex;
        gap: 4px;
        min-width: max-content;
    }

    .col {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .cell {
        width: 12px;
        height: 12px;
        border-radius: 3px;
        background: var(--surface-2);
        display: inline-block;
    }

    .cell[data-level='1'] { background: rgba(255, 126, 95, 0.28); }
    .cell[data-level='2'] { background: rgba(255, 126, 95, 0.5); }
    .cell[data-level='3'] { background: rgba(255, 126, 95, 0.74); }
    .cell[data-level='4'] { background: var(--orange); }

    .legend {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-top: 16px;
        font-size: 0.78rem;
        color: var(--text-muted);
        font-family: var(--font-mono);
    }

    .legend .cell {
        width: 11px;
        height: 11px;
    }
</style>
