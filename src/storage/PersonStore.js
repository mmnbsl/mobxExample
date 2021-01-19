import { action, observable, configure, computed, autorun, reaction, runInAction } from 'mobx'
import { Alert } from 'react-native'

configure({
    enforceActions : 'observed'
})

class PersonStore{
    @observable name = 'Ahmet'
    @observable surName = 'Yılmaz'

    @action changeName = () => {
        setTimeout(()=>{
            runInAction(()=>{ 
                this.name = 'Mümin';
                this.surName = 'Başol';
            })
            
        },2000)
    }
    @computed get fullName(){
        return `${this.name} ${this.surName}`
    }
}

export default new PersonStore()