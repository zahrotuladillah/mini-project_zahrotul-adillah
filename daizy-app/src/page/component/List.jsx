

export default function List({filter}){
    return(
        <section>
            {filter==='pemasukan' && 
            <div className="list" style={{backgroundColor: '#ACB5E9'}}>
                <div>Pemasukan 1</div>
                <div>Tanggal</div>
            </div>}
            {filter==='pengeluaran' && 
            <div className="list" style={{backgroundColor: '#F5ACA8'}}>
                <div>Pemasukan 1</div>
                <div>Tanggal</div>
            </div>}
            {filter==='rencana' && 
            <div className="list" style={{backgroundColor: '#FBC3A5'}}>
                <div>Pemasukan 1</div>
                <div>Tanggal</div>
            </div>}
            
        </section>
    )
}