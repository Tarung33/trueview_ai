/**
 * TrueView AI — Showcase Content & Configuration
 * 
 * Edit this file to update any text, team details, evaluation metrics,
 * screenshots, or external documentation links without touching UI components.
 */

export const showcaseContent = {
  // -------------------------------------------------------------
  // Project Identity & Hero
  // -------------------------------------------------------------
  meta: {
    title: "TrueView AI — Smarter Proctoring. Stronger Trust.",
    description: "A context-aware multimodal AI monitoring platform combining biometric anti-spoofing, real-time gaze & pose tracking, acoustic speaker verification, and server-authoritative event assessment.",
    githubUrl: "https://github.com/Nikhi-07/TrueView-Ai-Multimodel_AI-.git",
    publicLiveUrl: "https://trueview-ai.vercel.app",
    version: "v2.4.0-academic",
    academicBadge: "Major Engineering Project",
    department: "Department of Computer Science & Engineering(Data Science)",
    institution: "Adichunchanagiri Institute of Technology",
  },

  hero: {
    wordmark: "TrueView AI",
    badge: "Deep Learning and Computer Vision Based Real Time Behaviour Monitoring System",
    headline: "Smarter Proctoring. Stronger Trust.",
    subheadline: "Context-aware biometric authentication, multi-signal computer vision, and server-authoritative telemetry engineered to safeguard remote assessments without compromising human dignity.",
    ctaPrimary: {
      label: "Explore System Architecture",
      href: "#architecture",
    },
    ctaSecondary: {
      label: "View on GitHub",
      href: "https://github.com/Nikhi-07/TrueView-Ai-Multimodel_AI-.git",
    },
    ctaApp: {
      label: "Launch Platform",
      href: "/login",
    },
    quickMetrics: [
      { label: "Biometric Gates", value: "3-Stage", sub: "Password → PAD Face → Voice" },
      { label: "Sensory Modalities", value: "5 Inputs", sub: "Vision, Gaze, Pose, Voice, Objects" },
      { label: "Server Latency", value: "1–3 ms", sub: "Mean Socket.IO telemetry RTT" },
      { label: "Human Decision", value: "100%", sub: "Auditable human-in-the-loop review" },
    ],
  },

  // -------------------------------------------------------------
  // Problem Statement & Project Overview
  // -------------------------------------------------------------
  overview: {
    tagline: "The Remote Assessment Dilemma",
    title: "Why Single-Signal Proctoring Fails",
    lead: "Online assessments have exploded since 2020, yet traditional proctoring relies either on invasive spyware that locks the candidate's computer, or simplistic point solutions that trigger devastating false accusations.",

    challenges: [
      {
        id: "identity-fraud",
        icon: "ShieldAlert",
        title: "Presentation Attacks & Impersonation",
        description: "Static face matchers are easily fooled by high-resolution printed photos, 4K screen replays, and prerecorded video feeds. Attackers bypass camera gates without real-time liveness verification.",
      },
      {
        id: "ambient-ambiguity",
        icon: "Activity",
        title: "Ambient Behavioral Ambiguities",
        description: "Natural eye movements, adjusting posture, or brief environmental sounds are frequently misflagged as cheating by naive algorithms, causing anxiety and unjust disqualifications.",
      },
      {
        id: "unmonitored-devices",
        icon: "Smartphone",
        title: "Secondary Workspace Tampering",
        description: "Concealed smartphones, secondary displays, and unsanctioned browser tab switching often evade conventional single-camera frames unless continuous spatial object tracking is applied.",
      },
      {
        id: "black-box-distrust",
        icon: "Lock",
        title: "The 'Black-Box' Punishment Trap",
        description: "Proprietary software often assigns arbitrary 'cheating scores' with zero forensic logs. Candidates cannot contest decisions, and educators have no evidence to verify.",
      },
    ],

    solutionPillars: [
      {
        number: "01",
        title: "Fail-Closed Biometric Verification",
        description: "Registration and login require a 3-tier gate: password validation, MiniFASNetV2 presentation-attack detection (PAD) with MediaPipe blink tracking, and 16kHz acoustic voice verification. If any security service is unavailable, access fails closed.",
      },
      {
        number: "02",
        title: "Multimodal Perception Fusion",
        description: "Rather than isolated triggers, TrueView AI fuses 68-point 3D facial mesh, iris gaze vector, head orientation (pitch/yaw/roll), YOLOv11 object scanning, and voice activity into continuous temporal windows.",
      },
      {
        number: "03",
        title: "Server-Authoritative Policy Engine",
        description: "Clients are treated as zero-trust observation nodes. All trust score decays, tab-switch penalties, and auto-suspension triggers are computed strictly on the backend across 4 customizable policy profiles (EXAM, INTERVIEW, CLASS, MEETING).",
      },
      {
        number: "04",
        title: "Forensic Evidence & Human Review",
        description: "TrueView AI generates cryptographic audit certificates and timestamped forensic event logs. AI organizes telemetry for human proctors who retain absolute authority to pause, resume, or dismiss flags.",
      },
    ],
  },

  // -------------------------------------------------------------
  // Workflow & Process Flow
  // -------------------------------------------------------------
  workflow: {
    tagline: "End-to-End Execution Pipeline",
    title: "How TrueView AI Works",
    subtitle: "A synchronized data flow connecting browser sensory capture, Python AI inference, and server-side policy orchestration.",
    steps: [
      {
        step: "01",
        title: "Candidate Authentication",
        category: "Biometric Identity Gate",
        description: "Candidate submits password, completes live liveness challenge (PAD score >= 0.50 + natural blink verification), and speaks a randomized verification phrase for acoustic embedding extraction.",
        tech: "YuNet • MiniFASNetV2 • SFace 128-D • 16kHz PCM",
      },
      {
        step: "02",
        title: "Multimodal Monitoring",
        category: "Continuous Sensory Capture",
        description: "During an active session, lightweight client hooks sample video frames, microphone audio buffers, and browser window visibility events at rate-throttled intervals.",
        tech: "MediaPipe Tasks • WebRTC 1:1 Relay • Visibility API",
      },
      {
        step: "03",
        title: "AI Analysis Microservice",
        category: "Computer Vision & Acoustic Inference",
        description: "FastAPI microservice executes high-throughput neural pipelines: 3D face mesh topology, eye aspect ratio (EAR), head pose vectors, and YOLOv11 bounding-box object classification.",
        tech: "FastAPI • OpenCV ONNX • YOLOv11 • Energy/ZCR VAD",
      },
      {
        step: "04",
        title: "Server-Side Event Assessment",
        category: "Zero-Trust Policy Arbitration",
        description: "Node.js Express backend ingests AI events over WebSocket. The policy engine evaluates violations against session severity matrices (e.g., EXAM mode: 3 tab switches triggers immediate suspension).",
        tech: "Express 5 • Socket.IO 4 • Session Policy State Machine",
      },
      {
        step: "05",
        title: "Evidence Collection",
        category: "Forensic Persistence",
        description: "Telemetry logs, violation timestamps, attention degradation curves, and proctor commands are securely committed to MongoDB with biometric embeddings strictly isolated (`select: false`).",
        tech: "MongoDB Mongoose • JWT Scopes • Forensic Event Log",
      },
      {
        step: "06",
        title: "Human Review & Audited Reports",
        category: "Certified Decision Closure",
        description: "Reviewers inspect live candidate streams, override warnings in real time, and audit auto-generated session integrity certificates with downloadable print-ready PDF reports.",
        tech: "Proctor Dashboard • Live Audio Warnings • PDF Generator",
      },
    ],
  },

  // -------------------------------------------------------------
  // Technologies & Architecture Layers
  // -------------------------------------------------------------
  technology: {
    tagline: "Architecture & Implementation",
    title: "Engineered Across Three Decoupled Tiers",
    subtitle: "Every architectural component serves a verified role with clear boundaries between core implementations, supplementary signals, and fallback paths.",
    layers: [
      {
        role: "Client Observation Tier",
        port: ":5173",
        description: "Lightweight, responsive single-page application orchestrating camera/mic capture, local blendshape inference, and real-time WebRTC media streaming.",
        status: "Core Implemented",
        items: [
          { name: "React 19 & Vite 8", purpose: "Fast, component-driven client architecture with modern reactive state management." },
          { name: "MediaPipe tasks-vision", purpose: "Runs client-side facial landmark blendshapes for tilt-independent blink detection." },
          { name: "Socket.IO Client & WebRTC", purpose: "Bi-directional WebSocket event delivery and peer-to-peer audio/video stream relay." },
          { name: "Tailwind CSS & Recharts", purpose: "High-contrast visual design system and dynamic behavioral analytics graphing." },
        ],
      },
      {
        role: "Backend & Orchestration Tier",
        port: ":5000",
        description: "Server-authoritative control center executing policy state machines, trust scoring decay, rate limiting, and MongoDB persistence.",
        status: "Server-Authoritative",
        items: [
          { name: "Node.js & Express 5", purpose: "REST APIs with scoped JWT authentication (pending, challenge, and active session tokens)." },
          { name: "Socket.IO 4 Gateway", purpose: "Sub-millisecond room clustering, real-time alert broadcasts, and live proctor commands." },
          { name: "MongoDB & Mongoose", purpose: "Persistent storage of users, rooms, sessions, and audited reports (biometrics select: false)." },
          { name: "Security Hardening", purpose: "Helmet headers, bcrypt hashing, strict CORS allowlists, and express-rate-limit protection." },
        ],
      },
      {
        role: "AI Perception & Biometrics Tier",
        port: ":8000",
        description: "High-performance Python microservice serving computer vision, presentation-attack detection, and acoustic speaker analytics.",
        status: "Core AI Engine",
        items: [
          { name: "OpenCV YuNet & SFace", purpose: "ONNX face detection and 128-dimensional facial embedding generation with cosine similarity >= 0.48." },
          { name: "MiniFASNetV2 (ONNX)", purpose: "Deep presentation-attack detection classifying real faces vs. printed photos, screens, and replays." },
          { name: "Ultralytics YOLOv11", purpose: "Real-time object detection mapping prohibited smartphones, books, and multiple candidates." },
          { name: "Energy/ZCR VAD & Acoustic Vector", purpose: "Acoustic voice activity detector and custom 128-D spectral vector fallback engine." },
          { name: "SpeechBrain ECAPA-TDNN", purpose: "Optional 192-D deep speaker verification; gracefully falls back to custom acoustic vector when uninstalled." },
          { name: "faster-whisper", purpose: "Optional lazy-loaded transcription for conversational exam analysis (flagged as optional)." },
        ],
      },
    ],
  },

  // -------------------------------------------------------------
  // Empirical Results & Evaluation (Verified against repo docs)
  // -------------------------------------------------------------
  evaluation: {
    tagline: "Empirical Validation & Results",
    title: "Honest Measurements. Documented Limitations.",
    subtitle: "Extracted directly from automated harness tests (`evaluation/run_evaluation.py`, `load_test.js`, and `resource_usage.json`). No fabricated figures or inflated benchmarks.",

    verifiedMetrics: [
      {
        metric: "1.0",
        unit: "ADR",
        label: "PAD Attack Detection Rate",
        benchmark: "MiniFASNetV2 (3 printed-photo samples detected; 0 false acceptances)",
        caveat: "Verified on printed-photo attacks; monitor/video attack benchmarks require larger datasets.",
        status: "Verified",
      },
      {
        metric: "0.0",
        unit: "FRR",
        label: "PAD Live False Rejection Rate",
        benchmark: "MiniFASNetV2 live face validation (2 genuine live samples accepted)",
        caveat: "Clean live validation baseline; small prototype test cohort.",
        status: "Verified",
      },
      {
        metric: "1.0",
        unit: "TPR",
        label: "Blink Detector Accuracy",
        benchmark: "10 synthetic blendshape sequences (TP 3, FN 0, FP 0, TN 7)",
        caveat: "Evaluated on synthetic traces verifying camera tilt & head motion immunity.",
        status: "Verified",
      },
      {
        metric: "1.0",
        unit: "Precision",
        label: "Alert Policy Mapping Precision",
        benchmark: "48/48 mappings correct across 4 session modes x 12 event classes",
        caveat: "Measures deterministic severity policy logic, not raw perception accuracy.",
        status: "Verified",
      },
      {
        metric: "50/50",
        unit: "Sessions",
        label: "Concurrent Socket Sessions",
        benchmark: "Load tested with 0 connection drops and 273 events processed",
        caveat: "Evaluates Node.js WebSocket concurrency; AI service was idle during socket burst.",
        status: "Verified",
      },
      {
        metric: "1–3",
        unit: "ms",
        label: "Socket.IO Event RTT",
        benchmark: "Mean round-trip time (p95 <= 9 ms) under 50 simultaneous connected clients",
        caveat: "Local loopback and private network testing conditions.",
        status: "Verified",
      },
      {
        metric: "39.9",
        unit: "ms",
        label: "PAD Inference Latency",
        benchmark: "Mean MiniFASNetV2 execution time per frame (p95: 48.1 ms)",
        caveat: "CPU inference benchmark on 80x80 face crop.",
        status: "Verified",
      },
      {
        metric: "82.2",
        unit: "MB",
        label: "Node Server Memory RSS",
        benchmark: "Mean memory footprint over 99 monitored load samples (Peak: 97.6 MB)",
        caveat: "Measured on Express backend with in-memory session tracking.",
        status: "Verified",
      },
    ],

    // Academic Integrity: What was NOT measured or had dataset artifacts
    caveatsAndLimitations: [
      {
        title: "Face Recognition FAR (0.6 Dataset Artifact)",
        description: "OpenCV SFace recorded 3/5 impostor acceptances on a tiny 2-subject sample dataset. Cross-subject similarity was ~1.0 due to model-author test crop artifacts. Documented honestly rather than claiming false 99% accuracy.",
      },
      {
        title: "Speaker Verification Real EER (Not Measured)",
        description: "ECAPA-TDNN pipeline calibration was performed on 3 synthetic speakers. Real-speaker Equal Error Rate (EER) requires consented multi-speaker datasets and is transparently reported as Not Measured.",
      },
      {
        title: "AI Service Peak Load Under GPU Inference (Not Measured)",
        description: "Resource monitoring was executed during socket load tests while the Python service was idle. Peak inference RAM and GPU utilization under 50 concurrent video feeds remains future work.",
      },
      {
        title: "WebRTC Multi-Peer Mesh Latency (Not Measured)",
        description: "WebRTC streaming is currently implemented as 1:1 participant-to-reviewer relay. Multi-candidate SFU architectures are documented for future releases.",
      },
    ],
  },

  // -------------------------------------------------------------
  // Real Project Screenshot Gallery (20 Authentic Screenshots)
  // -------------------------------------------------------------
  gallery: [
    {
      id: "gal-01",
      title: "Face Registration & MiniFASNet PAD",
      category: "Biometrics",
      src: "/snapshots/01_face_registration_pad.jpg",
      route: "/register-face",
      caption: "Step 2 of 3 registration: Real-time MiniFASNetV2 presentation-attack detection with MediaPipe blendshapes verifying genuine human presence before enrollment.",
      tags: ["MiniFASNetV2", "PAD: VERIFIED", "Blink: 15", "Step 2 of 3"],
    },
    {
      id: "gal-02",
      title: "Voice Identity Enrollment",
      category: "Biometrics",
      src: "/snapshots/02_voice_registration.jpg",
      route: "/register-voice",
      caption: "Step 3 of 3 registration: Candidate reads a security challenge phrase aloud, capturing 16kHz PCM audio to build a continuous acoustic identity signature.",
      tags: ["16kHz PCM", "Acoustic Vector", "VAD Gated", "Step 3 of 3"],
    },
    {
      id: "gal-03",
      title: "Pre-Exam Identity Verification Gate",
      category: "Biometrics",
      src: "/snapshots/11_pre_exam_identity_check.jpg",
      route: "/proctor-room",
      caption: "Pre-Session Gate: Synchronous verification of face presence, live person check, natural blink, 128-D face matching, and registered voice profile prior to entering examination.",
      tags: ["PreSessionCheck", "Identity Verified", "Fail-Closed Gate"],
    },
    {
      id: "gal-04",
      title: "Face Mesh & 3D Landmark Extraction",
      category: "Perception",
      src: "/snapshots/05_face_mesh_wireframe.jpg",
      route: "/face-mesh",
      caption: "68-point 3D facial topology and geometric wireframe extraction running with 135ms latency to map candidate facial movements.",
      tags: ["Face Mesh", "68 Landmarks", "135ms Latency", "Wireframe"],
    },
    {
      id: "gal-05",
      title: "Face Mesh Hand Occlusion Handling",
      category: "Perception",
      src: "/snapshots/03_face_mesh_hand_occlusion.jpg",
      route: "/face-mesh",
      caption: "Stress test of the face landmarker pipeline during physical occlusion. The system immediately registers NO FACE when facial keypoints are obstructed.",
      tags: ["Occlusion Test", "Zero False Keypoints", "Robust Detection"],
    },
    {
      id: "gal-06",
      title: "Eye Gaze Tracking & Focus Duration",
      category: "Perception",
      src: "/snapshots/04_eye_gaze_center_focus.jpg",
      route: "/eye-gaze",
      caption: "Real-time iris detection calculating horizontal/vertical offsets, Eye Aspect Ratio (EAR), and cumulative attention focus score (84% confidence).",
      tags: ["Iris Tracking", "EAR: 0.441", "Focus Duration", "Attention Score"],
    },
    {
      id: "gal-07",
      title: "Eye Gaze Eyes Closed Detection",
      category: "Perception",
      src: "/snapshots/10_eye_gaze_eyes_closed.jpg",
      route: "/eye-gaze",
      caption: "Immediate detection of prolonged eyes-closed state (EAR dropping to 0.024), resetting attention score to zero and flagging suspicious disengagement.",
      tags: ["Eyes Closed", "EAR: 0.024", "Attention 0%", "Disengagement Alert"],
    },
    {
      id: "gal-08",
      title: "3D Head Pose & Orientation Mapping",
      category: "Perception",
      src: "/snapshots/06_head_pose_distracted.jpg",
      route: "/head-pose",
      caption: "Perspective-n-point 3D orientation tracking pitch (-10.3°), yaw (-9.1°), and roll (+0.7°) with graphical gyro dials and distraction state classifier.",
      tags: ["Head Pose", "Pitch / Yaw / Roll", "Gyro Dials", "Distracted State"],
    },
    {
      id: "gal-09",
      title: "YOLOv11 Clean Workspace Scan",
      category: "Perception",
      src: "/snapshots/07_object_detection_clean.jpg",
      route: "/object-detection",
      caption: "Ultralytics YOLOv11 running 256ms inference verifying 1 candidate present (95% confidence) with mobile phone and unauthorized books clean.",
      tags: ["YOLOv11", "Candidate 95%", "Clean Workspace", "256ms Inference"],
    },
    {
      id: "gal-10",
      title: "Phone Detection Violation Alert",
      category: "Violations",
      src: "/snapshots/08_object_detection_phone_violation.jpg",
      route: "/object-detection",
      caption: "Instant alert trigger when candidate holds a mobile smartphone into frame. YOLOv11 detects Phone #3 (66% confidence) and flags prohibited device.",
      tags: ["Prohibited Device", "Mobile Phone Detected", "Integrity Alert"],
    },
    {
      id: "gal-11",
      title: "Multiple People In Workspace Violation",
      category: "Violations",
      src: "/snapshots/20_object_detection_multiple_people.jpg",
      route: "/object-detection",
      caption: "Critical violation trigger when an unauthorized individual enters the workspace. Detects Candidate #1 (94%) and Multiple People #2 (89%).",
      tags: ["Multiple People", "Critical Alert", "Workspace Breach"],
    },
    {
      id: "gal-12",
      title: "Live Monitoring Session in Exam Mode",
      category: "Monitoring",
      src: "/snapshots/09_live_monitoring_exam_mode.jpg",
      route: "/monitoring",
      caption: "Candidate view of active proctored exam session with real-time HUD showing tab switch verification (0/3), head position telemetry, and server risk score.",
      tags: ["EXAM Mode", "Live HUD", "Telemetry Stream", "Tab Switch 0/3"],
    },
    {
      id: "gal-13",
      title: "Tab Switch Warning 3 of 3 (Final Warning)",
      category: "Violations",
      src: "/snapshots/12_tab_switch_final_warning.jpg",
      route: "/monitoring",
      caption: "Enforcement modal warning candidate after 3rd unsanctioned browser tab switch: 'Warning 3 of 3: One more tab switch will terminate your session.'",
      tags: ["Final Warning", "Tab Switch 3/3", "High Integrity Violation"],
    },
    {
      id: "gal-14",
      title: "Session Terminated: Limit Exceeded",
      category: "Violations",
      src: "/snapshots/13_session_terminated_tab_switch.jpg",
      route: "/monitoring",
      caption: "Automated server-side security termination when candidate exceeds maximum permissible tab switches (4/3). Session locks immediately.",
      tags: ["Auto-Suspension", "Security Termination", "4/3 Exceeded"],
    },
    {
      id: "gal-15",
      title: "Virtual Proctoring Room Manager",
      category: "Proctoring",
      src: "/snapshots/16_virtual_room_manager.jpg",
      route: "/rooms",
      caption: "Host interface managing Zoom/Meet style interactive proctoring rooms with shareable links, mode filters (Exam, Interview, Class, Meeting), and live metrics.",
      tags: ["Room Manager", "Shareable Links", "Multi-Mode Rooms"],
    },
    {
      id: "gal-16",
      title: "Create Proctoring Room Configuration",
      category: "Proctoring",
      src: "/snapshots/19_create_proctor_room_modal.jpg",
      route: "/rooms",
      caption: "Modal creating custom proctoring sessions with selectable Session Mode (Examination Moderate), participant limits, duration, and Spoken AI Voice Warnings.",
      tags: ["Room Configuration", "Voice Warnings", "Exam Moderate"],
    },
    {
      id: "gal-17",
      title: "Live Proctor Dashboard Overview",
      category: "Proctoring",
      src: "/snapshots/14_proctor_dashboard_rooms.jpg",
      route: "/proctor-dashboard",
      caption: "Proctor command center displaying active virtual rooms, total AI detections (6 alerts), critical violations (1), and quick launch controls.",
      tags: ["Proctor Dashboard", "6 Alerts Flagged", "Live Rooms"],
    },
    {
      id: "gal-18",
      title: "Candidate Integrity State Monitoring",
      category: "Proctoring",
      src: "/snapshots/15_proctor_dashboard_student_detail.jpg",
      route: "/proctor-dashboard",
      caption: "Detailed candidate monitoring grid showing real-time verification, liveness, identity, attention (90%), risk score (CRITICAL), and TERMINATED status.",
      tags: ["Candidate Grid", "Risk: CRITICAL", "Status: TERMINATED", "Audit Ready"],
    },
    {
      id: "gal-19",
      title: "Audited Proctoring Reports & Certificates",
      category: "Reports",
      src: "/snapshots/17_session_reports_audited.jpg",
      route: "/reports",
      caption: "Forensic archive of audited session integrity certificates: RPT-931240 (TERMINATED, Score 40%), RPT-810154 (REVIEW REQUIRED, 88%), and RPT-732275 (FLAGGED, 20%).",
      tags: ["Forensic Reports", "Integrity Scores", "Review Required"],
    },
    {
      id: "gal-20",
      title: "Real-Time System Alerts Event Log",
      category: "Reports",
      src: "/snapshots/18_system_alerts_log.jpg",
      route: "/alerts",
      caption: "Chronological security event stream indexing TAB_SWITCH_LIMIT_EXCEEDED, EYES_CLOSED, TAB_SWITCH_DETECTED, and PARTICIPANT_JOINED with timestamps.",
      tags: ["System Alerts", "Forensic Timestamps", "Event Stream"],
    },
  ],

  // -------------------------------------------------------------
  // Open-Source Documentation & Repository Assets
  // -------------------------------------------------------------
  openSource: {
    tagline: "Transparent Academic Engineering",
    title: "Open Source Codebase & Technical Documentation",
    subtitle: "Built as an auditable, reproducible academic engineering project. Every architectural layer, neural model choice, and evaluation metric is fully documented.",
    repoUrl: "https://github.com/Nikhi-07/TrueView-Ai-Multimodel_AI-.git",
    cloneCmd: "git clone https://github.com/Nikhi-07/TrueView-Ai-Multimodel_AI-.git",
    resources: [
      {
        title: "System Architecture Specification",
        docPath: "docs/ARCHITECTURE.md",
        description: "Comprehensive 3-tier topology detailing React client, Express 5 + Socket.IO server, and FastAPI microservice communication contracts.",
        status: "Available in Repo",
        available: true,
      },
      {
        title: "AI Methodology & Neural Pipelines",
        docPath: "docs/AI_METHODOLOGY.md",
        description: "Detailed mathematical formulations of YuNet, MiniFASNetV2, SFace 128-D cosine clustering, and custom acoustic feature extraction.",
        status: "Available in Repo",
        available: true,
      },
      {
        title: "Phase 3 Empirical Evaluation Report",
        docPath: "docs/EVALUATION.md",
        description: "Unfiltered benchmark outputs across presentation-attack detection, blink state machines, Socket.IO concurrency, and Node memory.",
        status: "Available in Repo",
        available: true,
      },
      {
        title: "Security Audit & Privacy Blueprint",
        docPath: "docs/AUDIT.md",
        description: "Zero-trust client defense analysis, scoped JWT tokens, bcrypt password hashing, fail-closed pathways, and GDPR-aligned biometric data isolation.",
        status: "Available in Repo",
        available: true,
      },
      {
        title: "Full Engineering Project Document",
        docPath: "docs/PROJECT_DOCUMENTATION.md",
        description: "Complete academic dissertation chapter document covering problem statement, system modules, methodology, results, and limitations.",
        status: "Available in Repo",
        available: true,
      },
      {
        title: "Academic Defense Viva Questions",
        docPath: "docs/VIVA_QUESTIONS.md",
        description: "Rigorous defense preparation guide addressing anti-spoofing resilience, false positive mitigations, and architectural tradeoffs.",
        status: "Available in Repo",
        available: true,
      },
      {
        title: "Project Dissertation Report",
        docPath: "#",
        description: "Formal academic capstone report prepared for department submission and degree evaluation.",
        status: "Submitted for Evaluation",
        available: false,
      },
      {
        title: "Peer-Reviewed Research Manuscript",
        docPath: "#",
        description: "Scientific paper manuscript focusing on server-authoritative multimodal sensor fusion in remote proctoring environments.",
        status: "Manuscript in Preparation",
        available: false,
      },
    ],
  },

  // -------------------------------------------------------------
  // Team & Project Guide (Configurable)
  // -------------------------------------------------------------
  team: {
    tagline: "Academic Engineering Team",
    title: "Contributors & Project Mentorship",
    subtitle: "Developed as a final year Bachelor of Technology (B.Tech) capstone project in Computer Science & Engineering.",
    department: "Department of Computer Science & Engineering",
    institution: "Engineering & Technology Institute",
    members: [
      {
        name: "Nikhil L. U.",
        role: "Project Lead & Full-Stack Architect",
        contribution: "Engineered core React client, Express 5 / Socket.IO real-time room orchestration, WebRTC streaming relay, and virtual room manager.",
        github: "https://github.com/Nikhi-07",
        email: "nikhillu25@gmail.com",
        initials: "NL",
      },
      {
        name: "Tarun G.",
        role: "AI Pipeline & Biometric Systems Engineer",
        contribution: "Implemented multi-stage biometric registration (password, face PAD, voice enrollment), OpenCV SFace integration, and evaluation harness.",
        github: "https://github.com/Tarung33",
        email: "taruntaru380@gmail.com",
        initials: "TG",
      },
      {
        name: "Sai Gokul P V",
        role: "Computer Vision & Object Detection Engineer",
        contribution: "Researched and integrated Ultralytics YOLOv11 spatial detection pipeline, dataset validation, and real-time bounding box tracking.",
        github: "https://github.com/Nikhi-07/TrueView-Ai-Multimodel_AI-",
        email: "member3@trueview.ai",
        initials: "SG",
      },
      {
        name: "Likeeth G Urs",
        role: "Backend & Forensic Reporting Engineer",
        contribution: "Developed MongoDB schema architectures, PDF certificate rendering engine, and automated system alert taxonomy.",
        github: "https://github.com/Nikhi-07/TrueView-Ai-Multimodel_AI-",
        email: "member4@trueview.ai",
        initials: "LG",
      },
    ],
    guide: {
      name: "Harshitha H D",
      designation: "Assistant Professor",
      department: "Department of Computer Science & Engineering(Data Science)",
      institution: "Adichunchanagiri Institute of Technology",
      message: "Mentored the technical architecture, academic defense methodology, ethical evaluation standards, and fail-closed security paradigms.",
    },
  },

  // -------------------------------------------------------------
  // Responsible Use & Ethics
  // -------------------------------------------------------------
  ethics: {
    tagline: "Ethical AI & Proportionality",
    title: "Responsible Use Policy",
    quote: "TrueView AI is engineered to support certified human reviewers by organizing observational telemetry into structured evidence — it does not automatically make the final determination of academic misconduct.",
    points: [
      {
        title: "Evidence, Not Verdicts",
        text: "Every flagged event is presented to human reviewers as an auditable data point with timestamped frames and confidence levels. AI never issues punitive academic disciplinary actions autonomously.",
      },
      {
        title: "Strict Biometric Isolation",
        text: "Biometric vectors and facial embeddings are encrypted server-side with strict select: false database isolation, preventing client exposure, data harvesting, or biometric leakage.",
      },
      {
        title: "Context-Aware Policy Flexibility",
        text: "Different assessment formats have distinct natural tolerances. TrueView AI enforces customized policies across EXAM, INTERVIEW, CLASS, and MEETING modes to eliminate unnecessary stress.",
      },
      {
        title: "Transparent Appeal Recourse",
        text: "Audited forensic reports provide exact timestamps, risk trajectories, and event logs, enabling candidates to request fair and verifiable faculty re-evaluations.",
      },
    ],
  },
};
