// src/tests/organisms/Projects.test.ts
import { render, screen } from '@testing-library/astro'
import Projects from '../../components/organisms/Projects.astro'

describe('Projects', () => {
  it('renders with default title', async () => {
    await render(<Projects />)
    expect(screen.getByText('My Projects')).toBeTruthy()
  })

  it('renders with custom title', async () => {
    await render(<Projects title="Custom Projects" />)
    expect(screen.getByText('Custom Projects')).toBeTruthy()
  })

  it('renders default projects', async () => {
    await render(<Projects />)
    expect(screen.getByText('E-commerce Platform')).toBeTruthy()
    expect(screen.getByText('Task Management App')).toBeTruthy()
    expect(screen.getByText('Weather Dashboard')).toBeTruthy()
  })

  it('renders project descriptions', async () => {
    await render(<Projects />)
    expect(screen.getByText('A full-stack e-commerce solution built with React and Node.js')).toBeTruthy()
  })

  it('renders project technologies', async () => {
    await render(<Projects />)
    expect(screen.getByText('React')).toBeTruthy()
    expect(screen.getByText('Node.js')).toBeTruthy()
    expect(screen.getByText('MongoDB')).toBeTruthy()
  })

  it('renders project links', async () => {
    await render(<Projects />)
    const githubLinks = screen.getAllByText('GitHub')
    const liveLinks = screen.getAllByText('Live Demo')
    expect(githubLinks.length).toBe(3)
    expect(liveLinks.length).toBe(3)
  })
})