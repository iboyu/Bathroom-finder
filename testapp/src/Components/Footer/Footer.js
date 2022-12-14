import React from "react";
import "./Footer.css";
import {AiFillHome} from 'react-icons/ai'
import {BsFillMapFill, BsGear} from 'react-icons/bs'
import {FaToilet} from 'react-icons/fa'
import {BiRefresh} from 'react-icons/bi'
import { useState } from "react";

function Footer(props) {

  const [currentButton, setCurrentButton] = useState(1);

    function onOne() {
        props.setCurrentScreen("one");
        setCurrentButton(1);
    }

    function onTwo() {
        props.setCurrentScreen("two");
        setCurrentButton(2);
    }

    function onThree() {
        props.setCurrentScreen("three");
        setCurrentButton(3);
    }

    function onFour() {
        props.setCurrentScreen("four");
        setCurrentButton(4);
    }

  return (
    <div className="footer">
      <button className="footerButton" onClick={onOne} style={{backgroundColor: currentButton == 1 ? "#848484" : "#eeeeee"}}><BsFillMapFill/></button>
      <button className="footerButton" onClick={onTwo} style={{backgroundColor: currentButton == 2 ? "#848484" : "#eeeeee"}}><FaToilet/></button>
      <button className="footerButton" onClick={onThree} style={{backgroundColor: currentButton == 3 ? "#848484" : "#eeeeee"}}><BiRefresh/></button>
    </div>
  );
}

export default Footer;
