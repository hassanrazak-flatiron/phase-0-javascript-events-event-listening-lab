
function clickAlert(){
    alert('I was clicked');
};

function addingEventListener() {
    const input = document.getElementById('button');
    return input.addEventListener('click',clickAlert);
};

addingEventListener();


