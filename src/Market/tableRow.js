import React from 'react';
import { FaTrashAlt } from "react-icons/fa";

export default class tableRow extends React.Component {
    onDeleteEvent() {
        this.props.onDeleteEvent(this.props.data);

    }
    render() {
        const {data,disabled } = this.props;
        
        return (
            <tr className="eachRow">
                <TableCell  cellData={{
                    "type": "rank",
                    value: (data.cmc_rank !== null) ? data.cmc_rank : "N/A",
                    id: data.id
                }} />
                <TableCell  cellData={{
                    type: "symbol",
                    value: data.symbol,
                    id: data.id
                }} />
                <TableCell cellData={{
                    type: "price",
                    value: data.quote.USD.price,
                    id: data.id
                }} />
                <td className="deleteCell">
                    <FaTrashAlt className={`deleteBtn ${disabled && "disableDeleteBtn"}`} onClick={this.onDeleteEvent.bind(this)} size={17} color={"#3f83ab"}/>
                </td>
            </tr>
        );

    }

}
export class TableCell extends React.Component {

    render() {
        return (
            <td>
                <div  id={this.props.cellData.id} >{this.props.cellData.value}</div>
            </td>
        );

    }

}