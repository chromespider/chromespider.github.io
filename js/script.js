const logoElement = document.querySelector('.logo-svg');
const logoArray = ['cart', 'eye', 'globe', 'header', 'home', 'movie', 'code'];

let i = 0;

setInterval(function logoRefresh() {
    if (i < logoArray.length - 1) {
        i++;
        let svgName = logoArray[i];
        logoElement.setAttribute('src', `img/${svgName}.svg`);
    } else {
        i = 0;
        let svgName = logoArray[i];
        logoElement.setAttribute('src', `img/${svgName}.svg`);
    }
}, 200);