export const headerPrjOrderModalW  = {
    texts: [
        'Разрешите нам познакомиться с вами и узнать о вашем проекте. Мы подготовим для вас индивидуальное предложение.'
    ],
    dataType: 'orderProject',
    modalInputs: [
        {
            inputId: 'headerModal-input__name',
            placeholder: 'Как к вам обращаться?'
        },
        {
            inputId: 'headerModal-input__phone',
            placeholder: 'Номер телефона'
        },
        {
            inputId: 'headerModal-input__message',
            placeholder: 'Номер телефона',
            messageField: true
        }
    ],
    containsForm: true,
    modalType: 'header-prjO__modal',
    title: 'Заказать проект',
    btnText: 'Отправить сообщение',
    btnType: 'sendData'
}

export const mainWWPrjOrderModalW = {
    texts: [
        'Разрешите нам познакомиться с вами и узнать о вашем проекте. Мы подготовим для вас индивидуальное предложение.'
    ],
    dataType: 'orderProject',
    containsForm: true,
    modalInputs: [
        {
            inputId: 'main-workway-input__name',
            placeholder: 'Как к вам обращаться?'
        },
        {
            inputId: 'main-workway-input__phone',
            placeholder: 'Номер телефона'
        },
        {
            inputId: 'main-workway-input__message',
            placeholder: 'Номер телефона',
            messageField: true
        }
    ],
    modalType: 'main-workway__prjO-modal',
    title: 'Заказать проект',
    btnText: 'Отправить сообщение',
    btnType: 'sendData'
}

export const peterBioAskQstModalW = {
    texts: [
        'Если Вам нужна консультация по проекту, напишите сообщение. Мы свяжемся с Вами и ответим на интересующие вопросы.'
    ],
    dataType: 'orderProject',
    containsForm: true,
    modalInputs: [
        {
            inputId: 'ask-quest__bio-input__name',
            placeholder: 'Как к вам обращаться?'
        },
        {
            inputId: 'ask-quest__bio-input__phone',
            placeholder: 'Номер телефона'
        },
        {
            inputId: 'ask-quest__bio-input__message',
            placeholder: 'Номер телефона',
            messageField: true
        }
    ],
    modalType: 'ask-quest__bio-modal',
    title: 'Задать вопрос',
    btnText: 'Отправить сообщение',
    btnType: 'sendData'
}

export const successModalW = {
    texts: [
        'Спасибо за ваше сообщение.',
        'Мы свяжемся с Вами в ближайшее время, чтобы проконсультировать по Вашему проекту.'
    ],
    dataType: 'successModal',
    containsForm: false,
    modalType: 'successful-modal',
    title: 'Ваше сообщение отправлено!',
    btnText: 'Закрыть окно',
    btnType: 'close'
}

export const mainPsuccessModalW = {
    texts: [
        'Спасибо за оставленную заявку',
        'Мы свяжемся с Вами в ближайшее время, чтобы проконсультировать по интересующим вопросам.'
    ],
    dataType: 'successModal',
    containsForm: false,
    modalType: 'main-page__successful-modal',
    title: 'Вы заказали обратный звонок!',
    btnText: 'Закрыть окно',
    btnType: 'close'
}

export const servicesModalW = {
    texts: [
        'Напишите, какие отделочные работы необходимо произвести. Мы подготовим для вас индивидуальное предложение.'
    ],
    dataType: 'orderProject',
    containsForm: false,
    modalType: 'servicesPMain-custom_modal',
    title: 'Узнайте стоимость работы',
    btnText: 'Отправить сообщение',
    btnType: 'sendData'
}

export const intDesServModalW = {
    texts: [
        'Напишите, какие отделочные работы необходимо произвести. Мы подготовим для вас индивидуальное предложение.'
    ],
    dataType: 'orderProject',
    containsForm: false,
    modalType: 'intPServices-custom_modal',
    title: 'Узнайте стоимость работы',
    btnText: 'Отправить сообщение',
    btnType: 'sendData'
}

export const ourTeamAskqstModalW = {
    texts: [
        'Если Вам нужна консультация по проекту, напишите сообщение. Мы свяжемся с Вами и ответим на интересующие вопросы.'
    ],
    dataType: 'orderProject',
    containsForm: true,
    modalInputs: [
        {
            inputId: 'ask-quest__bio-input__name',
            placeholder: 'Как к вам обращаться?'
        },
        {
            inputId: 'ask-quest__bio-input__phone',
            placeholder: 'Номер телефона'
        },
        {
            inputId: 'ask-quest__bio-input__message',
            placeholder: 'Номер телефона',
            messageField: true
        }
    ],
    modalType: 'abtP-ourTeam__modal',
    title: 'Задайте вопрос  ',
    btnText: 'Отправить сообщение',
    btnType: 'sendData'
}

export const textsDefault = [
    'Спасибо за оставленную заявку.',
    'Мы свяжемся с Вами в ближайшее время, чтобы проконсультировать по интересующим вопросам.',
]