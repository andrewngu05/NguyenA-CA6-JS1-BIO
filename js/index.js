
    let uname = prompt(`Welcome to Bear Hunter Ninja! Please enter your name to get started: `);
    let amessage = `Hi ${uname} Lets play!!`;
        alert(amessage);

    let pChoice = prompt('Who are you: Bear, Ninja, or Hunter?');
    let cChoice = 'Bear';

    let pMessage = `${uname}, You picked ` + pChoice + '!';
    let cMessage = 'The computer picked ' + cChoice + '!';

    document.getElementById('pResult').innerHTML = pMessage;
    document.getElementById('cResult').innerHTML = cMessage;

    console.log(pChoice);
    console.log(cChoice);
