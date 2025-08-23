const inputEle = document.getElementById("input")
const infoEle = document.getElementById("info")
const meaningEle = document.getElementById("meaning-container")
const wordTitleEle = document.getElementById("title")
const wordmeaningEle = document.getElementById("meaning-txt")
const audioEle =document.getElementById("audio")


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

        if(data.title){
             meaningEle.style.display = "block";
             infoEle.style.display = "none";// meaning aibo pore eta jaibo giya
             wordTitleEle.innerText = word;
             wordmeaningEle.innerText = "N/A";
             audioEle.style.display = "none";
        }  
         else{
             infoEle.style.display = "none"; // ans aile jate eta jay giya 
             meaningEle.style.display = "block"; // css a none kora ase 
             audioEle.style.display = "inline-flex";

             wordTitleEle.innerText = data[0].word;
             wordmeaningEle.innerText = data[0].meanings[0].definitions[0].definition;
             audioEle.src = data[0].phonetics[0].audio;
             console.log(data);
        }
        
       
    } catch (error) {
        infoEle.innerText = `404 Error, try again later`; 

    }
}


inputEle.addEventListener("keyup" ,(e)=>{
    if(e.target.value && e.key==="Enter"){
        fetchAPI(e.target.value)
    }
})