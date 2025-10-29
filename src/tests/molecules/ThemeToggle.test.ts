// src/tests/molecules/ThemeToggle.test.ts
import { render, screen } from '@testing-library/astro'
import ThemeToggle from '../../components/molecules/ThemeToggle.astro'

describe('ThemeToggle', () => {
  it('renders toggle button with correct aria-label', async () => {
    await render(<ThemeToggle />)
    const button = screen.getByLabelText('Toggle theme')
    expect(button).toBeTruthy()
  })

  it('renders sun and moon icons', async () => {
    await render(<ThemeToggle />)
    expect(screen.getByText('☀️')).toBeTruthy()
    expect(screen.getByText('🌙')).toBeTruthy()
  })

  it('has correct initial structure', async () => {
    await render(<ThemeToggle />)
    const button = screen.getByLabelText('Toggle theme')
    expect(button).toHaveClass('theme-toggle')
  })
})