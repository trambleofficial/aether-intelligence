/**
 * Aether Cybernetic Data Stream
 */

const dataFragments = [
    "UPLINK_ESTABLISHED: NODE_01",
    "DECRYPTING_PACKET_772...",
    "AETHER_OS_V4.0_CORE: STATUS_OPTIMAL",
    "SIGNAL_STRENGTH: 98.4%",
    "NEURAL_MESH_SYNC: COMPLETE",
    "WARNING: BUFFER_OVERFLOW_PREVENTED",
    "BYPASSING_FIREWALL_LAYER_7...",
    "DATA_PACKET_RECEIVED: 12.4GB",
    "LATENCY: 2ms",
    "ENCRYPTION_KEY: 0x8F22...A4B"
];

export function streamData(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    function addFragment() {
        const line = document.createElement('div');
        line.className = 'mb-1 font-mono text-[10px] text-white/40 uppercase';
        line.innerHTML = `<span class="text-aether-lime mr-2">>></span> ${dataFragments[Math.floor(Math.random() * dataFragments.length)]}`;
        
        container.appendChild(line);
        container.scrollTop = container.scrollHeight;

        if (container.childNodes.length > 40) {
            container.removeChild(container.firstChild);
        }
    }

    setInterval(addFragment, 800);
}
