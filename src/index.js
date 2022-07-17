import { of, from, fromEvent } from "rxjs";
import { map, pluck, filter } from "rxjs/operators";

const observable = fromEvent(
    document, 'keydown'
).pipe(
    // map(event => event.code)
    pluck('code'),
    filter(code => code === 'Space')
)

const subscirption = observable.subscribe({
    next(value) {
        console.log(value);
    },
    complete() {
        console.log('complete');
    }
})


