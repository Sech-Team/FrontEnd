function senddata(comment, selection){
    fetch('https://backend-fhuz.onrender.com/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "comment": comment,
            "selection": selection
        }),
    })    
}