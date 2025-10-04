// Mock data (replace with API fetches)
let mockPubs = [
  {
    title: "Microgravity Bone Loss",
    summary: "15% density reduction. Links to 5 studies.",
    year: 2023,
  },
  {
    title: "Plant Growth in Space",
    summary: "Enhanced roots under LED. Gap: Mars soil.",
    year: 2022,
  },
];

// Load initial viz
function loadViz() {
  const ctx = document.getElementById("heroChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Radiation", "Microgravity", "Plant Biology"],
      datasets: [
        {
          label: "Pub Count",
          data: [142, 200, 120],
          backgroundColor: ["#1f77b4", "#ff7f0e", "#2ca02c"],
        },
      ],
    },
    options: { responsive: true, scales: { y: { beginAtZero: true } } },
  });
}

// Search handler
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value;
    // TODO: Fetch from API: fetch(`/api/pubs?q=${query}`).then(res => res.json()).then(updateInsights);
    updateInsights(
      mockPubs.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  });

  // Init
  loadViz();
  updateInsights(mockPubs);
});

// Update insights list
function updateInsights(pubs) {
  const list = document.getElementById("insightsList");
  list.innerHTML = pubs
    .map(
      (pub) => `
    <li class="bg-gray-800 p-3 rounded flex justify-between items-center">
      <div>
        <strong>${pub.title}</strong> (${pub.year})<br>
        <small>${pub.summary}</small>
      </div>
      <button onclick="showModal('${pub.title}', '${pub.summary}')" class="bg-nasa-accent px-3 py-1 rounded text-sm">Details</button>
    </li>
  `
    )
    .join("");
}

// Modal
function showModal(title, summary) {
  Swal.fire({
    title: title,
    html: `<p>${summary}</p><a href="#" class="text-nasa-accent">View Full Pub</a>`,
    icon: "info",
    confirmButtonText: "Close",
  });
}

// Toggle sidebar
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("-translate-x-full");
}
