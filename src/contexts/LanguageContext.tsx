import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'pl' | 'de' | 'da' | 'nl' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const translations = {
    en: {
      // Navigation
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.activities': 'Activities',
      'nav.contact': 'Contact',
      
      // Hero Section
      'hero.title': 'Sea Waves',
      'hero.subtitle': 'Red Sea Adventures',
      'hero.description': 'Experience the adventure in the crystal-clear waters of the Red Sea',
      'hero.button': 'Explore Activities',
      
      // About Section
      'about.title': 'About Sea Waves',
      'about.subtitle': 'Discover our passion for the Red Sea and commitment to unforgettable experiences',
      'about.founder.name': 'Ahmed Hassan',
      'about.founder.title': 'Founder & Adventure Expert',
      'about.founder.story1': 'Hello! My name is Ahmed Hassan, and on behalf of SeaWaves I would like to welcome you to our world of Red Sea adventures.',
      'about.founder.story2': 'The first time I saw the coast of the Red Sea was when I travelled to Hurghada from northern Egypt as a child. The burning sun that came through the window was already making its mark on my skin, but it was that feeling that made this moment so memorable.',
      'about.founder.story3': 'The sea was the most beautiful sight I had ever seen. I couldn\'t stop looking ahead, staring into the different shades of blue and turquoise colors, thinking about what lay beneath. The sea life, creatures, fish, and mammals - all of which I wanted to experience with my own eyes. At that point, I knew I had to be close to the sea.',
      'about.founder.story4': 'Years passed, and I came back to Hurghada. With a few friends as passionate as me, we decided to share our love for the Red Sea with people like you. Showing what is worth seeing, respecting our guests and their needs.',
      'about.founder.story5': 'Our priority was, and still is, the QUALITY of our excursions. Every detail of our services is well thought out to make your experience unforgettable.',
      'about.value1.title': 'Quality First',
      'about.value1.desc': 'Every detail of our services is carefully planned to ensure your experience exceeds expectations.',
      'about.value2.title': 'Guest Focused',
      'about.value2.desc': 'We respect our guests and their needs, tailoring each experience to create lasting memories.',
      'about.value3.title': 'Passion Driven',
      'about.value3.desc': 'Our love for the Red Sea drives everything we do, from safety to creating magical moments.',
      'about.contact.title': 'Talk to our Adventure Expert',
      'about.contact.desc': 'Have questions about our activities? Ahmed and our team are here to help you plan the perfect Red Sea adventure.',
      
      // Activities
      'activities.title': 'Our Activities',
      'activities.subtitle': 'Choose your perfect Red Sea adventure',
      
      // Contact
      'contact.title': 'Contact Us',
      'contact.subtitle': 'Get in touch for your next adventure',
      'contact.contactUsBelow': 'Contact us below',
      'contact.interestedIn': 'Interested in',
      'contact.contactUs': 'Contact Us',
      'contact.formDescription': 'Fill out the form below and we\'ll get back to you within 24 hours.',
      'contact.thankYou': 'Thank you! We\'ll contact you soon.',
      'contact.errorMessage': 'Something went wrong. Please try again.',
      'contact.fullName': 'Full Name',
      'contact.email': 'Email Address',
      'contact.phone': 'Phone Number',
      'contact.preferredDate': 'Preferred Date',
      'contact.numberOfPeople': 'Number of People',
      'contact.message': 'Message / Questions',
      'contact.sendInquiry': 'Send Inquiry',
      'contact.sending': 'Sending',
      'contact.people1': '1 Person',
      'contact.people2': '2 People',
      'contact.people3': '3 People',
      'contact.people4': '4 People',
      'contact.people5plus': '5+ People',
      'contact.phoneTitle': 'Phone',
      'contact.phoneDesc': 'Call us anytime',
      'contact.emailTitle': 'Email',
      'contact.emailDesc': 'Send us a message',
      'contact.locationTitle': 'Location',
      'contact.locationDesc': 'Visit us in Hurghada',
      
      // Footer
      'footer.rights': 'All rights reserved.',
      'footer.description': 'Experience the adventure in the crystal-clear waters of the Red Sea. We provide unforgettable aquatic experiences in Hurghada, Egypt, with 15 years of expertise and over 45,000 satisfied clients.',
      'footer.experience': 'Experience the adventure',
      'footer.contactUs': 'Contact Us',
      'footer.quickLinks': 'Quick Links',
      'footer.privacy': 'Privacy Policy',
      'footer.terms': 'Terms & Conditions',
      'footer.followUs': 'Follow us:',
      'footer.madeWith': 'Made with ❤️ for Red Sea adventures',
      'footer.readyForAdventure': 'Ready for Your Adventure?',
      'footer.contactExpert': 'Contact our adventure expert Ahmed Hassan and his team to plan your perfect Red Sea experience.',
      'footer.callNow': 'Call Now',
      'footer.sendEmail': 'Send Email',
      
      // Activity
      'activity.learnMore': 'Learn More',
      'activity.about': 'About This Activity',
      'activity.included': 'What\'s Included',
      'activity.toBring': 'What to Bring',
      'activity.meetingPoint': 'Meeting Point',
      'activity.importantInfo': 'Important Information',
      
      // Stats
      'stats.title': 'Our Achievements',
      'stats.subtitle': 'Years of dedication to providing exceptional Red Sea experiences',
      'stats.food': 'Different types of food available on the boat',
      'stats.experience': 'Years of experience',
      'stats.security': 'Security checks on the boat and equipment',
      'stats.clients': 'Satisfied clients',
      'stats.sails': 'Sails we made since 2012',
      'stats.whyChoose': 'Why Choose Sea Waves?',
      'stats.guarantee': 'We Guarantee',
      'stats.views': 'Beautiful views',
      'stats.provide': 'We Provide',
      'stats.serve': 'We Serve',
    },
    pl: {
      // Navigation
      'nav.home': 'Strona główna',
      'nav.about': 'O nas',
      'nav.activities': 'Atrakcje',
      'nav.contact': 'Kontakt',
      
      // Hero Section
      'hero.title': 'Sea Waves',
      'hero.subtitle': 'Przygody Morza Czerwonego',
      'hero.description': 'Doświadcz przygody w krystalicznie czystych wodach Morza Czerwonego',
      'hero.button': 'Zobacz Atrakcje',
      
      // About Section
      'about.title': 'O Sea Waves',
      'about.subtitle': 'Odkryj naszą pasję do Morza Czerwonego i zaangażowanie w niezapomniane doświadczenia',
      'about.founder.name': 'Ahmed Hassan',
      'about.founder.title': 'Założyciel i Ekspert Przygód',
      'about.founder.story1': 'Cześć! Nazywam się Ahmed Hassan i w imieniu SeaWaves chciałbym powitać Cię w naszym świecie przygód na Morzu Czerwonym.',
      'about.founder.story2': 'Pierwszy raz zobaczyłem wybrzeże Morza Czerwonego, gdy jako dziecko podróżowałem z północnego Egiptu do Hurghady. Palące słońce, które wpadało przez okno, już zostawiało ślady na mojej skórze, ale to uczucie sprawiło, że ten moment był tak niezapomniany.',
      'about.founder.story3': 'Morze było najpiękniejszym widokiem, jaki kiedykolwiek widziałem. Nie mogłem przestać patrzeć przed siebie, wpatrując się w różne odcienie niebieskiego i turkusowego, myśląc o tym, co leży pod powierzchnią. Życie morskie, stworzenia, ryby i ssaki - wszystko to chciałem doświadczyć na własne oczy. W tym momencie wiedziałem, że muszę być blisko morza.',
      'about.founder.story4': 'Minęły lata i wróciłem do Hurghady. Z kilkoma przyjaciółmi tak pasjonatami jak ja, zdecydowaliśmy się podzielić naszą miłością do Morza Czerwonego z ludźmi takimi jak Ty. Pokazując to, co warto zobaczyć, szanując naszych gości i ich potrzeby.',
      'about.founder.story5': 'Naszym priorytetem było i nadal jest JAKOŚĆ naszych wycieczek. Każdy szczegół naszych usług jest przemyślany, aby Twoje doświadczenie było niezapomniane.',
      'about.value1.title': 'Jakość na pierwszym miejscu',
      'about.value1.desc': 'Każdy szczegół naszych usług jest starannie zaplanowany, aby zapewnić, że Twoje doświadczenie przekroczy oczekiwania.',
      'about.value2.title': 'Skupieni na gościach',
      'about.value2.desc': 'Szanujemy naszych gości i ich potrzeby, dostosowując każde doświadczenie, aby tworzyć trwałe wspomnienia.',
      'about.value3.title': 'Napędzani pasją',
      'about.value3.desc': 'Nasza miłość do Morza Czerwonego napędza wszystko, co robimy, od bezpieczeństwa po tworzenie magicznych chwil.',
      'about.contact.title': 'Porozmawiaj z naszym Ekspertem Przygód',
      'about.contact.desc': 'Masz pytania dotyczące naszych atrakcji? Ahmed i nasz zespół są tutaj, aby pomóc Ci zaplanować idealną przygodę na Morzu Czerwonym.',
      
      // Activities
      'activities.title': 'Nasze Atrakcje',
      'activities.subtitle': 'Wybierz swoją idealną przygodę na Morzu Czerwonym',
      
      // Contact
      'contact.title': 'Skontaktuj się z nami',
      'contact.subtitle': 'Skontaktuj się z nami w sprawie swojej następnej przygody',
      'contact.interestedIn': 'Zainteresowany',
      'contact.contactUs': 'Skontaktuj się z nami',
      'contact.formDescription': 'Wypełnij poniższy formularz, a skontaktujemy się z Tobą w ciągu 24 godzin.',
      'contact.thankYou': 'Dziękujemy! Skontaktujemy się z Tobą wkrótce.',
      'contact.errorMessage': 'Coś poszło nie tak. Spróbuj ponownie.',
      'contact.fullName': 'Imię i nazwisko',
      'contact.email': 'Adres email',
      'contact.phone': 'Numer telefonu',
      'contact.preferredDate': 'Preferowana data',
      'contact.numberOfPeople': 'Liczba osób',
      'contact.message': 'Wiadomość / Pytania',
      'contact.sendInquiry': 'Wyślij zapytanie',
      'contact.sending': 'Wysyłanie',
      'contact.people1': '1 Osoba',
      'contact.people2': '2 Osoby',
      'contact.people3': '3 Osoby',
      'contact.people4': '4 Osoby',
      'contact.people5plus': '5+ Osób',
      'contact.phoneTitle': 'Telefon',
      'contact.phoneDesc': 'Zadzwoń do nas o każdej porze',
      'contact.emailTitle': 'Email',
      'contact.emailDesc': 'Wyślij nam wiadomość',
      'contact.locationTitle': 'Lokalizacja',
      'contact.locationDesc': 'Odwiedź nas w Hurghadzie',
      
      // Footer
      'footer.rights': 'Wszystkie prawa zastrzeżone.',
      'footer.description': 'Doświadcz przygody w krystalicznie czystych wodach Morza Czerwonego. Zapewniamy niezapomniane doświadczenia wodne w Hurghadzie, Egipcie, z 15-letnim doświadczeniem i ponad 45 000 zadowolonych klientów.',
      'footer.experience': 'Doświadcz przygody',
      'footer.contactUs': 'Skontaktuj się z nami',
      'footer.quickLinks': 'Szybkie linki',
      'footer.privacy': 'Polityka prywatności',
      'footer.terms': 'Warunki i zasady',
      'footer.followUs': 'Śledź nas:',
      'footer.madeWith': 'Stworzone z ❤️ dla przygód na Morzu Czerwonym',
      'footer.readyForAdventure': 'Gotowy na swoją przygodę?',
      'footer.contactExpert': 'Skontaktuj się z naszym ekspertem od przygód Ahmedem Hassanem i jego zespołem, aby zaplanować swoje idealne doświadczenie na Morzu Czerwonym.',
      'footer.callNow': 'Zadzwoń teraz',
      'footer.sendEmail': 'Wyślij email',
      
      // Activity
      'activity.learnMore': 'Dowiedz się więcej',
      'activity.about': 'O tej aktywności',
      'activity.included': 'Co jest wliczone',
      'activity.toBring': 'Co zabrać',
      'activity.meetingPoint': 'Miejsce spotkania',
      'activity.importantInfo': 'Ważne informacje',
      
      // Stats
      'stats.title': 'Nasze Osiągnięcia',
      'stats.subtitle': 'Lata poświęcenia na zapewnienie wyjątkowych doświadczeń na Morzu Czerwonym',
      'stats.food': 'Różne rodzaje jedzenia dostępne na łodzi',
      'stats.experience': 'Lat doświadczenia',
      'stats.security': 'Kontroli bezpieczeństwa łodzi i sprzętu',
      'stats.clients': 'Zadowolonych klientów',
      'stats.sails': 'Rejsów od 2012',
      'stats.whyChoose': 'Dlaczego wybrać Sea Waves?',
      'stats.guarantee': 'Gwarantujemy',
      'stats.views': 'Piękne widoki',
      'stats.provide': 'Zapewniamy',
      'stats.serve': 'Serwujemy',
    },
    de: {
      // Navigation
      'nav.home': 'Startseite',
      'nav.about': 'Über uns',
      'nav.activities': 'Aktivitäten',
      'nav.contact': 'Kontakt',
      
      // Hero Section
      'hero.title': 'Sea Waves',
      'hero.subtitle': 'Rotes Meer Abenteuer',
      'hero.description': 'Erleben Sie das Abenteuer in den kristallklaren Gewässern des Roten Meeres',
      'hero.button': 'Aktivitäten erkunden',
      
      // About Section
      'about.title': 'Über Sea Waves',
      'about.subtitle': 'Entdecken Sie unsere Leidenschaft für das Rote Meer und unser Engagement für unvergessliche Erlebnisse',
      'about.founder.name': 'Ahmed Hassan',
      'about.founder.title': 'Gründer & Abenteuer-Experte',
      'about.founder.story1': 'Hallo! Mein Name ist Ahmed Hassan, und im Namen von SeaWaves möchte ich Sie in unserer Welt der Roten Meer Abenteuer willkommen heißen.',
      'about.founder.story2': 'Das erste Mal sah ich die Küste des Roten Meeres, als ich als Kind von Nordägypten nach Hurghada reiste. Die brennende Sonne, die durch das Fenster kam, hinterließ bereits ihre Spuren auf meiner Haut, aber es war dieses Gefühl, das diesen Moment so unvergesslich machte.',
      'about.founder.story3': 'Das Meer war der schönste Anblick, den ich je gesehen hatte. Ich konnte nicht aufhören, nach vorne zu schauen, in die verschiedenen Blau- und Türkistöne zu starren und über das nachzudenken, was darunter lag. Das Meeresleben, die Kreaturen, Fische und Säugetiere - all das wollte ich mit eigenen Augen erleben. In diesem Moment wusste ich, dass ich dem Meer nahe sein musste.',
      'about.founder.story4': 'Jahre vergingen, und ich kehrte nach Hurghada zurück. Mit ein paar Freunden, die so leidenschaftlich waren wie ich, beschlossen wir, unsere Liebe zum Roten Meer mit Menschen wie Ihnen zu teilen. Zeigen, was es wert ist, gesehen zu werden, unsere Gäste und ihre Bedürfnisse respektieren.',
      'about.founder.story5': 'Unsere Priorität war und ist die QUALITÄT unserer Ausflüge. Jedes Detail unserer Dienstleistungen ist durchdacht, um Ihr Erlebnis unvergesslich zu machen.',
      'about.value1.title': 'Qualität zuerst',
      'about.value1.desc': 'Jedes Detail unserer Dienstleistungen ist sorgfältig geplant, um sicherzustellen, dass Ihr Erlebnis die Erwartungen übertrifft.',
      'about.value2.title': 'Gastorientiert',
      'about.value2.desc': 'Wir respektieren unsere Gäste und ihre Bedürfnisse und passen jedes Erlebnis an, um bleibende Erinnerungen zu schaffen.',
      'about.value3.title': 'Leidenschaftlich',
      'about.value3.desc': 'Unsere Liebe zum Roten Meer treibt alles an, was wir tun, von der Sicherheit bis zur Schaffung magischer Momente.',
      'about.contact.title': 'Sprechen Sie mit unserem Abenteuer-Experten',
      'about.contact.desc': 'Haben Sie Fragen zu unseren Aktivitäten? Ahmed und unser Team sind hier, um Ihnen zu helfen, das perfekte Rote Meer Abenteuer zu planen.',
      
      // Activities
      'activities.title': 'Unsere Aktivitäten',
      'activities.subtitle': 'Wählen Sie Ihr perfektes Rotes Meer Abenteuer',
      
      // Contact
      'contact.title': 'Kontaktieren Sie uns',
      'contact.subtitle': 'Kontaktieren Sie uns für Ihr nächstes Abenteuer',
      'contact.interestedIn': 'Interessiert an',
      'contact.contactUs': 'Kontaktieren Sie uns',
      'contact.formDescription': 'Füllen Sie das untenstehende Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen.',
      'contact.thankYou': 'Vielen Dank! Wir werden uns bald bei Ihnen melden.',
      'contact.errorMessage': 'Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.',
      'contact.fullName': 'Vollständiger Name',
      'contact.email': 'E-Mail-Adresse',
      'contact.phone': 'Telefonnummer',
      'contact.preferredDate': 'Bevorzugtes Datum',
      'contact.numberOfPeople': 'Anzahl der Personen',
      'contact.message': 'Nachricht / Fragen',
      'contact.sendInquiry': 'Anfrage senden',
      'contact.sending': 'Senden',
      'contact.people1': '1 Person',
      'contact.people2': '2 Personen',
      'contact.people3': '3 Personen',
      'contact.people4': '4 Personen',
      'contact.people5plus': '5+ Personen',
      'contact.phoneTitle': 'Telefon',
      'contact.phoneDesc': 'Rufen Sie uns jederzeit an',
      'contact.emailTitle': 'E-Mail',
      'contact.emailDesc': 'Senden Sie uns eine Nachricht',
      'contact.locationTitle': 'Standort',
      'contact.locationDesc': 'Besuchen Sie uns in Hurghada',
      
      // Footer
      'footer.rights': 'Alle Rechte vorbehalten.',
      'footer.description': 'Erleben Sie das Abenteuer in den kristallklaren Gewässern des Roten Meeres. Wir bieten unvergessliche Wassererlebnisse in Hurghada, Ägypten, mit 15 Jahren Erfahrung und über 45.000 zufriedenen Kunden.',
      'footer.experience': 'Erleben Sie das Abenteuer',
      'footer.contactUs': 'Kontaktieren Sie uns',
      'footer.quickLinks': 'Schnelle Links',
      'footer.privacy': 'Datenschutz',
      'footer.terms': 'Geschäftsbedingungen',
      'footer.followUs': 'Folgen Sie uns:',
      'footer.madeWith': 'Mit ❤️ für Rotes Meer Abenteuer gemacht',
      'footer.readyForAdventure': 'Bereit für Ihr Abenteuer?',
      'footer.contactExpert': 'Kontaktieren Sie unseren Abenteuer-Experten Ahmed Hassan und sein Team, um Ihr perfektes Rotes Meer Erlebnis zu planen.',
      'footer.callNow': 'Jetzt anrufen',
      'footer.sendEmail': 'E-Mail senden',
      
      // Activity
      'activity.learnMore': 'Mehr erfahren',
      'activity.about': 'Über diese Aktivität',
      'activity.included': 'Was enthalten ist',
      'activity.toBring': 'Was mitzubringen',
      'activity.meetingPoint': 'Treffpunkt',
      'activity.importantInfo': 'Wichtige Informationen',
      
      // Stats
      'stats.title': 'Unsere Erfolge',
      'stats.subtitle': 'Jahre der Hingabe an außergewöhnliche Rote Meer Erlebnisse',
      'stats.food': 'Verschiedene Arten von Essen auf dem Boot verfügbar',
      'stats.experience': 'Jahre Erfahrung',
      'stats.security': 'Sicherheitskontrollen des Bootes und der Ausrüstung',
      'stats.clients': 'Zufriedene Kunden',
      'stats.sails': 'Segeltouren seit 2012',
      'stats.whyChoose': 'Warum Sea Waves wählen?',
      'stats.guarantee': 'Wir garantieren',
      'stats.views': 'Wunderschöne Aussichten',
      'stats.provide': 'Wir bieten',
      'stats.serve': 'Wir servieren',
    },
    da: {
      // Navigation
      'nav.home': 'Hjem',
      'nav.about': 'Om os',
      'nav.activities': 'Aktiviteter',
      'nav.contact': 'Kontakt',
      
      // Hero Section
      'hero.title': 'Sea Waves',
      'hero.subtitle': 'Røde Hav Eventyr',
      'hero.description': 'Oplev eventyret i de krystalklare farvande i Det Røde Hav',
      'hero.button': 'Udforsk Aktiviteter',
      
      // About Section
      'about.title': 'Om Sea Waves',
      'about.subtitle': 'Opdag vores passion for Det Røde Hav og engagement for uforglemmelige oplevelser',
      'about.founder.name': 'Ahmed Hassan',
      'about.founder.title': 'Grundlægger & Eventyr Ekspert',
      'about.founder.story1': 'Hej! Mit navn er Ahmed Hassan, og på vegne af SeaWaves vil jeg gerne byde dig velkommen til vores verden af Røde Hav eventyr.',
      'about.founder.story2': 'Første gang jeg så kysten af Det Røde Hav var da jeg rejste til Hurghada fra det nordlige Egypten som barn. Den brændende sol, der kom gennem vinduet, efterlod allerede sit præg på min hud, men det var den følelse, der gjorde dette øjeblik så mindeværdigt.',
      'about.founder.story3': 'Havet var det smukkeste syn, jeg nogensinde havde set. Jeg kunne ikke stoppe med at kigge fremad, stirre ind i de forskellige nuancer af blå og turkis farver, tænke på hvad der lå under. Havlivet, skabninger, fisk og pattedyr - alt det ville jeg opleve med mine egne øjne. På det tidspunkt vidste jeg, at jeg måtte være tæt på havet.',
      'about.founder.story4': 'År gik, og jeg kom tilbage til Hurghada. Med et par venner lige så passionerede som mig, besluttede vi at dele vores kærlighed til Det Røde Hav med mennesker som dig. Vise hvad der er værd at se, respektere vores gæster og deres behov.',
      'about.founder.story5': 'Vores prioritet var og er stadig KVALITETEN af vores udflugter. Hver detalje af vores tjenester er gennemtænkt for at gøre din oplevelse uforglemmelig.',
      'about.value1.title': 'Kvalitet først',
      'about.value1.desc': 'Hver detalje af vores tjenester er omhyggeligt planlagt for at sikre, at din oplevelse overgår forventningerne.',
      'about.value2.title': 'Gæstefokuseret',
      'about.value2.desc': 'Vi respekterer vores gæster og deres behov, tilpasser hver oplevelse for at skabe varige minder.',
      'about.value3.title': 'Passionsdrevet',
      'about.value3.desc': 'Vores kærlighed til Det Røde Hav driver alt, hvad vi gør, fra sikkerhed til at skabe magiske øjeblikke.',
      'about.contact.title': 'Tal med vores Eventyr Ekspert',
      'about.contact.desc': 'Har du spørgsmål til vores aktiviteter? Ahmed og vores team er her for at hjælpe dig med at planlægge det perfekte Røde Hav eventyr.',
      
      // Activities
      'activities.title': 'Vores Aktiviteter',
      'activities.subtitle': 'Vælg dit perfekte Røde Hav eventyr',
      
      // Contact
      'contact.title': 'Kontakt os',
      'contact.subtitle': 'Kontakt os for dit næste eventyr',
      'contact.interestedIn': 'Interesseret i',
      'contact.contactUs': 'Kontakt os',
      'contact.formDescription': 'Udfyld formularen nedenfor og vi vender tilbage til dig inden for 24 timer.',
      'contact.thankYou': 'Tak! Vi kontakter dig snart.',
      'contact.errorMessage': 'Noget gik galt. Prøv igen.',
      'contact.fullName': 'Fulde navn',
      'contact.email': 'E-mail adresse',
      'contact.phone': 'Telefonnummer',
      'contact.preferredDate': 'Foretrukket dato',
      'contact.numberOfPeople': 'Antal personer',
      'contact.message': 'Besked / Spørgsmål',
      'contact.sendInquiry': 'Send forespørgsel',
      'contact.sending': 'Sender',
      'contact.people1': '1 Person',
      'contact.people2': '2 Personer',
      'contact.people3': '3 Personer',
      'contact.people4': '4 Personer',
      'contact.people5plus': '5+ Personer',
      'contact.phoneTitle': 'Telefon',
      'contact.phoneDesc': 'Ring til os når som helst',
      'contact.emailTitle': 'E-mail',
      'contact.emailDesc': 'Send os en besked',
      'contact.locationTitle': 'Placering',
      'contact.locationDesc': 'Besøg os i Hurghada',
      
      // Footer
      'footer.rights': 'Alle rettigheder forbeholdes.',
      'footer.description': 'Oplev eventyret i de krystalklare farvande i Det Røde Hav. Vi leverer uforglemmelige vandoplevelser i Hurghada, Egypten, med 15 års ekspertise og over 45.000 tilfredse kunder.',
      'footer.experience': 'Oplev eventyret',
      'footer.contactUs': 'Kontakt os',
      'footer.quickLinks': 'Hurtige links',
      'footer.privacy': 'Privatlivspolitik',
      'footer.terms': 'Vilkår og betingelser',
      'footer.followUs': 'Følg os:',
      'footer.madeWith': 'Lavet med ❤️ til Røde Hav eventyr',
      'footer.readyForAdventure': 'Klar til dit eventyr?',
      'footer.contactExpert': 'Kontakt vores eventyr-ekspert Ahmed Hassan og hans team for at planlægge din perfekte Røde Hav oplevelse.',
      'footer.callNow': 'Ring nu',
      'footer.sendEmail': 'Send email',
      
      // Activity
      'activity.learnMore': 'Lær mere',
      'activity.about': 'Om denne aktivitet',
      'activity.included': 'Hvad er inkluderet',
      'activity.toBring': 'Hvad man skal medbringe',
      'activity.meetingPoint': 'Mødested',
      'activity.importantInfo': 'Vigtige oplysninger',
      
      // Stats
      'stats.title': 'Vores Præstationer',
      'stats.subtitle': 'År af dedikation til at levere exceptionelle Røde Hav oplevelser',
      'stats.food': 'Forskellige typer mad tilgængelige på båden',
      'stats.experience': 'År med erfaring',
      'stats.security': 'Sikkerhedskontroller af båd og udstyr',
      'stats.clients': 'Tilfredse kunder',
      'stats.sails': 'Sejlture siden 2012',
      'stats.whyChoose': 'Hvorfor vælge Sea Waves?',
      'stats.guarantee': 'Vi garanterer',
      'stats.views': 'Smukke udsigter',
      'stats.provide': 'Vi tilbyder',
      'stats.serve': 'Vi serverer',
    },
    nl: {
      // Navigation
      'nav.home': 'Home',
      'nav.about': 'Over ons',
      'nav.activities': 'Activiteiten',
      'nav.contact': 'Contact',
      
      // Hero Section
      'hero.title': 'Sea Waves',
      'hero.subtitle': 'Rode Zee Avonturen',
      'hero.description': 'Beleef het avontuur in de kristalheldere wateren van de Rode Zee',
      'hero.button': 'Verken Activiteiten',
      
      // About Section
      'about.title': 'Over Sea Waves',
      'about.subtitle': 'Ontdek onze passie voor de Rode Zee en toewijding aan onvergetelijke ervaringen',
      'about.founder.name': 'Ahmed Hassan',
      'about.founder.title': 'Oprichter & Avontuur Expert',
      'about.founder.story1': 'Hallo! Mijn naam is Ahmed Hassan, en namens SeaWaves wil ik je welkom heten in onze wereld van Rode Zee avonturen.',
      'about.founder.story2': 'De eerste keer dat ik de kust van de Rode Zee zag was toen ik als kind van Noord-Egypte naar Hurghada reisde. De brandende zon die door het raam kwam, liet al zijn sporen na op mijn huid, maar het was dat gevoel dat dit moment zo onvergetelijk maakte.',
      'about.founder.story3': 'De zee was het mooiste uitzicht dat ik ooit had gezien. Ik kon niet stoppen met vooruit kijken, staren naar de verschillende tinten blauw en turquoise, denkend aan wat eronder lag. Het zeeleven, wezens, vissen en zoogdieren - alles wilde ik met eigen ogen ervaren. Op dat moment wist ik dat ik dicht bij de zee moest zijn.',
      'about.founder.story4': 'Jaren gingen voorbij, en ik kwam terug naar Hurghada. Met een paar vrienden net zo gepassioneerd als ik, besloten we onze liefde voor de Rode Zee te delen met mensen zoals jij. Laten zien wat de moeite waard is om te zien, respecteren van onze gasten en hun behoeften.',
      'about.founder.story5': 'Onze prioriteit was en is nog steeds de KWALITEIT van onze excursies. Elk detail van onze diensten is doordacht om je ervaring onvergetelijk te maken.',
      'about.value1.title': 'Kwaliteit eerst',
      'about.value1.desc': 'Elk detail van onze diensten is zorgvuldig gepland om ervoor te zorgen dat je ervaring de verwachtingen overtreft.',
      'about.value2.title': 'Gastgericht',
      'about.value2.desc': 'We respecteren onze gasten en hun behoeften, passen elke ervaring aan om blijvende herinneringen te creëren.',
      'about.value3.title': 'Passiegedreven',
      'about.value3.desc': 'Onze liefde voor de Rode Zee drijft alles wat we doen, van veiligheid tot het creëren van magische momenten.',
      'about.contact.title': 'Praat met onze Avontuur Expert',
      'about.contact.desc': 'Heb je vragen over onze activiteiten? Ahmed en ons team zijn er om je te helpen het perfecte Rode Zee avontuur te plannen.',
      
      // Activities
      'activities.title': 'Onze Activiteiten',
      'activities.subtitle': 'Kies je perfecte Rode Zee avontuur',
      
      // Contact
      'contact.title': 'Neem contact op',
      'contact.subtitle': 'Neem contact op voor je volgende avontuur',
      'contact.interestedIn': 'Geïnteresseerd in',
      'contact.contactUs': 'Neem contact op',
      'contact.formDescription': 'Vul het onderstaande formulier in en we nemen binnen 24 uur contact met je op.',
      'contact.thankYou': 'Bedankt! We nemen snel contact met je op.',
      'contact.errorMessage': 'Er is iets misgegaan. Probeer het opnieuw.',
      'contact.fullName': 'Volledige naam',
      'contact.email': 'E-mailadres',
      'contact.phone': 'Telefoonnummer',
      'contact.preferredDate': 'Voorkeursdatum',
      'contact.numberOfPeople': 'Aantal personen',
      'contact.message': 'Bericht / Vragen',
      'contact.sendInquiry': 'Verstuur aanvraag',
      'contact.sending': 'Verzenden',
      'contact.people1': '1 Persoon',
      'contact.people2': '2 Personen',
      'contact.people3': '3 Personen',
      'contact.people4': '4 Personen',
      'contact.people5plus': '5+ Personen',
      'contact.phoneTitle': 'Telefoon',
      'contact.phoneDesc': 'Bel ons altijd',
      'contact.emailTitle': 'E-mail',
      'contact.emailDesc': 'Stuur ons een bericht',
      'contact.locationTitle': 'Locatie',
      'contact.locationDesc': 'Bezoek ons in Hurghada',
      
      // Footer
      'footer.rights': 'Alle rechten voorbehouden.',
      'footer.description': 'Beleef het avontuur in de kristalheldere wateren van de Rode Zee. We bieden onvergetelijke waterervaringen in Hurghada, Egypte, met 15 jaar expertise en meer dan 45.000 tevreden klanten.',
      'footer.experience': 'Beleef het avontuur',
      'footer.contactUs': 'Neem contact op',
      'footer.quickLinks': 'Snelle links',
      'footer.privacy': 'Privacybeleid',
      'footer.terms': 'Algemene voorwaarden',
      'footer.followUs': 'Volg ons:',
      'footer.madeWith': 'Gemaakt met ❤️ voor Rode Zee avonturen',
      'footer.readyForAdventure': 'Klaar voor je avontuur?',
      'footer.contactExpert': 'Neem contact op met onze avontuur-expert Ahmed Hassan en zijn team om je perfecte Rode Zee ervaring te plannen.',
      'footer.callNow': 'Bel nu',
      'footer.sendEmail': 'Stuur email',
      
      // Activity
      'activity.learnMore': 'Meer informatie',
      'activity.about': 'Over deze activiteit',
      'activity.included': 'Wat is inbegrepen',
      'activity.toBring': 'Wat mee te nemen',
      'activity.meetingPoint': 'Ontmoetingspunt',
      'activity.importantInfo': 'Belangrijke informatie',
      
      // Stats
      'stats.title': 'Onze Prestaties',
      'stats.subtitle': 'Jaren van toewijding aan het leveren van uitzonderlijke Rode Zee ervaringen',
      'stats.food': 'Verschillende soorten eten beschikbaar op de boot',
      'stats.experience': 'Jaren ervaring',
      'stats.security': 'Veiligheidscontroles van boot en uitrusting',
      'stats.clients': 'Tevreden klanten',
      'stats.sails': 'Zeiltochten sinds 2012',
      'stats.whyChoose': 'Waarom Sea Waves kiezen?',
      'stats.guarantee': 'Wij garanderen',
      'stats.views': 'Prachtige uitzichten',
      'stats.provide': 'Wij bieden',
      'stats.serve': 'Wij serveren',
    },
    ru: {
      // Navigation
      'nav.home': 'Главная',
      'nav.about': 'О нас',
      'nav.activities': 'Активности',
      'nav.contact': 'Контакты',
      
      // Hero Section
      'hero.title': 'Sea Waves',
      'hero.subtitle': 'Приключения Красного моря',
      'hero.description': 'Испытайте приключения в кристально чистых водах Красного моря',
      'hero.button': 'Исследовать Активности',
      
      // About Section
      'about.title': 'О Sea Waves',
      'about.subtitle': 'Откройте нашу страсть к Красному морю и приверженность незабываемым впечатлениям',
      'about.founder.name': 'Ахмед Хасан',
      'about.founder.title': 'Основатель и Эксперт Приключений',
      'about.founder.story1': 'Привет! Меня зовут Ахмед Хасан, и от имени SeaWaves я хотел бы приветствовать вас в нашем мире приключений Красного моря.',
      'about.founder.story2': 'Впервые я увидел побережье Красного моря, когда в детстве путешествовал из Северного Египта в Хургаду. Жгучее солнце, проникающее через окно, уже оставляло следы на моей коже, но именно это чувство сделало этот момент таким незабываемым.',
      'about.founder.story3': 'Море было самым красивым зрелищем, которое я когда-либо видел. Я не мог перестать смотреть вперед, вглядываясь в различные оттенки синего и бирюзового цветов, думая о том, что лежит внизу. Морская жизнь, существа, рыбы и млекопитающие - все это я хотел испытать собственными глазами. В тот момент я знал, что должен быть близко к морю.',
      'about.founder.story4': 'Прошли годы, и я вернулся в Хургаду. С несколькими друзьями, такими же страстными, как и я, мы решили поделиться нашей любовью к Красному морю с такими людьми, как вы. Показывая то, что стоит увидеть, уважая наших гостей и их потребности.',
      'about.founder.story5': 'Нашим приоритетом было и остается КАЧЕСТВО наших экскурсий. Каждая деталь наших услуг продумана, чтобы сделать ваш опыт незабываемым.',
      'about.value1.title': 'Качество прежде всего',
      'about.value1.desc': 'Каждая деталь наших услуг тщательно спланирована, чтобы обеспечить, что ваш опыт превзойдет ожидания.',
      'about.value2.title': 'Ориентированы на гостей',
      'about.value2.desc': 'Мы уважаем наших гостей и их потребности, адаптируя каждый опыт для создания долговременных воспоминаний.',
      'about.value3.title': 'Движимы страстью',
      'about.value3.desc': 'Наша любовь к Красному морю движет всем, что мы делаем, от безопасности до создания магических моментов.',
      'about.contact.title': 'Поговорите с нашим Экспертом Приключений',
      'about.contact.desc': 'Есть вопросы о наших активностях? Ахмед и наша команда здесь, чтобы помочь вам спланировать идеальное приключение Красного моря.',
      
      // Activities
      'activities.title': 'Наши Активности',
      'activities.subtitle': 'Выберите свое идеальное приключение Красного моря',
      
      // Contact
      'contact.title': 'Свяжитесь с нами',
      'contact.subtitle': 'Свяжитесь с нами для вашего следующего приключения',
      'contact.interestedIn': 'Заинтересованы в',
      'contact.contactUs': 'Свяжитесь с нами',
      'contact.formDescription': 'Заполните форму ниже, и мы свяжемся с вами в течение 24 часов.',
      'contact.thankYou': 'Спасибо! Мы скоро свяжемся с вами.',
      'contact.errorMessage': 'Что-то пошло не так. Попробуйте еще раз.',
      'contact.fullName': 'Полное имя',
      'contact.email': 'Адрес электронной почты',
      'contact.phone': 'Номер телефона',
      'contact.preferredDate': 'Предпочтительная дата',
      'contact.numberOfPeople': 'Количество людей',
      'contact.message': 'Сообщение / Вопросы',
      'contact.sendInquiry': 'Отправить запрос',
      'contact.sending': 'Отправка',
      'contact.people1': '1 Человек',
      'contact.people2': '2 Человека',
      'contact.people3': '3 Человека',
      'contact.people4': '4 Человека',
      'contact.people5plus': '5+ Человек',
      'contact.phoneTitle': 'Телефон',
      'contact.phoneDesc': 'Звоните нам в любое время',
      'contact.emailTitle': 'Электронная почта',
      'contact.emailDesc': 'Отправьте нам сообщение',
      'contact.locationTitle': 'Местоположение',
      'contact.locationDesc': 'Посетите нас в Хургаде',
      
      // Footer
      'footer.rights': 'Все права защищены.',
      'footer.description': 'Испытайте приключения в кристально чистых водах Красного моря. Мы предоставляем незабываемые водные впечатления в Хургаде, Египет, с 15-летним опытом и более чем 45 000 довольных клиентов.',
      'footer.experience': 'Испытайте приключения',
      'footer.contactUs': 'Свяжитесь с нами',
      'footer.quickLinks': 'Быстрые ссылки',
      'footer.privacy': 'Политика конфиденциальности',
      'footer.terms': 'Условия и положения',
      'footer.followUs': 'Следите за нами:',
      'footer.madeWith': 'Сделано с ❤️ для приключений Красного моря',
      'footer.readyForAdventure': 'Готовы к приключению?',
      'footer.contactExpert': 'Свяжитесь с нашим экспертом по приключениям Ахмедом Хасаном и его командой, чтобы спланировать ваше идеальное приключение Красного моря.',
      'footer.callNow': 'Позвонить сейчас',
      'footer.sendEmail': 'Отправить email',
      
      // Activity
      'activity.learnMore': 'Узнать больше',
      'activity.about': 'Об этой активности',
      'activity.included': 'Что включено',
      'activity.toBring': 'Что взять с собой',
      'activity.meetingPoint': 'Место встречи',
      'activity.importantInfo': 'Важная информация',
      
      // Stats
      'stats.title': 'Наши Достижения',
      'stats.subtitle': 'Годы преданности обеспечению исключительных впечатлений Красного моря',
      'stats.food': 'Различные виды еды, доступные на лодке',
      'stats.experience': 'Лет опыта',
      'stats.security': 'Проверок безопасности лодки и оборудования',
      'stats.clients': 'Довольных клиентов',
      'stats.sails': 'Плаваний с 2012',
      'stats.whyChoose': 'Почему выбрать Sea Waves?',
      'stats.guarantee': 'Мы гарантируем',
      'stats.views': 'Красивые виды',
      'stats.provide': 'Мы предоставляем',
      'stats.serve': 'Мы подаем',
    }
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
