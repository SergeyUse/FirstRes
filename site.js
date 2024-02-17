class Navigation{
    mobleMenuButton = null;
    mobleMenu = null;
    mobleMenuButtonClass = "burgerBtn"
    mobleMenuClass = "mobile-nav-panel"

    constructor() {
        this.init()
        this.bindEvents()
    }

    init() {
        this.mobleMenu = document.querySelector(`.${this.mobleMenuClass}`)
        this.mobleMenuButton = document.querySelector(`.${this.mobleMenuButtonClass}`)
    }

    bindEvents() {
        if (this.mobleMenu == undefined || this.mobleMenuButton == undefined  ) {
            console.log('Error');
            return;
        }

        this.mobleMenuButton.addEventListener('click', () => {
            this.mobleMenu.classList.toggle('active');
        })
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new Navigation();
})
