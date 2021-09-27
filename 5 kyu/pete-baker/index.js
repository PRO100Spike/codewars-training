/*
 * @param {Object} recipe
 * @param {Object} available
 * @return {number}
 */
function cakes(recipe, available) {
    let count = [];
    Object.keys(recipe).forEach((item) => {
        if (available[item] === undefined || available[item] < recipe[item]) {
            return count = [0]
        }
        count.push(Math.floor(available[item] / recipe[item]))
    })
    return Math.min.apply(null, count)
}


