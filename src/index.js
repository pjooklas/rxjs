import { fromEvent } from "rxjs";

const observable = fromEvent(
    document, 'click'
);

const subscirption = observable.subscribe(
    console.log
)


