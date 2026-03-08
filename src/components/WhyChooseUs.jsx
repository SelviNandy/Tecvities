import "./Whychooseus.css";

function WhyChooseUs() {

  return (
    <section className="why-us reveal">
      <h2>Why Choose Us</h2>

      <div class="why-container">

        <div class="why-card">
          <i class="bi bi-lightning-charge" ></i>
          <h3>Fast Performance</h3>
          <p>Optimized and clean code for high performance websites.</p>
        </div>

        <div class="why-card">
          <i class="bi bi-phone"></i>
          <h3>Responsive Design</h3>
          <p>Works perfectly on mobile, tablet and desktop devices.</p>
        </div>

        <div class="why-card">
          <i class="bi bi-code-slash"></i>
          <h3>Modern Technology</h3>
          <p>Built using React, JavaScript and modern UI trends.</p>
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
