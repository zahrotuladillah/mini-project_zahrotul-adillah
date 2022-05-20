import { useQuery } from "@apollo/client"
import { JumlahRencana } from "../graphql/query"
import { GetDataRencana } from "../graphql/query"

export default function useSumRencana(){
    const [sumRencana, {loading: loadingSumRencana}] = useQuery(JumlahRencana, {refetchQueries: [GetDataRencana]})

    return{
        sumRencana,
        loadingSumRencana
    }
}
