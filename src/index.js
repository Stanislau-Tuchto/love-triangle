/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
    var count=0, a1,a2,a3;
    for(let i=0; i < preferences.length; i++){
        if ((preferences[i] !== undefined) &&
            (preferences[preferences[preferences[i] - 1] - 1] - 1 === i) &&
            (preferences[preferences[preferences[i] - 1] - 1] - 1 !== preferences[preferences[i] - 1] - 1)) {
            count++;
            a1 = preferences[i];
            a2 = preferences[preferences[i] - 1];
            a3 = preferences[preferences[preferences[i] - 1] - 1];

            preferences[i] = undefined;
            preferences[preferences[i] - 1] = undefined;
            preferences[preferences[preferences[i] - 1] - 1] = undefined;

            for (let k = 0; k < preferences.length; k++) {
                if (preferences[k] === a1 | preferences[k] === a2 | preferences[k] === a3) {
                    preferences[k] = undefined;
                }
            }
        }
    }
    return count;
};

