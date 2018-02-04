import React, { Component } from 'react';
import Header from './header';

var menu = 'sfag';

class App extends Component {
    render(){
        return(
            <div>
                <Header itemss={menu} />
            </div>
        );
    }
}

export default App;
