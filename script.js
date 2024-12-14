let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")


function speak(text){
let text_speak=new SpeechSynthesisUtterance(text)
text_speak.rate=0.9;
text_speak.pitch=0.8;
text_speak.volume=1;
text_speak.lang="hi-GB"
window.speechSynthesis.speak(text_speak)
}



let speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition
let recognition=new speechRecognition()
recognition.onresult=(event)=>{

   let currentIndex= event.resultIndex
  let transcript= event.results[currentIndex][0].transcript
  content.innerHTML=transcript;
  takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})



function takeCommand(msg) {
            btn.style.display="block"
          voice.style.display="none"
 
    const commands = [
       { keywords: ["instagram"], url: "https://www.instagram.com/" },
       { keywords: ["linkedin"], url: "https://www.linkedin.com/feed/" },
       { keywords: ["youtube"], url: "https://www.youtube.com/" },
       { keywords: ["calculator"], url: "calculator://" },
    ];
 
   
    for (let command of commands) {
       if (command.keywords.some(keyword => msg.toLowerCase().includes(keyword))) {
          speak("As you command, sir.");
          window.open(command.url, "_self");
        return;
    }

 }

    speak(`this is what i found on internet regarding ${msg.replace("veronica","")}`)
        window.open(`https://www.google.com/search?q=${msg}`,"_self")
 
}


