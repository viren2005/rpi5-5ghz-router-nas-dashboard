# IP Forwarding and NAT

## Purpose
By default, Linux does not forward packets between network interfaces.
To function as a router, the Raspberry Pi must be explicitly configured
to forward traffic between the LAN (Wi-Fi) and WAN (Ethernet).

---

## IP Forwarding
IP forwarding allows the kernel to pass packets between interfaces.
Without it, Wi-Fi clients can connect to the Access Point
but cannot access external networks.

---

## Network Address Translation (NAT)
NAT is required to allow multiple Wi-Fi clients
to share a single public IP address provided via Ethernet.

Masquerading is used so that outbound packets appear
to originate from the Raspberry Pi’s Ethernet interface.

---

## Packet Flow Summary
1. Client sends packet via Wi-Fi (wlan0)
2. Packet is forwarded by the kernel
3. Source address is translated (MASQUERADE)
4. Packet exits via Ethernet (eth0)
5. Return traffic is automatically routed back
