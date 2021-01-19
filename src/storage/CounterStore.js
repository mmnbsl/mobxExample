import {observable, action, configure, reaction, when} from 'mobx'
import { Alert } from 'react-native';

configure({
    enforceActions : 'observed'
})

class CounterStore{
    @observable count = 3;
    
    constructor(){
        reaction( 
            () => this.count, 
            c => { 
                if(c===5){
                    alert('Başardın!')
                }
            }
        )
        when( 
            () => this.count === 7,
            () => alert('Tek Sefer Çalışır')
        )
    }

    @action decrement = () => {
        this.count--
    }
    @action increase = () =>{
        this.count++
    }
}

export default new CounterStore()
