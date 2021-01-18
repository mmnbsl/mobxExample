import {observable, action} from 'mobx'
class CounterStore{
    @observable count = 3;
    
    @action decrement = () => { // observable 'daki değerleri değiştiren metodların başında @action kullanılır
        this.count--
    }
    @action increase = () =>{
        this.count++
    }
}

export default new CounterStore()
