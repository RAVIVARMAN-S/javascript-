let smallImage = document.getElementById("seasonSmallImage")
let mediunImage = document.getElementById("seasonMediumImage")

let springsmall = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png"
let springmd = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png"

let summersmall = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png"
let summermd = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png"

let autumsmall = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png"
let autummd = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png"

let wintersmall = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png"
let wintermd = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png"

function springBtn() {
    smallImage.src = springsmall
    mediunImage.src = springmd
}

function summerBtn() {
    smallImage.src = summersmall
    mediunImage.src = summermd
}

function autumnBtn() {
    smallImage.src = autumsmall
    mediunImage.src = autummd
}

function winterBtn() {
    smallImage.src = wintersmall
    mediunImage.src = wintermd
}
