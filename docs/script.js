// set label color based on status
function setStatusColor() {
  const statuses = document.querySelectorAll('.status');
  statuses.forEach(status => {
    const statusText = status.textContent.trim().toUpperCase();
    switch (statusText) {
      case 'TODO':
        status.style.backgroundColor = '#0bb9ff';
        break;
      case 'WIP':
        status.style.backgroundColor = '#ffc904';
        break;
	  case 'COMPLETE':
        status.style.backgroundColor = '#00c90e';
        break;
      case 'IDEA':
        status.style.backgroundColor = '#b1b1b1';
        break;
	  case 'ISSUE':
        status.style.backgroundColor = '#ff551c';
        break;
      default:
        status.style.backgroundColor = '#6c757d';
        break;
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  generateHTMLBubbles();
  setStatusColor();
  document.querySelectorAll('.clickable').forEach(bubble => {
    bubble.addEventListener('click', function() {
      const extraInfo = this.querySelector('.extra-info');
      extraInfo.classList.toggle('show');
    });
  });
});