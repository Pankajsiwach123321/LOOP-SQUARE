for (let x = 1, y = 1; x, y < 31; x = (x * 2), y++) {
    console.log(x);
    let para = document.createElement('p');
    para.innerHTML = x;
    document.querySelector('#para').appendChild(para);
}
for (let t = 0; t < 21; t += 2) {
    console.log(t);
        let para2 = document.createElement('p');
        para2.innerHTML = t;
        document.querySelector('#para2').appendChild(para2);
    
}
