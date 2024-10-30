document.addEventListener("DOMContentLoaded", function () {
  const content = document.getElementById("content");

  // Simulate additional sections for infinite scroll
  const sections = [
    `<section class="card my-3"><div class="card-body"><h2 class="card-title">Volunteer Work</h2><ul><li>Red Cross Volunteer: Managed inventory at BUA store.</li><li>BUKTA Music Festival Volunteer</li></ul></div></section>`,
    `<section class="card my-3"><div class="card-body"><h2 class="card-title">Additional Experience</h2><p>Further roles in food production and customer relations.</p></div></section>`,
    `<section class="card my-3"><div class="card-body"><h2 class="card-title">Open Source Projects</h2><ul><li>Market Basket Analysis for SuperBazar.</li></ul></div></section>`
  ];

  let sectionIndex = 0;

  window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && sectionIndex < sections.length) {
      content.insertAdjacentHTML("beforeend", sections[sectionIndex]);
      sectionIndex++;
    }
  });
});
