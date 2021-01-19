import {observable, action, configure, reaction} from 'mobx'
import { Alert } from 'react-native';

configure({
    enforceActions : 'observed' // observable'daki değerleri değiştiren metodların başında @action kullanmayı unutursak, o method çalıştığı zaman hata vermesini sağlar
})

class CounterStore{
    @observable count = 3;
    
    constructor(){
        reaction( //2 adet callBack fonksiyonu alır
            () => this.count, // birinci callBack'te etkilenen observable değeri giriyoruz.
            c => { // diğer callBack function'da da koşulumuzu yazıyoruz.
                if(c===5){
                    alert('Başardın!')
                }
            }
        )
    }

    @action decrement = () => { // observable 'daki değerleri değiştiren metodların başında @action kullanılır
        this.count--
    }
    @action increase = () =>{
        this.count++
    }
}

export default new CounterStore()
