document.addEventListener('DOMContentLoaded', () => {

    /* ==================== منطق اللغات المتعددة ==================== */
    const languageSwitcher = document.querySelectorAll('.lang__link');
    const langData = {
        'en': {
            'nav_home': 'Home', 'nav_about': 'About', 'nav_services': 'Services', 'nav_booking': 'Booking', 'nav_gallery': 'Gallery', 'nav_contact': 'Contact',
            'hero_title': 'L’Espoir Spa Marrakech', 'hero_subtitle': 'Relaxation, Wellness & Beauty', 'hero_button': 'Book an Appointment',
            'about_title': 'Your Sanctuary of Serenity', 'about_desc': "At L'Espoir Spa, we believe in the power of holistic well-being. Our philosophy is rooted in blending ancient Moroccan rituals with modern therapeutic techniques. We are dedicated to providing a tranquil escape where our professional team uses only the finest natural ingredients to rejuvenate your body, mind, and spirit.",
            'services_title': 'Our Treatments',
            'service1_name': 'Relaxing Massages', 'service1_desc': 'From deep tissue to aromatherapy, our massages are designed to release tension and restore balance.', 'service1_price': 'Starting from 400 MAD',
            'service2_name': 'Traditional Hammam', 'service2_desc': 'Experience a purifying Moroccan ritual with black soap exfoliation and a ghassoul clay mask.', 'service2_price': 'Starting from 350 MAD',
            'service3_name': 'Rejuvenating Facials', 'service3_desc': 'Customized facials using natural products to leave your skin glowing and refreshed.', 'service3_price': 'Starting from 450 MAD',
            'booking_title': 'Book Your Escape',
            'form_name_placeholder': 'Your Name', 'form_contact_placeholder': 'Email or Phone', 'form_service_placeholder': 'Choose a Service', 'form_service_massage': 'Massage', 'form_service_hammam': 'Hammam', 'form_service_facial': 'Facial', 'form_service_package': 'Package', 'form_button': 'Send Request',
            'booking_contact_desc': 'For instant booking or inquiries, feel free to call us or send a message on WhatsApp.', 'booking_whatsapp_btn': 'Book on WhatsApp', 'booking_call_btn': 'Call +212 6 61 26 69 60',
            'gallery_title': 'Our Ambiance', 'contact_title': 'Visit Us'
        },
        'fr': {
            'nav_home': 'Accueil', 'nav_about': 'À Propos', 'nav_services': 'Services', 'nav_booking': 'Réservation', 'nav_gallery': 'Galerie', 'nav_contact': 'Contact',
            'hero_title': 'L’Espoir Spa Marrakech', 'hero_subtitle': 'Détente, Bien-être & Beauté', 'hero_button': 'Prendre Rendez-vous',
            'about_title': 'Votre Sanctuaire de Sérénité', 'about_desc': "À L'Espoir Spa, nous croyons au pouvoir du bien-être holistique. Notre philosophie consiste à marier les rituels marocains ancestraux aux techniques thérapeutiques modernes. Nous offrons une évasion tranquille où notre équipe professionnelle utilise les meilleurs ingrédients naturels pour rajeunir votre corps, votre esprit et votre âme.",
            'services_title': 'Nos Soins',
            'service1_name': 'Massages Relaxants', 'service1_desc': 'Du massage des tissus profonds à l\'aromathérapie, nos massages libèrent les tensions et restaurent l\'équilibre.', 'service1_price': 'À partir de 400 MAD',
            'service2_name': 'Hammam Traditionnel', 'service2_desc': 'Vivez un rituel marocain purifiant avec exfoliation au savon noir et masque au ghassoul.', 'service2_price': 'À partir de 350 MAD',
            'service3_name': 'Soins du Visage Rajeunissants', 'service3_desc': 'Soins du visage personnalisés avec des produits naturels pour une peau éclatante et fraîche.', 'service3_price': 'À partir de 450 MAD',
            'booking_title': 'Réservez Votre Évasion',
            'form_name_placeholder': 'Votre Nom', 'form_contact_placeholder': 'Email ou Téléphone', 'form_service_placeholder': 'Choisissez un Service', 'form_service_massage': 'Massage', 'form_service_hammam': 'Hammam', 'form_service_facial': 'Soin Visage', 'form_service_package': 'Forfait', 'form_button': 'Envoyer la Demande',
            'booking_contact_desc': 'Pour une réservation instantanée ou des questions, appelez-nous ou envoyez un message sur WhatsApp.', 'booking_whatsapp_btn': 'Réserver sur WhatsApp', 'booking_call_btn': 'Appeler +212 6 61 26 69 60',
            'gallery_title': 'Notre Ambiance', 'contact_title': 'Nous Visiter'
        },
        'ar': {
            'nav_home': 'الرئيسية', 'nav_about': 'من نحن', 'nav_services': 'خدماتنا', 'nav_booking': 'الحجز', 'nav_gallery': 'المعرض', 'nav_contact': 'اتصل بنا',
            'hero_title': 'سبا الأمل مراكش', 'hero_subtitle': 'استرخاء، صحة وجمال', 'hero_button': 'احجز موعدك',
            'about_title': 'ملاذك للسكينة والهدوء', 'about_desc': "في سبا الأمل، نؤمن بقوة العافية الشاملة. تقوم فلسفتنا على مزج الطقوس المغربية العريقة مع التقنيات العلاجية الحديثة. نحن ملتزمون بتوفير ملاذ هادئ حيث يستخدم فريقنا المحترف أجود المكونات الطبيعية لتجديد شباب الجسم والعقل والروح.",
            'services_title': 'علاجاتنا',
            'service1_name': 'مساج للاسترخاء', 'service1_desc': 'من المساج العميق إلى العلاج العطري، صُممت جلساتنا لتخفيف التوتر واستعادة التوازن.', 'service1_price': 'ابتداءً من 400 درهم',
            'service2_name': 'الحمام التقليدي', 'service2_desc': 'جرّب طقوسًا مغربية مُنقيّة مع تقشير بالصابون الأسود وقناع طين الغاسول.', 'service2_price': 'ابتداءً من 350 درهم',
            'service3_name': 'عناية بالبشرة لتجديد الشباب', 'service3_desc': 'عناية مخصصة بالوجه باستخدام منتجات طبيعية لتترك بشرتك متوهجة ومنتعشة.', 'service3_price': 'ابتداءً من 450 درهم',
            'booking_title': 'احجز ملاذك الخاص',
            'form_name_placeholder': 'الاسم الكامل', 'form_contact_placeholder': 'البريد الإلكتروني أو الهاتف', 'form_service_placeholder': 'اختر خدمة', 'form_service_massage': 'مساج', 'form_service_hammam': 'حمام', 'form_service_facial': 'عناية بالبشرة', 'form_service_package': 'باقة', 'form_button': 'إرسال الطلب',
            'booking_contact_desc': 'للحجز الفوري أو الاستفسارات، لا تتردد في الاتصال بنا أو إرسال رسالة عبر الواتساب.', 'booking_whatsapp_btn': 'احجز عبر واتساب', 'booking_call_btn': 'اتصل +212 6 61 26 69 60',
            'gallery_title': 'أجواؤنا', 'contact_title': 'زورونا'
        }
    };

    const setLanguage = (lang) => {
        const elements = document.querySelectorAll('[data-key]');
        const placeholderElements = document.querySelectorAll('[data-key-placeholder]');
        elements.forEach(element => {
            const key = element.getAttribute('data-key');
            if (langData[lang][key]) {
                element.textContent = langData[lang][key];
            }
        });
        placeholderElements.forEach(element => {
            const key = element.getAttribute('data-key-placeholder');
            if (langData[lang][key]) {
                element.placeholder = langData[lang][key];
            }
        });
        const serviceSelect = document.getElementById('service-select');
        if (serviceSelect) {
            serviceSelect.querySelectorAll('option').forEach(option => {
                const key = option.getAttribute('data-key');
                if (key && langData[lang][key]) {
                    option.textContent = langData[lang][key];
                }
            });
        }
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        languageSwitcher.forEach(link => {
            link.classList.toggle('active', link.getAttribute('data-lang') === lang);
        });
        localStorage.setItem('preferredLanguage', lang);
    };

    languageSwitcher.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = link.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    setLanguage(savedLang);

    /* ==================== إظهار وإخفاء قائمة الجوال ==================== */
    const navMenu = document.getElementById('nav-menu'),
          navToggle = document.getElementById('nav-toggle'),
          navClose = document.getElementById('nav-close');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }

    const navLinks = document.querySelectorAll('.nav__link');
    function linkAction() {
        navMenu.classList.remove('show-menu');
    }
    navLinks.forEach(n => n.addEventListener('click', linkAction));

    /* ==================== تغيير خلفية الشريط العلوي عند التمرير ==================== */
    function scrollHeader() {
        const header = document.getElementById('header');
        if (window.scrollY >= 50) {
            header.classList.add('scroll-header');
        } else {
            header.classList.remove('scroll-header');
        }
    }
    window.addEventListener('scroll', scrollHeader);

    /* ==================== الرابط النشط عند التمرير ==================== */
    const sections = document.querySelectorAll('section[id]');
    function scrollActive(){
        const scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 58;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(`.nav__menu a[href*="${sectionId}"]`);
            if(navLink) {
                if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                    navLink.classList.add('active-link');
                } else {
                    navLink.classList.remove('active-link');
                }
            }
        });
    }
    window.addEventListener('scroll', scrollActive);

    /* ==================== تأثيرات الظهور عند التمرير ==================== */
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 2500,
            delay: 300,
        });

        sr.reveal(`.home__data, .section__title, .booking__contact`);
        sr.reveal(`.about__data, .contact__details`, {origin: 'left'});
        sr.reveal(`.about__image, .contact__map`, {origin: 'right'});
        sr.reveal(`.service__card, .gallery__item`, {interval: 100});
        sr.reveal(`.booking__form`, {origin: 'bottom'});
    }
});
