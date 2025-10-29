// src/tests/organisms/Hero.test.ts
import { render, screen } from '@testing-library/astro'
import Hero from '../../components/organisms/Hero.astro'

describe('Hero', () => {
  it('renders with default title and subtitle', async () => {
    await render(<Hero />)
    expect(screen.getByText("Hi, I'm Wutachi")).toBeTruthy()
    expect(screen.getByText("Frontend Developer passionate about creating beautiful and functional web experiences")).toBeTruthy()
  })

  it('renders with custom title and subtitle', async () => {
    await render(<Hero title="Custom Title" subtitle="Custom Subtitle" />)
    expect(screen.getByText('Custom Title')).toBeTruthy()
    expect(screen.getByText('Custom Subtitle')).toBeTruthy()
  })

  it('renders CTA button with default text', async () => {
    await render(<Hero />)
    const button = screen.getByRole('button', { name: 'View My Work' })
    expect(button).toBeTruthy()
  })

  it('renders CTA button with custom text', async () => {
    await render(<Hero ctaText="Custom CTA" />)
    expect(screen.getByRole('button', { name: 'Custom CTA' })).toBeTruthy()
  })
})