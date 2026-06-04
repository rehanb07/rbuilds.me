// =============================================================================
// project-info.js  —  YOUR ONLY FILE TO EDIT FOR ADDING/CHANGING PROJECTS
// =============================================================================
//
// FIELDS YOU CAN USE ON EACH PROJECT:
// ─────────────────────────────────────────────
//   title     (required)  — Project name shown in bold.
//   desc      (required)  — One or two sentences shown under the title.
//   img       (required)  — Image filename. Put the file next to index.html.
//   type      (optional)  — Short label: "CAD", "Software", "CAD + On Robot", etc.
//   category  (optional)  — Groups projects into folders/tabs. Same string = same folder.
//   featured  (optional)  — true on ONE project to show it in the Featured section.
//   tags      (optional)  — Keyword pills: ["Onshape", "FRC", "2026"]
//   links     (optional)  — Array of labeled link buttons shown on the card.
//                           Leave empty or omit → shows WIP badge instead.
//                           Each: { label: "CAD", url: "https://..." }
//                           On the featured card: first link = gold button, rest = ghost buttons.
//                           On list cards: all links stack in the right column as pills.
// =============================================================================

export const projects = [

    {
    title: "OrbitArm//Archimedes",
    desc: "Workspace for 6 D.O.F arm, first iteration",
    img: "Terrabot.png",
    type: "Hardware",
    featured: false,
    category: "OrbitArm",
    tags: ["Python", "3D-Printed", "Robotics", "Cycloidal","Differential"],
    links: [
      { label: "CAD", url: "https://cad.onshape.com/documents/f1a96f1362726f91ca015153/w/4755cc5477bdde3bbcac8804/e/4fffbbcab4ed427c358f243d?renderMode=0&uiState=6a0bdcb51e28e318c6e053f6" },
    ]
  },
  {
    title: "Cycloidal Gearbox",
    desc: "Cyclodial Design used for OrbitArm -- Inspired by WhiteOwls Cycloidal for 3dp ",
    img: "Terrabot.png",
    type: "Hardware",
    featured: false,
    category: "Standalone Mechanism",
    tags: ["3D-Printed", "Robotics", "Cycloidal","Gearbox","Speed Reducer"],
    links: [
      { label: "CAD", url: "https://cad.onshape.com/documents/eacc570a6717279fa377b4f1/w/62362ea36bff67a7477c30c2/e/edb0cd51a9b5cce17a525e9c" },
    ]
  },
  // ── FRC MECHANISMS ──────────────────────────────────────────────────────────
  {
    title: "Roller Bearing Turret",
    desc: "Example Turret Stack design for a generic FRC game",
    img: "Turretv1.png",
    type: "CAD",
    featured: false,
    category: "FRC Mechanisms",
    tags: ["Onshape", "FRC", "Generic"],
    links: [
      { label: "CAD", url: "https://cad.onshape.com/documents/dad9a5143e948fa790757cbd/w/f9912f3b918c5744adae4bed/e/58a58bbf9e93fa3f64d450c1?renderMode=0&uiState=68c833703e33063612d30182" },
    ]
  },
  {
    title: "Continuous Elevator",
    desc: "Designed and fabricated 5895's continuous, in-tube elevator for the REEFSCAPE robot: Jormungandr",
    img: "Elevatorv1.png",
    type: "CAD + On Robot",
    featured: true,
    category: "FRC Mechanisms",
    tags: ["Onshape", "FRC", "Fabrication", "REEFSCAPE"],
    links: [
      { label: "CAD",                url: "https://cad.onshape.com/documents/ed27b56935eded6d35c01e6f/w/4cc3593340dbb2453637039c/e/139f5e426054fd58c0a2554b?renderMode=0&uiState=68c832ce3e52696d53eb3dd6" },
      { label: "Match Play",         url: "https://www.youtube.com/watch?v=eeJjN4r7vL4" },
      { label: "Behind the Bumpers", url: "https://www.youtube.com/watch?v=ZwdZN7-8sKA" },
    ]
  },
  {
    title: "Dual Channel Indexer",
    desc: "Designed, prototyped and fabricated 5895's indexing solution for the REBUILT double turret robot: Kunpengopterus",
    img: "Indexer.png",
    type: "CAD + On Robot",
    featured: false,
    category: "FRC Mechanisms",
    tags: ["Onshape", "FRC", "Fabrication", "REBUILT"],
    links: [
      { label: "CAD", url: "https://cad.onshape.com/documents/ce4ee1d9e80d64dd94c8dbbb/w/ce65f0388f7ef3d8ec2a1326/e/11918b15bd681a6cdc9e9c74?renderMode=0&uiState=69fa12e2064e6634431dd4df" },
       { label: "Match Play", url: "https://www.youtube.com/watch?v=7Ow6jkBr8kw&t=174s" },
      { label: "Behind the Bumpers", url: "WIP" },
    ]
  },
  {
    title: "FRC Reefscape Offseason Bot",
    desc: "Concept robot for the 2025 FRC game, L1 coral scorer",
    img: "OffseasonBot.png",
    type: "CAD",
    featured: false,
    category: "FRC Mechanisms",
    tags: ["Onshape", "FRC", "REEFSCAPE"],
    links: [
      { label: "CAD", url: "https://cad.onshape.com/documents/66549edfba56524834dc1d6f/w/15077c65e03286e083abeeae/e/7aabf745f93416db886b7b8a?renderMode=0&uiState=68c8333d10ef7f9435a7fb20" },
    ]
  },

  // ── ROBOTICS & CODE ─────────────────────────────────────────────────────────
  {
    title: "Terrabot",
    desc: "Programmed self sustaining gardening robot that takes data from sensors to optimize growth conditions (Based on CMU ROB course)",
    img: "Terrabot.png",
    type: "Software + Borrowed Hardware",
    featured: false,
    category: "Robotics & Code",
    tags: ["Python", "Sensors", "CMU", "Autonomous"],
    links: []   // ← empty = WIP badge
  },


  // ── ADD A NEW PROJECT ────────────────────────────────────────────────────────
  // {
  //   title: "My New Project",
  //   desc: "Description here.",
  //   img: "MyImg.png",
  //   type: "Hardware",
  //   featured: false,
  //   category: "Personal Projects",
  //   tags: ["Arduino", "3D Print"],
  //   links: [
  //     { label: "CAD",        url: "https://..." },
  //     { label: "Demo Video", url: "https://youtube.com/..." },
  //   ]
  // },

];
