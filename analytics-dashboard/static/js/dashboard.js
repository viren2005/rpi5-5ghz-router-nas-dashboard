const STATUS_URL = "/api/status";
const POLL_MS = 1000;

function updateAp(ap) {
    const box = document.getElementById("ap-box");
    box.innerHTML = `
        <h2>Access Point Info</h2>
        <p><b>SSID:</b> ${ap?.ssid ?? "—"}</p>
        <p><b>Channel:</b> ${ap?.channel ?? "—"}</p>
        <p><b>Frequency:</b> ${ap?.freq ?? "—"} MHz</p>
        <p><b>Width:</b> ${ap?.width ?? "—"}</p>
    `;
}

function updateStations(stations) {
    const cont = document.getElementById("stations-container");
    cont.innerHTML = "<h2>Connected Devices</h2>";

    if (!stations || Object.keys(stations).length === 0) {
        cont.innerHTML += "<p>No connected devices</p>";
        return;
    }

    for (const [mac, s] of Object.entries(stations)) {
        const card = document.createElement("div");
        card.className = "card";

        const sig = s.signal ?? null;
        let color = "white";
        if (sig !== null) {
            if (sig > -55) color = "lightgreen";
            else if (sig > -70) color = "orange";
            else color = "red";
        }

        card.innerHTML = `
            <p><b>MAC:</b> ${mac}</p>
            <p><b>Signal:</b> <span style="color:${color}">${sig ?? "?"} dBm</span></p>
            <p><b>TX Rate:</b> ${s.tx ?? "—"} Mbps</p>
            <p><b>RX Rate:</b> ${s.rx ?? "—"} Mbps</p>
        `;
        cont.appendChild(card);
    }
}

async function fetchAndUpdate() {
    try {
        const r = await fetch(STATUS_URL, { cache: "no-store" });
        if (!r.ok) return;
        const data = await r.json();
        updateAp(data.ap);
        updateStations(data.stations);
    } catch (e) {
        console.error(e);
    }
}

function startLog() {
    fetch("/api/start_logging");
    document.getElementById("log-status").innerText =
        "Logging started (1s interval)";
}

function stopLog() {
    fetch("/api/stop_logging");
    document.getElementById("log-status").innerText =
        "Logging stopped";
}

window.addEventListener("load", () => {
    fetchAndUpdate();
    setInterval(fetchAndUpdate, POLL_MS);
});
