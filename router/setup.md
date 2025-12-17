# Router Setup Guide

This document describes the step-by-step process used to configure
the Raspberry Pi 5 as a 5 GHz wireless router.

The guide assumes a fresh installation of Raspberry Pi OS
and focuses on stability and reproducibility rather than experimentation.

---

## System Assumptions
- Raspberry Pi 5
- Raspberry Pi OS (Bookworm)
- Active Ethernet connection for WAN access
- External USB Wi-Fi adapter capable of AP mode
- Root or sudo access

---

## High-Level Steps
1. Base system preparation
2. NetworkManager configuration
3. Wi-Fi Access Point setup (hostapd)
4. DHCP and DNS configuration (dnsmasq)
5. IP forwarding and NAT
6. Verification and validation

## Wi-Fi Interface Naming and Onboard Wi-Fi

Raspberry Pi boards include an onboard Wi-Fi interface that is
typically enumerated as `wlan0`. When using an external USB Wi-Fi
adapter for Access Point operation, this can cause interface
numbering conflicts and configuration errors.

To ensure predictable behavior, the onboard Wi-Fi interface was
disabled, allowing the external USB adapter to be consistently
assigned as `wlan0`.

This simplifies configuration and avoids ambiguity in
hostapd, iptables, and monitoring tools.

Users following this guide should verify interface names using
standard Linux networking tools before proceeding.

### Security Note

All configuration files use placeholder SSIDs and passwords.
Users must change these values before deployment.

Never commit real credentials to version control.
