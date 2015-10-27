// Custom Dutch Moment.js Locale File
// Based on https://github.com/moment/moment/blob/develop/locale/nl.js

moment.locale('nl', {
  months : 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
  monthsShort : 'jan._feb._mar._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
  weekdays : 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
  weekdaysShort : 'zo._ma._di._wo._do._vr._za.'.split('_'),
  weekdaysMin : 'Zo_Ma_Di_Wo_Do_Vr_Za'.split('_'),
  longDateFormat : {
    LT : 'HH:mm',
    LTS : 'HH:mm:ss',
    L : 'DD/MM/YYYY',
    LL : 'D MMMM YYYY',
    LLL : 'D MMMM YYYY HH:mm',
    LLLL : 'dddd D MMMM YYYY HH:mm'
  },
  calendar : {
    sameDay: '[Vandaag om] LT',
    nextDay: '[Morgen om] LT',
    nextWeek: 'dddd [om] LT',
    lastDay: '[Gisteren om] LT',
    lastWeek: 'dddd [om] LT',
    sameElse: 'L'
  },
  relativeTime : {
    future : 'over %s',
    past : '%s geleden',
    s : 'een paar seconden',
    m : 'een minuut',
    mm : '%d minuten',
    h : 'een uur',
    hh : '%d uur',
    d : 'een dag',
    dd : '%d dagen',
    M : 'een maand',
    MM : '%d maanden',
    y : 'een jaar',
    yy : '%d jaar'
  },
  ordinalParse: /\d{1,2}(er|)/,
  ordinal : function (number) {
    return number + (number === 1 ? 'er' : '');
  },
  week : {
    dow : 1,
    doy : 4
  }
});
