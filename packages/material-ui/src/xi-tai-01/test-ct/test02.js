import React from 'react';
import attachRawCss from '../../../../../utils/attachRawCss';
import styles from '!!raw-loader!./table.css'; // eslint-disable-line

const Table = () => [...Array(10).keys()].map(no => (
  <table cellSpacing="0" className="table" key={no}>
    <colgroup>
      <col style={{ width: '35%' }} />
    </colgroup>
    <tbody>
      <tr>
        <td rel="publisher_vn">Công ty phát hành</td>
        <td>
          <a href="/nha-nam.html">Nhã Nam -----{no}-----</a>
        </td>
      </tr>
      <tr>
        <td rel="author">Tác giả</td>
        <td>
            Luis Sepulveda
        </td>
      </tr>
      <tr>
        <td rel="publication_date">Ngày xuất bản</td>
        <td>
            11-2017
        </td>
      </tr>
      <tr>
        <td rel="dimensions">Kích thước</td>
        <td>
            14 x 20.5 cm
        </td>
      </tr>
      <tr>
        <td rel="manufacturer_book_vn">Nhà xuất bản</td>
        <td>
            Nhà Xuất Bản Hội Nhà Văn
        </td>
      </tr>
      <tr>
        <td rel="book_cover">Loại bìa</td>
        <td>
            Bìa mềm
        </td>
      </tr>
      <tr>
        <td rel="number_of_page">Số trang</td>
        <td>
            139
        </td>
      </tr>
      <tr>
        <td rel="sku">SKU</td>
        <td>
            9482129812800
        </td>
      </tr>
    </tbody>
  </table>
));

export default attachRawCss(styles, 'table test02', Table);
