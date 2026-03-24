# Changelog

## [1.0.5] - 2026-03-24

### Zmieniono
- Workflow najpierw pushuje tag na GitHub przed stworzeniem release

## [1.0.4] - 2026-03-24

### Zmieniono
- Release notes zawierają tylko sekcję aktualnej wersji (nie cały changelog)

## [1.0.3] - 2026-03-24

### Zmieniono
- Zastąpiono gh CLI czystym curl do GitHub API

## [1.0.2] - 2026-03-24

### Zmieniono
- Poprawiono workflow release — zastąpiono softprops/action-gh-release czystym curl + gh CLI

## [1.0.1] - 2026-03-24

### Zmieniono
- Plik JS przeniesiony z `dist/` do root
- Dodano workflow automatycznego release (Forgejo → GitHub)
- Dodano LICENSE, .gitignore

## [1.0.0] - 2026-03-24

### Dodano
- 9 zakładek: Osoby, Energia, Vaillant, Metering, TP-Link, Kamery, Auta, Proxmox, Alerty
- Zakładka Osoby: lokalizacja, bateria, kroki, mini-mapa z pinezkami
- Zakładka Energia: moc całkowita live, napięcia L1/L2/L3 z mocami, top odbiorniki
- Zakładka Vaillant: termostaty CO + CWU ze sterowaniem przez WebSocket, dane kotła, MyVaillant API
- Zakładka Metering: Tauron AMIplus (szczyt/poza/noc), myORLEN gaz, EcoWater, zmywarka Haier hOn
- Zakładka TP-Link: Zosia, aktualizacje firmware, wizualizacja portów PoE (R01/SW01/SW02/SW03), drukarka HP
- Zakładka Kamery: grid HIKVISION NVR, focus view z klikalną miniaturą, status dysku, live refresh co 10s
- Zakładka Auta: KIA Sportage + Renault Captur, paliwo, zasięg, przebieg, blokada
- Zakładka Proxmox: node stats, LXC kontenery z CPU/RAM, QEMU maszyny wirtualne
- Zakładka Alerty: reguły definiowane w YAML z badge licznika na tab
- Zegar live w nagłówku
- Dynamiczne kolory stanów (bateria, napięcia, ciśnienie CO, sól EcoWater)
- Rejestracja jako custom card w HACS
