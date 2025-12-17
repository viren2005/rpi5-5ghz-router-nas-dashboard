# Raspberry Pi 5 – 5 GHz Router with NAS and Analytics Dashboard

A Raspberry Pi 5–based high-performance wireless router operating on the 5 GHz band, integrated with a Samba Network Attached Storage (NAS) and a secure web-based analytics dashboard. The project focuses on real-world wireless performance, observability, and system-level design.

---

## Project Overview

This project explores how commodity embedded hardware can be used to build a fully functional wireless router while retaining low-level visibility into Wi-Fi behavior.

The system operates as:
- A 5 GHz 802.11ac Access Point
- A Linux-based router with NAT and DHCP
- A Samba file server accessible to Wi-Fi clients
- A monitoring platform exposing Wi-Fi link metrics through a web UI

In addition to standard omnidirectional antennas, the router was successfully tested with a **directional Vivaldi antenna**, demonstrating compatibility with focused-coverage and propagation experiments.

---

## Key Features

- 5 GHz Wi-Fi Access Point (802.11ac)
- External USB Wi-Fi adapter support
- Directional and omnidirectional antenna compatibility (including Vivaldi antenna)
- Optimized hostapd configuration for throughput–range trade-offs
- Ethernet-to-Wi-Fi routing with NAT
- Samba-based NAS for shared storage
- Web-based analytics dashboard with login authentication
- Live Wi-Fi metrics (RSSI, MCS, bitrate, expected throughput)
- systemd-managed services for automatic startup

---

## System Architecture (High Level)

- **WAN:** Ethernet (`eth0`)
- **LAN:** 5 GHz Wi-Fi Access Point (`wlan0`)
- **Routing:** Linux kernel IP forwarding + NAT
- **Storage:** External USB HDD via Samba
- **Control Plane:** Flask-based dashboard
- **Monitoring:** `iw`, `iperf3`, `tcpdump`

Detailed design documentation is available in the `docs/` directory.

---



---

## Branches

- **main** – Stable and reproducible configuration  
- **router-core** – Wi-Fi AP, hostapd tuning, NAT  
- **nas-samba** – NAS and storage setup  
- **analytics-dashboard** – Web UI and services   

---

## Intended Use

This project is intended as:
- A research and prototyping platform
- A learning tool for Linux networking and Wi-Fi systems
- A foundation for experiments involving antennas, propagation, and link-level analysis

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

This project is released under the **MIT License**. See the `LICENSE` file for details.

---

## Author

Developed by **Viren Kataria** as part of research and internship work on
wireless communication systems and embedded networking.

## Repository Structure
- **docs/** – System-level design and explanations  
- **router/** – Wi-Fi AP, NAT, DHCP, and routing setup  
- **nas/** – Storage mounting and Samba configuration  
- **analytics-dashboard/** – Web UI, backend, and systemd service  
- **monitoring/** – Wi-Fi metrics, throughput tests, packet capture

