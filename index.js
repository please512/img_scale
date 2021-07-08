export function scaleImg(options) {
    let area = document.createElement('div')
    area.style.width = `${options.width}px`
    area.style.height = `${options.height}px`
    area.style.backgroundImage = `url('${options.url}')`
    area.style.backgroundPosition = `50% 50%`
    area.style.backgroundRepeat = `no-repeat`
    area.style.backgroundSize = `100%`
    area.setAttribute('id', `${options.scaleId}`)
    options.container.appendChild(area)

    area.onmouseenter = function (e) {
        let offsetX = parseFloat((e.offsetX / area.offsetWidth * 10000).toFixed(2)) / 100
        let offsetY = parseFloat((e.offsetY / area.offsetHeight * 10000).toFixed(2)) / 100
        this.style.backgroundSize = `${options.scale*100}%`
        this.style.backgroundPosition = `${offsetX}% ${offsetY}%`
    }
    area.onmousemove = function (e) {
        let offsetX = parseFloat((e.offsetX / area.offsetWidth * 10000).toFixed(2)) / 100
        let offsetY = parseFloat((e.offsetY / area.offsetHeight * 10000).toFixed(2)) / 100
        this.style.backgroundSize = `${options.scale*100}%`
        this.style.backgroundPosition = `${offsetX}% ${offsetY}%`
    }
    area.onmouseleave = function (e) {
        this.style.backgroundSize = `100%`
        this.style.backgroundPosition = `50% 50%`
    }
}