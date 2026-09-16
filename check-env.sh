#!/bin/bash
echo "=== Vérification environnement CDA 2026 ==="
echo ""
# Git
echo -n "Git: "
git --version 2>/dev/null && echo "" || echo "❌ Non installé"
# Node.js
echo -n "Node.js: "
node --version 2>/dev/null && echo "" || echo "❌ Non installé"
# npm
echo -n "npm: "
npm --version 2>/dev/null && echo "" || echo "❌ Non installé"
# Java
echo -n "Java: "
java -version 2>/dev/null && echo "" || echo "❌ Non installé"
# Python (optionnel)
echo -n "Python: "
python --version 2>/dev/null && echo "" || echo "⚠️ Optionnel"
# MySQL
echo -n "MySQL: "
mysql --version 2>/dev/null && echo "" || echo "⚠️ À installer"
# Docker (optionnel)
echo -n "Docker: "
docker --version 2>/dev/null && echo "" || echo "⚠️ Optionnel (avancé)"
# VSCode
echo -n "VSCode: "
code --version 2>/dev/null && echo "" || echo "❌ Non installé"
echo ""
echo "=== Vérification GitHub SSH ==="
ssh -T git@github.com 2>&1 | grep -q "successfully" && echo " SSH GitHub
OK" || echo "❌ Configurer SSH GitHub"
echo ""
echo "=== Fin de la vérification ==="