
 class Employee {


        eid:number = 0;

        ename:string = "";

    

        constructor(){


            
                console.log("Employee constructor");

        }


          display():void{

              //  return "Hello Employee";

           } 


      x:any = 99;

         n1 : number = ( <number>this.x);


      






}


const employee:Employee = new Employee();

        employee.eid = 101;
        employee.ename = "javeed";

        console.log(employee);