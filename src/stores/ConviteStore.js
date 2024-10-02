import { defineStore } from "pinia";
import { db } from "@/firebase"
import { collection, onSnapshot, addDoc, deleteDoc, doc, updateDoc  } from "firebase/firestore"; 

const invitesCollectionRef = collection(db, "invites")

export const useConviteStore = defineStore("convite", {
  state: () => ({
    convidados: [],
    convidado: {},
    load: false
  }),
  getters: {
    readConvidados() {
      return this.convidados
    },
    readConvidado(){
      return this.convidado
    },
    readLoad(){
      return this.load
    },
    readResumo(){
      const total = this.convidados.filter(x => !x.wait).reduce((acc, item) =>  {
        acc.total += item.conv_adults + item.conv_child
        acc.childs_menores += item.conv_child
        acc.adults += item.conv_adults
        acc.child_maior += item.conv_child_maior
        acc.convites++
        return acc
      }, {total: 0, childs_menores: 0, adults: 0, convites: 0, child_maior: 0})
      return total
    }
  },
  actions:{
    async getAllInvites(){
      try {
        this.load = true
        onSnapshot(collection(db, "invites"), (querySnapshot) => {
          const invites = []
          querySnapshot.forEach((doc) => {
            invites.push({
                id: doc.id,
                ...doc.data()
            })
          });
          this.convidados = invites
        });
      } catch (error) {
        console.log("erro inicial");
      } finally {
        this.load = false
      }
    },
    async conviteAdd(item) {
      try {
        const docRef = await addDoc(collection(db, "invites"), item);
      } catch (error) {
        console.log('error')
      } finally {
        this.load = false
      }
    },
    async deleteConvite(id){
      await deleteDoc(doc(invitesCollectionRef, id));
    }, 
    async editInvite(item){
      const id = item.id
      delete item.id
      await updateDoc(doc(invitesCollectionRef, id), item);
    },
    async changeListWait(id){
      await updateDoc(doc(invitesCollectionRef, id), {
        wait: true
      });
    },
    async changeListWaiReturn(id){
      await updateDoc(doc(invitesCollectionRef, id), {
        wait: false
      });
    },
    loadFirebaseIvite(id){
      try {
        this.load = true
        const unsub = onSnapshot(doc(invitesCollectionRef, id), (doc) => {
            this.convidado = {
              id: doc.id,
              ...doc.data()
            } 
        });

      } catch (error) {
        console.log("error get invite");
      } finally {
        this.load = false
      }
    },
    async not_go(id){
      await updateDoc(doc(invitesCollectionRef, id), {
        not_go: true
      });
    },
  }
});