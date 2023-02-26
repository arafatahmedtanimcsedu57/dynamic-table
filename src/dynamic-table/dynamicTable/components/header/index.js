import React from "react";
import PropTypes from "prop-types"

const Header = ({
    headerDefs
}) => {
    return(
        headerDefs ? 
            <thead>
                <tr>{
                    headerDefs.map((item,index) =>
                        <th key={`${index}_${item}`}>
                            {item}
                        </th>
                    )
                }</tr>
            </thead>
            :<></>
    )
}


Header.propTypes = {
    headerDefs : PropTypes.array.isRequired
}

export default Header;