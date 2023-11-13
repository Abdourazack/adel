const users = [
    {
        firstname: 'Bob',
        lastname: 'Bernard',
        addresses: [
            {
                street: "Rue de la paix",
                number: 1
            }
        ]
    },
    {
        firstname: 'TOTO',
        lastname: 'Brice',
        addresses: [
            {
                street: "Rue de la paix",
                number: 2
            }
        ]
    },
    {
        firstname: 'Roger',
        lastname: 'Tom',
        addresses: [
            {
                street: "Rue de la paix",
                number: 3
            },
            {
                street: "Rue de la poire",
                number: 22
            }
        ]
    },
    {
        firstname: 'Morgan',
        lastname: 'Sam',
    },
]


/*for(let i = 0;i<users.length; i++){
    console.log(`${users.firstname} - ${users.lastname} - ${users.addresses} - pas d adresse`);
}*/
users.forEach((user) => {
   
        console.log(`${user.firstname} - ${user.lastname} `);
        if(user.addresses){
            const addresses = user.addresses;
            addresses.forEach(addresses => {
                console.log(`{${addresses.number} - ${addresses.street}} `)
            })
            }else{
                console.log('t\' as pas d\'adresse connard');
            }
})