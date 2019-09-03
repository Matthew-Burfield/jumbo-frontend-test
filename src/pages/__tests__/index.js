import React from 'react'
import axios from 'axios'
import renderWithRedux from '../../jest.helpers'
import { fireEvent, waitForElement, cleanup } from '@testing-library/react'
import Index from '../index'

jest.mock('axios')

const mockTheLionKing = {
  popularity: 183.517,
  vote_count: 2166,
  video: false,
  poster_path: '/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg',
  id: 420818,
  adult: false,
  backdrop_path: '/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg',
  original_language: 'en',
  original_title: 'The Lion King',
  genre_ids: [],
  title: 'The Lion King',
  vote_average: 7.2,
  overview:
    "Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.",
  release_date: '2019-07-19',
}
const mockAladdin = {
  popularity: 178.343,
  vote_count: 2984,
  video: false,
  poster_path: '/yYWGCAerbVAHyfuGBCHKzWJdEtj.jpg',
  id: 420817,
  adult: false,
  backdrop_path: '/v4yVTbbl8dE1UP2dWu5CLyaXOku.jpg',
  original_language: 'en',
  original_title: 'Aladdin',
  genre_ids: [],
  title: 'Aladdin',
  vote_average: 7.1,
  overview:
    'A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true.',
  release_date: '2019-05-24',
}

const mockResponse = { data: { results: [mockTheLionKing, mockAladdin] } }
axios.get.mockResolvedValue(mockResponse)

beforeAll(() =>
  jest.spyOn(React, 'useEffect').mockImplementation(React.useLayoutEffect)
)
afterAll(() => React.useEffect.mockRestore())

afterEach(() => {
  cleanup()
})

describe('Index', () => {
  it('renders correctly', () => {
    const { container } = renderWithRedux(<Index />)
    expect(container).toMatchSnapshot()
  })

  it('should trigger a call to the movie database api when searching for something new', async () => {
    const { container, getByLabelText, getByText, debug } = renderWithRedux(
      <Index />
    )
    const searchTerm = 'The matrix'
    const input = getByLabelText('Search')
    fireEvent.change(input, { target: { value: searchTerm } })
    fireEvent.keyDown(input, { key: 'Enter', code: 13 })
    expect(axios.get.mock.calls[2][0].includes(searchTerm)).toBeTruthy()
    expect(getByText(`Results: ${searchTerm}`)).toBeTruthy()
  })
})
