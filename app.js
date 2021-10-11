const mainImageSelector = document.getElementById('main-image');
const rightButton = document.getElementById('right');
const leftButton = document.getElementById('left');
const misc = mainImageSelector.classList; 

const cuteDogs = 
    {
        cuteDog1: 1,
        cuteDog2: 2, 
        cuteDog3: 3
    };
const galleryElementCreator = () => {
        const gallerySelector = document.getElementById('gallery');
        for (const cuteDog in cuteDogs) {
            const element = document.createElement('div');
            element.setAttribute("id", `${cuteDog}`)
            element.classList.add('image');
            gallerySelector.append(element);
            cuteDogs[cuteDog] = document.getElementById(cuteDog);
        }
}   
const carouselAutoChanger = () => {
    if (misc.contains('initial') || misc.contains('cuteDog1')) {
        misc.remove('initial');
        misc.remove('cuteDog1');
        misc.add('cuteDog2');    
    } else if (misc.contains('cuteDog2')) {
        misc.remove('cuteDog2');
        misc.add('cuteDog3');
    } else if (misc.contains('cuteDog3')) {
        misc.remove('cuteDog3');
        misc.add('cuteDog1')
    }
};

//ENREDO TIMER
const carouselTimer = setInterval(carouselAutoChanger, 2000);
const startTimer = () => {
    carouselTimer;
} 
const stopTimer = (stopMyTimer) => {
    clearInterval(stopMyTimer)
}

const carouselStarter = () => {
    startTimer();
    galleryHoverChanger();
}

const galleryHoverChanger = () => {
    for (const cuteDog in cuteDogs) {
        cuteDogs[cuteDog].addEventListener('mouseover', () => {
            mainImageSelector.className = '';
            mainImageSelector.classList.add(`${cuteDog}`);
            console.log(stopTimer);
            stopTimer(carouselTimer);
        });
        cuteDogs[cuteDog].addEventListener('mouseout', () => {
            console.log(startTimer)
            startTimer();
        });  
    }
};

// const sliderController = () => {
//     const buttonRight  = document.getElementById('right');
//     const buttonLeft = document.getElementById('left');
//     buttonRight.addEventListener('click', () => {
//             mainImageSelector.classList.remove('initial');
//             mainImageSelector.classList.add(`cuteDog2`);
//     })    
// };

const appRenderer = () => {
    galleryElementCreator();
    carouselStarter();
}

appRenderer();


rightButton.addEventListener('click', () => {
    if (misc.contains('initial') || misc.contains('cuteDog1')) {
        misc.remove('initial');
        misc.remove('cuteDog1');
        misc.add('cuteDog2');    
    } else if (misc.contains('cuteDog2')) {
        misc.remove('cuteDog2');
        misc.add('cuteDog3');
    } else if (misc.contains('cuteDog3')) {
        misc.remove('cuteDog3');
        misc.add('cuteDog1')
    }
})

leftButton.addEventListener('click', () => {
    if (misc.contains('initial') || misc.contains('cuteDog1')) {
        misc.remove('initial');
        misc.remove('cuteDog1');
        misc.add('cuteDog3');    
    } else if (misc.contains('cuteDog2')) {
        misc.remove('cuteDog2');
        misc.add('cuteDog1');
    } else if (misc.contains('cuteDog3')) {
        misc.remove('cuteDog3');
        misc.add('cuteDog2')
    }
})
