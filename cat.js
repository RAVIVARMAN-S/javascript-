function switchOff(){
    document.getElementById("switchStatus").textContent="Switched off"
    document.getElementById("bulbImage").src ="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catImage").src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("onSwitch").style.backgroundColor="#22c55e";
    document.getElementById("ofSwitch").style.backgroundColor="#cbd2d9";

}

function switchOn(){
    document.getElementById("switchStatus").textContent="Switched on"
    document.getElementById("bulbImage").src ="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catImage").src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("onSwitch").style.backgroundcolor="#cbd2d9";
    document.getElementById("ofSwitch").style.backgroundcolor="#e12d39";
  }