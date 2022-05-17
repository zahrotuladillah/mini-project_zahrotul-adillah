import { Link } from "react-router-dom"
import { useState } from "react";

export default function List(props){
    const {item, filter} = props
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    console.log("halo")

    return(
        <section>
            {filter==='pemasukan' && 
            <div to={{pathname: `/editPemasukan/${item.id}`, param: item}} className="list" style={{backgroundColor: '#ACB5E9'}}>
                <div>{item.nama}</div>
                <div>{item.tanggal}</div>
            </div>}
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
            
        </section>
    )
}