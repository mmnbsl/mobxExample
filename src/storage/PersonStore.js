import { action, observable, configure, computed, autorun, reaction } from 'mobx'
import { Alert } from 'react-native'

configure({
    enforceActions : 'observed'
})

class PersonStore{
    @observable name = 'null'
    @observable surName = 'null'

    constructor(){
        autorun(()=>{
            Alert.alert(this.name)
        })
    }

    @action changeName = () => {
        this.name = 'Mümin';
        this.surName = 'Başol';
    }
    @computed get fullName(){
        return `${this.name} ${this.surName}`
    }
}

export default new PersonStore()