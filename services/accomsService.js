const getAccoms = (input) => {
    const userInput = {
        location: input.location,
        ratings: input.ratings,
        ammenities: input.ammenities,
    }
    return fetch("http://localhost:3030/accoms", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userInput)
    }).then(res => {
        return res
    });
}

const getAmmenitiesList = () => {
    return fetch("http://localhost:5000/ammenities")
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