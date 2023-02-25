# Wichtig
Vor dem Coden sollten wir das Problem, welches wir lösen wollen, kennen und auch beschreiben.
Warum machen wir etwas? -> kenne das Problem und versuche es in kleine Schritte zu zerlegen
Wir wollen kleine Tasks erzeugen.

# Plan

Besucher sollen eine Übersicht der Beiträge sehen, wenn sie die Seite besuchen

- Beiträge
- Übersichtsseite -> Landingpage/Homepage

Besucher sollen auf einen Beitrag klicken können, um dann auf die Detailansicht des Beitrages zu gelangen

- Detailseite der Beiträge 
- Beiträge auf der Übersichtsseite sind verkürzt dargestellt und klickbar

Der Admin soll über eine extra Seite die Möglichkeit bekommen Beiträge zu erstellen

- Es soll eine Adminpage geben
- Dort können neue Beiträge erstellt werden
- keine Authentifizierung

Der Admin kann einen Beitrag einen Titel geben, ein Beitragsbild zufügen und einen Text zufügen

- Datenmodel -> was für Daten enthält ein Beitrag
- Titel
- Bild
- Text

Der Admin kann mit einem klick auf einen Button (veröffentlichen) den Beitrag absenden

- Button der den Beitrag in Backend sendet

## Server
0. Standart Server aufsetzten

1. Wir wollen unsere Beiträge ausliefern
 - Beiträge brauchen einen Speicherort 
 - Wir brauchen Beiträge -> am Anfang kann das auch einfach ein leeres Array sein
 - Dem Frontend ermöglichen Beiträge zu bekommen -> route die von einen Request angefragt werden method GET

2. Wir wollen neue Beiträge anlegen -> dran denken das wir bilder speichern wollen (multer)
 - Wir müssen in der Lage sein Daten(Beiträge) vom Frontend zu empfangen -> route method POST
 - denk an die Bilder -> (multer)
 - Multer konfigurieren
 - Neuen Beiträge müssen gespeichert werden
3. Es ist noch nicht definiert wie gespeichert werden soll. Wir können zu anfang alles in ein Array legen (const posts = [])

## Frontend

1. Wir haben folgende Seiten: Landingpage(inkl. mini Posts), Detailpage( full posts), Adminpage(new Posts) -> react-router-dom
2. Wie fetches aufbauen | Wo brauchen wir überhaupt fetches?

### Frontend Details
 - Wir wissen welche Seiten wir haben
  - primitives design skizzieren
  - da wir mit mehreren Seiten arbeiten wollen wir react-router nutzen
   - wir machen einen pages ordner -> dort legen wir die hauptseiten ab


## Warum starte ich mit dem Server?
Weil der Server erstmal keine Abhängigkeiten hat.
Das Frontend benötigt aber Daten vom Backend um komplett entwickelt zu werden
