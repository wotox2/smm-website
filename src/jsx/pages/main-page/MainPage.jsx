import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    EffectCards,
    EffectCoverflow,
    Autoplay,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import FiledSet from '../../cutsome-components/Fieldset/FiledSet';






// Animatons
import astronaut from "../../../animations/main-page/data.json"
import rocketLottie from "../../../animations/main-page/rocket.json"
import cloudes from "../../../animations/main-page/cloudes.json"
import worldMap from "../../../animations/main-page/world-map.json"
import blobBackground from "../../../animations/main-page/blobs-background.json"
import support from "../../../animations/main-page/support.json"
import totalOrders from "../../../animations/main-page/total-orders.json"
import totalService from "../../../animations/main-page/total-services.json"
import services from "../../../animations/main-page/services.json"
import ourActivitiesAnimation from "../../../animations/main-page/our_activities.json"
import introTwoBackgroundSecond from "../../../animations/main-page/intro-2-background-2.json"
import introTwoAnimationBackground from "../../../animations/main-page/intro-2-background.json"
import introBackgroundWave from "../../../animations/main-page/intro-background-wave.json"
import aboutUs from "../../../animations/main-page/about-us.json"
import customersReviews from "../../../animations/main-page/main-page-comments.json"
import customersReviewsWaveBackground from "../../../animations/main-page/comments-background-wave.json"
import faqs from "../../../animations/main-page/home-page-faqs.json"
import faqsQuestion from "../../../animations/main-page/question.json"
import faqsBackground from "../../../animations/main-page/main-page-faqs-background.json"
import faqsFormQuestion from "../../../animations/main-page/main-page-faqs-wave.json"
import FAQsAccordion from "../../cutsome-components/accordion/FAQsAccordion"



// intro
import firstIcon from "../../../images/main-page/intro/1.svg"
import secondIcon from "../../../images/main-page/intro/2.svg"
import thirdIcon from "../../../images/main-page/intro/3.svg"
import forthIcon from "../../../images/main-page/intro/4.svg"



// Service Step
import stepOneAnimation from "../../../animations/main-page/main-page-step-1.json"
import stepTwoAnimation from "../../../animations/main-page/main-page-step-2.json"
import stepThreeAnimation from "../../../animations/main-page/main-page-step-3.json"
import stepFourAnimation from "../../../animations/main-page/main-page-step-4.json"
import stepFiveAnimation from "../../../animations/main-page/main-page-step-5.json"
import stepArrowAnimation from "../../../animations/main-page/main-page-steps-arrow.json"



// intro -2 
import { Icon } from "@iconify/react"
import itemOne from "../../../images/main-page/intro-2/svg/1.svg"
import itemTwo from "../../../images/main-page/intro-2/svg/2.svg"
import itemThree from "../../../images/main-page/intro-2/svg/3.svg"
import itemFour from "../../../images/main-page/intro-2/svg/4.svg"
import CompanyStaticItem from "../../../jsx/pages/main-page/components/company-statics/CompanyStaticsItem"


// Customers Reviews 
import cChar from "../../../images/main-page/customers-reviews/first-part/char.svg"
import cBackground from "../../../images/main-page/customers-reviews/first-part/background.svg"
import { Progress } from 'react-sweet-progress';
import { useEffect, useRef, useState } from 'react';



// About us
import posterBackground from "../../../images/main-page/poster/background.svg"
import Lottie from 'react-lottie-player';


// Blog 
import blogsAnimation from "../../../animations/main-page/blog-animation.json"
import MaxLineText from '../../cutsome-components/Text/MaxLineText';




const MainPage = () => {



    faqs.fr = 10
    faqsBackground.fr = 5
    customersReviews.fr = 5
    faqsQuestion.fr = 5
    faqsFormQuestion.fr = 30

    stepOneAnimation.fr = 20
    stepTwoAnimation.fr = 20
    stepThreeAnimation.fr = 20
    stepFourAnimation.fr = 20
    stepFiveAnimation.fr = 20
    stepArrowAnimation.fr = 2

    const [rightSwiper, setRightSwiper] = useState(null)



    const getRandomColors = () => {
        let all = [];
        for (let i = 0; i < 2; i++) {
            const red = Math.random() * 250;
            const green = Math.random() * 250;
            const blue = Math.random() * 250;
            all.push({ red, green, blue })
        }
        return all

    }


    const authFormSubmites = (e) => {
        e.preventDefault();
    }


    const companyStaticsItems = [
        {
            svg: itemOne,
            title: "Users",
            value: "129478",
            description: "With an incredible count of 129,478 users, our platform has become a thriving community where individuals connect, engage, and explore a world of possibilities.",
            animation: worldMap
        },
        {
            svg: itemTwo,
            title: "Orders",
            value: "56000",
            description: "A staggering 56,000 orders have been placed, showcasing the trust our customers have in us. Each order signifies a unique story of satisfaction and reliability.",
            animation: totalOrders

        },
        {
            svg: itemThree,
            title: "Tickets",
            value: "32400",
            description: "As we prioritize customer support, our resolved ticket count stands at an impressive 32,400. This signifies not just a number, but the countless meaningful interactions we've had with our valued clients.",
            animation: support

        },
        {
            svg: itemFour,
            title: "Services",
            value: "240",
            description: "Our dedication to excellence shines through the provision of 240 top-notch services. Each service represents our unwavering commitment to delivering quality solutions.",
            animation: totalService
        }
    ];

    const [currentSelected, setCurrentSelected] = useState(companyStaticsItems[0])


    const faqsLeftList = [
        {
            "question": "What is social media marketing (SMM)?",
            "answer": "Social media marketing, often abbreviated as SMM, is an essential component of digital marketing strategies. It involves leveraging various social media platforms to create and share content, engage with users, and achieve specific marketing goals. By utilizing platforms like Facebook, Instagram, Twitter, LinkedIn, and Pinterest, businesses can establish a strong online presence, connect with their target audience, and drive traffic to their websites.",
            "isExpanded": true
        },
        {
            "question": "Why is SMM important for my business?",
            "answer": "Social media marketing is crucial for businesses of all sizes because it provides a direct channel to interact with potential and existing customers. Through SMM, you can build brand awareness, foster customer loyalty, and influence purchasing decisions. As platforms continue to evolve, SMM enables you to adapt to the changing preferences of your audience and stay ahead of competitors.",
            "isExpanded": false
        },
        {
            "question": "Which social media platforms should I focus on?",
            "answer": "The choice of social media platforms depends on your specific business goals and target audience. For instance, if you're a B2B company looking to establish industry authority, LinkedIn might be a primary platform. If your business revolves around visual content, Instagram and Pinterest could be valuable. An in-depth analysis of your audience demographics and behavior will guide you in selecting the platforms that best align with your objectives.",
            "isExpanded": false
        }
    ]

    const faqsRightList = [

        {
            "question": "Do you provide analytics and performance reports?",
            "answer": "Absolutely. We understand the importance of data-driven decision-making. We continuously monitor and analyze key performance indicators (KPIs) such as engagement rates, reach, click-through rates, and conversions. Our detailed reports offer insights into campaign effectiveness, allowing us to fine-tune strategies for optimal results.",
            isExpanded: true
        },
        {
            "question": "How do I begin working with your SMM services?",
            "answer": "Initiating our SMM services is simple. Reach out to us through our website or email, and we'll schedule a consultation. During this discussion, we'll delve into your business goals, target audience, and existing online presence. With this information, we'll develop a tailored SMM strategy that aligns with your vision.",
            "isExpanded": false
        },
        {
            "question": "What's the typical timeline for seeing results with SMM?",
            "answer": "The timeline for noticeable results varies based on factors like your industry, competition, current online presence, and the aggressiveness of the strategy. While some improvements might become apparent within a few weeks, substantial and sustained growth often takes a few months of consistent effort and optimization.",
            "isExpanded": false
        }
    ]


    const blogsItems = [
        {
            "title": "The Power of Social Media Engagement",
            "date": "2023-08-15",
            "image": "https://images.unsplash.com/photo-1607703703520-bb638e84caf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvY2lhbCUyMG1lZGlhJTIwbWFya2V0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            "excerpt": "In today's digital age, harnessing the power of social media engagement has become a cornerstone of successful brand strategies. The ability to connect with your audience on platforms like Facebook, Instagram, Twitter, and more can greatly influence brand loyalty and even conversion rates. By engaging with your followers through comments, likes, shares, and interactive content, you're not only building a community around your brand but also establishing a two-way communication channel that humanizes your business. This blog post delves deep into the strategies and tactics that can help you effectively leverage social media engagement to its fullest potential. Whether it's responding promptly to customer inquiries or creating content that resonates emotionally, understanding the nuances of engagement can truly set your brand apart in the competitive digital landscape. [Read more](https://example.com/blog/power-of-social-media-engagement)"
        },
        {
            "title": "Crafting Compelling Content for Instagram",
            "date": "2023-07-25",
            "image": "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29jaWFsJTIwbWVkaWElMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            "excerpt": "Instagram's visual-centric nature demands content that doesn't just catch the eye but also tells a story. Crafting compelling content for this platform goes beyond the superficial, focusing on creating posts that convey a narrative and evoke emotions. From stunning imagery to attention-grabbing captions, each element plays a role in capturing and"
        },
        {
            "title": "Unlocking the Potential of LinkedIn for B2B",
            "date": "2023-06-10",
            "image": "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29jaWFsJTIwbWVkaWElMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            "excerpt": "LinkedIn isn't just a platform for professional networking; it's also a goldmine for B2B opportunities. This blog post explores how businesses can strategically utilize LinkedIn to build industry authority, forge meaningful connections with fellow professionals, and generate valuable leads. The B2B landscape thrives on trust and credibility, and LinkedIn provides the perfect setting to establish these qualities. From optimizing your company page to creating and sharing insightful content, this guide uncovers the methods that can help your brand unlock the true potential of LinkedIn in the B2B realm. [Read more](https://example.com/blog/unlocking-potential-of-linkedin-for-b2b)"
        },
        {
            "title": "Mastering Twitter: Strategies for Effective Marketing",
            "date": "2023-05-02",
            "image": "https://images.unsplash.com/photo-1491951931722-5a446214b4e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNvY2lhbCUyMG1lZGlhJTIwbWFya2V0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            "excerpt": "With its concise yet impactful format, Twitter offers a unique platform for effective marketing. Mastering this platform involves more than just succinct messages; it requires an understanding of the platform's dynamics, audience engagement tactics, and trend utilization. This blog post delves into strategies that empower brands to make the most out of Twitter's 280-character limit. From hashtag campaigns to fostering real-time interactions, every tweet can become an opportunity to amplify your brand's message and presence. Explore how to navigate the fast-paced world of Twitter marketing and create a meaningful impact in a compact space. [Read more](https://example.com/blog/mastering-twitter-strategies-for-marketing)"
        },

    ]


    const handleFAQMessage = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
    }








    return (
        <main className="main-page">


            <div className="main-background">
                <Lottie
                    className='blob'
                    animationData={blobBackground}
                    play
                    loop
                />

            </div>

            <section className="poster">
                <div className="left">
                    <div className="content-container">
                        <h1>
                            WE MAKE BEST <br />
                            IN SOCIAL <br />
                            MARKETING
                        </h1>

                        <form
                            className="fields"
                            action='#'
                            onSubmit={authFormSubmites}>
                            <div className="form-fields">
                                <FiledSet
                                    fieldClassName={"main-page-auth-fields"}
                                    legend={
                                        {
                                            svg: <Icon icon="ic:baseline-alternate-email" />,
                                            title: "Email"
                                        }}
                                    inputType={"text"}
                                    inputName={"email"} />
                                <FiledSet
                                    fieldClassName={"main-page-auth-fields"}
                                    legend={
                                        {
                                            svg: <Icon icon="mdi:password" />,
                                            title: "Password"
                                        }}
                                    inputType={"password"}
                                    inputName={"password"} />
                            </div>
                            <div className="form-options">
                                <label >
                                    <input type="checkbox" name="remember" />
                                    <span>Remember Me</span>
                                </label>
                                <button>
                                    Forgot Password ?
                                </button>
                            </div>
                            <div className="form-buttons">
                                <button>
                                    <Icon icon="mdi:register" />
                                    <span>
                                        Sign Up
                                    </span>
                                </button>
                                <button>
                                    <Icon icon="clarity:login-solid" />
                                    <span>
                                        Login
                                    </span>
                                </button>
                            </div>


                        </form>
                    </div>

                </div>
                <div className="right">
                    <Lottie
                        className='animation'
                        animationData={astronaut}
                        play
                        loop
                    />
                    {/* <img src={person} alt="" /> */}
                </div>
                <img className='background' src={posterBackground} />

            </section>

            <section className="why-choose-us">
                <div className="start">
                    <h1>
                        Why
                        <span className='accent-color'>Choose Us ?</span>
                    </h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                </div>

                <marquee behavior="" direction="left">
                    <div className="roads">

                        <div className="item">
                            <div className="item-header">
                                <img src={firstIcon} />
                            </div>
                            <div className="item-body">
                                <h2>Cheapest <span>Prices</span></h2>
                                <p>We are proud to offer the fastest SMM services! Our team works hard to ensure that your order is processed and delivered as quickly as possible!</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item-header">
                                <img src={secondIcon} />
                            </div>
                            <div className="item-body">
                                <h2>
                                    Fastest <span>Delivery</span>
                                </h2>
                                <p>We are proud to offer the fastest SMM services! Our team works hard to ensure that your order is processed and delivered as quickly as possible!</p>
                            </div>
                        </div>

                        <div className="item">

                            <div className="item-header">
                                <img src={thirdIcon} />

                            </div>
                            <div className="item-body">
                                <h2>
                                    Multiple <span>Payment
                                    </span>  Methods</h2>
                                <p>Multiple payment options are accepted, so you can choose the one that is most convenient for you.</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item-header">
                                <img src={forthIcon} />


                            </div>
                            <div className="item-body">
                                <h2>Highest <span>Prices</span> Quality</h2>
                                <p>Our services are highest quality and 100% guaranteed because our priority is Customer Satisfaction just work with us once and you will enjoy!</p>
                            </div>
                        </div>
                    </div>
                </marquee>

                <div className='desktop' >
                    <div className="roads">

                        <div className="item">
                            <div className="item-header">
                                <img src={firstIcon} />
                            </div>
                            <div className="item-body">
                                <h2>Cheapest <span>Prices</span></h2>
                                <p>We are proud to offer the fastest SMM services! Our team works hard to ensure that your order is processed and delivered as quickly as possible!</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item-header">
                                <img src={secondIcon} />
                            </div>
                            <div className="item-body">
                                <h2>
                                    Fastest <span>Delivery</span>
                                </h2>
                                <p>We are proud to offer the fastest SMM services! Our team works hard to ensure that your order is processed and delivered as quickly as possible!</p>
                            </div>
                        </div>

                        <div className="item">

                            <div className="item-header">
                                <img src={thirdIcon} />

                            </div>
                            <div className="item-body">
                                <h2>
                                    Multiple <span>Payment
                                    </span>  Methods</h2>
                                <p>Multiple payment options are accepted, so you can choose the one that is most convenient for you.</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item-header">
                                <img src={forthIcon} />


                            </div>
                            <div className="item-body">
                                <h2>Highest <span>Prices</span> Quality</h2>
                                <p>Our services are highest quality and 100% guaranteed because our priority is Customer Satisfaction just work with us once and you will enjoy!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="background">
                    <Lottie
                        className='animation'
                        animationData={rocketLottie}
                        play
                        loop
                    />
                    <Lottie
                        className='cloude'
                        animationData={cloudes}
                        play
                        loop
                    />
                </div>
            </section>

            <section className="introduction">

               

                <div className="intro-background">

                    <Lottie
                        className='blubs'
                        animationData={introTwoAnimationBackground}
                        play
                        loop />


                </div>

                <div className="intro-background-2">

                    <Lottie
                        className='wave'
                        animationData={introBackgroundWave}
                        play
                        loop />


                </div>
                <div className="our-services">
                    <div className="header">
                        <h1>Our Services</h1>
                        <p>
                            Connect with your audience and reach new heights with
                            our expert social media marketing solutions.
                        </p>
                    </div>
                    <div className="body">
                        <div className="background">
                            <Lottie
                                className='animation'
                                animationData={services}
                                play
                                loop />
                        </div>

                        <Swiper
                            modules={[
                                Navigation,
                                Pagination,
                                Scrollbar,
                                A11y,
                                EffectCoverflow]}
                            spaceBetween={20}

                            pagination={
                                {
                                    clickable: true,
                                    el: ".bullet-container"
                                }}
                            onSwiper={(swiper) => swiper.slideTo(2)}
                            onSlideChange={() => console.log('slide change')}
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides
                            navigation={{
                                prevEl: ".prev-arrow",
                                nextEl: ".next-arrow",
                                disabledClass: "false",

                            }}
                            coverflowEffect={{
                                rotate: -10,
                                stretch: 0,
                                depth: 350,
                                modifier: 1,
                                slideShadows: false,
                            }}


                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                400: {
                                    slidesPerView: 2,
                                },
                                639: {
                                    slidesPerView: 3,
                                },
                                865: {
                                    slidesPerView: 4
                                },
                                1000: {
                                    slidesPerView: 5
                                },
                                1500: {
                                    slidesPerView: 4.5
                                }
                            }}

                        >
                            <SwiperSlide>
                                <div className="item">
                                    <div className="item-header">
                                        <img src={require("../../../images/main-page/social-media/spotify.png")} alt="" />
                                    </div>
                                    <div className="item-body">
                                        <h1>Spotify</h1>
                                        <small>
                                            Stream music and podcasts
                                        </small>
                                        <button>
                                            <span>View Offers</span>
                                            <Icon icon="ooui:next-ltr" />
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="item">
                                    <div className="item-header">
                                        <img src={require("../../../images/main-page/social-media/telegram.png")} alt="" />
                                    </div>
                                    <div className="item-body">
                                        <h1>Spotify</h1>
                                        <small>
                                            Stream music and podcasts
                                        </small>
                                        <button>
                                            <span>View Offers</span>
                                            <Icon icon="ooui:next-ltr" />
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="item">
                                    <div className="item-header">
                                        <img src={require("../../../images/main-page/social-media/discord.png")} alt="" />
                                    </div>
                                    <div className="item-body">
                                        <h1>Spotify</h1>
                                        <small>
                                            Stream music and podcasts
                                        </small>
                                        <button>
                                            <span>View Offers</span>
                                            <Icon icon="ooui:next-ltr" />
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="item">
                                    <div className="item-header">
                                        <img src={require("../../../images/main-page/social-media/snapchat.png")} alt="" />
                                    </div>
                                    <div className="item-body">
                                        <h1>Spotify</h1>
                                        <small>
                                            Stream music and podcasts
                                        </small>
                                        <button>
                                            <span>View Offers</span>
                                            <Icon icon="ooui:next-ltr" />
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="item">
                                    <div className="item-header">
                                        <img src={require("../../../images/main-page/social-media/spotify.png")} alt="" />
                                    </div>
                                    <div className="item-body">
                                        <h1>Spotify</h1>
                                        <small>
                                            Stream music and podcasts
                                        </small>
                                        <button>
                                            <span>View Offers</span>
                                            <Icon icon="ooui:next-ltr" />
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="item">
                                    <div className="item-header">
                                        <img src={require("../../../images/main-page/social-media/spotify.png")} alt="" />
                                    </div>
                                    <div className="item-body">
                                        <h1>Spotify</h1>
                                        <small>
                                            Stream music and podcasts
                                        </small>
                                        <button>
                                            <span>View Offers</span>
                                            <Icon icon="ooui:next-ltr" />
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <div className="swiper-controlls">
                                <div className="prev-arrow arrow">
                                    <Icon icon="raphael:arrowleft" />
                                </div>
                                <div className="bullet-container">

                                </div>
                                <div className="next-arrow arrow">
                                    <Icon icon="raphael:arrowleft" rotate={2} />
                                </div>
                                <div className="next-click"></div>
                            </div>
                        </Swiper>

                    </div>
                </div>

                <div className="our-popular-services">
                    <img src={require("../../../images/main-page/intro-2/our-popular-services/rocket.png")} alt="" className="rocket" />
                    <div className="header">
                        <h1>
                            Our Popular
                            <span>Services</span>
                        </h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                            dummy text
                        </p>
                    </div>
                    <div className="body">
                        <div className="item">
                            <div className="item-header">
                                <img src={require("../../../images/main-page/intro-2/our-popular-services/1.png")} alt="" />
                            </div>
                            <div className="item-body">
                                <h2>Blog Analytics</h2>
                                <p>
                                    1. Track blog performance with analytics. <br />
                                    2. Gain insights on blog traffic.<br />
                                    3. "Optimize blog growth with data.
                                </p>
                                <h2>
                                    <span>$6 - $53</span>
                                    <small>M/o</small>
                                </h2>
                            </div>
                            <div className="item-buttons">
                                <button className='arrow-up'>
                                    <Icon icon="icon-park-solid:up-one" />
                                </button>
                                <button className='see-more'>
                                    <span>See More</span>
                                    <Icon icon="mingcute:right-fill" />
                                </button>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-header">
                                <img src={require("../../../images/main-page/intro-2/our-popular-services/1.png")} alt="" />
                            </div>
                            <div className="item-body">
                                <h2>Blog Analytics</h2>
                                <p>
                                    1. Track blog performance with analytics. <br />
                                    2. Gain insights on blog traffic.<br />
                                    3. "Optimize blog growth with data.
                                </p>
                                <h2>
                                    <span>$6 - $53</span>
                                    <small>M/o</small>
                                </h2>
                            </div>
                            <div className="item-buttons">
                                <button className='arrow-up'>
                                    <Icon icon="icon-park-solid:up-one" />
                                </button>
                                <button className='see-more'>
                                    <span>See More</span>
                                    <Icon icon="mingcute:right-fill" />
                                </button>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-header">
                                <img src={require("../../../images/main-page/intro-2/our-popular-services/1.png")} alt="" />
                            </div>
                            <div className="item-body">
                                <h2>Blog Analytics</h2>
                                <p>
                                    1. Track blog performance with analytics. <br />
                                    2. Gain insights on blog traffic.<br />
                                    3. "Optimize blog growth with data.
                                </p>
                                <h2>
                                    <span>$6 - $53</span>
                                    <small>M/o</small>
                                </h2>
                            </div>
                            <div className="item-buttons">
                                <button className='arrow-up'>
                                    <Icon icon="icon-park-solid:up-one" />
                                </button>
                                <button className='see-more'>
                                    <span>See More</span>
                                    <Icon icon="mingcute:right-fill" />
                                </button>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="service-step-guidance">
                    <div className="header">
                        <h1>
                            <span>Its Eazy ! </span>
                            Just Follow The Steps Blow
                        </h1>
                    </div>
                    <div className="body desktop">
                        <div className="item">
                            <div className="item-header">
                                <Lottie
                                    animationData={stepOneAnimation}
                                    play
                                    loop
                                />
                            </div>
                            <div className="item-body">
                                <h1>Sign Up</h1>
                                <small>
                                    Create an account to get started on our platform.
                                </small>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-header">
                                <Lottie
                                    animationData={stepTwoAnimation}
                                    play
                                    loop
                                />
                            </div>
                            <div className="item-body">
                                <h1>Go Dashboard</h1>
                                <small>
                                    Access your personalized dashboard with all the tools you need.
                                </small>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-header">
                                <Lottie
                                    animationData={stepThreeAnimation}
                                    play
                                    loop
                                />
                            </div>
                            <div className="item-body">
                                <h1>Choese  Service </h1>
                                <small>Browse through our wide range of services and select what you need.</small>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-header">
                                <Lottie
                                    animationData={stepFourAnimation}
                                    play
                                    loop
                                />
                            </div>
                            <div className="item-body">
                                <h1>Order</h1>
                                <small>
                                    Place an order for the service you've chosen and proceed.
                                </small>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-header">
                                <Lottie
                                    animationData={stepFiveAnimation}
                                    play
                                    loop
                                />
                            </div>
                            <div className="item-body">
                                <h1> Enjoy & Peace !</h1>
                                <small>Sit back, relax, and enjoy the benefits of our services. Peace of mind included!</small>
                            </div>
                        </div>
                    </div>
                    <marquee behavior="" direction="">
                        <div className="body">
                            <div className="item">
                                <div className="item-header">
                                    <Lottie
                                        animationData={stepOneAnimation}
                                        play
                                        loop
                                    />
                                </div>
                                <div className="item-body">
                                    <h1>Sign Up</h1>
                                    <small>
                                        Create an account to get started on our platform.
                                    </small>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-header">
                                    <Lottie
                                        animationData={stepTwoAnimation}
                                        play
                                        loop
                                    />
                                </div>
                                <div className="item-body">
                                    <h1>Go Dashboard</h1>
                                    <small>
                                        Access your personalized dashboard with all the tools you need.
                                    </small>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-header">
                                    <Lottie
                                        animationData={stepThreeAnimation}
                                        play
                                        loop
                                    />
                                </div>
                                <div className="item-body">
                                    <h1>Choese  Service </h1>
                                    <small>Browse through our wide range of services and select what you need.</small>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-header">
                                    <Lottie
                                        animationData={stepFourAnimation}
                                        play
                                        loop
                                    />
                                </div>
                                <div className="item-body">
                                    <h1>Order</h1>
                                    <small>
                                        Place an order for the service you've chosen and proceed.
                                    </small>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-header">
                                    <Lottie
                                        animationData={stepFiveAnimation}
                                        play
                                        loop
                                    />
                                </div>
                                <div className="item-body">
                                    <h1> Enjoy & Peace !</h1>
                                    <small>Sit back, relax, and enjoy the benefits of our services. Peace of mind included!</small>
                                </div>
                            </div>
                        </div>
                    </marquee>

                    <div className="step-guidance-background">
                        <Lottie
                            animationData={stepArrowAnimation}
                            play
                            loop
                        />
                    </div>

                </div>


                <div className="world-map fade-in" key={Math.random()}>
                    <Lottie
                        className='animation '
                        animationData={currentSelected.animation}
                        play
                        loop
                    />

                    <div className='company-statics-description '>
                        <h1>
                            <span>Total</span>
                            <div className="accent-color">
                                {currentSelected.title}
                            </div>
                        </h1>
                        <p>
                            {currentSelected.description}
                        </p>
                    </div>
                </div>

                <div className="company-statics">

                    <div className="statics" >
                        {
                            companyStaticsItems.map((item, index) => {
                                return <CompanyStaticItem
                                    key={index}
                                    selected={currentSelected.title === item.title}
                                    setSelected={setCurrentSelected}
                                    item={item}
                                />
                            })
                        }
                    </div>


                </div>

                <div className="our-activities">
                    <div className="left">
                        <h1>
                            Our
                            <div className="accent-color">
                                Activities
                            </div>
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatibus similique temporibus dolores, possimus consequuntur! Dicta error amet, omnis accusamus nobis, dolor, dignissimos ad quam autem modi voluptatum porro magni?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatibus similique temporibus dolores, possimus consequuntur! Dicta error amet, omnis accusamus nobis, dolor, dignissimos ad quam autem modi voluptatum porro magni?
                        </p>
                    </div>
                    <div className="right">

                        <div className="animation">
                            <Lottie
                                className='animation'
                                animationData={ourActivitiesAnimation}
                                play
                                loop />
                        </div>

                    </div>
                </div>
             

            

            </section>

            <section className="customers-reviews">
                <img src={cBackground} className="background" />
                <div className="first-section">
                    <div className="left">
                        <Lottie
                            className='animation'
                            animationData={customersReviews}
                            play
                            loop />
                    </div>
                    <div className="right">
                        <h1>
                            OUR CUSTOMERS <br />
                            <span>REVIEWS</span>  <br />
                            ABOUT  <br />
                            SERVICES <br />

                        </h1>
                        <button>
                            <span>See More</span>
                            <Icon icon="icon-park-outline:right" />
                        </button>
                    </div>
                </div>
                <div className="comments">

                    <div className="left">
                        <Swiper
                            className="mySwiper"
                            effect={'cards'}
                            grabCursor={true}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            onSlideChange={(swiper) => {
                                rightSwiper.slideTo(swiper.activeIndex)
                            }}
                            modules={[
                                EffectCards,
                                Navigation,
                                Pagination,
                                Scrollbar,
                                A11y,
                                Autoplay,
                                EffectCoverflow]}
                            navigation={{
                                prevEl: ".prev-arrow",
                                nextEl: ".next-arrow",
                                disabledClass: "false",

                            }}
                            pagination={
                                {
                                    clickable: true,
                                    el: ".bullet-container"
                                }}
                        >
                            {getRandomColors().map(color => {
                                return <SwiperSlide>
                                    <div className="item"
                                        style={
                                            {
                                                backgroundColor:
                                                    `rgb(${color.red},${color.green},${color.blue})`
                                            }}>
                                        <div className="item-header">
                                            <img src={require("../../../images/main-page/customers-reviews/comments/1.png")} className="avatar" />
                                            <div className="info">
                                                <h1>Anita</h1>
                                                <small>2 Year Customer</small>
                                            </div>
                                        </div>
                                        <div className="item-body">
                                            <h1>
                                                Best Supporting
                                            </h1>
                                            <p>
                                                It is a long established fact that a reader will be distracted by
                                                the readable content of a page when looking at its layout.
                                            </p>

                                            <div className="rating">
                                                <Icon icon="ph:star-fill" />
                                                <span>5 Star</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })}


                            <div className="swiper-controlls ">
                                <div className="prev-arrow arrow">
                                    <Icon icon="raphael:arrowleft" />
                                </div>
                                <div className="bullet-container">

                                </div>
                                <div className="next-arrow arrow">
                                    <Icon icon="raphael:arrowleft" rotate={2} />
                                </div>
                                <div className="next-click"></div>
                            </div>


                        </Swiper>
                    </div>
                    <div className="right">

                        <Swiper
                            spaceBetween={0}
                            modules={[
                                Scrollbar,
                                A11y]}
                            className="mySwiper"
                            onSwiper={swiper => setRightSwiper(swiper)}
                        >

                            <SwiperSlide>

                                <div className="progressers">
                                    <h1>
                                        <span> Anita </span>
                                        Reviewed Our Services
                                    </h1>
                                    <div className="item">
                                        <h2 className='header'>
                                            <Icon icon="fluent:thumb-like-24-filled" />
                                            <span>Likes</span>

                                        </h2>
                                        <div className="body">
                                            <Progress
                                                percent={50}
                                            />

                                        </div>
                                    </div>
                                    <div className="item">
                                        <h2 className='header'>
                                            <Icon icon="carbon:view-filled" />
                                            <span>Views</span>

                                        </h2>
                                        <div className="body">
                                            <Progress
                                                percent={70}
                                            />

                                        </div>
                                    </div>
                                    <div className="item">
                                        <h2 className='header'>
                                            <Icon icon="material-symbols:amp-stories" />
                                            <span>Stories</span>

                                        </h2>
                                        <div className="body">
                                            <Progress
                                                percent={70}
                                            />

                                        </div>
                                    </div>
                                    <div className="item">
                                        <h2 className='header'>
                                            <Icon icon="mdi:comment" />
                                            <span>Comments</span>

                                        </h2>
                                        <div className="body">
                                            <Progress
                                                percent={70}
                                            />

                                        </div>
                                    </div>
                                    <div className="item">
                                        <h2 className='header'>
                                            <Icon icon="icon-park-solid:effects" />
                                            <span>Effective</span>

                                        </h2>
                                        <div className="body">
                                            <Progress
                                                percent={70}
                                            />

                                        </div>
                                    </div>

                                </div>

                            </SwiperSlide>


                            <SwiperSlide>

                                <div className="progressers">
                                    <h1>
                                        <span> Anita </span>
                                        Reviewed Our Services
                                    </h1>
                                    <div className="item">
                                        <h2 className='header'>
                                            <Icon icon="fluent:thumb-like-24-filled" />
                                            <span>Likes</span>

                                        </h2>
                                        <div className="body">
                                            <Progress
                                                percent={50}
                                            />

                                        </div>
                                    </div>
                                    <div className="item">
                                        <h2 className='header'>
                                            <Icon icon="carbon:view-filled" />
                                            <span>Views</span>

                                        </h2>
                                        <div className="body">
                                            <Progress
                                                percent={70}
                                            />

                                        </div>
                                    </div>
                                    <div className="item">
                                        <h2 className='header'>
                                            <Icon icon="material-symbols:amp-stories" />
                                            <span>Stories</span>

                                        </h2>
                                        <div className="body">
                                            <Progress
                                                percent={70}
                                            />

                                        </div>
                                    </div>
                                    <div className="item">
                                        <h2 className='header'>
                                            <Icon icon="mdi:comment" />
                                            <span>Comments</span>

                                        </h2>
                                        <div className="body">
                                            <Progress
                                                percent={70}
                                            />

                                        </div>
                                    </div>
                                    <div className="item">
                                        <h2 className='header'>
                                            <Icon icon="icon-park-solid:effects" />
                                            <span>Effective</span>

                                        </h2>
                                        <div className="body">
                                            <Progress
                                                percent={70}
                                            />

                                        </div>
                                    </div>

                                </div>

                            </SwiperSlide>



                        </Swiper>

                    </div>
                </div>

            </section>

            <div className="blogs">
                <h1>
                    Latest <span>Blogs</span> & Articles <br />
                    Read & <span>Know Everything !</span>
                </h1>
                <div className="items">
                    <Swiper
                        modules={[
                            Navigation,
                            Pagination,
                            Scrollbar,
                            A11y,
                            EffectCoverflow]}
                        spaceBetween={20}
                        pagination={
                            {
                                clickable: true,
                                el: ".bullet-container"
                            }}
                        onSwiper={(swiper) => swiper.slideTo(2)}
                        onSlideChange={() => console.log('slide change')}
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides
                        navigation={{
                            prevEl: ".prev-arrow",
                            nextEl: ".next-arrow",
                            disabledClass: "false",
                        }}
                        coverflowEffect={{
                            rotate: -5,
                            stretch: 0,
                            depth: 350,
                            modifier: 1,
                            slideShadows: false,
                        }}


                        breakpoints={{
                            380: {
                                slidesPerView: 1,
                            },
                            500: {
                                slidesPerView: 1.25,
                            },
                            639: {
                                slidesPerView: 1.75,
                            },
                            865: {
                                slidesPerView: 2
                            },
                            1000: {
                                slidesPerView: 3
                            },
                            1500: {
                                slidesPerView: 4
                            }
                        }}

                    >
                        {
                            blogsItems.map((item, index) => {
                                return <SwiperSlide>
                                    <div className="item" key={index}>

                                        <div className="item-header">
                                            <img
                                                className='image'
                                                src={item.image} />
                                            <div className="item-info">
                                                <div className="sender">
                                                    <div className="sender-image">
                                                        <img src={require("../../../images/panel/panel-header/avatar.jpg")} alt="" />
                                                    </div>
                                                    <div className="sender-info">
                                                        <div className="name">
                                                            Alex Jorden
                                                        </div>
                                                        <div className="role">
                                                            Project Manager
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-body">
                                            <MaxLineText
                                                content={item.title}
                                                maxLine={1}
                                                isMarquee={false}
                                                targetClass={"title"}
                                            />

                                            <MaxLineText
                                                content={
                                                    item.excerpt
                                                }
                                                maxLine={4}
                                                targetClass={"excerpt"}
                                            />



                                        </div>
                                        <div className="item-buttons">
                                            <div className="left">
                                                <button>
                                                    <Icon icon="fa-solid:comments" color="orange" />
                                                </button>
                                                <button>
                                                    <Icon icon="ic:sharp-share" color="green" />
                                                </button>
                                                <button>
                                                    <Icon icon="fluent:thumb-like-16-filled" color="red" />
                                                </button>
                                            </div>
                                            <div className="right">
                                                <button className="submit">
                                                    <span>
                                                        Read More
                                                    </span>
                                                    <Icon icon="iconamoon:send-fill" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })
                        }
                        <div className="swiper-controlls">
                            <div className="prev-arrow arrow">
                                <Icon icon="raphael:arrowleft" />
                            </div>
                            <div className="bullet-container">

                            </div>
                            <div className="next-arrow arrow">
                                <Icon icon="raphael:arrowleft" rotate={2} />
                            </div>
                            <div className="next-click"></div>
                        </div>
                    </Swiper>
                </div>
            </div>

            <section className="faqs">
                <div className="faqs-list">
                    <div className="left">
                        <div className="col">
                            {
                                faqsLeftList.map((item, index) => {
                                    return <FAQsAccordion
                                        key={index}
                                        headerTitle={item.question}
                                        bodyTitle={item.answer}
                                        isExpanded={item.isExpanded} />
                                })
                            }
                        </div>
                        <div className="col">
                            {
                                faqsRightList.map((item, index) => {
                                    return <FAQsAccordion
                                        key={index}
                                        headerTitle={item.question}
                                        bodyTitle={item.answer}
                                        isExpanded={item.isExpanded} />
                                })
                            }
                        </div>


                    </div>
                    <div className="right">
                        <Lottie
                            animationData={faqs}
                            play
                            loop />
                        <button>
                            <span>
                                Find More Q&A
                            </span>
                            <Icon icon="fluent:next-20-filled" />
                        </button>
                    </div>
                    <div className="faqs-background">
                        <Lottie
                            className='animation'
                            animationData={faqsBackground}
                            play
                            loop
                        />
                    </div>
                </div>
                <form className="add-question">
                    <div className="left">
                        <Lottie
                            animationData={faqsQuestion}
                            play
                            loop />

                    </div>
                    <div className="right">

                        <div className="info">
                            <h1>
                                Do You Have
                                <span>Question?</span>
                            </h1>
                            <p> We've got answers! Please take a moment to browse through our frequently asked questions. If you can't find what you're looking for, feel free to submit your question using the form below.</p>
                        </div>

                        <form
                            action='#'
                            onSubmit={handleFAQMessage}>

                            <FiledSet
                                legend={{
                                    title: "Name",
                                    svg: <Icon icon="fluent:rename-16-filled" />
                                }}
                                inputName={"name"}
                            />

                            <FiledSet
                                legend={{
                                    title: "Email",
                                    svg: <Icon icon="mdi:email" />
                                }}
                                inputName={"email"}
                            />

                            <FiledSet
                                legend={{
                                    title: "Phone Number",
                                    svg: <Icon icon="solar:phone-bold" />
                                }}
                                inputName={"number"}

                            />

                            <FiledSet
                                fieldClassName={"message-box"}
                                legend={{
                                    title: "Message",
                                    svg: <Icon icon="ic:baseline-message" />
                                }}
                                contentComponent={
                                    <textarea
                                        name={"Message"}
                                        rows={10}
                                    >

                                    </textarea>
                                }
                                inputName={"Message"}

                            />
                            <button>
                                <span>Submit</span>
                                <Icon icon="formkit:submit" />
                            </button>

                        </form>

                    </div>
                    <div className="add-question-background">
                        <Lottie
                            animationData={faqsFormQuestion}
                            play
                            loop
                        />
                    </div>
                </form>
            </section>



            {/* <section className='about-us'>
                <div className="left">
                    <Lottie
                        animationData={aboutUs}
                        play
                        loop />
                </div>
                <div className="right">
                    <div className="content">
                        <h1>About Us</h1>
                        <p>
                            At our company, we specialize in creating and executing effective social media marketing strategies that help businesses build their brand and increase their online presence. We understand that social media is a crucial aspect of any successful marketing campaign, and we strive to stay up-to-date with the latest trends and best practices. Our team of experts is dedica
                        </p>
                        <div className="social-media">
                            <div className="social">
                                <Icon icon="ic:baseline-attach-email" />
                                <span>example@gmail.com</span>
                            </div>
                            <div className="social">
                                <Icon icon="ri:phone-fill" />
                                <span>+1 202-918-2132</span>
                            </div>
                        </div>
                        <button>Read More</button>
                    </div>
                </div>
                <div className="wave-background">
                    <Lottie
                        animationData={customersReviewsWaveBackground}
                        play
                        loop />
                </div>
            </section> */}

        </main >
    )
}

export default MainPage