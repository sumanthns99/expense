<!DOCTYPE html>
<html lang="en">
<head></head>
<body>
<h1>Practices on promises with the example of movies ticket</h1>
</body>
<script src="promises.js"></script>

console.log("Person1: Shows ticket");
console.log("Person2: Shows ticket");

const PreMovie=async()=>{
    const promiseWifeBringingTickets=new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('Ticket'),3000)
    });

    const getPopcorn=new Promise((resolve,reject)=>resolve("popcorn"));

    const getColdDrink=new Promise((resolve,reject)=>resolve("Cold drinks"));

    const getCandy=new Promise((resolve,reject)=>resolve("Candy"));

    let ticket=await promiseWifeBringingTickets;

    let [popcorn,colddrinks,candy]=await Promise.all([getPopcorn,getColdDrink,getCandy])

    console.log(`${popcorn},${colddrinks},${candy}`);

    return ticket;

}
PreMovie().then((m)=>console.log(`Person3: Shows ${m}`))

console.log("Person4: Shows ticket");
console.log("Person5: Shows ticket");