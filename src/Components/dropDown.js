import React, { Component } from 'react';
import './dropDown.scss';

export default class dropDown extends Component {
    constructor(rops) {
        super();
        this.state = {
            displayMenu: false
        };
        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    }
    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
          document.removeEventListener('click', this.hideDropdownMenu);
        });
    
      }

    render() {

        const dropDownItems = this.props.data.map(data => {
            return <li key={data.id} onClick={()=>this.props.onChange(data)}>{data.symbol}</li>
        });
        return (
            <React.Fragment>
                
                <div className="dropDownContainer">
                    <div className="dropdown"  >
                    <div className="button" onClick={this.showDropdownMenu}>{this.props.label}</div>
                        {this.state.displayMenu ? (
                            <ul>
                                {dropDownItems}
                            </ul>
                        ) :
                            (
                                null
                            )
                        }

                    </div>
                </div>    

            </React.Fragment>

        );
    }
}