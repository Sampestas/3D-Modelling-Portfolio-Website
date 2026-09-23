export function init_pipeline_manager() {
    const steps = document.querySelectorAll(".pipeline-step");
    const container = document.querySelector(".pipeline-container");

    if (!steps.length || !container) return;

    steps.forEach((step) => {
        const setStepActive = () => {
            steps.forEach(s => s.classList.remove("active"));
            step.classList.add("active");
            container.setAttribute("data-active-stage", step.getAttribute("data-step"));
        };

        step.addEventListener("mouseenter", setStepActive);
        step.addEventListener("click", setStepActive);
    });
}
