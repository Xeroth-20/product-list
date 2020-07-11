window.addEventListener('load', () => {
    init();
});

function init() {
    const buttonList = document.getElementsByClassName('btn-modal');
    const listener = (modal) => () => modal.classList.toggle('hide');
    
    for (const button of buttonList) {
        const targetName = button.dataset.target;
        const modal = document.getElementById(targetName);
        button.addEventListener('click', listener(modal));
    }
}
