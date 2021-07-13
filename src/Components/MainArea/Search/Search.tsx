import { Component, SyntheticEvent } from "react";
import "./Search.css";

interface SearchState {
 txt:string;
}

class Search extends Component<{}, SearchState> {

    public constructor(props: {}) {
        super(props);
        this.state = {
			txt:''
        };
    }

    private setValue= (args: SyntheticEvent)=>{
        // args - info about the event
        // args.target - the tag that raised the event
        const value = (args.target as HTMLInputElement).value;
        this.setState({txt:value});
        console.log(args);
    }

    private search = ()=> {
        alert('Going to search : '+this.state.txt);
    }

    private clear = ()=> {
        this.setState({txt:''});
    }



    public render(): JSX.Element {
        return (
            <div className="Search Box">
                <h2>Search</h2>
                
				<input type="text" onChange={this.setValue} value={this.state.txt}/>
                <p>{this.state.txt}</p>
                <button onClick={this.search}>Search</button>
                <button onClick={this.clear}>Clear</button>
            </div>
        );
    }
}

export default Search;
