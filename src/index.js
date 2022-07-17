import { Observable } from "rxjs";

const observable = new Observable((subscriber) => {
    // subscriber.next('Hello world')
    // subscriber.error('Error')
    // subscriber.complete()
    // subscriber.next('nxt')
    const id = setInterval(() => {
        subscriber.next('test')
        console.log('leak');
    }, 1000)

    return () => {
        clearInterval(id)
    }
});

console.log('before');

const subscirption = observable.subscribe({
    next: (value) => {
        console.log(value);
    },
    complete: () => {
        console.log('complete');
    },
    error: (err) => {
        console.error(err);
    }
})

setTimeout(() => {
    subscirption.unsubscribe();
}, 4000)

console.log('after');