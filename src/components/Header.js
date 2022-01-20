import React from 'react';

import logo from '../images/cbf_doc_ock_208_jalonso.jpg';

function Header(){
    return(
    <header className="nav-container">
      <div className="imglogo"><img src={logo} alt="" /></div>

      <ul className="containerul">
        <li><a href="">Rasist</a></li>
        <li><a href="">Classist</a></li>
        <li><a href="">Childlabor</a></li>
        <li><a href="">Ableist</a></li>
        <li><a href="">Rasist</a></li>
        <li><a href="">Lie</a></li>
      </ul>
    </header>
    )
}

export default Header;
