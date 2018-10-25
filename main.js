class Routers {
    constructor() {
        this.routes = {}
        this._bindPopState()
    }

    init (path) {
        history.replaceState({path},null,path)
        this.routes[path] && this.routes[path]()
    }

    route(path, callback) {
        this.routes[path] = callback || function () {}
    }

    go(path) {
        history.pushState({path},null,path)
        this.routes[path] && this.routes[path]()
    }

    _bindPopState () {
        window.addEventListener('popstate',(e) => {
            const path = e.state && e.state.path
            this.routes[path] && this.routes[path]()
        })
    }
}

window.Router = new Routers()
Router.init(location.pathname)
const body = document.querySelector('body')
function changeBgcColor(color) {
    body.style.backgroundColor = color
}

Router.route('/',() => {
    changeBgcColor('white')
})
Router.route('/yellow',() => {
    changeBgcColor('yellow')
})
Router.route('/blue',() => {
    changeBgcColor('blue')
})

const ul = document.querySelector('ul')
ul.addEventListener('click', (e) => {
    if(e.target.tagName === 'A') {
        e.preventDefault()
        Router.go(e.target.getAttribute('href'))
    }
})