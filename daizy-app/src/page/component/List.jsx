import { Link } from "react-router-dom"
import { useState } from "react";
import useDeletePemasukan from "../../hooks/useDeletePemasukan";

export default function List(props){
    const {deletePemasukan, loadingDelete} = useDeletePemasukan()
    const {item, filter} = props
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    console.log("halo")

    const handleHapus = () => {
        console.log("nyew", item.id)
        deletePemasukan({variables: {
            id: item.id
        }})
    }
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
            </div>}
            {filter==='rencana' && 
            <div className="list" style={{backgroundColor: '#FBC3A5'}}>
                <div>{item.nama}</div>
                <div>{item.tanggal}</div>
            </div>}
            <div className="delete-button" onClick={handleHapus}>Hapus</div>
        </section>
    )
}