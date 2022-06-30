const tinkoff = {
    /* Абонентская плата Кости составляет A рублей в месяц.
    За эту стоимость Костя получает B мегабайт интернет-трафика.
    Если Костя выйдет за лимит трафика, то каждый следующий мегабайт будет стоить ему C рублей.
    Костя планирует потратить D мегабайт интернет-трафика в следующий месяц.
    Помогите ему сосчитать, во сколько рублей ему обойдется интернет. */
    // Ввод: A, B, C, D

    abonent: function (A, B, C, D) {
        let total = A;
        if (D > B)
            total += (D - B) * C;
        return total;
    },

    /* Ваня принес на кухню рулет, который он хочет разделить с коллегами.
    Вам дано число N, требуется сказать, каким минимальным числом разрезов можно обойтись. */

    knife: function (n) {
        let total = 0;
        total += Math.ceil(Math.log(n) / Math.log(2));
        return total;
    },

    /* Кате надо передать n разных договоров коллегам.
    Все встречи на разных этажах, а между этажами можно перемещаться только по лестнице (1 мин).
    Сейчас Катя на парковочном этаже. Коллег можно посетить в любом порядке,
    но один из них покинет офис через t минут. С парковочного этажа лестницы нет — только лифт до любого этажа (0 мин).
    Как пройти минимальное количество лестничных пролетов.*/

    floors: function (t, floors, emplLeft) {
        let total = 0;
        const maxF = +floors[floors.length - 1];
        const minF = +floors[0];
        const minFloors = maxF - minF;
        const floorEmplLeft = +floors[emplLeft - 1];
        const a = maxF - floorEmplLeft
        const b = floorEmplLeft - minF
        const minToFloorEmpl = Math.min(a, b)
        total = minFloors;
        if (minToFloorEmpl > t) total += minToFloorEmpl;
        return total;
    },

    /* У Кости есть бумажка, на которой написано n чисел. Также у него есть возможность не больше,
    чем k раз, взять любое число с бумажки, после чего закрасить одну из старых цифр, а на ее месте
    написать новую произвольную цифру.
    На какое максимальное значение Костя сможет увеличить сумму всех чисел на листочке? */

    paper: function (data, k) {
        let total = 0;
        let maxLength = data;
        if (data.length > 1) {
            maxLength = data
                .sort((a, b) => dif(b) - dif(a))
        }

        //добавить повторный проход по числу, если остались k
        const newArr = data
        let j = 0
        for (let i = 0; i < k; i++) { // + проверку можно ли чтото еще изменить, чтобы не работать в холостую

            if (data.length > 1) {
                maxLength = maxLength
                    .sort((a, b) => dif(b) - dif(a))
            }
            if (j == maxLength.length) {
                j = 0;
            }
            // if (maxLength[j] !== undefined) //j = 0;
            // {
            // console.log(maxLength[j], '=>', dif(maxLength[j]));
            total += dif(maxLength[j]);
            console.log(maxLength)
            const {
                newNum,
                takedK
            } = getNewNum(maxLength[j]);
            k = takedK
            maxLength[j] = newNum
            j++;
            //}
        }

        function dif(strNum) {
            let {
                newNum
            } = getNewNum(strNum);
            return +newNum - +strNum;
        }

        function getNewNum(strNum, k) {
            let newNum = ''.concat(strNum);
            let j = 0;
            for (j = 1; j <= k; j++) {
                for (let i = 0; i < newNum.length; i++) {
                    if (newNum[i] < 9) {
                        newNum = newNum
                            .slice(0, i) + '9' + newNum.slice(i + 1, newNum.length);
                        break;
                    }
                }
            }
            return {
                newNum: newNum,
                takedK: k - j
            };
        }
        // console.log('maxLength', maxLength)
        return total;
    },
}

module.exports = tinkoff;