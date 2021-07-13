import { Component, SyntheticEvent } from "react";
import "./MakeSound.css";

// function MakeSound(): JSX.Element {

//     function makeSound(args: SyntheticEvent) {
//         alert('Dalle Messi!');
//         console.log(args);
//     }


//     return (
//         <div className="MakeSound Box">
// 			<h2>Sound</h2>
//             <button onClick={makeSound}>Yalla</button>
//         </div>
//     );


// }


class MakeSound extends Component{

    private makeSound(args: SyntheticEvent) {
        alert('Dalle Messi!');
        console.log(args);
    }
    
    public render():JSX.Element {
        return (
          <div className="MakeSound Box">
            <h2>Sound</h2>
            <button onClick={this.makeSound}>Yalla</button>
          </div>
        );
    }
}

export default MakeSound;
