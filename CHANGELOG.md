# Changelog

## [1.2.0] - 2026-03-27

### Poprawiono
- Zakładka Vaillant: usunięto kafelek "Strefa kaloryfery", status Harmonogram przeniesiony do kafelka Ogrzewanie CO
- Zakładka Vaillant: naprawiono zmianę temperatury CO — obsługa encji używających `target_temp_high` zamiast `temperature`
- Zakładka Vaillant: ustawienia `input_number` — wartości wyświetlane z 2 miejscami po przecinku
- Zakładka Vaillant: wykres zużycia gazu 30-dniowy — naprawiono puste słupki (usunięto time-axis), skumulowane słupki ogrzewanie+CWU
- Zakładka Vaillant: wykres miesięczny gazu — naprawiono kolejność miesięcy (merge po kluczu rok-miesiąc)
- Zakładka Metering: EcoWater "Dziś zużyto" i "Usunięto kamień" wyświetlane z 2 miejscami po przecinku
- Zakładka Metering: zmywarka Haier hOn — odwrócono logikę statusów drzwi, soli i nabłyszczacza
- Zakładka Kamery: powiększono okno aktywnego podglądu (max-height 600px, object-fit contain)
- Zakładka Auta: format daty ostatniej pozycji zmieniony na dd-mm-yyyy hh:mm:ss
- Zakładka Auta/Osoby: mapy inicjalizowane przez `loadCardHelpers` + `createCardElement` — poprawna renderyzacja kafelków map

## [1.1.0] - 2026-03-26

### Dodano
- Zakładka Vaillant: sekcja Ustawienia — edycja encji `input_number` przyciskami +/−, konfigurowana przez `vaillant.settings[]` w YAML (step/min/max z atrybutów encji)

### Poprawiono
- Zakładka Osoby: mapa `ha-map` nie mruga — aktualizacje hass odświeżają tylko karty osób in-place, mapa pozostaje nietknieta
- Zakładka Kamery: wyeliminowano mruganie (ciemny ekran) — pane nie jest przebudowywany przy aktualizacjach hass, obrazy są odświeżane przez interval
- `ha-map`: element dołączany do DOM przed ustawieniem właściwości (poprawka inicjalizacji)

## [1.0.8] - 2026-03-26

### Dodano
- Zakładka Osoby: prawdziwa mapa `ha-map` z GPS zamiast pinezek CSS
- Zakładka Energia: podział zużycia na taryfy G13s (szczytowa/pozaszczytowa/nocna) — dzienne i miesięczne
- Zakładka Energia: sortowanie top odbiorników live od największego poboru
- Zakładka Vaillant: wykresy temperatur (zasilanie, powrót, docelowa, dom, zewnętrzna) — 24h historia
- Zakładka Vaillant: wykresy zużycia gazu (ogrzewanie + CWU) — ostatnie 30 dni i 12 miesięcy
- Zakładka Kamery: poprawiono ładowanie obrazów przez `/api/camera_proxy/` z tokenem autoryzacji
- Zakładka Kamery: powiększono okno focus view (aspect-ratio 16/9, max 480px)
- Zakładka Auta: ilość paliwa w litrach obok procentów
- Zakładka Auta: status połączenia (Online/Offline) z encji `connection`
- Zakładka Auta: ostatnia lokalizacja z `device_tracker` (strefa lub adres)
- Zakładka Auta: mapa `ha-map` per pojazd z pozycją GPS

## [1.0.7] - 2026-03-24

### Zmieniono
- Dodano screenshot dashboardu do README
- Poprawiono odznaki w README (wskazywały na złe repo)
- Usunięto duplikat changelogu z README

## [1.0.6] - 2026-03-24

### Zmieniono
- Workflow tworzy tag na GitHub przez target_commitish zamiast git push

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
