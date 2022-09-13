
function scrollD(x) {
    let s = `info`+`${x}`
    const info = document.getElementById(`${s}`);
    info.style.animation ='down 10s';
    const myTimeout = setTimeout(myGreeting, 10000);

    function myGreeting() {
        info.style.animation =`none`;
}
}
