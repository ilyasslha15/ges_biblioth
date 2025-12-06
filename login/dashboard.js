
let client = {name:"Admine",gmail:"admine@gmail.com"};
localStorage.setItem("currentUser",JSON.stringify(client));
let user = JSON.parse(localStorage.getItem("currentUser"));
 // test si le admine ou client active
if(user.name != "Admine" ){
  document.querySelector("a").remove();
}
let div = document.getElementById("name");
let add = document.createElement("p");
let btn = div.querySelector("button")
 add.textContent="Welcome "+user.name;
 add.style.fontSize="large"
 div.insertBefore(add,btn)

 // french Traduction
function french(){
  let i =0
  let j=0
  chart2.options.plugins.title.text="Chiffre d'affaires mensuel" 
  chart2.data.datasets[0].label="Apercu"
  chart2.update()
document.querySelector("button").textContent="Déconnecté";
document.querySelectorAll("a").forEach(a =>{
if(i==0){
  a.textContent='Ajouter Livre';
}else{
  a.textContent="Lister Livre"
}
i++;
})
document.querySelectorAll("h5").forEach(a =>{
if(j==0){
  a.textContent='Aperçu';
}else if(j==1){
  a.textContent="Chiffre d'affaires total"
}else if(j==2){
  a.textContent="Nombre des livres"
}
else if(j==3){
  a.textContent="Croissance du chiffre d'affaires (%)"
}
j++;
})
add.textContent="Bienvenue "+user.name;
}


 // English traduction
function english(){
  let j=0;
  let i=0;
   chart2.options.plugins.title.text="Monthly Revune" 
  chart2.data.datasets[0].label="OverView"
  chart2.update()
document.querySelector("button").textContent="Disconnecte";
document.querySelectorAll("a").forEach(a =>{
if(i==0){
  a.textContent='Add Book';
}else{
  a.textContent="Liste Books"
}
i++;
})
 add.textContent="Welcome "+user.name;

 document.querySelectorAll("h5").forEach(a =>{
if(j==0){
  a.textContent='OverView';
}else if(j==1){
  a.textContent="Totale Revenue"
}else if(j==2){
  a.textContent="Number Of the Books"
}
else if(j==3){
  a.textContent="Revenue Growth (%)"
}
j++;
})
}





const dia1 = document.getElementById("dia1");
        const dia2 = document.getElementById("dia2");

let hor=0
let act=0
let adv=0
let chart2;
let select = document.getElementById("select");
select.addEventListener("change",()=>{
let a = select.value;
if(a=="French"){
french();
}else if(a=="English"){
english();
}
})
  let TR = document.getElementById("TR");
  let NOB = document.getElementById("NOB");
  let RG = document.getElementById("RG");
  let table = [{titre:"Bersek",id:1,type:"action"},{titre:"test",id:2,type:"horror"},{titre:"test",id:2,type:"horror"}];
 localStorage.setItem("books",JSON.stringify(table));
  const Livres = JSON.parse(localStorage.getItem("books"));
  if(Livres){
    Livres.forEach(varz => {
        if(varz["type"] === "horror"){
    hor++;
}
if(varz["type"] === "adventure"){
    adv++;
}
if(varz["type"] === "action"){
    act++;
}
    }); 
    // diagramme circulaire
chart2 = new Chart(dia2, {
  type: 'doughnut',
  data: {
    labels: ['Horror', 'Adventure', 'Action'],
    datasets: [{
      label: 'Overview',
      data: [hor, adv, act],
      backgroundColor: [
        '#4e73df', 
        '#1cc88a',
        '#f6c23e' 
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' 
      },
      title: {
        display: true,
        text: 'Monthly Revune'
      }
    }
  }
});
// Diagramme en barres
 new Chart(dia1, {
    type: 'bar',
    data: {
      labels: ['Action', 'Adventure', 'Horror'],
      datasets: [{
        label: 'Revenue',
        data: [hor, adv, act],
        backgroundColor: '#4e73df'
      }]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });    
 let books = JSON.parse(localStorage.getItem("Livres"));
NOB.innerHTML=books.length
  }else{
    TR.innerHTML=0;
        NOB.innerHTML=0;
    RG.innerHTML=0;
  }
 
