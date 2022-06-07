let x
document.getElementById("prompt").style.pointerEvents="none"
function change(x)
{
    switch(x){
        case 1:document.getElementById("playercircle").innerHTML=x
        break
        case 2:document.getElementById("playercircle").innerHTML=x
        break
        case 3:document.getElementById("playercircle").innerHTML=x
        break
        case 4:document.getElementById("playercircle").innerHTML=x
        break
        case 5:document.getElementById("playercircle").innerHTML=x
        break
        case 6:document.getElementById("playercircle").innerHTML=x
        break
        
    }
}

let enscore=0, plscore=0
function updatescore(x){
    
    let sco = Math.floor(Math.random()*6+1)
    enscore+=sco
    plscore+=x
    document.getElementById("enemycircle").innerHTML=sco
    if(sco!=x)
    {document.getElementById("scoree").innerHTML=enscore
    document.getElementById("scorep").innerHTML=plscore}
    else
    {   var ad=addEventListener("click",nothing())
        document.getElementById("scor").innerHTML=plscore
        document.getElementById("containergame").style.filter="blur(3px)"
        document.getElementById("container").style.filter="blur(3px)"
        document.getElementById("scores").style.filter="blur(3px)"
        document.getElementById("overlay1").style.filter="blur(3px)"
        document.getElementById("prompt").style.opacity="1"
        document.getElementById("prompt").style.pointerEvents="auto"
        if(enscore<plscore)
            document.getElementById("alerts").innerHTML="You Won!"
        if(enscore>plscore)
            document.getElementById("alerts").innerHTML="You Lost!"
        if(enscore==plscore)
            document.getElementById("alerts").innerHTML="It's a Draw!"
}
function nothing(){
    document.getElementById("one").style.pointerEvents="none"
    document.getElementById("two").style.pointerEvents="none"
    document.getElementById("three").style.pointerEvents="none"
    document.getElementById("four").style.pointerEvents="none"
    document.getElementById("five").style.pointerEvents="none"
    document.getElementById("six").style.pointerEvents="none"
}
    
}
function res(){
    document.getElementById("one").style.pointerEvents="auto"
    document.getElementById("two").style.pointerEvents="auto"
    document.getElementById("three").style.pointerEvents="auto"
    document.getElementById("four").style.pointerEvents="auto"
    document.getElementById("five").style.pointerEvents="auto"
    document.getElementById("six").style.pointerEvents="auto"
    document.getElementById("playercircle").innerHTML="0"
    document.getElementById("enemycircle").innerHTML="0"
    document.getElementById("scoree").innerHTML="0"
    document.getElementById("scorep").innerHTML="0"
    document.getElementById("alerts").innerHTML=""
    enscore=0, plscore=0
    document.getElementById("prompt").style.pointerEvents="none"
    document.getElementById("containergame").style.filter="blur(0px)"
    document.getElementById("container").style.filter="blur(0px)"
    document.getElementById("scores").style.filter="blur(0px)"
    document.getElementById("overlay1").style.filter="blur(0px)"
    document.getElementById("prompt").style.opacity="0"
}
