
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }      
        var parent = document.getElementById("parent");
        document.querySelector(".b1i1").classList.add("animation4");
        document.querySelector(".b1i2").classList.add("animation5");
        document.querySelector(".b1i3").classList.add("animation6");
        document.querySelector(".b1i4").classList.add("animation7");
        document.querySelector(".b1i5").classList.add("animation8");


        function bgchange() {
            var parent = document.getElementById("parent");
            var height = parent.scrollTop;
            if (height < window.innerHeight) {
                document.querySelector(".belowText1").innerText = "ABC 456";
                document.querySelector(".belowText2").innerHTML = "We are the best <br>web development company <br> in the world";
                document.querySelector(".belowText3").innerHTML = "View Case Study <i class='fa fa fa-arrow-right'></i>";
                document.documentElement.style.setProperty('--bgcolor1', '#15243B');
                document.getElementById("Opaque_Ring").style.setProperty("stroke-dasharray", "10,1000");
                document.querySelector(".dotsstro2").style.setProperty("opacity", "0.4");
                document.querySelector(".svgText2").style.display = "block";
                document.querySelector(".nasa").style.opacity = "0";
                document.querySelector(".b2i2").classList.remove("animation1");
                document.querySelector(".b2i1").classList.remove("animation2");
                document.querySelector(".nasa").classList.remove("animation3");
                document.querySelector(".b1i1").classList.add("animation4");
                document.querySelector(".b1i2").classList.add("animation5");
                document.querySelector(".b1i3").classList.add("animation6");
                document.querySelector(".b1i4").classList.add("animation7");
                document.querySelector(".b1i5").classList.add("animation8");
                document.querySelector(".b3i1").classList.remove("animation9");
                document.querySelector(".b3i2").classList.remove("animation10");

            }
            if (height > window.innerHeight / 2) {
                document.querySelector(".belowText1").innerText = "ABC 345";
                document.querySelector(".belowText3").innerText = "Coming Soon";
                document.querySelector(".belowText2").innerHTML = "We are the best <br>web development company <br> in the world";
                document.documentElement.style.setProperty('--bgcolor1', '#0F113B');
                document.getElementById("Opaque_Ring").style.setProperty("stroke-dasharray", "142,1000");
                document.querySelector(".dotsstro2").style.setProperty("opacity", "1");
                document.querySelector(".dotsstro3").style.setProperty("opacity", "0.4");
                document.querySelector(".svgText2").style.display = "none";
                document.querySelector(".nasa").style.opacity = "1";
                document.querySelector(".b2i2").classList.add("animation1");
                document.querySelector(".b2i1").classList.add("animation2");
                document.querySelector(".nasa").classList.add("animation3");
                document.querySelector(".b1i1").classList.remove("animation4");
                document.querySelector(".b1i2").classList.remove("animation5");
                document.querySelector(".b1i3").classList.remove("animation6");
                document.querySelector(".b1i4").classList.remove("animation7");
                document.querySelector(".b1i5").classList.remove("animation8");
                document.querySelector(".b3i1").classList.remove("animation9");
                document.querySelector(".b3i2").classList.remove("animation10");


            }
            if (height > window.innerHeight * 1.8) {
                document.querySelector(".belowText1").innerText = "ABC 234";
                document.querySelector(".belowText2").innerHTML = "We are the best <br>web development company in the world";
                document.querySelector(".belowText3").innerText = "Coming Soon";
                document.documentElement.style.setProperty('--bgcolor1', '#4E27CE');
                document.getElementById("Opaque_Ring").style.setProperty("stroke-dasharray", "280,1000");
                document.querySelector(".dotsstro3").style.setProperty("opacity", "1");
                document.querySelector(".svgText2").style.display = "block";
                document.querySelector(".nasa").style.opacity = "0";
                document.querySelector(".b2i2").classList.remove("animation1");
                document.querySelector(".b2i1").classList.remove("animation2");
                document.querySelector(".nasa").classList.remove("animation3");
                document.querySelector(".b1i1").classList.remove("animation4");
                document.querySelector(".b1i2").classList.remove("animation5");
                document.querySelector(".b1i3").classList.remove("animation6");
                document.querySelector(".b1i4").classList.remove("animation7");
                document.querySelector(".b1i5").classList.remove("animation8");
                document.querySelector(".b3i1").classList.add("animation9");
                document.querySelector(".b3i2").classList.add("animation10");
            }
        }
        parent.addEventListener('scroll', bgchange);
        animate();


function click1(){
    document.querySelector(".pizza1").style.display="flex";
    document.querySelector(".pizza2").style.display="none";
    document.querySelector(".pizza3").style.display="none";
    document.querySelector(".btn1").style.background="rgb(98, 98, 98)"; 
    document.querySelector(".btn2").style.background="white";
    document.querySelector(".btn3").style.background="white";   
}
function click2(){
    document.querySelector(".pizza1").style.display="none";
    document.querySelector(".pizza3").style.display="none";
    document.querySelector(".pizza2").style.display="flex";
    document.querySelector(".btn2").style.background="rgb(98, 98, 98)";
    document.querySelector(".btn3").style.background="white";
    document.querySelector(".btn1").style.background="white"; 
}
function click3(){
    document.querySelector(".pizza2").style.display="none";
    document.querySelector(".pizza3").style.display="flex";
    document.querySelector(".pizza1").style.display="none";
    document.querySelector(".btn3").style.background="rgb(98, 98, 98)";
    document.querySelector(".btn2").style.background="white";
    document.querySelector(".btn1").style.background="white"; 
}