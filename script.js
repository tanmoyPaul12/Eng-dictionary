const inputEle = document.getElementById("input")
const infoEle = document.getElementById("info")
const meaningEle = document.getElementById("meaning-container")
// promise==>
// const fetchAPI = (word)=>{
//     const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}` 
//     const result = fetch(url)  
//     .then((res)=>res.json());
//     console.log(result) 
// }

// async await==>
async function fetchAPI(word) {
    try {
        infoEle.style.display = "block"; //eta na dile next time r waiting dekaito na
        meaningEle.style.display = "none"; // eta krsi jate next word a abr hide hoijay
        infoEle.innerText = `Searching for the word "${word}"`; 

        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        let response = await fetch(url);
        let data = await response.json();
        
        infoEle.style.display = "none"; // ans aile jate eta jay giya 
        meaningEle.style.display = "block"; // css a none kora ase 
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}




inputEle.addEventListener("keyup" ,(e)=>{
    if(e.target.value && e.key==="Enter"){
        fetchAPI(e.target.value)
    }
})