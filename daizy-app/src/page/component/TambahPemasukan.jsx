import React from "react"
import { Link } from "react-router-dom"

export default function TambahPemasukan(){
    const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };
    return(
        <div className="addpemasukan">
            <div className="title" style={{textAlign: 'center'}}>Pemasukan</div>
            <div className='align-items-center justify-content-center' style={{display: 'flex'}}>
                <div className="preform">
                    <form
                    // onSubmit={handleSubmit}
                    >
                            <div className="name">
                                <label>
                                    Nama Pemasukan
                                    <input type="text" 
                                    // required name="nama" value={data.nama} onChange={handleChange} 
                                    className="input" />
                                </label>
                            </div>
                            <div className="nominal">
                                <label>
                                    Nominal Pemasukan
                                    <input type="number" 
                                    // required name="noHP" value={data.noHP} onChange={handleChange} 
                                    className="input" />
                                </label>
                            </div>
                            <div className="tanggal">
                                <label>
                                    Tanggal Pemasukan
                                    <input type="date" 
                                    // required name="noHP" value={data.noHP} onChange={handleChange} 
                                    className="input" />
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