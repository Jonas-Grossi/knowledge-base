import { useEffect, useState } from "react"
import CollectionClient from "../backend/db/CollectionClient"

import Client from "../core/Client"
import ClientRepository from "../core/ClientRepository"
import useTableOrForm from "./useTableOrForm"

export default function useClient(){

    const {tableVisible,formVisible,showForm,showTable} = useTableOrForm()

    const repo: ClientRepository = new CollectionClient()
  const [client, setClient] = useState<Client>(Client.null())
  const [clients, setClients] = useState<Client[]>([])
  

  useEffect(all, [])


  function all() {
    repo.getAll().then(clients => {
      setClients(clients)
     showTable()

    })

  }


  function clientSelected(client: Client) {
    setClient(client)
    showForm()
  }
  async function clientDelete(client: Client) {
   await repo.delete(client)
   all()
  }
  function newClient() {
    setClient(Client.null())
    showForm()
  }
  async function salveClient(client: Client) {
    await repo.salve(client)
    all()
  }

  return {
    tableVisible,
    client,
    clients,
    salveClient,
    newClient,
    clientDelete,
    clientSelected,
    all,
    showTable,
    showForm
    

  }


}