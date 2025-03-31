import React from "react";
import styles from "./WhyRecruit.module.css";
import { ArrowRight, Feather } from 'lucide-react';
import card from "/src/assets/card.png";
import "./blog.css";

const WhyRecruit = () => {
  const [articles, setArticles] = React.useState([
    {
      Heading: "Revolutionizing Patient Care: The Role of AI-Powered Transcription Tools"
    },
    {
      Heading: "How HIPAA Compliance Ensures Security in Digital Healthcare Solutions"
    },
    {
      Heading: "Top 5 Benefits of Integrating AI into Medical Practices."
    }
  ]);

  const [isLoading, setIsLoading] = React.useState(false);
  const blogGridRef = React.useRef(null);

  const loadMoreArticles = () => {
    setIsLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      setArticles(prev => [...prev, ...articles]);
      setIsLoading(false);
    }, 500);
  };

  const handleScroll = () => {
    if (isLoading || !blogGridRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = blogGridRef.current;
    const scrollEnd = scrollWidth - scrollLeft - clientWidth;

    if (scrollEnd < 100) {
      loadMoreArticles();
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.frame}>
        <div className={styles.container}>
          <div className={styles.mobileHeaderContainer}>
            <div className={styles.mobileHeaderContent}>
              <span className={styles.mobileSubTitle}>Why Recruit?</span>
              <h1 className={styles.mobileMainTitle}>
                Smarter Hiring, Stronger Teams
              </h1>
            </div>
          </div>
          <div className={styles.leftSection}></div>
          <div className={styles.rightSection}>
            <div className={styles.desktopHeader}>
              <span className={styles.subTitle}>Why Recruit?</span>
              <h1 className={styles.mainTitle}>
                Smarter Hiring, Stronger Teams
              </h1>
            </div>
            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.icon}>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.82798 3.428C9.9512 3.01513 10.2045 2.6531 10.5501 2.39579C10.8957 2.13849 11.3151 1.99967 11.746 2H20.558C20.8811 2.00012 21.1993 2.07851 21.4855 2.22846C21.7716 2.3784 22.0172 2.59544 22.2012 2.86101C22.3852 3.12658 22.5021 3.43277 22.542 3.75338C22.5818 4.07399 22.5434 4.39948 22.43 4.702L20.444 10H24.504C24.786 10.0003 25.0623 10.0802 25.3011 10.2304C25.5398 10.3806 25.7314 10.5951 25.8537 10.8492C25.9761 11.1034 26.0243 11.3869 25.9929 11.6672C25.9615 11.9475 25.8516 12.2133 25.676 12.434L12.462 29.034C10.754 31.18 7.33798 29.41 8.10598 26.778L10.666 18H7.49998C7.26621 18.0004 7.03559 17.9461 6.82652 17.8415C6.61745 17.7369 6.43572 17.5849 6.29583 17.3976C6.15594 17.2103 6.06176 16.9929 6.02081 16.7628C5.97986 16.5326 5.99327 16.2961 6.05998 16.072L9.82798 3.428ZM20.56 4H11.746L8.16998 16H12C12.1552 16 12.3083 16.0361 12.4472 16.1056C12.586 16.175 12.7068 16.2758 12.8 16.4C12.8931 16.5242 12.9561 16.6684 12.9838 16.8211C13.0116 16.9739 13.0034 17.131 12.96 17.28L10.026 27.338C9.98628 27.4514 9.99056 27.5756 10.038 27.686C10.0891 27.7888 10.1728 27.8718 10.276 27.922C10.39 27.982 10.508 27.996 10.604 27.98C10.7224 27.9559 10.8274 27.8881 10.898 27.79L23.466 12H19C18.8383 12 18.6791 11.9608 18.5359 11.8858C18.3927 11.8108 18.2698 11.7021 18.1778 11.5692C18.0858 11.4363 18.0273 11.2831 18.0075 11.1226C17.9877 10.9622 18.0071 10.7993 18.064 10.648L20.56 4Z"
                      fill="#8A01DA"
                    />
                  </svg>
                </div>
                <div className={styles.featureText}>
                  <h3>Fastest hiring process</h3>
                  <p>Find job-ready candidates in seconds.</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.icon}>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.5693 24.608C21.9693 24.8 22.4667 25.2973 22.708 25.6986C22.788 26.2586 23.188 24.0946 25.1453 22.812M28.6667 24.0013C28.6667 25.4158 28.1048 26.7723 27.1046 27.7725C26.1044 28.7727 24.7478 29.3346 23.3333 29.3346C21.9188 29.3346 20.5623 28.7727 19.5621 27.7725C18.5619 26.7723 18 25.4158 18 24.0013C18 22.5868 18.5619 21.2303 19.5621 20.2301C20.5623 19.2299 21.9188 18.668 23.3333 18.668C24.7478 18.668 26.1044 19.2299 27.1046 20.2301C28.1048 21.2303 28.6667 22.5868 28.6667 24.0013Z"
                      stroke="#8A01DA"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.6773 18.6681C16.1501 18.6681 17.344 17.4741 17.344 16.0014C17.344 14.5286 16.1501 13.3347 14.6773 13.3347C13.2046 13.3347 12.0107 14.5286 12.0107 16.0014C12.0107 17.4741 13.2046 18.6681 14.6773 18.6681Z"
                      stroke="#8A01DA"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.0107 24.0014C11.2773 22.8014 12.344 22.1347 14.7107 22.0014M26.0107 15.3347C26.0107 14.2681 26.044 11.0014 25.8773 9.66806C25.7773 8.56806 25.4773 7.06806 24.1107 6.2014C23.2773 5.76806 22.4773 5.36806 18.644 5.33473M10.6107 5.33473C7.744 5.33473 5.51067 5.56806 4.41067 6.93473C3.47734 8.21073 3.53201 9.66806 3.44401 10.1347C3.24401 12.6347 3.37734 21.3681 3.37734 22.8347C3.37734 24.3681 3.27734 27.4841 5.37734 28.5347C7.17734 29.4347 9.044 29.3014 15.3773 29.3347M14.4773 2.66806C13.6773 2.66806 13.0107 2.66806 12.344 3.36806C11.7773 3.9014 11.864 4.37206 11.644 5.2014C11.332 6.36806 11.1773 6.98406 11.6107 7.46806C12.008 7.98806 12.676 7.99073 13.2667 7.99206H13.2773C13.844 8.03206 15.748 8.0134 16.3107 7.99206C16.9133 7.96806 17.4 7.93473 17.8107 7.4014C18.1773 6.9254 17.96 6.13206 17.744 5.3014C17.5307 4.48273 17.6107 4.06806 17.044 3.36806C16.244 2.56806 15.2773 2.66806 14.4773 2.66806Z"
                      stroke="#8A01DA"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className={styles.featureText}>
                  <h3>Pre-verified talent</h3>
                  <p>
                    No more unqualified applicants. Every candidate is
                    skills-tested.
                  </p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.icon}>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.5693 24.608C21.9693 24.8 22.4667 25.2973 22.708 25.6986C22.788 26.2586 23.188 24.0946 25.1453 22.812M28.6667 24.0013C28.6667 25.4158 28.1048 26.7723 27.1046 27.7725C26.1044 28.7727 24.7478 29.3346 23.3333 29.3346C21.9188 29.3346 20.5623 28.7727 19.5621 27.7725C18.5619 26.7723 18 25.4158 18 24.0013C18 22.5868 18.5619 21.2303 19.5621 20.2301C20.5623 19.2299 21.9188 18.668 23.3333 18.668C24.7478 18.668 26.1044 19.2299 27.1046 20.2301C28.1048 21.2303 28.6667 22.5868 28.6667 24.0013Z"
                      stroke="#8A01DA"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.6773 18.6681C16.1501 18.6681 17.344 17.4741 17.344 16.0014C17.344 14.5286 16.1501 13.3347 14.6773 13.3347C13.2046 13.3347 12.0107 14.5286 12.0107 16.0014C12.0107 17.4741 13.2046 18.6681 14.6773 18.6681Z"
                      stroke="#8A01DA"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.0107 24.0014C11.2773 22.8014 12.344 22.1347 14.7107 22.0014M26.0107 15.3347C26.0107 14.2681 26.044 11.0014 25.8773 9.66806C25.7773 8.56806 25.4773 7.06806 24.1107 6.2014C23.2773 5.76806 22.4773 5.36806 18.644 5.33473M10.6107 5.33473C7.744 5.33473 5.51067 5.56806 4.41067 6.93473C3.47734 8.21073 3.53201 9.66806 3.44401 10.1347C3.24401 12.6347 3.37734 21.3681 3.37734 22.8347C3.37734 24.3681 3.27734 27.4841 5.37734 28.5347C7.17734 29.4347 9.044 29.3014 15.3773 29.3347M14.4773 2.66806C13.6773 2.66806 13.0107 2.66806 12.344 3.36806C11.7773 3.9014 11.864 4.37206 11.644 5.2014C11.332 6.36806 11.1773 6.98406 11.6107 7.46806C12.008 7.98806 12.676 7.99073 13.2667 7.99206H13.2773C13.844 8.03206 15.748 8.0134 16.3107 7.99206C16.9133 7.96806 17.4 7.93473 17.8107 7.4014C18.1773 6.9254 17.96 6.13206 17.744 5.3014C17.5307 4.48273 17.6107 4.06806 17.044 3.36806C16.244 2.56806 15.2773 2.66806 14.4773 2.66806Z"
                      stroke="#8A01DA"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className={styles.featureText}>
                  <h3>End-to-end interview assistance</h3>
                  <p>We handle screening & tech interviews for you.</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.icon}>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 20.0001V22.4001C4 23.8934 4 24.6401 4.29067 25.2107C4.54633 25.7125 4.95426 26.1204 5.456 26.3761C6.02533 26.6667 6.772 26.6667 8.26267 26.6667H28M4 20.0001V6.66675M4 20.0001L9.13733 15.7201L9.14267 15.7161C10.072 14.9414 10.5373 14.5534 11.0427 14.3961C11.6388 14.2097 12.2815 14.2384 12.8587 14.4774C13.348 14.6814 13.776 15.1094 14.6347 15.9681L14.6427 15.9761C15.5147 16.8481 15.9507 17.2854 16.448 17.4867C17.0366 17.7266 17.6915 17.7484 18.2947 17.5481C18.8053 17.3774 19.272 16.9694 20.2053 16.1534L28 9.33341"
                      stroke="#8A01DA"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className={styles.featureText}>
                  <h3>Market insights at a glance</h3>
                  <p>Get salary trends and hiring recommendations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="blog-section">
        <h2>Stay Updated with the Latest in Healthcare Technology</h2>
        <div 
          className="blog-grid"
          ref={blogGridRef}
          onScroll={handleScroll}
        >
          {articles.map((item, index) => (
            <div key={`${item.Heading}-${index}`} className="blog-card">
              <div className="blog-content">
                <img src={card} alt="Blog" />
                <h3 className="blog-title">{item.Heading}</h3>
                <a href="#" className="read-more">
                  Read Full Article
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
       <div className={styles.ctaSection}>
        <h2>Ready to Experience </h2>
        <h2>the Fastest Hiring & Job Matching?</h2>
        <button className={styles.ctaButton}>
          Get started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="14"
            viewBox="0 0 19 14"
            fill="none"
            className="arrow-forward"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.75 7.00009C0.75 6.80118 0.829017 6.61041 0.969669 6.46976C1.11032 6.32911 1.30109 6.25009 1.5 6.25009L15.69 6.25009L10.97 1.53009C10.8963 1.46143 10.8372 1.37863 10.7962 1.28663C10.7552 1.19463 10.7332 1.09532 10.7314 0.994612C10.7296 0.893909 10.7482 0.793882 10.7859 0.700493C10.8236 0.607105 10.8797 0.522271 10.951 0.451052C11.0222 0.379834 11.107 0.323688 11.2004 0.285967C11.2938 0.248247 11.3938 0.229723 11.4945 0.231499C11.5952 0.233276 11.6945 0.255317 11.7865 0.296309C11.8785 0.337301 11.9613 0.396403 12.03 0.470089L18.03 6.47009C18.1704 6.61072 18.2493 6.80134 18.2493 7.00009C18.2493 7.19884 18.1704 7.38946 18.03 7.53009L12.03 13.5301C11.9613 13.6038 11.8785 13.6629 11.7865 13.7039C11.6945 13.7449 11.5952 13.7669 11.4945 13.7687C11.3938 13.7705 11.2938 13.7519 11.2004 13.7142C11.107 13.6765 11.0222 13.6203 10.951 13.5491C10.8797 13.4779 10.8236 13.3931 10.7859 13.2997C10.7482 13.2063 10.7296 13.1063 10.7314 13.0056C10.7332 12.9049 10.7552 12.8056 10.7962 12.7136C10.8372 12.6216 10.8963 12.5388 10.97 12.4701L15.69 7.75009L1.5 7.75009C1.30109 7.75009 1.11032 7.67107 0.96967 7.53042C0.829017 7.38977 0.75 7.199 0.75 7.00009Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default WhyRecruit;
