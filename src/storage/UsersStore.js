import {observable, computed, action, runInAction} from 'mobx'
import axios from 'axios'

class UsersStore {
    @observable users = []

    @computed get getData(){
        return this.users
    }
    @action async getDataApi(){

        try {
            const { data: { results } } = await axios.get('https://randomuser.me/api/?results=10')
            runInAction(()=>{
                this.users = results
            })
        } catch (error) {
            
        }
       /*  axios.get('https://randomuser.me/api/?results=10')
            .then(response => response.data.results)
            .then(user => {
                runInAction(() => {
                    this.users = user
                })
            }).catch(error => {
                alert('error')
            }) */
    }
    @action fetchUsersSuccess = (user) => {
        this.users = user
    }
    @action fetchUsersError = () => {
        alert('error')
    }

    
}

export default new UsersStore()