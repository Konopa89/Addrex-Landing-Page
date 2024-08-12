let field_count = 85;

const header = document.querySelector("#blocksberg"),
      svg    = await fetch('/src/image/hexagon.svg').then(r => r.text()),
      disperse = 100,
      static_list = [
        9, 11, 21, 22, 23, 34, 35, 45, 46, 
        47, 57, 58, 59, 66, 67, 68, 69, 70, 
        71, 72, 73, 74, 75, 76, 77, 78, 79, 
        80, 81, 82, 83, 84, 85
      ];

for(let i = 0; i < field_count; i++) {


    const div = document.createElement("div");
    div.classList.add("hex");

    div.innerHTML = svg;

    div.dataset.index = i;
    div.style.setProperty('--i', i);

    div.style.setProperty('--x', -1500 + Math.random() * 500 + 'px');
    div.style.setProperty('--y', -1500 + Math.random() * 500 + 'px');

    div.style.setProperty('--delay', (field_count  - (i + Math.random() * 5)) / 2 + 's');

    if ([9, 11, 21, 22, 23, 34, 35, 45, 46, 47, 57, 58, 59, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85].includes(i)) {
      div.classList.add('--static');
    }
    
    header.append(div);
};
