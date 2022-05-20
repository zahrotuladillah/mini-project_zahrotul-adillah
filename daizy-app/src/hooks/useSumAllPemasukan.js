import { useQuery } from "@apollo/client"
import { JumlahAllPemasukan } from "../graphql/query"
import { GetDataPemasukan } from "../graphql/query"

export default function useSumAllPemasukan(){
    const [sumAllPemasukan, {loading: loadingSumAllPemasukan}] = useQuery(JumlahAllPemasukan)

    return{
        sumAllPemasukan,
        loadingSumAllPemasukan
    }
}
