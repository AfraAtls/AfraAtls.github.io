const app = {
    title : document.querySelector('h1'),
    text : "Développeuse web",
    init : () => {
        let index = 0
        app.typewriter(index)
        app.animationScroll()
        app.listeners()
    },
    listeners : () => {
        document.getElementById("top").addEventListener("click", app.scrollBackToTop);
    },
    typewriter : (index) => {
        app.text.split('')
        if(index < app.text.length) {
            setTimeout(() => {
                app.title.innerHTML += app.text[index] === "" ?  "&#32" : app.text[index]
                index++
                app.typewriter(index)
            }, 300);
        }
    },
    animationScroll : () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.animate([
                        {transform:'translateX(-50px)', opacity:0},
                        {transform:'translateX(0)', opacity:1},
                    ], {
                        duration:1200
                    })
                }
            })
        })
    observer.observe(document.getElementById('about'))
    observer.observe(document.getElementById('skills'))
    },
    scrollBackToTop : () => {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;
      }
}
document.addEventListener('DOMContentLoaded', app.init)