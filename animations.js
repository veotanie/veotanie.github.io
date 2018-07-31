function animate(){
    animation = anime({
        targets: '#name',
        'padding-left': '40%',
        'font-size': '20px',
        duration: 2000,
        color: 'rgb(255, 255, 255)'
    });
    console.log('play');
    animation.play();

    intro = anime({
        targets: '#intro',
        'font-size': '20px',
        color: 'rgb(255, 255, 255)',
        duration: 2000,
        delay: 3000
    });
    intro.play();

    wish = anime({
        targets: '#wish',
        'font-size': '20px',
        rotate: {
            value: 360,
            duration: 1800
          },
        color: 'rgb(255,255,255)',
        duration: 2000,
        delay: 6000,
        'padding-left': '0%'
    });

    firstwish = anime({
        targets: '#firstwish',
        'font-size': '20px',
        color: 'rgb(255,255,255)',
        duration: 2000,
        delay: 7000,
        'padding-left': '0%'
    });

    secoundwish = anime({
        targets: '#secoundwish',
        'font-size': '20px',
        color: 'rgb(255,255,255)',
        duration: 2000,
        delay: 8000,
        'padding-left': '0%'
    });

    thirdwish = anime({
        targets: '#thirdwish',
        'font-size': '20px',
        color: 'rgb(255,255,255)',
        duration: 2000,
        delay: 9000,
        'padding-left': '0%'
    });

    fourthwish = anime({
        targets: '#fourthwish',
        'font-size': '20px',
        color: 'rgb(255,255,255)',
        duration: 2000,
        delay: 10000,
        'padding-left': '0%'
    });

    fithwish = anime({
        targets: '#fithwish',
        'font-size': '20px',
        color: 'rgb(255,255,255)',
        duration: 2000,
        delay: 11000,
        'padding-left': '0%'
    });

    firstwish = anime({
        targets: '#firstwish',
        'font-size': '50px',
        duration: 3000,
        delay: 13000
    });

    secoundwish = anime({
        targets: '#secoundwish',
        'font-size': '50px',
        duration: 3000,
        delay: 13000
    });

    thirdwish = anime({
        targets: '#thirdwish',
        'font-size': '50px',
        duration: 3000,
        delay: 13000
    });

    fourthwish = anime({
        targets: '#fourthwish',
        'font-size': '50px',
        duration: 3000,
        delay: 13000
    });

    fithwish = anime({
        targets: '#fithwish',
        'font-size': '50px',
        duration: 3000,
        delay: 13000
    });

    toresist = anime({
        targets: '#centerfor',
        color: 'rgb(255,255,255)',
        duration: 2000,
        delay: 15000
    })

    tonya = anime({
        targets: '#tonya',
        opacity: 1,
        duration: 2000,
        delay: 16000
    })
}
window.onload = animate;