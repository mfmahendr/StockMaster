import React from "react";

function SaleTableHead(){

    return (
        <thead className="columnheader">
            <tr>
                <th rowSpan="1">ID</th>
                <th rowSpan="2">Tanggal</th>
                <th rowSpan="3">Keterangan</th>
                <th rowSpan="2">Jumlah Penjualan</th>
            </tr>
        </thead>
    );
}

export default SaleTableHead;