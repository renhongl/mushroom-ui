

export default function fetchConfig(url) {
    fetch(url).then(res => res.json()).then(data => {
        var config = data;
        document.getElementById('name').innerText = config.name;
        document.getElementById('desc').innerText = config.desc;
        document.getElementById('code').innerText = config.code;
        let options = document.getElementById('options');
        config.options.forEach((item, i) => {
            let tr = document.createElement('tr');
            for(let key in item) {
                if (item.hasOwnProperty(key)) {
                    let td = document.createElement('td');
                    td.innerText = item[key];
                    tr.appendChild(td);
                }
            }
            options.appendChild(tr);
        });
    })
}