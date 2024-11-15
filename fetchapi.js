fetch('https://reqres.in/api/users')
.then(res=>{
    if(!res.ok){
        console.log("Network response is not ok");
    }
    return res.json();
}
)
.then(data=>console.log(data))
.catch(error=>{
    console.error(error);
})