import { gql } from "@apollo/client";

// KURANG UPDATE 

// export const DeleteData = gql`
//     mutation deleteDataMutation($id: Int!) {
//         delete_daftar_pengunjung_by_pk(id: $id) {
//             id
//         }
//     }
// `

// export const AddData = gql`
//     mutation addDataMutation($object: daftar_pengunjung_insert_input!) {
//         insert_daftar_pengunjung_one(object: $object) {
//             id
//             nama
//             umur
//             jenisKelamin
//         }
//     }
// `
export const AddDataPemasukan = gql`
    mutation addDataPemasukan($object: pemasukan_insert_input!) {
        insert_pemasukan_one(objects: {object: $object}) {
            id
            nama
            nominal
            tanggal
            keterangan
        }
    }
`

export const AddDataPengeluaran = gql`
    mutation addDataPengeluaran($object: pengeluaran_insert_input!) {
        insert_pengeluaran_one(object: {object: $object}) {
            id
            nama
            nominal
            tanggal
            keterangan
        }
    }
`

export const AddDataRencana = gql`
    mutation addDataRencana($object: rencana_insert_input!) {
        insert_rencana_one(object: {object: $object}) {
            id
            nama
            nominal
            bulan
            keterangan
        }
    }
` 

export const DeleteDataPemasukan = gql`
    mutation deleteDataPemasukan($id: Int!) {
        delete_pemasukan_by_pk(id: $id) {
            id
        }
    }
`

export const DeleteDataPengeluaran = gql`
    mutation deleteDataPengeluaran($id: Int!) {
        delete_pengeluaran_by_pk(id: $id) {
            id
        }
    }
`

export const DeleteDataRencana = gql`
    mutation deleteDataRencana($id: Int!) {
        delete_rencana_by_pk(id: $id) {
            id
        }
    }
`



