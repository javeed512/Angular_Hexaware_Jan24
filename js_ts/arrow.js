

function   f1(){


    console.log('hello I am JS normal function');

}

f1();




const  af =    ()=>{              // arrow or anonymous function


        let  id;
        let name;
            console.log('welcome to Arrow Function');

    }


   // af = ()=>{ console.log('this is my arrow function by javeed');}

    af();




   function   add( a , b = 5){

        return a + b;


   } 

 var result = add(3 , 7);

   console.log(result);

   //spread or rest operator 

   function  fun1(name,city , ...a1){    // ... spread operator  a1[]  

        console.log("fun1 executed.....")
        console.log(name + ": " + city);

        console.log(a1[0] + " " + a1[1] + " " +  a1[2] );

   }

   fun1("javeed","hyd",99,100,101,102);