'use client';
import React, { useEffect, useState, FC } from 'react';
import Image from "next/image";

import Header from "./pageElements/header";
import LeftMenu from "./leftMenu/leftMenu";
import TaskWindow from "./pageElements/mainContent/taskWindow";
import { DatePicker } from './DatePicker/DatePicker';

import styles from "./page.module.css";

import store from "./redux/store";
import { Provider } from "react-redux";

export default function Home() {

  const [isOpen, SetIsOpen] = useState(false);

  const handleToggleLeftMenu = () => {
    SetIsOpen(!isOpen)
  }
  
  return (
    <Provider store={store}>
      <main className={styles.main}>
        { 
          isOpen && <LeftMenu OnClose={() => SetIsOpen(false)} ></LeftMenu>
        }
        <Header NavVisible={() => handleToggleLeftMenu()}></Header>
        <TaskWindow/>
        <DatePicker/>
      </main>
    </Provider>
  );
}