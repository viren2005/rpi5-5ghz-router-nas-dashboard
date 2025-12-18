# Raspberry Pi 5 – Wireless Router with NAS and Analytics Dashboard

A Raspberry Pi 5–based wireless router integrating a 5 GHz Wi-Fi Access Point,
a Samba-based Network Attached Storage (NAS), and a secure web-based analytics
dashboard. The project emphasizes real-world wireless performance,
observability, and system-level design on embedded Linux platforms.

---

## Project Overview

This project explores how commodity embedded hardware can be used to build
a fully functional wireless router while retaining low-level visibility
into Wi-Fi behavior and system performance.

The system operates as:
- A Linux-based wireless router with NAT and DHCP
- A Wi-Fi Access Point using external USB adapters
- A Samba file server accessible to Wi-Fi clients
- A monitoring platform exposing live Wi-Fi metrics through a web UI

In addition to standard omnidirectional antennas, the router was successfully
tested with a **directional Vivaldi antenna**, enabling focused-coverage and
propagation-oriented experiments.

---

## Key Features

- External USB Wi-Fi adapter support
- 2.4 GHz and 5 GHz Access Point configurations
- Directional and omnidirectional antenna compatibility (including Vivaldi antenna)
- Adapter-specific hostapd tuning for stability and throughput
- Ethernet-to-Wi-Fi routing with NAT
- Samba-based NAS for shared storage
- Web-based analytics dashboard with login authentication
- Live Wi-Fi metrics (RSSI, bitrate, link statistics)
- systemd-managed services for automatic startup

---

## System Architecture (High Level)

- **WAN:** Ethernet (`eth0`)
- **LAN:** Wi-Fi Access Point (`wlan0`)
- **Routing:** Linux kernel IP forwarding + NAT
- **Storage:** External USB storage via Samba
- **Control Plane:** Flask-based analytics dashboard
- **Monitoring:** `iw` and related Linux networking tools

Detailed architecture and design documentation is available in the `docs/`
directory.

---

## Repository Structure

- **docs/** – System-level design and explanations  
- **router/** – Wi-Fi AP, NAT, DHCP, and routing configuration  
- **nas/** – Storage mounting and Samba configuration  
- **analytics-dashboard/** – Web UI, backend, and systemd service  

---

## Branches

- **main** – Stable and reproducible configuration  
- **router-core** – Wi-Fi AP setup, hostapd tuning, and routing  
- **nas-samba** – NAS and storage configuration  
- **analytics-dashboard** – Web dashboard and monitoring services  

---

## Intended Use

This project is intended as:
- A research and prototyping platform
- A learning resource for Linux networking and Wi-Fi systems
- A foundation for experiments involving antennas, propagation,
  and link-level analysis

It is **not** intended to replace consumer-grade commercial routers.

---

## Disclaimer

Wireless performance depends heavily on:
- Adapter drivers and firmware
- Regulatory domain constraints
- Antenna characteristics
- Environmental interference

Results may vary across hardware and deployment environments.

---

## License

This project is released under the **MIT License**.
See the `LICENSE` file for details.

---

## Author

Developed by **Viren Kataria** as part of research and internship work
in wireless communication systems and embedded networking.
