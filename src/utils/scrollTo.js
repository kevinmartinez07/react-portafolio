/**
 * Smooth scroll to a section by ID
 * @param {string} id - The section ID to scroll to
 */
export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

/**
 * Open URL in new tab
 * @param {string} url - The URL to open
 */
export const openInNewTab = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};
