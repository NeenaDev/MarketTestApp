import React, { Component } from 'react';
import MarketTable from './marketTable';
import Dropdown from '../Components/dropDown'
import * as actions from '../Actions/index';
import { connect } from 'react-redux';
import './marketPage.scss'

class marketPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            marketTableData: [],
            marketDropdownListData: [],
            
        };
    }

    handleRowDel(data) {
        // For adding item which is deleted from table
        this.state.marketDropdownListData.push(data);
        this.setState(this.state.marketDropdownListData);

        var index = this.state.marketTableData.indexOf(data);
        this.state.marketTableData.splice(index, 1);
        this.setState(this.state.marketTableData);

    };

    handleAddEvent(item) {
        
        let selectedSymbol = item;
  
        this.state.marketTableData.push(selectedSymbol);
        this.setState(this.state.marketTableData);
          const removeSymbolFromDropdown = this.state.marketDropdownListData.filter(obj => {
            return obj.symbol !== selectedSymbol.symbol
        });
        this.setState({marketDropdownListData: removeSymbolFromDropdown});
    }

    componentDidMount() {
        this.props.getMarketData();

    }
    componentDidUpdate(nextProps) {
        
        const { marketData } = this.props

        if (nextProps.marketData !== marketData) {
          
            if (marketData) {
                const totalNumOfRecords = marketData.length ;  // Total no of records to be fetch.
                const numOfEntriesInTable = 5;
                let marketTableData = marketData.slice(0, numOfEntriesInTable);
                let marketDropdownListData = marketData.slice(numOfEntriesInTable, totalNumOfRecords);
                this.setState({
                    marketTableData: marketTableData,
                    marketDropdownListData: marketDropdownListData
                })
            }
        }
    }
    render() {
       
        return (
            <div className="wrapper">
                    <div className="header"></div>
                    <div className="content">
                    <Dropdown
                        data={this.state.marketDropdownListData}
                        label={"Select Symbol"}
                        onChange={this.handleAddEvent.bind(this)}
                    />
                    <MarketTable
                        onRowDel={this.handleRowDel.bind(this)}
                        data={this.state.marketTableData}
                    />
                </div>    
            </div>
        );

    }

}
const mapStateToProps = state => {
    return {
        marketData: state.marketData.marketQuotes,
       // marketQuotes: state.marketData.marketQuotes
    };
}
const mapDispatchToProps = dispatch => {
    return {
        getMarketData: () => dispatch(actions.getMarketData()),
        getMarketQuotes: (ids) => dispatch(actions.getMarketQuotes())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(marketPage);
