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
        for (let i = 0; i + 1 < res.length; ++i) {
            for (let j = 0; j + 1 < res.length - i; ++j) {
                if (res[j + 1] < res[j]) {
                    const tmp = res[j + 1];
                    res[j + 1] = res[j];
                    res[j] = tmp;
                }
            }
        }
        return res;
    },
    // шейкерная
    shaker: function (arr) {
        return arr
    }
    // расческой

    // вставками

    // выбором

    // быстрая

    // слиянием

    // пирамидальная
}
module.exports = sort;