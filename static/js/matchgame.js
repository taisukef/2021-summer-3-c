import {fetchJSON} from "https://js.sabae.cc/fetchJSON.js";

var userid = Number(sessionStorage.getItem("userid"))
let table = document.getElementById('match');  //表のオブジェクトを取得


const test = await fetchJSON("api/account/find_userid_bysports", {
    sportsname: sessionStorage.getItem("sports")
    });

for(const t of test){
    const user =  await fetchJSON("api/account/find_users_byuserid", {
        userid: t[0]
        });
    

    
    for(const u of user){
        let newRow = table.insertRow();

        let newCell = newRow.insertCell();
        let newText = document.createTextNode(u[1]);
        newCell.appendChild(newText);

        newCell = newRow.insertCell();
        newText = document.createTextNode(u[6]+u[7]);
        newCell.appendChild(newText);

        newCell = newRow.insertCell();
        newText = document.createTextNode(u[3]);
        newCell.appendChild(newText);

        newCell = newRow.insertCell();
        newText = document.createTextNode(u[4]);
        newCell.appendChild(newText);

        newCell = newRow.insertCell();
        newText = document.createTextNode(u[5]);
        newCell.appendChild(newText);

        newCell = newRow.insertCell();
        let btn = document.createElement("button");
        btn.innerHTML = "対戦を申し込む";
        btn.onclick = async () => {
            sessionStorage.setItem("enemyid",u[0]);
            sessionStorage.setItem("enemyname",u[1]);
            location.href = "/matchmake.html";
        };
        newCell.appendChild(btn);
    }
}
