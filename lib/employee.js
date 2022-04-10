class Employee {
    constructor(name,employeeID,email){
    this.name = name;
    this.employeeID = employeeID;
    this.email = email;
    }
    
    getName(name){  
        return name
        }

    getEmployeeID(employeeID){
        return employeeID
    }
    getEmail(email){
        return email
    };

   }


module.exports= Employee