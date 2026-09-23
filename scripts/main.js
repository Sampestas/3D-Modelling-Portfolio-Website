import { init_wireframe_view_for_mobile } from "./bento-grid-manager.js";
import { init_pipeline_manager } from "./services_section.js";

function init() {
    init_wireframe_view_for_mobile();
    init_pipeline_manager();
}

document.addEventListener("DOMContentLoaded", init);