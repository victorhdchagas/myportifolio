// src/tests/organisms/Contact.test.ts
import { render, screen } from '@testing-library/astro'
import Contact from '../../components/organisms/Contact.astro'

describe('Contact', () => {
  it('renders the contact section with links only (no form)', async () => {
    await render(<Contact />)
    expect(screen.getByText("Let's Connect")).toBeTruthy()
    expect(document.querySelector('form')).toBeNull()
  })

  it('renders email, LinkedIn and GitHub links', async () => {
    await render(<Contact />)
    expect(screen.getByText('victorhdchagas@live.com')).toBeTruthy()
    expect(screen.getByText('linkedin.com/in/victorhdchagas')).toBeTruthy()
    expect(screen.getByText('github.com/victorhdchagas')).toBeTruthy()
  })

  it('renders the Nostr link when a key is present', async () => {
    await render(<Contact />)
    const nostr = screen.getByText('Nostr')
    expect(nostr).toBeTruthy()
  })
})
