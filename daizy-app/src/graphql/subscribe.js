import { gql } from "@apollo/client";

// export const SubscribeData = gql`
//     subscription subscribeDataSubscription {
//         daftar_pengunjung {
//             id
//             nama
//             umur
//             jenisKelamin
//         }
//     }
// `

export const SubscribeDataPemasukan = gql`
    subscription subscribeDataPemasukan {
        pemasukan {
            id
            nama
            nominal
            tanggal
            keterangan
        }
    }
`

export const SubscribeDataPengeluaran = gql`
    subscription subscribeDataPengeluaran {
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

export const SubscribeDataRencana = gql`
    subscription subscribeDataRencana {
        rencana {
            id
            nama
            nominal
            bulan
            keterangan
        }
    }
`
