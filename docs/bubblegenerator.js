// status: TODO WIP ISSUE IDEA COMPLETE
const tasks = [
  {
    name: "Python code import",
    status: "WIP",
    description: "Import final matlab code into python",
    extraInfo: "blahblah"
  },
  {
    name: "Python metrics",
    status: "TODO",
    description: "Measure performance and add graphs",
    extraInfo: "blahblahblah"
  },
  {
    name: "VST sidechain",
    status: "ISSUE",
    description: "Cross-synthesis needs second signal input",
    extraInfo: "blahblahblah"
  },
  {
    name: "C++ new code import",
    status: "TODO",
    description: "Import optimized python code, VST build",
    extraInfo: "blahblahblah"
  },
];

const timeline = [
  {
    name: "Finish matlab",
    description: "Complete matlab code including cross-synthesis, ready for export",
    extraInfo: "blahblah"
  },
];



// generate HTML bubbles
function generateHTMLBubbles() {
  const container1 = document.querySelector('.tasks');
  tasks.forEach(task => {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble', 'todo', 'mb-3', 'clickable');
    bubble.innerHTML = `
      <div class="content-container">
        <div class="name">${task.name}</div>
        <div class="status">${task.status}</div>
        <div class="description">${task.description}</div>
      </div>
      <div class="extra-info">${task.extraInfo}</div>
    `;
    container1.appendChild(bubble);
  });
  const container2 = document.querySelector('.timeline');
  timeline.forEach(task => {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble', 'todo', 'mb-3', 'clickable');
    bubble.innerHTML = `
      <div class="content-container">
        <div class="name">${task.name}</div>
        <div class="status">COMPLETE</div>
        <div class="description">${task.description}</div>
      </div>
      <div class="extra-info">${task.extraInfo}</div>
    `;
    container2.appendChild(bubble);
  });
}