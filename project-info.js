// =============================================================================
// project-info.js  —  YOUR ONLY FILE TO EDIT FOR ADDING/CHANGING PROJECTS
// =============================================================================
//
// HOW IT WORKS:
//   This file exports a single array called `projects`. index.html imports it
//   and uses the data to build every project card, tab, and folder automatically.
//   You never touch index.html just to add a project — only edit this file.
//
// EACH PROJECT IS AN OBJECT WITH THESE FIELDS:
// ─────────────────────────────────────────────
//
//   title     (required)  — The project name shown in bold on each card.
//
//   desc      (required)  — One or two sentences shown under the title.
//
//   img       (required)  — Filename of the thumbnail image.
//                           Put the image file in the same folder as index.html.
//                           Example: "Turretv1.png"  →  file: Turretv1.png
//
//   link      (required)  — URL that opens when you click the card.
//                           Set to null (no quotes) if the project isn't ready.
//                           A null link shows a "WIP" badge and disables clicking.
//
//   type      (optional)  — Short label shown on the right side of the card.
//                           Examples: "CAD", "Software", "Hardware", "Research"
//                           Can be anything — it's just display text.
//
//   category  (optional)  — Groups projects into folders/tabs.
//                           Projects with the same category string go in the
//                           same folder. Tabs are created automatically — just
//                           use the same string and it works. If omitted, the
//                           project lands in a folder called "Other".
//
//   tags      (optional)  — Array of short keyword pills shown under the desc.
//                           Example: ["Onshape", "FRC", "2026"]
//                           Use these for tools, season, or tech used.
//
// TAB / FOLDER SYSTEM:
// ─────────────────────
//   • "All" tab           → flat list of every project in order
//   • "Browse Folders"    → collapsible folders, one per category
//   • Category tabs       → one tab per unique category, auto-generated
//
//   To create a new folder, just use a new category name. No code changes needed.
//   Folders appear in the order the first project of that category appears below.
//
// =============================================================================

export const projects = [
  {
    title: "Roller Bearing Turret",
    desc: "Example Turret Stack design",
    img: "Turretv1.png",
    link: "https://cad.onshape.com/documents/dad9a5143e948fa790757cbd/w/f9912f3b918c5744adae4bed/e/58a58bbf9e93fa3f64d450c1?renderMode=0&uiState=68c833703e33063612d30182",
    type: "CAD",
    category: "FRC Mechanisms",
    tags: ["Onshape", "FRC", "Generic"]
  },
  {
    title: "Continious Elevator",
    desc: "Designed and fabricated 5895's Continous, in-tube elevator for the REEFSCAPE robot: Jormungandr",
    img: "Elevatorv1.png",
    link: "https://cad.onshape.com/documents/ed27b56935eded6d35c01e6f/w/4cc3593340dbb2453637039c/e/139f5e426054fd58c0a2554b?renderMode=0&uiState=68c832ce3e52696d53eb3dd6",
    type: "CAD + On Robot",
    category: "FRC Mechanisms",
    featured: true,                              // ← makes this appear in the Featured section
    tags: ["Onshape", "FRC", "Fabrication", "REEFSCAPE"]
  },
  {
    title: "Dual Channel Idexer",
    desc: "Designed, prototyped and fabricated 5895's indexing solution for the REBUILT double turret robot: Kunpengopterus",
    img: "Indexer.png",
    link: "https://cad.onshape.com/documents/ce4ee1d9e80d64dd94c8dbbb/w/ce65f0388f7ef3d8ec2a1326/e/11918b15bd681a6cdc9e9c74?renderMode=0&uiState=69fa12e2064e6634431dd4df",
    type: "CAD + On Robot",
    category: "FRC Mechanisms",                            // ← makes this appear in the Featured section
    tags: ["Onshape", "FRC", "Fabrication", "REBUILT"]
  },
  {
    title: "FRC Reefscape Offseason Bot",
    desc: "Concept robot for the 2025 FRC game, L1 coral scorer",
    img: "OffseasonBot.png",
    link: "https://cad.onshape.com/documents/66549edfba56524834dc1d6f/w/15077c65e03286e083abeeae/e/7aabf745f93416db886b7b8a?renderMode=0&uiState=68c8333d10ef7f9435a7fb20",
    type: "CAD",
    category: "FRC Mechanisms",
    tags: ["Onshape", "FRC","REEFSCAPE"]
  },
  {
    title: "Terrabot",
    desc: "Programmed self sustaining gardening robot that takes data from sensors to optimize growth conditions (Based on CMU ROB course)",
    img: "Terrabot.png",
    link: null,
    type: "Software + Borrowed Hardware",
    category: "Robotics & Code",
    tags: ["Python", "Sensors", "CMU", "Autonomous"]
  },
   // Add more Projects here ↓
  // {
  //   title: "Intake V2",
  //   desc: "Improved roller intake with better game piece control.",
  //   img: "IntakeV2.png",
  //   link: "https://...",
  //   type: "CAD",
  //   category: "FRC Mechanisms",
  //   tags: ["Onshape", "FRC", "Iteration"]
  // },

  // ── ADD A NEW CATEGORY ──────────────────────────────────────────────────────
  // Just use a new category string — a new tab and folder appear automatically.
  // {
  //   title: "My New Project",
  //   desc: "Description here.",
  //   img: "MyImg.png",
  //   link: "https://...",
  //   type: "Hardware",
  //   category: "Personal Projects",
  //   tags: ["Arduino", "3D Print"]
  // },

];
