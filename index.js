const url = "https://cat-fact.herokuapp.com/facts";
const factpara = document.querySelector("#factpara");
const btn = document.querySelector("#btn");

const getFacts = async()=>{
    console.log("getting data...");
    let response = await fetch(url);
    console.log(response); //json format
    let data = await response.json();
    console.log(data);
    factpara.innerText = data[3].text;
};

// function getFacts() {
//     fetch(url)
//     .then((response)=>{
//         return response.json;
//     })
//     .then((data)=>{
//         console.log(data);
//         factpara.innerText=data[2].text;
//     });
// }

btn.addEventListener("click",getFacts);