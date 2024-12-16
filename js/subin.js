function subin() {
    document.getElementById('commentcontribute').style.visibility = 'visible';
    const values = {
        value1: document.getElementById('value1').value,
        value2: document.getElementById('value2').value,
        value3: document.getElementById('value3').value,
        value4: document.getElementById('value4').value,
        value5: document.getElementById('value5').value,
        value6: document.getElementById('value6').value,
    };
    for (let key in values) {
        if (values[key] === '') {
            values[key] = null;
        }
    }
    document.getElementById('result').textContent = 'Đang xử lý...';
    fetch('https://backend-fhuz.onrender.com/process', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
    })
    .then(response => response.json())
    .then(data => {
        if (data.result !== undefined) {
            document.getElementById('result').textContent = `Kết quả: ${data.result}`;
        } else {
            document.getElementById('result').textContent = `Lỗi: ${data.error}`;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').textContent = `Có lỗi xảy ra!`;
    });
}