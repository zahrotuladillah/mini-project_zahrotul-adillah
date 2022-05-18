import List from "./component/List"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
// import { useSelector } from "react-redux"
import useGetPemasukan from "../hooks/useGetPemasukan"
import useGetPengeluaran from "../hooks/useGetPengeluaran"
import useGetRencana from "../hooks/useGetRencana"

export default function Home(){
    const [filter, setFilter] = useState('pemasukan')
    // const {list_pemasukan, loadingDataPemasukan, errorDataPemasukan, subscribePemasukanFunction} = useGetDataPemasukan()
    // const dataPemasukan = useSelector((state)=>state.listPemasukan.pemasukan)
    // const dataPengeluaran = useSelector((state)=>state.list.pengeluaran)
    // const dataRencana = useSelector((state)=>state.list.rencana)
    // const {data, loading, error} = useQuery(GetPemasukan)
    const {data: dataPemasukan, loading: loadPemasukan, error: errorPemasukan, subsPemasukan} = useGetPemasukan() 
    const {data: dataPengeluaran, loading: loadingPengelauran, error: errorPengeluaran, subsPengeluaran} = useGetPengeluaran()
    const {data: dataRencana, loading: loadingRencana, error: errorRencana, subsRencana} = useGetRencana()
    // useEffect(()=>{
    //     subscribePemasukanFunction()
    // },[])
    useEffect(()=>{
        subsPemasukan()
    },[])

    useEffect(()=>{
        subsPengeluaran()
    },[])

    useEffect(()=>{
        subsRencana()
    },[])

    // if(errorDataPemasukan){
    //     console.log("error get data pemasukan")
    // }
    const handleClick = e => {
        setFilter(e.target.value)
    }
    
    return(
        <div>
            <section className="home second">
                <div className="home-content">
                    <div className="textp-1">Pantau Keuanganmu</div>
                    <div className="textp-2">Dengan Grafik</div>
                    <Link to='/Grafik' className="mainbutton" style={{display: 'grid'}}>Lihat Grafik</Link>
                    {/* <div className="textp-3">You cand find <span className="typing"></span></div> */}
                </div>
                <div className="img-grafik">
                    <img src="./Saly-12.png" alt="logo"/>
                </div>
            </section>
            <img src="./waveatas.png" style={{width: '100%', marginTop: '-5px'}}/>
            <div className="max-width">
                {filter==='pemasukan' && <Link to='/TambahPemasukan' style={{display: 'grid'}} className="tambahbutton" >Tambah Pemasukan</Link>}
                {filter==='pengeluaran' && <Link to='/TambahPengeluaran' style={{display: 'grid'}} className="tambahbutton" >Tambah Pengeluaran</Link>}
                {filter==='rencana' && <Link to='/TambahRencana' style={{display: 'grid'}} className="tambahbutton" >Tambah Rencana</Link>}
                <div className="filter">
                    {filter==='pemasukan'
                    ? <button className="filterbutton" onClick={handleClick} value={'pemasukan'} style={{backgroundColor: '#ACB5E9', border: '2px solid rgba(0, 0, 0, 1)'}}>Pemasukan</button>
                    : <button className="filterbutton" onClick={handleClick} value={'pemasukan'} style={{backgroundColor: '#ACB5E9'}}>Pemasukan</button>} 
                    {filter==='pengeluaran'
                    ? <button className="filterbutton" onClick={handleClick} value={'pengeluaran'} style={{backgroundColor: '#F5ACA8', border: '2px solid rgba(0, 0, 0, 1)'}}>Pengeluaran</button>
                    : <button className="filterbutton" onClick={handleClick} value={'pengeluaran'} style={{backgroundColor: '#F5ACA8'}}>Pengeluaran</button>}
                    {filter==='rencana'
                    ? <button className="filterbutton" onClick={handleClick} value={'rencana'} style={{backgroundColor: '#FBC3A5', border: '2px solid rgba(0, 0, 0, 1)'}}>Rencana</button>
                    : <button className="filterbutton" onClick={handleClick} value={'rencana'} style={{backgroundColor: '#FBC3A5'}}>Rencana</button>}
                    
                </div>
                <div className="switch-bulan">
                    <div>arrowleft</div>
                    <div>Bulan</div>
                    <div>ArrowRight</div>
                </div>
                <section style={{marginBottom: '10%'}}>
                    {/* {console.log("hlo")} */}
                    {/* {list_pemasukan?.pemasukan && console.log("hwe")} */}
                    {filter==='pemasukan' && dataPemasukan.map(income => (<List key={income.id} item={income} filter='pemasukan'/>))}
                    {filter==='pengeluaran' && dataPengeluaran.map((outcome) => (<List key={outcome.id} item={outcome} filter='pengeluaran'/>))}
                    {filter==='rencana' && dataRencana.map((plan) => (<List key={plan.id} item={plan} filter='rencana'/>))}
                    {filter==='pemasukan' && dataPemasukan.length===0 &&
                        <div className="list" style={{display: "block", textAlign: "center", marginTop: '3%', color: "red", width: "100%", backgroundColor: '#F5ACA8'}}>
                            Belum Ada Pemasukan
                        </div>
                    }
                    {filter==='pengeluaran' && dataPengeluaran.length===0 &&
                        <div className="list" style={{display: "block", textAlign: "center", marginTop: '3%', color: "red", width: "100%", backgroundColor: '#F5ACA8'}}>
                            Belum Ada Pengeluaran
                        </div>
                    }
                    {filter==='rencana' && dataRencana.length===0 &&
                        <div className="list" style={{display: "block", textAlign: "center", marginTop: '3%', color: "red", width: "100%", backgroundColor: '#FBC3A5'}}>
                            Belum Ada Rencana Tabungan
                        </div>
                    }
                </section>
            </div>
        </div>
    )
}