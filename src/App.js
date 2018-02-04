import React, { Component } from 'react';
import Header from './header';
import Dropdown from './Dropdown';
import RegistrationForm from './RegistrationForm';

const menu = [
    {
        link: '/articles',
        label: 'Articles'
    },
    {
        link: '/contacts',
        label:'Contacts'
    },
    {
        link: '/posts',
        label:'Posts'
    }
];

class App extends Component {
    render(){
        return(
            <div>
                {/* <Dropdown/> */}
                {/* <Header items={menu} /> */}
                <RegistrationForm />
            </div>
        );
    }
}

export default App;
