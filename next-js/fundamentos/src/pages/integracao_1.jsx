import Layout from "../components/Layout"

export default function Integracao() {

    const [cliente, setCliente] = useState({})

    fetch('http://localhost:3000/api/clientes/123')
        .then(resp => resp.json())
        .then(dados => setCliente(dados))
    return (
        <Layout>

            <ul>
                <li>Codigo:</li>
                <li>Nome:</li>
                <li>Email:</li>

            </ul>

        </Layout>
    )


}