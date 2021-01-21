import {observable, computed, action, runInAction} from 'mobx'
import axios from 'axios'

class UsersStore {
    @observable users = []
    @observable loading = false;

    @computed get getData(){
        return this.users
    }
    @action async getDataApi(){
        this.loading = true;
        this.users = [] 
        try {
            const { data: { results } } = await axios.get('https://randomuser.me/api/?results=10')
            runInAction(()=>{
                this.loading = false;
                this.users = results
            })
        } catch (error) {
            runInAction(()=>{
                this.loading = false
            })
            alert('error')
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