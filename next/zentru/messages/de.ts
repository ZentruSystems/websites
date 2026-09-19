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
					<maxWidth>Glaub mir, soetwas passiert allen – die ganze Zeit, ich kenne diesen Schmerz, das ist der Grund, warum ich .rec mache.</maxWidth>
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
		"speedswitch": {
			"meta": {
				// Der Zusatz muss den Klick verdienen: der Name allein sagt nicht, was das Ding tut
				"title": "SpeedSwitch — Zielgenauigkeit ohne Zoomen",
			},
			// Die Kachel in der Produktübersicht
			"overview": {
				"icon": "Das App-Icon von SpeedSwitch.",
				// Für SpeedSwitch.PointerPath.svg – gezeichnet und einsatzbereit, aktuell steht dort aber das Icon
				"image": `Zweimal dieselbe Handbewegung: ohne Taste schießt der Zeiger über das Ziel hinaus und sucht
					es, mit gehaltener Taste legt er ein Viertel der Strecke zurück und landet darauf.`,
			},
			"hero": {
				"headline": "Hör auf, nur für's Verschieben reinzuzoomen.",
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
					"headline": "Präzision mit dem großen Ganzen im Blick.",
					"body": `<p>Gestaltung beurteilst du als Ganzes. Ob etwas richtig sitzt, hängt vom Abstand auf der
						anderen Seite ab und von der Ausrichtung drei Elemente weiter – dieses Urteil braucht die ganze
						Fläche auf dem Bildschirm. Es genau zu platzieren braucht das Gegenteil.</p>
						<p>Also zoomst du rein, schiebst, zoomst raus zum Prüfen, zoomst wieder rein zum Korrigieren. Die
						meisten machen das so lange, dass es ihnen gar nicht mehr als Aufwand auffällt. Halte stattdessen
						deine Taste, und dieselbe Handbewegung legt nur ein Viertel der Strecke zurück: Du triffst den
						Pixel in der Zoomstufe, in der du ohnehin warst, und musst hinterher nichts mehr kontrollieren.</p>`,
					"solves": `<ul>
						<li>Ein Element verschieben, ohne den Rest aus den Augen zu verlieren</li>
						<li>Nach Augenmaß an etwas ausrichten, das am anderen Ende der Fläche liegt</li>
						<li>Ein Objekt aus einem Stapel überlappender Objekte auswählen</li>
						</ul>`,
					"demo": "Ein Element genau platzieren, während die ganze Fläche sichtbar bleibt.",
					"still": "Eine Fläche in Arbeits-Zoomstufe, während ein Element platziert wird.",
				},
				"3d": {
					"label": "3D",
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
					aktiviert ein anderes Werkzeug.</p>
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
							um sie zu erreichen. SpeedSwitch ist stufenlos, überall gleich, und deine Hand bleibt, wo sie war.`,
					},
					"lowerSensitivity": {
						"title": "Die Empfindlichkeit herunterdrehen",
						"text": `Dann ist den ganzen Tag alles langsam – auch die neunzig Prozent der Zeit, in denen du nur quer
							über den Bildschirm willst. SpeedSwitch ist langsam, solange du hältst, und sonst normal.`,
					},
					"buyHardware": {
						"title": "„Kauf dir halt eine Maus“",
						"text": `Auf einem Klapptisch ein nutzloser Rat – und für Trackpad, Trackball oder Stift überhaupt keine
							Hilfe. SpeedSwitch funktioniert mit dem, was ohnehin unter deiner Hand liegt.`,
					},
				},
			},
			// Einmal klar gesagt, damit es niemand erst herausfinden muss
			"limits": {
				"title": "Was es nicht tut",
				"items": {
					"games": {
						"title": "Es hilft deinem Aim nicht",
						"text": `SpeedSwitch verändert den System-Zeiger und hat deshalb keinen Effekt in Spielen, die die Maus
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
					<p>SpeedSwitch tauscht das eine, das du in diesem Moment nicht brauchst – Direktheit – gegen das, was du
					brauchst. Und anders als mit der Maus kannst du dich hier nicht mit einem Empfindlichkeitsknopf freikaufen.</p>`,
				"demo": "Stift auf dem Tablett: dasselbe kleine Ziel, bei voller Geschwindigkeit und verlangsamt.",
			},
			// Wird auf /welcome gezeigt, kurz bevor macOS die Berechtigung abfragt
			"permission": {
				"title": "Warum es die Bedienungshilfen braucht",
				"body": `<p>SpeedSwitch beobachtet Zeigerbewegungen auf Systemebene und skaliert sie, solange deine Taste
					gehalten wird. Unter macOS erfordert das die Berechtigung „Bedienungshilfen“ – dieselbe, die jeder
					Fenstermanager und jedes Shortcut-Tool braucht. Du erteilst sie einmal in den Systemeinstellungen.</p>
					<p>SpeedSwitch liest nicht mit, was du tippst, nimmt deinen Bildschirm nicht auf und sendet deine Eingaben
					nirgendwohin.</p>`,
				"screenshot": "Systemeinstellungen → Datenschutz & Sicherheit → Bedienungshilfen, mit aktiviertem SpeedSwitch.",
			},
			"privacy": {
				"title": "Mir ist Privatsphäre wichtig – deshalb schütze ich deine",
				"intro": `So baue ich jedes Produkt bei Zentru Systems, und SpeedSwitch ist keine Ausnahme. Es beobachtet
					Zeigerbewegungen, um seine Arbeit zu tun, und damit endet es: Es liest nicht mit, was du tippst, nimmt
					deinen Bildschirm nicht auf und sendet deine Eingaben nirgendwohin.`,
				"analytics": `Was ich erhebe, sind anonyme Produktdaten – App-Starts, ob die Taste tatsächlich benutzt
					wurde, welche Einstellungen geändert werden. Kein Konto, keine personenbezogenen Daten, kein
					Geräte-Fingerabdruck, kein seitenübergreifendes Tracking. Es sagt mir, ob die App für Leute
					funktioniert, und sonst nichts.`,
				"controlBeforeLink": "Du kannst es in den Einstellungen komplett abschalten. Alle Details stehen in meiner ",
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
					schreib mir – ich schicke dir eine Lizenz.`,
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
							dabei, überhaupt das Richtige zu greifen. SpeedSwitch wirkt vor dem Klick, in jeder App – auch in
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
						"answer": "Ja. Ein Stift ist direkt, aber nicht präzise – SpeedSwitch ist die fehlende Hälfte.",
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
						"answer": `Nein. Die Bedienungshilfen-Berechtigung, die SpeedSwitch braucht, steht Apps aus dem App
							Store nicht zur Verfügung. Deshalb verkaufe ich direkt.`,
					},
					"linux": {
						"question": "Linux?",
						"answer": `Noch nicht – ob es dazu kommt, hängt davon ab, wie viele Leute es wollen. Trag dich ein und
							ich sage dir Bescheid, falls es so weit ist.`,
					},
				},
			},
			// Anmeldung für eine Linux-Version, in der FAQ-Antwort, die sagt, dass es keine gibt
			"linuxInterest": {
				"pitch": "Ich hätte Interesse an einer Linux-Version für {price, number, ::currency/EUR}",
				"action": "Trag mich ein",
				"success": "Notiert. Ich melde mich, falls es eine Linux-Version gibt.",
				"alreadySignedUp": "Du warst schon auf der Liste – trotzdem nochmal notiert.",
				"error": "Das hat nicht geklappt. Versuch es gleich nochmal.",
			},
			"finalCta": {
				"title": "Behalte deine Zoomstufe. Triff trotzdem.",
				"micro": "{days} Nutzungstage, volle Version. {macOs}+ und {windows}+.",
			},
			// Wird von der App beim ersten Start geöffnet, bevor macOS nach der Berechtigung fragt
			"welcome": {
				"metaTitle": "Willkommen bei SpeedSwitch",
				"metaDescription": "Der Einstieg in SpeedSwitch – und warum es die Bedienungshilfen braucht.",
				"title": "SpeedSwitch ist installiert.",
				"intro": {
					"macos": "Eine Berechtigung, dann bist du startklar. Hier ist, was macOS dich gleich fragt – und warum.",
					"windows": "Du bist startklar. So bekommst du in der nächsten Minute ein Gefühl dafür.",
				},
				"steps": {
					"permission": {
						"title": "macOS fragt nach den Bedienungshilfen",
						"text": `SpeedSwitch skaliert Zeigerbewegungen, solange deine Taste gehalten wird – dafür muss es diese
							Bewegung auf Systemebene beobachten. macOS schützt das über die Bedienungshilfen, dieselbe
							Berechtigung, nach der jeder Fenstermanager und jedes Shortcut-Tool fragt.`,
					},
					"grant": {
						"title": "Einmal erteilen, in den Systemeinstellungen",
						"text": `Systemeinstellungen → Datenschutz & Sicherheit → Bedienungshilfen, dann SpeedSwitch
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
				"reassurance": `SpeedSwitch liest nicht mit, was du tippst, nimmt deinen Bildschirm nicht auf und sendet deine
					Eingaben nirgendwohin.`,
				"trialNote": "Dein Test läuft – {days} Nutzungstage, volle Version, kein Konto, keine Karte.",
				"manualClaim": "Die App ist nicht in den Vordergrund gekommen? SpeedSwitch öffnen",
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
		"because1": "Weil ich möchte, dass Kunden gut behandelt werden.",
		"because2": "Weil mir gutes Design wichtig ist.",
		"because3": "Weil ich „richtig gut“ <span>liebe</span>.",

		"weBelieve": `Ich glaube, dass alles, was ich tue, wirklich gut sein sollte.<br></br>
			Ich glaube das, weil ich nach der Achtsamkeit und nachhaltigem Design der Vergangenheit strebe.<br></br>
			<br></br>
			Denk nur an all die zeitlosen Designs, die wir haben – das ist es, was ich liebe.<br></br>
			<span>Wie {quoteer} es sagte</span>`,
		"timelessStark": "Zeitloses Design ist das einzige Design das nachhaltig sein kann und das einzige Design auf das wir uns fokusieren sollten.",
		"timelessWe": "Keine unnötigen Funktionen, keine Kompromisse—einfach gut gemachte Systeme, die genau das tun, was sie sollen, nicht mehr, nicht weniger.",

		"weFocusOn": `Ich fokusiere mich auf was du fühlst, nicht wie ich dieses Gefühl liefere, nur um sicherzustellen, dass du mehr davon bekommst.<br></br>
							<br></br>
							Das unbeschreibbare Gefühl ein Produkt zu benützen, dass <i>richtig gut</i> ist.`,

		// Der Über-mich-Abschnitt auf der Startseite. Anker #about, verlinkt aus dem Footer.
		"about": {
			"title": "Über mich",
			"body": `<p>Ich bin Felix – Entwickler, Musiker, Design-Liebhaber und jemand, der Dinge gerne möglich
				macht.</p>
				<p>Coole Sachen mit coolen Leuten zu machen ist für mich das Beste, was ich tun kann.</p>
				<p>Und dabei mache ich Dinge gerne "richtig gut". Für mich heißt das: Ich denke immer daran, was eine
				gute Balance wäre, um die gesetzten Ziele zu erreichen, daran, wie Menschen meine Produkte benutzen werden, und daran, was die beste Entscheidung wäre – nicht
				für mich und meine Firma, sondern für alle.</p>`,
			"findMe": "Du findest mich und Zentru Systems auf LinkedIn und GitHub:",
			// Benennt die Zeile, zu der die Icons gehören – die Icons allein sagen nicht, wessen sie sind
			"mineLabel": "Ich",
			"zentruLabel": "Zentru Systems",
			"closing": `<p>Wenn du Unterstützung brauchst, erreichst du mich dort oder über
				<mailLink>service@zentru.systems</mailLink></p>`,
		},
	},
	"Fields": {
		"digitalExperiences": {
			"name": "Digitale Erfahrungen",
			"subline": "Nützlich, schön, emotional – eine Erfahrung",
			"headline-p1": "Ich kann Ihnen helfen Ihr ",
			"headline-p2/1": "Produkt",
			"headline-p2/2": "Projekt",
			"headline-p3": "zu einer <span>Erfahrung</span> zu machen.",
			"text1":
				`<p>Damit Ihre Kunden fühlen, was Sie meinen.</p>
						<br></br>
						<br></br>
						<p>Meine Expertise beinhaltet: User interface design, Klangdesign, Scoring und Musikproduktion</p>
						<br></br>
						<br></br>
						<p>Physikalischer Charakter für die digitale Welt</p>
						<p>Viele Dinge, die ich liebe sind in der realen Welt, ich möchte diesen Charakter und dieses Gefühl auch für digitale Dinge erreichen.</p>`,
			"ui": {
				"headline": "User Interfaces",
				"text": `<p>Apps, Websiten und Spiel Interfaces, designt Probleme zu lösen, designt ein Erlebnis zu sein.</p>`,
			},
			"sonicDesign": {
				"headline": "Sonic Design",
				"text":
					`<p>Ich mache Soundeffekte, Klanglandschaften und Musik in Harmonie, um die richtigen Gefühle zu übertragen.
						<br></br>
						<br></br>
						Musik für Film, Animation und Werbung
					</p>`,
			},
		},
		// /project-bootstrap – formell ("Sie") wie die anderen Felder, nicht "du" wie die Produktseiten
		"projectBootstrap": {
			"name": "Project Bootstrap",
			"subline": "Tools, Pläne und Beratung",
			"meta": {
				"title": "Project Bootstrap — Ihr Softwareprojekt richtig starten",
				"description": "Zentru Systems hilft kleinen Finanzunternehmen, Softwareprojekte richtig zu starten: passende Tools, eine solide Architektur und Entscheidungen, die sie verstehen.",
			},
			"hero": {
				"eyebrow": "Project Bootstrap<audience> · für kleine Finanzunternehmen</audience>",
				"headline": "Ich helfe kleinen Finanzunternehmen, ihr Softwareprojekt richtig zu starten.",
				"sub": `Von der Idee oder dem KI-gebauten Prototyp zu einem Projekt, das startklar ist, meist innerhalb von
					ein bis zwei Wochen: die Tools, die Sie wirklich brauchen, eine Systemarchitektur, in der alles
					zusammenpasst, ein Zeitplan mit Arbeitspaketen und die richtigen Leute. Jede technische Entscheidung
					erkläre ich in der Sprache Ihres Geschäfts, damit Sie immer wissen, was passiert.`,
				"note": "Kostenlos und unverbindlich. Sie erhalten eine kurze Einschätzung Ihres Projekts.",
			},
			"cta": {
				"label": "Kostenloses Strategiegespräch buchen",
			},
			"proof": {
				"label": "Aktuelle Projekte",
				"items": {
					"forecasting": {
						"title": "Finanzprognosen",
						"text": "Bayessche Regression mit Monte-Carlo-Roll-up",
					},
					"marketData": {
						"title": "Markt- und Nachrichteneinfluss",
						"text": "Live bezogen über die FastMarkets API",
					},
					"documents": {
						"title": "Berichtsextraktion",
						"text": "GuV-Daten aus PDF, Word, Excel und CSV",
					},
					"jobs": {
						"title": "Auftragseingang",
						"text": "Von der E-Mail in Google Sheets und ein eigenes Auftragssystem",
					},
				},
			},
			"problem": {
				"title": "Eine gute Idee ist noch kein Projekt.",
				"intro": `Sie haben eine Idee, vielleicht sogar einen Prototyp, den ein KI-Tool für Sie gebaut hat. Was fehlt,
					ist alles zwischen diesem Punkt und einem Team, das liefert: welche Tools Sie wirklich brauchen, wie
					die Teile zusammenpassen, was zuerst gebaut wird und wer es bauen soll.`,
				"items": {
					"tools": {
						"title": "Für die falschen Tools bezahlen",
						"text": `Ohne zu wissen, was Sie tatsächlich brauchen, landen Sie bei zu vielen Abos oder den
							teuren, und bei Tools, die nicht miteinander sprechen.`,
					},
					"outsourcing": {
						"title": "Gebaut, wie es dem Dienstleister passt",
						"text": `Ein externes Team baut meist so, wie es für das Team am einfachsten ist. Das ist nicht
							unbedingt das Beste für Sie, und ohne eigenen Plan erkennen Sie den Unterschied nicht.`,
					},
					"plan": {
						"title": "Kein Plan zum Steuern",
						"text": `Ohne Meilensteine und klare Arbeitspakete kann niemand sagen, ob das Projekt auf Kurs ist,
							bis Zeit und Budget überschritten sind.`,
					},
				},
				"cost": `Jede Woche Rätselraten kostet Budget, und die frühesten Entscheidungen, wie Tools, Architektur und
					die ersten Einstellungen, lassen sich später am teuersten rückgängig machen.`,
			},
			"outcomes": {
				"title": "Starten Sie mit einem Projekt, das bereit ist zu laufen.",
				"intro": `Wenn wir fertig sind, ist Ihr Projekt aufgesetzt und bereit für die Leute, die es bauen, und Sie
					verstehen, warum es so aufgesetzt ist.`,
				"items": {
					"tools": {
						"title": "Nur die Tools, die Sie brauchen",
						"text": "Jedes Tool hat eine Aufgabe. Nichts, wofür Sie zahlen, liegt ungenutzt herum, und nichts Wichtiges fehlt.",
					},
					"structure": {
						"title": "Teile, die zusammenarbeiten",
						"text": `Eine Systemarchitektur, damit Daten, Tools und Menschen miteinander statt gegeneinander
							arbeiten.`,
					},
					"plan": {
						"title": "Raum zum Wachsen",
						"text": `Arbeitspakete, die unabhängig voneinander erledigt werden können, damit Sie Leute
							hinzunehmen oder ein Paket extern vergeben können, ohne dass alles auf alles andere wartet.`,
					},
					"onboarding": {
						"title": "Schnelleres Onboarding",
						"text": `Dokumentierte Tools und ein praktisches Onboarding, damit Ihre Führungskräfte einspringen
							können und neue Mitarbeitende loslegen, ohne dass Sie alles zweimal erklären.`,
					},
					"decisions": {
						"title": "Entscheidungen, die Sie verstehen",
						"text": "Technik- und Personalentscheidungen in der Sprache Ihres Geschäfts erklärt, bevor Sie sich festlegen.",
					},
					"meetings": {
						"title": "Weniger Meetings, klare Berichte",
						"text": `Mit dem Management-Upgrade übernehme ich das Tagesgeschäft. Sie bekommen einen
							wöchentlichen Termin und einen Statusbericht statt eines Kalenders voller Meetings.`,
					},
				},
				"evidence": `In den beiden Projekten weiter unten hat das meinen Kunden Luft für mehr Arbeit verschafft: einer
					führt jetzt parallele Projekte und hat neue Kunden gewonnen, der andere nimmt mehr Aufträge an, bei einer
					Fehlerquote nahe null.`,
			},
			"solution": {
				"title": "Eine Person zwischen Ihrem Geschäft und Ihrer Technik.",
				"intro": `<p>Ich bringe Ihr Projekt von der Idee zu einem funktionierenden Setup: Projektstruktur, Auswahl
					der Tools, Technologieberatung, Umsetzung der Idee und Unterstützung bei der Personalauswahl.</p>
					<p>Dabei entlaste ich die Geschäftsführung, streiche Meetings, die niemand braucht, und übersetze
					zwischen Geschäft und Technik, damit aus einem Missverständnis keine Wochen Nacharbeit werden.</p>`,
				"estimate": "Etwa 95 % der auftretenden Probleme löse ich, ohne dass Sie etwas tun müssen.",
				"portraitAlt": "Felix, der Zentru Systems führt",
				"stagesTitle": "Wie ein Projekt zusammenkommt",
				"ongoing": "Laufend, mit dem Management-Upgrade",
				"stages": {
					"assess": {
						"title": "Einschätzen",
						"text": "Wo Ihre Idee oder Ihr Prototyp steht, was funktioniert und was fehlt.",
					},
					"architecture": {
						"title": "Strukturieren",
						"text": "Eine Systemarchitektur, damit jeder Teil des Projekts zusammenpasst.",
					},
					"tools": {
						"title": "Tools",
						"text": "Die Tools auswählen, einrichten und verbinden, die das Projekt wirklich braucht.",
					},
					"onboarding": {
						"title": "Onboarding",
						"text": "Sie und Ihr Team lernen jedes Tool kennen, das für Sie neu ist.",
					},
					"manage": {
						"title": "Managen",
						"text": "Probleme, Aufgaben, Anforderungen, Einstellungen und Meetings, laufend betreut.",
					},
				},
			},
			"deliverables": {
				"title": "Was Sie bekommen",
				"intro": "Jedes Ergebnis hat einen geschäftlichen Grund. Das leistet jedes einzelne für Sie.",
				"tags": {
					"setup": "Setup",
					"management": "Management-Upgrade",
				},
				"items": {
					"assessment": {
						"title": "Projekteinschätzung",
						"text": `Wo Ihre Idee oder Ihr Prototyp steht, was fehlt und was es braucht, damit Sie auf Basis
							von Fakten entscheiden statt zu raten.`,
					},
					"timeline": {
						"title": "Projektzeitplan",
						"text": "Meilensteine mit Terminen, damit Sie wissen, was wann passiert, und Budget und Personal danach planen können.",
					},
					"workPackages": {
						"title": "Arbeitspakete",
						"text": `Das Projekt, aufgeteilt in Teile, die unabhängig bearbeitet werden können, damit Sie
							einstellen, auslagern oder parallel arbeiten können.`,
					},
					"architecture": {
						"title": "Systemarchitektur-Dokument",
						"text": `Wie alle Teile des Projekts zusammenpassen, schriftlich festgehalten, damit alle auf
							dasselbe System hinarbeiten und später nichts neu gebaut werden muss, um es anzubinden.`,
					},
					"tools": {
						"title": "Tools, komplett eingerichtet",
						"text": `Projektmanagement-, Kommunikations- und Entwicklungstools passend zu Ihrer Größe,
							miteinander verbunden und ab dem ersten Tag bereit.`,
					},
					"onboarding": {
						"title": "Onboarding",
						"text": `Ich gehe die Tools mit Ihnen, Ihren Führungskräften und neuen Mitarbeitenden so durch, wie
							es für die jeweilige Person passt, damit das System auch ohne mich funktioniert.`,
					},
					"consulting": {
						"title": "Technik- und Personalberatung",
						"text": `Hilfe bei der Entscheidung, was gebaut, was gekauft und wer eingestellt wird, damit Sie
							die Leute einstellen, die Sie wirklich brauchen.`,
					},
					"management": {
						"title": "Laufendes Projektmanagement",
						"text": `Ich manage das Projekt im Tagesgeschäft: Probleme, Aufgaben, Anforderungen und
							Einstellungen, mit Blick auf die Kosten. Sie bekommen einen wöchentlichen Termin und einen
							Statusbericht.`,
					},
				},
			},
			"comparison": {
				"title": "Vorher und nachher",
				"beforeLabel": "Ohne soliden Start",
				"afterLabel": "Mit Project Bootstrap",
				"rows": {
					"guessing": {
						"before": "Uninformiertes Raten",
						"after": "Entscheidungen auf Basis einer Einschätzung",
					},
					"disconnected": {
						"before": "Unverbundene Tools",
						"after": "Die richtigen Tools, verbunden",
					},
					"expensive": {
						"before": "Falsche, teure Tools",
						"after": "Nur was Sie brauchen, passend zu Ihrer Größe",
					},
					"plan": {
						"before": "Kein echter Plan hinter dem Projekt",
						"after": "Systematische Dokumentation: Architektur, Zeitplan, Arbeitspakete",
					},
					"budget": {
						"before": "Zeit und Budget überschritten",
						"after": "Ein Zeitplan und ein Budget zum Steuern",
					},
					"hires": {
						"before": "Unnötige oder falsche Einstellungen",
						"after": "Die richtigen Leute",
					},
					"meetings": {
						"before": "Viele Meetings, weil Technik und Geschäft verschiedene Sprachen sprechen",
						"after": "Weniger Meetings, mit einer Person, die übersetzt",
					},
				},
			},
			"cases": {
				"title": "Ergebnisse aus echten Projekten",
				"intro": "Zwei Projekte, die ich aufgesetzt, gemanagt und beraten habe.",
				"labels": {
					"challenge": "Die Ausgangslage",
					"work": "Was ich getan habe",
					"result": "Das Ergebnis",
				},
				"items": {
					"forecasting": {
						"title": "Ein System für Finanzprognosen",
						"challenge": `Die Prognosen hingen an Zahlen, die über Gewinn- und Verlustrechnungen und Berichte in
							PDF-, Word-, Excel- und CSV-Dateien verteilt waren.`,
						"work": `Ein Prognosesystem aufgesetzt, gemanagt und beraten: ein angepasstes bayessches
							Regressionsmodell mit Monte-Carlo-Simulation für das Roll-up, Markt- und Nachrichteneinflüsse
							über die FastMarkets API und die Datenextraktion aus all diesen Dokumenten.`,
						"result": "Der Kunde hatte wieder Luft für parallele Projekte und neue Kunden.",
					},
					"jobs": {
						"title": "Auftragsextraktion aus E-Mails",
						"challenge": "Aufträge kamen per E-Mail und mussten von Hand ins Auftragssystem übertragen werden: langsam und fehleranfällig.",
						"work": `Ein System aufgesetzt, gemanagt und beraten, das Aufträge aus eingehenden E-Mails in Google
							Sheets und ein eigenes Auftragssystem überträgt.`,
						"result": `Der Kunde nimmt mehr Aufträge an, die Fehler sind praktisch auf null gesunken, und es
							bleibt Zeit, Sonderaufträge persönlich zu betreuen, was Kundenbindung und -zufriedenheit
							verbessert hat.`,
					},
				},
			},
			"process": {
				"title": "So funktioniert es",
				"steps": {
					"call": {
						"title": "Strategiegespräch buchen",
						"text": "Wir sprechen über Ihr Projekt, was es erreichen soll und wo es gerade hakt.",
					},
					"plan": {
						"title": "Einschätzung und Plan erhalten",
						"text": `Ich ermittle den aktuellen Stand, die Probleme und ihre Lösungen und erstelle den
							Zeitplan und die Systemarchitektur.`,
					},
					"implement": {
						"title": "Tools werden umgesetzt",
						"text": "Ich richte die vereinbarten Tools ein, verbinde sie, schule Ihr Team und lege die definierten Aufgaben an.",
					},
				},
			},
			"packages": {
				"title": "Zwei Arten, mit mir zu arbeiten",
				"intro": `Jedes Projekt beginnt mit dem Setup. Management ist ein Upgrade, wenn ich das Projekt managen
					soll.`,
				"caption": "Was jedes Paket enthält",
				"featureLabel": "Enthalten",
				"included": "Enthalten",
				"notIncluded": "Nicht enthalten",
				"priceLabel": "Preis",
				"setup": {
					"tag": "Standard",
					"name": "Setup",
					"summary": "Ihr Projekt, aufgesetzt und startklar.",
					"fit": "Das Richtige, wenn Sie oder jemand in Ihrem Team das Projekt managt.",
					"price": "Festpreis, bis zu {weeks} Wochen",
				},
				"management": {
					"tag": "Upgrade",
					"name": "Setup + Management",
					"summary": "Aufgesetzt, dann von mir gemanagt.",
					"fit": "Das Richtige, wenn ich das Projekt managen soll und Sie in einem wöchentlichen Termin auf dem Laufenden bleiben.",
					"price": "Setup zum Festpreis, danach monatlich oder stundenweise",
				},
				"rows": {
					"assessment": "Projekteinschätzung",
					"architecture": "Systemarchitektur-Dokument",
					"timeline": "Zeitplan und Arbeitspakete",
					"tools": "Tools eingerichtet und verbunden",
					"onboarding": "Onboarding für Sie und Ihr Team",
					"consulting": "Technik- und Personalberatung, erste {weeks} Wochen inklusive",
					"dayToDay": "Projektmanagement im Tagesgeschäft",
					"meetings": "Ein wöchentlicher Termin statt vieler Meetings",
					"reports": "Statusberichte",
					"issues": "Problembehandlung und Kostenkontrolle",
				},
			},
			"faq": {
				"title": "Fragen",
				"items": {
					"software": {
						"question": "Funktioniert das mit unserer bestehenden Software?",
						"answer": "Ja. Ich beginne mit den Tools, die Sie bereits nutzen, und baue darauf auf.",
					},
					"knowledge": {
						"question": "Brauchen wir technisches Wissen?",
						"answer": "Nein. Ich erkläre alles in der Sprache Ihres Geschäfts. Wenn Sie technisches Wissen haben, umso besser.",
					},
					"duration": {
						"question": "Wie lange dauert die Umsetzung?",
						"answer": `Das Setup dauert meist ein bis zwei Wochen, und es geht schneller, wenn ich die nötigen
							Informationen bekomme, sobald ich sie brauche. Wenn wir auch die Idee gemeinsam schärfen, kann
							es länger dauern, je nachdem, wie viel Beratung nötig ist. Das Management, falls Sie es wählen,
							läuft fortlaufend.`,
					},
					"consulting": {
						"question": "Ist die Beratung inklusive?",
						"answer": "Ja, ohne Aufpreis in den ersten {weeks} Wochen. Danach gelten meine Standardsätze.",
					},
					"handover": {
						"question": "Können andere mit dem System arbeiten?",
						"answer": `Ja. Ich baue das Setup so und schule Ihr Team so darauf ein, dass Ihre Führungskräfte
							einspringen und neue Mitarbeitende selbst einarbeiten können.`,
					},
					"breaks": {
						"question": "Was passiert, wenn etwas nicht mehr funktioniert?",
						"answer": `Sie können sich jederzeit an mich wenden. Wenn Sie mein Standard-Setup nutzen, informiere
							ich Sie außerdem über Probleme, auf die andere Kunden stoßen, und helfe Ihnen, die Lösung
							umzusetzen.`,
					},
					"smallBusiness": {
						"question": "Passt das auch für ein kleineres Unternehmen?",
						"answer": `Ja, genau dafür ist es gedacht. Auch ein kleines Unternehmen ohne eigenes
							Entwicklungsteam sollte Software auf Weltklasseniveau bauen können.`,
					},
					"involvement": {
						"question": "Wie viel Einsatz braucht es von unserem Team?",
						"answer": `So viel, wie Sie möchten. Mit dem Management-Upgrade sprechen Sie einmal pro Woche mit mir.
							Sie können das Projekt auch selbst managen und mich als Berater einsetzen.`,
					},
					"pricing": {
						"question": "Wie wird der Service abgerechnet?",
						"answer": `Das Setup, bis zu {weeks} Wochen, ist ein Festpreis. Das Management danach wird monatlich
							oder nach Stunden abgerechnet, je nachdem, was besser zu Ihrem Projekt passt.`,
					},
					"call": {
						"question": "Was passiert im Gespräch?",
						"answer": `Ich lerne das Projekt kennen, das Sie im Kopf haben, und ob und wie ich am besten helfen
							kann. Wenn wir zusammenarbeiten, lege ich sofort los. Über das Management-Upgrade müssen Sie noch
							nicht entscheiden, aber es hilft, wenn Sie es schon wissen.`,
					},
				},
			},
			"finalCta": {
				"title": "Finden Sie heraus, wie Ihr Projekt auf festem Boden starten kann.",
				"intro": "Im kostenlosen Strategiegespräch bekommen Sie:",
				"items": {
					"assessment": "Eine kurze Einschätzung, wo Ihr Projekt steht",
					"recommendations": "Praktische Empfehlungen zu Technologie und Projektstruktur",
					"nextSteps": "Klare nächste Schritte, ob Sie mit mir arbeiten oder nicht",
				},
				"note": "Für kleine Unternehmen mit einem Softwareprojekt im Blick. Kostenlos und unverbindlich.",
			},
			"booked": {
				"title": "Ihr Gespräch ist gebucht.",
				"intro": "Vielen Dank. Die Bestätigung und die Kalendereinladung sind auf dem Weg in Ihr Postfach.",
				"prepareTitle": "Damit Sie das Meiste aus dem Gespräch holen",
				"prepare": `<ul>
					<li>Ein paar Sätze zu Ihrer Idee oder einen Link zu Ihrem Prototyp</li>
					<li>Was das Projekt erreichen soll, und bis wann</li>
					<li>Die Tools und Leute, die Sie bereits haben</li>
				</ul>`,
				"change": "Sie müssen den Termin verschieben? Nutzen Sie den Link in Ihrer Bestätigungs-E-Mail.",
				"back": "Zurück zu Project Bootstrap",
			},
		},
		"evar": {
			"subline": "Spiele, weltraum Spiele",
		},
	},
	// always there, nav, footer general translations
	"Always": {
		// Nav
		"products": "Produkte",
		"services": "Leistungen",
		// Footer
		"letsMeetAt": "Besuche mich auf",
		"weAre": "Das ist",
		"imprint": "Impressum",
		"about": "Über mich",
		"privacyPolicy": "Datenschutzerklärung",
		"email": "E-Mail",
		"valid": "valide",
		"invalid": "ungültig",
		"cookies": {
			"label": "Cookie-Einwilligung",
			"text": `Diese Seite nutzt Google Analytics, um zu verstehen, wie Besucher sie nutzen. Dabei werden Cookies
				gesetzt, und es läuft nur, wenn Sie zustimmen. Anonyme, cookiefreie Statistiken von Vercel laufen in
				jedem Fall.`,
			"policy": "Datenschutzerklärung",
			"accept": "Akzeptieren",
			"decline": "Ablehnen",
			"settings": "Cookie-Einstellungen",
		},
	},
	//
	"Signup": {
		"share": "Teile, was du gefunden hast?",
		"noticed": "Du wirst so bald wie möglich von mir hören.",
		"multipleNotice": "Ich werde dir nicht zwei E-Mails senden, aber ich habe mir deine Begeisterung vorgemerkt!",
	},
	//
	"createdBy": "Designed und gebaut von Zentru Systems mit 🫀 ❤️"
} as const