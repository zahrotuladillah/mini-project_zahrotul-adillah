import { useDispatch } from "react-redux"


export default function List(props){
    const {item, filter} = props
    return(
        <section>
            {filter==='pemasukan' && 
            <div className="list" style={{backgroundColor: '#ACB5E9'}}>
                <div>{item.nama}</div>
                <div>{item.tanggal}</div>
                <div>Hapus</div>
            </div>}
            {filter==='pengeluaran' && 
            <div className="list" style={{backgroundColor: '#F5ACA8'}}>
                <div>{item.nama}</div>
                <div>{item.tanggal}</div>
                <div>Hapus</div>
            </div>}
            {filter==='rencana' && 
            <div className="list" style={{backgroundColor: '#FBC3A5'}}>
                <div>{item.nama}</div>
                <div>{item.tanggal}</div>
                <div>Hapus</div>
            </div>}
            
        </section>
    )
}