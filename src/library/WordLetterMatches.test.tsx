import {WordLetterMatches} from "./WordLetterMatches";

test('one letter bad', () => {
    let sut = new WordLetterMatches('a', 'B')
    expect(sut.matches()).toEqual(0);
})

test('one letter OK, different capitulations first', () => {
    let sut = new WordLetterMatches('A', 'a')
    expect(sut.matches()).toEqual(1);
})

test('one letter OK, different capitulations second', () => {
    let sut = new WordLetterMatches('b', 'B')
    expect(sut.matches()).toEqual(1);
})

test('one haystack letter, one, ok', () => {
    let sut = new WordLetterMatches('a', 'a')
    expect(sut.matches()).toEqual(1);
})

test('Multiple haystack letters, 1 letter ok', () => {
    let sut = new WordLetterMatches('abc', 'a')
    expect(sut.matches()).toEqual(1);
})

test('Multiple haystack letters, another 1 letter ok', () => {
    let sut = new WordLetterMatches('abc', 'b')
    expect(sut.matches()).toEqual(1);
})

test('Multiple haystack letters, again 1 letter ok', () => {
    let sut = new WordLetterMatches('abc', 'c')
    expect(sut.matches()).toEqual(1);
})

test('Multiple haystack letters, 0 letter ok', () => {
    let sut = new WordLetterMatches('abc', 'd')
    expect(sut.matches()).toEqual(0);
})

test('Multiple haystack letters, 2 letters match', () => {
    let sut = new WordLetterMatches('abc', 'ab')
    expect(sut.matches()).toEqual(2);
})

test('Multiple haystack letters, 2 letters match (1)', () => {
    let sut = new WordLetterMatches('abc', 'bc')
    expect(sut.matches()).toEqual(2);
})

test('Multiple haystack letters, 2 letters match (2)', () => {
    let sut = new WordLetterMatches('abc', 'ac')
    expect(sut.matches()).toEqual(2);
})

test('Multiple haystack letters, 2 letters dont match', () => {
    let sut = new WordLetterMatches('abc', 'de')
    expect(sut.matches()).toEqual(0);
})

test('Lucky - river = 0', () => {
    let sut = new WordLetterMatches('lucky', 'river')
    expect(sut.matches()).toEqual(0);
})

test('Lucky - lakes = 2', () => {
    let sut = new WordLetterMatches('lucky', 'lakes')
    expect(sut.matches()).toEqual(2);
})

test('Lucky - plucks = 4', () => {
    let sut = new WordLetterMatches('lucky', 'pluck')
    expect(sut.matches()).toEqual(4);
})

test('Lucky - lucky = 5', () => {
    let sut = new WordLetterMatches('lucky', 'lucky')
    expect(sut.matches()).toEqual(5);
})
