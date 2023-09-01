for (let x = 1, y = 1; x, y < 31; x = (x * 2), y++) {
    console.log(x);
    let para = document.createElement('p');
    para.innerHTML = x;
    document.querySelector('#para').appendChild(para);
}
