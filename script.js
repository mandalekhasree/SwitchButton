function switchOff(){
document.getElementById("bulbImage").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
document.getElementById("catImage").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
document.getElementById("switchstatus").textContent="Switched Off"
document.getElementById("offSwitch").style.backgroundColor="#cbd2d9"
document.getElementById("onSwitch").style.backgroundColor="#22c55e"
}
function switchOn(){
document.getElementById("bulbImage").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
document.getElementById("catImage").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
document.getElementById("switchstatus").textContent="Switched On"
document.getElementById("offSwitch").style.backgroundColor="#e12d39"
document.getElementById("onSwitch").style.backgroundColor="#cbd2d9"
}