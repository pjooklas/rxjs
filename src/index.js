import { timer } from "rxjs";

const observable = timer(0, 1000);

const subscirption = observable.subscribe(
    console.log
)


