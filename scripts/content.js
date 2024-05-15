const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);
const search = urlParams.get('q')
console.log(search)
let elem
if (search && window.location.host.includes('google')) {
    let els = document.getElementsByTagName('a');
    for (var i = 0, l = els.length; i < l; i++) {
        var el = els[i];
        if (el.href.includes('tbm=vid')) {
            elem = el.parentElement
            break
        }
    }
    let maps_button = elem.cloneNode(true)
    maps_button.firstChild.href = "https://www.google.com/maps/search/" + search
    maps_button.firstChild.firstChild.innerText = "Maps"
    maps_button.firstChild.firstChild.firstChild.innerText = "Maps"

    elem.after(maps_button)
}
