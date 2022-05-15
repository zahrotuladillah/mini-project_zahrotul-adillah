import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap'

export default function Grafik(){
    return(
            <div className="grafik">
                <div className="title-grafik" style={{textAlign: 'center'}}>GRAFIK KEUANGAN</div>
                {/* <div className='align-items-center justify-content-center' style={{display: 'flex'}}> */}
                    <div className="box-grafik">
                        <div className="switch-bulan" style={{marginTop: '0'}}>
                            <div>arrowleft</div>
                            <div>Bulan</div>
                            <div>ArrowRight</div>
                        </div>
                        <div className="grafik-keuangan">
                            <div>Grafik</div>
                            <div>
                                <div>Pengeluaran</div>
                                <div>Persen</div>
                                <div>Pemasukan</div>
                            </div>
                        </div>
                        <div className="grafik-rincian">
                            <div>Rencana</div>
                            <div className="list-rincian">
                                <div>Pekerjaan & Belajar</div> 
                                <div>Persen</div>
                            </div>
                        </div>
                    </div>
                    <div className="title-grafik" style={{textAlign: 'center'}}>HASIL PERENCANAAN</div>
                    <div className="box-grafik">
                        <div className="switch-bulan" style={{marginTop: '0'}}>
                            <div>arrowleft</div>
                            <div>Bulan</div>
                            <div>ArrowRight</div>
                        </div>
                        <div className="grafik-keuangan">
                            <div>Grafik</div>
                            <div>
                                <div>Tabungan</div>
                                <div>Persen</div>
                                <div>Rencana Tabungan</div>
                            </div>
                        </div>
                        <div className="grafik-rincian">
                            <div>Rencana</div>
                            <div className="list-rincian">
                                <div>Rencana Tabungan</div> 
                                <div>Berapa</div>
                            </div>
                            <div className="list-rincian">
                                <div>Tabungan</div> 
                                <div>Berapa</div>
                            </div>
                        </div>
                    {/* </div> */}
                </div>
            </div>
    )
}