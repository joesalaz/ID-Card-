

let btn = document.getElementById('btn');

function idCard()
{
    
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById("lastName").value;
    var postFullName = document.getElementById("postFullName");
  // postFullName.innerHTML = firstName + " " + lastName;
function showName(name1,name2)
{
    return name1 + " " + name2;
}
    postFullName.innerHTML = showName(firstName, lastName); 
}


btn.addEventListener('click', idCard);
  

  
  
  //Checking if Phone Number is Valid
//   let btn = document.getElementById("btn");

//   btn.addEventListener('click', function(){

//   let phonInput = document.getElementById("phoneNumber").value;
  
//   if(phonInput.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)){
//    return true;
//   }else{
//       alert ("Please enter a valid Phone Number!");
//       return false;
//   }
//   });

//  printCard = new String('<link rel="stylesheet" href="print.css">');
//    function  printId(el){
//         let page = document.body.innerHTML;
//         let printCard = document.getElementById(el).outerHTML;
//         printCard.innerHTML;
//         printCard.outerHTML;
//        printCard.style;
//         document.body.outerHTML = printCard;
//        window.print();
//        document.body.innerHTML = page;
//    }

