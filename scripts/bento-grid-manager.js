export function init_wireframe_view_for_mobile() {
    const cards = document.querySelectorAll(".interactive-hover");

    cards.forEach((card) => {
        const showHoverView = () => card.classList.add("active-tap");
        const hideHoverView = () => card.classList.remove("active-tap");
        if (window.PointerEvent) {
            card.addEventListener("pointerdown", (e) => {
                if (e.pointerType === "mouse") return;
                showHoverView();
            });
            card.addEventListener("pointerup", (e) => {
                if (e.pointerType === "mouse") return;
                hideHoverView();
            });
            card.addEventListener("pointercancel", hideHoverView);
            card.addEventListener("pointerleave", hideHoverView);
        } else {
            card.addEventListener("touchstart", showHoverView, { passive: true });
            card.addEventListener("touchend", hideHoverView, { passive: true });
            card.addEventListener("touchcancel", hideHoverView);
        }
    });

    const header = document.querySelector(".site-header");
    if (header) {
        window.addEventListener("scroll", () => {
            header.style.backgroundColor =
                window.scrollY > 50 ? "rgba(11, 7, 17, 0.95)" : "";
        });
    }
}
