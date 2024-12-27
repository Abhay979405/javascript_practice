// function sayHello(){
//  alert("hyy everyone")
// }

// document.write("this is my first javascript page")

// var pi=3.14;
// var person="are you G0d";
// var answer="yes I am";
// document.write(pi+"<br>");
// document.write(person+"<br>");
// // document.write(answer+"<br>");

// function myfunction()
// {
//     var carname="welcome";
//     document.getElementById("demo").innerHTML=carname;
// }

// // var num=10;
// // console.log(num);
// // console.log(typeof(num));

// // num="sanjeev soni";
// // console.log(num);
// // console.log(typeof(num));

// // num=false;
// // console.log(num);
// // console.log(typeof(num));

// // num=null;
// // console.log(num);
// // console.log(typeof(num));

// var animal= new Array("aman","sri");
// document.write(animal);

// var person={
//     firstName:"ABHAY",
//     lastname:"D",
//     id:5566,

//     getinfo:function(){
//         return this.firstName+""+this.lastname;

//     }
// };
// document.getElementById("demo").innerHTML=person

// var person ={
//     name:'ramesh',
//     age:'30',
//     branch:'it'}
//     console.log(person)
//     var person2=new object();
//     person2.nmae="krishnknat";
//     person2_age=32;
//     person2 is married=true;
//     person2.address=kanpur;

    //   console.log(person["_name"]);
    //   document.write(person["_name"])
    //   document.write

    // function show()
    // var ="a is a local variable";
    // document.write(a+"<br>");
    

    // function disk(){
    //     var="b is a local inner variable";
    
    // document.write(b+"<br>")}

    // var res=mul(12,30);
    // function mul(x,y)
    // {
    //   return x*y;

    // }
  // var a= 100;
  // var b= 15;
  // var c= 10;
  // var linebreak="<br>"
  // document.write("a+b+c=");
  // result =a+b+c;

//   function myfunction()
//   {
//     var x=5+5;
//     var y='5'+5;
//     var z="hello"+5;
//     var demop=document.getElementsById("demo")
//     demop.innerHTML=x+"<br>"+y+"<br>"+z;
//     }

//   var mycollection=[
//     1,
//     "meera maam",
//     true,
//   {
//     name:"sanjeev,
//     age:30

//   },
//   function(name)}
//     console.log(name);
// },
//   ["abhishek","bacchan","amitabh","bacchan"]


// function information(firstName,lastName,language){
//   if(arguments.length === 3){
//     console.log(firstName);
//     console.log(lastName);
//     console.log(language);
//   }

// }
// information();
// information('jitendra','abhi','vivek');

// function sayHello(){
//   alert("hello world")
// }

// function over(){
//   document.getElementById('mytext').style.color="#000";

// }

// function mout(){
//   document.getElementById('mytext').style.color="magenta";
// }

// var retval=confirm("do you want to continue ?"); if(retval==true){
//   alert("user wants to continue!"); 
// }
// else{
//   alert("user does not want to continue!");
// }

// var retval=prompt("enter your name:","your name here"); 
// alert("you have entered:"+retval);

// var name=prompt("enter your name","name");
//  document.write("<h2>hello"+name+</h2>);

// var question="what is 10+10";
// var answer=20;
// var response=prompt(question,"0");
// for (count=0; count<3;count++){
//   if(response!=answer){
//     confirm("wrong,press OK for another chance");
//     response=prompt(question,"0");
//     if(count==1){
//       alert("better luck for next time");
//     }
//   }
//   else{
//     alert("great!!you are right");
//     count=3;
//   // }
// }

// var output=(response==answer)?correct:incorrect;
// document.write("</BR>");
// document.write(output);

// function Redirect(){
//   window.location="https://www.google.com";

// }
// document.write("you will be redirected to main page in 10 sec");
// setTimeout('Redirect()',10000);

function validateForm(){
  var x=document.forms["myForm"]["fname"].value;
  if(x==null || x==""){
    alert("first name must be filled out");
    return false;
  }
}