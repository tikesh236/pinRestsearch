// var arr = [
//     {name: "Petals of roses", image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
//     {name: "Animals of town", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     {name: "the crowd of city", image: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     {name: "fruits of planet", image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     {name: "orange peeled", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=3337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
//     {name: "web design", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
//     {name: "apple juice", image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
// ]

// function showTheCards(){
//     var clutter = "";
//     arr.forEach(function(obj){
//         clutter += `<div class="box">
//         <img class="cursor-pointer" src="${obj.image}" alt="image">
//         <div class="caption">Lorem ipsum </div>
//     </div>`;
//     })

//     document.querySelector(".container")
//     .innerHTML = clutter;
// }

// function handleSearchFunctionality(){
//     var input = document.querySelector("#searchinput");
    

//     input
//     .addEventListener("focus", function(){
//         document.querySelector(".overlay").style.display = "block";
//     })

//     input
//     .addEventListener("blur", function(){
//         document.querySelector(".overlay").style.display = "none";
//     })

//     input
//     .addEventListener("input", function(){
//         const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
//         var clutter = "";
//         filteredArray.forEach(function(obj){
//             clutter += `<div class="res flex px-8 py-3">
//             <i class="ri-search-line font-semibold mr-5"></i>
//             <h3 class="font-semibold">${obj.name}</h3>
//         </div>`
//         })
//     document.querySelector(".searchdata").style.display = "block";
//         document.querySelector(".searchdata").innerHTML = clutter;
//     })
// }

// handleSearchFunctionality();
// showTheCards();





var arr = [
         {name : "boys morden ", image : "https://plus.unsplash.com/premium_photo-1705091982024-186ae1b7679f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
         {name : "rose day " , image : "https://images.unsplash.com/photo-1496062031456-07b8f162a322?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
         {name : "chocolate", image : "https://images.unsplash.com/photo-1610450949065-1f2841536c88?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
         {name : "gift", image : "https://media.istockphoto.com/id/1284040050/photo/young-woman-holding-stack-of-gift-boxes-over-blue-studio-background.jpg?s=1024x1024&w=is&k=20&c=TD7NpDS79Pv9ZFQOfE2GfDE4Dxl1LObV5rwcvicF-zU="},
         {name : "mobile", image : "https://images.unsplash.com/photo-1581795686346-b0f855c430e1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9iYWlsZXxlbnwwfHwwfHx8MA%3D%3D"}
        

]
 



function showTheCards (){

    var clutter ="";

    arr.forEach(function(obj){
        clutter += ` <div class="box">
        <img src="${obj.image}" alt="">
      </div> `;
    })

    document.querySelector(".container").innerHTML = clutter ;
};

var input = document.querySelector("#searchinput");




function handleSearchFunctionality(){
 input.addEventListener("focus",function(){
      document.querySelector(".overlay").style.display = "block";
  });


 input.addEventListener("blur",function(){
    document.querySelector(".overlay").style.display = "none";
});


input.addEventListener("input",function(){
    const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
    
    var clutter = "";
    
            filteredArray.forEach(function(obj){
             clutter += `<div class="res flex px-8 py-3">
                <i class="ri-search-line font-semibold mr-5"></i>
                <h3 class="font-semibold">${obj.name}</h3>
            </div>`

       
         })
         document.querySelector(".searchdata").style.display = "block";
         document.querySelector(".searchdata").innerHTML = clutter;

         





});





};


handleSearchFunctionality()
showTheCards()
