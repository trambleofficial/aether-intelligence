/**
 * Aether Visual Engine
 * Handles generative background motion and custom cursor
 */

export function initAetherGrid() {
    const grid = document.querySelector('.aether-grid');
    if (!grid) return;

    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 10;
        const y = (e.clientY / window.innerHeight - 0.5) * 10;
        
        grid.style.transform = `rotateX(${-y}deg) rotateY(${x}deg) scale(1.1)`;
    });
}

export function initCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'fixed w-10 h-10 border border-aether-lime pointer-events-none z-[100] mix-blend-difference transition-transform duration-100 ease-out';
    cursor.innerHTML = '<div class="absolute inset-0 flex items-center justify-center text-aether-lime text-[8px] font-mono">+</div>';
    document.body.appendChild(cursor);

    window.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX - 20}px`;
        cursor.style.top = `${e.clientY - 20}px`;
    });

    document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.style.transform = 'scale(1.5) rotate(45deg)');
        el.addEventListener('mouseleave', () => cursor.style.transform = 'scale(1) rotate(0deg)');
    });
}
