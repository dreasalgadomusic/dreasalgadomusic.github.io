// Optional: tracking clicks for social links
document.querySelectorAll('.link-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    console.log(`Clicked: ${btn.textContent.trim()}`);
  });
});

// Nothing else needed for Book Me or Bio