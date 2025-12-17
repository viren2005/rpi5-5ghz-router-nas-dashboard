# Samba User and Permission Model

The NAS uses a user-based access model to avoid
permission conflicts between the Linux filesystem
and Samba.

A non-root user is used consistently across:
- Storage ownership
- Samba authentication
- File creation and access

The mounted storage is owned by this user,
and Samba is configured to force file operations
to the same user and group.

This approach avoids common issues such as:
- Root-owned files created by Samba
- Permission mismatches between CLI and network access
- Inconsistent access across clients
