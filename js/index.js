
    let uname = prompt(`To continue, please enter your uname: `);
    let amessage = `You have entered: ${uname}`;
        console.log(amessage + '!');

    let pChoice = prompt('Who are you: Bear, Ninja, or Hunter?');
    let cChoice= prompt('The computer picked Bear!');

    document.getElementById('pResult').innerHTML = pChoice;
    document.getElementById('cResult').innerHTML = cChoice;

    console.log(pChoice);
    console.log(cChoice);
