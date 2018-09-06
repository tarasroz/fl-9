const rootNode = document.getElementById('#root');

let addNewItem = document.querySelector('.addNewItem'),
    addButton = document.querySelector('.addButton'),
    listDo = document.querySelector('.listDiv'),
    maxNum = 10,
    itemPlus = 1;


addNewItem.addEventListener('change', function() {
    if (addNewItem.value === '') {
        addButton.disabled = true;
    } else if (addNewItem.value !== '') {
        addButton.disabled = false;
    }

    addButton.onclick = function() {
        let itemLabel = addNewItem.value;
        addNewItem.value = '';
        addButton.disabled = true;
        itemPlus++;

        if (itemPlus <= maxNum) {
            addButton.disabled = true;
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

            listDo.appendChild(listLabel);

            checkBlock.onclick = function() {
                checkBlockIcon.textContent = 'check_box';
            };

            deleteBlock.onclick = function() {
                listLabel.remove();
                --itemLabel;
            };
        } else {
            addButton.disabled = true;
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
        listDo.insertBefore(dragDrop, event.target);
    }
});

// rootNode.appendChild( /* Append your list item node*/ );