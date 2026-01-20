// showpopup.addEventListener("click",function(){
//     overlay.style.display="block";
//     popup.style.display="block";
// })

// let cancelpopup=document.querySelector(".cancelpopup");
// cancelpopup.addEventListener("click",function(){
//     overlay.style.display="none";
//     popup.style.display="none";
// }
// )
// let books = JSON.parse(localStorage.getItem("books")) || [];
let container=document.querySelector(".container");
let overlay=document.querySelector(".overlay");
let popup=document.querySelector(".popup");
let showpopup=document.querySelector(".add-button");
let inp1=document.querySelector(".inp1");
let inp2=document.querySelector(".inp2");
let des=document.querySelector(".des");
let addbook=document.querySelector(".add");
let cancelpopup=document.querySelector(".cancelpopup");

let books=JSON.parse(localStorage.getItem("books")) ||[];

showpopup.addEventListener("click",function(){
    overlay.style.display="block";
    popup.style.display="block";
})

function closepopup(){
    overlay.style.display="none";
    popup.style.display="none";
    inp1.value="";
    inp2.value="";
    des.value="";
}

cancelpopup.addEventListener("click", closepopup);
overlay.addEventListener("click", closepopup);

addbook.addEventListener("click",function(){
    if(inp1.value=="" || inp2.value=="" || des.value==""){
        alert("Please fill all the fields");
        return;
    }
    let book={
        id:Date.now(),
        title:inp1.value,
        author:inp2.value,
        description:des.value

    }
    books.push(book);
    localStorage.setItem("books",JSON.stringify(books))
    renderbooks();
    closepopup();

    
})

function renderbooks(){
    container.innerHTML="";
    books.forEach(book =>{
        let div = document.createElement("div");
        div.className="book-container";
        div.innerHTML=`
        <h2>${book.title}</h2>
        <h5>${book.author}</h5>
        <p>${book.description}</p>
        <button onclick="deletebook(${book.id})">Delete</button>
        `
        container.appendChild(div);
    })
}

function deletebook(id){
    books=books.filter(book => book.id!==id);
    localStorage.setItem("books",JSON.stringify(books));
    renderbooks();
}
renderbooks();


