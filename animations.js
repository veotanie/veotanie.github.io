function animate(){

    animation = anime({
        targets: '#name',
        'padding-left': '50%',
        'font-size': '20px',
        duration: 2000,
        color: 'rgb(255, 255, 255)'
    });

    intro = anime({
        targets: '#intro',
        'font-size': '20px',
        color: 'rgb(255, 255, 255)',
        duration: 2000,
        delay: 3000
    });

    wishtitle = anime({
        targets: "#iwishyou",
        color: 'rgb(255, 255, 255)',
        delay: 5000
    });

    tohawishes = anime({
        targets: ".madtohawishes li",
        color: 'rgb(255, 255, 255)',
        delay: 7000,
        duration: 3000
    });

    tohapic = anime({
        targets: "#tonyapic",
        opacity: 1,
        delay: 10000,
        duration: 5000
    });

    todealwith = anime({
        targets: "#dealwith",
        delay: 9000,
        duration: 2000,
        color: 'rgb(255, 255, 255)'
    });


    var delayInMilliseconds = 20000;
    setTimeout(function() {
        element = document.getElementById("wishing");
        document.body.removeChild(element);
    }, delayInMilliseconds);
    
}
window.onload = animate;