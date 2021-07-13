import { Component } from "react";
import "./Goals.css";

interface GoalsProps {
  team?: string;
  numOfGoals: number;
}
class Goals extends Component<GoalsProps> {

    public constructor(props:GoalsProps) {
        super(props);
    }

    
  public render(): JSX.Element {
    return (
      <div className="Goals Box">
        <h2>Goals</h2>
        <p> { this.props.team && 'Team : '}  {this.props.team && this.props.team }   Goals : {this.props.numOfGoals}</p>
      </div>
    );
  }
}

export default Goals;
