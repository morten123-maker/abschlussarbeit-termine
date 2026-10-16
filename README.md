# Abschluss 2027

Persönliche Übersicht für die Bachelorarbeit Gestaltung an der HSBI (Abgabe Februar 2027): Kalender mit allen Terminen und Fristen, Infos und Formulare in den Dropdowns, Countdown zur nächsten offenen Frist und eine Checkliste zum Abhaken.

Quelle der Termine: [hsbi.de/gestaltung/termine](https://www.hsbi.de/gestaltung/termine), Stand Oktober 2026. Verbindlich sind immer die Angaben der HSBI.

## Online stellen mit GitHub Pages

1. Neues Repository auf GitHub anlegen, z. B. `abschluss-2027`.
2. `index.html`, `README.md` und `.nojekyll` hochladen (Add file → Upload files).
3. Settings → Pages → Source: „Deploy from a branch“, Branch `main`, Ordner `/ (root)`.
4. Nach etwa einer Minute ist die Seite unter `https://<dein-name>.github.io/abschluss-2027/` erreichbar.

## Abhaken

Die Häkchen werden im `localStorage` des Browsers gespeichert. Sie bleiben also auf diesem Gerät und in diesem Browser erhalten, werden aber nicht zwischen Geräten synchronisiert. „Zurücksetzen“ im schwarzen Kasten entfernt alle Häkchen.

## Termine ändern

Alle Termine stehen im Array `EVENTS` im `<script>` am Ende von `index.html`. Monate sind 1-basiert (`[2027,2,2,10,0]` = 02.02.2027, 10:00 Uhr). Wochentage werden automatisch berechnet.

- `kind: 'f'` – Frist (schwarz), `kind: 't'` – Termin (grau)
- `deadline: true` – erscheint als „nächste Frist“ im schwarzen Kasten
- `final: true` – Ziel des Countdowns „Abgabe Werk“
- `id` nicht nachträglich ändern, sonst gehen gespeicherte Häkchen für diesen Termin verloren
