import { Component } from "react";
import "./Assists.css";

interface AssistsProps {
    team:string;
	numOfAssists:number
}

class Assists extends Component<AssistsProps> {

    public render(): JSX.Element {
        return (
            <div className="Assists Box">
                <h2>Assists</h2>
				<p>{this.props.team} - {this.props.numOfAssists}</p>
            </div>
        );
    }
}

export default Assists;
