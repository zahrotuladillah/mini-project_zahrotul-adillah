import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
// import { addPemasukan, editPemasukan } from "../../store/ListPemasukanSlice"

export default function EditPemasukan(props){
    const [item] = props.param
    const [data, setData] = useState(item)
    // const dispatch = useDispatch(editPemasukan)

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
        // console.log(data.nama)
        const newItem = {id: data.id, nama: data.nama, nominal: data.nominal, tanggal: data.tanggal, keterangan: data.keterangan}
        // dispatch(editPemasukan(newItem))
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
                                    <input type="text" required name="nama" value={data.nama} onChange={handleChange}
                                    className="input" />
                                </label>
                            </div>
                            <div className="nominal">
                                <label>
                                    Nominal Pemasukan
                                    <input type="number" required name="nominal" value={data.nominal} onChange={handleChange} 
                                    className="input" />
                                </label>
                            </div>
                            <div className="tanggal">
                                <label>
                                    Tanggal Pemasukan
                                    <input type="date" required name="tanggal" value={data.tanggal} onChange={handleChange} 
                                    className="input" />
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