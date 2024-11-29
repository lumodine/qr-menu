export type Messages = {
    [culture: string]: Message;
};

export type Message = {
    back_to_menu: string;
    page_not_found_title: string;
    page_not_found_description: string;
    page_not_found_cta_text: string;
    all_rights_reserved: string;
};

const messages: Messages = {
    "tr-TR": {
        back_to_menu: "Ana sayfaya dön",
        page_not_found_title: "Sayfa Bulunamadı!",
        page_not_found_description: "Üzgünüz, gitmeye çalıştığınız sayfayı bulamadık.",
        page_not_found_cta_text: "Ana sayfaya dön",
        all_rights_reserved: "Tüm hakları saklıdır",
    },
    "en-GB": {
        back_to_menu: "Back to homepage",
        page_not_found_title: "Page Not Found!",
        page_not_found_description: "Sorry, we couldn't find the page you are trying to navigate to.",
        page_not_found_cta_text: "Back to homepage",
        all_rights_reserved: "All rights reserved",
    },
    "de-DE": {
        back_to_menu: "Zurück zur Startseite",
        page_not_found_title: "Seite nicht gefunden!",
        page_not_found_description: "Leider konnten wir die Seite, zu der Sie navigieren möchten, nicht finden.",
        page_not_found_cta_text: "Zurück zur Startseite",
        all_rights_reserved: "Alle Rechte vorbehalten",
    },
    "fr-FR": {
        back_to_menu: "Retour à la page d'accueil",
        page_not_found_title: "Page non trouvée !",
        page_not_found_description: "Désolé, nous n'avons pas trouvé la page vers laquelle vous essayez de naviguer.",
        page_not_found_cta_text: "Retour à la page d'accueil",
        all_rights_reserved: "Tous droits réservés",
    },
    "ar-AR": {
        back_to_menu: "العودة إلى الصفحة الرئيسية",
        page_not_found_title: "الصفحة غير موجودة!",
        page_not_found_description: "عذرًا، لم نتمكن من العثور على الصفحة التي تحاول الانتقال إليها.",
        page_not_found_cta_text: "العودة إلى الصفحة الرئيسية",
        all_rights_reserved: "جميع الحقوق محفوظة",
    },
};

export default messages;
