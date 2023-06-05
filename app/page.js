"use client";
import { useState, Fragment } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import project1 from "../assests/project-devsclash.png";
import project2 from "../assests/project-redowl.png";
import icon_frontend from "../assests/icons8-frontend.png";
import icon_cross from "../assests/icons8-cross-platform.png";
import icon_ui from "../assests/icons8-ui.png";
import icon_ux from "../assests/icons8-ux.png";
import icon_seo from "../assests/icons8-seo.png";
import Image from "next/image";
import backgroung_Image from "../assests/splash.png";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Carousel,
  Typography,
} from "@material-tailwind/react";
export default function Home() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };
  return (
    <Container className="bg-primary z-[-1] min-h-screen tracking-wide text-white text-[16px]">
      <section className="flex flex-col relative  top-[20vh] pb-[10rem] mb-[5rem]  items-center justify-center gap-[70px]">
        <Image
          alt="background effect"
          className="z-[10]"
          src={backgroung_Image}
          fill
        />
        <h1 className="flex flex-col z-[20] text-[46px]  font-bold  ">
          <span className=" px-2 bg-clip-text text-transparent italic bg-gradient-to-r from-[#F83A3A] from-0% via-[#F13CC7] via-50% to-[#7000FF] to-100%">
            Let&apos;s bring
          </span>{" "}
          <span className="px-2"> UI&apos;s to life.</span>
        </h1>
        <p
          className="px-[10px] z-[20] text-center opacity-60
        "
        >
          Experience Web Design at It&apos;s Finest: Seamless Functionality,
          Striking Visuals and Unforgettable User Experience
        </p>
        <Button
          sx={{ color: "white" }}
          className="rounded-lg z-[20] tracking-wider font-bold bg-gradient-to-r from-[#F83A3A] from-0% via-[#F13CC7] via-50% to-[#7000FF] to-100% py-[12px] px-[40px]"
        >
          Contact Us
        </Button>
      </section>
      <article className="flex  flex-col text-center items-center justify-center pt-5 mb-10">
        <h1 className="flex z-[20] flex-col  text-[30px]  font-bold  ">
          Our Work
        </h1>
        <p className="px-[10px] text-center opacity-70 mt-[1rem]">
          Here&apos;s the display of what we have done till now.
        </p>
        <Box className="flex mt-[6rem] ">
          <Container className="relative flex flex-col items-center py-[3rem] h-auto w-[100vw] bg-[#1E1A25] ">
            <Container className="w-[100vw] h-[3rem] bg-primary absolute top-[-1rem] rounded-bl-[45%] rounded-br-[45%]"></Container>
            <Image
              alt=""
              src={project1}
              height={200}
              className="mt-[3rem] mb-[2rem]"
            />
            <Container className="flex flex-col w-full items-start gap-6">
              <Container className="flex text-[10px] gap-4">
                <div className="justify-center items-center py-[12px] px-[20px] border-[#EE4578] border-[1px] bg-[#852F4E] rounded-[1.5rem]">
                  React
                </div>
                <div className="justify-center items-center py-[12px] px-[20px] border-[#EE4578] border-[1px] bg-[#852F4E] rounded-[1.5rem]">
                  Python
                </div>
                <div className="justify-center items-center py-[12px] px-[20px] border-[#EE4578] border-[1px] bg-[#852F4E] rounded-[1.5rem]">
                  Tailwind
                </div>
              </Container>
              <h3 className="text-2xl font-bold">DevsClash</h3>
              <p className="w-full text-start leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum aliquid unde dolorum assumenda. Unde libero atque
                similique adipisci recusandae distinctio et blanditiis nostrum
                cum eveniet provident fugiat iusto, incidunt fuga!
              </p>
              <Container className="flex text-[12px] font-semibold gap-4">
                <div className="justify-center items-center py-[10px] px-[20px] border-white border-[1px] bg-pink-500 rounded-md">
                  Code Link
                </div>
                <div className="justify-center items-center py-[10px] px-[20px] border-pink-500 border-[1px] bg-white text-pink-500 rounded-md">
                  Deploy Link
                </div>
              </Container>
            </Container>
            <Container className="w-[100vw] h-[3rem] bg-primary absolute bottom-[-1rem] rounded-tl-[45%] rounded-tr-[45%]"></Container>
          </Container>
        </Box>
      </article>
      <section>
        {/* <Container className="w-full my-4 flex justify-center">
          <div className="w-[6rem] py-[12px] border-r-[4B4850] border-[1px] px-[20px] bg-[#1E1A25] rounded-l-[2rem]">
            Services
          </div>
          <div className="w-[6rem] py-[12px] border-t-[4B4850] border-b-[4B4850] border-[1px] px-[20px] bg-[#1E1A25]">
            Process
          </div>
          <div className="w-[6rem] py-[12px] border-l-[4B4850] border-[1px] px-[20px] bg-[#1E1A25]  rounded-r-[2rem]">
            Skills
          </div>
        </Container> */}
        <Container className="flex items-center flex-col">
          <h4>What we can do?</h4>
          <h2 className="flex flex-col  text-[30px]  font-bold  ">Services</h2>
          <p className="px-[10px] text-center opacity-70 mt-[1rem]">
            Building Digital Dreams: Our Web Services Bring Your Vision to Life{" "}
          </p>
          <Container className="flex flex-col text-[16px] font-bold gap-5 mt-6 mb-10">
            <div className="flex flex-col p-[16px] bg-[#0D0D0D] rounded-md items-start gap-2">
              <div className="bg-gradient-to-r from-0% from-[#EE4578] to-100% to-[#FF6363] p-2 rounded-md">
                <Image alt="" height={25} src={icon_frontend} />
              </div>
              <p>Full stack developement</p>
            </div>
            <div className="flex flex-col p-[16px] bg-[#0D0D0D] rounded-md items-start gap-2">
              <div className="bg-gradient-to-r from-0% from-[#EE4578] to-100% to-[#FF6363] p-2 rounded-md">
                <Image alt="" height={25} src={icon_seo} />
              </div>
              <p>Search Engine Optimizations</p>
            </div>
            <div className="flex flex-col p-[16px] bg-[#0D0D0D] rounded-md items-start gap-2">
              <div className="bg-gradient-to-r from-0% from-[#EE4578] to-100% to-[#FF6363] p-2 rounded-md">
                <Image alt="" height={25} src={icon_ui} />
              </div>
              <p>UI/UX prototyping</p>
            </div>
            <div className="flex flex-col p-[16px] bg-[#0D0D0D] rounded-md items-start gap-2">
              <div className="bg-gradient-to-r from-0% from-[#EE4578] to-100% to-[#FF6363] p-2 rounded-md">
                <Image alt="" height={25} src={icon_ux} />
              </div>
              <p>Seamless User Interface</p>
            </div>
            <div className="flex flex-col p-[16px] bg-[#0D0D0D] rounded-md items-start gap-2">
              <div className="bg-gradient-to-r from-0% from-[#EE4578] to-100% to-[#FF6363] p-2 rounded-md">
                <Image alt="" height={25} src={icon_cross} />
              </div>
              <p>Cross platform compatibility</p>
            </div>
          </Container>
        </Container>
      </section>
      <section className="w-[100%] px-5">
        <h2 className="flex flex-col text-center my-4 text-[25px]  font-bold  ">
          Frequently Asked Questions
        </h2>

        <Accordion open={open === 1} animate={customAnimation}>
          <AccordionHeader
            className="text-white font-normal hover:text-gray-400"
            onClick={() => handleOpen(1)}
          >
            What services do you offer?
          </AccordionHeader>
          <AccordionBody className="text-white font-normal hover:text-gray-400">
            We offer custom app and web app development services tailored to
            meet your specific needs.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} animate={customAnimation}>
          <AccordionHeader
            className="text-white font-normal hover:text-gray-400"
            onClick={() => handleOpen(2)}
          >
            How much does it cost to develop an app/web app?
          </AccordionHeader>
          <AccordionBody className="text-white font-normal hover:text-gray-400">
            The cost of app development varies depending on factors such as
            project complexity, features, platforms, and timelines. We provide
            personalized quotes after understanding your requirements in detail.
            Feel free to reach out to us for a FREE consultation.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} animate={customAnimation}>
          <AccordionHeader
            className="text-white font-normal hover:text-gray-400"
            onClick={() => handleOpen(3)}
          >
            How long does it take to develop an app/web app?
          </AccordionHeader>
          <AccordionBody className="text-white font-normal hover:text-gray-400">
            The development timeline depends on the scope and complexity of the
            project. Simple apps may take a few weeks, while more complex
            projects can span several months. We work closely with our clients
            to establish realistic timelines and keep them informed throughout
            the development process.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4} animate={customAnimation}>
          <AccordionHeader
            className="text-white font-normal hover:text-gray-400"
            onClick={() => handleOpen(4)}
          >
            Can you help with both iOS and Android app development?
          </AccordionHeader>
          <AccordionBody className="text-white font-normal hover:text-gray-400">
            Yes, we have expertise in developing apps for both iOS and Android
            platforms. We can build native apps specific to each platform or
            develop hybrid apps that work on multiple platforms, depending on
            your requirements.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 5} animate={customAnimation}>
          <AccordionHeader
            className="text-white font-normal hover:text-gray-400"
            onClick={() => handleOpen(5)}
          >
            Do you provide ongoing support and maintenance after the app is
            launched?
          </AccordionHeader>
          <AccordionBody className="text-white font-normal hover:text-gray-400">
            Absolutely! We offer post-launch support and maintenance services to
            ensure your app runs smoothly. We provide various support options,
            including bug fixes, updates, and feature enhancements, based on
            your needs.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 6} animate={customAnimation}>
          <AccordionHeader
            className="text-white font-normal hover:text-gray-400"
            onClick={() => handleOpen(6)}
          >
            Can you integrate third-party services into the apps/web apps?
          </AccordionHeader>
          <AccordionBody className="text-white font-normal hover:text-gray-400">
            Yes, we can integrate various third-party services, such as payment
            gateways, social media platforms, analytics tools, and more, based
            on your requirements. We ensure seamless integration and
            functionality for a comprehensive app experience
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 7} animate={customAnimation}>
          <AccordionHeader
            className="text-white font-normal hover:text-gray-400"
            onClick={() => handleOpen(7)}
          >
            What is your development process?
          </AccordionHeader>
          <AccordionBody className="text-white font-normal hover:text-gray-400">
            Our development process typically involves the following steps:
            requirement gathering and analysis, UI/UX design, development,
            testing, deployment, and ongoing support. We follow agile
            methodologies, allowing for flexibility and iterative improvements
            during the development cycle.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 8} animate={customAnimation}>
          <AccordionHeader
            className="text-white font-normal hover:text-gray-400"
            onClick={() => handleOpen(8)}
          >
            Can you provide references or examples of your previous work?
          </AccordionHeader>
          <AccordionBody className="text-white font-normal hover:text-gray-400">
            Absolutely! We have a portfolio section on our website where you can
            find examples of our previous projects. Additionally, we can provide
            references upon request to give you a better understanding of our
            clients' satisfaction.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 9} animate={customAnimation}>
          <AccordionHeader
            className="text-white font-normal hover:text-gray-400"
            onClick={() => handleOpen(9)}
          >
            How do we get started with our app/web app development project?
          </AccordionHeader>
          <AccordionBody className="text-white font-normal hover:text-gray-400">
            Getting started is simple! Reach out to us through our contact page
            or by filling out the inquiry form. We'll get in touch with you
            promptly to discuss your project requirements and guide you
            through the next steps.
          </AccordionBody>
        </Accordion>
      </section>
    </Container>
  );
}
