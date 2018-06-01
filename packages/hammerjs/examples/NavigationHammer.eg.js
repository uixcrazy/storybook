import React from 'react';
import makeTabs from '../src/NavigationHammer';

/* eslint-disable */
const TABS = [
  {
    id: 1111,
    label: 'Chrysanthemum',
    content: (<span style={{ color: '#000' }}>Content is: Chrysanthemum</span>),
  },
  {
    id: 10125,
    label: 'Ixora',
    content: (<span>Content is: Ixora</span>)
  },
  {
    id: 15423,
    label: 'Wild Sunflower' },
  {
    id: 15422,
    label: 'Bougainvillaea' },
  {
    id: 41420,
    label: 'お肌をいたわる、心落ち着く香り' },
  {
    id: 1421,
    label: 'お肌の調子を整える' },
  {
    id: 1422,
    label: 'シェービングクリーム Dirty' },
  {
    id: 1015,
    label: 'Rose' },
  {
    id: 1425,
    label: 'ドリームクリーム Dream cream' },
];

const TABS2 = [
  { id: 1111,   label: 'Chrysanthemum' },
  { id: 10125,  label: 'Ixora' },
  { id: 15423,  label: 'Wild Sunflower' },
  { id: 15422,  label: 'Bougainvillaea' },
];

/* eslint-enable */
const Content = ({ content }) => content || "loading... ⤑ that's a lie";
const NavigationHammer = makeTabs(Content);
const NavigationHammerEg = () => (
  <React.Fragment>
    <NavigationHammer items={TABS} />
    <NavigationHammer items={TABS2} />
  </React.Fragment>
);

export default NavigationHammerEg;
