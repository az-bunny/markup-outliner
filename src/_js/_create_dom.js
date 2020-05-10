// body要素を包括
{
  document.body.innerHTML =
    '<div id="mo">' +
      document.body.innerHTML +
    '</div>';
}

// IDとrole属性値付与
{
  const sectioningTagNames = [
    'header',
    'main',
    'footer',
    'nav',
    'section',
    'article',
    'aside',
  ];

  sectioningTagNames.forEach(tagName => {
    const htmlCollection = document.getElementsByTagName(tagName);
    
    Object.keys(htmlCollection).forEach((key) => {
      const element = htmlCollection[key];
      const idAttr = element.getAttribute('id');
      const roleAttr = element.getAttribute('role');
      if(idAttr) {
        element.setAttribute('data-id', ` [id="${idAttr}]`);
      }
      if(roleAttr) {
        element.setAttribute('data-role', ` [role="${roleAttr}]`);
      }
    });
  });
}

// img要素周辺を生成
{
  const igureClassName = 'igureAltReplace';

  const figureElements = document.getElementsByTagName('figure');
  Object.keys(figureElements).forEach(key => {
    const imgElements = figureElements[key].getElementsByTagName('img');
    Object.keys(imgElements).forEach(key => {
      imgElements[key].classList.add(igureClassName);
    });
  });

  const imgElements = document.querySelectorAll(`img:not(.${igureClassName})`);
  imgElements.forEach(img => {
    const container = document.createElement('div');
    img.parentElement.insertBefore(container, img.nextSibling);
    container.classList.add('ImgContainer');
    container.insertBefore(img, container.firstChild);

    if(img.getAttribute('alt')) {
      const alt = document.createElement('p');
      alt.textContent = img.getAttribute('alt');
      container.insertBefore(alt, img.nextSibling);
    }
  });
}
