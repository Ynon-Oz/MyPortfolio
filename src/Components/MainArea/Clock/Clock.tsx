import { Component } from "react";
import "./Clock.css";

interface ClockState {
	time:string;
}

class Clock extends Component<{}, ClockState> {

    private timerId = 0;
    //1. To init props & state 
    public constructor(props: {}) {
        super(props);
        this.state = {
			time : new Date().toLocaleTimeString()
        };
    }

    
    //2. render the ui
    public render(): JSX.Element {
        return (
            <div className="Clock Box">
                <h2>Clock</h2>
				<p>{this.state.time}</p>
            </div>
        );
    }

    //3. Componet is ready to use and
    // compomentDidMount for external and long
    public componentDidMount():void{
        
       this.timerId =  window.setInterval(()=>{
            const time = new Date().toLocaleTimeString();
            this.setState({time: time});
        },1000);
    }

    //4. not so popular...
    // props or stage has been changed
    public componentDidUpdate(){

    }

    //5. I'm going to remove this component from DOM
    // Any thing to kill .... Please welcome
    public componentWillUnmount(){
        clearInterval(this.timerId);
    }


}

export default Clock;
