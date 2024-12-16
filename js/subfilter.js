function subfil() {
    document.getElementById('result').style.visibility = 'visible';
    document.getElementById('result').textContent = 'Đang xử lý...';
    var min = [], max = [];
    for(let key = 1; key <= 6; key++) {
        min[key] = document.getElementById(`value${key}a`).value;
        max[key] = document.getElementById(`value${key}b`).value;
        if (min[key] === '') {
            min[key] = Number.MIN_SAFE_INTEGER;
        }
        if (max[key] === '') {
            max[key] = Number.MAX_SAFE_INTEGER;
        }
        if(parseInt(min[key]) > parseInt(max[key])) {
            let temp = min[key];
            min[key] = max[key];
            max[key] = temp;
        }
    }
    fetch('https://backend-fhuz.onrender.com/showcsv', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            {
                "value1a": min[1],
                "value1b": max[1],
                "value2a": min[2],
                "value2b": max[2],
                "value3a": min[3],
                "value3b": max[3],
                "value4a": min[4],
                "value4b": max[4],
                "value5a": min[5],
                "value5b": max[5],
                "value6a": min[6],
                "value6b": max[6],
            }
        ),
    })
    .then(response => response.json())
    .then(data => {
        if (data.result !== undefined) {
           document.getElementById('result').innerHTML = data.result;
        }
        else {
            document.getElementById('result').textContent = `Lỗi: ${data.error}`;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').textContent = `Có lỗi xảy ra!`;
    });
}