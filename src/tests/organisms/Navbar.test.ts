// src/tests/organisms/Navbar.test.ts
import { render, screen } from '@testing-library/astro'
import Navbar from '../../components/organisms/Navbar.astro'

describe('Navbar', () => {
  it('renders with default brand name', async () => {
    await render(<Navbar />)
    expect(screen.getByText('Wutachi')).toBeTruthy()
  })

  it('renders with custom brand name', async () => {
    await render(<Navbar brand="Custom Brand" />)
    expect(screen.getByText('Custom Brand')).toBeTruthy()
  })

  it('renders all navigation links', async () => {
    await render(<Navbar />)
    expect(screen.getByText('Home')).toBeTruthy()
    expect(screen.getByText('Projects')).toBeTruthy()
    expect(screen.getByText('About')).toBeTruthy()
    expect(screen.getByText('Contact')).toBeTruthy()
  })

  it('navigation links have correct href attributes', async () => {
    await render(<Navbar />)
    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '#hero')
    expect(screen.getByText('Projects').closest('a')).toHaveAttribute('href', '#projects')
    expect(screen.getByText('About').closest('a')).toHaveAttribute('href', '#about')
    expect(screen.getByText('Contact').closest('a')).toHaveAttribute('href', '#contact')
  })

  it('includes theme toggle component', async () => {
    await render(<Navbar />)
    const toggleButton = screen.getByLabelText('Toggle theme')
    expect(toggleButton).toBeTruthy()
  })
})