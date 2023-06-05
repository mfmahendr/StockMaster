import React from "react";

import SalesDataList from "./SalesDataList";

function SalesTableBody({ salesData, searchValue }){
    const filteredSalesData = salesData.filter((data) => {
        return (data.tanggal.toString().toLowerCase().includes(searchValue.toLowerCase()) ||
            data.keterangan.toLowerCase().includes(searchValue.toLowerCase())
        );
    });

    return (
        
        <tbody >
            {filteredSalesData.map((sales, index) => {
                return (
                    <SalesDataList key={sales._id} salesData={sales} count={index} updateLink={`/update-data/update/${sales._id}`}/>
                );
            })}
        </tbody>
    );
}

export default SalesTableBody;