// src/tests/organisms/Contact.test.ts
import { render, screen } from '@testing-library/astro'
import Contact from '../../components/organisms/Contact.astro'

describe('Contact', () => {
  it('renders with default title and subtitle', async () => {
    await render(<Contact />)
    expect(screen.getByText('Get In Touch')).toBeTruthy()
    expect(screen.getByText("I'd love to hear from you. Send me a message and I'll respond as soon as possible.")).toBeTruthy()
  })

  it('renders with custom title and subtitle', async () => {
    await render(<Contact title="Custom Contact" subtitle="Custom subtitle" />)
    expect(screen.getByText('Custom Contact')).toBeTruthy()
    expect(screen.getByText('Custom subtitle')).toBeTruthy()
  })

  it('renders contact information section', async () => {
    await render(<Contact />)
    expect(screen.getByText("Let's Connect")).toBeTruthy()
  })

  it('renders email contact', async () => {
    await render(<Contact />)
    expect(screen.getByText('hello@wutachi.dev')).toBeTruthy()
  })

  it('renders LinkedIn and GitHub links', async () => {
    await render(<Contact />)
    expect(screen.getByText('linkedin.com/in/wutachi')).toBeTruthy()
    expect(screen.getByText('github.com/wutachi')).toBeTruthy()
  })

  it('renders contact form with all required fields', async () => {
    await render(<Contact />)
    expect(screen.getByLabelText('Name')).toBeTruthy()
    expect(screen.getByLabelText('Email')).toBeTruthy()
    expect(screen.getByLabelText('Subject')).toBeTruthy()
    expect(screen.getByLabelText('Message')).toBeTruthy()
  })

  it('renders submit button', async () => {
    await render(<Contact />)
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeTruthy()
  })

  it('form has correct action and method', async () => {
    await render(<Contact />)
    const form = screen.getByRole('form')
    expect(form).toHaveAttribute('method', 'POST')
    expect(form).toHaveAttribute('action', '/api/contact')
  })
})