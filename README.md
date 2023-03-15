# Bronzen wie Tiere
in Kooperation Münzkabinett der SMB

**Heide Dobberkau und ihre Tierwelten.**

In der Ausstellung des Münzkabinetts begegnen Heide Dobberkaus »Bronzen wie Tiere« Tierwesen auf Münzbildern aus vier Jahrtausenden und treten mit aktuellen Tiermedaillen in Dialog.

In der Anwendung können Kleinplastiken, Medaillen und antike Münzen erkundet werden.


### Inhaltsverzeichnis

- [Beschreibung](#Beschreibung)
- [Kurzbeschreibung](#Kurzbeschreibung)
- [Entstehungskontext](#Entstehungskontext)
- [Förderung](#Förderung)
- [Credits](#Credits)
- [Lizenz](#Lizenz)
- [Installation und Benutzung](#Installation-und-Benutzung)


# Beschreibung
Indem Kontexte und Informationen am 3D-Museumsobjekt gezeigt werden, kann die Fülle an Informationen um Ausstellungsobjekte herum von Besucher\*innen individuell erkundet werden. Im Fokus steht dabei das Eigeninteresse der Besucher\*innen.

Die PWA zeigt 3D-Museumsobjekte in Rundum-Ansicht an. Sie lassen sich in alle Richtungen drehen und wenden und zeigen so, was beim realen Objekt verborgen bleibt – beispielsweise die Unterrseite. 
An den 3D-Objekten sind Infopunkte angelegt. Die Infopunkte halten Texte oder Fragestellungen bereit. Verschiedene Infopunkte werden zu Erzählsträngen verbunden. Sie vernetzen Zusammenhänge. Damit können BesucheInnen Exponate im Detail untersuchen. 

# Kurzbeschreibung
In der Webanwendung, in Kooperation zwischen dem Teilprojekt M1 und dem Münzkabinett entwickelt, lassen sich Heide Dobberkaus Krabben, Schildkröten und Co. – aber ebenso Tierreliefs antiker Münzen – auch mobil in 3D und außerhalb der Öffnungszeiten erkunden. Die Hommage aus verschiedenen Blickwinkeln würdigt ein Lebenswerk und ist zugleich Ausdruck eines die Generationen übergreifenden kuratorischen Zusammenwirksens am Münzkabinett der Staatlichen Museen zu Berlin.

# Entstehungskontext
Die Progressive-Web-App **Bronzen wie Tiere** basiert auf dem PWA-Baukasten _dispay_. Sie ist entstanden im Verbundprojekt [museum4punkt0 – Digitale Strategien für das Museum der Zukunft](www.museum4punkt0.de) im Teilprojekt [Visitor Journeys neu gedacht – digitale Erweiterung des Museumsbesuchs](https://www.museum4punkt0.de/teilprojekt/visitor-journeys-neu-gedacht-digitale-erweiterung-des-museumsbesuchs/) der Staatlichen Museen zu Berlin – Preußischer Kulturbesitz.

# Förderung
Das Projekt museum4punkt0 wird gefördert durch die Beauftragte der Bundesregierung für Kultur und Medien aufgrund eines Beschlusses des Deutschen Bundestages.

![BKM-Logo](https://github.com/museum4punkt0/Object-by-Object/blob/77bba25aa5a7f9948d4fd6f0b59f5bfb56ae89e2/04%20Logos/BKM_Fz_2017_Web_de.gif)
![NeustartKultur](https://github.com/museum4punkt0/Object-by-Object/blob/22f4e86d4d213c87afdba45454bf62f4253cada1/04%20Logos/BKM_Neustart_Kultur_Wortmarke_pos_RGB_RZ_web.jpg)

# Credits
Auftraggeber/Rechteinhaber: Staatliche Museen zu Berlin - Preußischer Kulturbesitz  
Initiale Entwicklung (09/2018-02/2019): Neue Werte GmbH  
Weiterentwicklung (ab 2019): Projektteam Staatliche Museen zu Berlin im Verbundprojekt museum4punkt0
Konzeption

Texte: Johannes Eberhardt

Scan 3D-Modelle: Fanet Göttlich, ZEDIKUM

Konzeption und Koordination der Ausstellung: Wolgang Steguweit und Johannes Eberhardt

Die Ausstellung „Bronzen wie Tiere - Heide Dobberkau und ihre Tierwelten“ ist eine Kooperation des Münzkabinetts der Staatlichen Museen zu Berlin – Preußischer Kulturbesitz und der Deutschen Gesellschaftfür Medaillenkunst

Unter Mitwirkung von museum4punkt0, ZEDIKUM und dem Berliner Medailleurkreis

Kontaktinformation:
museum4punkt0 / Staatliche Museen zu Berlin – Preußischer Kulturbesitz:  
Timo Schuhmacher t.schuhmacher@smb.spk-berlin.de

# Lizenzen
Dieser Code unterliegt der GNU General Public License v3.0. Näheres siehe [hier](#https://github.com/museum4punkt0/display/blob/main/LICENSE)

Als Komponente wird eine Bibliothek mit nicht-freier Lizenz im Sinne der GPL verwendet. Diese ist im Code markiert und auskommentiert.
Um den Code zu starten, müssen die Kommentare in der Datei ```src/components/model-viewer/model-mixin.vue``` an den entsprechenden Stellen (Zeile 38 und Zeile 359-364 Suche nach 'TweenLite') entfernt werden. Diese sind:

- [Greensock GSAP](https://greensock.com/gsap/) mit eigener [Lizenz](https://greensock.com/licensing/). Prüfen Sie vor Verwendung, ob Sie eine Lizenz erwerben müssen.


# Installation und Benutzung
siehe ebenfalls [Installation und Benutzung _display_](https://github.com/tschuhmacher/display#Installation-und-Benutzung)

## 1. Einführung

Im Repository befindet sich der Ordner "editor". Der Editor ist optional und kann unterstützen die JSON-Datei aufzusetzen und zu pflegen.
Nach dem Klonen des Repositorys sind die Schritte zum Aufsetzen des Viewer notwendig.

### Notwendige Komponente
- **Yarn** Als Paketmanager wurde [yarn](https://classic.yarnpkg.com) eingesetzt. Yarn ist die einzige Komponente die seperat zu installieren ist. Danach installiert Yarn die notwendigen Komponenten nach. Bei Fragen zu Yarn ist die [Dokumentation](https://classic.yarnpkg.com/en/docs) zu beachten.

### Hauptkomponenten (werden mit Hilfe von Yarn geladen)
- **vue.js** display ist mit dem Javascript-Framework [vue.js](https://vuejs.org/) entwickelt worden. Um mehr über Vue dessen Konzepte, Methoden und Komponenten zu erfahren, empfehlt sich die [Vue Dokumentation](https://vuejs.org/v2/guide/).
- **three.js** Der 3D-Viewer in display (src/components/model-viewer) basiert auf der Bibliothek [three.js](https://threejs.org/), [Dokumentation]( https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene).

Wurde yarn (classic) installiert, können die folgenden Kommandos im Projektordner ausgeführt werden.

Wie bei den Dokumentationen der oben genannten Komponenten wird im folgenen ebenfalls im Englischen dokumentiert.

## 2. Viewer

### 2.1. Setup

```
yarn install
```

#### Compiles and hot-reloads for development

```
yarn run serve
```

#### Compiles and minifies for production

```
yarn run build
```

#### Lints and fixes files

```
yarn run lint
```

### 2.2. File structure

```text
.
└── editor
└── server (php files for communication with the webserver)
└── public (all assets and config files)
└── src (all the source code)
	└── components (separate components)
		└── model-viewer (the core of three.js model viewer)
		└── ...
	└── utils (helpers)
	└── views (basically pages)
	└── App.vue (main vue component)
```

### 2.3. Deployment process

#### Steps

1. Change .env variables for production (see [Environment setup](#Environment-setup))
2. Build the apps

```text
yarn run build
cd editor
yarn run build
```

3. The `dist` folders are ready for deployment
4. Add php scripts in `server/api/` to the root folder on the webserver

### 2.4. CSS

#### Introduction

Global css that applies to the whole app can be find in `/App.vue`. Other styles in `.vue` files are applied only to the specific component and they are not affecting other component styling (see [Vue scoped css](https://vue-loader.vuejs.org/guide/scoped-css.html)). [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) is used heavily to create any layout in the app. Very few components are used from [Vuetify framework](https://vuetifyjs.com). `EM` were used as a relative unit to the currently chosen font size. Horizontal viewport-relative units are used for determining offsets.

#### The global styles

The global styles in `/App.vue`

- `#app` main component, apply fonts, fallback bg, font color etc.
- `#nav` fixed navigation, other content is pushed down by the offset relative to the height of the navigation component
- `.custom-layout` can be find in many instances for the horizontal offset
- `.content` container of the app's content with menu height offset
- `.content__page` apply only for 'static' pages like Exhibition, Impressum etc.
- `.content__page-main` wrapper for the main content

####  Component styles

Other styles in `.vue` components apply only to specific component and further comments can be find there.



### 2.5. Server Config Single Page App

#### HTACCESS CONFIG

```
RewriteEngine on
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [NC,L,QSA]
```

### 2.6 Environment setup

#### Production example

```
VUE_APP_API_URL=https://www.yourwebsite.com/ (!deploying on localhost the url is / !)
NODE_ENV=production
BASE_URL=/subfolder
```

#### Dev example

```
VUE_APP_API_URL=/  (e.g. localhost)
NODE_ENV=development
BASE_URL=/
```


## 3. Editor (optional)

### 3.1. Setup

```
cd editor
yarn install
yarn serve
```

#### Start the PHP webserver

```
cd server
php -S localhost:8000
```

#### Uploading of files

```
If you want to upload files bigger then 2MB (default value),
check how you have set up properties upload_max_filesize and post_max_size in your php.ini file
```

### 3.2. Protect your editor e.g. Basic Auth by HTACCESS
####  HTACCESS CONFIG
```

AuthType Basic
AuthName "Password Protected Area"
AuthUserFile /YOUR_DIR/editor/.htpasswd
Require valid-user
```


## 4. Adding new language (optional)

Adding new language requires addition development.

- In `config.json` every language version is represented by the item in the main array. To add a new language version another second-level array containing information about obects need to be pushed to the first-level array.
- In `Vue.js`, `navigationLanguageItems` needs to be updated with another language item.
- However, because the language change is not registered now in global state, the change is happening inside idividual components. Therefore, some sort of switch statement needs to be implemented across the app to react and switch between selected language or move current selected language to the global store and distribute the state to the components that needs to react to language change.


## 5. Usage
After compiling for development by ```yarn serve``` direct your browser to the proposed localhost. By editing config.json and config2.json you will able to manipulate the shown content.