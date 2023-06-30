const AboutUs = () => {
    return (
        <section className="about-us-container col-span-10 col-start-2 row-start-4 h-screen">
            <div className="w-full bg-purple-100 rounded-md p-5">
                <h5 className="font-bold text-purple-800 mb-3">About us</h5>
                <p className="text-gary-800 leading-snug text-justify text-slate-800">
                    Hi, everyone !<br />
                    As a junior front end developer, I have gained more than a year of personal experience in the field and I am passionate about all things tech and programming. With a strong desire to continuously improve my skills and knowledge, I strive to stay up-to-date with the latest trends and advancements in the industry.
                    I specialize in working with a range of technologies, including React.js, Material UI, Sass, Tailwind, Redux, JavaScript ES6, Bootstrap, and am familiar with TypeScript .<br />My expertise in these areas has allowed me to develop innovative and user-friendly web applications that meet the needs of clients across various industries.
                </p>
                <div className="flex items-center mt-3">
                    <span className="font-bold text-purple-950">Contact :</span>
                    <span className="mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-slate-800">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </span>
                    <span>jasmine.arabgard@outlook.com</span>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;