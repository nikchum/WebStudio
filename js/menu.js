(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const contactsRef = document.querySelector('a[href="#contacts"]');

  contactsRef.addEventListener('click', () => {
    menuBtnRef.classList.remove('is-open');
    document.body.classList.remove('modal-open');
    mobileMenuRef.classList.remove('is-open');
  });

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    document.body.classList.toggle('modal-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });
})();
