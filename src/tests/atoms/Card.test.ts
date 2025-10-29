// src/tests/atoms/Card.test.ts
import { render, screen } from '@testing-library/astro'
import Card from '../../components/atoms/Card.astro'

describe('Card', () => {
  it('renders with default outset shadow', async () => {
    await render(<Card>Card content</Card>)
    const card = screen.getByText('Card content').parentElement
    expect(card).toHaveClass('card')
    expect(card).toHaveClass('card--outset')
  })

  it('renders with inset shadow when specified', async () => {
    await render(<Card shadow="inset">Card content</Card>)
    const card = screen.getByText('Card content').parentElement
    expect(card).toHaveClass('card')
    expect(card).toHaveClass('card--inset')
  })

  it('renders with custom class', async () => {
    await render(<Card class="custom-class">Card content</Card>)
    const card = screen.getByText('Card content').parentElement
    expect(card).toHaveClass('card')
    expect(card).toHaveClass('custom-class')
  })

  it('renders children content', async () => {
    await render(<Card><h1>Test Title</h1><p>Test content</p></Card>)
    expect(screen.getByText('Test Title')).toBeTruthy()
    expect(screen.getByText('Test content')).toBeTruthy()
  })
})