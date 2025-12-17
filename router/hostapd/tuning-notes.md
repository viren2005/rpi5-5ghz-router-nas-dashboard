# hostapd Tuning Notes

This repository provides multiple `hostapd` configurations to account
for differences in USB Wi-Fi adapter capabilities and driver behavior.

---

## Configuration Overview

- **`hostapd.conf`**  
  Default 2.4 GHz configuration for maximum compatibility with most
  external USB Wi-Fi adapters.

- **`hostapd-5ghz-acm.conf`**  
  5 GHz 802.11ac (VHT) configuration for ALFA AWUS036ACM
  (MediaTek MT76x2U), intended for high-throughput testing.

- **`hostapd-5ghz-acs.conf`**  
  5 GHz 802.11n (HT-only) configuration for ALFA AWUS036ACS,
  prioritizing stability and directional antenna experiments.

---

## Adapter Trade-offs

**AWUS036ACM**
- Supports VHT, wider channels, and detailed link metrics via `iw`
- Dual-SMA design can introduce RF leakage with directional antennas
- Best suited for throughput and link-level analysis

**AWUS036ACS**
- Single SMA port simplifies RF behavior with directional antennas
- Does not reliably support VHT AP mode
- Limited visibility into TX/RX rates via `iw`
- Prioritizes stability over peak throughput

---

## Design Rationale

Configurations are kept separate to reflect real-world hardware
constraints and to allow informed adapter selection based on
performance, stability, and measurement needs.
