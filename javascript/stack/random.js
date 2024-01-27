function bFarthestPoints(A, B) {
    // Calculate Euclidean distance for each point
    const distances = A.map(point => ({
        point,
        distance: Math.sqrt(point[0] ** 2 + point[1] ** 2)
    }));

    // Sort points based on distances in ascending order
    distances.sort((a, b) => b.distance - a.distance);

    // Extract top B points
    const result = distances.slice(0,B).map(item => item.point);

    return result;
}

// Example usage:
const pointsArray = [
    [1, 5],
    [2, 1],
    [-1, -1],
    [3, 1]
];

const B = 3;
const result = bFarthestPoints(pointsArray, B);
console.log(result);
