<template>
<body>
 <div class="preloader">
  <div class="status">
   <div class="status-mes">
   </div>
  </div>
 </div>
 <div class="fixed-top navbar-light bg-faded site-navigation" id="navigation">
  <div class="container">
   <div class="row">
    <div class="col-lg-2 col-md-3 col-sm-4">
     <div class="site-logo">
      <a href="index.html">
       <img src="@/assets/logo.svg" />
      </a>
     </div>
    </div>
    <div class="col-lg-6 col-md-9 col-sm-8">
     <div class="header_right">
      <nav class="ms-auto bg-white" id="main-menu">
        <ul>
          <li>
            <router-link class="nav-link" to="/contact">
              Contact
            </router-link>
          </li>
        </ul>
      </nav>

      <div id="mobile_menu">
      </div>
     </div>
    </div>
    <div class="col-lg-4 col-md-3 col-sm-8">
     <div class="home_lc">
      <a class="hlc" href="#">
       <i class="ti-heart">
       </i>
       <span class="gactive">
        0
       </span>
      </a>
      <a class="hlc" href="#">
       <i class="ti-shopping-cart-full">
       </i>
       <span class="gactive">
        2
       </span>
      </a>
     </div>
     <div class="call_to_action">
      <a class="btn_one" href="#">
       Login
      </a>
      <a class="btn_two" href="#">
       Sign Up
      </a>
     </div>
    </div>
   </div>
  </div>
 </div>
 <section class="section-top">
  <div class="container">
   <div class="col-lg-10 offset-lg-1 text-center">
    <div class="section-top-title wow fadeInRight" data-wow-delay="0.3s" data-wow-duration="1s" data-wow-offset="0">
     <h1>
      Get In Touch
     </h1>
     <ul>
      <li>
        <router-link to="/" class="nav-link">
          Home
        </router-link>
      </li>

      <li>
       / Contact
      </li>
     </ul>
    </div>
   </div>
  </div>
 </section>
 <section class="address_area section-padding">
  <div class="container">
   <div class="row text-center">
    <div class="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1s" data-wow-offset="0">
     <div class="single_address">
      <i class="ti-map">
      </i>
      <h4>
       Our Location
      </h4>
      <p>
       3481 Melrose Place, Beverly Hills
       <br/>
       CA 90210
      </p>
     </div>
    </div>
    <div class="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s" data-wow-offset="0">
     <div class="single_address sabr">
      <i class="ti-mobile">
      </i>
      <h4>
       Telephone
      </h4>
      <p>
       (+1) 517 397 7100
      </p>
      <p>
       (+1) 411 315 8138
      </p>
     </div>
    </div>
    <div class="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1s" data-wow-offset="0">
     <div class="single_address">
      <i class="ti-email">
      </i>
      <h4>
       Send email
      </h4>
      <p>
       Info@example.com
      </p>
      <p>
       admin@example.com
      </p>
     </div>
    </div>
   </div>
  </div>
 </section>
 <div class="contact_area section-padding" id="contact">
  <div class="container">
   <div class="section-title-two">
    <h2>
     Send your message.
    </h2>
   </div>
   <div class="row">
    <div class="offset-lg-1 col-lg-10 col-sm-12 col-xs-12 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s" data-wow-offset="0">
     <div class="contact">
      <form action="contact.php" class="form" method="post" name="enq">
       <div class="row">
        <div class="form-group col-md-6">
         <label for="">
          Name
         </label>
         <input class="form-control" name="name" required="required" type="text"/>
        </div>
        <div class="form-group col-md-6">
         <label for="">
          Your Email
         </label>
         <input class="form-control" name="email" required="required" type="email"/>
        </div>
        <div class="form-group col-md-12">
         <label for="">
          Your Subject
         </label>
         <input class="form-control" name="subject" required="required" type="text"/>
        </div>
        <div class="form-group col-md-12">
         <label for="">
          Your Message
         </label>
         <textarea class="form-control" name="message" required="required" rows="6"></textarea>
        </div>
        <div class="col-md-12 text-center">
         <button class="btn_one" id="submitButton" name="submit" title="Submit Your Message!" type="submit" value="Send message">
          Send Message
         </button>
        </div>
       </div>
      </form>
     </div>
    </div>
   </div>
  </div>
 </div>
 <div class="footer section-padding">
  <div class="container">
   <div class="row">
    <div class="col-lg-3 col-sm-6 col-xs-12">
     <div class="single_footer">
      <router-link to="/">
          <img :src="logo" alt="Logo" />
      </router-link>
      <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim.
      </p>
     </div>
     <div class="foot_social">
      <ul>
       <li>
        <a href="#">
         TW
        </a>
       </li>
       <li>
        <a href="#">
         FB
        </a>
       </li>
       <li>
        <a href="#">
         INS
        </a>
       </li>
       <li>
        <a href="#">
         YT
        </a>
       </li>
      </ul>
     </div>
    </div>
    <div class="col-lg-3 col-sm-6 col-xs-12">
     <div class="single_footer">
      <h4>
       Courses
      </h4>
      <ul>
       <li>
        <a href="#">
         Creative Writing
        </a>
       </li>
       <li>
        <a href="#">
         Digital Marketing
        </a>
       </li>
       <li>
        <a href="#">
         SEO Business
        </a>
       </li>
       <li>
        <a href="#">
         Social Marketing
        </a>
       </li>
       <li>
        <a href="#">
         Graphic Design
        </a>
       </li>
       <li>
        <a href="#">
         Website Development
        </a>
       </li>
      </ul>
     </div>
    </div>
    <div class="col-lg-3 col-sm-6 col-xs-12">
     <div class="single_footer">
      <h4>
       Company
      </h4>
      <ul>
       <li>
        <a href="#">
         About us
        </a>
       </li>
       <li>
        <a href="#">
         Knowledge Base
        </a>
       </li>
       <li>
        <a href="#">
         Affiliate Program
        </a>
       </li>
       <li>
        <a href="#">
         Community
        </a>
       </li>
       <li>
        <a href="#">
         Market API
        </a>
       </li>
       <li>
        <a href="#">
         Support team
        </a>
       </li>
      </ul>
     </div>
    </div>
    <div class="col-lg-3 col-sm-6 col-xs-12">
     <div class="single_footer">
      <h4>
       Contact Info
      </h4>
      <div class="sf_contact">
       <span class="ti-mobile">
       </span>
       <h3>
        Phone number
       </h3>
       <p>
        +88 457 845 695
       </p>
      </div>
      <div class="sf_contact">
       <span class="ti-email">
       </span>
       <h3>
        Email Address
       </h3>
       <p>
        example#yourmail.com
       </p>
      </div>
      <div class="sf_contact">
       <span class="ti-map">
       </span>
       <h3>
        Office Address
       </h3>
       <p>
        California, USA
       </p>
      </div>
     </div>
    </div>
   </div>
   <div class="row fc">
    <div class="col-lg-6 col-sm-6 col-xs-12">
     <div class="footer_copyright">
      <p>
       © 2023. All Rights Reserved.
      </p>
     </div>
    </div>
    <div class="col-lg-6 col-sm-6 col-xs-12">
     <div class="footer_menu">
      <ul>
       <li>
        <a href="#">
         Terms of use
        </a>
       </li>
       <li>
        <a href="#">
         Privacy Policy
        </a>
       </li>
       <li>
        <a href="#">
         Cookie Policy
        </a>
       </li>
      </ul>
     </div>
    </div>
   </div>
  </div>
 </div>
</body>

</template>

<script setup>
import logo from '@/assets/images/all-img/logo_2.svg';

const submitForm = async (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  await fetch('/contact.php', {
    method: 'POST',
    body: formData,
  });
  alert('Form submitted!');
};
</script>

<style scoped>
/* Scoped styles */
</style>
