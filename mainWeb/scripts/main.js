
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));


app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();

    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("Witaj");
  await delay(700);
  createText("Uruchamiam servera....");
  await delay(1500);
  createText("Dostępne komendy:");

  createCode("o mnie", "kim jestem, i czym sie interesuje.");
  await delay(500);
  createCode("all", "wszystkie komendy.");
  await delay(500);
  createCode("social -a", "social media :D");
  await delay(500);
  createCode("exit", "exit");

  await delay(500);
  new_line();
}


function new_line(){

  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# user";
  span1.textContent = " in";
  span2.textContent = " ~/lucekrk";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();

}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){

  const value = document.querySelector("input").value;
  if(value === "all"){
    trueValue(value);

    createCode("o mnie", "kim jestem, i czym sie interesuje.");
    createCode("social -a", "social media :D");
    createCode("clear", "wyczyść terminal");
    createCode("strona", "");
    createCode("exit", "exit");

  }
  else if(value === "o mnie"){
    trueValue(value);
    createText("Witaj z tej strony lucekrk")
    createText("Najbardziej interesuje się rakietami i kosmosem, lecz też programowaniem i elektroniką. Programowanie raaaaczej robie for fun. Nie wiem co jescze napisać :P")
  }
  else if(value === "O mnie"){
    trueValue(value);
    createText("Witaj z tej strony lucekrk")
    createText("Najbardziej interesuje się rakietami i kosmosem, lecz też programowaniem i elektroniką. Programowanie raaaaczej robie for fun. Nie wiem co jescze napisać :P")
  }
  else if(value === "social -a"){
    trueValue(value);
    createText("<i class='fab fa-discord white'></i> discord: <a>lucekrk#8849</a>")
    createText("<a href='https://www.instagram.com/lucekrkkk/' target='_blank'><i class='fab fa-instagram white'></i> instagram.com/lucekrkkk</a>")
  }
  else if(value === "Social -a"){
    trueValue(value);
    createText("<i class='fab fa-discord white'></i> discord: <a>lucekrk#8849</a>")
    createText("<a href='https://www.instagram.com/lucekrkkk/' target='_blank'><i class='fab fa-instagram white'></i> instagram.com/lucekrkkk</a>")
  }
  else if(value === "social"){
    trueValue(value);
    createText("miałeś na myśli: social -a?")
  }
  else if(value === "Switchocial"){
    trueValue(value);
    createText("miałeś na myśli: social -a?")
  }
  else if(value === "strona"){
    trueValue(value);
    createText("Terminal: <a href='https://github.com/heberleonard2/terminal-style-portfolio-page' target='_blank'><i class='fab fa-github white'></i> githu.com/terminal</a>")
    createText("Minigierka: <a href='https://deemor.github.io/powerStationHack/' target='_blank'><i class='fab fa-github white'></i> github.com/gierka</a>")
  }
  else if(value === "Strona"){
      trueValue(value);
      createText("Terminal: <a href='https://github.com/heberleonard2/terminal-style-portfolio-page' target='_blank'><i class='fab fa-github white'></i> githu.com/terminal</a>")
      createText("Minigierka: <a href='https://deemor.github.io/powerStationHack/' target='_blank'><i class='fab fa-github white'></i> github.com/gierka</a>")
  }

  else if(value === "exit"){
    trueValue(value);
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
    await delay(300);
    location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  }
  else if(value === "Exit"){
    trueValue(value);
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
    await delay(300);
    location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  }

  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else if(value === "clr"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else if(value === "Clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else if(value === "Clr"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`Nie ma takiej komendy: ${value}`)
  }
}

function trueValue(value){

  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){

  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");

  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();
