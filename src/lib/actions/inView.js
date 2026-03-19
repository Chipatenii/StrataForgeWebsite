export function inView(node) {
    let observer;

    const handleIntersect = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                node.classList.add('in-view');
            }
        });
    };

    observer = new IntersectionObserver(handleIntersect, {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    });

    observer.observe(node);

    return {
        destroy() {
            if (observer) {
                observer.unobserve(node);
            }
        }
    };
}
