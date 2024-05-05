'use client';
import React from "react";

import { useAppSelector, useAppDispatch } from '../redux/hooks'

import styles from "./leftmenu.module.css";

interface DrawerProps {
  OnClose: any;
}


const LeftMenu: React.FC<DrawerProps> = ({ OnClose }) => {

  return (
    <nav id={styles.nav}>
      <div className={styles.navContent}>
        <div className={styles.navHeader}>
          <div>
            <button className={styles.navHeaderButton} type="button" onClick={OnClose}>
            </button>
          </div>
          <div>
            <span>Logo</span>
          </div>
        </div>
        <div className={styles.navInnerContent}>
          <div className={styles.sections}>
            <div>
              <p>Главная</p>
              <p>Мои задачи</p>
              <p>Календарь</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LeftMenu;