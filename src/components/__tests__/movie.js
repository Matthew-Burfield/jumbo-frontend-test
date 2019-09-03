import React from 'react'
import { render } from '@testing-library/react'
import Movie from '../movie'

const movie = {
  popularity: 183.517,
  vote_count: 2166,
  video: false,
  poster_path: '/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg',
  id: 420818,
  adult: false,
  backdrop_path: '/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg',
  original_language: 'en',
  original_title: 'The Lion King',
  genre_ids: 'Array[5]',
  title: 'The Lion King',
  vote_average: 7.2,
  overview:
    "Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.",
  release_date: '2019-07-19',
}

describe('Movie', () => {
  it('renders correctly', () => {
    const { container } = render(<Movie movie={movie} />)
    expect(container).toMatchSnapshot()
  })
})
