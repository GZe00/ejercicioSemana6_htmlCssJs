const users = [
    {
        name: 'Erik',
        age: 29,
        email: 'erik@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/erik' },
            { name: 'twitter', url: 'twitter/erik' }
        ],
        gender: 'Male'
    },
    {
        name: 'Georg',
        age: 33,
        email: 'georg@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/georg' },
            { name: 'twitter', url: 'twitter/georg' }
        ],
        gender: 'Male'
    },
    {
        name: 'Andrea',
        age: 42,
        email: 'andrea@hotmail.com',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
    {
        name: 'Oscar',
        age: 31,
        email: 'oscar@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/oscar' },
            { name: 'twitter', url: 'twiter/oscar' }
        ],
        gender: 'Male'
    },
    {
        name: 'Daniela',
        age: 22,
        email: 'andrea@uaq.mx',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
];

//--------------------------------------------------------------------------------------
//-                                 Problema 1                                         -
//--------------------------------------------------------------------------------------

function printEmailAcademlo(userData){
    let container = document.getElementById('data-email-Academlo');
    for(let i = 0; i < userData.length; i++){
        const tableRow = `<tr>
                                <td> ${userData[i].name}    </td>
                                <td> ${userData[i].email}   </td>
                          </tr>`;
        container.innerHTML += tableRow;
    }
    
}

function emailAcademlo(userData){
    let dataAcademlo = [],
        emailAcademo = "@academlo.com";
    for(let i = 0; i < userData.length; i++){
        if(userData[i].email.endsWith(emailAcademo)){
            dataAcademlo.push(userData[i]);
        }
    }
    printEmailAcademlo(dataAcademlo);
}

//--------------------------------------------------------------------------------------
//-                                 Problema 2                                         -
//--------------------------------------------------------------------------------------

function printUsers(userData){
    let container = document.getElementById('data-container');
    for(let i = 0; i < userData.length; i++){
        const tableRow = `<tr>
                                <td> ${userData[i].name}    </td>
                                <td> ${userData[i].email}   </td>
                                <td> ${userData[i].age}     </td>
                          </tr>`;
        container.innerHTML +=tableRow;
    }
    
}

function filterByAge(userData){
    const filteredData = [];
    for(let i = 0; i < userData.length; i++){
        if(userData[i].age > 19 && userData[i].age < 40){
            filteredData.push(userData[i]);
        }
    }
    printUsers(filteredData);
}

//--------------------------------------------------------------------------------------
//-                                 Problema 3                                         -
//--------------------------------------------------------------------------------------

function printFilterFull(userData){
    let container = document.getElementById('data-container-full');
    for(let i = 0; i < userData.length; i++){
        const tableRow = `<tr>
                                <td> ${userData[i].name}            </td>
                                <td> ${userData[i].email}           </td>
                                <td> ${userData[i].age}             </td>
                                <td> ${userData[i].gender}          </td>
                                <td> ${userData[i].social[0].url}   </td>
                                <td> ${userData[i].social[1].url}   </td>
                          </tr>`;
        container.innerHTML += tableRow;
    }
}

// Problema 1
emailAcademlo(users);

//Problema 2
filterByAge(users);

//problema 3
printFilterFull(users);
