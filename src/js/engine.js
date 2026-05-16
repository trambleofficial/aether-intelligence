import { initAetherGrid, initCustomCursor } from './visual.js';
import { streamData } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Visuals
    initAetherGrid();
    initCustomCursor();

    // Lucide Icons
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // Page Specific Logic
    if (document.getElementById('consoleStream')) {
        streamData('consoleStream');
    }
});
