#!/bin/sh
# Idempotent preview startup. Probe the app and start it only if down.
set -e
cd /workspace
if curl -sf -o /dev/null --max-time 2 http://127.0.0.1:8080/; then
  exit 0
fi
npm run dev > /tmp/air-dev.log 2>&1 &
exit 0
