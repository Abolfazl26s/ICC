$(function () {
  let lang = document.querySelector('html').lang;
  let message;
  console.log(lang);
  switch (lang) {
    case 'fa':
      message = {
        'contact-name': {
          required: 'نام را وارد نمائید',
          minlength: 'حداقل کاراکتر وارد شده نباید کمتر از 3 باشد',
        },
        'contact-email': {
          email: 'فرمت ایمیل وارد شده درست نیست',
        },
        'contact-phoneNumber': {
          required: 'شماره تماس را وارد نمایید',
          number: 'شماره تماس وارد شده درست نیست',
          minlength: 'شماره تماس نباید کمتر از 5 عدد باشد',
        },
        'contact-subject': {
          required: 'موضوع را وارد نمائید',
          minlength: 'موضوع نباید کمتر از 5 کاراکتر باشد',
        },
        'contact-message': {
          required: 'متن پیام را وارد نمایید',
          minlength: 'متن پیام نباید کمتر از 12 کاراکتر باشد',
        },
      };
      break;
    case 'en':
      message = {
        'contact-name': {
          required: 'Enter Your Name',
          minlength:
            'The minimum number of characters entered should not be less than 3',
        },
        'contact-email': {
          email: 'Email format is incorrect',
        },
        'contact-phoneNumber': {
          required: 'Enter Your Phone Number',
          number: 'The entered contact number is incorrect',
          minlength: 'Contact number should not be less than 5',
        },
        'contact-subject': {
          required: 'Enter the subject',
          minlength: 'Subject should not be less than 5 characters',
        },
        'contact-message': {
          required: 'Enter the message text',
          minlength:
            'The text of the message should not be less than 12 characters',
        },
      };
      break;
    case 'ar':
      message = {
        'contact-name': {
          required: 'أدخل أسمك',
          minlength: 'يجب ألا يقل الحد الأدنى لعدد الأحرف التي تم إدخالها عن 3',
        },
        'contact-email': {
          email: 'تنسيق البريد الإلكتروني غير صحيح',
        },
        'contact-phoneNumber': {
          required: 'أدخل رقم هاتفك',
          number: 'رقم الاتصال الذي تم إدخاله غير صحيح',
          minlength: 'يجب ألا يقل رقم الاتصال عن 5',
        },
        'contact-subject': {
          required: 'أدخل الموضوع',
          minlength: 'يجب ألا يقل الموضوع عن 5 أحرف',
        },
        'contact-message': {
          required: 'أدخل نص الرسالة',
          minlength: 'يجب ألا يقل نص الرسالة عن 12 حرفًا',
        },
      };
      break;
    case 'ru':
      message = {
        'contact-name': {
          required: 'Введите ваше имя',
          minlength:
            'Минимальное количество вводимых символов должно быть не менее 3',
        },
        'contact-email': {
          email: 'Неверный формат электронной почты',
        },
        'contact-phoneNumber': {
          required: 'Введите свой номер телефона',
          number: 'Введенный контактный номер неверен',
          minlength: 'Контактный номер не должен быть меньше 5',
        },
        'contact-subject': {
          required: 'Введите тему',
          minlength: 'Тема не должна быть меньше 5 символов',
        },
        'contact-message': {
          required: 'Введите текст сообщения',
          minlength: 'Текст сообщения должен быть не менее 12 символов',
        },
      };
      break;
    default:
      break;
  }

  // validate contact-form
  jQuery('#contact-form').validate({
    rules: {
      'contact-name': {
        required: true,
        minlength: 3,
      },
      'contact-email': {
        email: true,
      },
      'contact-phoneNumber': {
        required: true,
        number: true,
        minlength: 5,
      },
      'contact-subject': {
        required: true,
        minlength: 5,
      },
      'contact-message': {
        required: true,
        minlength: 12,
      },
    },
    messages: message,
    errorElement: 'div',
    errorLabelContainer: '.errorTxt',
    submitHandler: function () {
      console.log('hello');
    },
  });
});
