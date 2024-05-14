// status: TODO WIP ISSUE IDEA COMPLETE
const tasks = [
  {
    name: "Python code import",
    status: "WIP",
    description: "Import final matlab code into python",
    extraInfo: ""
  },
  {
    name: "Python metrics",
    status: "TODO",
    description: "Measure performance and add graphs",
    extraInfo: "Moving graphs: formants, estimates, overlap. Setup for measuring CPU load."
  },
  {
    name: "Optimization",
    status: "TODO",
    description: "In python, optimize CPU-demanding code",
    extraInfo: "Find better solutions or algorithms. Perhaps a FFT for correlation. Use metrics to find CPU-demanding code."
  },
  {
    name: "C++ new code import",
    status: "TODO",
    description: "Import python code changes",
    extraInfo: ""
  },
  {
    name: "C++ unit tests",
    status: "TODO",
    description: "Learn C++ testing with headers. Ensure correct values.",
    extraInfo: ""
  },
  {
    name: "VST sidechain",
    status: "ISSUE",
    description: "Cross-synthesis needs second signal input",
    extraInfo: "Figure out the best way to have two inputs. One for carrier signal and one for speech. Probably sidechain."
  },
];

const timeline = [
  {
    name: "Finish matlab",
    description: "Prepare final matlab code",
    extraInfo: "Including cross-synthesis and realtime implementation, ready for export."
  },
];



// generate HTML bubbles
function generateHTMLBubbles() {
  const inserts = [
    { selector: '.tasks', array: tasks, status: task => task.status },
    { selector: '.timeline', array: timeline, status: () => 'COMPLETE' }
  ];
  inserts.forEach(({ selector, array, status }) => {
    const container = document.querySelector(selector);
    array.forEach(task => {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble', 'todo', 'mb-3', 'clickable');
      bubble.innerHTML = `
        <div class="content-container">
          <div class="name">${task.name}</div>
          <div class="status">${status(task)}</div>
         
		   ${task.extraInfo !== "" ? `
            <div class="description">
              ${task.description}
            </div>
			<div class="arrow">↓</div>
          ` : `
            <div class="description">
              ${task.description}
            </div>
          `}
        </div>
        <div class="extra-info">${task.extraInfo}</div>
      `;
      container.appendChild(bubble);
    });
  });
}