"use client"
import Marquee from "react-fast-marquee"
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Layout from "@/components/layout/Layout"
import Link from "next/link"
import CountUp from 'react-countup'

export default function PageAbout2() {

	const swiperOptions = {
		slidesPerView: 3,
		spaceBetween: 20,
		slidesPerGroup: 1,
		centeredSlides: false,
		loop: true,
		autoplay: {
			delay: 4000,
		},
		breakpoints: {
			1200: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 2,
			},
			576: {
				slidesPerView: 1,
			},
			0: {
				slidesPerView: 1,
			},
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
		},
	}

	return (
		<>

			<Layout >

				{/*CTA 13 3*/}
				<section className="section-testimonial-13 position-relative pt-120 pb-80 fix">
					<div className="container position-relative z-1">
						<div className="row pb-9">
							<div className="col-lg-10 mx-lg-auto">
								<div className="text-center mb-lg-0 mb-5">
									{/* <div className="d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
										<img src="/assets/imgs/features-1/dots.png" alt="spotlight" />
										<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">About us</span>
									</div> */}
									<h3 className="ds-3 my-3 fw-regular">Together, We are <span className="fw-bold">Shaping </span> a<br /> <span className="fw-bold">Promising</span> Entertainment Future<span className="fw-bold">.</span></h3>
								</div>
							</div>
						</div>
						<img className="position-absolute z-2 top-0 end-0 pe-10 pe-lg-10" src="/assets/imgs/cta-15/star-2.svg" alt="spotlight" />
						<img className="position-absolute z-2 bottom-0 start-0 ps-10 ms-10" src="/assets/imgs/cta-15/star-1.svg" alt="spotlight" />
					</div>
					<div className="container-fluid">
						<div className="d-flex align-items-center justify-content-center position-relative">
							<div className="pe-3 position-relative z-1 d-none d-md-block">
								<img className="rounded-3 border border-3 border-white" src="/assets/imgs/cta-15/img-1.png" alt="spotlight" />
							</div>
							<div className="pe-3 position-relative z-1">
								<img className="rounded-3 border border-3 border-white" src="/assets/imgs/cta-15/img-2.png" alt="spotlight" />
							</div>
							<div className="pe-3 position-relative z-1">
								<img className="rounded-3 border border-3 border-white" src="/assets/imgs/cta-15/img-3.png" alt="spotlight" />
							</div>
							<div className="pe-3 position-relative z-1">
								<img className="rounded-3 border border-3 border-white" src="/assets/imgs/cta-15/img-4.png" alt="spotlight" />
							</div>
							<div className="pe-3 position-relative z-1 d-none d-md-block">
								<img className="rounded-3 border border-3 border-white" src="/assets/imgs/cta-15/img-5.png" alt="spotlight" />
							</div>
							<img className="position-absolute top-50 end-50 translate-middle-y z-0" src="/assets/imgs/cta-15/bg-ellipse.png" alt="spotlight" />
						</div>
						<div className="text-center mt-5">
							<div className="socials bg-white px-3 shadow-1 py-2 border rounded-pill d-inline-flex d-flex align-items-center justify-content-center">
								<p className="text-900 mb-0">Follow us:</p>
								<ul className="list-unstyled d-flex mb-0">
									<li className="ms-3">
										<Link href="https://www.facebook.com" target="_blank">
											<span className="icon">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
													<path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
												</svg>
											</span>
										</Link>
									</li>
									<li className="ms-3">
										<Link href="https://www.twitter.com" target="_blank">
											<span className="icon">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
													<path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
												</svg>
											</span>
										</Link>
									</li>
									<li className="ms-3">
										<Link href="#">
											<span className="icon">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
													<path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z" />
												</svg>
											</span>
										</Link>
									</li>
									<li className="ms-3">
										<Link href="#">
											<span className="icon">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
													<path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
												</svg>
											</span>
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="rotate-center ellipse-rotate-success position-absolute z-0" />
						<div className="rotate-center-rev ellipse-rotate-primary position-absolute z-0" />
					</div>
				</section>
				{/*Logo cloud 3*/}
				<div className="section-logo-cloud container-fluid pt-110 pb-110 mt-lg-0 border-top border-bottom">
					<div className="container">
						<h5 className="text-500 mb-5 text-center">Trusted by great companies</h5>
						<div className="carouselTicker carouselTicker-right">
							<ul className="carouselTicker__list pb-4">
								<Marquee direction='right'>
									<li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img className="filter-invert" src="/assets/imgs/logo-cloud-3/logo-1.svg" alt="infinia" />
									</li>
									<li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img src="/assets/imgs/logo-cloud-3/logo-2.svg" alt="infinia" />
									</li>
									<li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img src="/assets/imgs/logo-cloud-3/logo-3.svg" alt="infinia" />
									</li>
									<li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img src="/assets/imgs/logo-cloud-3/logo-4.svg" alt="infinia" />
									</li>
									<li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<svg className="mt-3" xmlns="http://www.w3.org/2000/svg" width={95} height={16} viewBox="0 0 95 16" fill="none">
											<path d="M50.2795 0.182373C45.8551 0.182373 42.2654 3.63876 42.2654 7.90461C42.2654 12.4399 45.6991 15.8302 50.2795 15.8302C54.7456 15.8302 58.2718 12.3951 58.2718 7.99365C58.2718 3.61839 54.7691 0.182373 50.2795 0.182373Z" fill="url(#paint0_linear_815_25436)" />
											<path className="fill-dark" d="M4.7827 0.463976H0.474365V15.4912H4.7603C7.0342 15.4912 8.67874 14.9523 10.1213 13.7573C11.8331 12.3377 12.8483 10.1971 12.8483 7.98487C12.8483 3.54822 9.53389 0.463976 4.7827 0.463976ZM8.20912 11.7503C7.28268 12.5862 6.09001 12.9473 4.19466 12.9473H3.4073V3.00848H4.19466C6.09001 3.00848 7.237 3.34687 8.20912 4.22471C9.22285 5.12613 9.82747 6.52189 9.82747 7.96334C9.82747 9.40769 9.22285 10.8523 8.20912 11.7503ZM14.2013 15.4912H17.1293V0.463976H14.2013V15.4912ZM24.2978 6.22831C22.538 5.57625 22.0201 5.1462 22.0201 4.3379C22.0201 3.3908 22.9422 2.67037 24.2061 2.67037C25.0849 2.67037 25.8059 3.03059 26.5743 3.88428L28.1045 1.88214C26.8429 0.7756 25.3334 0.213163 23.6868 0.213163C21.0305 0.213163 19.0011 2.06167 19.0011 4.51539C19.0011 6.59027 19.9467 7.64822 22.6966 8.64216C23.8465 9.04573 24.4311 9.31488 24.7246 9.49877C25.3104 9.88197 25.6045 10.4208 25.6045 11.0514C25.6045 12.2699 24.6347 13.1699 23.326 13.1699C21.9288 13.1699 20.8033 12.4722 20.1268 11.1654L18.2364 12.9927C19.5856 14.9727 21.2083 15.8543 23.4415 15.8543C26.4832 15.8543 28.6227 13.8237 28.6227 10.9178C28.6227 8.52898 27.6337 7.44658 24.2978 6.22831ZM29.5462 7.98487C29.5462 12.4061 33.0175 15.8302 37.4803 15.8302C38.7419 15.8302 39.8235 15.5808 41.1543 14.9523V11.5029C39.9809 12.6758 38.9442 13.1478 37.6142 13.1478C34.6629 13.1478 32.5659 11.0066 32.5659 7.96334C32.5659 5.08045 34.7284 2.80422 37.4803 2.80422C38.8752 2.80422 39.9361 3.29973 41.1543 4.49386V1.04474C39.87 0.393271 38.8092 0.125 37.5472 0.125C33.1071 0.125 29.5462 3.61834 29.5462 7.98487ZM64.9036 10.5582L60.8923 0.463976H57.6923L64.0717 15.875H65.6479L72.1387 0.463976H68.9623L64.9036 10.5582ZM73.4711 15.4912H81.7852V12.9473H76.4002V8.88832H81.5791V6.34382H76.4002V3.00848H81.7852V0.463976H73.4711V15.4912ZM93.3874 4.89888C93.3874 2.08378 91.4522 0.463976 88.07 0.463976H83.7204V15.4912H86.6527V9.45163H87.0365L91.0905 15.4912H94.6962L89.961 9.16125C92.1726 8.70908 93.3874 7.19868 93.3874 4.89888ZM87.5055 7.38053H86.6527V2.82691H87.5524C89.3817 2.82691 90.3727 3.59535 90.3727 5.05775C90.3727 6.56641 89.3817 7.38053 87.5055 7.38053Z" fill="black" />
											<defs>
												<linearGradient x1="45.373" y1="1.60057" x2="56.1885" y2="13.0236" gradientUnits="userSpaceOnUse">
													<stop offset={1} stopColor="#F34F26" />
													<stop offset={1} stopColor="#F69E35" />
												</linearGradient>
											</defs>
										</svg>
									</li>
									<li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img src="/assets/imgs/logo-cloud-3/logo-6.svg" alt="infinia" />
									</li>
									<li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img src="/assets/imgs/logo-cloud-3/logo-7.svg" alt="infinia" />
									</li>
								</Marquee>
							</ul>
						</div>
						<div className="row">
							<div className="col-lg-10 mx-lg-auto">
								<div className="carouselTicker carouselTicker-left">
									<ul className="carouselTicker__list pb-4">
										<Marquee>
											<li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2">
												<img className="filter-invert" src="/assets/imgs/logo-cloud-3/logo-8.svg" alt="infinia" />
											</li>
											<li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2">
												<img className="filter-invert" src="/assets/imgs/logo-cloud-3/logo-9.svg" alt="infinia" />
											</li>
											<li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2">
												<img src="/assets/imgs/logo-cloud-3/logo-3.svg" alt="infinia" />
											</li>
											<li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2">
												<img className="filter-invert" src="/assets/imgs/logo-cloud-3/logo-10.svg" alt="infinia" />
											</li>
											<li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2">
												<img src="/assets/imgs/logo-cloud-3/logo-11.svg" alt="infinia" />
											</li>
											<li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2">
												<img className="filter-invert" src="/assets/imgs/logo-cloud-3/logo-12.svg" alt="infinia" />
											</li>
										</Marquee>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*Team 6*/}
				<section className="section-team-6 section-padding position-relative">
					<div className="container">
						<div className="row position-relative z-1">
							<div className="text-center">
								<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
									<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">OUR TEAM MEMBERS</span>
								</div>
								<h3 className="ds-3 my-3">Meet Our Team</h3>
								<p className="fs-5">
									Meet the talented and passionate team members who drive our <br />
									company forward every day.
								</p>
							</div>
						</div>
						<div className="row mt-6">
							{/* prettier-ignore */}
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
								<div className="card-team position-relative d-inline-block hover-up">
									<div className="d-flex bg-primary-soft rounded-top-3 p-3">
										<div>
											<h6>
												<Link href="#" className="text-900">Sarah Brown</Link>
											</h6>
											<p className="mb-0">Co-Founder</p>
										</div>
										<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
									<div className="zoom-img bg-primary-soft">
										<img className="img-fluid w-100" src="/assets/imgs/team-6/img-portrait-1.png" alt="infinia" />
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
								<div className="card-team position-relative d-inline-block hover-up">
									<div className="d-flex bg-primary-soft rounded-top-3 p-3">
										<div>
											<h6>
												<Link href="#" className="text-900">Michael Anderson</Link>
											</h6>
											<p className="mb-0">Software Engineer</p>
										</div>
										<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
									<div className="zoom-img bg-primary-soft">
										<img className="img-fluid w-100" src="/assets/imgs/team-6/img-portrait-2.png" alt="infinia" />
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
								<div className="card-team position-relative d-inline-block hover-up">
									<div className="d-flex bg-primary-soft rounded-top-3 p-3">
										<div>
											<h6>
												<Link href="#" className="text-900">David Clark</Link>
											</h6>
											<p className="mb-0">Product Manager</p>
										</div>
										<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
									<div className="zoom-img bg-primary-soft">
										<img className="img-fluid w-100" src="/assets/imgs/team-6/img-portrait-3.png" alt="infinia" />
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
								<div className="card-team position-relative d-inline-block hover-up">
									<div className="d-flex bg-primary-soft rounded-top-3 p-3">
										<div>
											<h6>
												<Link href="#" className="text-900">Emily Adams</Link>
											</h6>
											<p className="mb-0">UX/UI Designer</p>
										</div>
										<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
									<div className="zoom-img bg-primary-soft">
										<img className="img-fluid w-100" src="/assets/imgs/team-6/img-portrait-4.png" alt="infinia" />
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
								<div className="card-team position-relative d-inline-block hover-up">
									<div className="d-flex bg-primary-soft rounded-top-3 p-3">
										<div>
											<h6>
												<Link href="#" className="text-900">Jessica Carter</Link>
											</h6>
											<p className="mb-0">DevOps Engineer</p>
										</div>
										<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
									<div className="zoom-img bg-primary-soft">
										<img className="img-fluid w-100" src="/assets/imgs/team-6/img-portrait-5.png" alt="infinia" />
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
								<div className="card-team position-relative d-inline-block hover-up">
									<div className="d-flex bg-primary-soft rounded-top-3 p-3">
										<div>
											<h6>
												<Link href="#" className="text-900">William Foster</Link>
											</h6>
											<p className="mb-0">Marketing Specialist</p>
										</div>
										<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
									<div className="zoom-img bg-primary-soft">
										<img className="img-fluid w-100" src="/assets/imgs/team-6/img-portrait-6.png" alt="infinia" />
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
								<div className="card-team position-relative d-inline-block hover-up">
									<div className="d-flex bg-primary-soft rounded-top-3 p-3">
										<div>
											<h6>
												<Link href="#" className="text-900">Lauren Graham</Link>
											</h6>
											<p className="mb-0">Sales Executive</p>
										</div>
										<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
									<div className="zoom-img bg-primary-soft">
										<img className="img-fluid w-100" src="/assets/imgs/team-6/img-portrait-7.png" alt="infinia" />
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
								<div className="card-team position-relative d-inline-block hover-up">
									<div className="d-flex bg-primary-soft rounded-top-3 p-3">
										<div>
											<h6>
												<Link href="#" className="text-900">James Bennett</Link>
											</h6>
											<p className="mb-0">Data Analyst</p>
										</div>
										<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
									<div className="zoom-img bg-primary-soft">
										<img className="img-fluid w-100" src="/assets/imgs/team-6/img-portrait-8.png" alt="infinia" />
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="text-center mt-6">
								<div className="text-center">
									<p className="fs-4 mb-5 text-900">
										Easily Monitor, Control, and Enhance Your Personal and <br />
										Business Finances. Your All-In-One Solution.
									</p>
									<Link href="#" className="btn btn-gradient">
										Get a Free Quote
										<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*Features 10*/}
				<section className="features-10 py-9 bg-primary-light">
					<div className="container">
						<div className="row">
							{/* prettier-ignore */}
							<div className="col-lg-3 col-md-6">
								<div className="feature-item mb-5 position-relative mb-lg-0 bg-white p-5 rounded-4 hover-up">
									<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
										<div className="icon">
											<img src="/assets/imgs/features-1/icon-1.svg" alt="infinia" />
										</div>
									</div>
									<h6>Best Solutions</h6>
									<p>delivering exceptional results and Innovation solutons maximizing your success.</p>
									<Link href="#" className="text-primary fs-7 fw-bold">
										Learm More
										<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
											<g clipPath="url(#clip0_399_9647)">
												<path className="fill-dark" d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
											</g>
											<defs>
												<clipPath>
													<rect width={18} height={18} fill="white" transform="translate(0.5)" />
												</clipPath>
											</defs>
										</svg>
									</Link>
									<div className="position-absolute end-0 top-0">
										<img src="/assets/imgs/feature-10/bg-line.png" alt="" />
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="feature-item mb-5 position-relative mb-lg-0 bg-white p-5 rounded-4 hover-up">
									<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
										<div className="icon">
											<img src="/assets/imgs/features-1/icon-2.svg" alt="infinia" />
										</div>
									</div>
									<h6>Secure payment</h6>
									<p>We ensure your transactions are safe with advanced encryption and secure payment options.</p>
									<Link href="#" className="text-primary fs-7 fw-bold">
										Learm More
										<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
											<g clipPath="url(#clip0_399_9647)">
												<path className="fill-dark" d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
											</g>
											<defs>
												<clipPath>
													<rect width={18} height={18} fill="white" transform="translate(0.5)" />
												</clipPath>
											</defs>
										</svg>
									</Link>
									<div className="position-absolute end-0 top-0">
										<img src="/assets/imgs/feature-10/bg-line.png" alt="" />
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="feature-item mb-5 position-relative mb-lg-0 bg-white p-5 rounded-4 hover-up">
									<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
										<div className="icon">
											<img src="/assets/imgs/features-1/icon-3.svg" alt="infinia" />
										</div>
									</div>
									<h6>Save Money</h6>
									<p>Enjoy competitive pricing, exclusive discounts, promotions to maximize your savings.</p>
									<Link href="#" className="text-primary fs-7 fw-bold">
										Learm More
										<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
											<g clipPath="url(#clip0_399_9647)">
												<path className="fill-dark" d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
											</g>
											<defs>
												<clipPath>
													<rect width={18} height={18} fill="white" transform="translate(0.5)" />
												</clipPath>
											</defs>
										</svg>
									</Link>
									<div className="position-absolute end-0 top-0">
										<img src="/assets/imgs/feature-10/bg-line.png" alt="" />
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="feature-item mb-5 position-relative mb-lg-0 bg-white p-5 rounded-4 hover-up">
									<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
										<div className="icon">
											<img src="/assets/imgs/features-1/icon-4.svg" alt="infinia" />
										</div>
									</div>
									<h6>Quick Support</h6>
									<p>Our dedicated support team offers prompt assistance through live chat, email, and phone.</p>
									<Link href="#" className="text-primary fs-7 fw-bold">
										Learm More
										<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
											<g clipPath="url(#clip0_399_9647)">
												<path className="fill-dark" d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
											</g>
											<defs>
												<clipPath>
													<rect width={18} height={18} fill="white" transform="translate(0.5)" />
												</clipPath>
											</defs>
										</svg>
									</Link>
									<div className="position-absolute end-0 top-0">
										<img src="/assets/imgs/feature-10/bg-line.png" alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* feature-11 */}
				<section className="section-feature-11 border-bottom">
					<div className="container-fluid position-relative section-padding">
						<div className="container">
							<div className="row">
								<div className="col-lg-5 position-relative">
									<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
										<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
										<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Our Features</span>
									</div>
									<h5 className="ds-5 mt-2">Optimize Your <br /> Finances with Ease.</h5>
									<div className="d-flex pt-3 align-items-center">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
											<div className="icon">
												<img src="/assets/imgs/features-11/icon-1.svg" alt="infinia" />
											</div>
										</div>
										<div className="ps-5">
											<h6>Our History</h6>
											<p>A Journey of Innovation, Growth, <br /> and Technological Advancement</p>
										</div>
									</div>
									<div className="d-flex pt-3 align-items-center">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
											<div className="icon">
												<img src="/assets/imgs/features-11/icon-2.svg" alt="infinia" />
											</div>
										</div>
										<div className="ps-5">
											<h6>Our Mission</h6>
											<p>Empowering Your Digital Success Through <br /> Innovative Solutions</p>
										</div>
									</div>
									<div className="d-flex pt-3 align-items-center">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
											<div className="icon">
												<img src="/assets/imgs/features-11/icon-3.svg" alt="infinia" />
											</div>
										</div>
										<div className="ps-5">
											<h6>Our Vision</h6>
											<p>Leading the Future of Web Development <br /> with Excellence and Innovation</p>
										</div>
									</div>
									<div className="position-absolute flickering top-0 end-0 mt-5 me-10 d-none d-md-block">
										<img src="/assets/imgs/features-11/icon-4.svg" alt="" />
									</div>
								</div>
								<div className="col-lg-7 text-center mt-lg-0 mt-8 d-flex">
									<div className="zoom-img rounded-3 mt-8 me-3">
										<img src="/assets/imgs/features-11/img-1.png" alt="infinia" />
									</div>
									<div className="zoom-img rounded-3">
										<img className="rounded-3" src="/assets/imgs/features-11/img-2.png" alt="infinia" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*Project 2*/}
				<section className="section-project-2 pt-120 pb-8">
					<div className="container">
						<div className="row mb-8">
							<div className="col-lg-6">
								<div className="d-flex align-items-center justify-text-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
									<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Recent work</span>
								</div>
								<h3 className="ds-3 mt-3 mb-3">Our feared projects</h3>
								<p className="fs-5 fw-medium">⚡Don't miss any contact. Stay connected.</p>
							</div>
							<div className="col-lg-2 col-md-3 col-6 ms-auto align-self-end mb-lg-7 mt-lg-0 mt-4">
								<div className="position-relative z-0">
									<div className="swiper-button-prev shadow bg-white ms-lg-7">
										<i className="bi bi-arrow-left" />
									</div>
									<div className="swiper-button-next shadow bg-white">
										<i className="bi bi-arrow-right" />
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<Swiper
								{...swiperOptions}
								className="swiper slider-1 pt-2 pb-8"
								modules={[Keyboard, Autoplay, Pagination, Navigation]}
							>
								<div className="swiper-wrapper">
									{/* prettier-ignore */}
									<SwiperSlide className="swiper-slide">
										<div className="text-center">
											<div className="zoom-img position-relative d-inline-block z-1">
												<div className="rounded-3 fix">
													<img className="img-fluid w-100" src="/assets/imgs/project-2/img-1.png" alt="infinia" />
												</div>
												<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up">
													<p className="fs-7 text-primary mb-1">InnovateTech Inc.</p>
													<h6>Strategic Solutions Initiative</h6>
													<p className="text-900">Streamlining operations and growth strategies for market enhancement.</p>
												</Link>
												<Link href="#" className="badge text-primary bg-white px-3 py-2 rounded-pill m-4 fs-7 position-absolute top-0 end-0 z-1">Software Development</Link>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="text-center">
											<div className="zoom-img position-relative d-inline-block z-1">
												<div className="rounded-3 fix">
													<img className="img-fluid w-100" src="/assets/imgs/project-2/img-2.png" alt="infinia" />
												</div>
												<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up">
													<p className="fs-7 text-primary mb-1">Pioneer Enterprises</p>
													<h6>Innovate Consulting Challenge</h6>
													<p className="text-900">Leveraging consulting practices to solve complex problems.</p>
												</Link>
												<Link href="#" className="badge text-primary bg-white px-3 py-2 rounded-pill m-4 fs-7 position-absolute top-0 end-0 z-1">Consulting</Link>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="text-center">
											<div className="zoom-img position-relative d-inline-block z-1">
												<div className="rounded-3 fix">
													<img className="img-fluid w-100" src="/assets/imgs/project-2/img-3.png" alt="infinia" />
												</div>
												<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up">
													<p className="fs-7 text-primary mb-1">Summit Corp</p>
													<h6>Growth Catalyst Program</h6>
													<p className="text-900">Accelerating business growth through strategic planning.</p>
												</Link>
												<Link href="#" className="badge text-primary bg-white px-3 py-2 rounded-pill m-4 fs-7 position-absolute top-0 end-0 z-1">Financial Advisory</Link>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="text-center">
											<div className="zoom-img position-relative d-inline-block z-1">
												<div className="rounded-3 fix">
													<img className="img-fluid w-100" src="/assets/imgs/project-2/img-1.png" alt="infinia" />
												</div>
												<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up">
													<p className="fs-7 text-primary mb-1">InnovateTech Inc.</p>
													<h6>Strategic Solutions Initiative</h6>
													<p className="text-900">Streamlining operations and growth strategies for market enhancement.</p>
												</Link>
												<Link href="#" className="badge text-primary bg-white px-3 py-2 rounded-pill m-4 fs-7 position-absolute top-0 end-0 z-1">Software Development</Link>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="text-center">
											<div className="zoom-img position-relative d-inline-block z-1">
												<div className="rounded-3 fix">
													<img className="img-fluid w-100" src="/assets/imgs/project-2/img-2.png" alt="infinia" />
												</div>
												<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up">
													<p className="fs-7 text-primary mb-1">Pioneer Enterprises</p>
													<h6>Innovate Consulting Challenge</h6>
													<p className="text-900">Leveraging consulting practices to solve complex problems.</p>
												</Link>
												<Link href="#" className="badge text-primary bg-white px-3 py-2 rounded-pill m-4 fs-7 position-absolute top-0 end-0 z-1">Consulting</Link>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="text-center">
											<div className="zoom-img position-relative d-inline-block z-1">
												<div className="rounded-3 fix">
													<img className="img-fluid w-100" src="/assets/imgs/project-2/img-3.png" alt="infinia" />
												</div>
												<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up">
													<p className="fs-7 text-primary mb-1">Summit Corp</p>
													<h6>Growth Catalyst Program</h6>
													<p className="text-900">Accelerating business growth through strategic planning.</p>
												</Link>
												<Link href="#" className="badge text-primary bg-white px-3 py-2 rounded-pill m-4 fs-7 position-absolute top-0 end-0 z-1">Financial Advisory</Link>
											</div>
										</div>
									</SwiperSlide>
								</div>
							</Swiper>
						</div>
					</div>
				</section>
				{/*Features 7*/}
				<section className="section-features-7 bg-neutral-100 section-padding">
					<div className="container">
						<div className="row mb-8 mb-lg-6">
							<div className="col-lg-6">
								<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
									<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Why us ?</span>
								</div>
								<h3 className="ds-3 mt-3 mb-3">Reach out to <br /> the world’s most</h3>
								<p className="fs-5 fw-medium">⚡Here are a few reasons why our customers choose Infinia.</p>
							</div>
							<div className="col-lg-2 col-md-3 col-5 ms-auto align-self-end mb-lg-7">
								<div className="position-relative z-0">
									<div className="swiper-button-prev bg-white ms-lg-7">
										<i className="bi bi-arrow-left" />
									</div>
									<div className="swiper-button-next bg-white">
										<i className="bi bi-arrow-right" />
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<Swiper {...swiperOptions}
								className="swiper slider-1 pb-3"
								modules={[Keyboard, Autoplay, Pagination, Navigation]}
							>
								<div className="swiper-wrapper">
									{/* prettier-ignore */}
									<SwiperSlide className="swiper-slide">
										<div className="card border-0 position-relative rounded-3 d-inline-flex card-hover">
											<img className="rounded-top-3" src="/assets/imgs/features-7/img-1.png" alt="infinia" />
											<Link href="#" className="position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
												<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">business</span>
											</Link>
											<div className="card-body bg-white p-6">
												<h6 className="mb-3">Marketing Automation</h6>
												<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
												<Link href="#" className="fw-bold text-primary d-inline-block pt-3 position-relative z-1">Keep Reading
													<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
														<path className="fill-dark" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
													</svg>
												</Link>
											</div>
											<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="card border-0 position-relative rounded-3 d-inline-flex card-hover">
											<img className="rounded-top-3" src="/assets/imgs/features-7/img-2.png" alt="infinia" />
											<Link href="#" className="position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
												<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Research</span>
											</Link>
											<div className="card-body bg-white p-6">
												<h6 className="mb-3">Project Management</h6>
												<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
												<Link href="#" className="fw-bold text-primary d-inline-block pt-3 position-relative z-1">Keep Reading
													<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
														<path className="fill-dark" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
													</svg>
												</Link>
											</div>
											<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="card border-0 position-relative rounded-3 d-inline-flex card-hover">
											<img className="rounded-top-3" src="/assets/imgs/features-7/img-3.png" alt="infinia" />
											<Link href="#" className="position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
												<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Social Media</span>
											</Link>
											<div className="card-body bg-white p-6">
												<h6 className="mb-3">Social Media Management</h6>
												<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
												<Link href="#" className="fw-bold text-primary d-inline-block pt-3 position-relative z-1">Keep Reading
													<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
														<path className="fill-dark" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
													</svg>
												</Link>
											</div>
											<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="card border-0 position-relative rounded-3 d-inline-flex card-hover">
											<img className="rounded-top-3" src="/assets/imgs/features-7/img-1.png" alt="infinia" />
											<Link href="#" className="position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
												<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">business</span>
											</Link>
											<div className="card-body bg-white p-6">
												<h6 className="mb-3">Marketing Automation</h6>
												<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
												<Link href="#" className="fw-bold text-primary d-inline-block pt-3 position-relative z-1">Keep Reading
													<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
														<path className="fill-dark" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
													</svg>
												</Link>
											</div>
											<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="card border-0 position-relative rounded-3 d-inline-flex card-hover">
											<img className="rounded-top-3" src="/assets/imgs/features-7/img-2.png" alt="infinia" />
											<Link href="#" className="position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
												<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Research</span>
											</Link>
											<div className="card-body bg-white p-6">
												<h6 className="mb-3">Project Management</h6>
												<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
												<Link href="#" className="fw-bold text-primary d-inline-block pt-3 position-relative z-1">Keep Reading
													<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
														<path className="fill-dark" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
													</svg>
												</Link>
											</div>
											<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="card border-0 position-relative rounded-3 d-inline-flex card-hover">
											<img className="rounded-top-3" src="/assets/imgs/features-7/img-3.png" alt="infinia" />
											<Link href="#" className="position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
												<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Social Media</span>
											</Link>
											<div className="card-body bg-white p-6">
												<h6 className="mb-3">Social Media Management</h6>
												<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
												<Link href="#" className="fw-bold text-primary d-inline-block pt-3 position-relative z-1">Keep Reading
													<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
														<path className="fill-dark" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
													</svg>
												</Link>
											</div>
											<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
										</div>
									</SwiperSlide>
								</div>
							</Swiper>
						</div>
					</div>
				</section>
				{/* Newsletter 1 */}
				<section className="section-newsletter-1 pb-120 pt-120 fix position-relative">
					<div className="container position-relative fix">
						<div className="row align-items-center fix text-center border rounded-4 position-relative z-1">
							<div className="col-lg-6 my-4">
								<div className="row">
									<div className="ms-lg-4">
										<img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-1.png" alt="infinia" />
										<img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-2.png" alt="infinia" data-aos="fade-zoom-in" data-aos-delay={50} />
										<img className="rounded-4 border border-3 border-white me-3 mb-3 d-none d-md-inline" src="/assets/imgs/newsletter-1/img-3.png" alt="infinia" />
									</div>
								</div>
								<div className="row">
									<div>
										<img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-4.png" alt="infinia" />
										<img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-5.png" alt="infinia" data-aos="fade-zoom-in" data-aos-delay={100} />
										<img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-6.png" alt="infinia" />
										<img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-7.png" alt="infinia" data-aos="fade-zoom-in" data-aos-delay={100} />
									</div>
								</div>
								<div className="row d-none d-lg-flex">
									<div className="me-lg-0">
										<img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-8.png" alt="infinia" data-aos="fade-zoom-in" data-aos-delay={50} />
										<img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-9.png" alt="infinia" data-aos="fade-zoom-in" data-aos-delay={100} />
										<img className="rounded-4 border border-3 border-white me-3 mb-3 d-none d-md-inline" src="/assets/imgs/newsletter-1/img-10.png" alt="infinia" />
									</div>
								</div>
							</div>
							<div className="col-lg-6 mt-lg-0 mt-5">
								<div className="px-lg-5 text-lg-start text-center">
									<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
										<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
										<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Stay Updated</span>
									</div>
									<h4 className="mt-3 mb-3" data-aos="fade-zoom-in" data-aos-delay={100}>Subscribe to our Newsletter!</h4>
									<span className="fs-6 fw-medium" data-aos="fade-zoom-in" data-aos-delay={200}>Join 52,000+ people on our newsletter</span>
									<div className="input-group mb-3 mt-4 position-relative">
										<input type="text" className="ps-5 py-3 form-control bg-neutral-100 rounded-start-pill border-2 border-end-0 border-white" name="name" placeholder="Enter your mail .." />
										<div className="bg-neutral-100 border-2 border border-start-0 border-white rounded-end-pill">
											<button className="btn btn-gradient px-3 py-3 m-3 fs-7 fw-bold border-0 rounded-pill" type="button" data-aos="fade-zoom-in" data-aos-delay={100}>Join Now</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="position-absolute top-50 start-50 translate-middle z-0">
							<img src="/assets/imgs/newsletter-1/bg-line.png" alt="infinia" />
						</div>
						<div className="bouncing-blobs-container rounded-4 fix">
							<div className="bouncing-blobs-glass rounded-4" />
							<div className="bouncing-blobs">
								<div className="bouncing-blob bouncing-blob--green" />
								<div className="bouncing-blob bouncing-blob--primary" />
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	)
}