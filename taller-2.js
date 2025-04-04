function findMax(nums) {
    mayor = nums[0]
    for (let n of nums) {
        if (n > mayor) {
            mayor = n
        }
    }
    return mayor
}

function includes(nums, elem) {
    for (let item of nums) {
        if (item === elem) {
            return true
        }
    }
    return false
}

function sum(nums) {
    suma = 0
    for (let n of nums) {
        suma += n
    }
    return suma
}

function missingNumbers(nums) {
    menor = nums[0]
    mayor = nums[0]

    for (let n of nums) {
        if (n > mayor) {
            mayor = n
        }
        if (n < menor) {
            menor = n
        }
    }

    miss = []
    number = menor
    
    while (number < mayor) {
        rep = false
        for (let item of nums) {
            if (item === number) {
                rep = true
                break
            }
        }
        if (!(rep)) {
            miss.push(number)
        }
        number++
    }
    return miss
}

console.log(sum([7,2,4,6,3,9]))
