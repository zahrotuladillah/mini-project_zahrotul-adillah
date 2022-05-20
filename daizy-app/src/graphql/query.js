import { gql } from "@apollo/client"

export const GetDataPemasukan = gql`
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

export const GetDataPengeluaran = gql`
    query getDataPengeluaran {
        pengeluaran {
            id
            nama
            nominal
            jenis
            tanggal
            keterangan
        }
    }
`

export const GetDataRencana = gql`
    query getDataRencana {
        rencana {
            id
            nama
            nominal
            bulan
            tahun
            keterangan
        }
    }
`


export const JumlahAllPemasukan = gql`
    query jumlahAllPemasukan {
        pemasukan_aggregate {
            aggregate {
                sum {
                    nominal
                }
            }
        }
    }
`

export const JumlahPemasukan = gql`
    query jumlahPemasukan($_gte: date!, $_lte: date!) {
        pemasukan_aggregate(where: {tanggal: {_gte: $_gte, _lte: $_lte}}) {
            aggregate {
                sum {
                    nominal
                }
            }
        }
    }
`

export const JumlahAllPengeluaran = gql`
    query jumlahAllPengeluaran {
        pengeluaran_aggregate {
            aggregate {
                sum {
                    nominal
                }
            }
        }
    }
`

export const JumlahPengeluaran = gql`
    query jumlahPengeluaran($_gte: date!, $_lte: date!) {
        pengeluaran_aggregate(where: {tanggal: {_gte: $_gte, _lte: $_lte}}) {
            aggregate {
                sum {
                    nominal
                }
            }
        }
    }
`

export const JumlahRencana = gql`
    query jumlahRencana($_eqbln: String!, $_eqthn: Int!) {
        rencana(where: {bulan: {_eq: $_eqbln}, tahun: {_eq: $_eqthn}}) {
            nominal
        }
    }
`
