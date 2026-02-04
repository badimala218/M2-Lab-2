window.document.addEventListener("DOMContentLoaded", () => {
    "use strict";
    let form = document.getElementById("empForm");
    let inputs = document.getElementsByTagName("input");
    let dept = document.getElementById("department");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("ID: " + inputs[0].value + "\n" + "Name: " + 
                    inputs[1].value + "\n" + "Extension: " + 
                    inputs[2].value + "\n" + "Email: " + 
                    inputs[3].value + "\n" + "Department: " + dept.value);
    }, false);
}, false);