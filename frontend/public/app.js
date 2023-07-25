console.log("Starting:");
let today = new Date();
let date = today.getDate()+'-'+ (today.getMonth()+1)+'-'+today.getFullYear();

const CodingNinjas_API_ENDPOINT = `https://api.codingninjas.com/api/v3/public_section/potd/problem_list?date=${date}`;
const API = "http://localhost:5000/getData";

fetch(API)
    .then(data => data.json())
    .then(data =>{
        const GFG_url = data.GFG.ref;
        let GFG_name = data.GFG.title;
        const GFG_element = document.getElementById('gfg_potd');
        const GFG_element_ref = document.getElementById('gfg_potd_ref');
        GFG_element.innerHTML = `${GFG_name}`;
        GFG_element_ref.href = GFG_url;

        console.log("we are in LC");
        const leetCode_link = data.LC.ref;
        let leetCode_name = data.LC.title;
        const leetCode_element = document.getElementById('leetCode_potd');
        const leetCode_element_ref = document.getElementById('leetCode_potd_ref');
        leetCode_element.innerHTML = `${leetCode_name}`;
        leetCode_element_ref.href = `${leetCode_link}`

    });


fetch(CodingNinjas_API_ENDPOINT)
    .then(data => data.json())
    .then(ninja =>{
        let ninja_name = ninja.data.details.MODERATE.problem.name;
        const ninja_difficulty = ninja.data.details.MODERATE.problem.difficulty;
        const ninja_element = document.getElementById('ninjas_potd');
        const ninja_element_ref = document.getElementById('ninjas_potd_ref');
        ninja_element.innerHTML = `${ninja_name} `;
        ninja_element_ref.href = `https://www.codingninjas.com/codestudio/problem-of-the-day/${ninja_difficulty}`;
        
        let ninja_name2 = ninja.data.details.HARD.problem.name;
        const ninja_difficulty2 = ninja.data.details.HARD.problem.difficulty;
        const ninja_element2 = document.getElementById('ninjas_potd2');
        const ninja_element2_ref = document.getElementById('ninjas_potd2_ref');
        
        ninja_element2.innerHTML = `${ninja_name2} `;
        ninja_element2_ref.href = `https://www.codingninjas.com/codestudio/problem-of-the-day/${ninja_difficulty2}`;


    });


setInterval(displayTime,1000);

// function displayTime(){
//   document.getElementById('date').innerText = today.toLocaleString('en-US',{
//     dateStyle:'full'
//   });

// }

// displayTime();

console.log(window.location.href)