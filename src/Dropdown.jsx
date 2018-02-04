import React, { Component } from 'react';

class Dropdown extends Component {
    constructor(props){
        super(props);
        this.state = { isOpened: false,
                       isDess:true
                    };
    }

    toggleState(){
        this.setState({ isOpened: !this.state.isOpened });
        this.setState({ isDess: !this.state.isDess });
    }

    render(){
        console.log('is isOpened', this.state.isOpened );
        console.log('is isDess', this.state.isDess );
        let dropdownText;
        let styled;
        if (this.state.isOpened) {
            dropdownText = <div>opened and dropped</div>
        }
        if (this.state.isDess) {
            styled = <div>ffdsgdsgfsdf</div>
        }
        return (
            <div onClick={this.toggleState.bind(this)}> It is Dropdown baby
                {dropdownText}
                {styled}
             </div>

        );
    }
}

export default Dropdown;
