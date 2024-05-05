import React from "react";
import styles from "../page.module.css";

interface HeaderProps {
  NavVisible: any;
}


const Header: React.FC<HeaderProps> =({ NavVisible }) => {
  return (
    <header className={styles.header}>
      <div className="left-corner">
        <div>
          <button className={styles.navHeaderButton} type="button" onClick={() => NavVisible()}></button>
        </div>
        <div className={styles.h_column_1}>
          <p>Vexion</p>
        </div>
      </div>
      
      <div className={styles.h_column_2}>
        <div><p>Price</p></div>
        <div><p>Features</p></div>
        <div><ul>Integrations</ul></div>
        <div><p>Company</p></div>
      </div>

      <div className={styles.h_column_3}>
        <div><button content="Sign up"></button></div>
        <div><button content="Log in"></button></div>
      </div>
    </header>
  )
}

export default Header