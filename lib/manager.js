


class Manager {
    constructor(manager,intern,engineer,officeNumber){
        manager= true;
        intern= false;
        engineer= false;
        this.officeNumber= officeNumber
    }
    
    getOfficeNumber(officeNumber) {
       return officeNumber
     }
    }
module.exports=Manager