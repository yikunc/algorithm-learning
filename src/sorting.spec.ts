import { selectionSort } from './sorting'


describe('sorting test cases', () => {
  it('selection sorting', () => {
    const raw = [4, 1, 3, 1, 5, 2]
    const sorted = [1, 1, 2, 3, 4, 5]

    expect(selectionSort(raw)).toStrictEqual(sorted)
  })
})