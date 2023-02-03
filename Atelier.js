//mode sync
//3
const calculatePI = () => {
    const PI = 2 + 1.14;
    console.log(PI);
}
const timeout = setTimeout(calculatePI, 5000);

  
//2
const interval = setInterval(()=>{
console.log("hello");
}, 2000)
setTimeout(()=>{
    clearInterval(interval)
}, 10000)
setTimeout(()=>{
    clearTimeout(timeout);
}, 2000)
//1
console.log("iteration2");

//add 3 s
+1
// delete 2 = 3 s