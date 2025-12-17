#!/bin/bash

# Enable NAT so that Wi-Fi clients can access the Internet
# WAN  : eth0
# LAN  : wlan0
#
# This script assumes:
# - eth0 is connected to the Internet
# - wlan0 is the Access Point interface

# Flush existing rules to avoid duplicates
iptables -F
iptables -t nat -F

# Enable forwarding of established connections
iptables -A FORWARD -i eth0 -o wlan0 -m state --state RELATED,ESTABLISHED -j ACCEPT

# Allow forwarding from Wi-Fi clients to WAN
iptables -A FORWARD -i wlan0 -o eth0 -j ACCEPT

# Masquerade outbound traffic on eth0
iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
