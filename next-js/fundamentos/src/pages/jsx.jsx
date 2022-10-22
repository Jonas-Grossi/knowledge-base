import Layout from "../components/Layout"

export default function Jsx( ) {
    const titulo = <h1>Jsx é um conceito central</h1>

    function subtitulo() {
        return <h2>{"muito legal".toUpperCase()}</h2>
    }


    return (
        <Layout titulo="Entendendo o JSX">
            {titulo}
            {subtitulo()}
            <p>
                {JSON.stringify({ nome: 'João', idade: 30 })}
            </p>
        </Layout>

    )

}