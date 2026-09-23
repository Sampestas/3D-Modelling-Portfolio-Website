export function init_wireframe_view_for_mobile() {
    const cards = document.querySelectorAll(".interactive-wire");

    cards.forEach((card) => {
        const showWire = () => card.classList.add("active-tap");
        const hideWire = () => card.classList.remove("active-tap");

        if (window.PointerEvent) {
            card.addEventListener("pointerdown", (e) => {
                if (e.pointerType === "mouse") return;
                showWire();
            });
            card.addEventListener("pointerup", (e) => {
                if (e.pointerType === "mouse") return;
                hideWire();
            });
            card.addEventListener("pointercancel", hideWire);
            card.addEventListener("pointerleave", hideWire);
        } else {
            card.addEventListener("touchstart", showWire, { passive: true });
            card.addEventListener("touchend", hideWire, { passive: true });
            card.addEventListener("touchcancel", hideWire, { passive: true });
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
