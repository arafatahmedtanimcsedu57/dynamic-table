import React from "react";
import PropTypes from "prop-types";

import { Header } from "./components";

const getHeaderDefs = (columnDefs) => 
    columnDefs.length>0?
        columnDefs.map(item=>
            item.label? item.label : item.field
        )
        :null

const DynamicTable = ({
    columnDefs,
    rowData
}) => {
    const headerDefs= getHeaderDefs(columnDefs);

    return(
        <div>
            <table>
                <Header headerDefs={headerDefs}/>
            </table>
        </div>
    )
}

DynamicTable.propTypes = {
    columnDefs: PropTypes.array.isRequired,
    rowData: PropTypes.array.isRequired
}

export default DynamicTable;