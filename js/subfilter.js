function subfil() {
    document.getElementById('result').style.visibility = 'visible';
    document.getElementById('result').textContent = 'Đang xử lý...';
    for(let key = 1; key <= 6; key++) {
        let min = document.getElementById(`value${key}a`).value;
        let max = document.getElementById(`value${key}b`).value;
        if (min === '') {
            min = Number.MIN_SAFE_INTEGER;
        }
        if (max === '') {
            max = Number.MAX_SAFE_INTEGER;
        }
        if(parseInt(min) > parseInt(max)) {
            let temp = min;
            min = max;
            max = temp;
            return;
        }
        document.getElementById(`value${key}a`).value = min;
        document.getElementById(`value${key}b`).value = max;
    }
    fetch('https://backend-fhuz.onrender.com/showcsv', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            {
                "value1a": document.getElementById('value1a').value,
                "value1b": document.getElementById('value1b').value,
                "value2a": document.getElementById('value2a').value,
                "value2b": document.getElementById('value2b').value,
                "value3a": document.getElementById('value3a').value,
                "value3b": document.getElementById('value3b').value,
                "value4a": document.getElementById('value4a').value,
                "value4b": document.getElementById('value4b').value,
                "value5a": document.getElementById('value5a').value,
                "value5b": document.getElementById('value5b').value,
                "value6a": document.getElementById('value6a').value,
                "value6b": document.getElementById('value6b').value,
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