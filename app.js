let keySet = false;

simon = (difficulty) => {
    let roundDifficulty = difficulty;
    let keySeq = [];
    let genSeq = [];
    let failed = false;
    let count = 0;
    let blinkPeriod = 300;

    $('.keys').removeClass('failedKeys')


    console.log(keySeq);

    for(let i = 0; i < difficulty; i++){
        genSeq.push(1+Math.floor(Math.random() * Math.floor(4)))
    }

    console.log(genSeq.join(''));

    clues = (i) => {
        $(`#b${genSeq[i]}`).addClass('selected');
        setTimeout(() => $(`#b${genSeq[i]}`).removeClass('selected'), 250)
    }


    function blinker(){
        for(let i = 0; i < genSeq.length; i++){
        setTimeout(()=>{}, 1000);
        setTimeout(() => clues(i), blinkPeriod*i);
        //setTimeout(400);
        }
    }

    blinker();
    
    keyPress = (e) => {                                             //FAILED
        keySeq.push(e);
        if(keySeq[count] != genSeq[count]){
            console.log(keySeq, genSeq);
            failed = true;
            console.log("You've failed!")
            $('.keys').addClass('failedKeys')
            $('#outcomeMsg').css('opacity', 1)
            $('.win').css('opacity', 0);
            $('.loss').css('opacity', 1);
        }
        count++;
        if (count == genSeq.length && !failed){                     //WIN
            console.log("You've won!")
            $('#outcomeMsg').css('opacity', 1)
            $('.win').css('opacity', 1);
            $('.loss').css('opacity', 0);
        }
        
        $(`#b${e}`).addClass('selected');
        setTimeout(() => $(`#b${e}`).removeClass('selected'), 80)
    }


    console.log(keySet);
    if(!keySet){
        $('body').keydown((e) => {
            if (e.key == 1) { keyPress(e.key) };
            if (e.key == 2) { keyPress(e.key) };
            if (e.key == 3) { keyPress(e.key) };
            if (e.key == 4) { keyPress(e.key) };
        });
        $('.game').click((e) => {
            console.log((e.target.id).slice(1));
            if ((e.target.id).slice(1) == 1) { keyPress((e.target.id).slice(1)) };
            if ((e.target.id).slice(1) == 2) { keyPress((e.target.id).slice(1)) };
            if ((e.target.id).slice(1) == 3) { keyPress((e.target.id).slice(1)) };
            if ((e.target.id).slice(1) == 4) { keyPress((e.target.id).slice(1)) };
        });
        keySet = true;
    }

    console.log(keySet);

} //simon function ends

let difficulty = 4;

document.querySelector("#play").addEventListener("click", () => {
    simon(difficulty);
    document.querySelector("#play").style.visibility = "hidden";
})

document.querySelector("#nextRound").addEventListener("click", () => {
    simon(++difficulty);
    $('#outcomeMsg').css('opacity', 0)
})

document.querySelector("#retry").addEventListener("click", () => {
    difficulty = 4;
    simon(difficulty);
    $('#outcomeMsg').css('opacity', 0)
})