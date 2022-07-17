import { fromEvent } from "rxjs";
import { map, mergeMap, take } from "rxjs/operators";
import { ajax } from "rxjs/ajax";


const button = document.getElementById('btn');
const observable = fromEvent(
    button, 'click'
).pipe(
    mergeMap(()=> {
        return ajax.getJSON(
            'https://jsonplaceholder.typicode.com/todos/1'
        )
    }),
    take(5)
)

const subscirption = observable.subscribe({
    next(value) {
        console.log(value);
    },
    complete() {
        console.log('complete');
    }
})


