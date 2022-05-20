import { useQuery } from "@apollo/client"
import { JumlahAllPengeluaran } from "../graphql/query"
import { GetDataPengeluaran } from "../graphql/query"

export default function useSumAllPengeluaran(){
    const [sumAllPengeluaran, {loading: loadingSumAllPengeluaran}] = useQuery(JumlahAllPengeluaran, {refetchQueries: [GetDataPengeluaran]})

    return{
        sumAllPengeluaran,
        loadingSumAllPengeluaran
    }
}
