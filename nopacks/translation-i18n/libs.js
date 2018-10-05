import { I18n } from './i18n';

const EN = {
  noData: 'No data available',
};
const DE = {
  noData: 'Keine Daten verfügbar',
};
const FR = { };

/* eslint-disable */
export const i18n = (() => {
  /*
   * docs: https://github.com/fnando/i18n-js/blob/master/app/assets/javascripts/i18n.js
   * ↓↓↓
   */
  const ii18n = new I18n();
  const listLanguage = ['en', 'de', 'fr'];
  listLanguage.forEach((language) => {
    ii18n.translations[language] = (() => {
      switch (language.toLowerCase()) {
        case 'de':
          return DE;
        case 'fr':
          return FR;
        default:
          return EN;
      }
    })();
  });

  /**
   * hhd: overwrite
   */
  ii18n.missingTranslation = function(scope, options) {
    console.log('%c Oh my heavens! ', 'background: #222; color: #bada55');


    // console.log('missingTranslation', options, this.defaultLocale, scope);

    if (this.defaultLocale) {
      console.log('%c Oh my heavens! ', 'background: #222; color: #bada55', scope);
    //   // console.log('missingTranslation 222', this.defaultLocale, this.translateByDefaultLocale);
    //   // this.translateByDefaultLocale = true;
    //   console.log(this.translate(scope, {locale: this.defaultLocale}));
    //   // this.translate(scope, {locale: this.defaultLocale})
    //   return null;
    }

    //guess intended string
    if(this.missingBehaviour == 'guess'){
      //get only the last portion of the scope
      var s = scope.split('.').slice(-1)[0];
      //replace underscore with space && camelcase with space and lowercase letter
      return (this.missingTranslationPrefix.length > 0 ? this.missingTranslationPrefix : '') +
          s.replace('_',' ').replace(/([a-z])([A-Z])/g,
          function(match, p1, p2) {return p1 + ' ' + p2.toLowerCase()} );
    }

    var localeForTranslation = (options != null && options.locale != null) ? options.locale : this.currentLocale();
    var fullScope           = this.getFullScope(scope, options);
    var fullScopeWithLocale = [localeForTranslation, fullScope].join(this.defaultSeparator);

    return '[missing "' + fullScopeWithLocale + '" translation]';
  };



  // ii18n.missingTranslation = function () { return undefined; };
  //   // NẾU KO CÓ DATA BẰNG TIẾNG ANH

  // I18n.missingTranslation = function(scope, options) {
  //   //guess intended string
  //   if(this.missingBehaviour == 'guess'){
  //     //get only the last portion of the scope
  //     var s = scope.split('.').slice(-1)[0];
  //     //replace underscore with space && camelcase with space and lowercase letter
  //     return (this.missingTranslationPrefix.length > 0 ? this.missingTranslationPrefix : '') +
  //         s.replace('_',' ').replace(/([a-z])([A-Z])/g,
  //         function(match, p1, p2) {return p1 + ' ' + p2.toLowerCase()} );
  //   }

  //   var localeForTranslation = (options != null && options.locale != null) ? options.locale : this.currentLocale();
  //   var fullScope           = this.getFullScope(scope, options);
  //   var fullScopeWithLocale = [localeForTranslation, fullScope].join(this.defaultSeparator);

  //   return '[missing "' + fullScopeWithLocale + '" translation]';
  // };

  return ii18n;
})();
