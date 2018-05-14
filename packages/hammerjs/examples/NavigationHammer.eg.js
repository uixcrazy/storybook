import React from 'react';
import NavigationHammer from '../src/NavigationHammer';
// import '../../../core/stylesheets/normalize.css';

/* eslint-disable */
const TABS = [
  { id: 1111,   name: 'Chrysanthemum' },
  { id: 10125,  name: 'Ixora' },
  { id: 15423,  name: 'Wild Sunflower' },
  { id: 15422,  name: 'Bougainvillaea' },
  { id: 41420,  name: 'お肌をいたわる、心落ち着く香り' },
  { id: 1421,   name: 'お肌の調子を整える' },
  { id: 1422,   name: 'シェービングクリーム Dirty' },
  { id: 1015,   name: 'Rose' },
  { id: 1425,   name: 'ドリームクリーム Dream cream' },
];

const TABS2 = [
  { id: 1111,   name: 'Chrysanthemum' },
  { id: 10125,  name: 'Ixora' },
  { id: 15423,  name: 'Wild Sunflower' },
  { id: 15422,  name: 'Bougainvillaea' },
];

const NavigationHammerEg = () => (
  <div style={{ width: '100%', background: '#fff', boxSizing: 'border-box' }}>
    <NavigationHammer items={TABS}></NavigationHammer>
    <NavigationHammer items={TABS2}></NavigationHammer>
  </div>
);

export default NavigationHammerEg;

/* eslint-disable */
// class NavigationHammerEg extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tabActive: 0,
//       tabActive2: 0,
//     };
//     this.changeTab = this.changeTab.bind(this);
//     this.changeTab2 = this.changeTab2.bind(this);
//   }
//   // actionChangeItem(item) {
//   //   console.log('click item', item);
//   // }

//   //   <li className='tab-item'>
//   //   Abu Dhabi Securities Exchange
//   //   </li>
//   // <li className='tab-item'>
//   //   AEX
//   //   </li>
//   // <li className='tab-item'>
//   //   Artificial Intelligence
//   //   </li>
//   // <li className='tab-item'>
//   //   Australian Securities Exchange
//   // </li>

//   changeTab(index) {
//     console.log('change Tab', TABS[index]);
//     this.setState({
//       tabActive: index,
//     });
//   }

//   changeTab2(index) {
//     console.log('change Tab', TABS2[index]);
//     this.setState({
//       tabActive2: index,
//     });
//   }
//   //   height: '100%', padding: 10,
//   render() {
//     return (
//       <div style={{ width: '100%', background: '#fff', boxSizing: 'border-box' }}>
//         <NavigationHammer>
//           {
//             TABS.map((tab, index) => {
//               const isActive = TABS[this.state.tabActive].id === tab.id ? 'tab-active' : '';
//               const tabClass = `tab-item ${isActive}`;
//               return (
//                 <li
//                   key={tab.id}
//                   onClick={() => {
//                     this.changeTab(index);
//                   }}
//                   className={tabClass}
//                 >
//                   {tab.name}
//                 </li>
//               );
//             })
//           }
//         </NavigationHammer>

//         <NavigationHammer>
//           {
//             TABS2.map((tab, index) => {
//               const isActive = TABS[this.state.tabActive2].id === tab.id ? 'tab-active' : '';
//               const tabClass = `tab-item ${isActive}`;
//               return (
//                 <li
//                   key={tab.id}
//                   onClick={() => {
//                     this.changeTab2(index);
//                   }}
//                   className={tabClass}
//                 >
//                   {tab.name}
//                 </li>
//               );
//             })
//           }
//         </NavigationHammer>
//       </div>
//     );
//   }
// }

