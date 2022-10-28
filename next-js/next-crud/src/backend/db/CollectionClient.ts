import firebase from "../config";
import Client from "../../core/Client";
import ClientRepository from "../../core/ClientRepository";

export default class CollectionClient implements ClientRepository {
    //converte uma classe  para algo que vai ser persistido no firestore
    #convert = {
        toFirestore(client: Client) {
            return {
                nome: client.nome,
                idade: client.idade,

            }
        },
        //recebe algo do firestore e converte para classe
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot,
            options: firebase.firestore.SnapshotOptions): Client {
            const data = snapshot.data(options)
            return new Client(data.nome, data.idade, snapshot.id)

        }
    }

    async salve(client: Client): Promise<Client> {
        if (client?.id) {
            await this.colection().doc(client.id).set(client)
            return client
        } else {

            const docRef = await this.colection().add(client)
            const doc = await docRef.get()
            return doc.data()
        }


    }

    async delete(client: Client): Promise<void> {
        //o cliente especifico e um documento
        return this.colection().doc(client.id).delete()
    }
    async getAll(): Promise<Client[]> {

       const query = await this.colection().get()
       return query.docs.map(doc => doc.data() ) ?? []
   

    }


    private colection() {
        return firebase
            .firestore()
            .collection('clients')
            .withConverter(this.#convert)
    }

}