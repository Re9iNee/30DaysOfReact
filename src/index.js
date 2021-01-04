import React from "react";
import ReactDOM from "react-dom";
class Car extends React.Component {
    constructor(props) {
        // 1
        super(props);
        this.state = {favouriteColor: "blue"};
    }
    render(){
        // 3
        return <h1>Hello World, {this.state.favouriteColor}</h1>
    }
    static getDerivedStateFromProps(props, state) {
        // 2
        return {favouriteColor: "AME"}
    }
    componentDidMount(){
        // 4
        console.log("This won't run? ")
        setTimeout(() => {
            this.setState({favouriteColor: "yellow"})
        }, 1000)
    }
}
ReactDOM.render(<Car favCol="coral"/>, document.getElementById("root"))