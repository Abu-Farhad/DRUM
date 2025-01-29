// document.querySelector("button").addEventListener("click",clicked);
// function clicked(){
//     alert("I got clicked");
// }
// document.querySelector("button").addEventListener("click",function(){
//     alert("I got clicked!")
// })

for(i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        let t=this.innerHTML;
        if(t=='w'){
            let audio=new Audio("sounds/crash.mp3");
            audio.play();
        }
        else if(t=='a'){
            let audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
        }
        else if(t=='s'){
            let audio=new Audio("sounds/snare.mp3");
            audio.play();
        }
        else if(t=='d'){
            let audio=new Audio("sounds/tom-1.mp3");
            audio.play();
        }
        else if(t=='j'){
            let audio=new Audio("sounds/tom-2.mp3");
            audio.play();
        }
        else if(t=='k'){
            let audio=new Audio("sounds/tom-3.mp3");
            audio.play();
        }
        else if(t=='l'){
            let audio=new Audio("sounds/tom-4.mp3");
            audio.play();
        }
    })
}

addEventListener("keypress",function(event){
    addSound(event.key);
})
function addSound(t){
    if(t=='w'){
        let audio=new Audio("sounds/crash.mp3");
        audio.play();
    }
    else if(t=='a'){
        let audio=new Audio("sounds/kick-bass.mp3");
        audio.play();
    }
    else if(t=='s'){
        let audio=new Audio("sounds/snare.mp3");
        audio.play();
    }
    else if(t=='d'){
        let audio=new Audio("sounds/tom-1.mp3");
        audio.play();
    }
    else if(t=='j'){
        let audio=new Audio("sounds/tom-2.mp3");
        audio.play();
    }
    else if(t=='k'){
        let audio=new Audio("sounds/tom-3.mp3");
        audio.play();
    }
    else if(t=='l'){
        let audio=new Audio("sounds/tom-4.mp3");
        audio.play();
    }
}
