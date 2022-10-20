export const services = [
    {
        title: 'Дизайн интерьера',
        text: 'Проектируем эксклюзивный дизайн интерьера с учетом ваших пожеланий и наших задач.',
        img: './assets/images/services1.png',
    },
    {
        title: 'Отделочные работы',
        text: 'Осуществляем все отделочные работы «Под ключ» — от идеи до воплощения.',
        img: './assets/images/services2.png',
    },
    {
        title: 'Авторский надзор',
        text: 'Контролируем реализацию своих проектов от создания до воплощения в жизнь.',
        img: './assets/images/services3.png',
    },
    {
        title: 'Декорирование интерьера',
        text: 'Создаем единое гармоничное пространство с органично расставленными акцентами.',
        img: './assets/images/services4.png',
    },
    {
        title: 'Согласование перепланировки',
        text: 'Берем на себя все вопросы по  взаимодействию с госорганами и получению разрешения.',
        img: './assets/images/services5.png',
    },
    {
        title: 'Архитектурное проектирование',
        text: 'Спроектируем Ваш дом лично для Вас с учетом эргономики и  красоты, используя дизайнерское видение пространства.',
        img: './assets/images/services6.png',
    },
    {
        title: 'Авторская мебель',
        text: 'Вся мебель индивидуального изготовления в наших проектах реализуется лично нами. И мы гордимся нашим продуктом.',
        img: './assets/images/services7.png',
    }
]

export const currentServicesList = [
    {
        title: 'Дизайн интерьера',
        img: './assets/images/services1.png',
        type: 'interior-design',
        pageHeroFirstText: 'Избавим Вас от необходимости разбираться в огромном количестве документов и лишней волокиты.',
        pageHeroSecondText: 'Подготовим проектную документацию, согласуем перепланировку и переоборудование квартир и нежилых помещений.',
    },
    {
        formData: {
            formTitle: 'Интересуют другие виды работ?',
            formInputs: [
                {
                    inputId: 'redev-custom-name-input',
                    placeholder: 'Как к вам обращаться '
                },
                {
                    inputId: 'redev-custom-phone-input',
                    placeholder: 'Номер телефона'
                }
            ],
            formBg: './assets/images/dswpFormbg.png',
        },
        title: 'Отделочные работы',
        img: './assets/images/services2.png',
        type: 'des-works',
        pageHeroFirstText: 'Мы предлагаем широкий спектр строительных, ремонтных и отделочных работ. ',
        pageHeroSecondText: 'Наши цены на отделочные работы демократичны и доступны. Вы можете убедиться в этом, просмотрев представленный ниже прайс-лист.',
        LRsectionData: {
            title: 'Прайс-лист на отделочные работы',
            img: './assets/images/LRSectionDSWORKSBg.png',
        },
        insuranceData: {
            img: './assets/images/dswpInsuranceBG.png',
            title: 'Страхование и гарантия',
            insuranceList: [
                {
                    title: 'Высочайший уровень выполения',
                    texts: [
                        {
                            text: 'Мы гарантируем выполнение всех типов работ на высочайшем уровне с соблюдением всех эстетических и технических требований.  Качество выполняемых нами работ подтверждают отзывы наших многочисленных заказчиков.',
                        },
                        {
                            text: 'Все работы проводятся в строгом соответствии с законодательством РФ в сфере строительства, ГОСТ, СНиП другими нормативными и руководящими документами'
                        },
                        {
                            text: 'Качество выполняемых нами работ подтверждают отзывы наших многочисленных заказчиков.'
                        }
                    ]

                },
                {
                    title: 'Страхование на время ремонта',
                    texts: [
                        {
                            text: 'Страхование квартиры на время ремонта и на время действия гарантийных обязательств поможет избежать имущественных споров между Вами и третьими лицами. '
                        }
                    ]
                },
                {
                    title: 'Гарантийный срок - 2 года',
                    texts: [
                        {
                            text: 'Нашей компанией установлен гарантийный срок 24 месяца (2 года) со дня сдачи объекта заказчику. Гарантия распространяется на все работы, предоставляемые нашей фирмой.'
                        }
                    ]
                },
                {
                    title: 'Гарантийное обслуживание оборудования',
                    texts: [
                        {text: 'В случае поставки нами оборудования на которое распространяется заводская гарантия, гарантийное обслуживание и ремонт производится фирмой производителем.'}
                    ]
                },
                {
                    title: 'Мы на связи',
                    texts: [
                        {text: 'Мы оперативно реагируем на гарантийные обращения и незамедлительно устраняем выявленные недостатки и гордимся тем, что это происходит довольно редко.'}
                    ]
                },
            ]
        },
        benefitsList: [
            {
                title: 'Опыт работы более 10 лет',
                img: './assets/images/advantages5.png',
                text: 'Осуществляем задачи любой сложности - высокий профессионализм специалистов выполнить любые идеи дизайнеров с премиальным качеством работ.'
            },
            {
                title: 'Страхование и гарантии',
                img: './assets/images/advantages6.png',
                text: 'Добровольное страхование объекта на весь период отделочных работ. Бесплатно исправляем все выявленные недочёты в течение двух лет после окончания ремонта.',
            },
            {
                title: 'Комплексный подход',
                img: './assets/images/advantages1.png',
                text: 'Отвечаем за объект в целом. Гарантируем качество работ и обязательность смежников. Организация всех подрядчиков по единому графику сокращает сроки реализации объекта.'
            },
            {
                title: 'Принцип одного окна',
                img: './assets/images/messageIcoBNFT.png',
                text: 'Работа в команде дизайнера и производителя работ позволяет оперативно решать все вопросы без Вашего прямого участия и вовлечения в проект, экономит Ваше время и нервы.'
            },
            {
                title: 'Гарантированные сроки',
                img: './assets/images/advantages2.png',
                text: 'Выполняя абсолютно все работы, самостоятельно контролируя поставки материалов, гарантируем минимальные сроки производства работ.'
            },
            {
                title: 'Удобная оплата',
                img: './assets/images/advantages3.png',
                text: 'Равномерное распределение оплаты работ на весь период строительства. Прозрачнось отчетности с ежемесячными фотоотчетами и актами выполенных работ.'
            }
        ],
    },
    {
        formInputs: [
            {
                inputId: 'authSV-custom-name-input',
                placeholder: 'Как к вам обращаться '
            },
            {
                inputId: 'authSV-custom-phone-input',
                placeholder: 'Номер телефона'
            }
        ],
        formBg: './assets/images/auth-sVision-formBg.png',
        title: 'Авторский надзор',
        img: './assets/images/services3.png',
        type: 'auth-svision',
        pageHeroFirstText: 'Благодаря авторскому надзору мы обеспечиваем реализацию Вашего проекта   в том виде, в котором он был спроектирован.',
        pageHeroSecondText: 'Осуществляем надзор на протяжении всего срока проведения отделочных работ. От начала и до завершения.',
        priceBlockList: [
            {
                price: '15 000 р / мес.',
                text: 'для помещений < 150 м2'
            },
            {
                price: '25 000 р / мес.',
                text: 'для помещений > 150 м2'
            },
            {
                price: '0 р / мес.',
                text: 'в случае проведения ремонтных работ нашей компанией в Санкт-Петербурге'
            },
            {
                price: '5000 р.',
                text: 'разовый выезд на объект'
            },
            {
                price: 'от 45 000 р.',
                text: 'авторский надзор стороннего проекта'
            }
        ],
        benefitsList: [
            {
                title: 'Соблюдение сроков',
                img: './assets/images/clockIcoBNFT.png',
                text: 'Мы следим за ходом работ и соблюдением сроков на каждом этапе'
            },
            {
                title: 'Качественное исполнение',
                img: './assets/images/likeIcoBNFT.png',
                text: 'Каждый ответственный этап держим на контроле и не позволяем упустить важные моменты'
            },
            {
                title: 'Контроль за материалами',
                img: './assets/images/projectIcoBNFT.png',
                text: 'Авторский надзор помогает избежать перерасхода строительных и отделочных материалов'
            },
            {
                title: 'Консультации по подбору',
                img: './assets/images/questIcoBNFT.png',
                text: 'Консультируем заказчика  по выбору декоративных     и отделочных материалов'
            },
            {
                title: 'Корректировки',
                img: './assets/images/eraserIcoBNFT.png',
                text: 'Если в процессе воплощения требуются корректировки, мы оперативно их вносим'
            },
            {
                title: 'В рамках бюджета',
                img: './assets/images/moneyHandIcoBNFT.png',
                text: 'Вы можете быть уверены, что не придется внезапно увеличивать расходы на Ваш проект'
            }
        ],
    },
    {
        formInputs: [
            {
                inputId: 'decor-custom-name-input',
                placeholder: 'Как к вам обращаться '
            },
            {
                inputId: 'decor-custom-phone-input',
                placeholder: 'Номер телефона'
            }
        ],
        formBg: './assets/images/decoration-formBg.png',
        title: 'Декорирование интерьера',
        img: './assets/images/services4.png',
        type: 'decoration',
        pageHeroFirstText: 'Грамотное декорирование помещения позволяет создать единое гармоничное пространство, в котором все декоративные элементы четко подобраны друг к другу, а акценты расставлены в нужных местах.',
        pageHeroSecondText: 'Именно на стадии декорирования интерьер становится целостным произведением дизайнерского искусства.',
        decorSq: 500,
        benefitsList: [
            {
                title: 'Освещение',
                img: './assets/images/lightningIcoBNFT.png',
                clarifyinglist: [
                    'настольные лампы',
                    'люстры',
                    'торшеры',
                    'бра',
                ]
            },
            {
                title: 'Флористика',
                img: './assets/images/flowerIcoBNFT.png',
                clarifyinglist: [
                    'комнатные растения',
                    'деревья',
                    'цветы',
                ]
            },
            {
                title: 'Столовые приборы',
                img: './assets/images/foodIcoBNFT.png',
                clarifyinglist: [
                    'столовые приборы',
                    'сервизы',
                ]
            },
            {
                title: 'Домашний текстиль',
                img: './assets/images/pillowIcoBNFT.png',
                clarifyinglist: [
                    'декоративные подушки',
                    'постельное белье',
                    'покрывала',
                    'скатерти',
                ]
            },
            {
                title: 'Арт-объекты',
                img: './assets/images/frameIcoBNFT.png',
                clarifyinglist: [
                    'репродукции',
                    'скульптуры',
                    'картины',
                    'вазы',
                ]
            },
            {
                title: 'Гардины и жалюзи',
                img: './assets/images/windowIcoBNFT.png',
                clarifyinglist: [
                    'текстиль',
                    'гардины',
                    'жалюзи',
                    'шторы',
                ]
            }
        ]
    },
    {
        formInputs: [
            {
                inputId: 'redev-custom-name-input',
                placeholder: 'Как к вам обращаться '
            },
            {
                inputId: 'redev-custom-phone-input',
                placeholder: 'Номер телефона'
            }
        ],
        formBg: './assets/images/redevelopment-formBg.png',
        title: 'Согласование перепланировки',
        img: './assets/images/services5.png',
        type: 'redevelopment',
        pageHeroFirstText: 'Избавим Вас от необходимости разбираться в огромном количестве документов и лишней волокиты.',
        pageHeroSecondText: 'Подготовим проектную документацию, согласуем перепланировку и переоборудование квартир и нежилых помещений.',
        benefitsList: [
            {
                title: 'Выгодная инвестиция',
                img: './assets/images/moneyIcoBNFT.png',
                text: 'Стоимость вашей квартиры увеличится, а срок продажи, если потребуется, серьезно сократится.'
            },
            {
                title: 'Решение проблемы',
                img: './assets/images/handsIcoBNFT.png',
                text: 'Вы сможете продать, передать по наследству или обменять квартиру без риска возникновения лишних проблем.'
            },
            {
                title: 'Проверок не будет',
                img: './assets/images/searchIcoBNFT.png',
                text: 'Согласованная перепланировка избавит Вас от проверок инспектирующих органов.'
            },
        ],
        redevAdvList: [
            {text: 'Провести монтаж лестниц, проемов в несущих перекрытиях и стенах;'},
            {text: 'Измененить форму и место расположения наружных дверных и оконных проемов;'},
            {text: 'Провести перестановку сантехнических приборов и радиаторов;'},
            {text: 'Перенести туалеты, ванные комнаты и кухни, объеденить санузлы;'},
            {text: 'Установить оборудование, увеличивающее нагрузку на общедомовую сеть;'},
            {text: 'Провести монтаж дополнительных перегородок и стен в случае увеличения нагрузки на перекрытия;'},
            {text: 'Объединить жилые помещения с балконом или лоджией;'},
            {text: 'Изменить конструкцию полов;'},
            {text: 'Установить камин в квартире;'},
        ]
    },
    {
        formData: {
            formTitle: 'Авторская мебель от студии интерьера CUSTOM MADE',
            formTexts: [
                'Дизайн авторской мебели разрабатывается    в соответствии с Вашими пожеланиями.',
                'При этом учитываются размеры помещения, общий стиль интерьера, оформление уже имеющейся в помещении мебели.',
                'Мебель авторской работы удачно впишется в уже существующий интерьер, или создаст неповторимые акценты.',
            ],
            formBg: './assets/images/frntFormBg.png',
            formBgTablet: './assets/images/frntFormBgTablet.png',
            formInputs: [
                {
                    inputId: 'frnt-custom-name-input',
                    placeholder: 'Как к вам обращаться '
                },
                {
                    inputId: 'frnt-custom-phone-input',
                    placeholder: 'Номер телефона'
                }
            ],
        },
        title: 'Авторская мебель',
        img: './assets/images/services7.png',
        pageHeroFirstText: 'Несомненным преимуществом мебели авторской работы является ее уникальность. ',
        pageHeroSecondText: 'Возможность изготовления нестандартных дверей, лестниц,  мебели снимает все ограничения при формировании интерьера.',
        type: 'furniture',
        workwayData: {
            bgImg: './assets/images/furnitureWWbg.png',
            title: 'Как мы создаем для Вас уникальную мебель',
            workwayList: [
                {
                    title: 'Выбираем стиль',
                    text: 'Стиль мебели будет соответствовать интерьеру квартиры и отвечать вашим пожеланиям.'
                },
                {
                    title: 'Производим необходимые замеры',
                    text: 'Мы ориентируемся на размеры помещения, чтобы мебель удачно вписалась в Ваш интерьер.'
                },
                {
                    title: 'Проектируем мебель',
                    text: 'Мы прорабатываем чертежи будущей мебели, которые позволят создать индивидуальный неповторимый стиль всего интерьера Вашей квартиры или дома.'
                },
                {
                    title: 'Этап изготовления',
                    text: 'Мы вместе с Вами выберем материалы отделки и фурнитуру исходя из рамок бюджета и стилистической направленности интерьера.'
                },
                {
                    btn: true,
                    title: 'Доставка и сборка',
                    text: 'Наши специалисты бережно привезут Вашу новую мебель и аккуратно осуществят сборку.'
                },
            ]
        },
        secSubInfo: {
            title: 'Авторская мебель от студии интерьера CUSTOM MADE',
            list: [
                'Неповторима и привлекательна',
                'Безопасна и долговечна',
                'Практична',
                'Удобна'
            ]
        }
    }
]

export const designing = {
    title: 'Архитектурное проектирование',
    text: 'Спроектируем Ваш дом лично для Вас с учетом эргономики и  красоты, используя дизайнерское видение пространства.',
    img: './assets/images/services6.png',
    type: 'architecture-designing',
    pageHeroFirstText: 'Мы убеждены, что добиться наиболее качественного результата можно в том случае, когда весь процесс строительства от проекта до создания интерьеров осуществляется одной компанией, дающей полную гарантию на все виды работ.',
    pageHeroSecondText: 'Наша компания предлагает услуги по строительству загородных домов и коттеджей в СПб «под ключ» и осуществляет не только архитектурно-строительное проектирование и общестроительные работы, но и все сопутствующие работы.',
}

export const servicesLRtexts = {
    interiorText: 'CUSTOM MADE — уникальный дизайн интерьера и индивидуальный подход. Коллектив нашей студии состоит из профессионалов, которые рады помочь выразить неповторимый дух и образ свойственный только Вам.',
}

export const servicesPricePolicyData = [
    {
        pricePolicyItemTitle: 'Подотовительные и демонтажные работы',
        list: [
            {
                subTitle: 'Демонтаж перегородок из пазогребня',
                unit: 'м2',
                price: 250
            },
            {
                subTitle: 'Демонтаж кирпичных перегородок',
                unit: 'м2',
                price: 300
            },
            {
                subTitle: 'Создание временной схемы электропитания',
                unit: 'сист.',
                price: 2700
            },
            {
                subTitle: 'Демонтаж радиаторов отопления',
                unit: 'шт.',
                price: 750
            },
            {
                subTitle: 'Демонтаж существующей электропроводки и временного электрощита',
                unit: 'шт.',
                price: 2000
            },
            {
                subTitle: 'Демонтаж полотенцесушителя',
                unit: 'шт.',
                price: 500
            },
            {
                subTitle: 'Устройство временного водоснабжения и канализации',
                unit: 'сист.' ,
                price: 3000
            }
        ]
    },
    {
        pricePolicyItemTitle: 'Сантехнические работы',
        list: [
            {
                subTitle: 'Демонтаж перегородок из пазогребня',
                unit: 'м2',
                price: 250
            },
            {
                subTitle: 'Демонтаж кирпичных перегородок',
                unit: 'м2',
                price: 300
            },
            {
                subTitle: 'Создание временной схемы электропитания',
                unit: 'сист.',
                price: 2700
            },
            {
                subTitle: 'Демонтаж радиаторов отопления',
                unit: 'шт.',
                price: 750
            },
            {
                subTitle: 'Демонтаж существующей электропроводки и временного электрощита',
                unit: 'шт.',
                price: 2000
            },
            {
                subTitle: 'Демонтаж полотенцесушителя',
                unit: 'шт.',
                price: 500
            },
            {
                subTitle: 'Устройство временного водоснабжения и канализации',
                unit: 'сист.' ,
                price: 3000
            }
        ]
    },
    {
        pricePolicyItemTitle: 'Электромонтажные работы',
        list: [
            {
                subTitle: 'Демонтаж перегородок из пазогребня',
                unit: 'м2',
                price: 250
            },
            {
                subTitle: 'Демонтаж кирпичных перегородок',
                unit: 'м2',
                price: 300
            },
            {
                subTitle: 'Создание временной схемы электропитания',
                unit: 'сист.',
                price: 2700
            },
            {
                subTitle: 'Демонтаж радиаторов отопления',
                unit: 'шт.',
                price: 750
            },
            {
                subTitle: 'Демонтаж существующей электропроводки и временного электрощита',
                unit: 'шт.',
                price: 2000
            },
            {
                subTitle: 'Демонтаж полотенцесушителя',
                unit: 'шт.',
                price: 500
            },
            {
                subTitle: 'Устройство временного водоснабжения и канализации',
                unit: 'сист.' ,
                price: 3000
            }
        ]
    },
    {
        pricePolicyItemTitle: 'Устройство стен',
        list: [
            {
                subTitle: 'Демонтаж перегородок из пазогребня',
                unit: 'м2',
                price: 250
            },
            {
                subTitle: 'Демонтаж кирпичных перегородок',
                unit: 'м2',
                price: 300
            },
            {
                subTitle: 'Создание временной схемы электропитания',
                unit: 'сист.',
                price: 2700
            },
            {
                subTitle: 'Демонтаж радиаторов отопления',
                unit: 'шт.',
                price: 750
            },
            {
                subTitle: 'Демонтаж существующей электропроводки и временного электрощита',
                unit: 'шт.',
                price: 2000
            },
            {
                subTitle: 'Демонтаж полотенцесушителя',
                unit: 'шт.',
                price: 500
            },
            {
                subTitle: 'Устройство временного водоснабжения и канализации',
                unit: 'сист.' ,
                price: 3000
            }
        ]
    },
    {
        pricePolicyItemTitle: 'Устройство потолков',
        list: [
            {
                subTitle: 'Демонтаж перегородок из пазогребня',
                unit: 'м2',
                price: 250
            },
            {
                subTitle: 'Демонтаж кирпичных перегородок',
                unit: 'м2',
                price: 300
            },
            {
                subTitle: 'Создание временной схемы электропитания',
                unit: 'сист.',
                price: 2700
            },
            {
                subTitle: 'Демонтаж радиаторов отопления',
                unit: 'шт.',
                price: 750
            },
            {
                subTitle: 'Демонтаж существующей электропроводки и временного электрощита',
                unit: 'шт.',
                price: 2000
            },
            {
                subTitle: 'Демонтаж полотенцесушителя',
                unit: 'шт.',
                price: 500
            },
            {
                subTitle: 'Устройство временного водоснабжения и канализации',
                unit: 'сист.' ,
                price: 3000
            }
        ]
    },
    {
        pricePolicyItemTitle: 'Полы',
        list: [
            {
                subTitle: 'Демонтаж перегородок из пазогребня',
                unit: 'м2',
                price: 250
            },
            {
                subTitle: 'Демонтаж кирпичных перегородок',
                unit: 'м2',
                price: 300
            },
            {
                subTitle: 'Создание временной схемы электропитания',
                unit: 'сист.',
                price: 2700
            },
            {
                subTitle: 'Демонтаж радиаторов отопления',
                unit: 'шт.',
                price: 750
            },
            {
                subTitle: 'Демонтаж существующей электропроводки и временного электрощита',
                unit: 'шт.',
                price: 2000
            },
            {
                subTitle: 'Демонтаж полотенцесушителя',
                unit: 'шт.',
                price: 500
            },
            {
                subTitle: 'Устройство временного водоснабжения и канализации',
                unit: 'сист.' ,
                price: 3000
            }
        ]
    },
    {
        pricePolicyItemTitle: 'Штукатурные работы',
        list: [
            {
                subTitle: 'Демонтаж перегородок из пазогребня',
                unit: 'м2',
                price: 250
            },
            {
                subTitle: 'Демонтаж кирпичных перегородок',
                unit: 'м2',
                price: 300
            },
            {
                subTitle: 'Создание временной схемы электропитания',
                unit: 'сист.',
                price: 2700
            },
            {
                subTitle: 'Демонтаж радиаторов отопления',
                unit: 'шт.',
                price: 750
            },
            {
                subTitle: 'Демонтаж существующей электропроводки и временного электрощита',
                unit: 'шт.',
                price: 2000
            },
            {
                subTitle: 'Демонтаж полотенцесушителя',
                unit: 'шт.',
                price: 500
            },
            {
                subTitle: 'Устройство временного водоснабжения и канализации',
                unit: 'сист.' ,
                price: 3000
            }
        ]
    },
    {
        pricePolicyItemTitle: 'Плиточные работы',
        list: [
            {
                subTitle: 'Демонтаж перегородок из пазогребня',
                unit: 'м2',
                price: 250
            },
            {
                subTitle: 'Демонтаж кирпичных перегородок',
                unit: 'м2',
                price: 300
            },
            {
                subTitle: 'Создание временной схемы электропитания',
                unit: 'сист.',
                price: 2700
            },
            {
                subTitle: 'Демонтаж радиаторов отопления',
                unit: 'шт.',
                price: 750
            },
            {
                subTitle: 'Демонтаж существующей электропроводки и временного электрощита',
                unit: 'шт.',
                price: 2000
            },
            {
                subTitle: 'Демонтаж полотенцесушителя',
                unit: 'шт.',
                price: 500
            },
            {
                subTitle: 'Устройство временного водоснабжения и канализации',
                unit: 'сист.' ,
                price: 3000
            }
        ]
    },
    {
        pricePolicyItemTitle: 'Малярные работы',
        list: [
            {
                subTitle: 'Демонтаж перегородок из пазогребня',
                unit: 'м2',
                price: 250
            },
            {
                subTitle: 'Демонтаж кирпичных перегородок',
                unit: 'м2',
                price: 300
            },
            {
                subTitle: 'Создание временной схемы электропитания',
                unit: 'сист.',
                price: 2700
            },
            {
                subTitle: 'Демонтаж радиаторов отопления',
                unit: 'шт.',
                price: 750
            },
            {
                subTitle: 'Демонтаж существующей электропроводки и временного электрощита',
                unit: 'шт.',
                price: 2000
            },
            {
                subTitle: 'Демонтаж полотенцесушителя',
                unit: 'шт.',
                price: 500
            },
            {
                subTitle: 'Устройство временного водоснабжения и канализации',
                unit: 'сист.' ,
                price: 3000
            }
        ]
    },
    {
        pricePolicyItemTitle: 'Прочие работы',
        list: [
            {
                subTitle: 'Демонтаж перегородок из пазогребня',
                unit: 'м2',
                price: 250
            },
            {
                subTitle: 'Демонтаж кирпичных перегородок',
                unit: 'м2',
                price: 300
            },
            {
                subTitle: 'Создание временной схемы электропитания',
                unit: 'сист.',
                price: 2700
            },
            {
                subTitle: 'Демонтаж радиаторов отопления',
                unit: 'шт.',
                price: 750
            },
            {
                subTitle: 'Демонтаж существующей электропроводки и временного электрощита',
                unit: 'шт.',
                price: 2000
            },
            {
                subTitle: 'Демонтаж полотенцесушителя',
                unit: 'шт.',
                price: 500
            },
            {
                subTitle: 'Устройство временного водоснабжения и канализации',
                unit: 'сист.' ,
                price: 3000
            }
        ]
    },
]

export const allCompletedProjectsMob = [
    {img: './assets/images/cmpPrjs1.png'},
    {img: './assets/images/cmpPrjs2.png'},
    {img: './assets/images/cmpPrjs3.png'},
    {img: './assets/images/cmpPrjs4.png'},
    {img: './assets/images/cmpPrjs5.png'},
    {img: './assets/images/cmpPrjs6.png'},
    {img: './assets/images/cmpPrjs1.png'},
    {img: './assets/images/cmpPrjs2.png'},
    {img: './assets/images/cmpPrjs3.png'},
    {img: './assets/images/cmpPrjs4.png'},
    {img: './assets/images/cmpPrjs5.png'},
    {img: './assets/images/cmpPrjs6.png'},
    {img: './assets/images/cmpPrjs1.png'},
    {img: './assets/images/cmpPrjs2.png'},
    {img: './assets/images/cmpPrjs3.png'},
    {img: './assets/images/cmpPrjs4.png'},
    {img: './assets/images/cmpPrjs5.png'},
    {img: './assets/images/cmpPrjs6.png'}
]

export const completedProejcts = {
    title: 'Реализованные проекты',
    list: [
        {
            imgList: [
                {img: './assets/images/cmpPrjs1.png'},
                {img: './assets/images/cmpPrjs2.png'},
                {img: './assets/images/cmpPrjs3.png'},
                {img: './assets/images/cmpPrjs4.png'},
                {img: './assets/images/cmpPrjs5.png'},
                {img: './assets/images/cmpPrjs6.png'}
            ],
        },
        {
            imgList: [
                {img: './assets/images/cmpPrjs1.png'},
                {img: './assets/images/cmpPrjs2.png'},
                {img: './assets/images/cmpPrjs3.png'},
                {img: './assets/images/cmpPrjs4.png'},
                {img: './assets/images/cmpPrjs5.png'},
                {img: './assets/images/cmpPrjs6.png'}

            ],
        },
        {
            imgList: [
                {img: './assets/images/cmpPrjs1.png'},
                {img: './assets/images/cmpPrjs2.png'},
                {img: './assets/images/cmpPrjs3.png'},
                {img: './assets/images/cmpPrjs4.png'},
                {img: './assets/images/cmpPrjs5.png'},
                {img: './assets/images/cmpPrjs6.png'}

            ],
        },
        {
            imgList: [
                {img: './assets/images/cmpPrjs1.png'},
                {img: './assets/images/cmpPrjs2.png'},
                {img: './assets/images/cmpPrjs3.png'},
                {img: './assets/images/cmpPrjs4.png'},
                {img: './assets/images/cmpPrjs5.png'},
                {img: './assets/images/cmpPrjs6.png'}

            ],
        },
        {
            imgList: [
                {img: './assets/images/cmpPrjs1.png'},
                {img: './assets/images/cmpPrjs2.png'},
                {img: './assets/images/cmpPrjs3.png'},
                {img: './assets/images/cmpPrjs4.png'},
                {img: './assets/images/cmpPrjs5.png'},
                {img: './assets/images/cmpPrjs6.png'}

            ],
        },
    ]
}