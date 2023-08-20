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
                <div className="flex items-center mt-3 flex-wrap">
                    <span className="font-bold text-purple-950">Contact :</span>
                    <span className="my-1">jasmine.arabgard@outlook.com</span>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;