function saveNotes(){

    const notes =
    document.getElementById("notes").value;

    localStorage.setItem(
        "rajAdminNotes",
        notes
    );

    alert("Notes Saved!");
}

window.onload = function(){

    document.getElementById("notes").value =
    localStorage.getItem("rajAdminNotes") || "";

}
let password = prompt("Enter Admin Password");

if(password !== "22102006"){
    document.body.innerHTML =
    "<h1 style='color:white;text-align:center;margin-top:100px'>Access Denied</h1>";
}
function saveNotes(){

    const notes =
    document.getElementById("notes").value;

    localStorage.setItem(
        "rajAdminNotes",
        notes
    );

    alert("Notes Saved!");
}

window.onload = function(){

    const notesBox =
    document.getElementById("notes");

    if(notesBox){

        notesBox.value =
        localStorage.getItem(
            "rajAdminNotes"
        ) || "";

    }

}
setInterval(function(){

document.getElementById("clock").innerHTML =
new Date().toLocaleTimeString();

},1000);