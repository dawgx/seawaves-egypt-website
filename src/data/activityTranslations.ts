import { Activity } from './activities';

export const getActivityTranslations = (language: string) => {
  const translations: Record<string, Record<string, Activity>> = {
    en: {
      diving: {
        id: 'diving',
        name: 'Diving',
        shortDescription: 'Explore the magnificent coral reefs and marine life of the Red Sea',
        fullDescription: `Dive into the crystal-clear waters of the Red Sea and discover one of the world's most spectacular underwater ecosystems. Our professional diving guides will take you to the best coral reef sites where you'll encounter vibrant coral formations, tropical fish, and maybe even dolphins or sea turtles.

Whether you're a beginner or an experienced diver, we have programs suitable for all levels. Our PADI-certified instructors ensure your safety while providing an unforgettable underwater adventure.

The Red Sea is renowned for its exceptional visibility, warm waters, and diverse marine life, making it one of the top diving destinations in the world. Experience the magic of floating weightlessly among colorful coral gardens and schools of exotic fish.

Join us for this incredible journey beneath the waves and create memories that will last a lifetime.`,
        duration: '4-5 hours',
        included: [
          'Full diving equipment (mask, fins, wetsuit, tank)',
          'Professional PADI-certified guide',
          'Hotel pickup & drop-off',
          'Refreshments and snacks',
          'Safety briefing and instruction',
          'Underwater photography tips'
        ],
        toBring: [
          'Swimsuit',
          'Towel',
          'Sunscreen (reef-safe)',
          'Underwater camera (optional)',
          'Certification card (if certified)',
          'Comfortable clothing for boat ride'
        ],
        meetingPoint: 'Marina Boulevard, Hurghada Marina',
        importantInfo: [
          'Minimum age: 10 years (with guardian)',
          'Basic swimming skills required',
          'Medical clearance may be required',
          'Weather conditions may affect schedule',
          'Maximum depth: 12m for beginners, 30m for certified divers'
        ],
        images: [],
        icon: 'Waves'
      },
      'dolphin-trips': {
        id: 'dolphin-trips',
        name: 'Dolphin Trips',
        shortDescription: 'Swim and interact with wild dolphins in their natural habitat',
        fullDescription: `Experience the magic of swimming with wild dolphins in the pristine waters of the Red Sea. Our dolphin trips take you to Dolphin House (Sha'ab Samadai), a protected reef area where spinner dolphins come to rest and play.

Watch these magnificent creatures in their natural environment as they glide gracefully through the water. With luck and respect for their space, you may have the incredible opportunity to swim alongside them.

Our experienced guides know the best spots and times to encounter dolphins while ensuring we follow all environmental protection guidelines. We maintain a respectful distance and never disturb the dolphins' natural behavior.

This is more than just a boat trip – it's a life-changing encounter with one of the ocean's most intelligent and playful creatures. The memories of swimming with dolphins will stay with you forever.`,
        duration: '3-4 hours',
        included: [
          'Boat transportation to Dolphin House',
          'Life jackets and safety equipment',
          'Snorkeling equipment (mask, fins, snorkel)',
          'Professional guide and dolphin spotter',
          'Lunch and refreshments',
          'Hotel pickup and drop-off'
        ],
        toBring: [
          'Swimsuit',
          'Towel',
          'Sunscreen (reef-safe)',
          'Waterproof camera',
          'Hat and sunglasses',
          'Light jacket for boat ride'
        ],
        meetingPoint: 'Hurghada Marina, Gate 3',
        importantInfo: [
          'Dolphin sightings are not guaranteed (wild animals)',
          'Swimming with dolphins depends on their behavior',
          'Minimum age: 6 years',
          'Pregnant women should consult doctor',
          'Respect marine life - no touching or chasing',
          'Trip may be cancelled due to weather conditions'
        ],
        images: [],
        icon: 'Fish'
      }
    },
    nl: {
      diving: {
        id: 'diving',
        name: 'Duiken',
        shortDescription: 'Verken de prachtige koraalriffen en het zeeleven van de Rode Zee',
        fullDescription: `Duik in de kristalheldere wateren van de Rode Zee en ontdek een van 's werelds meest spectaculaire onderwaterecosystemen. Onze professionele duikgidsen brengen je naar de beste koraalriflocaties waar je levendige koraalformaties, tropische vissen en misschien zelfs dolfijnen of zeeschildpadden zult tegenkomen.

Of je nu een beginner of ervaren duiker bent, we hebben programma's geschikt voor alle niveaus. Onze PADI-gecertificeerde instructeurs zorgen voor je veiligheid terwijl ze een onvergetelijk onderwateravontuur bieden.

De Rode Zee staat bekend om zijn uitzonderlijke zichtbaarheid, warme wateren en diverse zeeleven, waardoor het een van de top duikbestemmingen ter wereld is. Ervaar de magie van gewichtloos zweven tussen kleurrijke koraaltuinen en scholen exotische vissen.

Sluit je aan bij ons voor deze ongelooflijke reis onder de golven en creëer herinneringen die een leven lang meegaan.`,
        duration: '4-5 uur',
        included: [
          'Volledige duikuitrusting (masker, vinnen, wetsuit, tank)',
          'Professionele PADI-gecertificeerde gids',
          'Hotel ophaal- en afzetdienst',
          'Verfrissingen en snacks',
          'Veiligheidsbriefing en instructie',
          'Onderwaterfotografie tips'
        ],
        toBring: [
          'Zwemkleding',
          'Handdoek',
          'Zonnebrandcrème (rifveilig)',
          'Onderwatercamera (optioneel)',
          'Certificaat (indien gecertificeerd)',
          'Comfortabele kleding voor bootrit'
        ],
        meetingPoint: 'Marina Boulevard, Hurghada Marina',
        importantInfo: [
          'Minimumleeftijd: 10 jaar (met voogd)',
          'Basiszwemvaardigheden vereist',
          'Medische goedkeuring kan vereist zijn',
          'Weersomstandigheden kunnen planning beïnvloeden',
          'Maximale diepte: 12m voor beginners, 30m voor gecertificeerde duikers'
        ],
        images: [],
        icon: 'Waves'
      },
      'dolphin-trips': {
        id: 'dolphin-trips',
        name: 'Dolfijnentochten',
        shortDescription: 'Zwem en interacteer met wilde dolfijnen in hun natuurlijke habitat',
        fullDescription: `Ervaar de magie van zwemmen met wilde dolfijnen in de ongerepte wateren van de Rode Zee. Onze dolfijnentochten brengen je naar Dolphin House (Sha'ab Samadai), een beschermd rifgebied waar spinnerdolfijnen komen rusten en spelen.

Bekijk deze prachtige wezens in hun natuurlijke omgeving terwijl ze sierlijk door het water glijden. Met geluk en respect voor hun ruimte heb je misschien de ongelooflijke kans om naast hen te zwemmen.

Onze ervaren gidsen kennen de beste plekken en tijden om dolfijnen te ontmoeten terwijl we alle milieubeschermingsrichtlijnen volgen. We houden een respectvolle afstand en verstoren nooit het natuurlijke gedrag van de dolfijnen.

Dit is meer dan alleen een boottocht - het is een levensveranderende ontmoeting met een van de meest intelligente en speelse wezens van de oceaan. De herinneringen aan zwemmen met dolfijnen zullen je voor altijd bijblijven.`,
        duration: '3-4 uur',
        included: [
          'Boottransport naar Dolphin House',
          'Reddingsvesten en veiligheidsuitrusting',
          'Snorkeluitrusting (masker, vinnen, snorkel)',
          'Professionele gids en dolfijnspotter',
          'Lunch en verfrissingen',
          'Hotel ophaal- en afzetdienst'
        ],
        toBring: [
          'Zwemkleding',
          'Handdoek',
          'Zonnebrandcrème (rifveilig)',
          'Waterdichte camera',
          'Hoed en zonnebril',
          'Lichte jas voor bootrit'
        ],
        meetingPoint: 'Hurghada Marina, Poort 3',
        importantInfo: [
          'Dolfijnwaarnemingen zijn niet gegarandeerd (wilde dieren)',
          'Zwemmen met dolfijnen hangt af van hun gedrag',
          'Minimumleeftijd: 6 jaar',
          'Zwangere vrouwen moeten dokter raadplegen',
          'Respecteer het zeeleven - niet aanraken of achtervolgen',
          'Rit kan worden geannuleerd vanwege weersomstandigheden'
        ],
        images: [],
        icon: 'Fish'
      },
      'island-tours': {
        id: 'island-tours',
        name: 'Eiland Tours',
        shortDescription: 'Bezoek ongerepte eilanden met kristalheldere wateren en witte zandstranden',
        fullDescription: `Ontdek de verborgen parels van de Rode Zee tijdens onze eiland tours. We brengen je naar de meest prachtige eilanden waar je kunt genieten van kristalheldere wateren, witte zandstranden en ongerepte natuur.

Elk eiland heeft zijn eigen unieke charme - van rustige baaien perfect voor snorkelen tot levendige koraalriffen vol met tropische vissen. Onze ervaren gidsen kennen de beste plekken en tijden om de schoonheid van deze eilanden te ervaren.

Geniet van een ontspannen dag in de zon, zwem in de turquoise wateren, of verken de onderwaterwereld met snorkeluitrusting. We zorgen voor alle benodigdheden en een heerlijke lunch aan boord.

Deze eiland tours zijn perfect voor gezinnen, stellen en vriendengroepen die willen ontsnappen aan de drukte en genieten van de natuurlijke schoonheid van de Rode Zee.`,
        duration: '6-8 uur (hele dag)',
        included: [
          'Boottransport naar eilanden',
          'Snorkeluitrusting (masker, vinnen, snorkel)',
          'Lunch en verfrissingen',
          'Professionele gids',
          'Hotel ophaal- en afzetdienst',
          'Veiligheidsuitrusting'
        ],
        toBring: [
          'Zwemkleding',
          'Handdoek',
          'Zonnebrandcrème (rifveilig)',
          'Waterdichte camera',
          'Hoed en zonnebril',
          'Comfortabele kleding'
        ],
        meetingPoint: 'Hurghada Marina, Poort 2',
        importantInfo: [
          'Minimumleeftijd: 3 jaar',
          'Basiszwemvaardigheden aanbevolen',
          'Weersomstandigheden kunnen planning beïnvloeden',
          'Eiland toegang kan variëren',
          'Respecteer het milieu - geen afval achterlaten'
        ],
        images: [],
        icon: 'MapPin'
      },
      'boat-trips': {
        id: 'boat-trips',
        name: 'Boot Tours',
        shortDescription: 'Ontspannende jacht- en boottours langs de prachtige Rode Zee kust',
        fullDescription: `Ervaar de ultieme luxe en ontspanning tijdens onze exclusieve boot tours langs de Rode Zee kust. Onze moderne jachten bieden alle comfort en voorzieningen voor een onvergetelijke dag op het water.

Geniet van de adembenemende uitzichten op de kustlijn terwijl je ontspant op het dek, zwemt in de kristalheldere wateren, of gewoon geniet van de zon. Onze professionele bemanning zorgt voor je comfort en veiligheid.

Deze tours zijn perfect voor speciale gelegenheden, romantische uitjes, of gewoon een dag van pure ontspanning. We bieden verschillende opties van korte trips tot hele dag excursies.

Sluit je aan bij ons voor een luxe ervaring op het water en ontdek waarom de Rode Zee een van de meest geliefde bestemmingen ter wereld is.`,
        duration: '3-6 uur',
        included: [
          'Luxe jacht of boot',
          'Professionele bemanning',
          'Lunch en verfrissingen',
          'Snorkeluitrusting',
          'Hotel ophaal- en afzetdienst',
          'Alle veiligheidsuitrusting'
        ],
        toBring: [
          'Zwemkleding',
          'Handdoek',
          'Zonnebrandcrème',
          'Camera',
          'Hoed en zonnebril',
          'Comfortabele kleding'
        ],
        meetingPoint: 'Hurghada Marina, Poort 1',
        importantInfo: [
          'Alle leeftijden welkom',
          'Weersomstandigheden kunnen planning beïnvloeden',
          'Privé tours beschikbaar',
          'Speciale diëten kunnen worden geregeld',
          'Annulering mogelijk bij slecht weer'
        ],
        images: [],
        icon: 'Anchor'
      },
      'speed-boats': {
        id: 'speed-boats',
        name: 'Snelle Boten',
        shortDescription: 'Opwindende speedboot ritten over de Rode Zee wateren',
        fullDescription: `Voel de adrenaline tijdens onze opwindende speedboot tours! Onze krachtige speedboten brengen je snel naar de beste plekken van de Rode Zee voor een dag vol actie en avontuur.

Ervaar de sensatie van hoge snelheid over het kristalheldere water terwijl je geniet van de adembenemende uitzichten op de kustlijn en eilanden. Onze ervaren captains kennen de beste routes voor een veilige maar opwindende rit.

Deze tours zijn perfect voor avonturiers die op zoek zijn naar actie en sensatie. We bieden verschillende opties van korte adrenaline ritten tot langere excursies naar afgelegen locaties.

Sluit je aan bij ons voor een onvergetelijke speedboot ervaring en voel de kracht van de Rode Zee onder je voeten!`,
        duration: '1-2 uur',
        included: [
          'Snelle speedboot',
          'Ervaren captain',
          'Veiligheidsuitrusting',
          'Hotel ophaal- en afzetdienst',
          'Verfrissingen',
          'Snorkeluitrusting (optioneel)'
        ],
        toBring: [
          'Zwemkleding',
          'Handdoek',
          'Zonnebrandcrème',
          'Waterdichte camera',
          'Hoed en zonnebril',
          'Lichte jas'
        ],
        meetingPoint: 'Hurghada Marina, Poort 4',
        importantInfo: [
          'Minimumleeftijd: 8 jaar',
          'Niet geschikt voor zwangere vrouwen',
          'Weersomstandigheden kunnen planning beïnvloeden',
          'Gebruik van veiligheidsuitrusting verplicht',
          'Annulering mogelijk bij slecht weer'
        ],
        images: [],
        icon: 'Zap'
      },
      'water-sports': {
        id: 'water-sports',
        name: 'Watersporten',
        shortDescription: 'Opwindende wateractiviteiten inclusief bananaboot, parasailing, jetski en meer',
        fullDescription: `Ontdek de opwindende wereld van watersporten in de Rode Zee! Onze uitgebreide watersport programma biedt activiteiten voor alle leeftijden en vaardigheidsniveaus.

Van bananaboot ritten en parasailing tot jetski tours en waterskiën - we hebben het allemaal. Onze professionele instructeurs zorgen voor je veiligheid terwijl je geniet van de ultieme watersport ervaring.

Elke activiteit wordt aangepast aan jouw niveau en voorkeuren. Of je nu een beginner bent of een ervaren watersporter, we hebben de perfecte activiteit voor jou.

Sluit je aan bij ons voor een dag vol actie en plezier op het water en ontdek waarom de Rode Zee de perfecte bestemming is voor watersporten!`,
        duration: '1-3 uur (varieert per activiteit)',
        included: [
          'Alle watersport uitrusting',
          'Professionele instructeurs',
          'Veiligheidsuitrusting',
          'Hotel ophaal- en afzetdienst',
          'Verfrissingen',
          'Verzekering'
        ],
        toBring: [
          'Zwemkleding',
          'Handdoek',
          'Zonnebrandcrème',
          'Waterdichte camera',
          'Hoed en zonnebril',
          'Comfortabele kleding'
        ],
        meetingPoint: 'Hurghada Marina, Poort 5',
        importantInfo: [
          'Minimumleeftijd: 6 jaar (varieert per activiteit)',
          'Basiszwemvaardigheden vereist',
          'Weersomstandigheden kunnen planning beïnvloeden',
          'Gebruik van veiligheidsuitrusting verplicht',
          'Annulering mogelijk bij slecht weer'
        ],
        images: [],
        icon: 'Waves'
      }
    },
    pl: {
      diving: {
        id: 'diving',
        name: 'Nurkowanie',
        shortDescription: 'Zbadaj wspaniałe rafy koralowe i życie morskie Morza Czerwonego',
        fullDescription: `Zanurz się w krystalicznie czystych wodach Morza Czerwonego i odkryj jeden z najbardziej spektakularnych ekosystemów podwodnych na świecie. Nasi profesjonalni przewodnicy nurkowi zabiorą Cię do najlepszych miejsc raf koralowych, gdzie spotkasz żywe formacje koralowe, tropikalne ryby, a może nawet delfiny lub żółwie morskie.

Czy jesteś początkującym, czy doświadczonym nurkiem, mamy programy odpowiednie dla wszystkich poziomów. Nasi instruktorzy certyfikowani przez PADI zapewniają Twoje bezpieczeństwo, oferując niezapomnianą podwodną przygodę.

Morze Czerwone słynie z wyjątkowej widoczności, ciepłych wód i różnorodnego życia morskiego, co czyni je jednym z najlepszych miejsc nurkowych na świecie. Doświadcz magii bezwładnego unoszenia się wśród kolorowych ogrodów koralowych i ławic egzotycznych ryb.

Dołącz do nas w tej niesamowitej podróży pod falami i stwórz wspomnienia, które pozostaną na całe życie.`,
        duration: '4-5 godzin',
        included: [
          'Pełny sprzęt nurkowy (maska, płetwy, pianka, butla)',
          'Profesjonalny przewodnik certyfikowany przez PADI',
          'Transport z hotelu i z powrotem',
          'Przekąski i napoje',
          'Instruktaż bezpieczeństwa',
          'Wskazówki dotyczące fotografii podwodnej'
        ],
        toBring: [
          'Strój kąpielowy',
          'Ręcznik',
          'Krem przeciwsłoneczny (bezpieczny dla raf)',
          'Aparat podwodny (opcjonalnie)',
          'Karta certyfikacji (jeśli certyfikowany)',
          'Wygodne ubranie na rejs łodzią'
        ],
        meetingPoint: 'Marina Boulevard, Marina Hurghada',
        importantInfo: [
          'Minimalny wiek: 10 lat (z opiekunem)',
          'Wymagane podstawowe umiejętności pływackie',
          'Może być wymagane zaświadczenie lekarskie',
          'Warunki pogodowe mogą wpływać na harmonogram',
          'Maksymalna głębokość: 12m dla początkujących, 30m dla certyfikowanych nurków'
        ],
        images: [],
        icon: 'Waves'
      },
      'dolphin-trips': {
        id: 'dolphin-trips',
        name: 'Wycieczki z Delfinami',
        shortDescription: 'Pływaj i wchodź w interakcje z dzikimi delfinami w ich naturalnym środowisku',
        fullDescription: `Doświadcz magii pływania z dzikimi delfinami w dziewiczej wodzie Morza Czerwonego. Nasze wycieczki z delfinami zabierają Cię do Dolphin House (Sha'ab Samadai), chronionego obszaru rafy, gdzie delfiny spinner przychodzą odpocząć i bawić się.

Obserwuj te wspaniałe stworzenia w ich naturalnym środowisku, gdy elegancko ślizgają się przez wodę. Z odrobiną szczęścia i szacunkiem dla ich przestrzeni, możesz mieć niesamowitą okazję do pływania obok nich.

Nasi doświadczeni przewodnicy znają najlepsze miejsca i czasy spotkania z delfinami, przestrzegając wszystkich wytycznych ochrony środowiska. Utrzymujemy szacowną odległość i nigdy nie zakłócamy naturalnego zachowania delfinów.

To więcej niż tylko rejs łodzią - to spotkanie zmieniające życie z jednym z najbardziej inteligentnych i zabawnych stworzeń oceanu. Wspomnienia pływania z delfinami pozostaną z Tobą na zawsze.`,
        duration: '3-4 godziny',
        included: [
          'Transport łodzią do Dolphin House',
          'Kamizelki ratunkowe i sprzęt bezpieczeństwa',
          'Sprzęt do snorkelingu (maska, płetwy, rurka)',
          'Profesjonalny przewodnik i obserwator delfinów',
          'Lunch i napoje',
          'Transport z hotelu i z powrotem'
        ],
        toBring: [
          'Strój kąpielowy',
          'Ręcznik',
          'Krem przeciwsłoneczny (bezpieczny dla raf)',
          'Wodoodporny aparat',
          'Kapelusz i okulary przeciwsłoneczne',
          'Lekka kurtka na rejs łodzią'
        ],
        meetingPoint: 'Marina Hurghada, Brama 3',
        importantInfo: [
          'Obserwacje delfinów nie są gwarantowane (dzikie zwierzęta)',
          'Pływanie z delfinami zależy od ich zachowania',
          'Minimalny wiek: 6 lat',
          'Kobiety w ciąży powinny skonsultować się z lekarzem',
          'Szanuj życie morskie - nie dotykaj ani nie goni',
          'Wycieczka może zostać odwołana z powodu warunków pogodowych'
        ],
        images: [],
        icon: 'Fish'
      },
      'island-tours': {
        id: 'island-tours',
        name: 'Wycieczki na Wyspy',
        shortDescription: 'Odwiedź dziewicze wyspy z krystalicznie czystymi wodami i białymi plażami',
        fullDescription: `Odkryj ukryte perły Morza Czerwonego podczas naszych wycieczek na wyspy. Zabieramy Cię na najpiękniejsze wyspy, gdzie możesz cieszyć się krystalicznie czystymi wodami, białymi plażami i dziewiczą przyrodą.

Każda wyspa ma swój unikalny urok - od cichych zatok idealnych do snorkelingu po żywe rafy koralowe pełne tropikalnych ryb. Nasi doświadczeni przewodnicy znają najlepsze miejsca i czasy, aby doświadczyć piękna tych wysp.

Ciesz się relaksującym dniem na słońcu, pływaj w turkusowych wodach lub eksploruj podwodny świat ze sprzętem do snorkelingu. Zapewniamy wszystkie niezbędne rzeczy i pyszny lunch na pokładzie.

Te wycieczki na wyspy są idealne dla rodzin, par i grup przyjaciół, którzy chcą uciec od zgiełku i cieszyć się naturalnym pięknem Morza Czerwonego.`,
        duration: '6-8 godzin (cały dzień)',
        included: [
          'Transport łodzią na wyspy',
          'Sprzęt do snorkelingu (maska, płetwy, rurka)',
          'Lunch i napoje',
          'Profesjonalny przewodnik',
          'Transport z hotelu i z powrotem',
          'Sprzęt bezpieczeństwa'
        ],
        toBring: [
          'Strój kąpielowy',
          'Ręcznik',
          'Krem przeciwsłoneczny (bezpieczny dla raf)',
          'Wodoodporny aparat',
          'Kapelusz i okulary przeciwsłoneczne',
          'Wygodne ubranie'
        ],
        meetingPoint: 'Marina Hurghada, Brama 2',
        importantInfo: [
          'Minimalny wiek: 3 lata',
          'Zalecane podstawowe umiejętności pływackie',
          'Warunki pogodowe mogą wpływać na harmonogram',
          'Dostęp do wysp może się różnić',
          'Szanuj środowisko - nie śmieć'
        ],
        images: [],
        icon: 'MapPin'
      },
      'boat-trips': {
        id: 'boat-trips',
        name: 'Rejsy Łodzią',
        shortDescription: 'Relaksujące rejsy jachtem i łodzią wzdłuż pięknego wybrzeża Morza Czerwonego',
        fullDescription: `Doświadcz najwyższego luksusu i relaksu podczas naszych ekskluzywnych rejsów wzdłuż wybrzeża Morza Czerwonego. Nasze nowoczesne jachty oferują pełen komfort i udogodnienia na niezapomniany dzień na wodzie.

Ciesz się zapierającymi dech widokami na wybrzeże, relaksując się na pokładzie, pływając w krystalicznie czystych wodach lub po prostu ciesząc się słońcem. Nasza profesjonalna załoga dba o Twój komfort i bezpieczeństwo.

Te rejsy są idealne na specjalne okazje, romantyczne wycieczki lub po prostu dzień czystego relaksu. Oferujemy różne opcje od krótkich wycieczek po całodniowe ekspedycje.

Dołącz do nas na luksusowe doświadczenie na wodzie i odkryj, dlaczego Morze Czerwone jest jednym z najbardziej ukochanych miejsc na świecie.`,
        duration: '3-6 godzin',
        included: [
          'Luksusowy jacht lub łódź',
          'Profesjonalna załoga',
          'Lunch i napoje',
          'Sprzęt do snorkelingu',
          'Transport z hotelu i z powrotem',
          'Cały sprzęt bezpieczeństwa'
        ],
        toBring: [
          'Strój kąpielowy',
          'Ręcznik',
          'Krem przeciwsłoneczny',
          'Aparat',
          'Kapelusz i okulary przeciwsłoneczne',
          'Wygodne ubranie'
        ],
        meetingPoint: 'Marina Hurghada, Brama 1',
        importantInfo: [
          'Wszystkie grupy wiekowe mile widziane',
          'Warunki pogodowe mogą wpływać na harmonogram',
          'Dostępne prywatne rejsy',
          'Można zorganizować specjalne diety',
          'Możliwe odwołanie przy złej pogodzie'
        ],
        images: [],
        icon: 'Anchor'
      },
      'speed-boats': {
        id: 'speed-boats',
        name: 'Szybkie Łodzie',
        shortDescription: 'Ekscytujące przejażdżki szybką łodzią po wodach Morza Czerwonego',
        fullDescription: `Poczuj adrenalinę podczas naszych ekscytujących rejsów szybką łodzią! Nasze potężne szybkie łodzie zabierają Cię szybko do najlepszych miejsc Morza Czerwonego na dzień pełen akcji i przygód.

Doświadcz wrażenia dużej prędkości po krystalicznie czystej wodzie, ciesząc się zapierającymi dech widokami na wybrzeże i wyspy. Nasi doświadczeni kapitanowie znają najlepsze trasy na bezpieczną, ale ekscytującą jazdę.

Te rejsy są idealne dla poszukiwaczy przygód szukających akcji i wrażeń. Oferujemy różne opcje od krótkich przejażdżek na adrenalinę po dłuższe ekspedycje do odległych miejsc.

Dołącz do nas na niezapomniane doświadczenie szybkiej łodzi i poczuj moc Morza Czerwonego pod stopami!`,
        duration: '1-2 godziny',
        included: [
          'Szybka łódź',
          'Doświadczony kapitan',
          'Sprzęt bezpieczeństwa',
          'Transport z hotelu i z powrotem',
          'Napoje',
          'Sprzęt do snorkelingu (opcjonalnie)'
        ],
        toBring: [
          'Strój kąpielowy',
          'Ręcznik',
          'Krem przeciwsłoneczny',
          'Wodoodporny aparat',
          'Kapelusz i okulary przeciwsłoneczne',
          'Lekka kurtka'
        ],
        meetingPoint: 'Marina Hurghada, Brama 4',
        importantInfo: [
          'Minimalny wiek: 8 lat',
          'Niezalecane dla kobiet w ciąży',
          'Warunki pogodowe mogą wpływać na harmonogram',
          'Obowiązkowe używanie sprzętu bezpieczeństwa',
          'Możliwe odwołanie przy złej pogodzie'
        ],
        images: [],
        icon: 'Zap'
      },
      'water-sports': {
        id: 'water-sports',
        name: 'Sporty Wodne',
        shortDescription: 'Ekscytujące aktywności wodne, w tym banan, paralotniarstwo, skuter wodny i więcej',
        fullDescription: `Odkryj ekscytujący świat sportów wodnych na Morzu Czerwonym! Nasz kompleksowy program sportów wodnych oferuje aktywności dla wszystkich grup wiekowych i poziomów umiejętności.

Od przejażdżek bananem i paralotniarstwa po rejsy skuterem wodnym i narty wodne - mamy wszystko. Nasi profesjonalni instruktorzy zapewniają Twoje bezpieczeństwo, podczas gdy cieszysz się najwyższym doświadczeniem sportów wodnych.

Każda aktywność jest dostosowana do Twojego poziomu i preferencji. Czy jesteś początkującym, czy doświadczonym entuzjastą sportów wodnych, mamy idealną aktywność dla Ciebie.

Dołącz do nas na dzień pełen akcji i zabawy na wodzie i odkryj, dlaczego Morze Czerwone jest idealnym miejscem na sporty wodne!`,
        duration: '1-3 godziny (różni się w zależności od aktywności)',
        included: [
          'Cały sprzęt do sportów wodnych',
          'Profesjonalni instruktorzy',
          'Sprzęt bezpieczeństwa',
          'Transport z hotelu i z powrotem',
          'Napoje',
          'Ubezpieczenie'
        ],
        toBring: [
          'Strój kąpielowy',
          'Ręcznik',
          'Krem przeciwsłoneczny',
          'Wodoodporny aparat',
          'Kapelusz i okulary przeciwsłoneczne',
          'Wygodne ubranie'
        ],
        meetingPoint: 'Marina Hurghada, Brama 5',
        importantInfo: [
          'Minimalny wiek: 6 lat (różni się w zależności od aktywności)',
          'Wymagane podstawowe umiejętności pływackie',
          'Warunki pogodowe mogą wpływać na harmonogram',
          'Obowiązkowe używanie sprzętu bezpieczeństwa',
          'Możliwe odwołanie przy złej pogodzie'
        ],
        images: [],
        icon: 'Waves'
      }
    },
    de: {
      diving: {
        id: 'diving',
        name: 'Tauchen',
        shortDescription: 'Erkunden Sie die prächtigen Korallenriffe und das Meeresleben des Roten Meeres',
        fullDescription: `Tauchen Sie in die kristallklaren Gewässer des Roten Meeres ein und entdecken Sie eines der spektakulärsten Unterwasserökosysteme der Welt. Unsere professionellen Tauchführer bringen Sie zu den besten Korallenriff-Standorten, wo Sie lebendige Korallenformationen, tropische Fische und vielleicht sogar Delfine oder Meeresschildkröten erleben werden.

Ob Sie Anfänger oder erfahrener Taucher sind, wir haben Programme für alle Niveaus. Unsere PADI-zertifizierten Instruktoren sorgen für Ihre Sicherheit und bieten ein unvergessliches Unterwasserabenteuer.

Das Rote Meer ist bekannt für seine außergewöhnliche Sichtweite, warmen Gewässer und vielfältiges Meeresleben und gehört zu den Top-Tauchzielen der Welt. Erleben Sie die Magie des schwerelosen Schwebeens zwischen bunten Korallengärten und Schwärmen exotischer Fische.

Begleiten Sie uns auf diese unglaubliche Reise unter den Wellen und schaffen Sie Erinnerungen, die ein Leben lang halten.`,
        duration: '4-5 Stunden',
        included: [
          'Vollständige Tauchausrüstung (Maske, Flossen, Neopren, Tank)',
          'Professioneller PADI-zertifizierter Führer',
          'Hotel-Abholung und Rückfahrt',
          'Erfrischungen und Snacks',
          'Sicherheitsbriefing und Anleitung',
          'Unterwasserfotografie-Tipps'
        ],
        toBring: [
          'Badeanzug',
          'Handtuch',
          'Sonnencreme (riff-sicher)',
          'Unterwasserkamera (optional)',
          'Zertifizierungskarte (falls zertifiziert)',
          'Bequeme Kleidung für Bootsfahrt'
        ],
        meetingPoint: 'Marina Boulevard, Hurghada Marina',
        importantInfo: [
          'Mindestalter: 10 Jahre (mit Begleitung)',
          'Grundschwimmfähigkeiten erforderlich',
          'Medizinische Freigabe kann erforderlich sein',
          'Wetterbedingungen können den Zeitplan beeinflussen',
          'Maximale Tiefe: 12m für Anfänger, 30m für zertifizierte Taucher'
        ],
        images: [],
        icon: 'Waves'
      },
      'dolphin-trips': {
        id: 'dolphin-trips',
        name: 'Delfin-Touren',
        shortDescription: 'Schwimmen und interagieren Sie mit wilden Delfinen in ihrem natürlichen Lebensraum',
        fullDescription: `Erleben Sie die Magie des Schwimmens mit wilden Delfinen in den unberührten Gewässern des Roten Meeres. Unsere Delfin-Touren bringen Sie zum Dolphin House (Sha'ab Samadai), einem geschützten Riffgebiet, wo Spinner-Delfine zum Ausruhen und Spielen kommen.

Beobachten Sie diese majestätischen Kreaturen in ihrer natürlichen Umgebung, während sie anmutig durch das Wasser gleiten. Mit etwas Glück und Respekt für ihren Raum haben Sie vielleicht die unglaubliche Gelegenheit, neben ihnen zu schwimmen.

Unsere erfahrenen Führer kennen die besten Orte und Zeiten, um Delfine zu treffen, während wir alle Umweltschutzrichtlinien befolgen. Wir halten respektvollen Abstand und stören niemals das natürliche Verhalten der Delfine.

Das ist mehr als nur eine Bootstour - es ist eine lebensverändernde Begegnung mit einer der intelligentesten und verspieltesten Kreaturen des Ozeans. Die Erinnerungen an das Schwimmen mit Delfinen werden für immer bei Ihnen bleiben.`,
        duration: '3-4 Stunden',
        included: [
          'Boottransport zum Dolphin House',
          'Schwimmwesten und Sicherheitsausrüstung',
          'Schnorchelausrüstung (Maske, Flossen, Schnorchel)',
          'Professioneller Führer und Delfin-Spotter',
          'Mittagessen und Erfrischungen',
          'Hotel-Abholung und Rückfahrt'
        ],
        toBring: [
          'Badeanzug',
          'Handtuch',
          'Sonnencreme (riff-sicher)',
          'Wasserdichte Kamera',
          'Hut und Sonnenbrille',
          'Leichte Jacke für Bootsfahrt'
        ],
        meetingPoint: 'Hurghada Marina, Tor 3',
        importantInfo: [
          'Delfin-Sichtungen sind nicht garantiert (wilde Tiere)',
          'Schwimmen mit Delfinen hängt von ihrem Verhalten ab',
          'Mindestalter: 6 Jahre',
          'Schwangere Frauen sollten Arzt konsultieren',
          'Respektieren Sie das Meeresleben - nicht berühren oder verfolgen',
          'Tour kann bei schlechtem Wetter abgesagt werden'
        ],
        images: [],
        icon: 'Fish'
      },
      'island-tours': {
        id: 'island-tours',
        name: 'Insel-Touren',
        shortDescription: 'Besuchen Sie unberührte Inseln mit kristallklarem Wasser und weißen Sandstränden',
        fullDescription: `Entdecken Sie die versteckten Juwelen des Roten Meeres während unserer Insel-Touren. Wir bringen Sie zu den schönsten Inseln, wo Sie kristallklares Wasser, weiße Sandstrände und unberührte Natur genießen können.

Jede Insel hat ihren eigenen einzigartigen Charme - von ruhigen Buchten, perfekt zum Schnorcheln, bis hin zu lebendigen Korallenriffen voller tropischer Fische. Unsere erfahrenen Führer kennen die besten Orte und Zeiten, um die Schönheit dieser Inseln zu erleben.

Genießen Sie einen entspannten Tag in der Sonne, schwimmen Sie in den türkisfarbenen Gewässern oder erkunden Sie die Unterwasserwelt mit Schnorchelausrüstung. Wir sorgen für alle Notwendigkeiten und ein köstliches Mittagessen an Bord.

Diese Insel-Touren sind perfekt für Familien, Paare und Freundesgruppen, die dem Trubel entfliehen und die natürliche Schönheit des Roten Meeres genießen möchten.`,
        duration: '6-8 Stunden (ganzer Tag)',
        included: [
          'Boottransport zu den Inseln',
          'Schnorchelausrüstung (Maske, Flossen, Schnorchel)',
          'Mittagessen und Erfrischungen',
          'Professioneller Führer',
          'Hotel-Abholung und Rückfahrt',
          'Sicherheitsausrüstung'
        ],
        toBring: [
          'Badeanzug',
          'Handtuch',
          'Sonnencreme (riff-sicher)',
          'Wasserdichte Kamera',
          'Hut und Sonnenbrille',
          'Bequeme Kleidung'
        ],
        meetingPoint: 'Hurghada Marina, Tor 2',
        importantInfo: [
          'Mindestalter: 3 Jahre',
          'Grundschwimmfähigkeiten empfohlen',
          'Wetterbedingungen können den Zeitplan beeinflussen',
          'Inselzugang kann variieren',
          'Respektieren Sie die Umwelt - keinen Müll hinterlassen'
        ],
        images: [],
        icon: 'MapPin'
      },
      'boat-trips': {
        id: 'boat-trips',
        name: 'Boot-Touren',
        shortDescription: 'Entspannende Yacht- und Bootstouren entlang der wunderschönen Roten Meer Küste',
        fullDescription: `Erleben Sie ultimative Luxus und Entspannung während unserer exklusiven Bootstouren entlang der Roten Meer Küste. Unsere modernen Yachten bieten allen Komfort und Annehmlichkeiten für einen unvergesslichen Tag auf dem Wasser.

Genießen Sie atemberaubende Ausblicke auf die Küste, während Sie sich an Deck entspannen, in kristallklarem Wasser schwimmen oder einfach die Sonne genießen. Unsere professionelle Crew kümmert sich um Ihren Komfort und Ihre Sicherheit.

Diese Touren sind perfekt für besondere Anlässe, romantische Ausflüge oder einfach einen Tag der puren Entspannung. Wir bieten verschiedene Optionen von kurzen Trips bis hin zu ganztägigen Exkursionen.

Begleiten Sie uns für ein luxuriöses Erlebnis auf dem Wasser und entdecken Sie, warum das Rote Meer eines der beliebtesten Reiseziele der Welt ist.`,
        duration: '3-6 Stunden',
        included: [
          'Luxus-Yacht oder Boot',
          'Professionelle Crew',
          'Mittagessen und Erfrischungen',
          'Schnorchelausrüstung',
          'Hotel-Abholung und Rückfahrt',
          'Alle Sicherheitsausrüstung'
        ],
        toBring: [
          'Badeanzug',
          'Handtuch',
          'Sonnencreme',
          'Kamera',
          'Hut und Sonnenbrille',
          'Bequeme Kleidung'
        ],
        meetingPoint: 'Hurghada Marina, Tor 1',
        importantInfo: [
          'Alle Altersgruppen willkommen',
          'Wetterbedingungen können den Zeitplan beeinflussen',
          'Private Touren verfügbar',
          'Spezielle Diäten können arrangiert werden',
          'Stornierung bei schlechtem Wetter möglich'
        ],
        images: [],
        icon: 'Anchor'
      },
      'speed-boats': {
        id: 'speed-boats',
        name: 'Schnellboote',
        shortDescription: 'Aufregende Schnellboot-Fahrten über die Gewässer des Roten Meeres',
        fullDescription: `Spüren Sie das Adrenalin während unserer aufregenden Schnellboot-Touren! Unsere kraftvollen Schnellboote bringen Sie schnell zu den besten Orten des Roten Meeres für einen Tag voller Action und Abenteuer.

Erleben Sie das Gefühl hoher Geschwindigkeit über kristallklares Wasser, während Sie atemberaubende Ausblicke auf die Küste und Inseln genießen. Unsere erfahrenen Kapitäne kennen die besten Routen für eine sichere aber aufregende Fahrt.

Diese Touren sind perfekt für Abenteurer, die Action und Nervenkitzel suchen. Wir bieten verschiedene Optionen von kurzen Adrenalin-Fahrten bis hin zu längeren Exkursionen zu abgelegenen Orten.

Begleiten Sie uns für ein unvergessliches Schnellboot-Erlebnis und spüren Sie die Kraft des Roten Meeres unter Ihren Füßen!`,
        duration: '1-2 Stunden',
        included: [
          'Schnelles Schnellboot',
          'Erfahrener Kapitän',
          'Sicherheitsausrüstung',
          'Hotel-Abholung und Rückfahrt',
          'Erfrischungen',
          'Schnorchelausrüstung (optional)'
        ],
        toBring: [
          'Badeanzug',
          'Handtuch',
          'Sonnencreme',
          'Wasserdichte Kamera',
          'Hut und Sonnenbrille',
          'Leichte Jacke'
        ],
        meetingPoint: 'Hurghada Marina, Tor 4',
        importantInfo: [
          'Mindestalter: 8 Jahre',
          'Nicht geeignet für schwangere Frauen',
          'Wetterbedingungen können den Zeitplan beeinflussen',
          'Verwendung von Sicherheitsausrüstung obligatorisch',
          'Stornierung bei schlechtem Wetter möglich'
        ],
        images: [],
        icon: 'Zap'
      },
      'water-sports': {
        id: 'water-sports',
        name: 'Wassersport',
        shortDescription: 'Aufregende Wasseraktivitäten einschließlich Bananenboot, Parasailing, Jetski und mehr',
        fullDescription: `Entdecken Sie die aufregende Welt des Wassersports im Roten Meer! Unser umfassendes Wassersport-Programm bietet Aktivitäten für alle Altersgruppen und Könnensstufen.

Von Bananenboot-Fahrten und Parasailing bis hin zu Jetski-Touren und Wasserski - wir haben alles. Unsere professionellen Instruktoren sorgen für Ihre Sicherheit, während Sie das ultimative Wassersport-Erlebnis genießen.

Jede Aktivität wird an Ihr Niveau und Ihre Vorlieben angepasst. Ob Sie Anfänger oder erfahrener Wassersport-Enthusiast sind, wir haben die perfekte Aktivität für Sie.

Begleiten Sie uns für einen Tag voller Action und Spaß auf dem Wasser und entdecken Sie, warum das Rote Meer das perfekte Ziel für Wassersport ist!`,
        duration: '1-3 Stunden (variiert je nach Aktivität)',
        included: [
          'Alle Wassersport-Ausrüstung',
          'Professionelle Instruktoren',
          'Sicherheitsausrüstung',
          'Hotel-Abholung und Rückfahrt',
          'Erfrischungen',
          'Versicherung'
        ],
        toBring: [
          'Badeanzug',
          'Handtuch',
          'Sonnencreme',
          'Wasserdichte Kamera',
          'Hut und Sonnenbrille',
          'Bequeme Kleidung'
        ],
        meetingPoint: 'Hurghada Marina, Tor 5',
        importantInfo: [
          'Mindestalter: 6 Jahre (variiert je nach Aktivität)',
          'Grundschwimmfähigkeiten erforderlich',
          'Wetterbedingungen können den Zeitplan beeinflussen',
          'Verwendung von Sicherheitsausrüstung obligatorisch',
          'Stornierung bei schlechtem Wetter möglich'
        ],
        images: [],
        icon: 'Waves'
      }
    },
    da: {
      diving: {
        id: 'diving',
        name: 'Dykning',
        shortDescription: 'Udforsk de storslåede koraller og havliv i Det Røde Hav',
        fullDescription: `Dyk ned i de krystalklare vande i Det Røde Hav og opdag et af verdens mest spektakulære undervandsøkosystemer. Vores professionelle dykkerguider tager dig til de bedste korallrev-steder, hvor du vil støde på levende korallformationer, tropiske fisk og måske endda delfiner eller havskildpadder.

Uanset om du er begynder eller erfaren dykker, har vi programmer til alle niveauer. Vores PADI-certificerede instruktører sikrer din sikkerhed, mens de giver dig et uforglemmeligt undervandsæventyr.

Det Røde Hav er berømt for sin exceptionelle synlighed, varme vande og mangfoldige havliv, hvilket gør det til et af verdens bedste dykdestinationer. Oplev magien ved at svæve vægtløst blandt farverige korallhaver og skoler af eksotiske fisk.

Slut dig til os på denne utrolige rejse under bølgerne og skab minder, der vil vare hele livet.`,
        duration: '4-5 timer',
        included: [
          'Fuld dykudstyr (maske, finner, våddragt, tank)',
          'Professionel PADI-certificeret guide',
          'Hotel afhentning og aflevering',
          'Forfriskninger og snacks',
          'Sikkerhedsorientering og instruktion',
          'Undervandsfotograferingstips'
        ],
        toBring: [
          'Badedragt',
          'Håndklæde',
          'Solcreme (rev-sikker)',
          'Undervandskamera (valgfrit)',
          'Certifikat (hvis certificeret)',
          'Bekvem tøj til bådtur'
        ],
        meetingPoint: 'Marina Boulevard, Hurghada Marina',
        importantInfo: [
          'Minimumsalder: 10 år (med værge)',
          'Grundlæggende svømmeevner påkrævet',
          'Medicinsk godkendelse kan være påkrævet',
          'Vejrforhold kan påvirke tidsplanen',
          'Maksimal dybde: 12m for begyndere, 30m for certificerede dykkere'
        ],
        images: [],
        icon: 'Waves'
      },
      'dolphin-trips': {
        id: 'dolphin-trips',
        name: 'Delfin-ture',
        shortDescription: 'Svøm og interager med vilde delfiner i deres naturlige levested',
        fullDescription: `Oplev magien ved at svømme med vilde delfiner i Det Røde Havs uberørte vande. Vores delfin-ture tager dig til Dolphin House (Sha'ab Samadai), et beskyttet revområde, hvor spinner-delfiner kommer for at hvile og lege.

Se disse majestætiske skabninger i deres naturlige miljø, mens de glider elegant gennem vandet. Med lidt held og respekt for deres rum, kan du måske få den utrolige mulighed for at svømme sammen med dem.

Vores erfarne guider kender de bedste steder og tidspunkter til at møde delfiner, mens vi følger alle miljøbeskyttelsesretningslinjer. Vi holder respektfuld afstand og forstyrrer aldrig delfinernes naturlige adfærd.

Dette er mere end bare en bådtur - det er et livsforandrende møde med en af oceanets mest intelligente og legefulde skabninger. Minderne om at svømme med delfiner vil forblive hos dig for evigt.`,
        duration: '3-4 timer',
        included: [
          'Bådtransport til Dolphin House',
          'Redningsveste og sikkerhedsudstyr',
          'Snorkeludstyr (maske, finner, snorkel)',
          'Professionel guide og delfin-spotter',
          'Frokost og forfriskninger',
          'Hotel afhentning og aflevering'
        ],
        toBring: [
          'Badedragt',
          'Håndklæde',
          'Solcreme (rev-sikker)',
          'Vandtæt kamera',
          'Hat og solbriller',
          'Let jakke til bådtur'
        ],
        meetingPoint: 'Hurghada Marina, Port 3',
        importantInfo: [
          'Delfinobservationer er ikke garanteret (vilde dyr)',
          'Svømning med delfiner afhænger af deres adfærd',
          'Minimumsalder: 6 år',
          'Gravide kvinder bør konsultere læge',
          'Respekter havliv - ikke rør eller jag',
          'Tur kan aflyses på grund af vejrforhold'
        ],
        images: [],
        icon: 'Fish'
      },
      'island-tours': {
        id: 'island-tours',
        name: 'Ø-ture',
        shortDescription: 'Besøg uberørte øer med krystalklart vand og hvide sandstrande',
        fullDescription: `Oplev Det Røde Havs skjulte perler under vores ø-ture. Vi tager dig til de smukkeste øer, hvor du kan nyde krystalklart vand, hvide sandstrande og uberørt natur.

Hver ø har sin egen unikke charme - fra rolige bugter, perfekte til snorkling, til levende korallrev fulde af tropiske fisk. Vores erfarne guider kender de bedste steder og tidspunkter til at opleve disse øers skønhed.

Nyd en afslappende dag i solen, svøm i de turkise vande eller udforsk undervandsverdenen med snorkeludstyr. Vi sørger for alle nødvendigheder og en lækker frokost om bord.

Disse ø-ture er perfekte til familier, par og vennegrupper, der vil undslippe mylderet og nyde Det Røde Havs naturlige skønhed.`,
        duration: '6-8 timer (hele dagen)',
        included: [
          'Bådtransport til øerne',
          'Snorkeludstyr (maske, finner, snorkel)',
          'Frokost og forfriskninger',
          'Professionel guide',
          'Hotel afhentning og aflevering',
          'Sikkerhedsudstyr'
        ],
        toBring: [
          'Badedragt',
          'Håndklæde',
          'Solcreme (rev-sikker)',
          'Vandtæt kamera',
          'Hat og solbriller',
          'Bekvem tøj'
        ],
        meetingPoint: 'Hurghada Marina, Port 2',
        importantInfo: [
          'Minimumsalder: 3 år',
          'Grundlæggende svømmeevner anbefales',
          'Vejrforhold kan påvirke tidsplanen',
          'Ø-adgang kan variere',
          'Respekter miljøet - ikke efterlad affald'
        ],
        images: [],
        icon: 'MapPin'
      },
      'boat-trips': {
        id: 'boat-trips',
        name: 'Bådture',
        shortDescription: 'Afslappende yacht- og bådture langs Det Røde Havs smukke kyst',
        fullDescription: `Oplev ultimativ luksus og afslapning under vores eksklusive bådture langs Det Røde Havs kyst. Vores moderne yachter tilbyder al komfort og faciliteter til en uforglemmelig dag på vandet.

Nyd fantastiske udsigter til kysten, mens du slapper af på dækket, svømmer i krystalklart vand eller bare nyder solen. Vores professionelle besætning sørger for din komfort og sikkerhed.

Disse ture er perfekte til særlige lejligheder, romantiske udflugter eller bare en dag med ren afslapning. Vi tilbyder forskellige muligheder fra korte ture til hele dags ekspeditioner.

Slut dig til os for en luksusoplevelse på vandet og opdag, hvorfor Det Røde Hav er et af verdens mest elskede destinationer.`,
        duration: '3-6 timer',
        included: [
          'Luksus yacht eller båd',
          'Professionel besætning',
          'Frokost og forfriskninger',
          'Snorkeludstyr',
          'Hotel afhentning og aflevering',
          'Alt sikkerhedsudstyr'
        ],
        toBring: [
          'Badedragt',
          'Håndklæde',
          'Solcreme',
          'Kamera',
          'Hat og solbriller',
          'Bekvem tøj'
        ],
        meetingPoint: 'Hurghada Marina, Port 1',
        importantInfo: [
          'Alle aldre velkommen',
          'Vejrforhold kan påvirke tidsplanen',
          'Private ture tilgængelige',
          'Specielle diæter kan arrangeres',
          'Aflysning mulig ved dårligt vejr'
        ],
        images: [],
        icon: 'Anchor'
      },
      'speed-boats': {
        id: 'speed-boats',
        name: 'Hurtigbåde',
        shortDescription: 'Spændende hurtigbåd-ture over Det Røde Havs vande',
        fullDescription: `Føl adrenalinen under vores spændende hurtigbåd-ture! Vores kraftige hurtigbåde tager dig hurtigt til Det Røde Havs bedste steder for en dag fuld af action og eventyr.

Oplev følelsen af høj hastighed over krystalklart vand, mens du nyder fantastiske udsigter til kysten og øerne. Vores erfarne kaptajner kender de bedste ruter til en sikker men spændende tur.

Disse ture er perfekte til eventyrere, der søger action og spænding. Vi tilbyder forskellige muligheder fra korte adrenalin-ture til længere ekspeditioner til afsidesliggende steder.

Slut dig til os for en uforglemmelig hurtigbåd-oplevelse og føl kraften i Det Røde Hav under dine fødder!`,
        duration: '1-2 timer',
        included: [
          'Hurtig båd',
          'Erfaren kaptajn',
          'Sikkerhedsudstyr',
          'Hotel afhentning og aflevering',
          'Forfriskninger',
          'Snorkeludstyr (valgfrit)'
        ],
        toBring: [
          'Badedragt',
          'Håndklæde',
          'Solcreme',
          'Vandtæt kamera',
          'Hat og solbriller',
          'Let jakke'
        ],
        meetingPoint: 'Hurghada Marina, Port 4',
        importantInfo: [
          'Minimumsalder: 8 år',
          'Ikke egnet til gravide kvinder',
          'Vejrforhold kan påvirke tidsplanen',
          'Brug af sikkerhedsudstyr obligatorisk',
          'Aflysning mulig ved dårligt vejr'
        ],
        images: [],
        icon: 'Zap'
      },
      'water-sports': {
        id: 'water-sports',
        name: 'Vandsport',
        shortDescription: 'Spændende vandaktiviteter inklusive bananbåd, parasailing, jetski og mere',
        fullDescription: `Oplev den spændende verden af vandsport i Det Røde Hav! Vores omfattende vandsportsprogram tilbyder aktiviteter til alle aldre og færdighedsniveauer.

Fra bananbåd-ture og parasailing til jetski-ture og vandski - vi har det hele. Vores professionelle instruktører sørger for din sikkerhed, mens du nyder den ultimative vandsportsoplevelse.

Hver aktivitet tilpasses dit niveau og dine præferencer. Uanset om du er begynder eller erfaren vandsportsentusiast, har vi den perfekte aktivitet til dig.

Slut dig til os for en dag fuld af action og sjov på vandet og opdag, hvorfor Det Røde Hav er det perfekte mål for vandsport!`,
        duration: '1-3 timer (varierer efter aktivitet)',
        included: [
          'Alt vandsportsudstyr',
          'Professionelle instruktører',
          'Sikkerhedsudstyr',
          'Hotel afhentning og aflevering',
          'Forfriskninger',
          'Forsikring'
        ],
        toBring: [
          'Badedragt',
          'Håndklæde',
          'Solcreme',
          'Vandtæt kamera',
          'Hat og solbriller',
          'Bekvem tøj'
        ],
        meetingPoint: 'Hurghada Marina, Port 5',
        importantInfo: [
          'Minimumsalder: 6 år (varierer efter aktivitet)',
          'Grundlæggende svømmeevner påkrævet',
          'Vejrforhold kan påvirke tidsplanen',
          'Brug af sikkerhedsudstyr obligatorisk',
          'Aflysning mulig ved dårligt vejr'
        ],
        images: [],
        icon: 'Waves'
      }
    },
    ru: {
      diving: {
        id: 'diving',
        name: 'Дайвинг',
        shortDescription: 'Исследуйте великолепные коралловые рифы и морскую жизнь Красного моря',
        fullDescription: `Погрузитесь в кристально чистые воды Красного моря и откройте для себя одну из самых впечатляющих подводных экосистем мира. Наши профессиональные дайв-гиды проведут вас к лучшим местам коралловых рифов, где вы встретите живые коралловые образования, тропических рыб и, возможно, даже дельфинов или морских черепах.

Независимо от того, являетесь ли вы новичком или опытным дайвером, у нас есть программы для всех уровней. Наши сертифицированные PADI инструкторы обеспечивают вашу безопасность, предоставляя незабываемое подводное приключение.

Красное море славится своей исключительной видимостью, теплыми водами и разнообразной морской жизнью, что делает его одним из лучших мест для дайвинга в мире. Испытайте магию невесомого парения среди красочных коралловых садов и косяков экзотических рыб.

Присоединяйтесь к нам в этом невероятном путешествии под волнами и создайте воспоминания, которые останутся на всю жизнь.`,
        duration: '4-5 часов',
        included: [
          'Полное снаряжение для дайвинга (маска, ласты, гидрокостюм, баллон)',
          'Профессиональный сертифицированный PADI гид',
          'Трансфер из отеля и обратно',
          'Напитки и закуски',
          'Инструктаж по безопасности',
          'Советы по подводной фотографии'
        ],
        toBring: [
          'Купальник',
          'Полотенце',
          'Солнцезащитный крем (безопасный для рифов)',
          'Подводная камера (опционально)',
          'Сертификат (если сертифицирован)',
          'Удобная одежда для поездки на лодке'
        ],
        meetingPoint: 'Марина Бульвар, Марина Хургада',
        importantInfo: [
          'Минимальный возраст: 10 лет (с сопровождающим)',
          'Требуются базовые навыки плавания',
          'Может потребоваться медицинское разрешение',
          'Погодные условия могут повлиять на расписание',
          'Максимальная глубина: 12м для новичков, 30м для сертифицированных дайверов'
        ],
        images: [],
        icon: 'Waves'
      },
      'dolphin-trips': {
        id: 'dolphin-trips',
        name: 'Экскурсии с Дельфинами',
        shortDescription: 'Плавайте и взаимодействуйте с дикими дельфинами в их естественной среде обитания',
        fullDescription: `Испытайте магию плавания с дикими дельфинами в нетронутых водах Красного моря. Наши экскурсии с дельфинами приведут вас в Дом Дельфинов (Шааб Самадай), охраняемую рифовую зону, где дельфины-спиннеры приходят отдыхать и играть.

Наблюдайте за этими величественными существами в их естественной среде, пока они грациозно скользят по воде. С небольшой удачей и уважением к их пространству, у вас может быть невероятная возможность поплавать рядом с ними.

Наши опытные гиды знают лучшие места и времена для встречи с дельфинами, соблюдая все экологические правила защиты. Мы соблюдаем уважительную дистанцию и никогда не нарушаем естественное поведение дельфинов.

Это больше, чем просто поездка на лодке - это встреча, меняющая жизнь, с одним из самых умных и игривых существ океана. Воспоминания о плавании с дельфинами останутся с вами навсегда.`,
        duration: '3-4 часа',
        included: [
          'Транспорт на лодке до Дома Дельфинов',
          'Спасательные жилеты и оборудование безопасности',
          'Снаряжение для сноркелинга (маска, ласты, трубка)',
          'Профессиональный гид и наблюдатель за дельфинами',
          'Обед и напитки',
          'Трансфер из отеля и обратно'
        ],
        toBring: [
          'Купальник',
          'Полотенце',
          'Солнцезащитный крем (безопасный для рифов)',
          'Водонепроницаемая камера',
          'Шляпа и солнцезащитные очки',
          'Легкая куртка для поездки на лодке'
        ],
        meetingPoint: 'Марина Хургада, Ворота 3',
        importantInfo: [
          'Наблюдение дельфинов не гарантировано (дикие животные)',
          'Плавание с дельфинами зависит от их поведения',
          'Минимальный возраст: 6 лет',
          'Беременным женщинам следует проконсультироваться с врачом',
          'Уважайте морскую жизнь - не трогайте и не преследуйте',
          'Экскурсия может быть отменена из-за погодных условий'
        ],
        images: [],
        icon: 'Fish'
      },
      'island-tours': {
        id: 'island-tours',
        name: 'Экскурсии на Острова',
        shortDescription: 'Посетите нетронутые острова с кристально чистой водой и белыми песчаными пляжами',
        fullDescription: `Откройте для себя скрытые жемчужины Красного моря во время наших экскурсий на острова. Мы отвезем вас на самые красивые острова, где вы сможете насладиться кристально чистой водой, белыми песчаными пляжами и нетронутой природой.

Каждый остров имеет свой уникальный шарм - от тихих бухт, идеальных для сноркелинга, до живых коралловых рифов, полных тропических рыб. Наши опытные гиды знают лучшие места и времена, чтобы испытать красоту этих островов.

Наслаждайтесь расслабляющим днем на солнце, плавайте в бирюзовых водах или исследуйте подводный мир со снаряжением для сноркелинга. Мы позаботимся обо всех необходимых вещах и вкусном обеде на борту.

Эти экскурсии на острова идеальны для семей, пар и групп друзей, которые хотят сбежать от суеты и насладиться естественной красотой Красного моря.`,
        duration: '6-8 часов (полный день)',
        included: [
          'Транспорт на лодке на острова',
          'Снаряжение для сноркелинга (маска, ласты, трубка)',
          'Обед и напитки',
          'Профессиональный гид',
          'Трансфер из отеля и обратно',
          'Оборудование безопасности'
        ],
        toBring: [
          'Купальник',
          'Полотенце',
          'Солнцезащитный крем (безопасный для рифов)',
          'Водонепроницаемая камера',
          'Шляпа и солнцезащитные очки',
          'Удобная одежда'
        ],
        meetingPoint: 'Марина Хургада, Ворота 2',
        importantInfo: [
          'Минимальный возраст: 3 года',
          'Рекомендуются базовые навыки плавания',
          'Погодные условия могут повлиять на расписание',
          'Доступ к островам может варьироваться',
          'Уважайте окружающую среду - не оставляйте мусор'
        ],
        images: [],
        icon: 'MapPin'
      },
      'boat-trips': {
        id: 'boat-trips',
        name: 'Морские Прогулки',
        shortDescription: 'Расслабляющие экскурсии на яхтах и лодках вдоль красивого побережья Красного моря',
        fullDescription: `Испытайте абсолютную роскошь и расслабление во время наших эксклюзивных морских прогулок вдоль побережья Красного моря. Наши современные яхты предлагают весь комфорт и удобства для незабываемого дня на воде.

Наслаждайтесь захватывающими видами на побережье, расслабляясь на палубе, плавая в кристально чистой воде или просто наслаждаясь солнцем. Наша профессиональная команда заботится о вашем комфорте и безопасности.

Эти экскурсии идеальны для особых случаев, романтических поездок или просто дня чистой релаксации. Мы предлагаем различные варианты от коротких поездок до полнодневных экспедиций.

Присоединяйтесь к нам для роскошного опыта на воде и откройте для себя, почему Красное море является одним из самых любимых направлений в мире.`,
        duration: '3-6 часов',
        included: [
          'Роскошная яхта или лодка',
          'Профессиональная команда',
          'Обед и напитки',
          'Снаряжение для сноркелинга',
          'Трансфер из отеля и обратно',
          'Все оборудование безопасности'
        ],
        toBring: [
          'Купальник',
          'Полотенце',
          'Солнцезащитный крем',
          'Камера',
          'Шляпа и солнцезащитные очки',
          'Удобная одежда'
        ],
        meetingPoint: 'Марина Хургада, Ворота 1',
        importantInfo: [
          'Все возрасты приветствуются',
          'Погодные условия могут повлиять на расписание',
          'Доступны частные экскурсии',
          'Можно организовать специальные диеты',
          'Возможна отмена при плохой погоде'
        ],
        images: [],
        icon: 'Anchor'
      },
      'speed-boats': {
        id: 'speed-boats',
        name: 'Скоростные Лодки',
        shortDescription: 'Захватывающие поездки на скоростных лодках по водам Красного моря',
        fullDescription: `Почувствуйте адреналин во время наших захватывающих экскурсий на скоростных лодках! Наши мощные скоростные лодки быстро доставят вас к лучшим местам Красного моря для дня, полного действий и приключений.

Испытайте ощущение высокой скорости по кристально чистой воде, наслаждаясь захватывающими видами на побережье и острова. Наши опытные капитаны знают лучшие маршруты для безопасной, но захватывающей поездки.

Эти экскурсии идеальны для искателей приключений, ищущих действия и острых ощущений. Мы предлагаем различные варианты от коротких адреналиновых поездок до более длительных экспедиций в отдаленные места.

Присоединяйтесь к нам для незабываемого опыта на скоростной лодке и почувствуйте силу Красного моря под вашими ногами!`,
        duration: '1-2 часа',
        included: [
          'Быстрая скоростная лодка',
          'Опытный капитан',
          'Оборудование безопасности',
          'Трансфер из отеля и обратно',
          'Напитки',
          'Снаряжение для сноркелинга (опционально)'
        ],
        toBring: [
          'Купальник',
          'Полотенце',
          'Солнцезащитный крем',
          'Водонепроницаемая камера',
          'Шляпа и солнцезащитные очки',
          'Легкая куртка'
        ],
        meetingPoint: 'Марина Хургада, Ворота 4',
        importantInfo: [
          'Минимальный возраст: 8 лет',
          'Не рекомендуется для беременных женщин',
          'Погодные условия могут повлиять на расписание',
          'Использование оборудования безопасности обязательно',
          'Возможна отмена при плохой погоде'
        ],
        images: [],
        icon: 'Zap'
      },
      'water-sports': {
        id: 'water-sports',
        name: 'Водные Виды Спорта',
        shortDescription: 'Захватывающие водные активности, включая банановую лодку, парасейлинг, водные мотоциклы и многое другое',
        fullDescription: `Откройте для себя захватывающий мир водных видов спорта в Красном море! Наша комплексная программа водных видов спорта предлагает активности для всех возрастов и уровней подготовки.

От поездок на банановой лодке и парасейлинга до экскурсий на водных мотоциклах и водных лыжах - у нас есть все. Наши профессиональные инструкторы обеспечивают вашу безопасность, пока вы наслаждаетесь ультимативным опытом водных видов спорта.

Каждая активность адаптируется к вашему уровню и предпочтениям. Независимо от того, являетесь ли вы новичком или опытным энтузиастом водных видов спорта, у нас есть идеальная активность для вас.

Присоединяйтесь к нам для дня, полного действий и веселья на воде, и откройте для себя, почему Красное море является идеальным местом для водных видов спорта!`,
        duration: '1-3 часа (варьируется в зависимости от активности)',
        included: [
          'Все оборудование для водных видов спорта',
          'Профессиональные инструкторы',
          'Оборудование безопасности',
          'Трансфер из отеля и обратно',
          'Напитки',
          'Страховка'
        ],
        toBring: [
          'Купальник',
          'Полотенце',
          'Солнцезащитный крем',
          'Водонепроницаемая камера',
          'Шляпа и солнцезащитные очки',
          'Удобная одежда'
        ],
        meetingPoint: 'Марина Хургада, Ворота 5',
        importantInfo: [
          'Минимальный возраст: 6 лет (варьируется в зависимости от активности)',
          'Требуются базовые навыки плавания',
          'Погодные условия могут повлиять на расписание',
          'Использование оборудования безопасности обязательно',
          'Возможна отмена при плохой погоде'
        ],
        images: [],
        icon: 'Waves'
      }
    }
  };

  return translations[language] || translations['en'];
};
