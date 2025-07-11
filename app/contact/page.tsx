"use client";
import Layout from "@/components/layout/Layout";
import CountUp from "react-countup";
import { useState, useEffect } from "react";
import { fileUpload } from "@/lib/fileUpload";
import { MultiSelect } from "react-multi-select-component"; // Import the named export

export default function PageContact1() {
  const [formData, setFormData] = useState<{
    contest_id: string;
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    image: string;
    address: string;
    gender: string;
    category: string[];
  }>({
    contest_id: "",
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    image: "",
    address: "",
    gender: "",
    category: [],
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  type Contest = { _id: string; title: string };
  const [contests, setContests] = useState<Contest[]>([]);

  // Fetch contests on component mount
  useEffect(() => {
    const fetchContests = async () => {
      try {
        const response = await fetch("/api/contests");
        const data = await response.json();
        setContests(data);
      } catch (error) {
        console.error("Error fetching contests:", error);
      }
    };
    fetchContests();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleMultiSelectChange = (
    selected: { label: string; value: string }[]
  ) => {
    setFormData({
      ...formData,
      category: selected.map((option) => option.value),
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");
    try {
      let imageUrl = "";
      if (selectedFile) {
        const uploadedUrls = await fileUpload([selectedFile]);
        if (uploadedUrls.length > 0) {
          imageUrl = uploadedUrls[0];
        } else {
          setStatus("Failed to upload image. Please try again.");
          setIsSubmitting(false);
          return;
        }
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          image: imageUrl,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          contest_id: "",
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          image: "",
          address: "",
          gender: "",
          category: [],
        });
        setSelectedFile(null);
      } else {
        setStatus(
          result.message || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const categoryOptions = [
    { label: "All", value: "All" },
    { label: "Singer", value: "Singer" },
    { label: "Songwriter", value: "Songwriter" },
    { label: "Music Producer", value: "Music Producer" },
    { label: "Actor", value: "Actor" },
    { label: "Comedy", value: "Comedy" },
  ];
  return (
    <>
      <Layout>
        {/* Contact 4 */}
        <section className="section-contact-4 bg-4 section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="pe-lg-8 me-lg-auto mb-5 mb-lg-0">
                  <h6 className="text-primary">Reach Out</h6>
                  <h3 className="ds-3">We look forward to hearing from you.</h3>
                  <p className="fs-5">
                    Are you interested in Partnership, brand Promotion,
                    strategic visibility and support for youth empowerment, or
                    want to participate in our Reality TV show. Reach us right
                    here
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="rounded-4 border border-5 border-white zoom-img mb-5">
                  <img
                    className="rounded-4 w-100"
                    src="/assets/imgs/cta-4/family.png"
                    alt="spotlight"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="rounded-4 border border-5 border-white zoom-img mb-5 mb-lg-0">
                  <img
                    className="rounded-4 w-100"
                    src="/assets/imgs/cta-4/winner1.jpg"
                    alt="spotlight"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="h-80 bg-primary rounded-4 d-flex align-items-center justify-content-center border position-relative border-5 fix border-white py-5">
                  <div className="position-relative z-1 fix">
                    <div className="d-flex justify-content-center">
                      <img
                        src="/assets/imgs/hero-1/avatar-1.png"
                        alt="spotlight"
                      />
                      <img
                        className="avt-hero"
                        src="/assets/imgs/hero-1/avatar-2.png"
                        alt="spotlight"
                      />
                      <img
                        className="avt-hero"
                        src="/assets/imgs/hero-1/avatar-3.png"
                        alt="spotlight"
                      />
                    </div>
                    <h1 className="count fw-black text-white my-0">
                      +<span className="odometer" />
                      <CountUp end={500} enableScrollSpy={true} />k
                    </h1>
                    <p className="fs-5 text-100-keep mb-0">
                      Users Active / Month
                    </p>
                  </div>
                  <img
                    className="position-absolute top-50 start-50 translate-middle z-0"
                    src="/assets/imgs/contact-4/img-bg-1.png"
                    alt="spotlight"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="rounded-4 border border-5 border-white zoom-img mt-5 mt-lg-0">
                  <img
                    className="rounded-4 w-92"
                    src="/assets/imgs/cta-4/music_production.jpg"
                    alt="spotlight"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact 5 */}
        <section className="section-contact-5 section-padding">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
                <div className="feature-item mb-5 mb-lg-0 pe-5 hover-up">
                  <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                    <div className="icon">
                      <img
                        src="/assets/imgs/contact-5/icon-1.svg"
                        alt="spotlight"
                      />
                    </div>
                  </div>
                  <h6>Brand Sponsorship</h6>
                  <p className="text-500">
                    Email{" "}
                    <span className="text-900">promotion@spotlightng.com</span>{" "}
                    For Brand positioning, product activation and integration{" "}
                    <br />
                    Talk to us for maximum audience reach
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
                <div className="feature-item mb-5 mb-lg-0 pe-5 hover-up">
                  <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                    <div className="icon">
                      <img
                        src="/assets/imgs/contact-5/icon-2.svg"
                        alt="spotlight"
                      />
                    </div>
                  </div>
                  <h6>Call Us</h6>
                  <p className="text-500">
                    Call us to speak to a member of our team. <br />
                    (+234) 815 9491618 <br />
                    (+234) 9036522434
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
                <div className="feature-item mb-5 mb-lg-0 pe-5 hover-up">
                  <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                    <div className="icon">
                      <img
                        src="/assets/imgs/contact-5/icon-3.svg"
                        alt="spotlight"
                      />
                    </div>
                  </div>
                  <h6>Business Partnership</h6>
                  <p className="text-500">
                    Contact the business development department about
                    cooperation <br />
                    (+234) 815 9491618
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
                <div className="feature-item mb-5 mb-lg-0 pe-5 hover-up">
                  <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                    <div className="icon">
                      <img
                        src="/assets/imgs/contact-5/icon-4.svg"
                        alt="spotlight"
                      />
                    </div>
                  </div>
                  <h6>Contest Participation</h6>
                  <p className="text-500">
                    Get discovered, Register Now <br />
                    (+234) 9036522434 <br />
                    Send Full Name, Age, Recent Quality Photo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact 1 */}
        <section className="section-contact-1 position-relative section-padding">
          <div className="container position-relative z-1">
            <div className="row">
              <div className="col-lg-6">
                <h5 className="ds-5 mt-3 mb-3 text-white">Contact Us</h5>
                <span className="fs-5 fw-medium text-white">
                  Please let us know if you have a question, want to leave{" "}
                  <br className="d-none d-lg-block" />a comment, or would like
                  further information about <br className="d-none d-lg-block" />
                  spotlight System
                </span>
                <div className="d-flex pt-6 pb-3 align-items-center">
                  <div className="bg-white-keep icon-flip position-relative icon-shape icon-xxl rounded-3">
                    <div className="icon">
                      <img
                        src="/assets/imgs/contact-1/icon-1.svg"
                        alt="spotlight"
                      />
                    </div>
                  </div>
                  <div className="ps-5">
                    <h6 className="text-white">Visit the Knowledge Base</h6>
                    <p className="text-white mb-0">
                      Browse customer support articles and step-by-
                      <br />
                      step instructions for specific features.
                    </p>
                  </div>
                </div>
                <div className="d-flex pt-3 pb-3 align-items-center">
                  <div className="bg-white-keep icon-flip position-relative icon-shape icon-xxl rounded-3">
                    <div className="icon">
                      <img
                        src="/assets/imgs/contact-1/icon-2.svg"
                        alt="spotlight"
                      />
                    </div>
                  </div>
                  <div className="ps-5">
                    <h6 className="text-white">Watch Reality show Videos</h6>
                    <p className="text-white mb-0">
                      Watch our video for visual walkthroughs <br />
                      on how to use our features.
                    </p>
                  </div>
                </div>
                <div className="d-flex pt-3 pb-3 align-items-center">
                  <div className="bg-white-keep icon-flip position-relative icon-shape icon-xxl rounded-3">
                    <div className="icon">
                      <img
                        src="/assets/imgs/contact-1/icon-3.svg"
                        alt="spotlight"
                      />
                    </div>
                  </div>
                  <div className="ps-5">
                    <h6 className="text-white">Visit the Knowledge Base</h6>
                    <p className="text-white mb-0">
                      Let us talk about how we can help your <br />
                      enterprise.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 ps-lg-0 pt-5 pt-lg-0">
                <div className="position-relative">
                  <div className="position-relative z-2 p-3 p-md-5 p-lg-8 rounded-3 bg-primary">
                    <h3 className="text-white">Get in touch</h3>
                    <p className="text-white">
                      Do you want to know more or contact our sales department?
                    </p>
                    <form onSubmit={handleSubmit}>
                      <div className="row mt-5">
                        <div className="col-md-12">
                          <div className="input-group d-flex align-items-center">
                            <div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M12 11.25C13.7949 11.25 15.25 9.79493 15.25 8C15.25 6.20507 13.7949 4.75 12 4.75C10.2051 4.75 8.75 6.20507 8.75 8C8.75 9.79493 10.2051 11.25 12 11.25Z"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M6.84723 19.25H17.1522C18.2941 19.25 19.1737 18.2681 18.6405 17.2584C17.856 15.7731 16.0677 14 11.9997 14C7.93174 14 6.1434 15.7731 5.35897 17.2584C4.8257 18.2681 5.70531 19.25 6.84723 19.25Z"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <select
                              className="form-select ms-0 border rounded-2 rounded-start-0 border-start-0"
                              style={{
                                backgroundColor: "#6D4DF2",
                                color: "#fff",
                              }}
                              name="contest_id"
                              value={formData.contest_id}
                              onChange={handleChange}
                              required
                            >
                              <option value="">Select a Contest *</option>
                              {contests.map((contest) => (
                                <option key={contest._id} value={contest._id}>
                                  {contest.title}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-group d-flex align-items-center mt-4">
                            <div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M12 11.25C13.7949 11.25 15.25 9.79493 15.25 8C15.25 6.20507 13.7949 4.75 12 4.75C10.2051 4.75 8.75 6.20507 8.75 8C8.75 9.79493 10.2051 11.25 12 11.25Z"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M6.84723 19.25H17.1522C18.2941 19.25 19.1737 18.2681 18.6405 17.2584C17.856 15.7731 16.0677 14 11.9997 14C7.93174 14 6.1434 15.7731 5.35897 17.2584C4.8257 18.2681 5.70531 19.25 6.84723 19.25Z"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <input
                              type="text"
                              className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0"
                              name="name"
                              placeholder="Your name *"
                              aria-label="username"
                              value={formData.name}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-group d-flex align-items-center mt-4">
                            <div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M5.5 6.5L12 12.25L18.5 6.5"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <input
                              type="email"
                              className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0"
                              name="email"
                              placeholder="Your email *"
                              aria-label="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-group d-flex align-items-center mt-4">
                            <div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <input
                              type="tel"
                              className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0"
                              name="phone"
                              placeholder="Phone"
                              aria-label="phone"
                              value={formData.phone}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-group d-flex align-items-center mt-4">
                            <div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M6.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25V9.75001L12 4.75L4.75 9.75001V17.25C4.75 18.3546 5.64544 19.25 6.75 19.25Z"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M9.75 15.749C9.75 14.6444 10.6455 13.749 11.75 13.749H12.25C13.3546 13.749 14.25 14.6444 14.25 15.749V19.249H9.75V15.749Z"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <input
                              type="text"
                              className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0"
                              name="subject"
                              placeholder="Subject"
                              aria-label="subject"
                              value={formData.subject}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="input-group d-flex align-items-center mt-4">
                            <div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M6.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25V9.75001L12 4.75L4.75 9.75001V17.25C4.75 18.3546 5.64544 19.25 6.75 19.25Z"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M9.75 15.749C9.75 14.6444 10.6455 13.749 11.75 13.749H12.25C13.3546 13.749 14.25 14.6444 14.25 15.749V19.249H9.75V15.749Z"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <input
                              type="text"
                              className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0"
                              name="address"
                              placeholder="Your address"
                              aria-label="address"
                              value={formData.address}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="input-group d-flex align-items-center mt-4">
                            <div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M12 11.25C13.7949 11.25 15.25 9.79493 15.25 8C15.25 6.20507 13.7949 4.75 12 4.75C10.2051 4.75 8.75 6.20507 8.75 8C8.75 9.79493 10.2051 11.25 12 11.25Z"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M6.84723 19.25H17.1522C18.2941 19.25 19.1737 18.2681 18.6405 17.2584C17.856 15.7731 16.0677 14 11.9997 14C7.93174 14 6.1434 15.7731 5.35897 17.2584C4.8257 18.2681 5.70531 19.25 6.84723 19.25Z"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <select
                              className="form-select ms-0 border rounded-2 rounded-start-0 border-start-0"
                              style={{
                                backgroundColor: "#6D4DF2",
                                color: "#fff",
                              }} // Match bg-primary and ensure readable text
                              name="gender"
                              value={formData.gender}
                              onChange={handleChange}
                            >
                              <option value="">Select Gender</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Other">Other</option>
                              <option value="Prefer not to say">
                                Prefer not to say
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="input-group d-flex align-items-center mt-4">
                            <MultiSelect
                              options={categoryOptions}
                              value={categoryOptions.filter((option) =>
                                formData.category.includes(option.value)
                              )}
                              onChange={handleMultiSelectChange}
                              labelledBy="Select Category"
                              className="w-100"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="input-group d-flex align-items-center mt-4">
                            <div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3"></div>
                            <input
                              type="file"
                              className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0"
                              name="image"
                              accept="image/*"
                              onChange={handleFileChange}
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="input-group d-flex mt-4">
                            <div className="icon-input pt-2 ps-3 align-items-start border border-end-0 rounded-1 rounded-end-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={18}
                                height={18}
                                viewBox="0 0 18 18"
                                fill="none"
                              >
                                <path
                                  d="M5.5 2.14844H3C1.89543 2.14844 1 3.04387 1 4.14844V14.6484C1 15.753 1.89543 16.6484 3 16.6484H13.5C14.6046 16.6484 15.5 15.753 15.5 14.6484V12.1484"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M17.3285 1.20344L16.4448 0.319749C16.0185 -0.106583 15.3248 -0.106583 14.8984 0.319749L7.82915 7.38907C7.76373 7.45449 7.71914 7.53782 7.70096 7.62854L7.2591 9.83772C7.22839 9.99137 7.27647 10.1502 7.38729 10.261C7.47605 10.3498 7.59561 10.3983 7.71864 10.3983C7.74923 10.3983 7.77997 10.3953 7.81053 10.3892L10.0197 9.94732C10.1104 9.92917 10.1938 9.88455 10.2592 9.81913L17.3285 2.74984C17.3285 2.74984 17.3286 2.74984 17.3286 2.74981C17.7549 2.32351 17.7549 1.6298 17.3285 1.20344ZM9.69678 9.05607L8.31606 9.33225L8.59224 7.95153L14.3461 2.19754L15.4507 3.30214L9.69678 9.05607ZM16.6658 2.0871L16.1135 2.6394L15.0089 1.53479L15.5612 0.982524C15.6221 0.921601 15.7212 0.92157 15.7821 0.982493L16.6658 1.86618C16.7267 1.92707 16.7267 2.0262 16.6658 2.0871Z"
                                  fill="white"
                                />
                              </svg>
                            </div>
                            <textarea
                              className="form-control border border-start-0 ms-0 rounded-start-0 rounded-1 pb-10"
                              name="message"
                              placeholder="Describe Your Project in Short"
                              aria-label="With textarea"
                              value={formData.message}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <button
                            type="submit"
                            className="btn bg-white-keep text-primary hover-up mt-3"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Submitting..." : "Submit"}
                            <svg
                              className="ms-2"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M21.1059 12.2562H0.5V11.7443H21.1059H22.313L21.4594 10.8907L17.0558 6.48705L7.4177 6.12508L23.2929 12.0002L17.4177 17.8754L17.0558 17.5134L21.4594 13.1098L22.313 12.2562H21.1059Z"
                                fill="black"
                                stroke="#6D4DF2"
                              />
                            </svg>
                          </button>
                          {status && (
                            <p
                              className={`mt-3 ${
                                status.includes("successfully")
                                  ? "text-success"
                                  : "text-danger"
                              }`}
                            >
                              {status}
                            </p>
                          )}
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="z-0 bg-primary-dark rectangle-bg z-1 rounded-3" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
