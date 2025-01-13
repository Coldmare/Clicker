var click = 0;
var clickRange = 1;
var byTo = 5;
function clicker(){
    click += clickRange
    let a = document.getElementById("paragraph").innerHTML = click
}
function double(){
    if (click >= byTo){
        byTo *= 2
        click = 0
        clickRange += 2
        let a = document.getElementById("paragraph").innerHTML = click
        let printByTo = document.getElementById("button").innerHTML = byTo
    }
}