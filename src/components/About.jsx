import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="py-20 align-element" id="about">
      <SectionTitle title="about me" subtitle="who am i?" />
      <div className="grid md:grid-cols-2 items-center gap-16">
        <article className="hidden md:block">
          <img
            src={aboutSvg}
            alt="About Illustration"
            className="w-full h-64 "
            loading="lazy"
          />
        </article>
        <article>
          {/* <SectionTitle title="Code and Coffee" /> */}
          <p className="text-lg text-slate-600 mt-8 leading-loose tracking-wide">
            I am a passionate front-end developer with a keen eye for detail and
            a love for creating interactive web experiences. My journey in web
            development has been fueled by a desire to turn ideas into reality,
            crafting user-friendly interfaces that not only look great but also
            function seamlessly.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
