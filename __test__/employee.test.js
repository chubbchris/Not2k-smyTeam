const Employee = require('../lib/employee.js')
const Manager=require('../lib/manager.js')
const Intern=require('../lib/intern.js')
const Engineer=require('../lib/engineer.js')
 

test ('Employee Class',()=>{
       const employee = new Employee('chris','1','Chris@email.com');
           
           employee.getName()
           employee.getEmployeeID()
           employee.getEmail()
           
           
           expect(employee.name).toBe('chris')
           expect(employee.employeeID).toBe('1')
           expect(employee.email).toBe('Chris@email.com');
           
        
        })

        it ('is a Manager',()=>{
            const employee = new Manager (true,false,false,10);
                    
                    
                
           employee.getOfficeNumber()
          
           expect(employee.officeNumber).toBe(10)
           
        });

        it('is a intern', ()=>{
            const employee = new Intern (false,true,false,'East Coast University');
            employee.getSchool()
           
            expect(employee.school).toBe('East Coast University')
            

        
            });

        it('its a engineer',()=>{
            const employee = new Engineer (false,false,true,'Timcodes')
           
            employee.getGithub()
          
            expect(employee.github).toBe('Timcodes')
            

        });

    

