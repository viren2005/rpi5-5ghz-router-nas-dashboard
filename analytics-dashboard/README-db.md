# Wi-Fi Analytics Dashboard

This module implements a lightweight web-based analytics dashboard
for monitoring Wi-Fi Access Point behavior on the Raspberry Pi router.

The dashboard provides:
- Real-time AP information (SSID, channel, frequency, bandwidth)
- Connected client statistics (RSSI, TX/RX rates)
- RSSI logging to CSV for offline analysis
- Authenticated file access to the NAS via a web interface

The dashboard is designed to run locally on the router and is
intended for observability, experimentation, and debugging rather
than end-user administration.
