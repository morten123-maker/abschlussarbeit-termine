# Abschluss 2027, Morten Franken

Dokumentation der Bachelorarbeit Gestaltung an der HSBI. Reine HTML-, CSS- und JavaScript-Dateien, kein Build-Schritt nötig.

## Aufbau

- `index.html`, Startseite
- `arbeitsprozess.html`, `galerie.html`, leere Seiten für die Dokumentation
- `termine.html`, Kalender, Formulare und Kontakt
- `assets/style.css`, alle Styles
- `assets/termine.js`, Daten und Logik für die Termine
- `assets/fonts/`, Hanken Grotesk, lokal eingebunden (keine Verbindung zu Google)

## Online stellen mit GitHub Pages

1. Neues Repository auf GitHub anlegen und alle Dateien dieses Ordners hochladen (Inhalt direkt ins Hauptverzeichnis).
2. Im Repository auf Settings, dann Pages.
3. Bei Source "Deploy from a branch" wählen, Branch `main` und Ordner `/ (root)`, speichern.
4. Nach ein bis zwei Minuten ist die Seite unter `https://DEIN-NAME.github.io/REPOSITORY/` erreichbar.

## Aktualisieren

Datei ändern, committen, pushen. GitHub Pages veröffentlicht die neue Version automatisch.

- Termine und Fristen pflegst du oben in `assets/termine.js` (Liste `EVENTS`).
- Neue Einträge für Arbeitsprozess und Galerie legst du direkt in `arbeitsprozess.html` bzw. `galerie.html` im Bereich `<main>` an. Die Klassen für das Kastensystem (`.day`, `.sp`, `.cl`, `.cr`, `.ev`, `.grid`, `.gi`) stehen in `assets/style.css`.

## Lokal ansehen

`index.html` per Doppelklick im Browser öffnen.
