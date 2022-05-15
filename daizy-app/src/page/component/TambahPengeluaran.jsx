import React from "react"
import { Link } from "react-router-dom"

export default function TambahPengeluaran(){
    const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };
    return(
        <div className="addpengeluaran">
            <div className="title" style={{textAlign: 'center'}}>Pengeluaran</div>
            <div className='align-items-center justify-content-center' style={{display: 'flex'}}>
                <div className="preform">
                    <form
                    // onSubmit={handleSubmit}
                    >
                            <div className="name">
                                <label>
                                    Nama Pengeluaran
                                    <input type="text" 
                                    // required name="nama" value={data.nama} onChange={handleChange} 
                                    className="input" />
                                </label>
                            </div>
                            <div className="nominal">
                                <label>
                                    Nominal Pengeluaran
                                    <input type="number" 
                                    // required name="noHP" value={data.noHP} onChange={handleChange} 
                                    className="input" />
                                </label>
                            </div>
                            <div className="tanggal">
                                <label>
                                    Tanggal Pengeluaran
                                    <input type="date" 
                                    // required name="noHP" value={data.noHP} onChange={handleChange} 
                                    className="input" />
                                </label>
                            </div>
                            <div className="jenis">
                                    <label>
                                        Jenis Pengeluaran
                                        <select required className="input" 
                                        // name="kelas" onChange={handleChange} value={data.kelas}
                                        >
                                            <option value="">Pilih Jenis Pengeluaran</option>
                                            <option value="Coding Backend with Golang">Pekerjaan & Belajar</option>
                                            <option value="Coding Frontend with ReactJS">Komunikasi</option>
                                            <option value="Fullstack Developer">Penampilan</option>
                                            <option value="Fullstack Developer">Makan & Minum</option>
                                            <option value="Fullstack Developer">Liburan</option>
                                            <option value="Fullstack Developer">Lain-lain</option>
                                        </select>
                                    </label>
                                </div>
                        <div className="keterangan">
                            <label>
                                Keterangan
                                <textarea name="keterangan" 
                                // value={data.harapan} onChange={handleChange} 
                                rows="7"></textarea>
                            </label>
                        </div>

                        <div className="footer">
                            <Link to='/Home' onClick={scrollToTop}
                            // onClick={resetData} 
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