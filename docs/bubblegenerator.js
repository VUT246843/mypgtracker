// status: TODO WIP ISSUE IDEA COMPLETE
const tasks = [
  {
    name: "Formant shifting",
    status: "WIP",
    description: "In python first, able to change in real time",
    extraInfo: ""
  },
  {
    name: "First drafts",
    status: "WIP",
    description: "Write down the initial version of some topics",
    extraInfo: ""
  },
  {
    name: "Experiments",
    status: "IDEA",
    description: "Try out different ideas for effects, see what sticks",
    extraInfo: ""
  },
  {
    name: "Interface",
    status: "TODO",
    description: "Custom plugin GUI",
    extraInfo: ""
  },
];

const timeline = [
  {
    name: "Quality",
    description: "Solve VST volume, distortion and stuttering issues",
    extraInfo: ""
  },
  {
    name: "Cross synthesis C++",
    description: "Add residuals, filter with voice coefficients",
    extraInfo: ""
  },
  {
    name: "VST sidechain",
    description: "Cross-synthesis needs second signal input",
    extraInfo: "Figure out a convenient setup with two inputs. One for carrier signal and one for speech. Probably sidechain."
  },
  {
    name: "C++ new code import",
    description: "Import python code changes and FFT",
    extraInfo: ""
  },
  {
    name: "Sound quality",
    description: "Make voice clearer, try different sample rates, stereo",
    extraInfo: ""
  },
  {
    name: "Visualisation",
    description: "Python moving graphs: formants, estimates, overlap",
    extraInfo: ""
  },
  {
    name: "Smooth playback",
    description: "Fix any bugs and make sounds overlap",
    extraInfo: "Find performance and timing bottlenecks. Async python sound player or threading."
  },
  {
    name: "Python code import",
    description: "Import final matlab code into python",
    extraInfo: ""
  },
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