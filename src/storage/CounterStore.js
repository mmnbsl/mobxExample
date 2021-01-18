import {observable, action, configure} from 'mobx'

configure({
    enforceActions : 'observed' // observable'daki değerleri değiştiren metodların başında @action kullanmayı unutursak, o method çalıştığı zaman hata vermesini sağlar
})

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
