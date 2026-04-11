const tooltips = Array.from(document.querySelectorAll('.has-tooltip'));

tooltips.forEach(item => {
  item.addEventListener('click', (event) => {
    event.preventDefault();

    const activeTooltip = document.querySelector('.tooltip_active');
    const existingTooltip = item.nextElementSibling;

    if (
      activeTooltip &&
      activeTooltip !== existingTooltip
    ) {
      activeTooltip.classList.remove('tooltip_active');
    }

    if (
      existingTooltip &&
      existingTooltip.classList.contains('tooltip') &&
      existingTooltip.classList.contains('tooltip_active')
    ) {
      existingTooltip.classList.remove('tooltip_active');
      return;
    }

    let tooltip = existingTooltip;

    if (!tooltip || !tooltip.classList.contains('tooltip')) {
      tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.textContent = item.title;
      item.insertAdjacentElement('afterend', tooltip);
    }

    const coords = item.getBoundingClientRect();

    tooltip.style.left = `${coords.left}px`;
    tooltip.style.top = `${coords.bottom}px`;
    tooltip.classList.add('tooltip_active');
  });
});