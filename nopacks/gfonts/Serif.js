import React from 'react';
import { lorem01 } from './lorem';
import attachRawCss from '../../utils/attachRawCss';
import serif from '!!raw-loader!./serif.css'; // eslint-disable-line

const Serif = () => (
  <div>
    <h1>PT Serif</h1>
    <div className="pt" dangerouslySetInnerHTML={{ __html: lorem01 }} />
    <h1>Noto Serif</h1>
    <div className="noto" dangerouslySetInnerHTML={{ __html: lorem01 }} />
    <h1>Tinos ***</h1>
    <div className="tinos" dangerouslySetInnerHTML={{ __html: lorem01 }} />
  </div>
);

export default attachRawCss(serif, 'serif', Serif);
