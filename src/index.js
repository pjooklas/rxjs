import { of, from } from "rxjs";

const observable = of([1, 2, 3, 7, 8]);
// const observable = from([1, 2, 3, 7, 8]);
// const observable = from(fetch('https://picsum.photos/v2/list'));

const subscirption = observable.subscribe({
    next(value) {
        console.log(value);
    },
    complete() {
        console.log('complete');
    }
})


