import { action, observable } from 'mobx';
import { configure } from 'mobx';

configure({ enforceActions: true });


export default class CounterStore {

    @observable
    count = 0

    @action
    increaseCount = () => {
        this.count += 1
    }
    @action
    decreaseCount = () => {
        this.count -= 1
    }

}