const rootNode = document.getElementById('#root');
let addNewItem = document.querySelector('.addNewItem'),
    addIcon = document.querySelector('#addIcon'),
    listDo = document.querySelector('.listDo'),
    maxNum = 11,
    itemPlus = 1;


addNewItem.addEventListener('change', function() {
    if (addNewItem.value === '') {
        addIcon.disabled = true;
    } else if (addNewItem.value !== '') {
        addIcon.disabled = false;
    }

    addIcon.onclick = function() {
        let itemLabel = addNewItem.value;
        addNewItem.value = '';
        addIcon.disabled = true;
        ++itemPlus;

        if (itemPlus <= maxNum) {
            addIcon.disabled = true;
            document.querySelector('.headName').textContent = 'TODO Cat List';

            let listLabel = document.createElement('li');
            listLabel.setAttribute('class', 'li');
            listLabel.setAttribute('draggable', true);

            let textLabel = document.createElement('span');
            textLabel.appendChild(document.createTextNode(itemLabel));

            let checkBlockIcon = document.createElement('i');
            checkBlockIcon.setAttribute('class', 'material-icons');
            checkBlockIcon.appendChild(document.createTextNode('check_box_outline_blank'));

            let deleteBlockIcon = document.createElement('i');
            deleteBlockIcon.setAttribute('class', 'material-icons');
            deleteBlockIcon.appendChild(document.createTextNode('delete'));

            listLabel.appendChild(checkBlockIcon);
            listLabel.appendChild(textLabel);
            listLabel.appendChild(deleteBlockIcon);

            listDo.appendChild(listLabel);

            checkBlockIcon.onclick = function() {
                checkBlockIcon.textContent = 'check_box';
            };

            deleteBlockIcon.onclick = function() {
                listLabel.remove();
                --itemLabel;
            };
        } else {
            addIcon.disabled = true;
            document.querySelector('.headName').textContent = 'Maximum item per list are created';
        }
    }
})

let dragDrop = null;

listDo.addEventListener('dragstart', function(event) {
    dragDrop = event.target;
});

listDo.addEventListener('dragover', function(event) {
    if (event.target.className === 'li') {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }
});

listDo.addEventListener('drop', function(event) {
    if (event.target.className === 'li') {
        event.preventDefault();
        listDo.insertBefore(dragDrop, event.target.nextSibling);
    }
});