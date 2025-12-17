# NAS Setup Guide

This document describes the procedure used to configure
the Raspberry Pi as a Network Attached Storage (NAS)
accessible to Wi-Fi clients connected to the router.

The NAS setup is designed to integrate cleanly with
the routing and Wi-Fi subsystems without introducing
permission or ownership conflicts.

---

## System Assumptions
- External USB storage device
- Raspberry Pi OS
- Router functionality already configured
- Root or sudo access

---

## High-Level Steps
1. Identifying and mounting external storage
2. Configuring persistent mounts
3. Managing ownership and permissions
4. Installing and configuring Samba
5. Creating Samba users
6. Verifying client access

Each step is detailed below.
