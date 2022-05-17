import List from "./component/List"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
// import { useSelector } from "react-redux"
// import useGetPemasukan from "../hooks/useGetPemasukan"
import { gql, useQuery } from "@apollo/client"

const GetPemasukan = gql`
    query getDataPemasukan {
        pemasukan {
            id
            nama
            nominal
            tanggal
            keterangan
        }
    }
`

export default function Home(){
    const [filter, setFilter] = useState('pemasukan')
    // const {list_pemasukan, loadingDataPemasukan, errorDataPemasukan, subscribePemasukanFunction} = useGetDataPemasukan()
    // const dataPemasukan = useSelector((state)=>state.listPemasukan.pemasukan)
    // const dataPengeluaran = useSelector((state)=>state.list.pengeluaran)
    // const dataRencana = useSelector((state)=>state.list.rencana)
    const {data, loading, error} = useQuery(GetPemasukan)
    // const {data, load, error, subsPemasukan} = useGetPemasukan() 

    // useEffect(()=>{
    //     subscribePemasukanFunction()
    // },[])
    useEffect(()=>{
        subsPemasukan()
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
                {filter==='pemasukan' && <Link style={{display: 'grid'}} className="tambahbutton" to='/TambahPemasukan'>Tambah Pemasukan</Link>}
                {filter==='pengeluaran' && <Link style={{display: 'grid'}} className="tambahbutton" to='/TambahPengeluaran'>Tambah Pengeluaran</Link>}
                {filter==='rencana' && <Link style={{display: 'grid'}} className="tambahbutton" to='/TambahRencana'>Tambah Rencana</Link>}
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
                    {filter==='pemasukan' && data.map(income => (<List key={income.id} item={income} filter='pemasukan'/>))}
                    
                    {/* {filter==='pengeluaran' && dataPengeluaran.map((outcome) => (<List key={outcome.id} item={outcome} filter='pengeluaran'/>))}
                    {filter==='rencana' && dataRencana.map((plan) => (<List key={plan.id} item={plan} filter='rencana'/>))} */}
                    {/* {list_pemasukan?.length===0 &&
                        <div className="task" style={{textAlign: "center", margin: "0", color: "red"}}>
                            Belum Ada Pemasukan
                        </div>
                    } */}
                    {/* {dataPengeluaran.length===0 &&
                        <div className="task" style={{textAlign: "center", margin: "0", color: "red"}}>
                            Belum Ada Pengeluaran
                        </div>
                    }
                    {dataRencana.length===0 &&
                        <div className="task" style={{textAlign: "center", margin: "0", color: "red"}}>
                            Belum Ada Rencana Tabungan
                        </div>
                    } */}
                </section>
            </div>
        </div>
    )
}