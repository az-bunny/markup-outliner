{
  const cssLinks = document.querySelectorAll('[rel=\'stylesheet\'], [type=\'text\/css\']');
  cssLinks.forEach(link => {
    const parent = link.parentElement;
    parent.removeChild(link);
  });
}

{
  const styledElements = document.querySelectorAll('[style]');
  styledElements.forEach(element => {
    element.removeAttribute('style');
  });
}

{
  const bookmarklet = document.createElement('link');
  bookmarklet.rel = 'stylesheet';
  // bookmarklet.href = 'https://az-bunny.github.io/markup-outliner/dist/index.css';
  bookmarklet.href = 'http://markup-outliner.io/dist/index.css';
  document.head.appendChild(bookmarklet);
}
