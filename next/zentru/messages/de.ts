export default {
	"reallyGood": "Richtig gut",
	"Products": {
		"rec": {
			"sectionSummary": `Vergiss keine weitere Melodie.
				<br></br>
				Wie dein vertrauter voice-recorder, nur supercharged.<br></br>
				Nimm deine Melodie auf, füge Bass, Drums und vielleicht ein Pad hinzu.<br></br>
				Da – so schnell baust du dir einen Songstarter, jetzt die DAW öffnen, Spuren hineinziehen und du bist bereit loszulegen.`,
			"headsection": {
				"whatItIs": "Musik für dich.",
				"reason": "Verliere keine Melodie mehr während du unterwegs bist oder einen Spaziergang im Park machst.",
			},
			"earlyAccess": {
				"getEarlyAccess": "Hol dir deinen Vorabzugang",
				"signupEarlyAccess-action": "Für Vorabzugang anmelden",
			},
			"section2": {
				"title": "Warum .rec?",
				"content": `<maxWidth>Damit du nie wieder eine Melodie oder einen Song im Kopf hast, es aufnimmst,
					nur um später festzustellen, dass du keine Ahnung mehr hast, wie du dir die Harmonien, den Bass, die Drums...vorgestellt hast.</maxWidth>
					<maxWidth>Glaub uns, soetwas passiert allen – die ganze Zeit, wir kennen diesen Schmerz, das ist der Grund, warum wir .rec machen.</maxWidth>
					<maxWidth>Für wen .rec ist? – Na für jeden! Jeder der supercharged voice-memos praktisch findet!</maxWidth>`
			},
			"section3": {
				"title": "Features",
				"content": `<maxWidth>
					.rec ist genauso schnell und einfach zu bedienen wie deine geliebten Voice-Memos. Drücke "Record" und los geht's.<br></br>
					.rec ist für Anfänger, Amateure und Profis gebaut – mit Features für jeden.
					</maxWidth>
					<ul>
					<li><maxWidth>Du wirst Features nur dann bemerken, wenn du bereit für sie bist.</maxWidth></li>
					<li><maxWidth>Exportiere MIDI und Audio-Spuren einzeln um sie in deiner DAW weiter zu verarbeiten.</maxWidth></li>
					<li><maxWidth>Nutze EQ und Reverb schnell und unkompliziert – ohne 100 Einstellungen, die du sowieso nicht verwendest, damit du in deinem kreativen Flow bleibst.</maxWidth></li>
					</ul>`
			},
		},
		"shiftdown": {
			"meta": {
				// Der Name gehört schon einem anderen Windows-Tool – deshalb immer mit Zusatz
				"title": "ShiftDown — Zielgenauigkeit ohne Zoomen",
			},
			"hero": {
				"headline": "Hör auf, nur zum Verschieben reinzuzoomen.",
				"sub": `Halte eine Taste und dein Zeiger schaltet einen Gang herunter: dieselbe Handbewegung legt nur noch
					ein Viertel der Strecke zurück. Triff genau den Punkt, genau den Griff,
					genau das Keyframe – ohne die Zoomstufe zu verlassen, in der du gerade arbeitest, und ohne nach einer
					Maus zu greifen, die du gar nicht dabeihast.`,
				"micro": "{days} Nutzungstage, volle Version. Kein Konto, keine Karte.",
				"demo": "Links: reinzoomen, schieben, rauszoomen, prüfen. Rechts: Taste halten, schieben, fertig.",
			},
			"cta": {
				"download": "Testversion herunterladen",
				"downloadFor": "Testversion herunterladen – für {platform}",
				"buy": "Kaufen – {price, number, ::currency/EUR}, einmalig",
				"alsoFor": "Auch für {platform}",
			},
			// Platzhalter-Beschriftungen für Slots, die noch kein Material haben
			"media": {
				"clip": "Demo-Clip – folgt",
				"still": "Bild – folgt",
				"screenshot": "Screenshot – folgt",
			},
			"useCases": {
				"title": "Woran arbeitest du?",
				"intro": "Das Problem ist überall dasselbe: zu viele Ziele, zu wenige Pixel. Nur was unter dem Zeiger liegt, ändert sich.",
				"tabsLabel": "Anwendungsfälle",
				"video-music": {
					"label": "Video & Musik",
					"headline": "Der richtige Griff, beim ersten Versuch.",
					"body": `<p>Trim, Roll, Slip und der Fade-Griff liegen alle innerhalb weniger Pixel derselben Kante.
						Verlangsame den Zeiger und nimm den, den du gemeint hast, ohne in den Schnitt hinein- und wieder
						herauszuzoomen.</p>
						<p>Audio stapelt sich genauso: Regionenkanten, Fade-Kurven, Automationspunkte und Warp-Marker landen alle
						auf demselben Punkt der Timeline. Erwisch den, den du suchst, mit dem ganzen Arrangement im Blick.</p>`,
					"solves": `<ul>
						<li>Trim-, Roll- und Slip-Zonen an ein und derselben Clipkante</li>
						<li>Automationspunkte und Keyframes über dem Clip darunter</li>
						<li>Regionenkanten direkt neben der Kante der Nachbarregion</li>
						</ul>`,
					"demo": "Ein enger Schnitt im NLE: der Trim-Griff statt der Verschiebe-Zone.",
					"still": "Eine Timeline-Kante mit aktiviertem Trim-Griff.",
				},
				"graphics": {
					"label": "Grafik",
					"headline": "Der Punkt, nicht das Segment.",
					"body": `<p>Ein Pfadpunkt, seine beiden Bézier-Griffe und das Segment dazwischen liegen auf einer Handvoll
						Pixel. Triffst du den falschen, hast du die Kurve verschoben statt sie zu formen – oder den ganzen Pfad
						gezogen statt eines Punktes.</p>
						<p>Ebenenkanten, Maskenecken und Transform-Griffe machen dasselbe. Ein langsamerer Zeiger landet auf dem,
						den du gemeint hast, während die Zeichenfläche stehen bleibt.</p>`,
					"solves": `<ul>
						<li>Pfadpunkte gegen ihre Griffe gegen das Segment</li>
						<li>Transform-Griffe, die sich in der Ecke einer kleinen Auswahl drängen</li>
						<li>Ein Objekt aus einem Stapel überlappender Objekte auswählen</li>
						</ul>`,
					"demo": "Ein Vektorpfad: einen Punkt auswählen statt des Segments daneben.",
					"still": "Ein Bézier-Punkt mit beiden ausgefahrenen Griffen.",
				},
				"cad-3d": {
					"label": "CAD & 3D",
					"headline": "Der Fangpunkt, den du gemeint hast.",
					"body": `<p>Endpunkt, Mittelpunkt, Zentrum und Schnittpunkt drängen sich auf wenigen Pixeln. Verlangsame den
						Zeiger und der richtige rastet ein – ohne Orbit und Zoom nur zur Unterscheidung.</p>
						<p>Nicht das Einrasten ist das Problem. Das Einrasten ist das, was das Ergebnis exakt macht. Das Problem
						ist, ihm zu sagen, welchen der vier Kandidaten du gemeint hast.</p>`,
					"solves": `<ul>
						<li>Fangpunkte, die um dieselbe Zeigerposition konkurrieren</li>
						<li>Gizmo-Achsen, die sich im Ursprung treffen</li>
						<li>Eine Kante auswählen statt der Fläche dahinter</li>
						</ul>`,
					"demo": "Eine 3D-Szene: den gemeinten Fangpunkt aus dicht gedrängten Kandidaten aktivieren.",
					"still": "Vier Fangpunkt-Kandidaten auf wenigen Pixeln.",
				},
			},
			// Der Laptop- und Trackpad-Fall – eigener Abschnitt, weil wir damit führen
			"trackpad": {
				"title": "Keine Maus. Kein Schreibtisch. Trotzdem exakt.",
				"body": `<p>Ein Trackpad hat etwa zehn Zentimeter Weg, um einen ganzen Bildschirm abzudecken – der Zeiger
					muss also schnell laufen. Die Feinsteuerung ist nicht schlecht, weil du etwas falsch eingestellt hast,
					sondern weil die Geometrie es so vorgibt.</p>
					<p>Am Schreibtisch würdest du zur Maus greifen oder die Empfindlichkeit senken und weiter ausholen. Auf
					dem Klapptisch im Flugzeug, im Zug oder im Hotelbett geht beides nicht. Eine Taste halten schon: derselbe
					Wisch legt nur ein Viertel der Strecke zurück, und die Kante rutscht dir nicht mehr davon.</p>
					<p>Für Trackballs, Mauspads und jeden zu kleinen Schreibtisch gilt dasselbe.</p>`,
				"demo": "Ein Objekt exakt platzieren, auf dem Trackpad, bei voller Geschwindigkeit und verlangsamt.",
			},
			"problem": {
				"title": "Präzision und Überblick sollten kein Entweder-oder sein.",
				"body": `<p>Eine Timeline-Kante ist voller Ziele, die wenige Pixel auseinanderliegen – hier verschieben, zwei
					Pixel weiter links trimmen, an der Grenze rollen, in der Ecke faden, knapp darüber ein Keyframe. Jedes davon
					aktiviert ein anderes Werkzeug. Bei CAD ist es dieselbe Geschichte: Endpunkt, Mittelpunkt, Zentrum und
					Schnittpunkt streiten sich um dieselbe Zeigerposition.</p>
					<p>Nicht das Einrasten ist das Problem. Einrasten ist genau das, was du willst – es lässt das Ergebnis exakt
					auf dem Frame landen. Das Problem ist, die richtigen paar Pixel zu treffen, damit das richtige Werkzeug
					aktiv wird und der richtige Fangpunkt gewinnt.</p>
					<p>Also zoomst du rein. Jetzt kannst du präzise sein – aber der Rest des Bildes ist weg, du kannst also nicht
					beurteilen, ob die Änderung im Zusammenhang stimmt. Du zoomst raus, um zu prüfen. Es passt nicht. Wieder
					rein.</p>
					<p>Die Zeit, die das kostet, ist real – und noch nicht das Schlimmste. Das Schlimmste ist, dass Präzision und
					Überblick sich gegenseitig ausschließen und du den Tag damit verbringst, zwischen beiden hin und her zu
					springen.</p>`,
				"demo": "Derselbe Schnitt zweimal: rein- und rausgezoomt gegen einmal durchgezogen.",
			},
			"howItWorks": {
				"title": "Ein Getriebe für deinen Zeiger.",
				"body": `<p>Halte deine Taste und der Zeiger schaltet einen Gang herunter: dieselbe Handbewegung legt nur noch
					ein Viertel der Strecke zurück. Wie am Berg mit dem Rad tauschst du Strecke gegen Kontrolle –
					einstellbar von kaum gedämpft bis Kriechtempo. Die Pixel bewegen sich nicht. Deine Hand deckt nur weniger
					davon ab, jede Hover-Zone liegt also effektiv viermal weiter auseinander, und deine Zoomstufe ändert sich
					nie.</p>
					<p>Lass los und du bist zurück auf voller Geschwindigkeit.</p>
					<p>Es sitzt in der Menüleiste oder im Tray und wirkt überall gleichzeitig – es ist kein Plug-in für eine
					einzelne Anwendung. Und es skaliert die Zeigerbewegung selbst, es ist ihm also egal, ob eine Maus, ein
					Trackpad, ein Trackball oder ein Stift sie erzeugt hat.</p>`,
				"keyLine": "Jede Taste oder Kombination, die du magst – du legst sie beim Einrichten fest.",
				"modes": {
					// Bleiben englisch: so heißen sie auch in den Einstellungen der App
					"hold": { "name": "Hold", "text": "Langsam, solange die Taste gedrückt ist. Das nehmen die meisten." },
					"toggle": { "name": "Toggle", "text": "Einmal drücken für langsam, nochmal drücken für zurück." },
					"inverted": { "name": "Inverted", "text": "Immer langsam, halten für schnell. Die Wahl bei Tremor oder Ermüdung." },
				},
			},
			// Die Behelfslösungen, die man heute benutzt – und warum jede zu kurz greift
			"workarounds": {
				"title": "Was du stattdessen gerade tust",
				"items": {
					"zoomCycle": {
						"title": "Rein-, umschalten, rauszoomen",
						"text": `Es funktioniert, aber es macht Präzision und Überblick zu einem Entweder-oder – dutzende Male
							pro Stunde. Schalte stattdessen einen Gang herunter – ein Viertel der Strecke bei derselben
							Bewegung – und die Ansicht bleibt, wo sie ist.`,
					},
					"arrowNudge": {
						"title": "Mit den Pfeiltasten schieben",
						"text": `Feste Schritte, in jeder Anwendung ein anderes Kürzel, und deine Hand muss den Zeiger verlassen,
							um sie zu erreichen. ShiftDown ist stufenlos, überall gleich, und deine Hand bleibt, wo sie war.`,
					},
					"lowerSensitivity": {
						"title": "Die Empfindlichkeit herunterdrehen",
						"text": `Dann ist den ganzen Tag alles langsam – auch die neunzig Prozent der Zeit, in denen du nur quer
							über den Bildschirm willst. ShiftDown ist langsam, solange du hältst, und sonst normal.`,
					},
					"buyHardware": {
						"title": "„Kauf dir halt eine Maus“",
						"text": `Auf einem Klapptisch ein nutzloser Rat – und für Trackpad, Trackball oder Stift überhaupt keine
							Hilfe. ShiftDown funktioniert mit dem, was ohnehin unter deiner Hand liegt.`,
					},
				},
			},
			// Einmal klar gesagt, damit es niemand erst herausfinden muss
			"limits": {
				"title": "Was es nicht tut",
				"items": {
					"games": {
						"title": "Es hilft deinem Aim nicht",
						"text": `ShiftDown verändert den System-Zeiger und hat deshalb keinen Effekt in Spielen, die die Maus
							über Raw Input auslesen – also in den meisten kompetitiven. Es ist für Werkzeuge gebaut, nicht für
							Spiele.`,
					},
					"tremor": {
						"title": "Es ist keine Tremor-Software",
						"text": `Bewegung herunterzuskalieren skaliert einen Tremor mit herunter, und der Inverted-Modus passt
							dafür gut. Aber es skaliert alles gleichmäßig – es trennt nicht Absicht von Zittern, wie es
							spezialisierte Tremor-Software tut.`,
					},
					"permission": {
						"title": "macOS fragt nach den Bedienungshilfen",
						"text": `Zeigerbewegung systemweit zu beobachten erfordert das – dieselbe Berechtigung, nach der jeder
							Fenstermanager und jedes Shortcut-Tool fragt. Du erteilst sie einmal. Deshalb kann das hier auch
							keine App aus dem Mac App Store sein.`,
					},
				},
			},
			"pen": {
				"title": "Besonders gut mit einem Stift.",
				"body": `<p>Ein Stift ist direkt, nicht präzise. Er setzt den Zeiger genau dorthin, wo du hinzeigst – aber „wo du
					hinzeigst“ ist begrenzt durch deine Hand und dadurch, wie viel Bildschirm jeder Millimeter Tablett abdeckt.
					Bei 100 % Zoom reicht das nicht, um das richtige Pixel zu treffen.</p>
					<p>ShiftDown tauscht das eine, das du in diesem Moment nicht brauchst – Direktheit – gegen das, was du
					brauchst. Und anders als mit der Maus kannst du dich hier nicht mit einem Empfindlichkeitsknopf freikaufen.</p>`,
				"demo": "Stift auf dem Tablett: dasselbe kleine Ziel, bei voller Geschwindigkeit und verlangsamt.",
			},
			// Wird auf /welcome gezeigt, kurz bevor macOS die Berechtigung abfragt
			"permission": {
				"title": "Warum es die Bedienungshilfen braucht",
				"body": `<p>ShiftDown beobachtet Zeigerbewegungen auf Systemebene und skaliert sie, solange deine Taste
					gehalten wird. Unter macOS erfordert das die Berechtigung „Bedienungshilfen“ – dieselbe, die jeder
					Fenstermanager und jedes Shortcut-Tool braucht. Du erteilst sie einmal in den Systemeinstellungen.</p>
					<p>ShiftDown liest nicht mit, was du tippst, nimmt deinen Bildschirm nicht auf und sendet deine Eingaben
					nirgendwohin.</p>`,
				"screenshot": "Systemeinstellungen → Datenschutz & Sicherheit → Bedienungshilfen, mit aktiviertem ShiftDown.",
			},
			"privacy": {
				"title": "Uns ist Privatsphäre wichtig – deshalb schützen wir deine",
				"intro": `So bauen wir jedes Produkt bei Zentru Systems, und ShiftDown ist keine Ausnahme. Es beobachtet
					Zeigerbewegungen, um seine Arbeit zu tun, und damit endet es: Es liest nicht mit, was du tippst, nimmt
					deinen Bildschirm nicht auf und sendet deine Eingaben nirgendwohin.`,
				"analytics": `Was wir erheben, sind anonyme Produktdaten – App-Starts, ob die Taste tatsächlich benutzt
					wurde, welche Einstellungen geändert werden. Kein Konto, keine personenbezogenen Daten, kein
					Geräte-Fingerabdruck, kein seitenübergreifendes Tracking. Es sagt uns, ob die App für Leute
					funktioniert, und sonst nichts.`,
				"controlBeforeLink": "Du kannst es in den Einstellungen komplett abschalten. Alle Details stehen in unserer ",
				"controlLinkLabel": "Datenschutzerklärung",
				"controlAfterLink": ".",
			},
			"pricing": {
				"title": "{price, number, ::currency/EUR}. Einmal.",
				"items": {
					"trial": "{days} Nutzungstage – es zählen nur die Tage, an denen du es benutzt, volle Version, keine Karte, kein Konto",
					"platforms": "{macOs}+ und {windows}+ in einer Lizenz",
					"machines": "Bis zu {machines} Geräte",
					"updates": "Kostenlose Updates",
					"refund": "{days} Tage Rückgabe, eine E-Mail genügt",
				},
				"anchor": "Einführungspreis. Regulär kostet es {regular, number, ::currency/EUR precision-integer}.",
				"note": `Wenn du das wegen eines Tremors oder aus motorischen Gründen brauchst und {price, number, ::currency/EUR} eine Hürde sind,
					schreib uns – wir schicken dir eine Lizenz.`,
			},
			"faq": {
				"title": "Fragen",
				"items": {
					"trackpad": {
						"question": "Funktioniert es auf einem Laptop-Trackpad?",
						"answer": `Ja, und genau dafür ist es gebaut. Ein Trackpad muss mit wenigen Zentimetern Weg einen ganzen
							Bildschirm abdecken, die Feinsteuerung ist also prinzipbedingt schlecht – und anders als bei einer
							Maus gibt es keinen Empfindlichkeitsknopf und keinen größeren Schreibtisch als Ausweg. Scrollen,
							Pinch-Zoom und Wischgesten bleiben unangetastet.`,
					},
					"fineAdjust": {
						"question": "Hat mein Editor nicht längst eine Feinjustierung?",
						"answer": `Modifier-Tasten verfeinern einen Wert, nachdem du etwas gegriffen hast. Sie helfen dir nicht
							dabei, überhaupt das Richtige zu greifen. ShiftDown wirkt vor dem Klick, in jeder App – auch in
							Plugin-Oberflächen, die nie einen Feinmodus bekommen haben.`,
					},
					"dpiButton": {
						"question": "Macht das nicht der DPI-Knopf an einer Gaming-Maus?",
						"answer": `Dieselbe Idee, aber er hängt an einem Gerät, er ist ein Modus, aus dem du wieder
							zurückschalten musst, und für Trackpad oder Stift-Tablett tut er nichts – also genau dort, wo das
							Problem am größten ist. Gegen Zeigerbeschleunigung tut er ebenfalls nichts: Dein System streckt eine
							schnelle Bewegung weiterhin und staucht eine langsame, dieselbe Handbewegung legt also nicht
							zuverlässig dieselbe Strecke zurück – egal, welche DPI-Stufe du gewählt hast. Das hier wirkt nur im
							Moment, arbeitet softwareseitig und funktioniert mit dem, was du ohnehin benutzt.`,
					},
					"tablet": {
						"question": "Funktioniert es mit einem Grafiktablett?",
						"answer": "Ja. Ein Stift ist direkt, aber nicht präzise – ShiftDown ist die fehlende Hälfte.",
					},
					"usageDays": {
						"question": "Wie läuft der Testzeitraum ab?",
						"answer": `In Nutzungstagen, nicht in Kalendertagen. Ein Tag zählt erst, wenn du es tatsächlich benutzt –
							lass es eine Woche liegen und der Test bewegt sich nicht. Du bekommst Tage echter Arbeit, keinen
							Countdown, der abläuft, während du mit etwas anderem beschäftigt bist.`,
					},
					"apps": {
						"question": "In welchen Apps funktioniert es?",
						"answer": `In allen. Es arbeitet unterhalb der Anwendungsebene und muss deshalb nichts über die Software
							wissen, die du benutzt.`,
					},
					"appStore": {
						"question": "Gibt es das im Mac App Store?",
						"answer": `Nein. Die Bedienungshilfen-Berechtigung, die ShiftDown braucht, steht Apps aus dem App
							Store nicht zur Verfügung. Deshalb verkaufen wir direkt.`,
					},
					"linux": {
						"question": "Linux?",
						"answer": `Noch nicht – ob es dazu kommt, hängt davon ab, wie viele Leute es wollen. Trag dich ein und
							wir sagen dir Bescheid, falls es so weit ist.`,
					},
				},
			},
			// Anmeldung für eine Linux-Version, in der FAQ-Antwort, die sagt, dass es keine gibt
			"linuxInterest": {
				"pitch": "Ich hätte Interesse an einer Linux-Version für {price, number, ::currency/EUR}",
				"action": "Trag mich ein",
				"success": "Notiert. Wir melden uns, falls es eine Linux-Version gibt.",
				"alreadySignedUp": "Du warst schon auf der Liste – trotzdem nochmal notiert.",
				"error": "Das hat nicht geklappt. Versuch es gleich nochmal.",
			},
			"finalCta": {
				"title": "Behalte deine Zoomstufe. Triff trotzdem.",
				"micro": "{days} Nutzungstage, volle Version. {macOs}+ und {windows}+.",
			},
			// Wird von der App beim ersten Start geöffnet, bevor macOS nach der Berechtigung fragt
			"welcome": {
				"metaTitle": "Willkommen bei ShiftDown",
				"metaDescription": "Der Einstieg in ShiftDown – und warum es die Bedienungshilfen braucht.",
				"title": "ShiftDown ist installiert.",
				"intro": {
					"macos": "Eine Berechtigung, dann bist du startklar. Hier ist, was macOS dich gleich fragt – und warum.",
					"windows": "Du bist startklar. So bekommst du in der nächsten Minute ein Gefühl dafür.",
				},
				"steps": {
					"permission": {
						"title": "macOS fragt nach den Bedienungshilfen",
						"text": `ShiftDown skaliert Zeigerbewegungen, solange deine Taste gehalten wird – dafür muss es diese
							Bewegung auf Systemebene beobachten. macOS schützt das über die Bedienungshilfen, dieselbe
							Berechtigung, nach der jeder Fenstermanager und jedes Shortcut-Tool fragt.`,
					},
					"grant": {
						"title": "Einmal erteilen, in den Systemeinstellungen",
						"text": `Systemeinstellungen → Datenschutz & Sicherheit → Bedienungshilfen, dann ShiftDown
							einschalten. Mehr ist nicht einzurichten.`,
					},
					"tryIt": {
						"title": "Probier es an etwas Kleinem",
						"text": `Öffne, womit du arbeitest, such dir einen Griff oder eine Kante, für die du sonst reinzoomst,
							und halte deine Taste, während du dich näherst. Das ist das ganze Produkt.`,
					},
					"customise": {
						"title": "Mach es zu deinem",
						"text": `Taste, Stärke der Verlangsamung und Modus änderst du in den Einstellungen. Die Voreinstellungen
							sind ein Startpunkt, keine Empfehlung.`,
					},
				},
				"reassurance": `ShiftDown liest nicht mit, was du tippst, nimmt deinen Bildschirm nicht auf und sendet deine
					Eingaben nirgendwohin.`,
				"trialNote": "Dein Test läuft – {days} Nutzungstage, volle Version, kein Konto, keine Karte.",
				"manualClaim": "Die App ist nicht in den Vordergrund gekommen? ShiftDown öffnen",
			},
		},
		"DialApp": {
			"sectionSummary": `Behalte deine Fenster auf macOS im Griff.
			<br></br>
			Wechsle die Fenster wie Tony.<br></br>
			Drücke den Shortcut, bewege die Maus, loslassen, Fenster gewechselt!.`,
			// TODO: Get the gaming aspect in there, "Windowswitching like gaming", "switch windows with like Tony Stark"
			"headsection": {
				"whatItIs": "Fenster wechseln, produktiv mit Emotionen",
				"reason": "Keine leeren Fahrten mit deinem Cursor, das Menü ist immer dort, wo du bist.",
			},
			"earlyAccess": {
				"getEarlyAccess": "Hol dir deinen Vorabzugang",
				"signupEarlyAccess-action": "Für Vorabzugang anmelden",
			},
			"section2": {
				"title": "Warum DialApp?",
				"content": `<maxWidth>Dein Cursor bleibt in der Mitte des Bildschirms, bereit für das nächste Fenster, ohne ihn an den Rand oder sogar auf einen anderen Bildschirm bewegen zu müssen,
						nur damit das Dock versteckt bleibt, bis es für eine Sekunde auftaucht, bevor es dich erneut im Stich lässt. Spare deine Energie für das, was du wirklich tun möchtest.<br></br></maxWidth>
						<maxWidth>DialApp löst dieses Problem, indem es ein radialesMenü anzeigt, wie in Science-Fiction und Spielen zu sehen, das alle deine offenen Fenster anzeigt.<br></br></maxWidth>
						<maxWidth>„Ha, das kann ich schon mit Cmd+Tab!" magst du sagen, aber versuche zwischen mehreren Finder-Fenstern zu wechseln...DialApp kann das<br></br></maxWidth>
						<maxWidth>Für wen ist DialApp? – Für jeden, der mit einem Mac arbeitet und sich einen besseren Weg wünscht, Fenster zu wechseln, als sie zu stapeln.</maxWidth>`
				// TODO: Add gif/video of DialApp showing multiple Finder windows.
			},
			"section3": {
				"title": "Features",
				"content": `<maxWidth>
					DialApp ist schnell, einfach und ist in zwei Minuten eingerichtet.<br></br>
					</maxWidth>
					<ul>
					<li><maxWidth>Anpassbarer globaler Shortcut.</maxWidth></li>
					<li><maxWidth>Ressourceneffizient, dein Mac wird durch DialApp nicht langsamer, egal wie alt er ist.</maxWidth></li>
					<li><maxWidth>Spaßig zu bedienen, anpassbar nach deinen Wünschen.</maxWidth></li>
					</ul>`
			},
			"terms": {
				"headline": "Terms and Conditions",
				"lastUpdate": "Last updated: July 18, 2026",
				"terms": `helloG`,
			},
			"privacyPolicy": {
				"headline": "Privacy Policy",
				"lastUpdate": "July 18, 2026",
				"policy": `helloG`
			}
		},
	},
	"Main": {
		"because1": "Weil uns nicht gefällt, wie Unternehmen ihre Kunden behandeln.",
		"because2": "Weil uns schlechtes Design nicht gefällt.",
		"because3": "Weil wir <span>lieben</span> richtig gut.",

		"weBelieve": `Wir glauben, dass alles, was wir tun, wirklich gut sein sollte.<br></br>
			Wir glauben das, weil wir nach der Achtsamkeit und nachhaltigem Design der Vergangenheit streben.<br></br>
			<br></br>
			Denk nur an all die zeitlosen Designs, die wir haben – das ist es, was wir lieben.<br></br>
			<span>Wie {quoteer} es sagte</span>`,
		"timelessStark": "Zeitloses Design ist das einzige Design das nachhaltig sein kann und das einzige Design auf das wir uns fokusieren sollten.",
		"timelessWe": "Keine unnötigen Funktionen, keine Kompromisse—einfach gut gemachte Systeme, die genau das tun, was sie sollen, nicht mehr, nicht weniger.",

		"weFocusOn": `Wir fokusieren uns auf was du fühlst, nicht wie wir dieses Gefühl liefern, nur um sicherzustellen, dass du mehr davon bekommst.<br></br>
							<br></br>
							Das unbeschreibbare Gefühl ein Produkt zu benützen, dass <i>richtig gut</i> ist.`,

		"checkOutAllOther": "Schau dir alle anderen Projekte und Felder an",
	},
	"Fields": {
		"digitalExperiences": {
			"name": "Digitale Erfahrungen",
			"subline": "Nützlich, schön, emotional – eine Erfahrung",
			"headline-p1": "Wir können Ihnen helfen Ihr ",
			"headline-p2/1": "Produkt",
			"headline-p2/2": "Projekt",
			"headline-p3": "zu einer <span>Erfahrung</span> zu machen.",
			"text1":
				`<p>Damit Ihre Kunden fühlen, was Sie meinen.</p>
						<br></br>
						<br></br>
						<p>Unsere Expertise beinhaltet: User interface design, Klangdesign, Scoring und Musikproduktion</p>
						<br></br>
						<br></br>
						<p>Physikalischer Charakter für die digitale Welt</p>
						<p>Viele Dinge, die wir lieben sind in der realen Welt, wir möchten diesen Charakter und dieses Gefühl auch für digitale Dinge erreichen.</p>`,
			"ui": {
				"headline": "User Interfaces",
				"text": `<p>Apps, Websiten und Spiel Interfaces, designt Probleme zu lösen, designt ein Erlebnis zu sein.</p>`,
			},
			"sonicDesign": {
				"headline": "Sonic Design",
				"text":
					`<p>Wir machen Soundeffekte, Klanglandschaften und Musik in Harmonie, um die richtigen Gefühle zu übertragen.
						<br></br>
						<br></br>
						Musik für Film, Animation und Werbung
					</p>`,
			},
		},
		"evar": {
			"subline": "Spiele, weltraum Spiele",
		},
		"inTheFuture": "In Zukunft werden alle unsere Felder hier sein.",
	},
	// always there, nav, footer general translations
	"Always": {
		// Nav
		"products": "Produkte",
		"fields": "Felder",
		// Footer
		"letsMeetAt": "Besuche uns auf",
		"weAre": "Wir sind",
		"imprint": "Impressum",
		"privacyPolicy": "Datenschutzerklärung",
		"email": "E-Mail",
		"valid": "valide",
		"invalid": "ungültig",
	},
	//
	"Signup": {
		"share": "Teile, was du gefunden hast?",
		"noticed": "Du wirst so bald wie möglich von uns hören.",
		"multipleNotice": "Wir werden dir nicht zwei E-Mails senden, aber wir haben uns deine Begeisterung vorgemerkt!",
	},
	//
	"createdBy": "Designed und gebaut von Zentru Systems mit 🫀 ❤️"
} as const