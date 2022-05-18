import { Link } from "react-router-dom"
import { useState } from "react";
import useDeletePemasukan from "../../hooks/useDeletePemasukan";
import useDeletePengeluaran from "../../hooks/useDeletePengeluaran";
import useDeleteRencana from "../../hooks/useDeleteRencana";

import EditPemasukan from "./EditPemasukan";
import EditPengeluaran from "./EditPengeluaran";
import EditRencana from "./EditRencana";

export default function List(props){
    const {deletePemasukan, loadingDeletePemasukan} = useDeletePemasukan()
    const {deletePengeluaran, loadingDelatePengeluaran} = useDeletePengeluaran()
    const {deleteRencana, loadingDeleteRencana} = useDeleteRencana()
    const {item, filter} = props
    const [parameterPemasukan, setParamPemasukan] = useState({id: 0, nama: "", nominal: 0, tanggal: "", keterangan: ""})
    const [parameterPengeluaran, setParamPengeluaran] = useState({id: 0, nama: "", nominal: 0,jenis:"", tanggal: "", keterangan: ""})
    const [parameterRencana, setParamRencana] = useState({id: 0, nama: "", nominal: 0, bulan: "", keterangan: ""})

    const [show, setShow] = useState(false);

    const handleClose = () => {
        console.log("halo")
        setParamPemasukan({id: 0, nama: "", nominal: 0, tanggal: "", keterangan: ""})
        setShow(false)
    };
    const handleShowPemasukan = () => {
        setShow(true)
        setParamPemasukan({
            id: item.id,
            nama: item.nama,
            nominal: item.nominal,
            tanggal: item.tanggal,
            keterangan: item.keterangan
        })
    };
    const handleShowPengeluaran = () => {
        setShow(true)
        setParamPengeluaran({
            id: item.id,
            nama: item.nama,
            nominal: item.nominal,
            jenis: item.jenis,
            tanggal: item.tanggal,
            keterangan: item.keterangan
        })
    };
    const handleShowRencana = () => {
        setShow(true)
        setParamRencana({
            id: item.id,
            nama: item.nama,
            nominal: item.nominal,
            bulan: item.bulan,
            keterangan: item.keterangan
        })
    };
    // console.log("halo")

    const handleHapusPemasukan = () => {
        // console.log("nyew", item.id)
        deletePemasukan({variables: {
            id: item.id
        }})
    }

    const handleHapusPengeluaran = () => {
        // console.log("hem", item)
        deletePengeluaran({variables:{
            id: item.id
        }})
    }
    const handleHapusRencana = () => {
        console.log("hem", item)
        deleteRencana({variables:{
            id: item.id
        }})
    }
    console.log("yo", item)
    return(
        <>
            {show===false &&
                <section className="item">
                    {filter==='pemasukan' && 
                    <div onClick={handleShowPemasukan}
                    // to={{pathname: `/editPemasukan/${item.id}`, param: item}} 
                    className="list" style={{backgroundColor: '#ACB5E9'}}>
                        <div>{item.nama}</div>
                        <div>{item.tanggal}</div>
                    </div>
                    }
                    {filter==='pengeluaran' && 
                    <div onClick={handleShowPengeluaran} className="list" style={{backgroundColor: '#F5ACA8'}}>
                        <div>{item.nama}</div>
                        <div>{item.tanggal}</div>
                        <div>{item.jenis}</div>
                    </div>}
                    {filter==='rencana' && 
                    <div onClick={handleShowRencana} className="list" style={{backgroundColor: '#FBC3A5'}}>
                        <div>{item.nama}</div>
                        <div>{item.tanggal}</div>
                    </div>}
                    {filter==='pemasukan' &&
                        <div className="delete-button" onClick={handleHapusPemasukan}>Hapus</div>
                    }
                    {filter==='pengeluaran' &&
                        <div className="delete-button" onClick={handleHapusPengeluaran}>Hapus</div>
                    }
                    {filter==='rencana' &&
                        <div className="delete-button" onClick={handleHapusRencana}>Hapus</div>
                    }
                </section>
            }
            {show===true && 
                <div>
                    <div>
                        {filter==='pemasukan' && <EditPemasukan item={parameterPemasukan}/>} 
                        {filter==='pengeluaran' && <EditPengeluaran item={parameterPengeluaran}/>}
                        {filter==='rencana' && <EditRencana item={parameterRencana}/>}
                    </div>
                    <div onClick={handleClose} className="done-edit-button">Selesai</div>
                </div>
            }
        </>
        
    )
}