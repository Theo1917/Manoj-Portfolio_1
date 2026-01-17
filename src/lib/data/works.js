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
    id: "earthquake-damage",
    title: "Post-Earthquake Damage Assessment",
    question: "Can attention-enhanced deep learning reliably localize structural damage from satellite imagery?",
    problem:
      "Manual post-earthquake damage inspection is slow, unsafe, and infeasible at scale. Existing automated methods struggle with irregular damage patterns, class imbalance, and generalization across diverse urban environments.",
    hypothesis:
      "A Siamese U-Net with attention mechanisms can model temporal change between pre- and post-earthquake satellite imagery to accurately segment damaged structures.",
    model:
      "Used multi-temporal satellite imagery (pre- and post-earthquake) as paired inputs, designed a Siamese U-Net to explicitly model temporal change, systematically evaluated multiple attention mechanisms (SE, ECA, CBAM, SK, SRM, cross-attention), proposed and integrated a Triplet Attention mechanism to capture cross-dimensional feature interactions (channel–width, height–channel, height–width), and trained with a BCE + Dice composite loss to address severe class imbalance.",
    failure:
      "Spatial-only and cross-attention mechanisms introduced instability and higher computational overhead, often failing to generalize due to the highly irregular and non-uniform nature of earthquake damage.",
    insight:
      "Channel-focused attention dominates in earthquake damage assessment. Triplet Attention, by modeling cross-dimensional feature relationships, significantly improved damage localization accuracy, producing sharper and more coherent segmentation masks than baseline and other attention variants. Achieved the best overall performance across IoU, Dice, F1-score, and accuracy with improved boundary precision and reduced false positives.",
    constraints: ["Highly Imbalanced Damage vs Non-Damage Pixels", "Noisy Real-World Satellite Imagery", "Irregular Spatial Patterns", "Computational Efficiency"],
    tech: ["PyTorch", "Siamese U-Net", "Attention Mechanisms", "Remote Sensing", "Semantic Segmentation"],
    image: "/images/earthquake-damage.png",
    stage: "Deep Learning Applications"
  },
  {
    id: "headline-generation",
    title: "Bidirectional HMM for Headline Generation",
    question: "Can classical probabilistic models generate meaningful headlines without deep learning?",
    problem:
      "Most modern headline generators rely on large neural models that require heavy computation and lack interpretability. Classical HMM-based approaches, while efficient, struggle with limited context, grammatical inconsistency, and weak semantic alignment.",
    hypothesis:
      "A Bidirectional Hidden Markov Model enhanced with linguistic fluency and semantic relevance constraints can generate coherent and contextually aligned news headlines without requiring deep learning.",
    model:
      "Designed a Bidirectional HMM to capture both forward and backward contextual dependencies, integrated an interpolated trigram language model to improve fluency, enforced semantic relevance using TF–IDF scoring and PMI-based association, and used a diversity-aware beam search to balance relevance, structure, and variation. Evaluated using standard ROUGE metrics.",
    failure:
      "Classical single-direction HMMs with limited context struggle with grammatical consistency and semantic alignment, requiring bidirectional enhancement and relevance scoring to achieve competitive performance.",
    insight:
      "Incorporating bidirectional context and relevance-aware decoding significantly improves the quality of classical headline generation. The model achieved strong performance (ROUGE-1: 0.6166, ROUGE-2: 0.3696, ROUGE-L: 0.5727), demonstrating that well-engineered probabilistic models can remain competitive in structured NLP tasks.",
    constraints: ["Limited Context in Classical Models", "Grammatical Inconsistency", "Semantic Alignment", "Computational Efficiency"],
    tech: ["Bidirectional HMM", "Language Models", "TF-IDF", "PMI", "Beam Search", "NLP Evaluation"],
    image: "/images/headline-generation.png",
    stage: "Probabilistic Modeling"
  },
  {
    id: "emotion-detection",
    title: "Multi-Modal Emotion Detection",
    question: "Can combining visual and audio cues improve emotion recognition reliability?",
    problem:
      "Emotion detection systems based on a single modality (only face or only voice) are fragile — facial cues fail under occlusion or lighting changes, while audio cues degrade under noise or speech variability. This limits their reliability in real-world applications.",
    hypothesis:
      "Integrating facial expression analysis and speech emotion recognition through multi-modal fusion can predict human emotions more robustly than unimodal approaches.",
    model:
      "Implemented facial expression recognition using deep learning–based computer vision pipelines, extracted speech emotion features such as pitch, tone, and temporal patterns from audio signals, designed a multi-modal fusion strategy to combine visual and audio predictions, and enabled real-time inference for live camera and microphone input.",
    failure:
      "Single-modality approaches proved fragile under real-world conditions, with face-only models failing under occlusion or poor lighting, and audio-only models degrading with background noise, requiring multi-modal fusion for robust performance.",
    insight:
      "Emotion is inherently multi-channel. Multi-modal fusion produced more stable and consistent emotion predictions, improving robustness under partial occlusion, low lighting, and background noise while achieving reliable real-time performance suitable for interactive applications.",
    constraints: ["Variability in Facial Expressions and Speech", "Environmental Noise and Lighting", "Real-Time Latency Requirements", "Multi-Modal Synchronization"],
    tech: ["Python", "OpenCV", "Dlib", "librosa", "TensorFlow / Keras", "Computer Vision", "Audio Signal Processing"],
    image: "/images/emotion-detection.png",
    stage: "Multi-Modal Systems"
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
  },
  {
    id: "attendance-system",
    title: "Attendance Management System (Java + OOPS + DSA)",
    question: "How can core object-oriented design and data structures be used to build an efficient attendance system?",
    problem:
      "Manual or poorly structured attendance systems are error-prone, inefficient, and difficult to scale. Many beginner systems fail to apply proper data organization, leading to slow search, poor extensibility, and maintenance challenges.",
    hypothesis:
      "Applying Object-Oriented Programming principles and appropriate Data Structures & Algorithms can create an efficient, scalable, and maintainable attendance management system.",
    model:
      "Designed the system using core OOPS principles such as encapsulation, abstraction, inheritance, and modular class design. Implemented student management operations including add, edit, and delete. Stored student and attendance records using appropriate data structures (arrays, linked lists, hash maps). Integrated search and sorting algorithms to efficiently retrieve student records and attendance details. Generated attendance reports and statistics for individuals and entire classes.",
    failure:
      "Initial implementations using only basic arrays without proper data structure selection resulted in slow lookups and poor scalability as the number of students increased.",
    insight:
      "Choosing the right data structure and applying object-oriented design principles significantly improves system efficiency, scalability, and maintainability. Hash-based lookups enabled fast retrieval, while OOP design ensured structured and maintainable code with minimal redundancy, successfully supporting both student-level and class-level reporting.",
    constraints: ["Efficient Data Storage and Retrieval", "Code Modularity and Extensibility", "Scalability for Increasing Students", "Maintainability of Records"],
    tech: ["Java", "Object-Oriented Programming", "Data Structures", "HashMaps", "Linked Lists", "Searching & Sorting Algorithms"],
    image: "/images/attendance-system.png",
    stage: "Software Engineering Fundamentals"
  },
  {
    id: "file-manager",
    title: "File Manager (C / System Programming)",
    question: "How can low-level system calls be used to build a reliable file management tool?",
    problem:
      "Most modern file managers abstract away how operating systems actually manage files and directories. For learners of system programming, this hides critical concepts such as file descriptors, directory traversal, permissions, and error handling.",
    hypothesis:
      "A CLI-based file manager built with C and POSIX APIs can provide fine-grained control over file operations while demonstrating core system programming concepts.",
    model:
      "Implemented core file operations including create, delete, rename, and move. Enabled directory navigation and listing, displaying file metadata such as size and modification date. Built file search functionality based on name, type, and timestamps. Added file sorting mechanisms by name, size, and modification date. Designed a command-line interface (CLI) for interactive user control and integrated robust error handling for invalid operations and restricted access.",
    failure:
      "Initial implementations without proper error handling led to crashes when encountering non-existent files or permission-denied scenarios, requiring comprehensive edge case management.",
    insight:
      "Working directly with system calls and file I/O primitives offers fine-grained control and deeper understanding of how operating systems manage storage, permissions, and resources. Successfully managed files using POSIX system calls with reliable handling of edge cases and efficient directory traversal.",
    constraints: ["Safe Handling of Invalid Operations", "Directory Traversal Performance", "CLI-Only Interface", "System-Level Permission Control"],
    tech: ["C", "File I/O", "POSIX System Calls", "Directory Traversal", "CLI Design", "Error Handling"],
    image: "/images/file-manager.png",
    stage: "Systems Programming"
  }
];
