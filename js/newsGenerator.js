function MadNews() {
  var predict = [
    { 'message': '[ПЬЯНЫЙ] Водитель {камаза|белаза|мусоровоза}', 'sex': 'm' },
    { 'message': '[ПЬЯНЫЙ] [ПЕНСИОНЕР] из [САРАТОВА], расчленивший {соседа|собаку|кошку}', 'sex': 'm' },
    { 'message': 'В [САРАТОВЕ] [ПЬЯНЫЙ] рабочий из Средней Азии', 'sex': 'm' },
    { 'message': '[ПЬЯНЫЙ] [ПЕНСИОНЕР] из [САРАТОВА]', 'sex': 'm' },
    { 'message': '[ПЬЯНЫЙ] [ПЕНСИОНЕР]', 'sex': 'm' },
    { 'message': '[ПЬЯНЫЙ] [ДЕПУТАТ] [САРАТОВА]', 'sex': 'm' },
    { 'message': '[ПЬЯНЫЙ] [ОМИЧ]', 'sex': 'm' },
    { 'message': '[ПЬЯНЫЙ] [ОМИЧ], [СТРЕЛЯВШИЙ ИЗ ОКНА]', 'sex': 'm' },
    { 'message': '[ПЬЯНЫЙ] [ПЕНСИОНЕР] в [САРАТОВЕ]', 'sex': 'm' },
    { 'message': 'В [САРАТОВЕ] [ПЬЯНЫЙ] [ПЕНСИОНЕР]', 'sex': 'm' },
    { 'message': '[ПЬЯНЫЙ] [ПЕНСИОНЕР] из [САРАТОВА]', 'sex': 'm' },
    { 'message': '[ПЬЯНАЯ] Воспитательница из Сочи, ', 'sex': 'f' },
    { 'message': '[ПЬЯНАЯ] Доярка из Амурской области', 'sex': 'f' },
    { 'message': '[ПЬЯНАЯ] Журналистка Комсомольской правды', 'sex': 'f' },
    { 'message': '[ПЬЯНАЯ] Уборщица ночного клуба', 'sex': 'f' },
    { 'message': '[ПЬЯНАЯ] Жительница [САРАТОВА]', 'sex': 'f' },
    { 'message': '[ПЬЯНАЯ] Уроженка [САРАТОВА]', 'sex': 'f' },
    { 'message': 'В [САРАТОВЕ] [ПЬЯНАЯ] [ДЕВУШКА]', 'sex': 'f' },
    { 'message': 'жители Зимбабве', 'sex': 'plural' },
    { 'message': '[ПЬЯНЫЕ] Полицейские из Омска', 'sex': 'plural' },
    { 'message': 'Группа Томичей', 'sex': 'plural' },
    { 'message': '[ДВЕ] [ПЬЯНЫЕ] проститутки из [САРАТОВА]', 'sex': 'plural' },
    { 'message': '{Два|Три|Четыре} студента {филфака МГУ|Гнесинки}', 'sex': 'plural' },
    { 'message': 'Группа молодых людей из [САРАТОВА]', 'sex': 'plural' },
    { 'message': '[ПЬЯНЫЕ] Омичи', 'sex': 'plural' },
    { 'message': 'В [САРАТОВЕ] двое Чеченцев', 'sex': 'plural' },
    { 'message': 'В [САРАТОВЕ] [ДВЕ] [ПЬЯНЫЕ] [ДЕВУШКИ]', 'sex': 'plural' },
    { 'message': 'Двое жителей [САРАТОВА]', 'sex': 'plural' },
    { 'message': 'неизвестные без оружия', 'sex': 'plural' }
  ];

  var seed = Math.floor(Math.random() * predict.length);
  var sex = predict[seed]['sex'];

  var sets = {
    'САРАТОВА': '{' +
    'Ярославской области|Кузбасса|Саратова|Иваново|Ульяновска|Бурятии|' +
    'Владимирской области|Хабаровска|Бобруйска|Мурманска|Калининграда' +
    '|Ставрополья|Приморья|Кавказа|Костромы|Прибалтики|Якутии|Подмосковья' +
    '}',
    'САРАТОВЕ': '{' +
    'Краснодаре|Казани|Киргизстане|Узбекистане|Ташкенте|Баку|Новосибирске|' +
    'Чите|Челябинске|Петербурге' +
    '}',
    'ОМИЧ': '{Омич|Череповчанин|Харьковчанин|Кемеровчанин|Донской казак}',
    'ПЬЯНЫЙ': '{|||||||||||||||||||28-летний|пьяный}',
    'ПЬЯНАЯ': '{|||||||||||||||||||28-летняя|пьяная|пожилая}',
    'ПЬЯНЫЕ': '{|||||||||||||||||||20-летние|пьяные}',
    'ПЕНСИОНЕР': '{' +
    'парень|15-летний домушник|баскетболист местного клуба|бизнесмен|ветеран ВОВ|' +
    'Водитель буксира|Водитель мусоровоза|Водитель скорой помощи|вор-форточник|' +
    'грузчик|дворник|житель коттеджного посёлка|мальчик|миллионер|молодой человек|' +
    'мормон|мужчина|наркоман|нищий|охотник|пенсионер|пивовар|пиротехник-самоучка|' +
    'подросток|пожилой учитель|полицейский|Председатель колхоза|программист|рыбак|' +
    'сантехник|сатанист|священник|социальный работник|футболист|чеченец|экс-прокурор|' +
    'поджигатель машины' +
    '}',
    'ПЕНСИОНЕРОВ': '{' +
    'парней|молодых людей|пенсионеров|жителей коттеджного посёлка|ветеранов ВОВ|рыбаков|' +
    'мальчиков|пожилых учителей|социальных работников|священников|нищих|полицейских|' +
    'программистов|охотников|дворников|мормонов|сантехников|наркоманов|футболистов|' +
    'баскетболистов местного клуба|сатанистов|чеченцев' +
    '}',
    'СОБАКУ': '{' +
    'СОБАКУ|ЯЩИК ВОДКИ|ламу|льва из местного цирка|деньги дольщиков|из дома модем и сигареты|' +
    'теленка|у калужских селян более сотни коров' +
    '}',
    'СОСЕДА': '{' +
    'соседа|прохожего|двух прохожих|двух студенток|депутата||собаку|козу|корову|кошку|гуся|' +
    'двух павлинов|несколько зевак' +
    '}',
    'ДЕПУТАТ': '{Депутат|мэр|глава администрации|почётный гражданин|экс-мэр|житель}',
    'ДЕВУШКА': '{девушка|женщина|пенсионерка|писательница|пьяная продавщица|учительница|' +
    'посетительница салона красоты|женщина лёгкого поведения|старушка|жена}',
    'ДЕВУШКИ': '{девушки|мошенницы-гипнотизерши|пенсионерки|писательницы|пьяные продавщицы|учительницы|посетительницы салона красоты|студентки|женщины лёгкого поведения}',

    'ДВЕ': '{Две|Три|Четыре}',
    'ВЗОРВАЛ': '{взорвал|поджёг}',
    'ВЗОРВАЛА': '{взорвала|подожгла}',

    'БУДКУ': '{свой гараж|гаражный кооператив|самогонный аппарат|рекламный щит|трансформаторную будку|беседку с молодежью}',
    'МАРШРУТКУ': '{ПОЕЗД|трактор|бетономешалку|танк-экспонат времен ВОВ}',
    'СТРЕЛЯВШИЙ ИЗ ОКНА': '{стрелявший в прохожих из окна}',
    'ПУТИНЫМ': '{медведевым|президентом|губернатором|путиным}',
    'УБИЛА': '{убила|ранила|казнила|унизила|осквернила|застрелила|задушила|утопила|зарезала}',
    'УБИЛ': '{убил |ранил |казнил |унизил |осквернил |застрелил |задушил| утопил |зарезал}',
    'УБИЛИ': '{убили|ранили|казнили|унизили|осквернили|застрелили|задушили|утопили|зарезали}',
    'НАДРУГАЛАСЬ': '{надругалась}',
    'СЛУЧАЙНО': '{слуйчайно|}'
  };

  var action = {
    'm': [
      'ХОТЕЛ {НАПУГАТЬ|УБИТЬ} {ТЁЩУ|ЖЕНУ}',
      'УГНАЛ [МАРШРУТКУ]',
      'УКРАЛ [СОБАКУ]',
      'РАЗВЕЛ КОСТЕР В МЕТРО',
      'ОБЛИЛСЯ БЕНЗИНОМ, ЗАГОРЕЛСЯ',
      'ПОДЖЕГ СВОИ ДОКУМЕНТЫ',
      'взял в заложницы тещу',
      'вломился в чужой дом',
      'ограбил автомат с игрушками',
      'изнасиловал кондитера',
      'сбежал из психушки',
      'застрелился на Рублёвке',
      '[ВЗОРВАЛ] [БУДКУ]',
      'раздал свою зарплату бомжам',
      'пошёл на рыбалку',
      'готовил ужин',
      'напоил кота самогонкой',
      'купил аккордеон',
      'провёл ночь в гнезде аиста',
      'обнаружил в подвале скелет в спортивных штанах',
      'залез через чердак в дом пенсионерки',
      'позарился на самокат',
      'брал взятки',
      'зашел в строительную фирму',
      'с огнетушителем в руках напал на прохожего',
      'ограбил супругов, приютивших его на ночь',
      'утопил знакомую в ванной',
      'пытался провезти свою супругу в Польшу, спрятав в чемодане',
      'ранил ножом двоих полицейских в Петербурге',
      'изнасиловал риэлтора',
      'хотел устроиться на работу в детский сад'
    ],
    'f': [
      'ХОТЕЛа {НАПУГАТЬ|убить} {мужа|свекровь|сестру}',
      'УГНАЛА [МАРШРУТКУ]',
      'УКРАЛА [СОБАКУ]',
      'РАЗВЕЛа КОСТЕР В МЕТРО',
      'ОБЛИЛась БЕНЗИНОМ, ЗАГОРЕЛась',
      'ПОДожгла СВОИ ДОКУМЕНТЫ',
      'взяла в заложницы тещу',
      'вломилась в чужой дом',
      'ограбила автомат с игрушками',
      'взорвала беседку с молодежью',
      'сбежала из психушки',
      '[ВЗОРВАЛА] [БУДКУ]',
      'сломала самогонный аппарат мужа',
      'раздала свою зарплату детям-сиротам',
      'не пустила мужа на рыбалку',
      'готовила ужин',
      'фотографировала льва в местном цирке',
      'совершила ДТП с трактором',
      'брала взятки',
      'пыталась украсть продукты, спрятав их под ребенка',
      'украла огромного лосося на поминки отца',
      'убила сестру банкой с мукой'
    ],
    'plural': [
      'УГНАЛИ МАРШРУТКУ, НАБРАЛИ ПАССАЖИРОВ',
      'УКРАЛИ [СОБАКУ]',
      'РАЗВЕЛи КОСТЕР В МЕТРО',
      'ПОДожгли СВОИ ДОКУМЕНТЫ',
      'вломились в чужой дом',
      'ограбили автомат с игрушками',
      'изнасиловали кондитера',
      'взорвали [БУДКУ]',
      'пытались покончить с собой',
      'сбежали из психушки',
      'подожгли гаражный кооператив',
      'сломали самогонный аппарат',
      'раздали свою зарплату бомжам',
      'пошли на рыбалку',
      'заказали убийство директора',
      'украли льва из местного цирка',
      'угнали трактор',
      'угнали бетономешалку',
      'угнали танк-экспонат времен ВОВ',
      'задержали 13-летнего мальчика с автоматом Калашникова, пистолетом, патронами и 23 порциями марихуаны',
      'украли у горожан более 230 тысяч рублей',
      'выманили у студентки 14 млн рублей',
      '«угнали» у фермера и съели породистого жеребца',
      'украли несколько тонн сигарет',
      'прятали три носка с золотом'
    ]
  };

  // @todo из-за размножения некоторые фразы очень часто повторяются, что наводит на мысль о введении дополнительного веса, который будет влиять на статистическое распределение
  // т.е. например рассмотрим шаблон "{СЛУЧАЙНО|} {УБИЛ|ЗАРЕЗАЛ} {СОСЕДА|ПЕНСИОНЕРА|КОШКУ}" выдаст 2*2*3=12 вариантов, среди которых половина вариантов будет содержать слово "СЛУЧАЙНО"
  // а мне кажется это слишком частым. Было бы неплохо, чтобы слово случайно,
  var conclusion = {
    'm': [
      'И ПРИ ЭТОМ СМЕЯЛСЯ',
      'И УМЕР',
      'И ЕДВА НЕ ЛИШИЛСЯ {ПОЛОВОГО ОРГАНА|документов|всех денег|автомобиля}',
      'и требовал аудиенции с [ПУТИНЫМ]',
      'и прострелил бицепцы гостю ресторана «Всё хорошо»',
      'и пел матерные частушки',
      'и выиграл в лотерею',
      'и [СЛУЧАЙНО] убил [СОСЕДА]',
      'и [СЛУЧАЙНО] [УБИЛ] собаку',
      'и [СЛУЧАЙНО] оскорбил [ПЕНСИОНЕРОВ]',
      'и поджег ее квартиру',
      'и украл кошелек с деньгами',
      'и был задержан за мошенничество',
      'и был уволен',
      'ЧТОБЫ СОГРЕТЬСЯ',
      'чтобы вернуть {супругу|сожительницу|жену}',
      'чтобы войти в книгу рекордов Гинесса',
      'чтобы его оставили в покое',
      'чтобы замести следы изготовления самогона',
      'чтобы успокоить морских гребешков',
      'чтобы уладить конфликт с дагестанцами',
      'чтобы защитить свою честь',
      'с особой жестокостью',
      'от безденежья',
      'спасая своего любимца'
    ],
    'f': [
      'И ПРИ ЭТОМ СМЕЯЛась',
      'И УМЕРла',
      'И ПОПРОСИЛа НЕ БЕСПОКОИТЬ',
      'и требовала аудиенции с [ПУТИНЫМ]',
      'и материлась невпопад',
      'и выиграла в лотерею',
      'и [СЛУЧАЙНО] [УБИЛА] [СОСЕДА]',
      'и НАДРУГАЛАСЬ над соседом',
      'ЧТОБЫ СОГРЕТЬСЯ',
      'чтобы вернуть мужа',
      'чтобы войти в книгу рекордов Гинесса',
      'чтобы её оставили в покое',
      'чтобы её не заподозрили в измене',
      'с особой жестокостью',
      'спасая своего любимца',
      'и скрывается от правосудия'
    ],
    'plural': [
      'И ПРИ ЭТОМ СМЕЯЛись',
      'И УМЕРли',
      'И ПОПРОСИЛи НЕ БЕСПОКОИТЬ',
      'И ЕДВА НЕ ЛИШИЛись конечностей',
      'и требовали аудиенции с [ПУТИНЫМ]',
      'и пели матерные частушки',
      'и [СЛУЧАЙНО] [УБИЛИ] [СОСЕДА]',
      'и [СЛУЧАЙНО] [УБИЛИ] [СОСЕДА]',
      'ЧТОБЫ СОГРЕТЬСЯ',
      'ради веселья',
      'чтобы войти в книгу рекордов Гинесса',
      'чтобы их оставили в покое',
      'с целью друг друга убить',
      'с особой жестокостью',
      'спасая своего любимца',
      'и устроили стрельбу из пневматического пистолета',
      'и прострелили ноги преступнику с ножом',
      'и скрываются от правосудия',
      'в неадекватном состоянии',
      'угрожая оружием',
      'на кладбище'
    ]
  };

  this.getNew = function (stage) {
    var a;
    switch (stage) {
      case 1:
        return multiply(predict[seed].message).toUpperCase();
      case 2:
        a = extract_(action[sex]);
        return multiply(a[Math.floor(Math.random() * a.length)]).toUpperCase();
      case 3:
        a = extract_(conclusion[sex]);
        return multiply(a[Math.floor(Math.random() * a.length)]).toUpperCase();
      default:
        return 'И УМЕР';
    }
  };

  /**
   * Обработка шаблона размножения.
   * Шаблон: "Именно {образование|обучение|учение} закладывает в {человека|людей|толпу} {знания|багаж знаний} и информацию."
   * Результат: "Именно обучение закладывает в людей знания и информацию."
   */
  function multiply(template) {
    var content = template || '';
    var matches = content.match(/\[[а-яА-Я\w]*\]/g);
    if (!matches) return content;
    matches.forEach(function (match) {
      content = content.replace(match, sets[match.substr(1).substr(0, match.length - 2)]);
    });
    matches = content.match(/\{([А-Яа-яЁё|\s\-\d]*)\}/g);
    matches.forEach(function (set) {
      set = set.substr(1).substr(0, set.length - 2);
      var words = set.split('|');
      content = content.replace('{' + set + '}', words[Math.floor(Math.random() * words.length)].trim()).trim();
    });
    return content;
  }

  function extract_(array) {
    result = [];
    result = result.concat(extract_sentense(array[Math.floor(Math.random() * array.length)]));
    return result;
  }

  function extract_sentense(content) {
    var matches = content.match(/\[[а-яА-Я\w]*\]/g);
    if (matches){
      matches.forEach(function (code) {
        code = code.substr(1).substr(0, code.length - 2);
        content = content.replace('[' + code + ']', sets[code]).trim();
      });
    }

    matches = content.match(/\{([А-Яа-яЁё|\s\-\d]*)\}/g);
    if (matches) {
      matches.forEach(function (set) {
        set = set.substr(1).substr(0, set.length - 2);
        var words = set.split('|');
        content = content.replace('{' + set + '}', words[Math.floor(Math.random() * words.length)].trim()).trim();
      });
    }

    return content;
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  var madness = new MadNews();
  document.querySelector("#stage_a0 p").innerText = madness.getNew(1);
  document.querySelector("#stage_b0 p").innerText = madness.getNew(2);
  document.querySelector("#stage_c0 p").innerText = madness.getNew(3);
  document.querySelector("#stage_refresh a").addEventListener("click", function (e) {
    madness = new MadNews();
    document.querySelector("#stage_a0 p").innerText = madness.getNew(1);
    document.querySelector("#stage_b0 p").innerText = madness.getNew(2);
    document.querySelector("#stage_c0 p").innerText = madness.getNew(3);
    return false;
  });
});
