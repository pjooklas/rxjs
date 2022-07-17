import { of, from } from "rxjs";
import { map } from "rxjs/operators";

const observable = of(1, 2, 3, 7, 8).pipe(
    map((value)=> `$${value}` )
);

const subscirption = observable.subscribe({
    next(value) {
        console.log(value);
    },
    complete() {
        console.log('complete');
    }
})


