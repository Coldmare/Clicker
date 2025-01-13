var click = 0;
var clickRange = 1;
var byTo = 10;
function clicker(){
    click += clickRange
    let a = document.getElementById("paragraph").innerHTML = click
}
function double(){
    if (click >= byTo){
        byTo *= 20
        click = 0
        clickRange += 10
        let a = document.getElementById("paragraph").innerHTML = click
        let printByTo = document.getElementById("button").innerHTML = byTo
    }
}