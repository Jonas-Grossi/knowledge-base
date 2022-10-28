
import Button from '../components/Button'
import Layout from '../components/Layout'
import Table from '../components/Table'
import Form from '../components/Form'
import useClient from '../hooks/useClient'


export default function Home() {

  const { 
    client,
    clients,
    clientSelected,
    clientDelete,
    newClient,
    salveClient,
    tableVisible,
    showForm,
    showTable 
  } = useClient()


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
        {tableVisible ? (
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
            cancel={() => showForm} />
        )}


      </Layout>

    </div>
  )
}
