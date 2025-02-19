function permutationSort(a) { // O(n!)
    var counter = 1; // O(1)
    var permutations = []; // O(1)
    permutations.push([...a]); // O(n)
    if (a.length == 0 || a.length == 1) { // O(1)
        return counter; // O(1)
    }
    else if (isSorted(a)) { // O(n)
        return counter; // O(1)
    }
    else if (a.length == 2) { // O(n)
        if (!isSorted(a)) { // O(n)
            a.reverse(); // O(n)
            counter += 1; // O(1)
            return counter; // O(1)
        }
        else { // O(1)
            return counter; // O(1)
        }
    }
    else { // O(n!)
        var allPerms = getAllPermutations(a); // O(n!)

        for (var i = 0; i < allPerms.length; i++) { // runs n! times -> O(n!)
            if (i != 0) { // O(1)
                counter++; // O(1)
            }
            if (isSorted(allPerms[i])) { // O(n)
                a.length = 0; // O(1)
                Array.prototype.push.apply(a, allPerms[i]); // O(n)
                return counter; // O(1)
            }
        }
        return counter; // O(1)
    }
}

function getAllPermutations(arr) { // O(n!)
    if (arr.length === 0) { // O(1)
        return [[]]; // O(1)
    }

    if (arr.length === 1) { // O(1)
        return [arr]; // O(1)
    }

    var results = []; // O(1)

    for (var i = 0; i < arr.length; i++) { // runs n times -> O(n) -> total runtime = O(n!)
        var first = arr[i]; // O(1)
        var rest = arr.slice(0, i).concat(arr.slice(i + 1)); // O(n^2)
        var subPerms = getAllPermutations(rest); // O(n!)
        for (var j = 0; j < subPerms.length; j++) { // runs n times -> O(n) -> total runtime = O(n^3)
            results.push([first].concat(subPerms[j])); // O(n^2)
        }
    }
    return results; // O(1)
}

function isSorted(arr) { // O(n)
    let result = true; // O(1)
    for (i = 0; i < arr.length - 1; i++) { // runs n times -> O(n)
        if (arr[i] > arr[i+1]) { // O(1)
            result = false; // O(1)
        }
    }
    return result; // O(1)
}
