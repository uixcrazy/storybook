import React from 'react';
import { i18n } from './libs';
import './Basic.css';

const BasicEg = () => {
  i18n.locale = 'fr';
  i18n.defaultLocale = 'de';
  // i18n.missingBehaviour='guess';
  return (
    <div>
      <h3>Normal</h3>
      <p>FR: {i18n.t('noData')}</p>
      <p>FR: {i18n.t('noData2')}</p>
      <p>FR: {i18n.t('noData2')}</p>
      {/* <p>{i18n.t('noData', {locale: "en"})}</p>
      <p>{i18n.t('noData', {locale: "de"})}</p>
      <p>FR: {i18n.t('noData', {locale: "fr"})}</p> */}

      <h3>Default Value</h3>
      <p>FR: {i18n.t('noData', { defaultValue: 'Enter a default message' })}</p>
      <p>FR: {i18n.t('noData', { defaultValue: i18n.t('noData', { locale: 'en' }) })}</p>
      <h3>New Way</h3>

    </div>
  )
}

export default BasicEg;
