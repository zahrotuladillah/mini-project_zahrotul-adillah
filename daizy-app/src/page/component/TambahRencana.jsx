import React from "react"
import { Link } from "react-router-dom"
import { useState } from "react";
import useAddRencana from "../../hooks/useAddRencana";

export default function TambahRencana(){
    const {addRencana, loadingRencana} = useAddRencana()
    const [data, setData] = useState({nama: "", nominal: 0, bulan: "", keterangan: ""})

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };

    const onTambahRencana = async(newItem) => {
        await addRencana({variables: {
            object: {
                nama: newItem.nama,
                nominal: newItem.nominal,
                bulan: newItem.bulan,
                keterangan: newItem.keterangan
            }
        }})
        alert("Data Berhasil Ditambahkan")
    };

    const handleChange = e => {
        setData({ ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        if(data.nama){
            if(data.nominal){
                if(data.bulan){
                    const newItem = {nama: data.nama, nominal: data.nominal, bulan: data.bulan, keterangan: data.keterangan}
                    onTambahRencana(newItem)
                    setData({nama: "", nominal: 0, bulan: "", keterangan: ""})
                }
                else{
                    alert("Isi Tanggal Terlebih Dahulu")
                }
            }
            else{
                alert("Nominal Masih Kosong")
            }
        }
        else{
            alert("Nama Pemasukan Masih Kosong")
        }
    }
    return(
        <div className="addrencana">
            <div className="title" style={{textAlign: 'center'}}>Rencana Tabungan</div>
            <div className='align-items-center justify-content-center' style={{display: 'flex'}}>
                <div className="preform">
                    <form onSubmit={handleSubmit}>
                            <div className="name">
                                <label>
                                    Nama Rencana
                                    <input type="text" name="nama" value={data.nama} onChange={handleChange} 
                                    className="input" />
                                </label>
                            </div>
                            <div className="nominal">
                                <label>
                                    Nominal Tabungan
                                    <input type="number" name="nominal" value={data.nominal} onChange={handleChange} 
                                    className="input" />
                                </label>
                            </div>
                            <div className="bulan">
                                <label>
                                    Bulan Rencana
                                    <select className="input" name="bulan" value={data.bulan} onChange={handleChange} defaultValue={""}
                                        >
                                            <option value="">Pilih Bulan</option>
                                            <option value="Januari">Januari</option>
                                            <option value="Februari">Februari</option>
                                            <option value="Maret">Maret</option>
                                            <option value="April">April</option>
                                            <option value="Mei">Mei</option>
                                            <option value="Juni">Juni</option>
                                            <option value="Juli">Juli</option>
                                            <option value="Agustus">Agustus</option>
                                            <option value="September">September</option>
                                            <option value="Oktober">Oktober</option>
                                            <option value="November">November</option>
                                            <option value="Desember">Desember</option>
                                    </select>
                                </label>
                            </div>
                        <div className="keterangan">
                            <label>
                                Keterangan
                                <textarea name="keterangan" value={data.keterangan} onChange={handleChange} 
                                rows="7"></textarea>
                            </label>
                        </div>

                        <div className="footer">
                            <Link to='/Home' onClick={scrollToTop}
                            className="button batal">Batal</Link>
                            <input type="submit" 
                            // value="Submit" 
                            className="submit"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}