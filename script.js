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

function wishMe(){
let day=new Date();
let hr=day.getHours();
if(hr>=0 && hr<12){
    speak("Good Morning")
}
else if(hr>=12 && hr<16){
    speak("good afternoon")
}
else{
    speak("good evening")
}
}
window.addEventListener("load", wishMe())

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

function takeCommand(msg){
        btn.style.display="block"
          voice.style.display="none"
if (msg.includes("hello ")|| msg.includes("hey")||msg.includes("hi")){
    speak("hello sir , how can i help you")
}
else if(msg.includes("whats your name")){
    speak("hello sir , i am virtual assintant like google assistant")
}
else if(msg.includes("open youtube")){
    speak("as you command sir")
    window.open("https://www.youtube.com/","_blank")
}
else if(msg.includes("open Facebook")){
    speak("as you command sir")
    window.open("https://www.facebook.com/","_blank")
}
else if(msg.includes("open Google")){
    speak("as you command sir")
    window.open("https://www.google.co.in/","_blank")
}
else if(msg.includes("open linkedin")){
    speak("as you command sir")
    window.open("https://www.linkedin.com/feed/","_blank")
}
else if(msg.includes("open Instagram")){
    speak("as you command sir")
    window.open("https://www.instagram.com/","_blank")
}

else if(msg.includes("open calculator")){
    speak("as you command sir")
    window.open("calculator://")
}
else if(msg.includes("open GTA 5")){
    speak("as you command sir")
    window.open("Grand Theft Auto V://")
}
else if(msg.includes("open baba bindas channel")){
    speak("as you command sir")
    window.open("https://www.youtube.com/@Bababindas21","_blank")
}

else{
    speak(`this is what i found on internet regarding ${msg.replace("jarvis","")}`)
    window.open(`https://www.google.com/search?q=${msg}`)
}




}

