import { of } from "rxjs";
import { reduce } from "rxjs/operators";

const observable = of(1,2,3,4,5).pipe(
    reduce(
        (acc, val) => acc + val,
        0
    )
)

const subscirption = observable.subscribe({
    next(value) {
        console.log(value);
    },
    complete() {
        console.log('complete');
    }
})


