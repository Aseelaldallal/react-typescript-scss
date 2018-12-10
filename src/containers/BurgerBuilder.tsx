import * as React from "react";
import Burger from "../components/Burger/Burger";


class BurgerBuilder extends React.Component {

    state = {
        ingredients: {
            bacon: 1,
            cheese: 2, 
            meat: 2,
            salad: 1
        }
    }
    render() {
        return(
            <>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Controls</div>
            </>
        );
    }
}

export default BurgerBuilder;