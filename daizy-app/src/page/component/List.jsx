import { Link } from "react-router-dom"
import { useState } from "react";
import useDeletePemasukan from "../../hooks/useDeletePemasukan";
import useDeletePengeluaran from "../../hooks/useDeletePengeluaran";

export default function List(props){
    const {deletePemasukan, loadingDeletePemasukan} = useDeletePemasukan()
    const {deletePengeluaran, loadingDelatePengeluaran} = useDeletePengeluaran()
    const {item, filter} = props
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    // console.log("halo")

    const handleHapusPemasukan = () => {
        // console.log("nyew", item.id)
        deletePemasukan({variables: {
            id: item.id
        }})
    }

    const handleHapusPengeluaran = () => {
        console.log("hem", item)
        deletePengeluaran({variables:{
            id: item.id
        }})
    }
    console.log("yo", item)
    return(
        <section className="item">
            {filter==='pemasukan' && 
            <div 
            // to={{pathname: `/editPemasukan/${item.id}`, param: item}} 
            className="list" style={{backgroundColor: '#ACB5E9'}}>
                <div>{item.nama}</div>
                <div>{item.tanggal}</div>
            </div>
            }
            {filter==='pengeluaran' && 
            <div className="list" style={{backgroundColor: '#F5ACA8'}}>
                <div>{item.nama}</div>
                <div>{item.tanggal}</div>
                <div>{item.jenis}</div>
            </div>}
            {filter==='rencana' && 
            <div className="list" style={{backgroundColor: '#FBC3A5'}}>
                <div>{item.nama}</div>
                <div>{item.tanggal}</div>
            </div>}
            {filter==='pemasukan' &&
                <div className="delete-button" onClick={handleHapusPemasukan}>Hapus</div>
            }
            {filter==='pengeluaran' &&
                <div className="delete-button" onClick={handleHapusPengeluaran}>Hapus</div>
            }
        </section>
    )
}