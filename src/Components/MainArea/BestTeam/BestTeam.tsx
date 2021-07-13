import { Component } from "react";
import "./BestTeam.css";

interface BestTeamState {
	team:string;
}

class BestTeam extends Component<{}, BestTeamState> {

    public constructor(props: {}) {
        super(props);
        this.state = {
			team:'HTA'
        };
    }

    private updateTeam=()=>{
        const res = this.state.team;
        {res==='FCB'?this.setState({'team': 'HTA'}):this.setState({'team': 'FCB'})}
       // this.setState({'team': 'FCB'});
    }

    public render(): JSX.Element {
        return (
            <div className="BestTeam Box">
				<h2>Best Team</h2>
                <button onClick={this.updateTeam}>Yalla</button>
                <p>{this.state.team}</p>
            </div>
        );
    }
}

export default BestTeam;
