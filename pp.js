let a=[120,60,899]
let res=a.reduce((x,y)=> x+y,0)
console.log(res)
let name=["siva","navas","venkat","Kiran"]
let tt=name.find((x)=>x=="Kiran")
if(tt){
    console.log("Found")
}
else{
    console.log("Not found")
}
const makegreeter=(greeting)=>(ss)=>{
    return greeting + ss
}
let res1=makegreeter("Hello")(" ")
console.log(res1)

async function loaduser(){
    try{
        const res=await fetch("https://jsonplaceholder.typicode.com/users");
        const users=await res.json();
        console.log(users)
        const result1=users.map((x)=>x.email)
        console.log(result1)
    }
    catch(error){
        console.log(error)
    }
}
loaduser()
