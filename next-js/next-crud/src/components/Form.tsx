import { useState } from "react";
import Client from "../core/Client";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
    client: Client
    clientChange?:(client:Client) => void
    cancel?:()=>void

}
export default function Form(props: FormProps) {
    const id = props.client?.id
    const [nome, setNome] = useState(props.client?.nome ?? '')
    const [idade, setIdade] = useState(props.client?.idade ?? 0)
    return (
        <div>
            {id ? (

                <Input onlyRead text="Codigo" value={id}
                    className="mb-5" />
            ) : false}
            <Input text="Nome" value={nome}
                onChange={setNome}
                className="mb-5" />
            <Input text="Idade" type="number" value={idade}
                onChange={setIdade}
            />
            <div className="flex justify-end mt-7">

                <Button cor="blue" className="mr-2" onClick={()=>props.clientChange?.(new Client(nome,+idade,id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Button>
                <Button  onClick={props.cancel}>
                    Cancelar
                </Button>
            </div>
        </div>

    )
} 