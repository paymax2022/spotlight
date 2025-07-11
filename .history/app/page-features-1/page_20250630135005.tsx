'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import CountUp from 'react-countup'
import ModalVideo from 'react-modal-video'

export default function PageFeatures1() {

	const [isOpen, setOpen] = useState(false)

	// Accordion
	const [activeItem, setActiveItem] = useState(1)

	const handleActiveItem = (index: any) => {
		setActiveItem(index)
	}

	return (
		<>

			<Layout >

				{/*Features 1*/}
				<section className="features-1 section-padding">
					<div className="container">
						<div className="row">
							<div className="col-lg-4">
								<div className="d-flex align-items-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
									<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Our Features</span>
								</div>
								<h2 className="fw-medium mt-4 lh-sm">Together, we are creating a
									<span className="fw-black">Bright Future.</span>
									<span className="text-primary fst-italic" data-aos="fade-zoom-in" data-aos-delay={400}>Join us.</span>
								</h2>
							</div>
							<div className="col-lg-8">
								<div className="d-flex flex-md-row flex-column align-items-center position-relative ps-lg-8 pt-lg-0 pt-10">
									<div className="pe-md-3 pb-3 pb-md-0 position-relative z-1" data-aos="fade-zoom-in" data-aos-delay={100}>
										<img className="rounded-3 border border-3 border-white" src="/assets/imgs/features-1/img-1.png" alt="infinia" />
									</div>
									<div className="pe-md-3 pb-3 pb-md-0 position-relative z-1" data-aos="fade-zoom-in" data-aos-delay={200}>
										<img className="rounded-3 border border-3 border-white" src="/assets/imgs/features-1/img-2.png" alt="infinia" />
									</div>
									<div className="pe-md-3 pb-3 pb-md-0 position-relative z-1" data-aos="fade-zoom-in" data-aos-delay={300}>
										<img className="rounded-3 border border-3 border-white" src="/assets/imgs/features-1/img-3.png" alt="infinia" />
										<a href="#" onClick={() => setOpen(true)} className="d-inline-flex align-items-center rounded-4 text-nowrap backdrop-filter px-3 py-2 popup-video hover-up position-absolute bottom-0 mb-4 start-50 translate-middle-x">
											<span className="backdrop-filter me-2 icon-shape icon-md rounded-circle">
												<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
													<path d="M5.0978 3.31244L12.0958 6.80342C13.077 7.29449 13.0767 8.69249 12.0954 9.18316L5.09734 12.6927C4.21074 13.136 3.16687 12.4925 3.16687 11.5027L3.16687 4.50219C3.16687 3.51217 4.2112 2.86872 5.0978 3.31244Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</span>
											<span className="fw-bold fs-7 text-900">
												How It Work ?
											</span>
										</a>
										<ModalVideo channel='youtube' isOpen={isOpen} videoId="gXFATcwrO-U" onClose={() => setOpen(false)} />

									</div>
									<img className="position-absolute top-50 start-0 translate-middle-y z-0" src="/assets/imgs/features-1/bg-ellipse.png" alt="infinia" />
									<img className="position-absolute z-2 star-lg" src="/assets/imgs/features-1/star-lg.png" alt="infinia" />
									<img className="position-absolute z-2 star-md" src="/assets/imgs/features-1/star-md.png" alt="infinia" />
								</div>
							</div>
						</div>
					</div>
					<div className="container">
						<div className="row mt-10">
							{/* prettier-ignore */}
							<div className="col-lg-3 col-md-6" data-aos="fade-zoom-in" data-aos-delay={50}>
								<div className="feature-item mb-5 mb-lg-0">
									<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
										<div className="icon">
											<img src="/assets/imgs/features-1/icon-1.svg" alt="infinia" />
										</div>
									</div>
									<h6>Work organization</h6>
									<p>A business consultant provides expert advice and guidance to businesses on various aspects.</p>
								</div>
							</div>
							<div className="col-lg-3 col-md-6" data-aos="fade-zoom-in" data-aos-delay={100}>
								<div className="feature-item mb-5 mb-lg-0">
									<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
										<div className="icon">
											<img src="/assets/imgs/features-1/icon-2.svg" alt="infinia" />
										</div>
									</div>
									<h6>Strategy Development</h6>
									<p>Business consultants play a crucial role by offering expert advice and guidance to companies</p>
								</div>
							</div>
							<div className="col-lg-3 col-md-6" data-aos="fade-zoom-in" data-aos-delay={200}>
								<div className="feature-item mb-5 mb-lg-0">
									<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
										<div className="icon">
											<img src="/assets/imgs/features-1/icon-3.svg" alt="infinia" />
										</div>
									</div>
									<h6>Data analytics</h6>
									<p>Consultants provide invaluable expertise to businesses, assisting them with strategic advice</p>
								</div>
							</div>
							<div className="col-lg-3 col-md-6" data-aos="fade-zoom-in" data-aos-delay={300}>
								<div className="feature-item mb-5 mb-lg-0">
									<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
										<div className="icon">
											<img src="/assets/imgs/features-1/icon-4.svg" alt="infinia" />
										</div>
									</div>
									<h6>Business Intelligence </h6>
									<p>Through their deep understanding of industry trends and best practices, consultants empower organizations</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*Features 3*/}
				<section>
					<div className="container-fluid position-relative bg-neutral-100 section-padding bg-neutral-100">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-6 text-lg-end text-center">
									<div className="position-relative d-inline-block mb-lg-0 mb-8">
										<img className="rounded-4" src="/assets/imgs/features-3/img-1.png" alt="infinia" data-aos="fade-zoom-in" data-aos-delay={200} />
										<div className="position-absolute bottom-0 start-0 translate-middle-md-x mb-md-8 backdrop-filter rounded-3 p-md-4 p-3 text-center">
											<h6>Rate For Us</h6>
											<div className="d-flex align-items-center justify-content-center py-4">
												<img src="/assets/imgs/features-3/avatar-1.png" alt="infinia" />
												<img className="avt-hero z-1" src="/assets/imgs/features-3/avatar-2.png" alt="infinia" />
												<img className="avt-hero z-0" src=" assets/imgs/features-3/avatar-3.png" alt="infinia" />
											</div>
											<div className="d-flex align-items-center justify-content-center">
												<svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
													<path d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z" fill="#F28833" />
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
													<path d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z" fill="#F28833" />
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
													<path d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z" fill="#F28833" />
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
													<path d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z" fill="#F28833" />
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
													<path d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z" fill="#F28833" />
												</svg>
											</div>
											<p className="pt-2">
												Loved by over 4k <br />
												happy clients
											</p>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="ps-lg-5">
										<h6 data-aos="fade-zoom-in" data-aos-delay={100}>Company's vision</h6>
										<h3 className="ds-3 mt-2 mb-5" data-aos="fade-zoom-in" data-aos-delay={200}>Powerful agency fxccor corporate business.</h3>
										<p className="mb-5" data-aos="fade-zoom-in" data-aos-delay={300}>Provide your team with top-tier group mentoring programs and exceptional professional benefits.</p>
										<div className="d-flex align-items-center pb-7 border-bottom">
											<Link href="#" className="btn btn-gradient" data-aos="fade-zoom-in" data-aos-delay={0}>
												Get Free Quote
												<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
													<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</Link>
											<Link href="#" className="ms-5 text-decoration-underline fw-bold" data-aos="fade-zoom-in" data-aos-delay={300}>How We Work</Link>
										</div>
										<div className="row">
											<div className="col-12 col-md-6 d-flex align-items-center justify-content-center border-end mt-5">
												<h2 className="odometer" >
													<CountUp end={99} enableScrollSpy={true} />
												</h2>
												<span className="fs-4 fw-medium align-self-start">%</span>
												<p className="ms-3" data-aos="fade-zoom-in" data-aos-delay={200}>
													Genuine repeated <br />
													happy customers.
												</p>
											</div>
											<div className="col-12 col-md-6 d-flex align-items-center justify-content-center mt-5">
												<h2 className="odometer" >
													<CountUp end={98} enableScrollSpy={true} />
												</h2>
												<span className="fs-4 fw-medium align-self-start">%</span>
												<p className="ms-3" data-aos="fade-zoom-in" data-aos-delay={300}>
													Trusted by <br />
													companies
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*Features 6*/}
				<section className="section-team-1 position-relative fix section-padding">
					<div className="container position-relative z-2">
						<div className="text-center">
							<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
								<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Why We Are The Best</span>
							</div>
							<h3 className="ds-3 my-3 fw-regular">Proud projects <span className=" fw-bold">that make <br className="d-none d-lg-inline" /> us stand</span> out</h3>
						</div>
						<div className="row mt-8">
							<div className="col-lg-6 mt-lg-0 mt-5">
								<div>
									<div className="counter-item-cover counter-item">
										<div className="content text-start mx-auto">
											<h2 className="count ds-2 fw-bold text-primary my-0">+<span className="odometer" />
												<CountUp end={50} enableScrollSpy={true} /> k</h2>
										</div>
									</div>
								</div>
								<p className="fs-5 text-500">Nunc bibendum augue sed mattis porta. Donec pharetra magna tortor, quis bibendum ligula faucibus vitae,</p>
								<div className="accordion">
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 1 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(1)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">1</span>
												<h6 className="m-0">Offshore Software Development</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapseOne" className={activeItem == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600">
												Getting started is simple! Download the app from the App Store or Google Play Store, create an account using your email or social media login, and start making video calls instantly.
											</p>
										</div>
									</div>
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 2 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(2)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">2</span>
												<h6 className="m-0">Custom Software Development</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapseTwo" className={activeItem == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600">
												Getting started is simple! Download the app from the App Store or Google Play Store, create an account using your email or social media login, and start making video calls instantly.
											</p>
										</div>
									</div>
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 3 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(3)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">3</span>
												<h6 className="m-0">Software Outsourcing Services</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapseThree" className={activeItem == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600">
												Getting started is simple! Download the app from the App Store or Google Play Store, create an account using your email or social media login, and start making video calls instantly.
											</p>
										</div>
									</div>
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 4 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(4)} data-bs-toggle="collapse" >
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">4</span>
												<h6 className="m-0">Software Product Development</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapsefour" className={activeItem == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600">
												Getting started is simple! Download the app from the App Store or Google Play Store, create an account using your email or social media login, and start making video calls instantly.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6 px-lg-6 mt-lg-0 mt-8">
								<Link href="#" className="d-flex flex-column flex-md-row align-items-center mb-6 hover-up">
									<img className="rounded-3 w-100 w-md-auto" src="/assets/imgs/features-6/img-1.png" alt="infinia" />
									<div className="content mt-md-0 mt-4 ms-5">
										<h6 className="mb-2">Cloud Migration Services</h6>
										<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
									</div>
								</Link>
								<Link href="#" className="d-flex flex-column flex-md-row align-items-center mb-6 hover-up">
									<img className="rounded-3 w-100 w-md-auto" src="/assets/imgs/features-6/img-2.png" alt="infinia" />
									<div className="content mt-md-0 mt-4 ms-5">
										<h6 className="mb-2">Mobile App Development</h6>
										<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
									</div>
								</Link>
								<Link href="#" className="d-flex flex-column flex-md-row align-items-center mb-6 hover-up">
									<img className="rounded-3 w-100 w-md-auto" src="/assets/imgs/features-6/img-3.png" alt="infinia" />
									<div className="content mt-md-0 mt-4 ms-5">
										<h6 className="mb-2">UI/UX Design Teaching</h6>
										<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
									</div>
								</Link>
							</div>
						</div>
					</div>
					<div className="position-absolute top-0 start-50 translate-middle-x z-0">
						<img src="/assets/imgs/service-2/bg-line.png" alt="infinia" />
					</div>
					<div className="rotate-center ellipse-rotate-success position-absolute z-1" />
					<div className="rotate-center-rev ellipse-rotate-primary position-absolute z-1" />
				</section>
				{/*Features 5*/}
				<section className="section-feature-5">
					<div className="container-fluid position-relative section-padding bg-1">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-5">
									<div className="photo-description position-relative  rounded-4">
										<img className="rounded-4 border border-2 border-white position-relative z-1" src="/assets/imgs/features-5/img-1.png" alt="infinia" />
										<div className="box-gradient-1 ms-lg-8 position-absolute bottom-0 start-0 bg-linear-1 rounded-4 z-0" />
									</div>
								</div>
								<div className="col-lg-6 offset-lg-1 mt-lg-0 mt-5">
									<h4 className="ds-4 fw-regular">All that's necessary <br /> for <span className="fw-bold" data-aos="fade-zoom-in" data-aos-delay={200}>effective team <br className="d-none d-lg-inline" /> effort.</span></h4>
									<p className="fs-5">Provide your team with top-tier group mentoring programs and exceptional professional benefits.</p>
									<Link href="#" className="btn btn-outline-secondary hover-up bg-transparent mt-5" data-aos="fade-zoom-in" data-aos-delay={200}>
										Explore Now
										<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path className="stroke-dark" d="M17.25 15.25V6.75H8.75" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											<path className="stroke-dark" d="M17 7L6.75 17.25" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</Link>
								</div>
							</div>
							<div className="row py-90">
								<div className="col-lg-10 px-lg-0 mx-lg-auto d-lg-flex justify-content-lg-between">
									<Link href="#" className="px-4 py-3 bg-white hover-up rounded-pill text-500 fs-5 text-nowrap d-inline-block mb-lg-0 mb-3" data-aos="fade-zoom-in" data-aos-delay={0}>Team Messaging</Link>
									<Link href="#" className="px-4 py-3 bg-white hover-up rounded-pill text-500 fs-5 text-nowrap d-inline-block mb-lg-0 mb-3" data-aos="fade-zoom-in" data-aos-delay={100}>4K Video</Link>
									<Link href="#" className="px-4 py-3 bg-white hover-up rounded-pill text-500 fs-5 text-nowrap d-inline-block mb-lg-0 mb-3" data-aos="fade-zoom-in" data-aos-delay={200}>Ultimate Collaboration</Link>
									<Link href="#" className="px-4 py-3 bg-white hover-up rounded-pill text-500 fs-5 text-nowrap d-inline-block mb-lg-0 mb-3" data-aos="fade-zoom-in" data-aos-delay={300}>Unified Communications</Link>
									<Link href="#" className="px-4 py-3 bg-white hover-up rounded-pill text-500 fs-5 text-nowrap d-inline-block mb-lg-0 mb-3" data-aos="fade-zoom-in" data-aos-delay={400}>Advanced Meeting</Link>
								</div>
							</div>
							<div className="row align-items-start pb-5 pt-lg-5 pt-0">
								<div className="col-lg-5 order-2 order-lg-1 mt-lg-0 mt-10 pt-lg-0 pt-5">
									<h4 className="ds-4 fw-regular">Experience the <br /> <span className="fw-bold" data-aos="fade-zoom-in" data-aos-delay={200}>cutting-edge <br /></span>capabilities</h4>
									<p className="fs-5">Provide your team with top-tier group mentoring programs and exceptional professional benefits.</p>
									<Link href="#" className="btn btn-outline-secondary hover-up bg-transparent mt-5" data-aos="fade-zoom-in" data-aos-delay={300}>
										Explore Now
										<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path className="stroke-dark" d="M17.25 15.25V6.75H8.75" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											<path className="stroke-dark" d="M17 7L6.75 17.25" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</Link>
								</div>
								<div className="col-lg-6 offset-lg-1 order-1 order-lg-2 mt-5 text-lg-end text-center">
									<div className="photo-description position-relative rounded-4 d-inline-block">
										<img className="rounded-4 border border-2 border-white position-relative z-1" src="/assets/imgs/features-5/img-2.png" alt="infinia" />
										<div className="position-absolute top-50 start-50 translate-middle z-0">
											<div className="box-gradient-2 position-relative bg-linear-1 rounded-4 z-0">
											</div>
										</div>
										<img className="position-absolute top-100 start-0 d-none d-md-block translate-middle rounded-4 border border-2 border-white position-relative z-1" src="/assets/imgs/features-5/img-3.png" alt="infinia" data-aos="zoom-in" data-aos-delay={100} />
									</div>
								</div>
							</div>
							<div className="row pt-lg-150 pt-8 text-center d-none d-md-block">
								<div className="col-lg-10 col mx-lg-auto">
									<p className="text-500">Compatible with all operating systems and browsers in the world</p>
									<div className="compatible-group bg-white p-5 mt-5 rounded-4 d-md-flex justify-content-between">
										<div className="compatible hover-up">
											<img src="/assets/imgs/features-5/icon-1.png" alt="infinia" />
											<p className="text-900 mt-3 mb-0">MacOs</p>
										</div>
										<div className="compatible hover-up">
											<img src="/assets/imgs/features-5/icon-2.png" alt="infinia" />
											<p className="text-900 mt-3 mb-0">Windows</p>
										</div>
										<div className="compatible hover-up">
											<img src="/assets/imgs/features-5/icon-3.png" alt="infinia" />
											<p className="text-900 mt-3 mb-0">Linux</p>
										</div>
										<div className="compatible hover-up">
											<img src="/assets/imgs/features-5/icon-4.png" alt="infinia" />
											<p className="text-900 mt-3 mb-0">Android</p>
										</div>
										<div className="compatible hover-up">
											<img src="/assets/imgs/features-5/icon-5.png" alt="infinia" />
											<p className="text-900 mt-3 mb-0">iOS</p>
										</div>
										<div className="compatible hover-up">
											<img src="/assets/imgs/features-5/icon-6.png" alt="infinia" />
											<p className="text-900 mt-3 mb-0">Firefox</p>
										</div>
										<div className="compatible hover-up">
											<img src="/assets/imgs/features-5/icon-7.png" alt="infinia" />
											<p className="text-900 mt-3 mb-0">Chrome</p>
										</div>
										<div className="compatible hover-up">
											<img src="/assets/imgs/features-5/icon-8.png" alt="infinia" />
											<p className="text-900 mt-3 mb-0">Safari</p>
										</div>
										<div className="compatible hover-up">
											<img src="/assets/imgs/features-5/icon-9.png" alt="infinia" />
											<p className="text-900 mt-3 mb-0">Opera</p>
										</div>
										<div className="compatible hover-up">
											<img src="/assets/imgs/features-5/icon-10.png" alt="infinia" />
											<p className="text-900 mt-3 mb-0">Opera</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Contact 3*/}
				<section className="section-contact-3 position-relative section-padding fix">
					<div className="container position-relative z-1">
						<div className="text-center">
							<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
								<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Get in Tourch</span>
							</div>
							<h3 className="ds-3 mt-3 mb-3">Contact Our Team</h3>
							<p className="fs-5">
								We are a comprehensive service agency with specialists prepared to assist. <br />
								We will contact you within 24 hours.
							</p>
						</div>
						<div className="row mt-8">
							<div className="col-lg-10 mx-lg-auto">
								<div className="row">
									<div className="col-lg-6 ps-lg-0 pb-5 pb-lg-0">
										<h4>Leave a message</h4>
										<form action="#">
											<div className="row mt-5">
												<div className="col-md-6">
													<div className="input-group d-flex align-items-center">
														<div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
															<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
																<path className="stroke-dark" d="M12 11.25C13.7949 11.25 15.25 9.79493 15.25 8C15.25 6.20507 13.7949 4.75 12 4.75C10.2051 4.75 8.75 6.20507 8.75 8C8.75 9.79493 10.2051 11.25 12 11.25Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path className="stroke-dark" d="M6.84723 19.25H17.1522C18.2941 19.25 19.1737 18.2681 18.6405 17.2584C17.856 15.7731 16.0677 14 11.9997 14C7.93174 14 6.1434 15.7731 5.35897 17.2584C4.8257 18.2681 5.70531 19.25 6.84723 19.25Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</div>
														<input type="text" className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0" name="name" placeholder="Your name *" aria-label="username" />
													</div>
												</div>
												<div className="col-md-6">
													<div className="input-group d-flex align-items-center mt-4 mt-md-0">
														<div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
															<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
																<path className="stroke-dark" d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</div>
														<input type="text" className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0" name="name" placeholder="info@" aria-label="email" />
													</div>
												</div>
												<div className="col-md-6">
													<div className="input-group d-flex align-items-center mt-4">
														<div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
															<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
																<path className="stroke-dark" d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path className="stroke-dark" d="M5.5 6.5L12 12.25L18.5 6.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</div>
														<input type="text" className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0" name="name" placeholder="Phone" aria-label="phone" />
													</div>
												</div>
												<div className="col-md-6">
													<div className="input-group d-flex align-items-center mt-4">
														<div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
															<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
																<path className="stroke-dark" d="M6.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25V9.75001L12 4.75L4.75 9.75001V17.25C4.75 18.3546 5.64544 19.25 6.75 19.25Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path className="stroke-dark" d="M9.75 15.749C9.75 14.6444 10.6455 13.749 11.75 13.749H12.25C13.3546 13.749 14.25 14.6444 14.25 15.749V19.249H9.75V15.749Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</div>
														<input type="text" className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0" name="name" placeholder="Subject" aria-label="subject" />
													</div>
												</div>
												<div className="col-12">
													<div className="input-group d-flex mt-4">
														<div className="icon-input pt-2 ps-3 align-items-start border border-end-0 rounded-1 rounded-end-0">
															<svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
																<path className="stroke-dark" d="M5.5 2.14844H3C1.89543 2.14844 1 3.04387 1 4.14844V14.6484C1 15.753 1.89543 16.6484 3 16.6484H13.5C14.6046 16.6484 15.5 15.753 15.5 14.6484V12.1484" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path className="stroke-dark" d="M17.3285 1.20344L16.4448 0.319749C16.0185 -0.106583 15.3248 -0.106583 14.8984 0.319749L7.82915 7.38907C7.76373 7.45449 7.71914 7.53782 7.70096 7.62854L7.2591 9.83772C7.22839 9.99137 7.27647 10.1502 7.38729 10.261C7.47605 10.3498 7.59561 10.3983 7.71864 10.3983C7.74923 10.3983 7.77997 10.3953 7.81053 10.3892L10.0197 9.94732C10.1104 9.92917 10.1938 9.88455 10.2592 9.81913L17.3285 2.74984C17.3285 2.74984 17.3286 2.74984 17.3286 2.74981C17.7549 2.32351 17.7549 1.6298 17.3285 1.20344ZM9.69678 9.05607L8.31606 9.33225L8.59224 7.95153L14.3461 2.19754L15.4507 3.30214L9.69678 9.05607ZM16.6658 2.0871L16.1135 2.6394L15.0089 1.53479L15.5612 0.982524C15.6221 0.921601 15.7212 0.92157 15.7821 0.982493L16.6658 1.86618C16.7267 1.92707 16.7267 2.0262 16.6658 2.0871Z" fill="black" />
															</svg>
														</div>
														<textarea className="form-control border border-start-0 ms-0 rounded-start-0 rounded-1 pb-10" name="name" placeholder="Describe Your Project in Short" aria-label="With textarea" />
													</div>
												</div>
												<h6 className="mt-4 mb-4">Services</h6>
												<div className="d-flex align-items-center">
													<div>
														<div className="form-check mb-2">
															<input className="form-check-input" type="checkbox" id="flexCheckChecked" defaultChecked />
															<label className="form-check-label text-900 fw-bold" htmlFor="flexCheckChecked"> Research planning </label>
														</div>
														<div className="form-check mb-2 me-3">
															<input className="form-check-input" type="checkbox" id="flexCheckDefault1" />
															<label className="form-check-label text-900 fw-bold" htmlFor="flexCheckDefault1"> Finance Advisory </label>
														</div>
														<div className="form-check mb-2 me-3">
															<input className="form-check-input" type="checkbox" id="flexCheckDefault2" />
															<label className="form-check-label text-900 fw-bold" htmlFor="flexCheckDefault2"> Business promotion </label>
														</div>
													</div>
													<div className="ms-8">
														<div className="form-check mb-2 me-3">
															<input className="form-check-input" type="checkbox" id="flexCheckDefault3" />
															<label className="form-check-label text-900 fw-bold" htmlFor="flexCheckDefault3"> Business Consultancy </label>
														</div>
														<div className="form-check mb-2">
															<input className="form-check-input" type="checkbox" id="flexCheckDefault4" defaultChecked />
															<label className="form-check-label text-900 fw-bold" htmlFor="flexCheckDefault4"> Finance Advisory </label>
														</div>
														<div className="form-check mb-2 me-3">
															<input className="form-check-input" type="checkbox" id="flexCheckDefault5" />
															<label className="form-check-label text-900 fw-bold" htmlFor="flexCheckDefault5"> Business promotion </label>
														</div>
													</div>
												</div>
												<div className="col-12">
													<button type="submit" className="btn bg-primary text-white hover-up mt-4">
														Send Message
														<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
															<path className="stroke-white" d="M21.1059 12.2562H0.5V11.7443H21.1059H22.313L21.4594 10.8907L17.0558 6.48705L17.4177 6.12508L23.2929 12.0002L17.4177 17.8754L17.0558 17.5134L21.4594 13.1098L22.313 12.2562H21.1059Z" fill="black" stroke="white" />
														</svg>
													</button>
												</div>
											</div>
										</form>
									</div>
									<div className="col-lg-6">
										<div className="ps-lg-6">
											<h6>Chat with us</h6>
											<p className="text-500">The support team is always available 24/7</p>
											<div className="d-flex mb-2">
												<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
													<g clipPath="url(#clip0_602_10655)">
														<path d="M15.0051 12.0403L13.9452 10.9803C13.656 10.6912 13.2563 10.5462 12.8494 10.5828C12.4421 10.6194 12.0749 10.833 11.8418 11.1689L11.4726 11.701C10.9704 11.6115 9.99908 11.3584 9.3201 10.6793C8.64084 10 8.38771 9.02824 8.29842 8.52687L8.8306 8.15761C9.16654 7.92449 9.38017 7.55719 9.41662 7.14992C9.45314 6.74265 9.30822 6.34328 9.01912 6.05422L7.9592 4.99429C7.53326 4.5684 6.89127 4.46675 6.36158 4.74121C5.43283 5.22238 4.82275 6.12433 4.64353 7.2809C4.35162 9.16523 5.22275 11.3883 6.91693 13.0825C8.39451 14.56 10.2742 15.4115 11.9808 15.4115C12.231 15.4115 12.4776 15.3932 12.7185 15.3559C13.8751 15.1768 14.777 14.5666 15.2582 13.6379C15.5326 13.1081 15.431 12.4661 15.0051 12.0403ZM14.1797 13.0791C13.7974 13.8172 13.0729 14.0719 12.5326 14.1556C11.0468 14.3857 9.17963 13.6274 7.77576 12.2236C6.37197 10.8198 5.61361 8.95265 5.84377 7.46683C5.92744 6.92644 6.1822 6.20207 6.92025 5.81965C6.94025 5.80933 6.96236 5.80429 6.98478 5.80429C7.02603 5.80429 7.06838 5.82129 7.10025 5.85312L8.16021 6.91308C8.20424 6.95719 8.20986 7.00726 8.20677 7.04152C8.20369 7.07582 8.18931 7.1241 8.13806 7.15965L7.30084 7.74058C7.12576 7.86207 7.02713 8.06652 7.04107 8.27918C7.04634 8.35949 7.18447 10.2614 8.46119 11.5381C9.73791 12.8148 11.6398 12.953 11.7201 12.9582C11.9326 12.9719 12.1372 12.8736 12.2587 12.6984L12.8397 11.8612C12.8752 11.81 12.9235 11.7956 12.9578 11.7925C12.9921 11.7894 13.0421 11.7951 13.0863 11.8391L14.1462 12.899C14.1954 12.9482 14.2092 13.0223 14.1797 13.0791Z" fill="#6B7280" />
														<path d="M17.0709 2.92906C15.1821 1.0402 12.6708 0 9.99959 0C7.32834 0 4.81709 1.0402 2.92826 2.92902C1.32291 4.53438 0.303771 6.65902 0.0584589 8.9116C-0.173455 11.0411 0.289357 13.2086 1.36311 15.046L0.320998 18.9352C0.264826 19.1447 0.324748 19.3684 0.478225 19.5218C0.631623 19.6752 0.855334 19.7351 1.06479 19.679L4.95393 18.6369C6.48143 19.5296 8.23725 20 10.0096 20C10.369 20 10.7292 19.9807 11.0883 19.9415C13.3409 19.6962 15.4656 18.6771 17.0709 17.0717C18.9598 15.1829 20 12.6716 20 10.0004C20 7.32922 18.9597 4.81789 17.0709 2.92906ZM16.2121 16.2128C13.3085 19.1164 8.84877 19.6323 5.36686 17.4677C5.26967 17.4073 5.15846 17.3761 5.04615 17.3761C4.99358 17.3761 4.94076 17.383 4.88901 17.3968L1.76647 18.2335L2.60319 15.111C2.64662 14.9488 2.62096 14.7758 2.53233 14.6332C0.3676 11.1511 0.883615 6.69141 3.78709 3.78789C7.21272 0.362344 12.7865 0.362344 16.2121 3.78789C19.6376 7.21344 19.6376 12.7873 16.2121 16.2128Z" fill="#6B7280" />
													</g>
													<defs>
														<clipPath>
															<rect width={20} height={20} fill="white" />
														</clipPath>
													</defs>
												</svg>
												<Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">Chat via Whatsapp</Link>
											</div>
											<div className="d-flex mb-2">
												<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
													<g clipPath="url(#clip0_602_10664)">
														<path d="M13.0462 10.4449C12.692 10.0905 12.2195 9.89537 11.7159 9.89537C11.2122 9.89537 10.7397 10.0906 10.3854 10.445L10.1182 10.7122C10.054 10.7765 9.96759 10.8118 9.87497 10.8118C9.78239 10.8118 9.69607 10.7765 9.63189 10.7123L7.79083 8.87127C7.65903 8.73943 7.65903 8.5167 7.79068 8.38506L8.05833 8.1176C8.79185 7.38396 8.79181 6.19037 8.05829 5.45682L7.52341 4.92205C7.16907 4.56768 6.69657 4.37256 6.19302 4.37256C5.68946 4.37256 5.217 4.56772 4.86294 4.92186L4.78997 4.99475C3.94462 5.84025 3.63767 7.09893 3.92571 8.539C4.1965 9.89299 4.97044 11.2635 6.10497 12.3983C7.53482 13.8279 9.35622 14.6815 10.9772 14.6816H10.9776C11.9999 14.6816 12.8752 14.3468 13.5092 13.7128L13.5813 13.6406C14.3147 12.9071 14.3148 11.7135 13.5812 10.9799L13.0462 10.4449ZM12.7521 12.8123L12.6801 12.8845C12.2711 13.2935 11.6824 13.5097 10.9775 13.5097C10.9775 13.5097 10.9773 13.5097 10.9773 13.5097C9.66017 13.5096 8.14849 12.7843 6.93357 11.5696C5.96083 10.5967 5.30071 9.43877 5.07478 8.30916C4.86607 7.26561 5.05923 6.38279 5.61841 5.82354L5.69138 5.75064C5.82435 5.61764 6.00251 5.54439 6.19302 5.54439C6.38357 5.54439 6.56173 5.61764 6.69478 5.75068L7.22966 6.28545C7.5063 6.56209 7.5063 7.01225 7.22978 7.28885L6.96212 7.55635C6.3713 8.14729 6.3713 9.10889 6.9622 9.6999L8.80325 11.5409C9.08876 11.8265 9.46939 11.9837 9.87505 11.9837C10.2806 11.9837 10.6613 11.8265 10.947 11.5408L11.2142 11.2735C11.3472 11.1405 11.5254 11.0672 11.7159 11.0672C11.9065 11.0672 12.0846 11.1405 12.2176 11.2735L12.7526 11.8085C13.0292 12.0851 13.0292 12.5353 12.7521 12.8123Z" fill="#6B7280" />
														<path d="M9.77246 8.15234C10.0912 8.15234 10.3505 8.4116 10.3505 8.73027C10.3505 9.05387 10.6128 9.31621 10.9364 9.31621C11.26 9.31621 11.5223 9.05387 11.5223 8.73027C11.5223 7.76543 10.7373 6.98047 9.77246 6.98047C9.44887 6.98047 9.18652 7.24281 9.18652 7.56641C9.18652 7.89 9.44883 8.15234 9.77246 8.15234Z" fill="#6B7280" />
														<path d="M9.77246 5.82426C10.5486 5.82426 11.2783 6.12652 11.8271 6.67535C12.3759 7.22422 12.6782 7.95395 12.6781 8.73012C12.6781 9.05371 12.9404 9.31605 13.264 9.31605C13.5876 9.31605 13.85 9.05371 13.85 8.73012C13.85 7.64094 13.4259 6.61687 12.6557 5.84672C11.8856 5.07652 10.8616 4.65234 9.77246 4.65234C9.44887 4.65234 9.18652 4.91469 9.18652 5.23828C9.18652 5.56188 9.44883 5.82426 9.77246 5.82426Z" fill="#6B7280" />
														<path d="M9.77246 2.32471C9.44887 2.32471 9.18652 2.58705 9.18652 2.91064C9.18652 3.23424 9.44887 3.49658 9.77246 3.49658C12.6582 3.49658 15.006 5.84439 15.006 8.73018C15.006 9.05377 15.2684 9.31611 15.592 9.31611C15.9155 9.31611 16.1779 9.05377 16.1779 8.73018C16.1779 5.19818 13.3044 2.32471 9.77246 2.32471Z" fill="#6B7280" />
														<path d="M17.2174 1.99879C15.9284 0.709844 14.2211 0 12.4099 0H7.58953C5.7784 0 4.07105 0.709844 2.78207 1.99879C1.49305 3.28777 0.783203 4.99504 0.783203 6.80617V10.2C0.783203 11.5888 1.2034 12.9271 1.99836 14.0704C2.6966 15.0744 3.63684 15.865 4.73434 16.375V18.6055C4.73434 19.9328 5.57172 20 5.73957 20C6.10824 20 6.47406 19.7891 6.82688 19.3732L8.83422 17.0062H12.41C14.2212 17.0062 15.9285 16.2963 17.2174 15.0074C18.5064 13.7184 19.2162 12.0112 19.2162 10.2V6.80621C19.2162 4.99504 18.5064 3.28773 17.2174 1.99879ZM18.0443 10.2C18.0443 13.3067 15.5167 15.8343 12.4099 15.8343H8.56281C8.39066 15.8343 8.22727 15.91 8.11594 16.0412L5.93316 18.6152C5.9241 18.6259 5.91523 18.6361 5.90664 18.6458C5.90637 18.6329 5.90621 18.6195 5.90621 18.6055V15.9892C5.90621 15.7487 5.75926 15.5326 5.53555 15.4442C3.39395 14.5982 1.95508 12.4907 1.95508 10.1999V6.80613C1.95508 3.69941 4.48266 1.17188 7.58953 1.17188H12.4099C15.5167 1.17188 18.0443 3.69941 18.0443 6.80617V10.2Z" fill="#6B7280" />
													</g>
													<defs>
														<clipPath>
															<rect width={20} height={20} fill="white" />
														</clipPath>
													</defs>
												</svg>
												<Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">Chat via Viber</Link>
											</div>
											<div className="d-flex mb-2 mb-5">
												<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
													<path fillRule="evenodd" clipRule="evenodd" d="M10.0003 1.4585C14.962 1.4585 18.9587 5.1185 18.9587 9.5835C18.9587 14.0485 14.962 17.7085 10.0003 17.7085C8.83533 17.7085 7.72199 17.506 6.70199 17.1393L4.02949 18.476C3.82199 18.5793 3.57449 18.5602 3.38533 18.4243C3.19699 18.2893 3.09949 18.0602 3.13116 17.8302L3.50283 15.176C1.97449 13.716 1.04199 11.746 1.04199 9.5835C1.04199 5.1185 5.03866 1.4585 10.0003 1.4585ZM10.0003 2.7085C5.76283 2.7085 2.29199 5.77016 2.29199 9.5835C2.29199 11.4977 3.17199 13.226 4.58033 14.4693C4.73783 14.6077 4.81533 14.816 4.78616 15.0243L4.53366 16.826L6.38783 15.8993C6.54616 15.8202 6.73116 15.8118 6.89616 15.8768C7.84699 16.251 8.89699 16.4585 10.0003 16.4585C14.2378 16.4585 17.7087 13.3968 17.7087 9.5835C17.7087 5.77016 14.2378 2.7085 10.0003 2.7085Z" fill="#6B7280" />
													<path fillRule="evenodd" clipRule="evenodd" d="M6.15499 12.227C6.05915 12.302 5.92249 12.2961 5.83332 12.2145C5.74332 12.132 5.72582 11.997 5.79165 11.8945C6.54999 10.7136 7.66999 8.97195 8.29165 8.00445C8.41249 7.81695 8.60415 7.68529 8.82249 7.63945C9.04165 7.59362 9.26915 7.63779 9.45499 7.76195C9.89749 8.05695 10.4525 8.42695 10.8275 8.67695C11.0867 8.84945 11.4217 8.86362 11.6942 8.71195C12.2842 8.38445 13.3392 7.79779 14.0983 7.37612C14.1992 7.32029 14.3258 7.34029 14.4042 7.42529C14.4817 7.51029 14.4917 7.63695 14.4283 7.73362C13.7667 8.72529 12.6933 10.3353 12.0983 11.2278C11.855 11.5928 11.3717 11.707 10.9917 11.4895C10.4542 11.182 9.71415 10.7595 9.23415 10.4853C8.94165 10.3178 8.57582 10.3436 8.30915 10.5511C7.78332 10.9603 6.88415 11.6603 6.15499 12.227Z" fill="#6B7280" />
												</svg>
												<Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">Chat via Messager</Link>
											</div>
											<h6>Send us an email</h6>
											<p className="text-500">Our team will respond promptly to your inquiries</p>
											<div className="d-flex mb-2">
												<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
													<path d="M18.2422 2.96875H1.75781C0.786602 2.96875 0 3.76023 0 4.72656V15.2734C0 16.2455 0.792383 17.0312 1.75781 17.0312H18.2422C19.2053 17.0312 20 16.2488 20 15.2734V4.72656C20 3.76195 19.2165 2.96875 18.2422 2.96875ZM17.996 4.14062C17.6369 4.49785 11.4564 10.6458 11.243 10.8581C10.9109 11.1901 10.4695 11.3729 10 11.3729C9.53047 11.3729 9.08906 11.1901 8.75594 10.857C8.61242 10.7142 2.50012 4.63414 2.00398 4.14062H17.996ZM1.17188 15.0349V4.96582L6.23586 10.0031L1.17188 15.0349ZM2.00473 15.8594L7.06672 10.8296L7.9284 11.6867C8.48176 12.2401 9.21746 12.5448 10 12.5448C10.7825 12.5448 11.5182 12.2401 12.0705 11.6878L12.9333 10.8296L17.9953 15.8594H2.00473ZM18.8281 15.0349L13.7641 10.0031L18.8281 4.96582V15.0349Z" fill="#6B7280" />
												</svg>
												<Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">support@infinia.com</Link>
											</div>
											<div className="d-flex mb-2 mb-5">
												<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
													<path d="M18.2422 2.96875H1.75781C0.786602 2.96875 0 3.76023 0 4.72656V15.2734C0 16.2455 0.792383 17.0312 1.75781 17.0312H18.2422C19.2053 17.0312 20 16.2488 20 15.2734V4.72656C20 3.76195 19.2165 2.96875 18.2422 2.96875ZM17.996 4.14062C17.6369 4.49785 11.4564 10.6458 11.243 10.8581C10.9109 11.1901 10.4695 11.3729 10 11.3729C9.53047 11.3729 9.08906 11.1901 8.75594 10.857C8.61242 10.7142 2.50012 4.63414 2.00398 4.14062H17.996ZM1.17188 15.0349V4.96582L6.23586 10.0031L1.17188 15.0349ZM2.00473 15.8594L7.06672 10.8296L7.9284 11.6867C8.48176 12.2401 9.21746 12.5448 10 12.5448C10.7825 12.5448 11.5182 12.2401 12.0705 11.6878L12.9333 10.8296L17.9953 15.8594H2.00473ZM18.8281 15.0349L13.7641 10.0031L18.8281 4.96582V15.0349Z" fill="#6B7280" />
												</svg>
												<Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">sale@infinia.com</Link>
											</div>
											<h6>For more inquiry</h6>
											<p className="text-500">Reach out for immediate assistance</p>
											<div className="d-flex mb-2">
												<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
													<g clipPath="url(#clip0_602_10701)">
														<path d="M15.8064 12.3892C15.397 11.9628 14.9031 11.7349 14.3797 11.7349C13.8605 11.7349 13.3624 11.9586 12.936 12.385L11.6022 13.7146C11.4924 13.6555 11.3827 13.6006 11.2771 13.5458C11.1252 13.4698 10.9816 13.398 10.8592 13.3221C9.60978 12.5285 8.47429 11.4943 7.38524 10.1562C6.8576 9.48926 6.50302 8.92785 6.24553 8.358C6.59166 8.04141 6.91247 7.71216 7.22484 7.39558C7.34303 7.27739 7.46122 7.15497 7.57941 7.03678C8.46585 6.15034 8.46585 5.00219 7.57941 4.11576L6.42704 2.96338C6.29619 2.83253 6.16111 2.69745 6.03447 2.56238C5.78121 2.30067 5.51527 2.03051 5.2409 1.77725C4.83145 1.37202 4.3418 1.15674 3.82682 1.15674C3.31184 1.15674 2.81375 1.37202 2.39163 1.77725C2.38741 1.78147 2.38741 1.78147 2.38319 1.78569L0.948004 3.23354C0.407699 3.77384 0.099556 4.43234 0.0320178 5.19637C-0.0692895 6.42894 0.293728 7.57709 0.572323 8.32845C1.25615 10.1731 2.27766 11.8826 3.80149 13.7146C5.65035 15.9223 7.87489 17.6656 10.416 18.894C11.3869 19.3541 12.6828 19.8986 14.1306 19.9914C14.2193 19.9957 14.3121 19.9999 14.3965 19.9999C15.3716 19.9999 16.1905 19.6495 16.8321 18.9531C16.8364 18.9446 16.8448 18.9404 16.849 18.9319C17.0685 18.666 17.3218 18.4254 17.5877 18.1679C17.7692 17.9949 17.955 17.8133 18.1365 17.6234C18.5544 17.1886 18.7739 16.6821 18.7739 16.1629C18.7739 15.6395 18.5501 15.1371 18.1238 14.715L15.8064 12.3892ZM17.3176 16.834C17.3134 16.834 17.3134 16.8383 17.3176 16.834C17.153 17.0113 16.9841 17.1717 16.8026 17.349C16.5282 17.6107 16.2496 17.8851 15.9879 18.1932C15.5616 18.6491 15.0593 18.8644 14.4008 18.8644C14.3375 18.8644 14.2699 18.8644 14.2066 18.8602C12.9529 18.78 11.7879 18.2903 10.9141 17.8724C8.52495 16.7158 6.42704 15.0738 4.68371 12.9928C3.2443 11.2579 2.28188 9.65389 1.64449 7.93166C1.25193 6.8806 1.10841 6.0617 1.17172 5.28923C1.21394 4.79536 1.40389 4.38591 1.75424 4.03555L3.19365 2.59615C3.40049 2.40197 3.61998 2.29645 3.83526 2.29645C4.10119 2.29645 4.31647 2.45685 4.45155 2.59192C4.45577 2.59615 4.45999 2.60037 4.46421 2.60459C4.7217 2.84519 4.96653 3.09424 5.22402 3.36017C5.35487 3.49525 5.48995 3.63032 5.62502 3.76962L6.77739 4.92199C7.22483 5.36943 7.22483 5.7831 6.77739 6.23055C6.65498 6.35296 6.53679 6.47537 6.41438 6.59356C6.0598 6.95658 5.72211 7.29427 5.35487 7.62352C5.34643 7.63196 5.33799 7.63618 5.33377 7.64463C4.97075 8.00764 5.03829 8.36222 5.11427 8.60282C5.11849 8.61549 5.12271 8.62815 5.12693 8.64081C5.42663 9.36685 5.84874 10.0507 6.49036 10.8654L6.49458 10.8696C7.65961 12.3048 8.88796 13.4234 10.2429 14.2803C10.416 14.39 10.5933 14.4786 10.7621 14.5631C10.9141 14.639 11.0576 14.7108 11.18 14.7868C11.1969 14.7952 11.2138 14.8079 11.2307 14.8163C11.3742 14.8881 11.5093 14.9219 11.6486 14.9219C11.9989 14.9219 12.2184 14.7024 12.2902 14.6306L13.7338 13.187C13.8773 13.0435 14.1053 12.8704 14.3712 12.8704C14.6329 12.8704 14.8482 13.035 14.9791 13.1785C14.9833 13.1828 14.9833 13.1828 14.9875 13.187L17.3134 15.5128C17.7481 15.9434 17.7481 16.3866 17.3176 16.834Z" fill="#6B7280" />
														<path d="M10.8089 4.7574C11.9148 4.94313 12.9195 5.46656 13.7215 6.26857C14.5235 7.07059 15.0427 8.07522 15.2327 9.18116C15.2791 9.45975 15.5197 9.65392 15.7941 9.65392C15.8278 9.65392 15.8574 9.6497 15.8912 9.64548C16.2035 9.59483 16.4104 9.29935 16.3597 8.98698C16.1318 7.64888 15.4986 6.42898 14.5319 5.46233C13.5653 4.49569 12.3454 3.86252 11.0073 3.63458C10.6949 3.58393 10.4037 3.79076 10.3488 4.09891C10.2939 4.40705 10.4965 4.70675 10.8089 4.7574Z" fill="#6B7280" />
														<path d="M19.9766 8.82242C19.6009 6.61899 18.5625 4.61395 16.9669 3.01836C15.3714 1.42277 13.3663 0.384369 11.1629 0.00868772C10.8547 -0.0461871 10.5635 0.16487 10.5086 0.473013C10.4579 0.785377 10.6648 1.07664 10.9771 1.13151C12.9442 1.46498 14.7382 2.39785 16.1649 3.82037C17.5917 5.24712 18.5203 7.0411 18.8538 9.00815C18.9002 9.28675 19.1408 9.48092 19.4152 9.48092C19.449 9.48092 19.4785 9.4767 19.5123 9.47248C19.8204 9.42604 20.0315 9.13056 19.9766 8.82242Z" fill="#6B7280" />
													</g>
													<defs>
														<clipPath>
															<rect width={20} height={20} fill="white" />
														</clipPath>
													</defs>
												</svg>
												<Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">+01 (24) 568 900</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="rotate-center ellipse-rotate-success position-absolute z-0" />
					<div className="rotate-center-rev ellipse-rotate-primary position-absolute z-0" />
					<div className="rotate-center-rev ellipse-rotate-info position-absolute z-0" />
				</section>

			</Layout>
		</>
	)
}