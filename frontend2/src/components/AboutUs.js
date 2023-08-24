// AboutUs.js
import React from 'react';
import './AboutUs.css'; // Import the AboutUs.css file

const AboutUs = () => {
  return (
    <div className="aboutus-container">
    
<main>
  <div class="container py-4">
    <header class="pb-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center text-body-emphasis text-decoration-none">
      </a>
    </header>

    <div class="p-5 mb-4 bg-body-tertiary rounded-3 align">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">About Us</h1>
        <p class="col-md-8 fs-4">Welcome to the Government Asset Management Web App - your comprehensive solution for efficiently managing educational assets across India. Our platform addresses the complex task of overseeing a vast network of educational institutions, offices, and centers. With a user-friendly interface and robust features, we empower both Central and State Governments to seamlessly manage their assets and make informed decisions.</p>
      </div>
    </div>

    <div class="row align-items-md-stretch align">
      <div class="col-md-6">
        <div class="h-100 p-5 text-bg-dark rounded-3">
          <h2>Who We Are</h2>
          <p>We are a dedicated team of professionals driven by a shared vision of modernizing asset management for the education sector. Our expertise lies in creating innovative digital solutions that streamline operations, enhance transparency, and enable data-driven insights. By harnessing the power of technology, we are committed to contributing to the advancement of the education system in India.</p>
        </div>
      </div>
      <div class="col-md-6 align">
        <div class="h-100 p-5 bg-body-tertiary border rounded-3">
          <h2>Our Mission</h2>
          <p>At Government Asset Management Web App, our mission is to revolutionize the way educational assets are tracked and maintained. We understand the challenges faced by governments in managing a diverse range of assets, and our goal is to provide a comprehensive platform that simplifies this process. By offering user-friendly tools for asset tracking, real-time updates, and insightful analytics, we aim to empower administrators to make well-informed decisions that positively impact the education ecosystem.</p>
        </div>
      </div>
    </div>

    <footer class="pt-3 mt-4 text-body-secondary border-top">
    </footer>
  </div>
</main>
<script src="/docs/5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
 
</div>
  );
};

export default AboutUs;
