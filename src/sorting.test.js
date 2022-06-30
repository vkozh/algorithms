const {
    test,
    expect
} = require('@jest/globals');
const {
    assert
} = require('chai');
const sort = require('./sorting');

describe('test jest', () => {
    it('adds 1 + 2 to equal 3', () => {
        assert.equal(sort.sum(1, 2), 3);
    });
})

describe('tricky sort', () => {
    test('[] to equal ""', () => {
        expect(sort.tricky([])).toEqual('')
    })
    test('[1, 1] to equal "11"', () => {
        expect(sort.tricky([1, 1])).toEqual('11')
    })
    test('["123", "124", "56", "90"] to equal "9056124123"', () => {
        expect(sort.tricky(["123", "124", "56", "90"])).toEqual("9056124123");
    })
    test('["123", "124", "56", "90", "9"] to equal "99056124123"', () => {
        expect(sort.tricky(["123", "124", "56", "90", "9"])).toEqual("99056124123");
    })
    test('["123", "127", "1239"] to equal "1271239123"', () => {
        expect(sort.tricky(["123", "127", "1239"])).toEqual("1271239123");
    })
})

describe('bubble sort', () => {
    test('lazy: [40, 100, 1, 5, 25, 10] to equal [1, 5, 10, 25, 40, 100]', () => {
        expect(sort.bubble([40, 100, 1, 5, 25, 10])).toEqual([1, 5, 10, 25, 40, 100])
    })
    test('[40, 100, 1, 5, 25, 10] to equal [1, 5, 10, 25, 40, 100]', () => {
        expect(sort.bubble_([40, 100, 1, 5, 25, 10])).toEqual([1, 5, 10, 25, 40, 100])
    })
    test('[] to equal []', () => {
        expect(sort.bubble_([])).toEqual([])
    })
    test('[5, -1, -3, 0, 5] to equal [-3, -1, 0, 5, 5]', () => {
        expect(sort.bubble_([5, -1, -3, 0, 5])).toEqual([-3, -1, 0, 5, 5])
    })
})

describe('shaker sort', () => {
    test('[40, 100, 1, 5, 25, 10] to equal [1, 5, 10, 25, 40, 100]', () => {
        expect(sort.shaker([40, 100, 1, 5, 25, 10])).toEqual([1, 5, 10, 25, 40, 100])
    })
})

describe('comb sort', () => {
    test('[40, 100, 1, 5, 25, 10] to equal [1, 5, 10, 25, 40, 100]', () => {
        expect(sort.comb([40, 100, 1, 5, 25, 10])).toEqual([1, 5, 10, 25, 40, 100])
    })
    test('[5, -1, -3, 0, 5] to equal [-3, -1, 0, 5, 5]', () => {
        expect(sort.comb([5, -1, -3, 0, 5])).toEqual([-3, -1, 0, 5, 5])
    })
})

describe('insertion sort', () => {
    test('[40, 100, 1, 5, 25, 10] to equal [1, 5, 10, 25, 40, 100]', () => {
        expect(sort.insertion([40, 100, 1, 5, 25, 10])).toEqual([1, 5, 10, 25, 40, 100])
    })
    test('[5, -1, -3, 0, 5] to equal [-3, -1, 0, 5, 5]', () => {
        expect(sort.insertion([5, -1, -3, 0, 5])).toEqual([-3, -1, 0, 5, 5])
    })
})

describe('selection sort', () => {
    test('[40, 100, 1, 5, 25, 10] to equal [1, 5, 10, 25, 40, 100]', () => {
        expect(sort.selection([40, 100, 1, 5, 25, 10])).toEqual([1, 5, 10, 25, 40, 100])
    })
    test('[5, -1, -3, 0, 5] to equal [-3, -1, 0, 5, 5]', () => {
        expect(sort.selection([5, -1, -3, 0, 5])).toEqual([-3, -1, 0, 5, 5])
    })
})

describe('quick sort', () => {
    test('[40, 100, 1, 5, 25, 10] to equal [1, 5, 10, 25, 40, 100]', () => {
        expect(sort.quick([40, 100, 1, 5, 25, 10])).toEqual([1, 5, 10, 25, 40, 100])
    })
    test('[40, 100, 1, 5, 25, 10] to equal [1, 5, 10, 25, 40, 100]', () => {
        expect(sort.quick([40, 100, 1, 5, 25, 10])).toEqual([1, 5, 10, 25, 40, 100])
    })
    test('[] to equal []', () => {
        expect(sort.quick([])).toEqual([])
    })
    test('[5, -1, -3, 0, 5] to equal [-3, -1, 0, 5, 5]', () => {
        expect(sort.quick([5, -1, -3, 0, 5])).toEqual([-3, -1, 0, 5, 5])
    })
})