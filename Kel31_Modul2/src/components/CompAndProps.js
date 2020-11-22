import React, { Component } from "react";
import "../App.css";
import { notification } from "antd";
import "antd/dist/antd.css";
import Select from "../elements/Select";
import picattt from "../assets/picattt.jpg"

//function components
function Square(props) {
  const onClick = (type) => {
    notification[type]({
      message: "Hello There",
    });
  };
  return (
    <div>
      <div className="img-wrap">
        <img src={props.img} className="picattt"/>
      </div>
      <div style={{marginTop:"10px"}}>
      <h2 style={{textAlign:"center" }}>{props.nama}</h2>
      <p style={{textAlign:"center"}}>{props.nim}</p>
      </div>
      <Select background="#59015C">
        <option>Kelas A</option>
        <option>Kelas B</option>
      </Select>
    </div>
  );
}

//class components
export default class CompAndProps extends Component {
  render() {
    const background = {
      backgroundColor: this.props.bgcolor,
    };
    return (
      <div className="wrapper">
        <div className="User-info" style={background}>
          <Square nama="Heidi Amellie" nim="21120117120022" img={picattt} />
        </div>
        <div className="User-info" style={background}>
          <Square nama="Arya Naradana" nim="211201140024" img="https://cdn0-production-images-kly.akamaized.net/198Y20QPPyTtGe32Cn2MtSBv1pc=/640x640/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2066696/original/078900800_1523250323-1._Zayn_Malik_-_KEVIN_WINTER__GETTY_IMAGES_NORTH_AMERICA__AFP.jpg" />
        </div>
      </div>
    );
  }
}
