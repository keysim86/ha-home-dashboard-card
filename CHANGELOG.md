# Changelog

## [1.4.1] - 2026-03-29

### Fixed
- Zakładka Home/Bramy: encje `lock.*` (np. Bramka) — poprawiono kolor stanu (`locked`=zielony, `unlocked`=czerwony) oraz działanie kliknięcia (wywołuje `lock.lock`/`lock.unlock` zamiast `cover.*`)

## [1.4.0] - 2026-03-29

### Added
- Zakładka Home: sekcja **Bramy i garaże** — kafelki `cover` z kolorem stanu (zielony=zamknięta, pomarańczowy=otwarta, niebieski=w ruchu); klik otwiera/zamyka/zatrzymuje
- Zakładka Home/Bramy: opcjonalne pole `light` przy bramie — wyświetla wskaźnik 💡 Włączone/Wyłączone na kafelku garażu
- Nowa zakładka **💡 Przełączniki** — grupy `switch`/`light`/`fan` z kafelkami; klik przełącza stan; live update bez przebudowy DOM

## [1.3.6] - 2026-03-29

### Changed
- Workflow: automatyczne oznaczanie wydania jako wersja wstępna gdy tag zawiera `-`

## [1.3.5] - 2026-03-28

### Changed
- Zakładka Home/Odpady: kafelek frakcji podświetla się na czerwono (tło + ramka + tekst) gdy wywóz jest dziś lub jutro

## [1.3.4] - 2026-03-28

### Changed
- Zakładka Home/Odpady: sortowanie rosnące po liczbie dni do wywozu, następnie alfabetycznie po nazwie frakcji

## [1.3.3] - 2026-03-28

### Added
- Zakładka Home/Odpady: opcjonalne pole `toggle` na sensor — wskazuje na `input_boolean` w HA; gdy off, frakcja jest ukryta w karcie i nie liczy się do badge

## [1.3.2] - 2026-03-27

### Added
- Opcja `show_header: false` — ukrywa nagłówek karty (tytuł + zegar) gdy HA wyświetla tytuł dashboardu

## [1.3.1] - 2026-03-27

### Fixed
- Zakładka Auta: status blokady (Zamknięty/Otwarty) odświeżany live bez przebudowy zakładki
- Zakładka Vaillant: wykresy gazu — poprawiono sortowanie i filtrowanie dat (obsługa `start` jako ISO string lub Unix timestamp)
- Zakładka Vaillant: wykres miesięczny — etykiety zawierają rok (np. "Lip 2025") eliminując niejednoznaczność przy wielu latach
- Zakładka Proxmox: wolna RAM wyświetlana z 2 miejscami po przecinku i jednostką GB
- Zakładka Home/Odpady: poprawiono błąd "za null dni" (null <= 3 w JS), data odbioru z `value_template` sensora HA

## [1.3.0] - 2026-03-27

### Added
- Zakładka Home (dawniej Osoby): sekcja harmonogramu odpadów komunalnych — lista frakcji z datą odbioru i kolorowaniem pilności (dziś/jutro/za X dni)
- Zakładka Home: badge z licznikiem frakcji z odbiorem dziś lub jutro
- Zakładka Auta: klikalny przycisk blokady — klik zamyka/otwiera zamek (`lock.lock` / `lock.unlock`)

### Changed
- Zakładka Osoby przemianowana na 🏠 Home
- Zakładka Home: layout side-by-side — lista osób po lewej, mapa po prawej (50% szerokości)
- Zakładka Vaillant: przyciski trybów generowane dynamicznie z `hvac_modes` encji (heat, auto, off i inne)
- Zakładka Vaillant: status CO i CWU odczytywany z rzeczywistego stanu HA zamiast hardcoded tekstu, aktualizowany live

## [1.2.4] - 2026-03-27

### Fixed
- Zakładka Auta: mapa powiększona do 280px wysokości
- Zakładka Auta: data ostatniej aktualizacji wyświetlana zawsze jako linia `🕐` pod chipami (niezależnie od tego czy pojazd ma baterię 12V)
- Zakładka Osoby: mapa zmniejszona do 380px (nie wychodzi poza widok), dodano `default_zoom: 14` dla lepszego kadrowania

## [1.2.3] - 2026-03-27

### Fixed
- Zakładka Auta: wyeliminowano mruganie map — pane nie jest przebudowywany przy aktualizacjach hass
- Zakładka Auta: centrowanie mapy — gdy tracker ma koordynaty GPS używa `auto_fit` + zoom 15, w przeciwnym razie `fit_zones` (strefa home)

## [1.2.2] - 2026-03-27

### Fixed
- Zakładka Auta: naprawiono brak mapy — kod obsługuje teraz klucz `location:` oraz `device_tracker:` w YAML
- Zakładka Auta: data ostatniej aktualizacji widoczna zawsze — przy pojeździe z baterią wyświetla się jako osobna linia `🕐`, bez baterii w trzecim kafelku
- Zakładka Vaillant: wykres dzienny gazu — dodano filtr client-side do ostatnich 30 dni (API zwracało dane historyczne)
- Zakładka Vaillant: termostat CO — dodano opcję `co_temp_input` w YAML wskazującą na `input_number` gdy encja klimatu nie obsługuje zmiany temperatury
- Zakładka Osoby: mapa powiększona do 550px, usunięto `fit_zones` (powodował centrowanie na strefę home zamiast lokalizacji osób)

## [1.2.1] - 2026-03-27

### Fixed
- Zakładka Kamery: naprawiono przycinanie obrazu w aktywnym podglądzie — usunięto inline `object-fit:cover` nadpisujący styl CSS
- Zakładka Osoby: mapa wyświetla encje `person.xxx` zamiast `device_tracker`, wysokość zwiększona do 400px, dodano `fit_zones`
- Zakładka Osoby/Auta: mapy inicjalizowane poprawnie — `hass` ustawiany po `appendChild`
- Zakładka Vaillant: wykres dzienny gazu — poprawiono kolejność dat (sortowanie po timestamp), tooltip z sumą ogrzewanie+CWU, legenda bez zdublowanych wartości
- Zakładka Vaillant: termostat CO — obsługa `target_temp_low` jako fallback, filtrowanie wartości `none` w preset_mode
- Zakładka Vaillant: ustawienia — 1 miejsce po przecinku dla step < 1, 2 dla step < 0.1; opcjonalne pole `decimals` w YAML

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
