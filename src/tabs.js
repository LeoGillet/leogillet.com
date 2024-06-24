const tabs = document.getElementsByClassName('tab');
const tabGroups = {
    codingTab: {
        show: 'codingDiv',
        hide: ['othersDiv', 'contactDiv'],
        unselect: ['othersTab', 'contactTab']
    },

    othersTab: {
        show: 'othersDiv',
        hide: ['codingDiv', 'contactDiv'],
        unselect: ['codingTab', 'contactTab']
    },

    contactTab: {
        show: 'contactDiv',
        hide: ['codingDiv', 'othersDiv'],
        unselect: ['codingTab', 'othersTab']
    }
}

function tabChange(tab) {
    const tabGroup = tabGroups[tab.id];
    tab.classList.add('selected');

    tabGroup.unselect.forEach(function (id) {
        const element = document.getElementById(id);
        element.classList.remove('selected');
    });

    tabGroup.hide.forEach(function (id) {
        const element = document.getElementById(id);
        element.style.display = 'none';
    })

    document.getElementById(tabGroup.show).style.display = 'block';
}

Array.prototype.forEach.call(tabs, function (tab) {
    tab.addEventListener('click', function (event) {
        tabChange(event.srcElement);
    });
})

tabChange(document.getElementById('codingTab'));