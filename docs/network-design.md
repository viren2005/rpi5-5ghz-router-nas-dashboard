# Network Design

## Interface Roles
- `eth0` – WAN (Internet uplink)
- `wlan0` – LAN (5 GHz Access Point)

The Raspberry Pi operates as a gateway between these interfaces.

---

## IP Addressing
The wireless LAN operates on a private IPv4 subnet.
IP addresses are assigned dynamically to clients using DHCP.

---

## Routing and NAT
IP forwarding is enabled at the kernel level.
Network Address Translation allows multiple LAN clients
to share a single upstream Internet connection.

---

## DHCP and DNS
A lightweight DHCP/DNS service provides:
- Automatic client configuration
- Local name resolution
- Minimal system overhead

---

## Security Model
- WPA2-Personal is used for Wi-Fi authentication
- NAS access is user-authenticated
- Management services are not exposed to the WAN
