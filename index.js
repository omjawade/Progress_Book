const addBtn = document.getElementById("add-btn");
const addTxt = document.getElementById("add-txt");
const titles = document.getElementById("titles");
const titleMessage = document.getElementById("title-message");
addBtn.addEventListener('click', handleAdd);
let i = localStorage.length;
updateList();
// leaderboard test
async function handleAdd(e){
    e.preventDefault();
    if(addTxt.value==""){
        addTxt.style.borderColor = "red";
        addTxt.style.color = "red";
        addTxt.setAttribute("value", "Title not entered");
        await new Promise(r => setTimeout(r, 700));
        addTxt.style.borderColor = "";
        addTxt.style.color = "";
        addTxt.setAttribute("value", "");
        return;
    }
    localStorage.setItem(i, addTxt.value);
    insertCard(addTxt.value);
    i++;
    console.log(localStorage);
}

function updateList(){
    if(localStorage.length > 0) titles.removeChild(titleMessage);
    for(let j = 0; j < localStorage.length; j++){
        insertCard(localStorage.getItem(j));
    }
}

function insertCard(text){
    let myCard = document.createElement('div');
        myCard.className = "card";
        let myCardBody = document.createElement('div');
        myCardBody.className = "card-body text-center";
        myCardBody.appendChild(document.createTextNode(text));
        myCard.appendChild(myCardBody);
        titles.appendChild(myCard);
}
