function senddonggop(number) {
    if (number === null || number === '' || isNaN(number)) {
        return alert("Vui lòng nhập số hợp lệ");
    }
    fetch("https://backend-fhuz.onrender.com/get", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            {
                "number": parseFloat(number)
            }
        ),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert(data['message']);
    })
}