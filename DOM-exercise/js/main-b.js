var main_el=document.querySelector("main"); 
var art = document.createElement("article");
art.innerHTML="<header><h2>Article header</h2></header><figure><img src='http://placekitten.com/320/160' alt='title'><figcaption>Caption</figcaption></figure><p>Here is some text. Here is some text. Here is some text. Here is some text.</p>" 
main_el.appendChild(art);