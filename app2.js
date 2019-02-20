let greet = () =>{
    console.log('hi');
}
greet();

let logGreeting = (p) => {
    p();
}
logGreeting(greet);