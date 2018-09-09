const rootNode = document.getElementById('root');

const todoItems = [
    { isDone: false, id: 12345, description: 'Todo 1' }
];

let toModify = null,
    addBtn = document.getElementById('addBtn'),
    cancel = document.getElementById('cancel'),
    save = document.getElementById('save'),
    headerH1 = document.getElementsByTagName('h1'),
    text = document.querySelector('input'),
    ulList = document.querySelector('ul');

const NUM_0 = 0,
    NUM_1 = 1,
    NUM_2 = 2;

addBtn.addEventListener('click', addPage);
cancel.addEventListener('click', mainPage);
save.addEventListener('click', saveChanges);
window.addEventListener('hashchange', hashChange);



function addPage() {
    window.location.hash = '/add';
}

function mainPage() {
    window.location.hash = '';
    history.pushState('', document.title, window.location.pathname);
}

function saveChanges() {
    if (window.location.hash === '#/add') {
        generate(text.value);
    } else {
        let addChildren = toModify.childNodes;
        addChildren[NUM_2].innerHTML = text.value;
    }
    text.value = '';
    window.location.hash = '';
    history.pushState('', document.title, window.location.pathname);
}

function modBlock() {
    let turn;
    if (event.target.tagName === 'SPAN') {
        turn = event.target.parentNode;
    } else {
        return;
    }
    window.location.hash = '/modify:';
    let modifyChildren = turn.childNodes;
    text.value = modifyChildren[NUM_2].innerHTML;
    toModify = turn;
}

function delBlock() {
    let turnOff = event.target.parentNode;
    turnOff.remove();
}

function checkFun(event) {
    event.target.setAttribute('src', 'assets/img/done-s.png');
    let checkSpan = event.target.parentNode.nextSibling;
    checkSpan.style.backgroundColor = '#7f7f7f';
}

function hashChange() {
    let hashChang = window.location.hash;
    let hashItem = document.querySelector('.task');
    if (hashChang === '#/add' || hashChang === '#/modify:') {
        headerH1[NUM_0].style = 'display: none';
        if (hashChang === '#/add') {
            headerH1[NUM_2].style = 'display: none';
            headerH1[NUM_1].style = 'display: block';
        } else {
            headerH1[NUM_1].style = 'display: none';
            headerH1[NUM_2].style = 'display: block';
        }
        addBtn.style = 'display: none';
        hashItem.style = 'display: none';
        text.style = 'display: block';
        cancel.style = 'display: block';
        save.style = 'display: block';

    } else if (hashChang === '') {
        headerH1[NUM_0].style = 'display: block';
        headerH1[NUM_1].style = 'display: none';
        headerH1[NUM_2].style = 'display: none';
        addBtn.style = 'display: block';
        hashItem.style = 'display: block';
        text.style = 'display: none';
        cancel.style = 'display: none';
        save.style = 'display: none';
    }
}

function generate(value) {
    function addAttribute(tag, attributesObject, markup) {
        let newElement = document.createElement(tag);
        if (Object.keys(attributesObject).length) {
            for (let key in attributesObject) {
                if (attributesObject.hasOwnProperty(key)) {
                    newElement.setAttribute(key, attributesObject[key]);
                }
            }
        }
        if (markup && typeof markup === 'string') {
            newElement.innerHTML = markup
        }
        return newElement;
    }

    if (value === '') {
        return;
    }
    let createLi = document.createElement('li');

    let emptybox = addAttribute('input', { type: 'checkbox', id: 'thing', style: 'display: none' });
    createLi.appendChild(emptybox);

    let labAttr = addAttribute('label', { for: 'thing' });

    let check = addAttribute('img', { src: 'assets/img/todo-s.png', alt: 'logo' })
    labAttr.appendChild(check);

    createLi.appendChild(labAttr);

    let spanText = addAttribute('span', {}, value);
    createLi.appendChild(spanText);

    let delImg = addAttribute('img', { src: 'assets/img/remove-s.jpg', class: 'deleteImg', alt: 'logo' });
    createLi.appendChild(delImg);

    ulList.appendChild(createLi);

    createLi.addEventListener('click', modBlock);
    delImg.addEventListener('click', delBlock);
    check.addEventListener('click', checkFun);
}