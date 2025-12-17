# NAS Setup Guide

This document describes the procedure used to configure
the Raspberry Pi as a Network Attached Storage (NAS)
accessible to Wi-Fi clients connected to the router.

---

## Step 1: Identify External Storage

External storage devices can be identified using standard
Linux block device tools.

The storage device is mounted at `/mnt/HDD` to keep
it clearly separated from system files.

---

## Step 2: Create Mount Point

A dedicated mount point is created for the external storage
to ensure predictable paths for Samba configuration.

---

## Step 3: Configure Persistent Mount

The storage device is mounted persistently using `/etc/fstab`
with ownership assigned to a non-root user.

This avoids permission issues when accessing files
via Samba.

An example entry is provided in `storage/fstab.example`.

---

## Step 4: Verify Ownership and Permissions

After mounting, ownership and permissions are verified
to ensure the user has full read/write access
to the mounted directory.

This step is critical for correct Samba operation.

---

## Step 5: Install and Configure Samba

Samba is installed to provide network file sharing
to authenticated users on the local network.

The configuration is kept minimal and restricted
to a single shared directory.

---

## Step 6: Create Samba User

A dedicated Samba user is created and added to the Samba
authentication database.

This user maps directly to the Linux user that owns
the mounted storage.

---

## Step 7: Verify Client Access

Clients connected to the Wi-Fi network can access
the NAS using standard SMB clients.

File creation, modification, and deletion are verified
to ensure correct permissions and ownership behavior.
