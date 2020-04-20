import React, { Component } from 'react';
import TableRow from './tableRow';


export default class marketTable extends Component {
    constructor(props) {

        super();
        this.state = {
            sort: {
                column: null,
                direction: 'desc',
            }
        };
    }

    onSort = (column) => (e) => {
        const direction = this.state.sort.column ? (this.state.sort.direction === 'asc' ? 'desc' : 'asc') : 'desc';
        const sortedData = this.props.data.sort((a, b) => {
            if (column === 'rank') {
                return a.cmc_rank - b.cmc_rank;
            } else {
                return a.price - b.price;
            }
        });

        if (direction === 'desc') {
            sortedData.reverse();
        }

        this.setState({
            data: sortedData,
            sort: {
                column,
                direction,
            }
        });
    };
    setArrow = (column) => {

        let className = 'sort-direction';
        if (this.state.sort.column === column) {
            className += this.state.sort.direction === 'asc' ? ' asc' : ' desc';
        }

        return className;
    };

    render() {

        const { data, onRowDel } = this.props;
        
        const marketDataRows = data.map(obj => {
            return <TableRow 
                    data={obj} 
                    key={obj.id} 
                    onDeleteEvent={onRowDel.bind(this)} 
                    disabled={(data.length === 1 ? true : false)}
                />
        });

        return (
            <React.Fragment>

                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th className={this.setArrow('rank')} onClick={this.onSort('rank')}>CMC Rank
                            </th>
                            <th>Symbol</th>
                            <th className={this.setArrow('price')} onClick={this.onSort('price')}>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {marketDataRows}

                    </tbody>

                </table>

            </React.Fragment>
        )
    }
}


