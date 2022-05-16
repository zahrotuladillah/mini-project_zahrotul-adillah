import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { addPemasukan } from "../../store/ListPemasukanSlice"

export default function TambahPemasukan(){
    const [data, setData] = useState({nama: "", nominal: 0, tanggal: "", keterangan: ""})
    const dispatch = useDispatch(addPemasukan)

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };

    const handleChange = e => {
        setData({ ...data,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data.nama)
        if(data.nama){
            if(data.nominal){
                if(data.tanggal){
                    const newItem = {nama: data.nama, nominal: data.nominal, tanggal: data.tanggal}
                    dispatch(addPemasukan(newItem))
                    setData({nama: "", nominal: null, tanggal: null, keterangan: ""})
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
        <div className="addpemasukan">
            <div className="title" style={{textAlign: 'center'}}>Pemasukan</div>
            <div className='align-items-center justify-content-center' style={{display: 'flex'}}>
                <div className="preform">
                    <form 
                    onSubmit={handleSubmit}
                    >
                            <div className="name">
                                <label>
                                    Nama Pemasukan
                                    <input type="text" required name="nama" onChange={handleChange}
                                    className="input" />
                                </label>
                            </div>
                            <div className="nominal">
                                <label>
                                    Nominal Pemasukan
                                    <input type="number" required name="nominal" onChange={handleChange} 
                                    className="input" />
                                </label>
                            </div>
                            <div className="tanggal">
                                <label>
                                    Tanggal Pemasukan
                                    <input type="date" required name="tanggal" onChange={handleChange} 
                                    className="input" />
                                </label>
                            </div>
                        <div className="keterangan">
                            <label>
                                Keterangan
                                <textarea name="keterangan" onChange={handleChange} 
                                rows="7"></textarea>
                            </label>
                        </div>

                        <div className="footer">
                            <Link to='/Home' onClick={scrollToTop} className="button batal">Batal</Link>
                            <input type="submit" value="Submit" className="submit"/>
                            {/* <button onClick={handleSubmit}>submit</button> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}