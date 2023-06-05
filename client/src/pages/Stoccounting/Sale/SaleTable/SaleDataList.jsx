import React from "react";

import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useSelector} from 'react-redux'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'; 

import axios from 'axios';


function SaleDataList({salesData, count, updateLink}){
    
    const navigate = useNavigate()

    useEffect(() => {
        console.log(salesData)
    })

    const onSubmit = () => {
        if (window.confirm("Delete?")) {
            axios
                .delete(`api/penjualan/${salesData._id}`)
                .then(function (response) {
                    if (response.status === 200) {
                        toast.success("Berhasil delete data pangkalan")
                        refreshPage()
                        navigate('/penjualan-lpg')
                    } else {
                        toast.error("Error")
                    }
                })
                .catch(function (error) {
                    toast.error(error);
                });
        }
    }

    const refreshPage = () => {
        window.location.reload();
    }
    
    return (
        <tr key={salesData._id}>
            <td>{count}</td>
            <td>{salesData.tgl_jual}</td>
            <td>{salesData.keterangan}</td>
            <td>{salesData.jml_jual}</td>
            <td>
                <form action="/penjualan" method="POST" >
                    <a href={updateLink} className="btnx border-shadow">
                        <span className="text-gradient">
                            <FontAwesomeIcon icon={faPencilAlt} color="blue"/>
                        </span>
                    </a>
                </form>
            </td>
            <td>
                <form action="/penjualan" method="DELETE" >
                    <div className="btnx border-shadow" data-id={salesData._id} onClick={()=>{ onSubmit(); }}>
                        <span className="text-gradient">
                            <FontAwesomeIcon icon={faTrash} color="maroon"/>
                        </span>
                    </div>
                </form>
            </td>
        </tr>
    );
}

export default SaleDataList;