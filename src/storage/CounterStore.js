import {observable, action, configure, reaction, when} from 'mobx'
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
        when( //kullanımı reaction ile aynı tek farklı birinci callBack'teki koşul sağlandığında 2. callBack 1 defa çalışır
            () => this.count === 7,
            () => alert('Tek Sefer Çalışır')
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
