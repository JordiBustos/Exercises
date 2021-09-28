function changeQuote() {
    const datos = [
        ['Lo que necesitamos es imaginación, pero imaginación encorsetada en la terrible camisa de fuerza que es el conocimiento', 'Richard Feynman'], 
        ['Dios no juega a los dados', 'Albert Einstein'], 
        ["It's not what happens to you, but how you react to it that matters.", 'Epictetus'], 
        ["Blessed are the hearts that can bend; they shall never be broken." , 'Albert Camus'], 
        ["There is only one corner of the universe you can be certain of improving, and that's your own self.", 'Aldous Huxley'],
        ["Reading maketh a full man; conference a ready man; and writing an exact man.", 'Francis Bacon'], 
        ["Art is never finished, only abandoned.", "Leonardo Da Vinci"], 
        ["Success is a lousy teacher. It seduces smart people into thinking they can't lose.", 'Bill Gates'], 
        ["An investment in knowledge pays the best interest.", 'Benjamin Franklin'], 
        ["Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.", 'Martin Luther King Jr'], 
        ["Intelligence is the ability to adapt to change.", 'Stephen Hawking'], 
        ["Innovation distinguishes between a leader and a follower.", 'Steve Jobs'],
        ["The time you enjoy wasting is not wasted time.", 'Bertrand Russel'],
        ["Words have no power to impress the mind without the exquisite horror of their reality.", 'Edgar Allan Poe']
    ]


    changeColor();
    let x = Math.floor((Math.random()) * 14);
    document.getElementById('text').innerText = datos[x][0];
    document.getElementById('author').innerText = '-' + datos[x][1];
}

function random(number) {
    return Math.floor(Math.random() * (number+1)); //Generates random number
}
   
function changeColor() {
    var body = document.getElementById("body")
    var text= document.getElementById("text")
    var author= document.getElementById("author")
    var newQuote= document.getElementById("new-quote")

    const rndCol = 'rgb(' + random(170) + ',' + random(170) + ',' + random(170) + ')';
    body.style.backgroundColor = rndCol; text.style.color = rndCol;
    author.style.color = rndCol; newQuote.style.backgroundColor = rndCol;

    body.style.transition = 'all 2s'; text.style.transition = 'all 2s';
    author.style.transition = 'all 2s'; newQuote.style.transition = 'all 2s';
}