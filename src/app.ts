import { HasFormatter } from './interfaces/HasFormatter';
import { Invoice } from "./classes/Invoice";
import { Payment } from "./classes/Payment";
// const anchor = document.querySelector('a')!;

// console.log(anchor.href);

// interfaces
interface IsPerson {
    name: string,
    age: number,
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: 'Shuan',
    age: 30,
    speak(text: string): void{
        console.log(text);
        
    },
    spend(amount: number):number{
        console.log('I spend', amount);
        return amount;
    }
}

console.log(me);



// Classes



const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

let invoices: Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
})


// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// inputs

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event)=> {
    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );
    
})