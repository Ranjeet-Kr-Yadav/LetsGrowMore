let submit=document.querySelector(".submit");
let clear =document.querySelector('.clear');

clear.addEventListener('click',()=>{
    let input=document.querySelectorAll('input');
    input.forEach(input => {
        input.value = '';
      });
})


submit.addEventListener('click',()=>{

    var output=document.querySelector(".output");
    console.log(output);
    let imageurl=document.querySelector("#img").value;
    var generatedurl=`https://drive.google.com/uc?export=view&id=${imageurl}`;
    //console.log(generatedurl);
   


   //storing the data in objects getting from form
    const data={
        name: document.getElementById("name").value,
        img: generatedurl,
        email: document.getElementById("email").value,
        websitelink: document.getElementById("websitelink").value,
        skills: document.getElementById("skills").value
    };
    console.log(data);

    //Card Template
    let newlist=document.createElement('div');
    newlist.classList.add('addData');
    newlist.innerHTML=`
      <img src="${generatedurl}" alt="image">
      <div class="Container1"><h4>Name : </h4><h4>${data.name}</h4></div>
      <a class="link" href="${data.email}"><h4>Email : </h4><h4>${data.email}</h4></a><br>
      <a class="link" href="${data.websitelink}"><h4>Website : </h4><h4>${data.websitelink}</h4></a>
      <div class="Container1"><h4>Skills : </h4><h4>${data.skills}</h4></div>
    `
    console.log(newlist);
    //adding the card one after the other
    output.appendChild(newlist);
   
    //clearing the input fields after submission
    let input=document.querySelectorAll('input');
    input.forEach(input => {
        input.value = '';
      });

})