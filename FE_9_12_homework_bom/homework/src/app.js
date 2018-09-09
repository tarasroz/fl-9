const rootNode = document.getElementById('root');

const todoItems = [
    { isDone: false, id: 12345, description: 'Todo 1' }
];

let addBtn = document.getElementById('addBtn'),
    cancel = document.getElementById('cancel'),
    save = document.getElementById('save'),
    headerH1 = document.getElementsByTagName('h1'),
    text = document.querySelector('input'),
    ulList = document.querySelector('ul'),
    toModify = null;

const NUM_0 = 0,
    NUM_1 = 1,
    NUM_2 = 2;

addBtn.addEventListener('click', addPage);
cancel.addEventListener('click', mainPage);
save.addEventListener('click', saveChanges);
window.addEventListener('hashchange', hashChange);


function mainPage() {
    window.location.hash = '';
    history.pushState('', document.title, window.location.pathname);
}

function addPage() {
    window.location.hash = '/add';
}

function saveChanges(addChildren) {

    if (window.location.hash === '#/add') {
        doIt(text.value);

    } else if (window.location.hash !== '#/add') {
        addChildren = toModify.childNodes;
        addChildren[NUM_2].innerText = text.value;
    }

    text.value = '';
    window.location.hash = '';
    history.pushState('', document.title, window.location.pathname);
}

function modBlock(e, turn, modifyChildren) {

    if (e.target.tagName === 'SPAN') {
        turn = e.target.parentNode;

    } else if (e.target.tagName !== 'SPAN') {

        return this
    }

    window.location.hash = '/modify:';
    modifyChildren = turn.childNodes;
    text.value = modifyChildren[NUM_2].innerText;
    toModify = turn;
}

let checkFun = (e, checkSpan) => {
    e.target.setAttribute('src', 'assets/img/done-s.png');
    checkSpan = e.target.parentNode.nextSibling;
    checkSpan.style.backgroundColor = '#7f7f7f';
}

let delBlock = (e, turnOff) => {
    turnOff = e.target.parentNode;
    turnOff.remove();
}

function hashChange(hashChang, hashItem) {
    hashChang = window.location.hash;
    hashItem = document.querySelector('.task');

    if (hashChang === '#/add' || hashChang === '#/modify:') {
        headerH1[NUM_0].style = 'display: none';

        if (hashChang === '#/add') {
            headerH1[NUM_1].style = 'display: block';
            headerH1[NUM_2].style = 'display: none';

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

function addAttribute(tag, attributeObj, inside, newEl) {
    newEl = document.createElement(tag);

    if (Object.keys(attributeObj).length) {

        for (let key in attributeObj) {

            if (attributeObj.hasOwnProperty(key)) {
                newEl.setAttribute(key, attributeObj[key]);
            }
        }
    }

    if (inside && typeof inside === 'string') {
        newEl.innerText = inside
    }

    return newEl
}

function doIt(value, createLi, emptybox, labAttr, check, spanText, delImg) {
    addAttribute;

    createLi = document.createElement('li');

    emptybox = addAttribute('input', {
        type: 'checkbox',
        id: 'emptyLi',
        style: 'display: none'
    });
    createLi.appendChild(emptybox);

    labAttr = addAttribute('label', {
        for: 'emptyLi'
    });

    check = addAttribute('img', {
        src: 'assets/img/todo-s.png',
        alt: 'logo-todo'
    })
    labAttr.appendChild(check);

    createLi.appendChild(labAttr);

    spanText = addAttribute('span', {}, value);
    createLi.appendChild(spanText);

    delImg = addAttribute('img', {
        src: 'assets/img/remove-s.jpg',
        class: 'deleteImg',
        alt: 'logoRemove'
    });
    createLi.appendChild(delImg);

    ulList.appendChild(createLi);

    createLi.addEventListener('click', modBlock);
    delImg.addEventListener('click', delBlock);
    check.addEventListener('click', checkFun);

    if (value === '') {

        return this
    }
}