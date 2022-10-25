
import Button from '../components/Button'
import Layout from '../components/Layout'
import Table from '../components/Table'
import Client from '../core/Client'
import Form from '../components/Form'
import { useState } from 'react'


export default function Home() {
  const [client, setClient] = useState<Client>(Client.null())
  const [visible, setVisible] = useState<'table' | 'form'>('table')


  const clients = [
    new Client('Ana', 34, '1'),
    new Client('Bia', 62, '2'),
    new Client('Carlos', 44, '3'),
    new Client('Pedro', 18, '4'),
    new Client('Jonas', 32, '5')

  ]

  function clientSelected(client: Client) {
    setClient(client)
    setVisible('form')
  }
  function clientDelete(client: Client) {
    console.log(`Exluir ${client.nome}`)
  }
  function newClient() {
    setClient(Client.null())
    setVisible('form')
  }
  function salveClient(client: Client) {
    console.log(client)
    setVisible('table')
  }



  return (
    <div className={`
    flex  
    justify-center 
    items-center
    h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}>
      <Layout title="Cadastro Simples">
        {visible === 'table' ? (
          <>
            <div className='flex justify-end'>
              <Button cor="green" className="mb-4" onClick={newClient}>Novo Cliente</Button>
            </div>
            <Table clients={clients}
              clientSelected={clientSelected}
              clientDelete={clientDelete}
            /></>

        ) : (

          <Form client={client}
            clientChange={salveClient}
            cancel={() => setVisible('table')} />
        )}


      </Layout>

    </div>
  )
}
