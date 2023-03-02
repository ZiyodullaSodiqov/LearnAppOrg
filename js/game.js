const zone1 = document.querySelector('.zone-1');
const zone2 = document.querySelector('.zone-2');

const ufo1 = document.querySelector('#ufo1');
const ufo2 = document.querySelector('#ufo2')
const ufo3 = document.querySelector('#ufo3')
const ufo4 = document.querySelector('#ufo4')
const ufo5 = document.querySelector('#ufo5')
const ufo6 = document.querySelector('#ufo6')
const ufo7 = document.querySelector('#ufo7')
const ufo8 = document.querySelector('#ufo8')
const ufo9 = document.querySelector('#ufo9')
const ufo10 = document.querySelector('#ufo10')
const ufo11 = document.querySelector('#ufo11')



zone1.ondragover = allowDrop;
zone2.ondragover = allowDrop;

 function allowDrop(event) {
    event.preventDefault();
}

ufo1.ondragstart = drag;
ufo2.ondragstart = drag;
ufo3.ondragstart = drag;
ufo4.ondragstart = drag;
ufo5.ondragstart = drag;
ufo6.ondragstart = drag;
ufo7.ondragstart = drag;
ufo8.ondragstart = drag;
ufo9.ondragstart = drag;
ufo10.ondragstart = drag;
ufo11.ondragstart = drag;

function drag(event) {
    event.dataTransfer.setData('id', event.target.id);
}

zone2.ondrop = drop;
zone1.ondrop = drop;

function drop(event) {
    let itemId = event.dataTransfer.getData('id');
    console.log(itemId);
    event.target.append(document.getElementById(itemId));

}

if (zone1.children.length == 1) {
    console.log('You win');
}   else {
    console.log('You lose');
}
console.log(zone1.children);
