window.document.addEventListener("DOMContentLoaded", () => {
    "use strict";
    const $ = (id) => document.getElementById(id);
    $("empForm").addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("ID: " + $("id").value + 
                    "\nName: " + $("name").value +
                    "\nExtension: " + $("ext").value + 
                    "\nEmail: " + $("email").value + 
                    "\nDepartment: " + $("department").value);
    }, false);
}, false);