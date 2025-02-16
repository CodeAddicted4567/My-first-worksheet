// DOM

//Dot noatations:----
//change content
function textChange(){
    let t1=document.getElementById("txt1").textContent;
    txt1.textContent="Done";
    document.body.style.background="orange"
console.log(t1.textContent)
}

//changing colour 
function changeCol(){
    let p=document.getElementById("par");
    p.style.background="yellow";
    p.style.color="green";
console.log(x)
}

// Insert text
function content(){
    const tc=document.querySelector("p");
    tc.innerHTML="This is an example.";
}
// Show repeated messages
function noti(){
let a=0;
while(a<=5){
    alert("Click again");
    a=a+1;
    
}
}

// classlists:----
function fntCgn(){
    const chk=document.getElementById("myDiv");
    chk.classList.toggle("myStyle2");
}

// getting attributes:----
function picnge1(){
    const imglnk = document.querySelector("img")
    imglnk.getAttribute("src")

    const show = document.getElementById("els")
    show.innerHTML=imglnk;
}

// setup attributes:
function picnge(){
    const imglnks = document.querySelector("img")

    imglnks.setAttribute("src","pic1.jpg")
    imglnks.setAttribute("height","300px")
    imglnks.setAttribute("width","500px")

}

