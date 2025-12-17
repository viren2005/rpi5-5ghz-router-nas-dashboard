# Analytics Dashboard Setup

This document describes how the Wi-Fi analytics dashboard
was deployed on the Raspberry Pi router.

---

## Dependencies

- Python 3
- Flask
- iw (wireless tools)
- systemd
- Access to wlan interface in AP mode

A Python virtual environment is used to isolate dependencies.

---

## Application Layout

The dashboard consists of:
- A Flask backend that invokes `iw` to collect Wi-Fi metrics
- A web frontend rendered using Jinja2 templates
- A simple session-based authentication system
- Optional CSV-based logging for RSSI and bitrate data

---

## Authentication Model

The dashboard uses a local username/password system
stored in a JSON file.

Passwords are hashed and verified at login.
Unauthenticated users are redirected to the login page.

Actual credentials are not stored in this repository.
An example user database format is provided.

---

## NAS Integration

The dashboard includes a file browser that exposes
the mounted NAS directory over HTTP.

Path traversal is explicitly prevented, and all access
is restricted to authenticated users.

---

## Logging

When enabled, station-level metrics are periodically
logged to CSV files stored in the `logs/` directory.

These logs are intended for offline analysis and
propagation studies.
