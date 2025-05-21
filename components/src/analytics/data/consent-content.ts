import {Consent, Language} from "../../types";

export const consent: Consent = {
    header: {
        [Language.PL]: "Szanujemy Twoją prywatność",
        [Language.ENG]: "We Value Your Privacy"
    },
    text1: {
        [Language.PL]: "Ta strona internetowa używa plików cookie oraz podobnych technologii w celu poprawy " +
            "Twojego doświadczenia podczas przeglądania, analizy ruchu oraz zrozumienia, jak " +
            "wchodzisz w interakcję z naszymi treściami. Akceptując, zgadzasz się na przetwarzanie " +
            "swoich danych w celu:",
        [Language.ENG]: "This website uses cookies and similar technologies to enhance your browsing " +
            "experience, analyze traffic, and understand how you interact with our content. " +
            "By accepting, you agree to the processing of your data to:"
    },
    text2: {
        [Language.PL]: "Możemy również używać narzędzi stron trzecich (np. platform analitycznych) do " +
            "zbierania anonimowych danych o Twoich interakcjach na tej stronie.\n" +
            "\n" +
            "Możesz w każdej chwili wycofać swoją zgodę, zmieniając ustawienia plików cookie.",
        [Language.ENG]: "We may also use third-party tools (e.g., analytics platforms) to collect " +
            "anonymized data\n" +
            "                            about your interactions on this website.\n" +
            "\n" +
            "                            You can withdraw your consent at any time by changing " +
            "your cookie settings."
    },
    listElements: [
        {
            [Language.PL]: "Śledzenia Twojego zachowania na stronach (np. kliknięcia, " +
                "przewijanie, odwiedzane treści)",
            [Language.ENG]: "Track your behavior across pages (e.g. clicks, scrolls, visited content)",
        },
        {
            [Language.PL]: "Monitorowania aktywności sesji i wzorców nawigacji",
            [Language.ENG]: "Monitor session activity and navigation patterns",
        },
        {
            [Language.PL]: "Wyposażenia statków, okrętów, stacji brzegowych, statków powietrznych, śmigłowców w urządzenia radiowe i nawigacyjne.",
            [Language.ENG]: "Equipping ships, vessels, coastal stations, aircraft, and helicopters with radio and navigation devices.",
        },
        {
            [Language.PL]: "Analizowania użycia w celu poprawy funkcjonalności i personalizacji treści",
            [Language.ENG]: "Analyze usage to improve functionality and personalize content",
        },
    ],
    buttons: {
        accept: {
            [Language.PL]: "Akceptuj",
            [Language.ENG]: "Accept"
        },
        reject: {
            [Language.PL]: "Odrzucenie",
            [Language.ENG]: "Reject"
        },
    }
}