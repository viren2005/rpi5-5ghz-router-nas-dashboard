# System Architecture

## Overview
This project implements a Raspberry Pi 5–based wireless router operating on the 5 GHz band,
integrated with a Samba-based Network Attached Storage (NAS) and a web-based analytics dashboard.

The system is designed to study real-world constraints in deploying high-speed wireless
communication systems on embedded Linux platforms, with emphasis on observability,
antenna behavior, and link-level performance.

In addition to omnidirectional antennas, the system was successfully tested using
a directional Vivaldi antenna, demonstrating stable operation and compatibility
with focused-coverage experiments.

---

## High-Level Architecture
The system functions as a self-contained networking appliance combining routing,
storage, and monitoring on a single embedded platform.

It is organized into four logical layers:

1. **Network Access Layer** – Ethernet and Wi-Fi connectivity  
2. **Routing and NAT Layer** – Packet forwarding and address translation  
3. **Storage Layer (NAS)** – Shared file access over the LAN  
4. **Monitoring and Control Layer** – Metrics collection and visualization  

---

## Data Flow
- Internet access enters through Ethernet (`eth0`)
- Traffic is routed and NATed by the Raspberry Pi
- Clients connect via a 5 GHz Access Point (`wlan0`)
- NAS requests are served locally via Samba
- Wi-Fi metrics are collected and exposed through the dashboard

---

## Antenna and Propagation Considerations
Directional antennas such as a Vivaldi antenna were used to evaluate focused coverage
and propagation behavior. The system operated reliably without requiring
software or driver changes, validating antenna-agnostic design at the network layer.

---
