import React from 'react';
import './simple-css.css';

const SimpleCSS = () => (
  <div className="simplecss">
    <h3>Original images</h3>
    <img src="https://image.flaticon.com/icons/svg/861/861156.svg" width="100" height="100" alt="Bicycle free icon" title="Bicycle free icon" />
    <img src="https://image.flaticon.com/icons/svg/861/861191.svg" width="100" height="100" alt="Windmill free icon" title="Windmill free icon" />
    <img src="https://image.flaticon.com/icons/svg/861/861184.svg" width="100" height="100" alt="House free icon" title="House free icon" />
    <img src="https://image.flaticon.com/icons/svg/861/861185.svg" width="100" height="100" alt="Solar panel free icon" title="Solar panel free icon" />
    <img src="https://image.flaticon.com/icons/svg/861/861190.svg" width="100" height="100" alt="Water free icon" title="Water free icon" />

    <h3>Icon - color: <span style={{ color: 'maroon' }}>maroon</span></h3>
    <span className="icon icon-maroon icon-bicycle"></span>
    <span className="icon icon-maroon icon-windmill"></span>
    <span className="icon icon-maroon icon-house"></span>
    <span className="icon icon-maroon icon-solar-panel"></span>
    <span className="icon icon-maroon icon-water"></span>

    <h3>Icon - color: <span style={{ color: 'purple' }}>purple</span></h3>
    <span className="icon icon-purple icon-bicycle"></span>
    <span className="icon icon-purple icon-windmill"></span>
    <span className="icon icon-purple icon-house"></span>
    <span className="icon icon-purple icon-solar-panel"></span>
    <span className="icon icon-purple icon-water"></span>

    <h3>Icon - color: <span style={{ color: 'olive' }}>olive</span></h3>
    <span className="icon icon-olive icon-bicycle"></span>
    <span className="icon icon-olive icon-windmill"></span>
    <span className="icon icon-olive icon-house"></span>
    <span className="icon icon-olive icon-solar-panel"></span>
    <span className="icon icon-olive icon-water"></span>

    <h3>Icon - color: <span style={{ color: 'cyan' }}>gradient</span></h3>
    <span className="icon icon-gradient icon-bicycle"></span>
    <span className="icon icon-gradient icon-windmill"></span>
    <span className="icon icon-gradient icon-house"></span>
    <span className="icon icon-gradient icon-solar-panel"></span>
    <span className="icon icon-gradient icon-water"></span>

    <h3>Note: There is not affect M.Edge vs IE11</h3>
    <h3>We can use SVG Inject to HTML</h3>
    {/* eslint-disable */}
    <a href="https://ux.shopify.com/responsive-multicolor-svg-icons-b9068594b97b" target="_blank">Tutorial on Medium</a>
    <br />
    <a href="https://codepen.io/beefchimi/pen/mOvrPL" target="_blank">Single Color SVG Icons</a>
    <br />
    <a href="https://codepen.io/beefchimi/pen/ObdGdq" target="_blank">Multicolor SVG Icons</a>
    {/* eslint-enable */}

  </div>
);
export default SimpleCSS;

// import React from 'react';
// const HelloWorld = ({name}) => (
//  <div>{`Hi ${name}`}</div>

// <React.Fragment> </React.Fragment>

// );
// export default HelloWorld;
