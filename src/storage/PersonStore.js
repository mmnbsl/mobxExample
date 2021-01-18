import { action, observable, configure, computed } from 'mobx'

configure({
    enforceActions : 'observed'
})

class PersonStore{
    @observable name = 'null'
    @observable surName = 'null'

    @action changeName = () => {
        this.name = 'Mümin';
        this.surName = 'Başol';
    }
    @computed get fullName(){
        return `${this.name} ${this.surName}`
    }
}

export default new PersonStore()