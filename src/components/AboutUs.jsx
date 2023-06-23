const AboutUs = () => {
    return (
        <main className="aboutus-container grid grid-cols-12 grid-rows-[55px-minmax(500px, _1fr)] gap-8">
            <section className="col-span-10 col-start-2 row-start-4 bg-purple-100 p-5 rounded-md">
                <h5 className="font-bold text-purple-800 mb-3">About us</h5>
                <p className="text-gary-800 leading-snug text-justify">
                    Hi, everyone ,<br />
                    As a junior front end developer, I have gained more than a year of personal experience in the field and I am passionate about all things tech and programming. With a strong desire to continuously improve my skills and knowledge, I strive to stay up-to-date with the latest trends and advancements in the industry.
                    I specialize in working with a range of technologies, including React.js, Material UI, Sass, Tailwind, Redux, JavaScript ES6, Bootstrap, and am familiar with TypeScript .<br/>My expertise in these areas has allowed me to develop innovative and user-friendly web applications that meet the needs of clients across various industries.
                </p>
            </section>
        </main>
    );
};

export default AboutUs;