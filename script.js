let right=document.querySelector(".right");
let yourNot=document.querySelector(".yourNot");
let Notificationn=document.getElementById("Notification");
let notificationNew=document.querySelector(".notificationNew");
let  messageNew=document.querySelector(".messageNew");
let messagess=document.getElementById("messages");
let messages=document.querySelector(".messages");
let btn=document.querySelectorAll(".btn");
let Theme=document.getElementById("Theme");
let customizeTheme=document.querySelector(".customizeTheme");
let close=document.getElementById("close");
let message=document.querySelectorAll(".message");
let searchMessage=document.getElementById("searchMessage");
let changeColor=document.querySelectorAll('.customizeColor .choose span');
let FontSize=document.querySelectorAll(".customizeSize .choose span");
searchMessage.addEventListener('keyup' , ()=>{
    const value=searchMessage.value.toLowerCase();
    message.forEach(user => {
        let name=user.querySelector("h5").textContent.toLowerCase();
        if(name.indexOf(value) != -1){
            user.style.display='flex'
        }else{
            user.style.display='none'
        }
    })
})
window.onscroll = function () {
    console.log(this.scrollY);
    if (window.scrollY >= 440) {
    right.classList.add("pos")
    } else {
        right.classList.remove("pos")
    }
}
close.addEventListener("click",()=>{
    customizeTheme.classList.add("close");
    customizeTheme.classList.remove("openTheme");
});
Theme.addEventListener("click",()=>{
    customizeTheme.classList.add("openTheme");
    customizeTheme.classList.remove("close");
    yourNot.classList.remove("show");
});
Notificationn.addEventListener("click",()=>{
    yourNot.classList.toggle("show");
    notificationNew.style.display="none"
})
btn.forEach(item=>{
    item.addEventListener("click",()=>{
        btn.forEach(ele=>{
            ele.classList.remove("active")
        })
        item.classList.add("active");
    })
})
messagess.addEventListener("click",()=>{
    messageNew.style.display="none";
    yourNot.classList.remove("show");
    messages.style.boxShadow="0 0 1rem var(--color-primary)"
    setTimeout(()=>{
        messages.style.boxShadow="none"
    },2000)
})
FontSize.forEach(item =>{
    let size;
    item.addEventListener("click",()=>{
        FontSize.forEach(ele=>{
            ele.classList.remove("active")
        })
        item.classList.add("active");
    })
    item.addEventListener("click",()=>{
        if(item.classList.contains("FontSizeOne")){
            size='10px'
        }
        else if(item.classList.contains("FontSizeTwo")){
            size='13px'
        }
        else if(item.classList.contains("FontSizeThree")){
            size='16px'
        }
        else if(item.classList.contains("FontSizeFour")){
            size='19px'
        }
        else if(item.classList.contains("FontSizeFive")){
            size='22px'
        }
        document.querySelector('html').style.fontSize=size;
    })
})
changeColor.forEach(item =>{
    item.addEventListener("click",()=>{
        changeColor.forEach(ele=>{
            ele.classList.remove("active")
        })
        item.classList.add("active");
    let primaryHue;
        if(item.classList.contains("colorOne")){
            primaryHue=252;
        }
        else if(item.classList.contains("colorTwo")){
            primaryHue=52;
        }
        else if(item.classList.contains("colorThree")){
            primaryHue=352;
        }
        else if(item.classList.contains("colorFour")){
            primaryHue=152;
        }
        else if(item.classList.contains("colorFive")){
            primaryHue=202;
        }
        document.documentElement.style.setProperty('--primary-Hue', primaryHue);
    })
})
let Light=document.querySelector('.Light');
let Dark=document.querySelector('.Dark');
let LightsOut=document.querySelector('.LightsOut');
let lightColor;
let DarkColor;
let WhiteColor;
Light.addEventListener('click',()=>{
    Light.classList.add("active")
    Dark.classList.remove("active")
    LightsOut.classList.remove("active")
    window.location.reload();
})
Dark.addEventListener("click",()=>{
    DarkColor='95%';
    lightColor='15%';
    WhiteColor='20%'
    Dark.classList.add("active")
    Light.classList.remove("active")
    LightsOut.classList.remove("active")
    changeBg();
})
LightsOut.addEventListener("click",()=>{
    DarkColor='95%';
    lightColor='10%';
    WhiteColor='0%'
    LightsOut.classList.add("active")
    Dark.classList.remove("active")
    Light.classList.remove("active")
    changeBg();
})
const changeBg=()=>{
    document.documentElement.style.setProperty('--dark-color-lightness', DarkColor);
    document.documentElement.style.setProperty('--light-color-lightness',lightColor );
    document.documentElement.style.setProperty('--white-color-lightness', WhiteColor);
}
