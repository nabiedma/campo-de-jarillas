// VARIABLES & CONSTS

// --------------------------------
const HTML = document.querySelector('html');

// // * SOUNDS
// var soundRelato1 = new Howl({
//     src: ['./../assets/Relato_0001.mp3']
// });
// var playingRelato1 = false;

// var soundRelato2 = new Howl({
//     src: ['./../assets/Relato_0002.mp3']
// });
// var playingRelato2 = false;

// var soundRelato3 = new Howl({
//     src: ['./../assets/Relato_0003.mp3']
// });
// var playingRelato3 = false;

// var soundRelato4 = new Howl({
//     src: ['./../assets/Relato_0004.mp3']
// });
// var playingRelato4 = false;

// var soundRelato5 = new Howl({
//     src: ['./../assets/Relato_0005.mp3']
// });
// var playingRelato5 = false;

// var soundRelato6 = new Howl({
//     src: ['./../assets/Relato_0006.mp3']
// });
// var playingRelato6 = false;

// var soundRelato7 = new Howl({
//     src: ['./../assets/Relato_0007.mp3']
// });
// var playingRelato7 = false;

// var soundViento01 = new Howl({
//     src: ['./../assets/VIENTOS/01.mp3'],
//     loop: true,
//     volume: 1.0
// });
// var playingViento01 = false;

// var soundViento02 = new Howl({
//     src: ['./../assets/VIENTOS/02.mp3'],
//     loop: true,
//     volume: 0.6
// });
// var playingViento02 = false;

// var soundViento03 = new Howl({
//     src: ['./../assets/VIENTOS/03.mp3'],
//     loop: true,
//     volume: 0.8
// });
// var playingViento03 = false;

// var soundViento04 = new Howl({
//     src: ['./../assets/VIENTOS/04.mp3'],
//     loop: true,
//     volume: 0.6
// });
// var playingViento04 = false;

// var soundVientoFinal = new Howl({
//     src: ['./../assets/VIENTOS/final.mp3'],
//     loop: true,
//     volume: 0.6
// });
// var playingVientoFinal = false;

// // ** FOLEYS **
// var soundFoley01 = new Howl({
//     src: ['./../assets/FOLEYS/Foley01.mp3'],
//     loop: true,
//     volume: 0.5
// });
// var playingFoley01 = false;

// var soundFoley02 = new Howl({
//     src: ['./../assets/FOLEYS/Foley02.mp3'],
//     loop: true,
//     volume: 0.4
// });
// var playingFoley02 = false;

// var soundFoley0202 = new Howl({
//     src: ['./../assets/FOLEYS/Foley02.mp3'],
//     loop: true,
//     volume: 0.4
// });
// var playingFoley0202 = false;

// var soundFoley03 = new Howl({
//     src: ['./../assets/FOLEYS/Foley03.mp3'],
//     loop: true,
//     volume: 0.4
// });
// var playingFoley03 = false;

// var soundFoley0302 = new Howl({
//     src: ['./../assets/FOLEYS/Foley03.mp3'],
//     loop: true,
//     volume: 0.4
// });
// var playingFoley0302 = false;

// var soundFoley04 = new Howl({
//     src: ['./../assets/FOLEYS/Foley04.mp3'],
//     loop: true,
//     volume: 0.8
// });
// var playingFoley04 = false;

// var soundFoley05 = new Howl({
//     src: ['./../assets/FOLEYS/Foley05.mp3'],
//     loop: true,
//     volume: 0.8
// });
// var playingFoley05 = false;

// var soundFoley06 = new Howl({
//     src: ['./../assets/FOLEYS/Foley06.mp3'],
//     loop: true,
//     volume: 0.8
// });
// var playingFoley06 = false;

const sectionStart = document.querySelector('.section-start');
const fs = document.getElementById('fullscreen');

// Botones para Fullscreen y salir de Fullscreen
const btnFullScreen = document.querySelector('.img-fullscreen-go');
const btnOutFullScreen = document.querySelector('.img-fullscreen-out');

btnFullScreen.addEventListener('click', () => {
    // console.log('NOS VAMOS FULLSCREEN');
    btnOutFullScreen.style.display = 'block';
    btnFullScreen.style.display = 'none';
    
    if (!document.fullscreenElement) {
        document.documentElement.webkitRequestFullScreen();
    }
})

btnOutFullScreen.addEventListener('click', () => {
    // console.log('SALIMOS DE FULLSCREEN');
    btnFullScreen.style.display = 'block';
    btnOutFullScreen.style.display = 'none';

    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
})

fs.addEventListener('click', () => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        document.documentElement.webkitRequestFullScreen();
        soundViento01.play();
        soundViento01.fade(0.0, 1.0, 5000);
        playingViento01 = true;
    }
})

ScrolleoPoema02 = false;

FinishedRelato1 = false;
FinishedRelato2 = false;
FinishedRelato3 = false;
FinishedRelato4 = false;
FinishedRelato5 = false;
FinishedRelato6 = false;
FinishedRelato7 = false;



// * SECTIONS
const sectionRelato01 = document.querySelector('#section-relato-01');
const sectionRelato02 = document.querySelector('#section-relato-02');
const sectionRelato03 = document.querySelector('#section-relato-03');
const sectionRelato04 = document.querySelector('#section-relato-04');
const sectionRelato05 = document.querySelector('#section-relato-05');
const sectionRelato06 = document.querySelector('#section-relato-06');
const sectionRelato07 = document.querySelector('#section-relato-07');
const sectionHora02 = document.querySelector('#section-hour-02');
const sectionHora04 = document.querySelector('#section-hour-04');
const sectionPoema02 = document.querySelector('#section-poema-02');
const sectionViento03 = document.querySelector('#section-viento-03');
const sectionViento04 = document.querySelector('#section-viento-04');
const sectionVientoFinal = document.querySelector('#section-viento-final');

const sectionEndRelato03 = document.querySelector('#section-end-relato-03');

// FOLEYS
const Foley01 = document.querySelector('#foley01');
const Foley02 = document.querySelector('#foley02');
const Foley03 = document.querySelector('#foley03');
const Foley04 = document.querySelector('#foley04');
const Foley04Stop = document.querySelector('#foley04-stop');
const Foley05 = document.querySelector('#foley05');
const Foley06 = document.querySelector('#foley06');
const Foley0202 = document.querySelector('#foley02-02');
const Foley0302 = document.querySelector('#foley03-02');
const Foley0402 = document.querySelector('#foley04-02');
const Foley0402Stop = document.querySelector('#foley04-02-stop');
const Foley0102 = document.querySelector('#foley01-02');

// POEMAS
const DivPoema01 = document.querySelector('#DivPoema01');
const DivPoema02 = document.querySelector('#DivPoema02');
const DivPoema03 = document.querySelector('#DivPoema03');
const DivPoema04 = document.querySelector('#DivPoema04');
const DivPoema05 = document.querySelector('#DivPoema05');
const DivPoema06 = document.querySelector('#DivPoema06');
const DivPoema07 = document.querySelector('#DivPoema07');
const DivPoema08 = document.querySelector('#DivPoema08');
const DivPoema09 = document.querySelector('#DivPoema09');

// START POINTS RELATOS
const startPointRelato01 = document.querySelector('#start-point-relato-01');
const startPointRelato02 = document.querySelector('#start-point-relato-02');
const startPointRelato03 = document.querySelector('#start-point-relato-03');
const startPointRelato04 = document.querySelector('#start-point-relato-04');
const startPointRelato05 = document.querySelector('#start-point-relato-05');
const startPointRelato06 = document.querySelector('#start-point-relato-06');
const startPointRelato07 = document.querySelector('#start-point-relato-07');

// FUNCTIONS
function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    // var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    var isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}


// LISTENERS

// ON LOAD
window.addEventListener('load', () => {
    sectionStart.style.zIndex = "1500";
    HTML.style.overflow = 'auto';
    HTML.style.height = '100%';

    if (document.fullscreenElement) {
        btnOutFullScreen.style.display = 'none';
        btnFullScreen.style.display = 'block';
        // document.exitFullscreen();
    } else {
        btnFullScreen.style.display = 'none';
        btnOutFullScreen.style.display = 'block';
        // document.documentElement.webkitRequestFullScreen();
    }
})

// FINISHED LOADING
window.addEventListener('DOMContentLoaded', () => {

});

// MAIN SCROLL
window.addEventListener('scroll', () => {

    // Check if scrolled into view Section Hora 02
    if (isScrolledIntoView(sectionHora02) && playingViento01 == true) {
        console.log(sectionHora02);
        soundViento01.fade(1, 0.0, 100);
        setTimeout(() => {
            soundViento01.pause();
            playingViento01 = false;
        }, 1050);
    }

    // Check if scrolled into view Section Poema 02 (Create Variable for Trigger)
    if (isScrolledIntoView(sectionPoema02)) {
        ScrolleoPoema02 = true;
    }

    // Check if out of view Section Poema 02 (Start Viento 02)
    if (!isScrolledIntoView(sectionPoema02) && playingViento02 == false && ScrolleoPoema02 == true) {
        console.log('AQUI COMIENZA VIENTO 02');
        soundViento02.fade(0.0, 0.6, 1000);
        soundViento02.play();
        playingViento02 = true;
    }

    // Check if scrolled into view Section Hora 04 (Stop Viento 02)
    if (isScrolledIntoView(sectionHora04) && playingViento02 == true && ScrolleoPoema02 == true) {
        console.log('Aquí debería frenar el viento 02');
        soundViento02.fade(0.6, 0.0, 1000);
        ScrolleoPoema02 = false;
        setTimeout(() => {
            soundViento02.pause();
            playingViento02 = false;
        }, 1050);
    }

    // Check if into view Section Viento 03 (Start Viento 03)
    if (isScrolledIntoView(sectionViento03) && playingViento03 == false) {
        console.log('Aquí comienza el VIENTO 03');
        soundViento03.fade(0.0, 0.8, 500);
        soundViento03.play();
        playingViento03 = true;
    } else if (!isScrolledIntoView(sectionViento03) && playingViento03 == true) {
        console.log('Aquí debería cortarse el VIENTO 03');
        soundViento03.fade(0.8, 0.0, 1000);
        setTimeout(() => {
            soundViento03.pause();
            playingViento03 = false;
        }, 1050);
    }

    // Check if into view Section Viento 04 (Start Viento 04)
    if (isScrolledIntoView(sectionViento04) && playingViento04 == false) {
        console.log('Aquí comienza el VIENTO 04');
        soundViento04.fade(0.0, 0.6, 500);
        soundViento04.play();
        playingViento04 = true;
    } else if (!isScrolledIntoView(sectionViento04) && playingViento04 == true) {
        console.log('Aquí debería cortarse el VIENTO 04');
        soundViento04.fade(0.6, 0.0, 1000);
        setTimeout(() => {
            soundViento04.pause();
            playingViento04 = false;
        }, 1050);
    }

    // Check if into view Section Viento Final (Start Viento Final)
    if (isScrolledIntoView(sectionVientoFinal) && playingVientoFinal == false) {
        console.log('Aquí comienza el VIENTO Final');
        soundVientoFinal.fade(0.0, 0.6, 500);
        soundVientoFinal.play();
        playingVientoFinal = true;
    } else if (!isScrolledIntoView(sectionVientoFinal) && playingVientoFinal == true) {
        console.log('Aquí debería cortarse el VIENTO Final');
        soundVientoFinal.fade(0.6, 0.0, 1000);
        setTimeout(() => {
            soundVientoFinal.pause();
            playingVientoFinal = false;
        }, 1050);
    }

    // RELATOS TRIGGERS

    // PLAY RELATO 01
    // Check if scrolled into view Section Relato 01 (Gifs 01)
    if (isScrolledIntoView(sectionRelato01) && playingRelato1 == false && FinishedRelato1 == false) {
        console.log(sectionRelato01);
        soundRelato1.fade(0.0, 1, 500);
        soundRelato1.play();
        playingRelato1 = true;
    }
    // else if (!isScrolledIntoView(sectionRelato01) && playingRelato1 == true && FinishedRelato1 == false) {
    //     soundRelato1.fade(1, 0.0, 500);
    //     setTimeout(() => {
    //         soundRelato1.pause();
    //         playingRelato1 = false;
    //     }, 550);
    // }

     // PLAY RELATO 02
    // Check if scrolled into view Section Relato 02 (Gifs 02)
    if (isScrolledIntoView(sectionRelato02) && playingRelato2 == false && FinishedRelato2 == false) {
        console.log(sectionRelato02);
        soundRelato2.fade(0.0, 1, 500);
        soundRelato2.play();
        playingRelato2 = true;
    } else if (!isScrolledIntoView(sectionRelato02) && playingRelato2 == true && FinishedRelato2 == false) {

        soundRelato2.fade(1, 0.0, 500);
        setTimeout(() => {
            soundRelato2.pause();
            playingRelato2 = false;
        }, 550);
    }


     // PLAY RELATO 03
    // Check if scrolled into view Section Relato 03 (Scrolling Horizontal Blanco)
    if (isScrolledIntoView(sectionRelato03) && playingRelato3 == false && FinishedRelato3 == false) {
        console.log('ESTAS DENTRO DE SECTION RELATO 03');
        soundRelato3.fade(0.0, 1, 500);
        soundRelato3.play();
        playingRelato3 = true;
    } else if (!isScrolledIntoView(sectionRelato03) && playingRelato3 == true && FinishedRelato3 == false) {
        console.log('TE FUISTE DE SECTION RELATO 03');
        soundRelato3.fade(1, 0.0, 500);
        setTimeout(() => {
            soundRelato3.pause();
            playingRelato3 = false;
        }, 550);
    }

    // Check if scrolled into view Section Relato 04 (Gifs 03)
    if (isScrolledIntoView(sectionRelato04) && playingRelato4 == false && FinishedRelato4 == false) {
        console.log('Aquí comienza Relato 04');
        soundRelato4.fade(0.0, 1, 500);
        soundRelato4.play();
        playingRelato4 = true;
    } else if (!isScrolledIntoView(sectionRelato04) && playingRelato4 == true && FinishedRelato4 == false) {

        console.log('Aquí se corta Relato 04');
        soundRelato4.fade(1, 0.0, 500);
        setTimeout(() => {
            soundRelato4.pause();
            playingRelato4 = false;
        }, 550);
    }

    // Check if scrolled into view Section Relato 05 (Gifs 04)
    if (isScrolledIntoView(sectionRelato05) && playingRelato5 == false && FinishedRelato5 == false) {
        console.log('Aquí comienza Relato 05');
        soundRelato5.fade(0.0, 1, 500);
        soundRelato5.play();
        playingRelato5 = true;
    } else if (!isScrolledIntoView(sectionRelato05) && playingRelato5 == true && FinishedRelato5 == false) {

        console.log('Aquí se corta Relato 05');
        soundRelato5.fade(1, 0.0, 500);
        setTimeout(() => {
            soundRelato5.pause();
            playingRelato5 = false;
        }, 550);
    }

    // Check if scrolled into view Section Relato 06 (Gifs 05)
    if (isScrolledIntoView(sectionRelato06) && playingRelato6 == false && FinishedRelato6 == false) {
        console.log('Aquí comienza Relato 06');
        soundRelato6.fade(0.0, 1, 500);
        soundRelato6.play();
        playingRelato6 = true;
    } else if (!isScrolledIntoView(sectionRelato06) && playingRelato6 == true && FinishedRelato6 == false) {

        console.log('Aquí se corta Relato 06');
        soundRelato6.fade(1, 0.0, 500);
        setTimeout(() => {
            soundRelato6.pause();
            playingRelato6 = false;
        }, 550);
    }

    // Check if scrolled into view Section Relato 07 (Gifs 06)
    if (isScrolledIntoView(sectionRelato07) && playingRelato7 == false && FinishedRelato7 == false) {
        console.log('Aquí comienza Relato 07');
        soundRelato7.fade(0.0, 1, 500);
        soundRelato7.play();
        playingRelato7 = true;
    }
    // else if (!isScrolledIntoView(sectionRelato07) && playingRelato7 == true && FinishedRelato7 == false) {

    //     console.log('Aquí se corta Relato 07');
    //     soundRelato7.fade(1, 0.0, 500);
    //     setTimeout(() => {
    //         soundRelato7.pause();
    //         playingRelato7 = false;
    //     }, 550);
    // }

    // FOLEYS
    if (isScrolledIntoView(Foley01) && playingFoley01 == false) {
        console.log('Aquí suena FOLEY 01');
        soundFoley01.play();
        soundFoley01.fade(0.0, 0.3, 100);
        playingFoley01 = true;
    } else if (!isScrolledIntoView(Foley01) && playingFoley01 == true) {
        console.log('Ya se detiene FOLEY 01');
        soundFoley01.fade(0.4, 0.0, 500);
        setTimeout(() => {
            soundFoley01.pause();
            playingFoley01 = false;
        }, 550);
    }

    if (isScrolledIntoView(Foley02) && playingFoley02 == false) {
        console.log('Aquí suena FOLEY 02');
        soundFoley02.play();
        soundFoley02.fade(0.0, 0.4, 100);
        playingFoley02 = true;
    } else if (!isScrolledIntoView(Foley02) && playingFoley02 == true) {
        console.log('Ya se detiene FOLEY 02');
        soundFoley02.fade(0.4, 0.0, 500);
        setTimeout(() => {
            soundFoley02.pause();
            playingFoley02 = false;
        }, 550);
    }

    if (isScrolledIntoView(Foley03) && playingFoley03 == false) {
        console.log('Aquí suena FOLEY 03');
        soundFoley03.play();
        soundFoley03.fade(0.0, 0.4, 100);
        playingFoley03 = true;
    } else if (!isScrolledIntoView(Foley03) && playingFoley03 == true) {
        console.log('Ya se detiene FOLEY 03');
        soundFoley03.fade(0.4, 0.0, 500);
        setTimeout(() => {
            soundFoley03.pause();
            playingFoley03 = false;
        }, 550);
    }

    if (isScrolledIntoView(Foley04) && playingFoley04 == false) {
        console.log('Aquí suena FOLEY 04');
        soundFoley04.play();
        soundFoley04.fade(0.0, 0.4, 100);
        playingFoley04 = true;
    }

    if (isScrolledIntoView(Foley04Stop) && playingFoley04 == true) {
        console.log('Ya se detiene FOLEY 04');
        soundFoley04.fade(0.4, 0.0, 500);
        setTimeout(() => {
            soundFoley04.pause();
            playingFoley04 = false;
        }, 550);
    }

    if (isScrolledIntoView(Foley05) && playingFoley05 == false) {
        console.log('Aquí suena FOLEY 05');
        soundFoley05.play();
        soundFoley05.fade(0.0, 0.4, 100);
        playingFoley05 = true;
    } else if (!isScrolledIntoView(Foley05) && playingFoley05 == true) {
        console.log('Ya se detiene FOLEY 05');
        soundFoley05.fade(0.4, 0.0, 500);
        setTimeout(() => {
            soundFoley05.pause();
            playingFoley05 = false;
        }, 600);
    }

    if (isScrolledIntoView(Foley06) && playingFoley06 == false) {
        console.log('Aquí suena FOLEY 06');
        soundFoley06.play();
        soundFoley06.fade(0.0, 0.4, 100);
        playingFoley06 = true;
    } else if (!isScrolledIntoView(Foley06) && playingFoley06 == true) {
        console.log('Ya se detiene FOLEY 06');
        soundFoley06.fade(0.4, 0.0, 500);
        setTimeout(() => {
            soundFoley06.pause();
            playingFoley06 = false;
        }, 600);
    }
    

    if (isScrolledIntoView(Foley0202) && playingFoley0202 == false) {
        console.log('Aquí suena FOLEY 02');
        soundFoley0202.play();
        soundFoley0202.fade(0.0, 0.4, 100);
        playingFoley0202 = true;
    } else if (!isScrolledIntoView(Foley0202) && playingFoley0202 == true) {
        console.log('Ya se detiene FOLEY 02');
        soundFoley0202.fade(0.4, 0.0, 500);
        setTimeout(() => {
            soundFoley0202.pause();
            playingFoley0202 = false;
        }, 550);
    }

    if (isScrolledIntoView(Foley0302) && playingFoley0302 == false) {
        console.log('Aquí suena FOLEY 03');
        soundFoley0302.play();
        soundFoley0302.fade(0.0, 0.4, 100);
        playingFoley0302 = true;
    } else if (!isScrolledIntoView(Foley0302) && playingFoley0302 == true) {
        console.log('Ya se detiene FOLEY 03');
        soundFoley0302.fade(0.4, 0.0, 500);
        setTimeout(() => {
            soundFoley0302.pause();
            playingFoley0302 = false;
        }, 550);
    }

    if (isScrolledIntoView(Foley0402) && playingFoley0402 == false) {
        console.log('Aquí suena FOLEY 04 2da vez');
        soundFoley0402.fade(0.0, 0.4, 100);
        soundFoley0402.play();
        playingFoley0402 = true;
    }

    if (isScrolledIntoView(Foley0402Stop) && playingFoley0402 == true) {
        console.log('Ya se detiene FOLEY 04 2da vez');
        soundFoley0402.fade(0.4, 0.0, 500);
        setTimeout(() => {
            soundFoley0402.pause();
            playingFoley0402 = false;
        }, 550);
    }

    if (isScrolledIntoView(Foley0102) && playingFoley01 == false) {
        console.log('Aquí suena FOLEY 01 2da vez');
        soundFoley01.play();
        playingFoley01 = true;
    }

    // BAJAR VOLUMEN DE VIENTOS EN POEMAS
    if (isScrolledIntoView(DivPoema01) && playingViento01 == true) {
        soundViento01.fade(1.0, 0.7, 2000);
        console.log('SE BAJA EL VOLUMEN DEL VIENTO 01');
    } else if (!isScrolledIntoView(DivPoema01) && playingViento01 == true) {
        soundViento01.fade(0.7, 1.0, 2000);
        console.log('SE SUBE EL VOLUMEN DEL VIENTO 01');
    }

    // START POINTS RELATOS
    // RELATO 01
    if (isScrolledIntoView(startPointRelato01) && FinishedRelato1 == true && playingRelato1 == false) {
        console.log('SE REPITE EL RELATO 01');
        soundRelato1.fade(0.0, 1, 500);
        soundRelato1.play();
        playingRelato1 = true;
        FinishedRelato1 = false;
    }

    // RELATO 02
    if (isScrolledIntoView(startPointRelato02) && FinishedRelato2 == true && playingRelato2 == false) {
        console.log('SE REPITE EL RELATO 02');
        soundRelato2.fade(0.0, 1, 500);
        soundRelato2.play();
        playingRelato2 = true;
        FinishedRelato2 = false;
    }

    // RELATO 03
    if (isScrolledIntoView(startPointRelato03) && FinishedRelato3 == true && playingRelato3 == false) {
        console.log('SE REPITE EL RELATO 03');
        soundRelato3.fade(0.0, 1, 500);
        soundRelato3.play();
        playingRelato3 = true;
        FinishedRelato3 = false;
    }

    // RELATO 04
    if (isScrolledIntoView(startPointRelato04) && FinishedRelato4 == true && playingRelato4 == false) {
        console.log('SE REPITE EL RELATO 04');
        soundRelato4.fade(0.0, 1, 500);
        soundRelato4.play();
        playingRelato4 = true;
        FinishedRelato4 = false;
    }

    // RELATO 05
    if (isScrolledIntoView(startPointRelato05) && FinishedRelato5 == true && playingRelato5 == false) {
        console.log('SE REPITE EL RELATO 05');
        soundRelato5.fade(0.0, 1, 500);
        soundRelato5.play();
        playingRelato5 = true;
        FinishedRelato5 = false;
    }

    // RELATO 06
    if (isScrolledIntoView(startPointRelato06) && FinishedRelato6 == true && playingRelato6 == false) {
        console.log('SE REPITE EL RELATO 06');
        soundRelato6.fade(0.0, 1, 500);
        soundRelato6.play();
        playingRelato6 = true;
        FinishedRelato6 = false;
    }

    // RELATO 07
    if (isScrolledIntoView(startPointRelato07) && FinishedRelato7 == true && playingRelato7 == false) {
        console.log('SE REPITE EL RELATO 07');
        soundRelato7.fade(0.0, 1, 500);
        soundRelato7.play();
        playingRelato7 = true;
        FinishedRelato7 = false;
    }


});

// RELATOS Ending
soundRelato1.on('end', function(){
    playingRelato1 = false;
    FinishedRelato1 = true;
});
soundRelato2.on('end', function(){
    playingRelato2 = false;
    FinishedRelato2 = true;
});
soundRelato3.on('end', function(){
    playingRelato3 = false;
    FinishedRelato3 = true;
});
soundRelato4.on('end', function(){
    playingRelato4 = false;
    FinishedRelato4 = true;
});
soundRelato5.on('end', function(){
    playingRelato5 = false;
    FinishedRelato5 = true;
});
soundRelato6.on('end', function(){
    playingRelato6 = false;
    FinishedRelato6 = true;
});
soundRelato7.on('end', function(){
    playingRelato7 = false;
    FinishedRelato7 = true;
});

// VIENTOS Ending
soundViento01.on('end', function() {
    playingViento01 = false;
});
soundViento02.on('end', function() {
    playingViento02 = false;
});
soundViento03.on('end', function() {
    playingViento03 = false;
});
soundViento04.on('end', function() {
    playingViento04 = false;
});
soundVientoFinal.on('end', function() {
    playingVientoFinal = false;
});

// FOLEYS Ending
soundFoley01.on('end', function() {
    playingFoley01 = false;
});
soundFoley02.on('end', function() {
    playingFoley02 = false;
});
soundFoley03.on('end', function() {
    playingFoley03 = false;
});
soundFoley04.on('end', function() {
    playingFoley04 = false;
});
soundFoley05.on('end', function() {
    playingFoley05 = false;
});
soundFoley06.on('end', function() {
    playingFoley06 = false;
});
