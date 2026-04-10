const rotators = Array.from(document.querySelectorAll('.rotator'));

rotators.forEach(rotator => {
  const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
  let index = cases.findIndex(item => item.classList.contains('rotator__case_active'));

  setInterval(() => {
    cases[index].classList.remove('rotator__case_active');

    index = (index + 1) % cases.length;

    cases[index].classList.add('rotator__case_active');
  }, 1000);
});