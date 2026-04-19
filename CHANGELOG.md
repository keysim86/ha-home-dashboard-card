# Changelog

## [Unreleased]

## [1.19.1] - 2026-04-19

### Fixed
- Zakładka **🌿 Kosiarka** — usunięto mruganie całej zakładki przy aktualizacjach hass; stan/przyciski/bateria aktualizowane in-place przez `_updateMowerLive()`, obraz mapy odświeżany osobno
- ID zakładki zmienione z `kosiarka` na `mower` — zgodne z konfiguracją YAML użytkownika; kolejność zakładek z `tabs:` respektowana poprawnie

## [1.19.0] - 2026-04-19

### Added
- Nowa zakładka **🌿 Kosiarka** — mapa z kamery (odświeżana co 3s), status kosiarski z kolorami, przyciski sterowania (Start/Pauza/Do stacji aktywne zależnie od stanu), statystyki (sesje, powierzchnia, czas); konfiguracja przez sekcję `mower:` w YAML; zakładka dodawana automatycznie gdy `mower.entity` jest ustawione

## [1.18.1] - 2026-04-19

### Fixed
- Zakładka **⚡ Metering** · sekcja AMIplus online — etykieta zużycia dziennego zmieniona z "Dziś" na "Wczoraj" (Tauron raportuje dane za poprzedni dzień)

## [1.18.0] - 2026-04-19

### Added
- Zakładka **🔥 Vaillant** · nowa sekcja **Roczne zużycie gazu** — wykres słupkowy z agregacją po roku (te same dane co wykres miesięczny), podsumowanie: ten rok (kolor pomarańczowy) vs poprzedni rok (kolor niebieski)

## [1.17.0] - 2026-04-19

### Added
- Zakładka **💡 Przełączniki** · nowy typ kafelka `type: lz4` — pilot z baterią sterujący do 3 urządzeń; wyświetla poziom baterii pilota oraz stan (Wł./Wył.) każdego urządzenia; akcje `single`, `double`, `hold` są konfigurowalne i klikalne (toggle); można mieszać z normalnymi encjami w tej samej grupie/pokoju

## [1.16.1] - 2026-04-18

### Fixed
- Zakładka **🏠 Home** · avatar osoby znikał po chwili i wracała litera — `_updateOsobyLive` nie miała logiki `entity_picture` i nadpisywała kafelek przy każdej aktualizacji hass
- Modal historii · wykres był pusty gdy encja nie zmieniała stanu przez cały okres (np. `binary_sensor` zawsze `on`) — history API zwracało 1 punkt, Chart.js nie rysował linii; dodano syntetyczny punkt `{x: teraz, y: ostatnia_wartość}`
- Zakładka **🚗 Auta** · mapa Leaflet nie respektowała `default_zoom` w Shadow DOM — inicjowała się przed poznaniem rozmiaru kontenera; dodano `window.dispatchEvent(new Event('resize'))` po 300 ms

## [1.16.0] - 2026-04-18

### Changed
- Zakładka **🏠 Home** · kafelek osoby: jeśli encja `person.*` ma zdjęcie profilowe (`entity_picture`), wyświetla avatar zamiast litery inicjału; fallback na literę gdy brak zdjęcia

## [1.15.2] - 2026-04-18

### Fixed
- Zakładka **🚗 Auta** · mapa nie wyśrodkowywała się na samochodzie — `auto_fit: true` dopasowywał widok do wszystkich encji łącznie ze strefą „Dom", przez co samochód wypadał poza centrum. Gdy tracker ma współrzędne GPS, mapa używa teraz `auto_fit: false` i `default_zoom: 15` — wyśrodkowuje bezpośrednio na pojeździe
- Modal historii · wykres dla encji `binary_sensor.*` był niewidoczny — wszystkie punkty miały wartość 0/1, a Chart.js autoskalował oś Y do wąskiego zakresu (0.94–1.06) przez co linia znikała. Dla danych binarnych ustawiono teraz stały zakres Y (`-0.1–1.5`), schodkowy styl linii (`stepped: before`), zielony kolor oraz etykiety tooltipa `on`/`off`
- Zakładka **🔥 Vaillant** · modal historii dla encji `climate.*` (np. `climate.ogrzewanie`) wyświetlał pusty wykres — stany klimatu (`heat`, `off`) są nienumeryczne i były filtrowane. Dla encji `climate.*` historia jest teraz pobierana z atrybutami, a do wykresu używany jest atrybut `current_temperature`

## [1.15.1] - 2026-04-18

### Fixed
- Zakładka **📹 Kamery** · focus view: zamieniono polling snapshot co 1 s na natywny komponent `<ha-camera-stream>` (HLS/WebRTC/MJPEG) — prawdziwy live stream bez opóźnień; komponent inicjowany po wyrenderowaniu zakładki z fallbackiem na `customElements.whenDefined`

## [1.15.0] - 2026-04-18

### Added
- Zakładka **📊 Metering** · nowa sekcja **🌐 Mój Tauron · AMIplus online** — zużycie dzienne i miesięczne z portalu Tauron AMIplus oraz należności (PLN) z automatycznym terminem płatności z atrybutu `due_date`/`paymentDate`; kolor należności: zielony = nadpłata, czerwony = do zapłaty; konfiguracja przez `metering.tauron_amiplus_daily`, `metering.tauron_amiplus_monthly`, `metering.tauron_amiplus_balance`; sekcja pojawia się tylko gdy przynajmniej jeden klucz jest skonfigurowany

### Fixed
- Zakładka **🔥 Vaillant** · wykres miesięcznego zużycia gazu: wszystkie słupki pokazywały tę samą wartość (ok. 30–50 m³) — filtr anomalii `toVal()` używał limitu dziennego (`gas_daily_max_m3`, domyślnie 30 m³) również dla danych miesięcznych, obcinając każdy miesiąc powyżej limitu. Dodano `toValMon()` bez górnego ograniczenia dla agregacji miesięcznej
- Zakładka **📹 Kamery** · główny widok (focus) odświeżał się wyłącznie po kliknięciu miniatury — zmieniono źródło obrazu z `camera_proxy` (snapshot co 10 s) na `camera_proxy_stream` (MJPEG); przeglądarka dekoduje ciągły strumień bez pollingu. Odświeżanie miniatur skrócono z 10 s do 3 s

## [1.14.5] - 2026-04-05

### Fixed
- Zakładka **🔥 Vaillant** · wykres dziennego zużycia gazu: restart HA powodował spike (~50 m³) wynikający z zachowania `utility_meter` przy przejściu `unavailable→0→wartość`. Dodano filtr anomalii — wartości powyżej `gas_daily_max_m3` (domyślnie 30 m³/dzień) są obcinane. Wartość można skonfigurować: `vaillant.gas_daily_max_m3: 50`.

## [1.14.4] - 2026-04-05

### Fixed
- Zakładka **🔥 Vaillant** · sekcja Ustawienia: szybkie klikanie `+`/`−` powodowało kolejkowanie wielu wywołań `set_value` w HA — wartość zmieniała się samoczynnie po puszczeniu przycisku. Naprawiono przez debounce (350 ms) z akumulacją kroków i natychmiastowym optimistycznym odświeżeniem wyświetlanej wartości.

## [1.14.3] - 2026-04-03

### Fixed
- Zakładka **📊 Metering** · sekcja myORLEN: kwota ostatniej faktury wyświetlała `zl` zamiast `zł`

## [1.14.2] - 2026-04-03

### Changed
- Zakładka **📶 TP-Link** · sekcja Zosia (odkurzacz) przeniesiona nad HP OfficeJet Pro 8020

### Fixed
- Zakładka **📶 TP-Link** · sekcja Status: usunięto ikonę 📊 renderującą się jako kolorowy kwadrat; cały wiersz jest teraz klikalny i otwiera modal historii
- Modal historii: `binary_sensor` wyświetlał pusty wykres — stany `on`/`off` są teraz mapowane na `1`/`0`

## [1.14.0] - 2026-04-03

### Added
- Zakładka **📶 TP-Link** · sekcja **📡 Status** — monitorowanie binary_sensorów (Google, Router, Node itp.) z kolorowym wskaźnikiem on/off i paskiem historii; konfiguracja przez `tplink.status_monitors` (lista `{entity, name, history:[...]}`)
- Zakładka **📶 TP-Link** · sekcja **📶 SpeedTest** — wykres prędkości pobierania/wysyłania (Mbit/s) i pingu (ms) z ostatnich 24h (Chart.js, dual Y-axis); aktualne wartości w nagłówku; konfiguracja przez `tplink.speedtest_download`, `tplink.speedtest_upload`, `tplink.speedtest_ping`, `tplink.speedtest_label`

## [1.13.0] - 2026-04-03

### Changed
- Zakładka **📊 Metering** · sekcja myORLEN · Gaz: nagłówek wyświetla numer taryfy pobierany z atrybutu `tariff` sensora licznika
- Zakładka **📊 Metering** · kafelek Odczyt licznika: dodano datę ostatniego odczytu (`reading_date_local`) i typ odczytu (`reading_type`) jako podpis pod wartością
- Zakładka **📊 Metering** · kafelek Saldo / Ostatnia faktura: połączono aktualne saldo (nieopłacone faktury) z danymi ostatniej faktury — kwota brutto, data, numer; kliknięcie otwiera historię sensora faktury

## [1.12.0] - 2026-04-02

### Added
- Zakładka **🏠 Home** · Modal pogody: zakładka **🌧️ Radar** z animowanym radarem opadów RainViewer — pojawia się automatycznie gdy skonfigurowane `weather.lat`/`weather.lon`; brak dodatkowej konfiguracji
- Zakładka **🔥 Vaillant** · termostat CO: status **🔒 Veto** z czasem zakończenia — gdy `Z1SFMode=veto` pomarańczowy kafelek pokazuje `Veto do DD.MM.YYYY HH:MM` zamiast mylącego `Auto`; wymaga nowych pól `sf_mode_entity`, `veto_end_date`, `veto_end_time`

### Fixed
- Zakładka **🌡️ Klimat**: czas ostatniej aktualizacji nachodził na przyciski kontrolne (fan/light/humidifier_switch) — zmieniono z `position:absolute` na normalny przepływ dokumentu

## [1.11.0] - 2026-04-02

### Added
- Zakładka **🔥 Vaillant** · termostat CO: sterowanie Quick Veto przez MQTT (ebusd) — nowe pola `sf_mode_topic`, `veto_temp_topic`, `actual_temp_topic` w konfiguracji; +/− w trybie `auto` ustawia veto (`Z1SFMode=veto`, `Z1QuickVetoTemp`, `Z1ActualRoomTempDesired`); +/− w trybie `heat_cool` (Grzanie) ustawia tylko `Z1ActualRoomTempDesired`; zmiana trybu HVAC resetuje `Z1SFMode=auto`

## [1.10.1] - 2026-04-02

### Fixed
- Widget pogody: błąd składni JS `Invalid or unexpected token` — znak Unicode minus `−` (U+2212) w funkcji kolorowania temperatury zamiast zwykłego `-`; karta nie ładowała się wcale

## [1.10.0] - 2026-04-02

### Added
- Zakładka **🏠 Home** · Pogoda: prognoza 16-dniowa ECMWF z Open-Meteo — scrollowalna tabela godzinowa (godzina, ikona pogody, temperatura, opady, wiatr, porywy, kierunek wiatru) ze sticky nagłówkami dni i kolorowaniem komórek; konfiguracja przez `weather.lat`/`weather.lon`; gdy skonfigurowane też `weather.windy_embed` — modal ma dwie zakładki 📅 Prognoza / 🗺️ Mapa Windy

## [1.9.1] - 2026-04-01

### Added
- Zakładka **🌡️ Klimat**: pole `humidifier_switch` w `comfort.rooms[]` — przycisk toggle 💧 Wł./Wył. dla `switch.*`/`input_boolean.*` osuszacza, wyświetlany obok fan/light na dole karty pokoju

### Changed
- Zakładka **🏠 Home** · Pogoda: modal powiększony do pełnego ekranu; przycisk Pogoda jako osobny widget pod skrzynką pocztową (zamiast małego przycisku obok)

## [1.9.0] - 2026-04-01

### Added
- Zakładka **🏠 Home**: przycisk 🌤️ Pogoda przy skrzynce pocztowej — otwiera modal z mapą Windy.com (embed); konfiguracja przez `weather.windy_embed` w YAML

### Fixed
- Zakładka **🔥 Vaillant** · tryby HVAC: dwa przyciski były jednocześnie aktywne gdy encja zgłasza `auto` i `heat_cool` — usunięto błędny cross-match; etykiety: `heat_cool` = "Grzanie", `auto` = "Auto"
- Zakładka **🔥 Vaillant** · termostat CO: przyciski +/− nie działały gdy atrybut `temperature` encji był `null`/`unavailable` — `parseFloat(null)` dawało `NaN`; teraz sprawdzane przez `!isNaN()`
- Zakładka **🔥 Vaillant** · sekcja Ustawienia: przyciski +/− wysyłały `value: NaN` gdy encja nie ma atrybutów `min`/`max` — `parseFloat(undefined) ?? fallback` nie łapało NaN; naprawiono przez explicit `isNaN` check
- Zakładka **🌡️ Klimat** · osuszacz: krok +/− wynosił 3–4 zamiast 1 (błędny wzór `(max-min)/15`); zmieniono na stały krok `1`
- Modal historii: wykres był pusty dla sensorów z `minimal_response=true` (HA zwraca `last_updated` zamiast `last_changed` dla kolejnych punktów) — dodano fallback `p.last_changed || p.last_updated`

## [1.8.0] - 2026-03-31

### Added
- Zakładki **📊 Metering**, **⚡ Energia**, **🚗 Auta**, **🔥 Vaillant**: kliknięcie w kafelek sensora otwiera modal z wykresem historii (zakresy 7/14/30/60/90 dni) — identyczny mechanizm jak w zakładce 🌡️ Klimat
- Zakładka **🏠 Home**: kliknięcie w kafelek osoby otwiera modal z mapą `ha-map` aktualnej lokalizacji (zoom 15, ciemny motyw)
- Zakładka **🌡️ Klimat**: sterowanie wentylatorem i światłem per pokój — pola `fan` i `light` w `comfort.rooms[]`; przyciski toggle wyświetlane na dole karty pokoju
- Zakładka **💡 Przełączniki**: opcjonalne grupowanie po pokojach — pole `room` w grupie YAML; sekcja pierwszego poziomu = pokój, drugi poziom = typ urządzenia (Gniazdka / Światło / Inne)

### Changed
- Zakładka **🏠 Home**: usunięto stałą mapę boczną (lepsza responsywność na smartfonach) — lokalizacja dostępna przez modal po kliknięciu w kafelek osoby

### Fixed
- Zakładka **💡 Przełączniki**: nazwy urządzeń zawijają się w max. 2 linie zamiast być ucinane wielokropkiem
- Zakładka **🔥 Vaillant** · sekcja Ustawienia: wartość wyświetlana na kafelku odświeża się live po kliknięciu +/− (poprzednio wymagało przeładowania zakładki)
- Zakładka **🔥 Vaillant** · tryby HVAC: gdy encja zgłasza jednocześnie `auto` i `heat_cool`, wyświetlał się duplikat przycisku "Auto" — teraz pokazywane jako osobne przyciski z poprawnymi etykietami: `heat_cool` = "Grzanie", `auto` = "Auto"

## [1.7.3] - 2026-03-31

### Fixed
- Vaillant · sekcja Ustawienia: przyciski +/− nie działały gdy encja miała domenę `number.*` — service był hardcodowany jako `input_number.set_value`; teraz domena pobierana dynamicznie z entity ID

## [1.7.2] - 2026-03-31

### Added
- Zakładka **📊 Metering** · sekcja myORLEN: zużycie z ostatniej faktury w m³ (`orlen_wear_m3`), w kWh (`orlen_wear_kwh`) oraz współczynnik konwersji gazu (`orlen_conversion`, kWh/m³)

## [1.7.1] - 2026-03-31

### Fixed
- Zakładka **📶 TP-Link**: porty PoE (sw01/sw02/sw03) zawsze klikalne niezależnie od domeny encji — wcześniej klikanie działało tylko dla encji `switch.*`, inne domeny były ignorowane

## [1.7.0] - 2026-03-30

### Added
- Zakładka **🌡️ Klimat**: kliknięcie w dowolny sensor (temp, wilgotność, ciśnienie, nasłonecznienie, CO₂, AQI, PM2.5, PM10, VOC, bateria) otwiera modal z liniowym wykresem historii; wybór zakresu 7/14/30/60/90 dni; dane z HA History API
- Kafelki osób: wyświetla nazwę strefy z HA zamiast "W domu"/"Poza domem" (żółty kolor dla nazwanych stref)

### Changed
- Zmieniono ID i nazwę zakładki `komfort` → `klimat` — zaktualizuj `tabs:` w konfiguracji YAML
- Porty routera (`switch.*`) klikalne i kolory poprawione (zielony router vs cyjanowy PoE)

### Fixed
- Przyciski TP-Link PoE — toggle wywoływany przed sprawdzeniem stanu encji (naprawia "nie działają")

## [1.6.0] - 2026-03-30

### Added
- Zakładka **💡 Przełączniki**: opcjonalne odliczanie czasu włączenia per grupa (`show_timer: true` w `switches.groups[]`) — timer widoczny tylko gdy włącznik jest włączony, aktualizowany co sekundę
- Zakładka **🌡️ Komfort**: znacznik czasu ostatniej aktualizacji na każdej karcie pomieszczenia (na podstawie temperatury/wilgotności/ciśnienia), aktualizowany co sekundę
- Zakładka **📶 TP-Link**: porty PoE (`switch.*`) są teraz klikalne — włączanie/wyłączanie bezpośrednio z karty; live update stanu bez przeładowania zakładki

### Changed
- ID zakładki `osoby` zmieniono na `home` — zaktualizuj `tabs:` w konfiguracji YAML
- Kolejność zakładek wynika z kolejności w `tabs:` w YAML (wcześniej kolejność była stała)

### Fixed
- Akcja toggle używa teraz domenowych serwisów (`switch.turn_on/off`, `light.turn_on/off` itp.) zamiast `homeassistant.toggle` — naprawia błąd z portami TP-Link PoE i innymi integracjami

## [1.5.0] - 2026-03-30

### Added
- Nowa zakładka **🌡️ Komfort** — karty pomieszczeń z sensorami (temperatura, wilgotność, ciśnienie, nasłonecznienie, CO₂, AQI, PM2.5, PM10, VOC); kolory wartości zależne od norm; sterowanie humidifier (toggle + docelowa wilgotność +/−); opcjonalny poziom baterii czujnika z paskiem i kolorowaniem; auto-dodawana gdy `comfort.rooms` jest skonfigurowane
- Zakładka Home/Bramy: widget skrzynki pocztowej — status 📬 Jest poczta! / 📭 Pusta z kolorowym podświetleniem; opcjonalny poziom baterii z kolorowaniem (zielony/żółty/czerwony); konfiguracja przez `mailbox:` w YAML

## [1.4.2] - 2026-03-29

### Added
- Zakładka Home/Bramy: live timer na kafelku gdy brama/bramka jest otwarta — wyświetla czas od otwarcia (⏱ Xm Ys), aktualizowany co sekundę; ukryty gdy brama zamknięta

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
