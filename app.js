simon = () => {
    let difficulty = 4;
    let keySeq = [];
    let genSeq = [];
    let failed = false;
    let count = 0;


    for(let i = 0; i < difficulty; i++){
        genSeq.push(1+Math.floor(Math.random() * Math.floor(4)))
    }

    clues = (i) => {
        $(`#b${genSeq[i]}`).addClass('selected');
        setTimeout(() => $(`#b${genSeq[i]}`).removeClass('selected'), 160)
    }

    function blinker(){
        setTimeout(() => clues(0), 00)
        setTimeout(() => clues(1), 200)
        setTimeout(() => clues(2), 400)
        setTimeout(() => clues(3), 600)
    }

    blinker();
    
    keyPress = (e) => {
        keySeq.push(e.key);
        if(keySeq[count] != genSeq[count]){
            failed = true;
            console.log("You've failed!")
            $('.keys').addClass('failedKeys')
            $('#outcomeMsg').css('opacity', 1)
        }
        count++;
        if (count == genSeq.length && !failed){
            $('#outcomeMsg').html("<h3>You win!</h3>")
            $('#outcomeMsg').css('opacity', 1)
        }
        
        $(`#b${e.key}`).addClass('selected');
        setTimeout(() => $(`#b${e.key}`).removeClass('selected'), 80)
    }

    $('body').keydown((e) => {
        if (e.key == 1){keyPress(e)};
        if (e.key == 2){keyPress(e)};
        if (e.key == 3){keyPress(e)};
        if (e.key == 4){keyPress(e)};
    });
}

simon();