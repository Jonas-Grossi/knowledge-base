import Layout from "../../../components/Layout"
import {useRouter} from 'next/router'
import { useEffect } from "react"
export default function ClienteProCodigo() {
    const router = useRouter()
 

    return (
        <Layout titulo="Navegação Dinâmica">
            <div>Código = {router.query.codigo}</div>
            <div>Filial = {router.query.filial}</div>



        </Layout>

    )

}