const rootNode = document.getElementById('root');

let addItemNew = document.querySelector('.addNewItem'),
    addButton = document.querySelector('.addButton'),
    list = document.querySelector('.list'),
    addDiv = document.getElementsByClassName('.addItem'),
    maxNum = 10,
    itemPlus = 1;

// main

addItemNew.addEventListener('change', function() {

    if (addItemNew.value !== '') {
        addButton.disabled = false;
    } else {

        addButton.disabled = true;
    }
})

addButton.onclick = function() {
    let itemLabel = addItemNew.value;
    addItem(itemLabel);
    addItemNew.value = '';
    addButton.disabled = true;
    ++itemPlus;
}

function addItem(itemLabel) {

    if (itemPlus <= maxNum) {
        addButton.disabled = false;
        document.querySelector('.headName').textContent = 'TODO Cat List';


        let listLabel = document.createElement('li');
        listLabel.setAttribute('class', 'li');
        listLabel.setAttribute('draggable', true);


        let textLabel = document.createElement('span');
        textLabel.appendChild(document.createTextNode(itemLabel));


        let checkBlock = document.createElement('button');
        checkBlock.setAttribute('class', 'checkBox');

        let checkBlockIcon = document.createElement('i');
        checkBlockIcon.setAttribute('class', 'material-icons');
        checkBlockIcon.appendChild(document.createTextNode('check_box_outline_blank'));
        checkBlock.appendChild(checkBlockIcon);


        let deleteBlock = document.createElement('button');
        deleteBlock.setAttribute('class', 'delButton');

        let deleteBlockIcon = document.createElement('i');
        deleteBlockIcon.setAttribute('class', 'material-icons');
        deleteBlockIcon.appendChild(document.createTextNode('delete'));
        deleteBlock.appendChild(deleteBlockIcon);


        listLabel.appendChild(checkBlock);
        listLabel.appendChild(textLabel);
        listLabel.appendChild(deleteBlock);


        list.appendChild(listLabel);


        checkBlock.onclick = function() {
            checkBlockIcon.textContent = 'check_box';
        };
        deleteBlock.onclick = () => {
            listLabel.remove();
            --itemLabel;
        };
    } else {

        addButton.disabled = true;
        document.querySelector('.headName').textContent = 'Maximum item per list are created';
    }
}

// Drag & drop action

let dragDrop = null;

list.addEventListener('dragstart', function(e) {
    dragDrop = e.target;
});

list.addEventListener('dragover', function(e) {

    if (e.target.className === 'li') {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    }
});

list.addEventListener('drop', function(e) {

    if (e.target.className === 'li') {
        e.preventDefault();
        list.insertBefore(dragDrop, e.target);
    }
});