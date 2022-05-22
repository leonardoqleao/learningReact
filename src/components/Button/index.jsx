import { Component } from "react/cjs/react.production.min";

export class Button extends Component{
    render(){
        const {clickButtonForChangePosts} = this.props
        return(
            <button onClick={clickButtonForChangePosts}>
                Clica aqui
            </button>
        );
    }
}