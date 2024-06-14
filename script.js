let startButton = document.querySelector(".startButton");
let titleScreen = document.querySelector(".titleScreen");
let contextButton = document.querySelector(".context");
let contextParagraph = document.querySelector(".contextParagraph")
let jumpscareButton = document.querySelector(".jumpScare");
let x1 = document.querySelector(".x1");
let startJumpscare = document.querySelector('.startJumpscare');
let startJumpscareButton = document.querySelector('.startJumpscareButton')
let jumpscareAudio = document.querySelector('.jumpscareAudio');
contextButton.addEventListener("click", function () {
        contextParagraph.style.display = "block";
        contextParagraph.style.border = "5px solid white";
        contextParagraph.style.color = "white";
        contextParagraph.style.maxWidth = '45%';
        contextParagraph.style.padding = '4px';
        x1.style.visibility = "visible";
});
x1.addEventListener("click", function() {
        contextParagraph.style.display = "none";
        x1.style.visibility = "hidden";
});
jumpscareButton.addEventListener("click", function() {
        startJumpscare.style.display = "block";
        startJumpscare.style.position = "absolute";
        startJumpscare.style.width = "1500px"
        startJumpscare.style.top = "10px";
        startJumpscareButton.style.margin = "-50px";
        startJumpscareButton.style.display = "block";
        jumpscareAudio.play();

        

})
startJumpscareButton.addEventListener("click", function() {
        startJumpscare.style.display = "none";
        startJumpscareButton.style.display = "none";
        jumpscareAudio.pause();
        jumpscareAudio.currentTime = 0;
        
});
let screenOne = document.querySelector(".screenOne");
let nextArrowButton = document.querySelector('.nextArrowButton');
startButton.addEventListener("click", function() {
        titleScreen.style.display = "none";
        screenOne.style.display = "block"
        document.body.style.backgroundImage = "url('https://vignette1.wikia.nocookie.net/freddy-fazbears-pizza/images/3/3b/Office_Normal.png/revision/latest?cb=20140825010224')";
        document.body.style.backgroundSize = "109%";

});
let screenTwo = document.querySelector('.screenTwo');
nextArrowButton.addEventListener('click', function() {
        document.body.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/df62ca76-fe9d-4f61-95c7-1cc81ba43c8c/ddvc63k-fd254f71-f560-40c5-a631-fb2771e70273.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RmNjJjYTc2LWZlOWQtNGY2MS05NWM3LTFjYzgxYmE0M2M4Y1wvZGR2YzYzay1mZDI1NGY3MS1mNTYwLTQwYzUtYTYzMS1mYjI3NzFlNzAyNzMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Twwtm4sEy8zI291WmO4s3o5ENZsovfVzPtEHVsmDn5Y')";
        screenOne.style.display = "none";
        screenTwo.style.display = "block";
});
let runButton = document.querySelector(".runButton");
let leftDoorButton = document.querySelector(".leftDoorButton");
let rightDoorButton = document.querySelector(".rightDoorButton");
let foxy = document.querySelector('.foxy');
let foxyButton = document.querySelector('.foxyButton');
let foxyMessage = document.querySelector('.foxyMessage');
let restartButton = document.querySelector('.restartButton');
let foxyDeath = document.querySelector('.foxyDeath');
runButton.addEventListener("click", function() {
        screenTwo.style.display = "none";
        foxyDeath.style.display = "block";
        document.body.style.backgroundImage = "url('https://m.media-amazon.com/images/I/61koHqSlR-L._AC_UF894,1000_QL80_.jpg')";
        document.body.style.backgroundSize = "1500px 700px";
        foxy.style.display = "block";
        foxy.style.position = "absolute";
        foxy.style.width = "1700px"
        foxy.style.top = "0px";
        foxyButton.style.margin = "-150px";
        foxyButton.style.display = "block";
        jumpscareAudio.play();
});

let bonnie = document.querySelector('.bonnie');
let bonnieButton = document.querySelector('.bonnieButton');
let bonnieMessage = document.querySelector('.bonnieMessage');
let bonnieDeath = document.querySelector('.bonnieDeath');
foxyButton.addEventListener("click", function() {
        foxy.style.display = "none";
        foxyButton.style.display = "none";
        jumpscareAudio.pause();
        jumpscareAudio.currentTime = 0;
        foxyMessage.style.display = "block";
        restartButton.style.display="block";
        restartButton.style.marginLeft ="642px";
});
restartButton.addEventListener('click', function() {
        document.body.style.backgroundImage = "url('https://image.api.playstation.com/vulcan/img/cfn/11307beluGq0SO4-dqIevRAKnuYU-hs2n9oqxsSitAxewEH8dX32eH6cDSt29sMFte8lQEG-2CvTYaGGEllg0vS6jsECJJGo.png')";
        titleScreen.style.display = "block";
        foxyDeath.style.display = "none";
        bonnieDeath.style.display = "none";
});

rightDoorButton.addEventListener("click", function() {
        screenTwo.style.display = "none";
        bonnieMessage.style.display = "block";
        restartButton.style.display = "contents";
        bonnieDeath.style.display = "block";
        document.body.style.backgroundImage = "url('https://media.entertainmentearth.com/assets/images/469132629f7d457c8a3862a59a7f5a14xl.jpg')";
        document.body.style.backgroundSize = "1500px 700px";
        bonnie.style.display = "block";
        bonnieButton.style.display = "block";
        bonnie.style.width = "1700px";
        bonnie.style.top = "0px";
        bonnieButton.style.margin = "-150px";
        jumpscareAudio.play();
        
});


bonnieButton.addEventListener("click", function() {
        bonnie.style.display = "none";
        bonnieButton.style.display = "none";
        jumpscareAudio.pause();
        jumpscareAudio.currentTime = 0;
        bonnieMessage.style.display = "block";
        restartButton.style.display="block";
        restartButton.style.marginLeft ="642px";
        restartButton.style.marginTop="600px";
});
let blockScreen = document.querySelector(".blockScreen");
let blockMessage = document.querySelector(".blockMessage");
leftDoorButton.addEventListener("click", function (){
        document.body.style.backgroundImage = "url('Bonnie_shadow.webp')"
        document.body.style.backgroundSize = "1500px 700px";
        screenTwo.style.display = "none";
        blockScreen.style.display ="block";
        blockMessage.style.display ="block";

});
let nextArrowButton2 = document.querySelector('.nextArrowButton2');
let nextArrow2 = document.querySelector('.nextArrow2');
let winScreen = document.querySelector('.winScreen');
let winMessage = document.querySelector('.winMessage');
let winGIF = document.querySelector('.winGIF');
let sixAMAudio = document.querySelector(".sixAMAudio");
nextArrowButton2.addEventListener("click", function () {
        blockScreen.style.display ="none";
        blockMessage.style.display ="none";
        winScreen.style.display = "block";
        winGIF.style.display = "block";
        winGIF.style.width = "1500px";
        sixAMAudio.currentTime = 6;
        sixAMAudio.play();
        document.body.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/81771905-146a-45ec-b96f-645d805e8aa1/dg8copn-9087a60a-9334-482f-a158-5c9b9cbef425.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgxNzcxOTA1LTE0NmEtNDVlYy1iOTZmLTY0NWQ4MDVlOGFhMVwvZGc4Y29wbi05MDg3YTYwYS05MzM0LTQ4MmYtYTE1OC01YzliOWNiZWY0MjUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1PN-PrHZzS_p0NU6S0-3hk1oSS23CyGuS1Kzj92GnmQ')"
        setTimeout(function(){
                winGIF.style.display = 'none';
            },5000);
});