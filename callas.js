const inpName = document.getElementById("inpName");
const inpFamily = document.getElementById("inpFamily");
const inpPhone = document.getElementById("inpPhone");
const inpEmail = document.getElementById("inpEmail");
const btnSend = document.getElementById("btnSend");
const inputvalues = [];
const cardinfo = document.getElementById("cardinfo")





let scrollUp = document.querySelector('.scrol-up');

scrollUp.addEventListener("click", function(){
    window.scrollTo(0,0);
});


btnSend.onclick = ()=>{
    let inpNamee =inpName.value;
    let inpEmaill = inpEmail.value;
    let inpFamilyy = inpFamily.value;
    let inpPhonee = inpPhone.value; 

    let valuess =  {
        inpNamee,
        inpEmaill,
        inpFamilyy,
        inpPhonee,
        
    }
    
    if (inpName.value.length <2|| inpEmail.value.length <2 ||inpPhone.value.length <7) {
        alert("noooooooo baddddd baddd check your value");
        return
    }
   
    else{
        inputvalues.push(valuess)
        inpEmail.value ="";
        inpFamily.value ="";
        inpName.value ="";
        inpPhone.value = "";

    }
 
card(inputvalues)

}

function card(pram) {
    cardinfo.innerHTML += 
    `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${pram[0].inpNamee}  ${pram[0].inpFamilyy}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${pram[0].inpEmaill}</li>
      <li class="list-group-item">${pram[0].inpPhonee}</li>

    </ul>
  </div>`
}