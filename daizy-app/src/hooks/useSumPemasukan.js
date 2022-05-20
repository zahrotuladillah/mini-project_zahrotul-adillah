import { useQuery } from "@apollo/client"
import { JumlahPemasukan } from "../graphql/query"
import { GetDataPemasukan } from "../graphql/query"

export default function useSumPemasukan(){
    const [sumPemasukan, {loading: loadingSumPemasukan}] = useQuery(JumlahPemasukan, {refetchQueries: [GetDataPemasukan]})

    return{
        sumPemasukan,
        loadingSumPemasukan
    }
}
