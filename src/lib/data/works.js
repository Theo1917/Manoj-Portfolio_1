export const works = [
  {
    id: "heat-transfer",
    title: "Heat Transfer Prediction",
    question: "",
    problem:
      "Traditional empirical correlations for double-pipe heat exchangers assume steady-state conditions and ideal flow behavior. In practical settings, experimental noise, transient effects, and nonlinear coupling between parameters reduce their predictive reliability.",
    hypothesis:
      "A neural network trained on experimental heat transfer data can learn nonlinear relationships between flow and thermal parameters more effectively than fixed empirical formulas.",
    model:
      "Used experimental annular-flow heat transfer data, performed feature analysis and hypothesis-driven preprocessing, trained regression models to predict heat transfer behavior, and compared predictions against observed experimental values.",
    failure:
      "Pure correlation-based modeling struggled to generalize across operating conditions, especially under noisy and low-Reynolds regimes.",
    insight:
      "Data-driven models captured nonlinear interactions that classical correlations overlook, demonstrating the potential of neural networks as surrogate models for thermal system prediction.",
    constraints: ["Experimental Noise", "Nonlinear Heat Transfer Behavior", "Limited and Imperfect Datasets"],
    tech: ["Python", "Neural Networks", "Data Analysis", "Thermal Systems"],
    image: "/images/heat-transfer.png",
    stage: "Neural Modeling"
  },
  {
    id: "quantum-maze",
    title: "Quantum Maze Solver",
    question: "Can quantum algorithms outperform classical maze solving in path discovery efficiency?",
    problem:
      "Classical maze solvers typically traverse paths sequentially or with heuristic optimization, which can become slow or computationally expensive as maze size and complexity grow.",
    hypothesis:
      "By leveraging quantum superposition and parallelism, a quantum-based maze solver can explore many possible paths at once and converge on optimal solutions more efficiently than classical counterparts.",
    model:
      "Implemented a maze generator capable of producing random structures, applied quantum search algorithms (e.g., Grover's algorithm) to evaluate possible paths, simulated quantum behavior to exploit superposition and constructive interference, and compared solver performance with classical search methods.",
    failure:
      "Initial pure brute-force quantum implementations were limited by simulator performance and overhead, showing little advantage on small mazes due to current hardware/simulation constraints.",
    insight:
      "When scoped appropriately and paired with efficient quantum search heuristics, quantum approaches highlight the theoretical potential for path discovery acceleration, especially in larger or more densely connected topologies.",
    constraints: ["Quantum Simulator Limitations", "Scalability of Quantum vs Classical Algorithms", "Visualization and Interpretability"],
    tech: ["Quantum Computing", "Grover's Algorithm", "Maze Generation", "Simulation & Visualization"],
    image: "/images/quantum-maze.png",
    stage: "Quantum Exploration"
  }
];
