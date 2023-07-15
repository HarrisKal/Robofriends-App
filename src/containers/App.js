import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBar from "../components/SearchBar";
import Scroll from "../components/scroll"
import Robots from "../robots";
 
class App extends Component{
    constructor() {
        super()
        this.state = {
            robots: Robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    
    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        
        return <div className="tc">
            <h1 className="f1">Robofriends</h1>
            <SearchBar searchChange={this.onSearchChange}/>
            <Scroll>
                <CardList robots={filteredRobots}/>
            </Scroll>
        </div>
    }
}

export default App;