import { useQuery } from "@apollo/client"
import { JumlahPengeluaran } from "../graphql/query"
import { GetDataPengeluaran } from "../graphql/query"

export default function useSumPengeluaran(){
    const [sumPengeluaran, {loading: loadingSumPengeluaran}] = useQuery(JumlahPengeluaran, {refetchQueries: [GetDataPengeluaran]})

    return{
        sumPengeluaran,
        loadingSumPengeluaran
    }
}
