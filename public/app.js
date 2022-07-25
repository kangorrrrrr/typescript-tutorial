"use strict";
// const anchor = document.querySelector('a')!;
Object.defineProperty(exports, "__esModule", { value: true });
const me = {
    name: 'Shuan',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spend', amount);
        return amount;
    }
};
console.log(me);
// Classes
const Invoice_1 = require("./classes/Invoice");
const invOne = new Invoice_1.Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice_1.Invoice('luigi', 'work on the luigi website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
