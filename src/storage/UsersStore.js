import {observable, computed, action, runInAction} from 'mobx'
import axios from 'axios'

class UsersStore {
    @observable users = []

    @computed get getData(){
        return this.users
    }
    @action getDataApi = () => {
        axios.get('https://randomuser.me/api/?results=10')
            .then(response => response.data.results)
            .then(this.fetchUsersSuccess,this.fetchUsersError)
    }
    @action fetchUsersSuccess = (user) => {
        this.users = user
    }
    @action fetchUsersError(){
        alert('error')
    }

    
}

export default new UsersStore()