/**
 * @description second try, time complexity O(n)
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
    let position = [0, 0];
    let set = new Set();

    set.add("0,0");

    for (const direction of path) {
        if (direction === "N") {
            ++position[0];
        } else if (direction === "S") {
            --position[0];
        } else if (direction === "E") {
            ++position[1];
        } else if (direction === "W") {
            --position[1];
        }

        let str = position[0] + "," + position[1];
        let size = set.size;
        set.add(str);

        if (size === set.size) {
            return true;
        }
    }

    return false;
};

/**
 * @description first try, time complexity O(n)
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
    let position = [0, 0];

    let passed = {
        0: {
            0: true,
        },
    };

    const moveNext = (direction) => {
        switch (direction) {
            case "N":
                ++position[1];
                break;
            case "S":
                --position[1];
                break;
            case "E":
                ++position[0];
                break;
            case "W":
                --position[0];
                break;
        }
    };
    for (const direction of path) {
        moveNext(direction);

        if (passed[position[0]] && passed[position[0]][position[1]]) {
            return true;
        }

        if (!passed[position[0]]) {
            passed[position[0]] = {};
        }

        passed[position[0]][position[1]] = true;
    }

    return false;
};
