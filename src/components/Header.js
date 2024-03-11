//* Harici bir dosya icersinde olusturulan bir component
//* export default ile proje icerisinde herhangi bir yerde
//* kullanima kullanima acimiş olur. Kullanmak icin hedef
//* dosyada import .... from "./..." ile import yapmak yeterlidir.

import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Header</h1>
        <h3 className="sub-header">New Sub Header</h3>
      </header>
    );
  }
}

export default Header;
