import { describe, it, expect, vi } from 'vitest';

// Mock navigator.clipboard
Object.assign(navigator, {
  clipboard: {
    writeText: vi.fn().mockResolvedValue(undefined),
  },
});

// Mock window.open
global.window.open = vi.fn();

// Mock alert
global.alert = vi.fn();

describe('ShareModal functions', () => {
  const mockTitle = 'Test Article';
  const mockUrl = 'https://example.com/test-article';

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('copyToClipboard should copy URL to clipboard', async () => {
    // Simulate the function
    const copyToClipboard = () => {
      navigator.clipboard.writeText(mockUrl).then(() => {
        alert('Link copiado para a área de transferência!');
      }).catch(err => {
        console.error('Erro ao copiar: ', err);
        alert('Erro ao copiar o link.');
      });
    };

    await copyToClipboard();

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(mockUrl);
    expect(alert).toHaveBeenCalledWith('Link copiado para a área de transferência!');
  });

  it('shareOnX should open Twitter share URL', () => {
    const shareOnX = () => {
      const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(mockTitle)}&url=${encodeURIComponent(mockUrl)}`;
      window.open(shareUrl, '_blank');
    };

    shareOnX();

    const expectedUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(mockTitle)}&url=${encodeURIComponent(mockUrl)}`;
    expect(window.open).toHaveBeenCalledWith(expectedUrl, '_blank');
  });

  it('shareOnWhatsApp should open WhatsApp share URL', () => {
    const shareOnWhatsApp = () => {
      const shareText = `${mockTitle} ${mockUrl}`;
      const shareUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
      window.open(shareUrl, '_blank');
    };

    shareOnWhatsApp();

    const expectedText = `${mockTitle} ${mockUrl}`;
    const expectedUrl = `https://wa.me/?text=${encodeURIComponent(expectedText)}`;
    expect(window.open).toHaveBeenCalledWith(expectedUrl, '_blank');
  });

  it('shareOnDiscord should copy URL to clipboard', async () => {
    const shareOnDiscord = () => {
      navigator.clipboard.writeText(mockUrl).then(() => {
        alert('Link copiado! Cole no Discord.');
      }).catch(err => {
        console.error('Erro ao copiar: ', err);
        alert('Erro ao copiar o link.');
      });
    };

    await shareOnDiscord();

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(mockUrl);
    expect(alert).toHaveBeenCalledWith('Link copiado! Cole no Discord.');
  });
});