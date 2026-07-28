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
		"transmission": {
			"meta": {
				// Immer mit Zusatz: "Transmission" allein gehört dem BitTorrent-Client
				"title": "Transmission — Mausgetriebe",
			},
			"hero": {
				"headline": "Wie reinzoomen. Ohne den Überblick zu verlieren.",
				"sub": `Halte eine Taste. Dein Cursor schaltet in den kleinen Gang – jede Handbewegung legt nur noch ein
					Viertel der Strecke zurück. Triff genau den Clip, genau den Griff, genau den Snap-Punkt, mit der ganzen
					Timeline im Blick.`,
				"micro": "{days} Nutzungstage, volle Version. Kein Konto, keine Karte.",
				"demoLeft": "Links: reinzoomen, schieben, wieder rauszoomen. Der ganze Umweg.",
				"demoRight": "Rechts: Taste halten, greifen, fertig.",
			},
			"cta": {
				"download": "Testversion herunterladen",
				"downloadFor": "Testversion herunterladen – für {platform}",
				"buy": "Kaufen – {price, number, ::currency/EUR}, einmalig",
				"alsoFor": "Auch für {platform}",
			},
			// Platzhalter-Beschriftungen, bis das Material existiert
			"media": {
				"clip": "Demo-Clip – folgt",
				"still": "Bild – folgt",
				"screenshot": "Screenshot – folgt",
			},
			"useCases": {
				"title": "Woran arbeitest du?",
				"intro": "Das Problem ist überall dasselbe: zu viele Ziele, zu wenige Pixel. Nur was unter dem Cursor liegt, ändert sich.",
				"tabsLabel": "Anwendungsfälle",
				"general": {
					"label": "Allgemein",
					"headline": "Die zwei Pixel, die jedes Fenster hat.",
					"body": `<p>Eine Fensterkante, die Trennlinie zwischen zwei Panels, die Ecke eines Bildes, das du in einem
						Dokument zurechtschiebst. Das Ziel ist ein paar Pixel breit, es existiert nur, solange du darüber
						stehst, und es gibt nichts, in das du hineinzoomen könntest.</p>
						<p>Also fährst du langsam heran, schießt darüber hinaus, kommst zurück, wartest darauf, dass der Cursor
						seine Form ändert, und versuchst es nochmal. Halte die Kupplung und derselbe Weg legt nur ein Viertel
						der Strecke zurück – die Kante rutscht dir nicht mehr davon.</p>`,
					"solves": `<ul>
						<li>Fenster- und Panelkanten, über die der Cursor hinwegspringt</li>
						<li>Ein Bild oder Textfeld im Dokument an seinen Platz schieben</li>
						<li>Kleine Bedienelemente – Slider, Scrollbalken, Schließen-Kreuze an Tabs</li>
						</ul>`,
					"demo": "Eine Fensterkante und eine Panel-Trennlinie greifen, bei voller Geschwindigkeit und im kleinen Gang.",
					"still": "Eine Panel-Trennlinie unter dem Cursor, Hover-Zustand aktiv.",
				},
				"video-music": {
					"label": "Video & Musik",
					"headline": "Der richtige Griff, beim ersten Versuch.",
					"body": `<p>Trim, Roll, Slip und der Fade-Griff liegen alle innerhalb weniger Pixel derselben Kante. Schalte
						herunter und nimm den, den du gemeint hast, ohne in den Schnitt hinein- und wieder herauszuzoomen.</p>
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
						<p>Ebenenkanten, Maskenecken und Transform-Griffe machen dasselbe. Im kleinen Gang setzt du den Cursor
						auf den, den du gemeint hast, während die Zeichenfläche stehen bleibt.</p>`,
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
						Cursor und der richtige rastet ein – ohne Orbit und Zoom nur zur Unterscheidung.</p>
						<p>Nicht das Einrasten ist das Problem. Das Einrasten ist das, was das Ergebnis exakt macht. Das Problem
						ist, ihm zu sagen, welchen der vier Kandidaten du gemeint hast.</p>`,
					"solves": `<ul>
						<li>Fangpunkte, die um dieselbe Cursorposition konkurrieren</li>
						<li>Gizmo-Achsen, die sich im Ursprung treffen</li>
						<li>Eine Kante auswählen statt der Fläche dahinter</li>
						</ul>`,
					"demo": "Eine CAD-Skizze: den gemeinten Fangpunkt aus dicht gedrängten Kandidaten aktivieren.",
					"still": "Vier Fangpunkt-Kandidaten auf wenigen Pixeln.",
				},
			},
			"problem": {
				"title": "Du zoomst nicht rein, um präzise zu sein. Du zoomst rein, um deinem Editor zu sagen, was du gemeint hast.",
				"body": `<p>Eine Timeline-Kante ist voller Ziele, die wenige Pixel auseinanderliegen – hier verschieben, zwei
					Pixel weiter links trimmen, an der Grenze rollen, in der Ecke faden, knapp darüber ein Keyframe. Jedes davon
					aktiviert ein anderes Werkzeug. In CAD dieselbe Geschichte, mit Endpunkt, Mittelpunkt, Zentrum und
					Schnittpunkt, die sich um dieselbe Cursorposition streiten.</p>
					<p>Das Einrasten ist nicht das Problem. Das Einrasten ist genau das, was du willst – es sorgt dafür, dass das
					Ergebnis exakt auf dem Frame landet. Das Problem ist, die richtigen paar Pixel des richtigen Elements zu
					treffen, damit das richtige Werkzeug aktiviert wird und der richtige Fangpunkt gewinnt.</p>
					<p>Zwei Pixel daneben und du warst nicht leicht ungenau. Du hast getrimmt, wo du verschieben wolltest, oder
					den Clip nebenan erwischt. Rückgängig, neu ansetzen, nochmal.</p>
					<p>Also zoomst du rein. Nicht für die Genauigkeit – für den Ellbogenraum. Und dann wieder raus, um zu sehen,
					was du getan hast. Dutzende Male pro Stunde.</p>`,
				"demo": "Derselbe Schnitt zweimal: einmal mit Zoomen hin und zurück, einmal in einem Zug.",
			},
			"howItWorks": {
				"title": "Ein Getriebe für deinen Cursor.",
				"body": `<p>Halte deine Kupplungstaste und Transmission skaliert deine Bewegung herunter – standardmäßig viermal
					feiner, einstellbar von Kriechtempo bis kaum gedämpft. Die Pixel bewegen sich nicht. Deine Hand deckt nur
					weniger davon ab. Jede Hover-Zone liegt effektiv viermal weiter auseinander, und dein Zoom-Level ändert sich
					nie.</p>
					<p>Lass los und du bist zurück auf voller Geschwindigkeit.</p>`,
				"keyLine": "Jede Taste oder Kombination, die du willst. Ab Werk die linke Shift-Taste.",
				"modes": {
					// Namen bleiben englisch: so heißen sie in den Einstellungen der App
					"hold": { "name": "Hold", "text": "Aktiv, solange die Taste unten ist. Die Standardeinstellung." },
					"toggle": { "name": "Toggle", "text": "Einmal drücken zum Aktivieren, nochmal zum Lösen." },
					"inverted": { "name": "Inverted", "text": "Immer langsam, halten für schnell." },
				},
			},
			"features": {
				"title": "Was es dir abnimmt",
				"items": {
					"zoomRoundTrip": {
						"title": "Der Zoom-Umweg",
						"text": `Reinzoomen für Ellbogenraum und wieder rauszoomen zum Prüfen kostet dich den Überblick und
							dutzende Unterbrechungen pro Stunde. Schalte stattdessen herunter und die Ansicht bleibt, wo sie ist.`,
					},
					"wrongTool": {
						"title": "Das falsche Werkzeug aktiviert",
						"text": `Hover-Zonen, die wenige Pixel auseinanderliegen, aktivieren jeweils ein anderes Werkzeug.
							Viermal feinere Bewegung legt echten Abstand zwischen sie, ohne ein einziges Pixel auf dem Bildschirm
							zu ändern.`,
					},
					"undoWorkflow": {
						"title": "Rückgängig als Arbeitsweise",
						"text": `Danebengreifen ist nicht leicht ungenau, es ist falsch – getrimmt statt verschoben, der Nachbar
							statt des Clips. Beim ersten Versuch treffen heißt, es gibt nichts zurückzunehmen.`,
					},
					"pluginUis": {
						"title": "Apps, die nie einen Feinmodus bekommen haben",
						"text": `Es arbeitet unterhalb der Anwendungsebene und deckt damit Plugin-Fenster, exotische Werkzeuge
							und alles andere ab, das die Modifier-Tasten deines Editors nie erreicht haben.`,
					},
					"hardware": {
						"title": "Hardware, die du nicht mit Hardware löst",
						"text": `Ein Trackpad hat keinen DPI-Knopf und ein Stifttablett lässt sich nicht weniger direkt machen.
							Das Getriebe steckt in der Software und gilt deshalb für alles, was du ohnehin benutzt.`,
					},
					"modes": {
						"title": "Sich merken, in welchem Modus du bist",
						"text": `Hold wirkt nur im Moment – die Kupplung greift, solange du hältst. Toggle und Inverted sind da,
							wenn eine Aufgabe danach verlangt.`,
					},
				},
			},
			"pen": {
				"title": "Besonders gut mit dem Stift.",
				"body": `<p>Ein Stift ist direkt, nicht präzise. Er setzt den Cursor genau dorthin, wo du hinzeigst – aber „wo du
					hinzeigst“ ist begrenzt durch deine Hand und dadurch, wie viel Bildschirm jeder Millimeter Tablett abdeckt.
					Bei 100 % Zoom reicht das nicht, um das richtige Pixel zu treffen.</p>
					<p>Transmission tauscht das eine, das du in diesem Moment nicht brauchst – Direktheit – gegen das, was du
					brauchst. Und anders als mit der Maus kannst du dich hier nicht mit einem DPI-Knopf freikaufen.</p>`,
				"demo": "Stift auf dem Tablett: dasselbe kleine Ziel, bei voller Geschwindigkeit und im kleinen Gang.",
			},
			// Steht auf /welcome, kurz bevor macOS die Abfrage anzeigt
			"permission": {
				"title": "Warum es die Bedienungshilfen braucht",
				"body": `<p>Transmission beobachtet Mausbewegungen auf Systemebene und skaliert sie, solange deine
					Kupplungstaste gehalten wird. Unter macOS erfordert das die Berechtigung „Bedienungshilfen“ – dieselbe, die
					jeder Fenstermanager und jedes Shortcut-Tool braucht. Du erteilst sie einmal in den Systemeinstellungen.</p>
					<p>Transmission liest nicht mit, was du tippst, nimmt deinen Bildschirm nicht auf und sendet deine Eingaben
					nirgendwohin.</p>`,
				"screenshot": "Systemeinstellungen → Datenschutz & Sicherheit → Bedienungshilfen, mit aktiviertem Transmission.",
			},
			"privacy": {
				"title": "Uns ist Privatsphäre wichtig – deshalb schützen wir deine",
				"intro": `So bauen wir jedes Produkt bei Zentru Systems, und Transmission ist keine Ausnahme. Es beobachtet
					Mausbewegungen, um seine Arbeit zu tun, und damit endet es: Es liest nicht mit, was du tippst, nimmt
					deinen Bildschirm nicht auf und sendet deine Eingaben nirgendwohin.`,
				// Die zwei Sätze mit Link, um den Link herum aufgeteilt
				"analyticsBeforeLink": "Was wir erheben, ist eine anonyme Produktanalyse über ",
				"analyticsLinkLabel": "Aptabase",
				"analyticsAfterLink": ` – App-Starts, ob die Kupplung tatsächlich benutzt wurde, welche Einstellungen geändert
					werden. Kein Konto, keine personenbezogenen Daten, kein Geräte-Fingerabdruck, kein Tracking über Seiten
					hinweg. Es sagt uns, ob die App für Menschen funktioniert, und sonst nichts.`,
				"controlBeforeLink": "Du kannst es in den Einstellungen komplett abschalten. Alles Weitere steht in unserer ",
				"controlLinkLabel": "Datenschutzerklärung",
				"controlAfterLink": ".",
			},
			"pricing": {
				"title": "{price, number, ::currency/EUR}. Einmal.",
				"items": {
					"trial": "{days} Nutzungstage – es zählen nur Tage, an denen du es benutzt, volle Version, keine Karte, kein Konto",
					"platforms": "{macOs}+ und {windows}+ in einer Lizenz",
					"machines": "Bis zu {machines} Geräte",
					"updates": "Kostenlose Updates",
					"refund": "{days} Tage Rückgaberecht, eine E-Mail genügt",
				},
				"anchor": "Einführungspreis. Der reguläre Preis ist {regular, number, ::currency/EUR precision-integer}.",
				"note": `Wenn du das wegen eines Tremors oder aus motorischen Gründen brauchst und {price, number, ::currency/EUR} eine Hürde sind,
					schreib uns – wir schicken dir eine Lizenz.`,
			},
			"faq": {
				"title": "Fragen",
				"items": {
					"fineAdjust": {
						"question": "Hat mein Editor nicht längst eine Feinjustierung?",
						"answer": `Modifier-Tasten verfeinern einen Wert, nachdem du etwas gegriffen hast. Sie helfen dir nicht
							dabei, überhaupt das Richtige zu greifen. Transmission wirkt vor dem Klick, in jeder App – auch in
							Plugin-Oberflächen, die nie einen Feinmodus bekommen haben.`,
					},
					"dpiButton": {
						"question": "Macht das nicht der DPI-Knopf einer Gaming-Maus?",
						"answer": `Dieselbe Idee, aber er hängt an einem Gerät, er ist ein Modus, aus dem du wieder
							herausschalten musst, und für Trackpad oder Stifttablett tut er nichts. Gegen die
							Mausbeschleunigung tut er ebenfalls nichts: Dein System streckt eine schnelle Bewegung weiterhin
							und staucht eine langsame, dieselbe Handbewegung legt also nicht zuverlässig dieselbe Strecke
							zurück – egal, welche DPI-Stufe du gewählt hast. Transmission wirkt nur im Moment, arbeitet
							softwareseitig und funktioniert mit dem, was du ohnehin benutzt.`,
					},
					"tablet": {
						"question": "Funktioniert es mit einem Grafiktablett?",
						"answer": "Ja. Ein Stift ist direkt, aber nicht präzise – Transmission ist die fehlende Hälfte.",
					},
					"usageDays": {
						"question": "Wie läuft der Test ab?",
						"answer": `In Nutzungstagen, nicht in Kalendertagen. Ein Tag zählt erst, wenn du es tatsächlich benutzt –
							lässt du es eine Woche liegen, bleibt der Test stehen. Du bekommst also Tage echter Arbeit und keinen
							Countdown, der abläuft, während du mit etwas anderem beschäftigt bist.`,
					},
					"apps": {
						"question": "In welchen Apps funktioniert es?",
						"answer": `In allen. Es arbeitet unterhalb der Anwendungsebene und muss deshalb nichts über die Software
							wissen, die du gerade benutzt.`,
					},
					"games": {
						"question": "Kann ich es in Spielen benutzen?",
						"answer": `Wir raten davon ab. Anti-Cheat-Systeme können systemnahe Eingabe-Software melden.
							Transmission ist für Werkzeuge zum Arbeiten gebaut.`,
					},
					"appStore": {
						"question": "Gibt es das im Mac App Store?",
						"answer": `Nein. Die Bedienungshilfen-Berechtigung, die Transmission braucht, steht Apps aus dem App
							Store nicht zur Verfügung. Deshalb verkaufen wir direkt.`,
					},
					"linux": {
						"question": "Linux?",
						"answer": `Noch nicht – ob es dazu kommt, hängt davon ab, wie viele es wollen. Trag dich ein und wir
							sagen dir Bescheid, wenn es soweit ist.`,
					},
				},
			},
			// Eintragen für eine Linux-Version, in der FAQ-Antwort, die sagt, dass es noch keine gibt
			"linuxInterest": {
				"pitch": "Ich hätte Interesse an einer Linux-Version für {price, number, ::currency/EUR}",
				"action": "Trag mich ein",
				"success": "Notiert. Wir melden uns, wenn es eine Linux-Version gibt.",
				"alreadySignedUp": "Du standst schon auf der Liste – trotzdem notiert.",
				"error": "Das hat nicht geklappt. Versuch es gleich nochmal.",
			},
			"finalCta": {
				"title": "Hör auf, nur zum Greifen reinzuzoomen.",
				"micro": "{days} Nutzungstage, volle Version. {macOs}+ und {windows}+.",
			},
			// Wird von der App beim ersten Start geöffnet, bevor macOS nach der Berechtigung fragt
			"welcome": {
				"metaTitle": "Willkommen bei Transmission",
				"metaDescription": "Der Einstieg in Transmission – und warum es die Bedienungshilfen braucht.",
				"title": "Transmission ist installiert.",
				"intro": {
					"macos": "Eine Berechtigung, dann bist du startklar. Hier ist, was macOS dich gleich fragt – und warum.",
					"windows": "Du bist startklar. So probierst du es aus.",
				},
				"steps": {
					"permission": {
						"title": "macOS fragt nach den Bedienungshilfen",
						"text": `Transmission skaliert Mausbewegungen, solange deine Kupplungstaste gehalten wird – dafür muss
							es diese Bewegung auf Systemebene beobachten. macOS schützt das über die Bedienungshilfen, dieselbe
							Berechtigung, nach der jeder Fenstermanager und jedes Shortcut-Tool fragt.`,
					},
					"grant": {
						"title": "Einmal erteilen, in den Systemeinstellungen",
						"text": `Systemeinstellungen → Datenschutz & Sicherheit → Bedienungshilfen, dann Transmission
							einschalten. Mehr ist nicht einzurichten.`,
					},
					"tryIt": {
						"title": "Halte die linke Shift-Taste und bewege die Maus",
						"text": `Das ist der kleine Gang: ein Viertel der Strecke bei gleicher Handbewegung. Loslassen und du
							bist zurück auf voller Geschwindigkeit.`,
					},
					"customise": {
						"title": "Mach es dir passend",
						"text": "Kupplungstaste, Übersetzung und Modus – Hold, Toggle oder Inverted – findest du in den Einstellungen.",
					},
				},
				"reassurance": `Transmission liest nicht mit, was du tippst, nimmt deinen Bildschirm nicht auf und sendet deine
					Eingaben nirgendwohin.`,
				"trialNote": "Dein Test läuft – {days} Nutzungstage, volle Version, kein Konto, keine Karte.",
				"manualClaim": "Die App ist nicht in den Vordergrund gekommen? Transmission öffnen",
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