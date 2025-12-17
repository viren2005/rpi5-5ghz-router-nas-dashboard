## Wi-Fi Adapter and Driver Constraints

Different USB Wi-Fi adapters exhibit trade-offs between feature support,
driver maturity, and physical RF behavior.

The **ALFA AWUS036ACM** (MediaTek MT76x2U chipset) supports advanced
802.11ac features such as VHT operation, wider channel widths,
and detailed link statistics (TX/RX bitrate, MCS, RSSI) exposed through
standard Linux tools like `iw`.

However, when used with a directional **Vivaldi antenna**, the dual-SMA
antenna design introduces practical limitations. With one SMA port
left unterminated or connected to a secondary antenna,
unintended RF leakage and coupling effects were observed.
This impacts radiation purity and reduces the effectiveness of
highly directional antenna experiments unless careful termination
or isolation is applied.

In contrast, the **ALFA AWUS036ACS** uses a single SMA antenna port,
which simplifies directional antenna experiments and avoids leakage
from an unused RF chain. However, this adapter does not support
the full VHT feature set and does not expose detailed TX/RX rate
information through `iw`, limiting visibility into link-level
performance metrics.

As a result, adapter selection involves a trade-off between:
- Advanced PHY/MAC feature visibility and configurability
- RF simplicity and suitability for directional antenna experiments
- Driver capabilities and metric observability

## Throughput vs Range Trade-Off
Increasing channel width improves throughput
but reduces effective range and stability.
A balanced configuration was selected.

---

## Monitor Mode Limitation
A single Wi-Fi interface cannot operate as an Access Point
and remain in monitor mode simultaneously.

---

## USB Bandwidth and Power
High-speed USB devices share a common bus,
which may introduce contention under heavy load.

---

## Scope
This system is intended for research and prototyping,
not as a consumer-grade router replacement.
