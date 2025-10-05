export const researchData = [
  {
    id: 1,
    title:
      "Microgravity induces pelvic bone loss through osteoclastic activity, osteocytic osteolysis, and osteoblastic cell cycle inhibition by CDKN1a/p21	",
    summary: "15% density reduction in space over 6-month period.",
    year: 2023,
    theme: "Human Physiology",
    authors: ["Dr. Sarah Chen", "Dr. Marcus Rodriguez", "Dr. Elena Petrova"],
    doi: "10.1234/space.2023.001",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3630201/",
    data: [
      { month: "Jan", density: 100 },
      { month: "Feb", density: 95 },
      { month: "Mar", density: 90 },
      { month: "Apr", density: 87 },
      { month: "May", density: 85 },
      { month: "Jun", density: 85 },
    ],
    fullDescription:
      "This comprehensive study examines the effects of prolonged microgravity exposure on bone mineral density in astronauts. Results show a significant 15% reduction in bone density over a 6-month period, with the most rapid loss occurring in the first three months. The research provides crucial insights for developing countermeasures for long-duration space missions.",
    methodology:
      "Dual-energy X-ray absorptiometry (DEXA) scans were conducted on 24 astronauts before, during, and after 6-month ISS missions. Control group consisted of 24 matched subjects on Earth.",
    keyFindings: [
      "15% average bone density reduction in weight-bearing bones",
      "Most significant loss in first 3 months",
      "Recovery time exceeds mission duration by 2x",
      "Calcium supplements showed limited effectiveness",
    ],
  },
  {
    id: 2,
    title: "Plant growth strategies are remodeled by spaceflight",
    summary:
      "Enhanced root development observed with specific LED spectra in microgravity conditions.",
    year: 2022,
    theme: "Plant Biology",
    authors: ["Dr. Alex Johnson", "Dr. Maria Gonzalez", "Dr. Kenji Tanaka"],
    doi: "10.1234/space.2022.045",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11869762/",
    data: [
      { week: "1", growth: 10, roots: 5 },
      { week: "2", growth: 25, roots: 12 },
      { week: "3", growth: 45, roots: 22 },
      { week: "4", growth: 70, roots: 35 },
      { week: "5", growth: 85, roots: 48 },
      { week: "6", growth: 95, roots: 55 },
    ],
    fullDescription:
      "This research explores optimal LED lighting conditions for plant growth in microgravity environments. The study demonstrates that specific blue-red light spectra significantly enhance root development and biomass production, crucial for sustainable food production in space habitats.",
    methodology:
      "Arabidopsis thaliana was grown in the ISS Veggie facility under different LED spectra. Growth metrics were monitored automatically and through crew observations.",
    keyFindings: [
      "Blue-red spectrum (70:30) increased root mass by 40%",
      "Plants showed adaptive morphology in microgravity",
      "Successful seed-to-seed cycle completed",
      "Nutritional content comparable to Earth-grown counterparts",
    ],
  },
  {
    id: 3,
    title: "Radiation Effects on Human Cells",
    summary:
      "Comprehensive analysis of cosmic radiation impact on cellular DNA and mitigation strategies.",
    year: 2024,
    theme: "Radiation",
    authors: ["Dr. Lisa Wang", "Dr. Robert Kim", "Dr. Olivia Martin"],
    doi: "10.1234/space.2024.078",
    data: [
      { radiation: "Low", damage: 15, repair: 85 },
      { radiation: "Medium", damage: 45, repair: 65 },
      { radiation: "High", damage: 80, repair: 35 },
      { radiation: "Extreme", damage: 95, repair: 15 },
    ],
    fullDescription:
      "This groundbreaking study examines the effects of simulated cosmic radiation on human stem cells and evaluates various shielding materials. The research provides critical data for designing effective radiation protection for Mars missions.",
    methodology:
      "Human mesenchymal stem cells were exposed to simulated galactic cosmic radiation at NASA's Space Radiation Laboratory. DNA damage and repair mechanisms were analyzed using comet assays and γ-H2AX staining.",
    keyFindings: [
      "Polyethylene shielding reduces damage by 60%",
      "Active magnetic shielding shows 85% effectiveness",
      "Cells exhibit adaptive response to low-dose radiation",
      "New antioxidant cocktail improves repair efficiency",
    ],
  },
  {
    id: 4,
    title: "Water Recycling in Closed Systems",
    summary:
      "98% water recovery achieved with advanced filtration system for long-duration missions.",
    year: 2023,
    theme: "Life Support",
    authors: ["Dr. Michael Brown", "Dr. Jessica Lee", "Dr. David Wilson"],
    doi: "10.1234/space.2023.112",
    data: [
      { system: "Basic", recovery: 85, purity: 92 },
      { system: "Advanced", recovery: 94, purity: 97 },
      { system: "New Tech", recovery: 98, purity: 99 },
      { system: "Future", recovery: 99, purity: 99 },
    ],
    fullDescription:
      "Development of next-generation water recycling technology achieving unprecedented recovery rates while maintaining water quality standards for human consumption in space environments.",
    methodology:
      "Six-month closed-system testing with integrated biological and physical-chemical processing systems. Water quality monitored through 47 different parameters.",
    keyFindings: [
      "98.2% water recovery rate sustained",
      "Zero microbial contamination in output",
      "System operates with 30% less energy",
      "Maintenance requirements reduced by 50%",
    ],
  },
  {
    id: 5,
    title: "Psychological Effects of Isolation",
    summary:
      "Virtual reality interventions reduce stress and improve mental health in confined environments.",
    year: 2024,
    theme: "Psychology",
    authors: ["Dr. Emily Carter", "Dr. James Zhang", "Dr. Sophia Rivera"],
    doi: "10.1234/space.2024.203",
    data: [
      { week: "1", stress: 65, morale: 70 },
      { week: "4", stress: 45, morale: 82 },
      { week: "8", stress: 30, morale: 88 },
      { week: "12", stress: 25, morale: 92 },
    ],
    fullDescription:
      "Comprehensive study on the psychological impacts of long-term isolation and the effectiveness of virtual reality-based mental health interventions for astronaut crews.",
    methodology:
      "12-month simulated Mars mission with 6 crew members. Psychological assessments conducted bi-weekly using standardized instruments and biometric monitoring.",
    keyFindings: [
      "VR nature experiences reduced stress by 60%",
      "Team cohesion improved with shared VR activities",
      "Sleep quality directly correlated with mental health",
      "Personalized interventions most effective",
    ],
  },
  {
    id: 6,
    title: "Mars Soil Analysis for Agriculture",
    summary:
      "Successful growth of 5 crop species in simulated Martian regolith with nutrient amendments.",
    year: 2023,
    theme: "Planetary Science",
    authors: ["Dr. Kevin Zhao", "Dr. Amanda Green", "Dr. Thomas Reed"],
    doi: "10.1234/space.2023.156",
    data: [
      { crop: "Potato", yield: 85, quality: 90 },
      { crop: "Wheat", yield: 70, quality: 85 },
      { crop: "Tomato", yield: 65, quality: 80 },
      { crop: "Lettuce", yield: 95, quality: 88 },
      { crop: "Carrot", yield: 60, quality: 75 },
    ],
    fullDescription:
      "Pioneering research on adapting terrestrial agriculture techniques for Martian soil conditions, focusing on sustainable food production for future colonies.",
    methodology:
      "Simulated Martian regolith was amended with various organic and inorganic nutrients. 15 crop species were tested over 6 growth cycles.",
    keyFindings: [
      "5 species showed commercial-level yields",
      "Optimal pH range identified as 6.5-7.2",
      "Native perchlorates successfully removed",
      "Crop rotation prevents nutrient depletion",
    ],
  },
  {
    id: 7,
    title: "Spacecraft Material Degradation",
    summary:
      "Novel composite materials show 3x longer lifespan in harsh space environments.",
    year: 2024,
    theme: "Materials Science",
    authors: ["Dr. Rachel Kim", "Dr. Daniel Park", "Dr. Michelle Lopez"],
    doi: "10.1234/space.2024.189",
    data: [
      { material: "Standard", lifespan: 5, cost: 100 },
      { material: "Enhanced", lifespan: 8, cost: 150 },
      { material: "New Composite", lifespan: 15, cost: 180 },
      { material: "Experimental", lifespan: 25, cost: 300 },
    ],
    fullDescription:
      "Development and testing of advanced composite materials designed to withstand extreme temperature fluctuations, radiation, and micrometeoroid impacts in space.",
    methodology:
      "Accelerated aging tests simulating 10 years of LEO exposure. Materials analyzed using SEM, XRD, and mechanical testing.",
    keyFindings: [
      "Carbon nanotube composites show superior durability",
      "Self-healing polymers maintain 90% integrity",
      "Radiation resistance improved by 400%",
      "Weight reduction of 25% achieved",
    ],
  },
  {
    id: 8,
    title: "Artificial Gravity Optimization",
    summary:
      "Intermittent artificial gravity prevents physiological deconditioning during long missions.",
    year: 2022,
    theme: "Human Physiology",
    authors: ["Dr. Brian Thompson", "Dr. Nicole White", "Dr. Carlos Mendez"],
    doi: "10.1234/space.2022.267",
    data: [
      { gravity: "0g", performance: 60, health: 50 },
      { gravity: "0.3g", performance: 75, health: 70 },
      { gravity: "0.5g", performance: 85, health: 80 },
      { gravity: "1g", performance: 95, health: 95 },
    ],
    fullDescription:
      "Study on the minimum required artificial gravity exposure to maintain crew health and performance during multi-year space missions.",
    methodology:
      "12-month bed rest study with intermittent centrifugation. 24 subjects monitored for cardiovascular, muscular, and skeletal changes.",
    keyFindings: [
      "2 hours daily at 0.5g prevents muscle atrophy",
      "Cardiovascular function maintained with 4h at 0.3g",
      "Bone density preserved with intermittent 1g exposure",
      "Crew preference for shorter, more frequent sessions",
    ],
  },
  {
    id: 9,
    title: "In-Situ Resource Utilization",
    summary:
      "Efficient extraction of water and oxygen from lunar regolith demonstrated.",
    year: 2023,
    theme: "Resource Management",
    authors: ["Dr. Patricia Kumar", "Dr. Andrew Chen", "Dr. Samantha Brooks"],
    doi: "10.1234/space.2023.298",
    data: [
      { process: "Heating", efficiency: 70, energy: 120 },
      { process: "Chemical", efficiency: 85, energy: 90 },
      { process: "Hybrid", efficiency: 95, energy: 75 },
      { process: "Optimal", efficiency: 98, energy: 65 },
    ],
    fullDescription:
      "Development of efficient methods for extracting vital resources from lunar and Martian materials to support sustainable human presence.",
    methodology:
      "Laboratory simulations using actual lunar regolith simulant. Multiple extraction techniques compared for efficiency and energy requirements.",
    keyFindings: [
      "95% water extraction efficiency achieved",
      "Oxygen production cost reduced by 60%",
      "Process byproducts useful for construction",
      "System scalable for colony requirements",
    ],
  },
  {
    id: 10,
    title: "Space Weather Prediction Models",
    summary:
      "AI-enhanced models provide 48-hour solar flare forecasts with 90% accuracy.",
    year: 2024,
    theme: "Space Physics",
    authors: ["Dr. George Wilson", "Dr. Hannah Lee", "Dr. Richard Brown"],
    doi: "10.1234/space.2024.334",
    data: [
      { model: "Traditional", accuracy: 65, lead: 12 },
      { model: "Enhanced", accuracy: 80, lead: 24 },
      { model: "AI Basic", accuracy: 85, lead: 36 },
      { model: "AI Advanced", accuracy: 90, lead: 48 },
    ],
    fullDescription:
      "Development of advanced machine learning algorithms for predicting space weather events, crucial for protecting astronauts and spacecraft systems.",
    methodology:
      "Training on 20 years of solar observation data. Models validated against historical solar flare events and real-time predictions.",
    keyFindings: [
      "90% prediction accuracy for M-class flares",
      "48-hour warning for radiation storms",
      "False positive rate reduced to 5%",
      "Model adapts to solar cycle variations",
    ],
  },
];
