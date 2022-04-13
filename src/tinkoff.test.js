const {
    test
} = require('@jest/globals');
const tinkoff = require('./tinkoff');


describe('task abonent', () => {
    test('"100  10  12  15" to equal 160', () => {
        expect(tinkoff.abonent(100, 10, 12, 15)).toEqual(160);
    })
    test('"100  10  12  1" to equal 100', () => {
        expect(tinkoff.abonent(100, 10, 12, 1)).toEqual(100);
    })
})

describe('task knife', () => {
    test('6 to equal 3', () => {
        expect(tinkoff.knife(6)).toEqual(3);
    })
    test('5 to equal 3', () => {
        expect(tinkoff.knife(5)).toEqual(3);
    })
})

describe('task floors', () => {
    test('t=5, floors=[1, 4, 9, 16, 25], empl=2 to equal 24min', () => {
        expect(tinkoff.floors(5, [1, 4, 9, 16, 25], 2)).toEqual(24);
    })
    test('t=4, floors=[1, 2, 3, 6, 8, 25], empl=5 to equal 31min', () => {
        expect(tinkoff.floors(4, [1, 2, 3, 6, 8, 25], 5)).toEqual(31);
    })
})

describe('task paper', () => {
    test('[1, 2, 1, 3, 5], k=2 to equal 16', () => {
        expect(tinkoff.paper([1, 2, 1, 3, 5], 2)).toEqual(16);
    })
    test('[99, 5, 85], k=1 to equal 10', () => {
        expect(tinkoff.paper([99, 5, 85], 1)).toEqual(10);
    })
    test('[999], k=10 to equal 0', () => {
        expect(tinkoff.paper([999], 10)).toEqual(0);
    })
})