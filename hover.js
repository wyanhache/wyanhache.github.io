const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hidden = document.querySelectorAll(".card")
hidden.forEach((el) => {
    observer.observe(el)
})

document.getElementById("cards").onmousemove = e => {//onmousemove do ...
    for(const card of document.getElementsByClassName("card")) {//for... of loop
    const rect = card.getBoundingClientRect(),//getting client dimensions
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;//getting cursor position
    
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);//setting css variable
    };
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const loc = document.getElementById('list-of-contents')
    const ccc = document.getElementById('actual-list')
    let num = 0;
    let listNumber = document.documentElement.style.getPropertyValue('--amount');
    const menu = loc.addEventListener('click', () => {
        if (num % 2 === 1) {
            ccc.style.setProperty("--amount", '0%')
            console.log('what')
        } else if (num % 2 === 0) {
            ccc.style.setProperty("--amount", '0%')
        }
        num++
        console.log(num)
    })

const clickAway = document.querySelectorAll(".clickaway")

clickAway.forEach((e) => {
    e.addEventListener('click', () => {
        ccc.style.setProperty("--amount", '-100%')
    })
})

const tSub = document.getElementsByClassName("t-text")[0]; //getting the first element with this class
const tSubTwo = document.getElementsByClassName("t-text")[1];

const createWord = (text, index) => {
    const word = document.createElement("span"); //create a span element
    word.innerHTML = `${text}`; //storing the text inside the span element
    word.classList.add("t-text-word"); //add class
    word.style.transitionDelay = `${index * 40}ms` //WHAT THE FUCK IS AN INDEX????

    return word;
}

const addWordOne = (text, index) => {
    tSub.appendChild(createWord(text, index))
}

const addWordTwo = (text, index) => {
    tSubTwo.appendChild(createWord(text, index))
}

const createSub = text => {
    text.split(' ').map(addWordOne)
}

const createSubTwo = text => {
    text.split(' ').map(addWordTwo)
}

// putting everything into span tag

createSub("This is the Twitch Hover Gradient from Hyperplexed.")
createSub("A fantastic effect that comes from a fantastic developer.")


const left = document.getElementById("s-left");

const handleMove = e => {
  left.style.width = `${e.clientX / window.innerWidth * 100}%`;
}

document.onmousemove = e => handleMove(e);

document.ontouchmove = e => handleMove(e.touches[0]);