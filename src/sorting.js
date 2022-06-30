const sort = {
    // testing jest
    sum: function (a, b) {
        return a + b
    },

    // хитрая сортировка
    // Задача: дан массив натуральных чисел, представленных в виде строк.
    // Вам необходимо вывести максимальное число, ктр можно составить из имеющихся чисел.
    // Входные данные: arr - строковый массив, элементы ктр - натуральные числа, представленные в виде строк.
    // Вывод: вывести максимально возможное число, ктр можно составить из имеющихся чисел в заданном массиве.
    tricky: function (arr) {
        return arr.sort((a, b) => a + b < b + a ? 1 : -1).join('');
    },

    // пузырек
    bubble: function (arr) {
        return arr.sort((a, b) => a - b);
    },

    bubble_: function (arr) {
        const res = [...arr];
        for (let i = 0; i < res.length; ++i) {
            for (let j = 0; j < res.length - i; ++j) {
                if (res[j + 1] < res[j]) {
                    swap(res, j, j + 1);
                }
            }
        }
        return res;
    },
    // шейкерная
    shaker: function (arr) {
        const res = [...arr];
        let left = 0;
        let right = res.length - 1;
        while (left <= right) {
            for (let i = 0; i < res.length; i++) {
                if (res[i] > res[i + 1]) {
                    swap(res, i, i + 1)
                }
            }
            --right;
            for (let j = res.length - 1; j > 0; j--) {
                if (res[j] < res[j - 1]) {
                    swap(res, j, j - 1)
                }
            }
            ++left;
        }
        return res;
    },

    // расческой
    comb: function (arr) {
        const res = [...arr]
        const factor = 1.247;
        let step = res.length - 1;
        while (step >= 1) {
            for (let i = 0; i + step < res.length; i++) {
                if (res[i] > res[i + step])
                    swap(res, i, i + step)
            }
            step = Math.floor(step / factor);
        }
        return res;
    },

    // вставками
    insertion: function (arr) {
        const res = [...arr];
        for (let i = 0; i < res.length; i++) {
            const x = res[i];
            let j = i;
            while (j > 0 && res[j - 1] > x) {
                res[j] = res[j - 1]
                j--;
            }
            res[j] = x;
        }
        return res;
    },
    // выбором
    selection: function (arr) {
        const res = [...arr];
        for (let i = 0; i < res.length; i++) {
            let minIndx = i;
            for (let j = i + 1; j < res.length; j++) {
                if (res[j] < res[minIndx]) minIndx = j;
            }
            if (minIndx != i) swap(res, minIndx, i);
        }
        return res;
    },
    // быстрая
    quick: function (arr) {
        const res = [...arr];
        const partition = (vls, l, r) => {
            let less = l;
            for (let i = l; i < r; i++) {
                if (vls[i] < vls[r]) {
                    swap(vls, i, less);
                    less++
                }
            }
            swap(vls, less, r)
            return less
        }
        const quickImpl = (vls, l, r) => {
            if (l < r) {
                const q = partition(vls, l, r);
                quickImpl(vls, l, q - 1);
                quickImpl(vls, q + 1, r);
            }
        }
        quickImpl(res, 0, res.length - 1);
        return res
    }
    // слиянием

    // пирамидальная
}
module.exports = sort;

function swap(items, left, right) {
    if (left !== right) {
        const tmp = items[left];
        items[left] = items[right];
        items[right] = tmp;
    }
}