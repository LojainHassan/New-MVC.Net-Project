// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


function promptInteract() {
    var uName = prompt("Enter your usserame :", "Lojain");
    var passWord = prompt("Enter your password :");
    if (uName == "admin" && passWord == "123") {
        document.write("Welcome Admin");
    }
    else {
        document.write("Wrong pasword / userName");
        var uName = prompt("Enter your usserame :", "Lojain");
        var passWord = prompt("Enter your password :");
    }
}