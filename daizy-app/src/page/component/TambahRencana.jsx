import React from "react"
import { Link } from "react-router-dom"

export default function TambahRencana(){
    const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };
    return(
        <div className="center addrencana">
            <div className="title" style={{textAlign: 'center'}}>Rencana Tabungan</div>
            <div className='align-items-center justify-content-center' style={{display: 'flex'}}>
                <div className="preform">
                    <form
                    // onSubmit={handleSubmit}
                    >
                            <div className="name">
                                <label>
                                    Nama Rencana
                                    <input type="text" 
                                    // required name="nama" value={data.nama} onChange={handleChange} 
                                    className="input" />
                                </label>
                            </div>
                            <div className="nominal">
                                <label>
                                    Nominal Tabungan
                                    <input type="number" 
                                    // required name="noHP" value={data.noHP} onChange={handleChange} 
                                    className="input" />
                                </label>
                            </div>
                            <div className="bulan">
                                <label>
                                    Bulan Rencana
                                    <select required className="input" 
                                        // name="kelas" onChange={handleChange} value={data.kelas}
                                        >
                                            <option value="">Pilih Bulan</option>
                                            <option value="Coding Backend with Golang">Januari</option>
                                            <option value="Coding Frontend with ReactJS">Februari</option>
                                            <option value="Fullstack Developer">Maret</option>
                                            <option value="Fullstack Developer">April</option>
                                            <option value="Fullstack Developer">Mei</option>
                                            <option value="Fullstack Developer">Juni</option>
                                            <option value="Fullstack Developer">Juli</option>
                                            <option value="Fullstack Developer">Agustus</option>
                                            <option value="Fullstack Developer">September</option>
                                            <option value="Fullstack Developer">Oktober</option>
                                            <option value="Fullstack Developer">November</option>
                                            <option value="Fullstack Developer">Desember</option>
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