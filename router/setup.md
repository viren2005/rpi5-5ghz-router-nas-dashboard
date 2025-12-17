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
