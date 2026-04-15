#!/usr/bin/env bash
set -e

ROOT="$(cd "$(dirname "$0")/.." && pwd)"

echo ""
echo "=== TaskTrace — manual publish ==="
echo ""

# 1. check auth
echo "→ checking npm auth..."
npm whoami || { echo "ERROR: not logged in. Run: npm login"; exit 1; }

# 2. build
echo ""
echo "→ building all packages..."
cd "$ROOT"
bun run build

# 4. verify artifacts
echo ""
echo "→ verifying build artifacts..."
for pkg in core cli adapter-clickup mcp-server; do
  test -f "$ROOT/packages/$pkg/dist/index.js" \
    || { echo "ERROR: packages/$pkg/dist/index.js not found"; exit 1; }
done
echo "   all artifacts OK"

# 5. publish in dependency order
echo ""
PACKAGES=("core" "adapter-clickup" "cli" "mcp-server")

for pkg in "${PACKAGES[@]}"; do
  dir="$ROOT/packages/$pkg"
  name=$(node -p "require('$dir/package.json').name")
  version=$(node -p "require('$dir/package.json').version")

  echo "→ publishing $name@$version..."
  npm publish "$dir" --access public
  echo "   ✓ $name@$version published"
done

echo ""
echo "=== all packages published ==="
echo ""
echo "  npm: https://www.npmjs.com/org/tasktrace"
echo ""
