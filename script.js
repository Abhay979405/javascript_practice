function sayHello(){
 alert("hyy everyone")
}

// document.write("this is my first javascript page")

// var pi=3.14;
// var person="are you G0d";
// var answer="yes I am";
// document.write(pi+"<br>");
// document.write(person+"<br>");
// document.write(answer+"<br>");

function myfunction()
{
    var carname="welcome";
    document.getElementById("demo").innerHTML=carname;
}

// var num=10;
// console.log(num);
// console.log(typeof(num));

// num="sanjeev soni";
// console.log(num);
// console.log(typeof(num));

// num=false;
// console.log(num);
// console.log(typeof(num));

// num=null;
// console.log(num);
// console.log(typeof(num));

var animal= new Array("aman","sri");
document.write(animal);

var person={
    firstName:"ABHAY",
    lastname:"D",
    id:5566,

    getinfo:function(){
        return this.firstName+""+this.lastname;

    }
};
document.getElementById("demo").innerHTML=person.getinfo();