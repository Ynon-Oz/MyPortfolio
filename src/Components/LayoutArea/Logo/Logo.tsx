import "./Logo.css";
import logo_image from "../../../Assets/Images/ball.png";
import { Component } from "react";
// function Logo(): JSX.Element {
//     return (
//         <div className="Logo">
// 			<img src={logo_image} alt="Dalle Leo" />
//         </div>
//     );
// }

class Logo extends Component {
  public render(): JSX.Element {
    return (
      <div className="Logo">
        <img src={logo_image} alt="Dalle Leo" />
      </div>
    );
  }
}

export default Logo;
