# Hardware Components

## Compute Platform
The Raspberry Pi 5 was selected due to its improved CPU performance,
USB bandwidth, and ability to simultaneously handle routing,
storage, and monitoring workloads.

---
## Wi-Fi Interfaces
External USB Wi-Fi adapters were used instead of the onboard radio to:
- Enable stable 5 GHz operation
- Support external antennas
- Allow driver-level experimentation

The following adapters were tested during development:

- **ALFA AWUS036ACM (2 SMA ports)**  
  MediaTek MT7612U chipset, used for stable 5 GHz Access Point operation
  with in-kernel driver support.

- **ALFA AWUS036ACS (1 SMA port)**  
  Realtek 8812AU/8821AU chipset, evaluated using out-of-tree drivers
  for comparative performance and driver behavior analysis.


---

## Antennas
Both omnidirectional and directional antennas were used.
Directional testing was performed using a Vivaldi antenna,
enabling focused coverage and propagation experiments.

---

## Storage
An external USB hard drive was used to provide NAS functionality.
The storage subsystem was configured to coexist with routing
and monitoring services without significant performance degradation.

---
