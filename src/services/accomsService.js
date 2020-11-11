const getAccoms = (input) => {
    return fetch("http://localhost:8080/getAccommsRecommendations", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(input)
    }).then(res => res.json())
    .then(result => {
        return result
    })
    .catch(console.log);
}

const getAmmenitiesList = () => {
    return fetch("http://localhost:8080/getAmenitiesList")
    .then(res => res.json())
    .then(result => {
        return result
    })
    .catch(console.log);
}

export default {
    getAccoms,
    getAmmenitiesList,
}