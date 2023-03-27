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