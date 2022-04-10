const generateManager = teamDataArr => {
    
    return `
    <div class = "flex-column bg-white border border-2 border-muted rounded m-3 " >
    ${teamDataArr
    .filter(({Manager}) => Manager)
    .map(({ name, employeeID, email, officeNumber }) =>{
        return`
        <div class = "col d-flex-column text-white bg-primary justify-content-around" >
            <h3> ${name} </h3>
            <h2> Manger </h2>
        </div>
        <div class = "col d-flex-column justify-content-center" >
            <h3 class="border">Employee ID: ${employeeID}</h3>
           <a href="mailto:${email}"><h3 class="border">Email: ${email}</h3></a>
            <h3 class="border">Office number: ${officeNumber}</h3>
        </div>
        `;
    })
    .join('')
}
    </div>
    `
};
const generateIntern = teamDataArr => {
    return `
    <div  class = "flex-column bg-white border border-2 border-muted rounded m-3 ">
    ${teamDataArr
        .filter(({Intern})=> Intern)
        .map(({ name, employeeID, email, school}) =>{
        return`
        <div div class= "col d-flex-column text-white bg-primary justify-content-around">
            <h3 > ${name} </h3>
            <h2 > Intern </h2>
        </div>
        <div class="col d-flex-column justify-content-center">
            <h3 class="border">Employee ID: ${employeeID}</h3>
            <a href="mailto:Email: ${email}"><h3 class="border">Email: ${email}</h3></a>
            <h3 class="border">School: ${school}</h3>
        </div>
        `;
    })
    .join('')
}
    </div>
    `
};

const generateEngineer = teamDataArr => {
    return `
    <div  class = "flex-column bg-white border border-2 border-muted rounded m-3 ">
    ${teamDataArr
        .filter(({Engineer})=> Engineer)
        .map(({ name, employeeID, email, github }) =>{
        return`
        <div class ="col d-flex-column text-white bg-primary justify-content-around">
            <h3> ${name} </h3>
            <h2>  Enginner </h2>
        </div>
        <div class="col d-flex-column justify-content-center">
            <h3 class="border">Employee ID: ${employeeID} </h3>
            <a href="mailto:${email}"><h3 class="border">Email: ${email} </h3></a>
            <a href =" http://github.com/${github}"><h3 class="border">Github: GitHub </h3> </a>
        </div>
        `;
    })
    .join('')
}
    </div>
    `
};


module.exports = templateData => {

    return `
    <!DOCTYPE html>
    <html lang="en-us">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title> My Team </title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>
    <header class="bg-danger text-white text-center">
    <h1> My Team </h1>
    </header>
    <body>
    <section class= "container d-inline-flex bg-white"> 
    ${generateManager(templateData)}
    ${generateEngineer(templateData)}
    ${generateIntern(templateData)}

    
    </section>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  
    </body>
    </html>
    `;
  };
