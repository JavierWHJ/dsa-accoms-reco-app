const getAccoms = (input) => {
    const accomsInput = {
        location: input.location,
        minPrice: input.minPrice,
        maxPrice: input.maxPrice,
        sortBy: input.sortBy,
        accommodationType: input.accommodationType,
        amenities: input.amenities
    }
    return fetch("http://localhost:8080/getAccommsRecommendations", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(accomsInput)
    }).then(res => {
        return res
    });
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