import DesktopIcon from '@/components/ui/DesktopIcon'
import LaptopIcon from '@/components/ui/LaptopIcon'
import TvIcon from '@/components/ui/TvIcon'
import ArrowIcon from '@/components/ui/ArrowIcon'
import AudioIcon from '@/components/ui/AudioIcon'
import VideoIcon from '@/components/ui/VideoIcon'
import MapPinIcon from '@/components/ui/MapPinIcon'
import PhoneIcon from '@/components/ui/PhoneIcon'
import MailIcon from '@/components/ui/MailIcon'
import ClickIcon from '@/components/ui/ClickIcon'


export const navItems = [
    {
        id:1,
        name: 'Начало',
        url: '/'
    },
    {
        id:2,
        name: 'Услуги',
        url: '/'
    },
    {
        id:3,
        name: 'Контакти',
        url: '/contacts'
    },
    {
        id:4,
        name: 'Сервиз',
        url: '/'
    }
]

export const navActionData = {
    btnPrimary: {
        text: '0897818149',
        url: '/'
    },
    btnSecondary: {
        text:'Направи запитване',
        url: 'contacts#contact-cards'
    },
    icon: PhoneIcon
}

export const heroSectionData = {
    badgeText: "Памтекс 94 ООД София",
    heroHeading: {
        txt1:"Ремонт и Диагностика на извънгаранционна",
        txt2:"Аудио и Видео техника."
    },
    heroDescription: "Сервиз Памтекс 94 ООД извършва ремонт и диагностика на Телевизионна, Аудио и Видео техника в София.",
    heroCtaButtons: {
        btnPrimary: {
            heroBtn1: 'Изпрати запитване',
            url: 'contacts#contact-cards',
            icon:ClickIcon
        },
        btnSecondary: {
            heroBtn2: '0897818149',
            url: 'contacts#contact-cards',
            icon:PhoneIcon
        }
    },
    heroLogoCard:{
        heading:"Памтекс 94 ООД",
        text: "Ремонт на Хардуерна техника"
    },
    heroServiceCards: [
        {   
            id: 1,
            status: "",
            service: "Аудио и Видео Техника",
            serviceInfo: "Диагностика и Ремонт"
        },
        {
            id:2,
            status: "",
            service: "Телевизионна Техника",
            serviceInfo: "Диагностика и Ремонт"
        }

    ]
     ,
    heroLongCard: {
        status:"",
        service: "Компютри и компютърни периферии",
        serviceInfo: "Диагностика и ремонт"
    }
}

export const heroStatistics = [
    {
        id:1,
        text: 'Години опит',
        stat:'30+'
    },
    {
        id:2,
        text: 'Обслужени клиенти',
        stat: '5 000+'
    },
    {
        id: 3,
        text: 'Извършени сервизни услуги',
        stat:'10 000+'
    },
    {
        id:4,
        text:'Доволни клиенти',
        stat: '98%'
    }
]

export const sectionHeadings = {

    serviceSection: {
        label: 'Услуги',
        heading: 'Основни услуги които предлагаме',
        description: 'Разгледайте услугите който извършваме'
    }

}

export const serviceCardData = [
    {
        id:1,
        badgeIcon: LaptopIcon,
        arrowIcon: ArrowIcon,
        heading: 'Ремонт на лаптопи',
        text: 'Хардуерни проблеми, прегряване, дисплеи, профилактика',
        detailsText: 'Научете повече',
        url: '/service/laptops'
    },
    {
        id:2,
        badgeIcon: DesktopIcon,
        arrowIcon: ArrowIcon,
        heading: 'Ремонт на монитори',
        text: 'Хардуерни проблеми, прегряване, дисплеи, профилактика',
        detailsText: 'Научете повече',
        url: '/service/monitors'
    },
    {
        id:3,
        badgeIcon: TvIcon,
        arrowIcon: ArrowIcon,
        heading: 'Ремонт на телевизори',
        text: 'Ремонт на LED / LCD телевизори',
        detailsText: 'Научете повече',
        url: '/service/television'
    },
    {
        id:4,
        badgeIcon: AudioIcon,
        arrowIcon: ArrowIcon,
        heading: 'Ремонт на Аудио Техника',
        text: 'CD плеъри, класически усилватели, тонколони, Автомобилни говорители и субуфери',
        detailsText: 'Научете повече',
        url: '/service/audio'
    },
    {
        id:5,
        badgeIcon: VideoIcon,
        arrowIcon: ArrowIcon,
        heading: 'Ремонт на Видео Техника',
        text: 'DVD плейъри',
        detailsText: 'Научете повече',
        url: '/service/video'
    }
]

export const laptopIntroData = {
    navLinks: {
        homeUrl: '/',
        serviceUrl: '/service',
        serviceTypeUrl: '/service/laptops'

    },
    navText: {
        home: 'Начало',
        service: 'Услуги',
        serviceType: 'Ремонт на лаптоп'
    },
    text: {
        badge: 'Лаптопи',
        heading: 'Ремонт на лаптопи',
        description: 'Памтекс 94 ООД извършва ремонт и диагностика на лаптопи за частни клиенти и малки бизнеси в София. Работим върху хардуерни проблеми - батерия, охлаждане, дисплей, клавиатура. Преди извършване на ремонт, правим диагностика и информираме в детайли вариантите за ремонт.'
    },
    btnPrimary: {
        url: "/contacts#contact-cards",
        text: 'Направи запитване'
    },
    btnSecondary: {
        url: "/",
        text: '0897818149'
    }
}

export const laptopServiceDesc = {
    heading: {
        label: 'Какво представлява услугата',
        headingText: 'Кога да изберете тази услуга'
    },
    description: {
        text: 'Бавен или прегряващ лаптоп, проблеми с батерията, повреден екран или клавиатура спират работата и забавят ежедневните задачи. Качествената диагностика спестява разходи и често връща устройството в нормално състояние.'
    }
}

export const laptopServiceDetailsL = {
    heading: "Какво включва услугата",
    listItems: [
        {
            id:1,
            text: 'Диагностика на хардуерни проблеми'
        },
        {
            id:2,
            text: 'Решаване на бавна работа и забивания'
        },
        {
            id:3,
            text: 'Почистване от прах и подмяна на термопаста'
        },
        {
            id:4,
            text: 'Подмяна на батерия и зарядно'
        },
        {
            id:5,
            text: 'Проверка на твърд диск и SSD'
        },
    ]
}

export const laptopServiceDetailsR = {
    heading: "За кого е подходящо",
    listItems: [
        {
            id:1,
            text: 'Частни клиенти с домашен или работен лаптоп'
        },
        {
            id:2,
            text: 'Офиси с фирмени лаптопи'
        },
        {
            id:3,
            text: 'Фрийлансъри и хора, работещи от вкъщи'
        },
        {
            id:4,
            text: 'Клиенти с по-стари лаптопи, нуждаещи се от ускорение'
        }
    ]
}

export const laptopServiceFaqHeading = {
    label: "Въпроси",
    heading: "Често задавани въпроси"
}

export const laptopFaqList = [
    {
        id:1,
        question: 'Колко струва диагностиката?',
        answer: 'Цената на диагностиката се уточнява предварително. Преди ремонт винаги ще получите ясна оферта.'
    },
    {
        id:2,
        question: 'Колко време отнема ремонтът?',
        answer: 'Зависи от проблема. Простите задачи се решават в рамките на деня, по-сложните могат да отнемат няколко дни заради резервни части.'
    },
    {
        id:3,
        question: 'Запазват ли се данните при преинсталация?',
        answer: 'Преди да започнем правим резервно копие на важните файлове, ако състоянието на устройството позволява.'
    },
    {
        id:4,
        question: 'Може ли да ускорите стар лаптоп?',
        answer: 'Често е възможно — със смяна на твърд диск със SSD, добавяне на памет и оптимизация на системата.'
    },
    {
        id:5,
        question: 'Имате ли гаранция на извършения ремонт?',
        answer: 'Да, на извършената работа и подменените части се дава гаранция, която уточняваме при предаването.'
    }
]

export const tvIntroData = {
    navLinks: {
        homeUrl: '/',
        serviceUrl: '/service',
        serviceTypeUrl: '/service/television'

    },
    navText: {
        home: 'Начало',
        service: 'Услуги',
        serviceType: 'Ремонт на телевизори'
    },
    text: {
        badge: 'Телевизори',
        heading: 'Ремонт на телевизори',
        description: 'Памтекс 94 ООД извършва диагностика и ремонт на телевизори за частни клиенти и малки бизнеси в София. Работим върху проблеми с картина, звук, връзка с интернет, инсталиране на приложения и свързване с външни устройства като декодери, плейъри и звукови системи.'
    },
    btnPrimary: {
        url: "/contacts#contact-cards",
        text: 'Направи запитване'
    },
    btnSecondary: {
        url: "/",
        text: '0897818149'
    }
}

export const tvServiceDesc = {
    heading: {
        label: 'Какво представлява услугата',
        headingText: 'Кога да изберете тази услуга'
    },
    description: {
        text: 'Телевизор без картина, без звук или с проблемен Smart TV прави устройството почти безполезно. В много случаи проблемът може да се реши с настройка, актуализация или подмяна на конкретен елемент.'
    }
}

export const tvServiceDetailsL = {
    heading: "Какво включва услугата",
    listItems: [
        {
            id:1,
            text: 'Диагностика на хардуерни и софтуерни проблеми'
        },
        {
            id:2,
            text: 'Проблеми с картина и звук'
        },
        {
            id:3,
            text: 'Помощ с интернет връзка и приложения на Smart TV'
        },
        {
            id:4,
            text: 'Настройка на канали и източници'
        },
        {
            id:5,
            text: 'Свързване с декодери, плейъри и звукови системи'
        },
    ]
}

export const tvServiceDetailsR = {
    heading: "За кого е подходящо",
    listItems: [
        {
            id:1,
            text: 'Частни клиенти у дома'
        },
        {
            id:2,
            text: 'Заведения с публични телевизори'
        },
        {
            id:3,
            text: 'Магазини и офиси с дисплеи и информационни екрани'
        },
        {
            id:4,
            text: 'Хора, които искат помощ при настройка на нов телевизор'
        }
    ]
}

export const tvServiceFaqHeading = {
    label: "Въпроси",
    heading: "Често задавани въпроси"
}

export const tvFaqList = [
    {
        id:1,
        question: 'Може ли да дойдете на адрес за телевизор?',
        answer: 'За определени случаи — да, особено когато телевизорът е стенен. Уточняваме предварително какво е възможно.'
    },
    {
        id:2,
        question: 'Какво правите, когато ремонтът е твърде скъп?',
        answer: 'Казваме ви ясно и съветваме подходящ нов модел според бюджета и нуждите.'
    },
    {
        id:3,
        question: 'Помагате ли при настройка на Smart TV?',
        answer: 'Да, настройваме интернет, приложения, акаунти и канали.'
    },
    {
        id:4,
        question: 'Свързвате ли външни устройства към телевизора?',
        answer: 'Да, свързваме декодери, плейъри, конзоли и звукови системи.'
    },
    {
        id:5,
        question: 'Колко време отнема диагностиката?',
        answer: 'Обикновено между час и два, в зависимост от проблема.'
    }
]

export const contactsIntroData = {
    text: {
        badge: 'Контакти',
        heading: 'Свържете се с Памтекс 94 ООД',
        description: 'Опишете накратко техническият проблем . Ще се свържем с вас и ще предложим следваща стъпка'
    },
    btnPrimary: {
        url: "#contact-cards",
        text: 'Направи запитване'
    },
    btnSecondary: {
        url: "/",
        text: '0897818149'
    }
}


export const footerData = {
    aboutText: "Телевизионен Сервиз Памтекс 94 ЕООД - Ремонт и Диагностика на ТВ, Аудио и Видео системи.",
    contactHeading: "Контакти",
    contactList: [
        {
            id:1,
            icon: MapPinIcon,
            text: "гр.София пл. Преображение, кв. Захарна фабрика"
        },
        {
            id:2,
            icon: PhoneIcon,
            text: "0897818149"
        },
        {
            id:3,
            icon: MailIcon,
            text: "pamteks94@gmail.com"
        },

    ]
}



export const contactCards = {

    contactCardsData: [
        {
            id:1,
            label: 'Телефон',
            text: '0897818149',
            icon: PhoneIcon
        },
        {
            id:2,
            label: 'Имейл',
            text: 'pamteks94@gmail.com',
            icon: MailIcon
        },
        {
            id:3,
            label: 'Адрес',
            text: 'гр.София пл. Преображение, кв. Захарна фабрика',
            icon: MapPinIcon
        }
    ]
}

export const contactForm = {

    contactFormData: {
        heading: 'Изпратете запитване',
        paragraph: 'Попълнете формата и ще се свържем с вас в кратък срок',
        btnPrimary: 'Изпрати запитване'
    }
}

export const quickContact = {
    
    headingPrimary: 'Работно Време',
    paragraph: 'Пoнеделник - Петък 09:00 - 18:00',
    headingSecondary: 'Контакти',
    listItems: [
        {
            id:1,
            icon: MapPinIcon,
            text: 'гр.София пл. Преображение, кв. Захарна фабрика'
        },
        {
            id:2,
            icon: PhoneIcon,
            text: '0897818149'
        },
        {
            id:3,
            icon: MailIcon,
            text: 'pamteks94@gmail.com'
        }
    ]

}

export const formInputs = {

    nameInput: {
        label: 'Име *',
        placeholder: 'Въведете име',
        name: 'name',
        type: 'text'
    },
    emailInput: {
        label: 'Имейл *',
        placeholder: 'Въведете имейл',
        name: 'email',
        type: 'text'
    },
    phoneInput: {
        label: 'Телефон *',
        placeholder: 'Въведете телефонен номер',
        name: 'phone',
        type: 'text'
    },
    serviceInput: {
        label: 'Услуга *',
        value: [
                    {
                        id:1,
                        option:'Изберете тип услуга'
                    },
                    {
                        id:2,
                        option:'Ремонт'
                    },
                    {
                        id:3,
                        option:'Диагностика'
                    }
                ],
        name: 'service',
    },
    messageInput: {
        label: 'Съобщение *',
        placeholder: 'Въведете съобщение',
        name: 'message',
        rows: 5
    }


}

export const monitorData = {
    navLinks:{
        homeUrl: '/',
        serviceUrl: '/service',
        serviceTypeUrl: '/service/monitors'
    },
    navText: {
        home: 'Начало',
        service: 'Услуги',
        serviceType: 'Монитори'
    },
    text: {
        badge: 'Монитори',
        heading: 'Ремонт на монитори',
        description: 'Памтекс 94 ООД извършва ремонт и диагностика на монитори за частни клиенти и малки бизнеси в София. Работим върху хадруерни проблеми - захранване, екран, подсветка, прегряване. Преди извършване на ремонт, правим диагностика и информираме в детайли вариантите за ремонт'
    },
    btnPrimary: {
        url: '/contacts#contact-form',
        text: 'Направи запитване'
    },
    btnSecondary: {
        url: '/',
        text: '0897818149'
    }
}

export const monitorDescData = {
    heading: {
        label: 'Какво представлява услугата',
        headingText: 'Кога да изберете тази услуга'
    },
    description: {
        text: 'Екранът е черен, но компютърът работи, много тъмна картина, мониторът изключва сам, бавно включване, трептене или премигване на картина, спират работата и забавят ежедневните задачи. Качествената диагностика спестява разходи и често връща устройството в нормално състояние.'
    }
}

export const serviceDetailsData = {
    serviceDetailsL: {
        heading: 'Какво включва услугата',
        listItems: [
            {
                id:1,
                text:'Първоначална диагностика'
            },
            {
                id:2,
                text:'Ремонт на електрониката'
            },
            {
                id:3,
                text:'Ремонт на осветлението'
            },
            {
                id:4,
                text:'Профилактика и почистване'
            },
            {
                id:5,
                text:'Финални тестове и калибриране'
            }
        ]
    },
    serviceDetailsR: {
        heading: 'За кого е подходящо',
        listItems: [
            {
                id:1,
                text: 'Частни клиенти с домашен монитор или работен монитор'
            },
            {
                id:2,
                text: 'Офиси с фирмени монитори'
            },
            {
                id:3,
                text: 'Клиенти с по-стари монитори нуждаещи се от профилактика'
            }
        ]
    }
}

export const serviceDetailsFaq = {
    label: 'Въпроси',
    heading: 'Често задавани въпроси',
    serviceFaqList: [
        {
            id:1,
            question: 'Колко ще струва ремонтът и заслужава ли си',
            answer: 'Цената на ремонта се определя след като се направи диагностика на проблема. Информираме Ви за точната цена веднага след диагностиката'
        },
        {
            id:2,
            question: 'Колко време отнема ремонтът?',
            answer: 'Стандартният ремонт (захранване или букси) отнема между 1 и 3 работни дни. Ако се налага подмяна на специфични LED ленти за подсветка или поръчка на оригинални части, които нямаме на склад, срокът може да се удължи до 5-7 работни дни.'
        },
        {
            id:3,
            question: 'Има картина, но е много тъмна – какво му има?',
            answer: 'Това е класически симптом за изгоряла подсветка (LED ленти или инвертор). Екранът работи и матрицата е здрава, но няма какво да я освети отзад. Проблемът е напълно разрешим и мониторът ще работи като нов след смяната им.'
        }
    ]
}