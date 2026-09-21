export function init_wireframe_view_for_mobile(){
    const interactiveWireCard = document.querySelector(".interactive-wire");
    
    if (interactiveWireCard) {
        interactiveWireCard.addEventListener("touchstart", function() {
            this.classList.toggle("active-tap");
        }, { passive: true });
    }

    const header = document.querySelector(".site-header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = "rgba(11, 7, 17, 0.95)";
        } else {
            header.style.backgroundColor = "var(--black-matte)";
        }
    });
}