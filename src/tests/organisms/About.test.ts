// src/tests/organisms/About.test.ts
import { render, screen } from '@testing-library/astro'
import About from '../../components/organisms/About.astro'

describe('About', () => {
  it('renders with default title', async () => {
    await render(<About />)
    expect(screen.getByText('About Me')).toBeTruthy()
  })

  it('renders with custom title', async () => {
    await render(<About title="Custom About" />)
    expect(screen.getByText('Custom About')).toBeTruthy()
  })

  it('renders bio text', async () => {
    await render(<About />)
    expect(screen.getByText("I'm a passionate frontend developer with 3+ years of experience creating beautiful and functional web applications. I love working with modern technologies and enjoy solving complex problems through clean, efficient code.")).toBeTruthy()
  })

  it('renders experience information', async () => {
    await render(<About />)
    expect(screen.getByText('3+ years')).toBeTruthy()
  })

  it('renders skills section', async () => {
    await render(<About />)
    expect(screen.getByText('Skills & Technologies')).toBeTruthy()
  })

  it('renders all default skills', async () => {
    await render(<About />)
    expect(screen.getByText('JavaScript/TypeScript')).toBeTruthy()
    expect(screen.getByText('React/Vue.js')).toBeTruthy()
    expect(screen.getByText('Node.js')).toBeTruthy()
    expect(screen.getByText('HTML/CSS')).toBeTruthy()
    expect(screen.getByText('Astro')).toBeTruthy()
    expect(screen.getByText('Tailwind CSS')).toBeTruthy()
    expect(screen.getByText('Git')).toBeTruthy()
    expect(screen.getByText('Figma')).toBeTruthy()
  })
})