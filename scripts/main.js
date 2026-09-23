import { init_wireframe_view_for_mobile } from "./bento-grid-manager.js";
import { init_pipeline_manager } from "./services_section.js";
import { LanguageManager } from "./language-manager.js";

function init() {
    const langManager = new LanguageManager();
    langManager.init();

    init_wireframe_view_for_mobile();
    init_pipeline_manager();
}

document.addEventListener("DOMContentLoaded", init);