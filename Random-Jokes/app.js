const url = "https://icanhazdadjoke.com/";
const btn = document.querySelector("#btn");

btn.addEventListener("click",async()=>{
    let res = await getJokes();
    const p = document.querySelector("#jokes");
    p.innerText = res.data.joke;
})

/* AJAX CALL */
async function getJokes(){
    try{
        const config = {headers: {Accept:"application/json"}};
        return await axios.get(url,config);
    }catch{
        return " An Error caught."
    }
}