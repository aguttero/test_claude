console.log("Hello via Bun!");
console.log("My very first bun project!!");

// function name(): type {
//     ...
// }
import {sum,prod} from './calc';

let ans:number = sum(7,6);

console.log(ans);
ans ++;
console.log(ans);
console.log("sum fun:",sum(10,59));

console.log("prod fun:",prod(5,6));

let a;