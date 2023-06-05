"use client";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import project1 from "../assests/project-devsclash.png";
import project2 from "../assests/project-redowl.png";
import icon_frontend from "../assests/icon-frontend.png";
import icon_cross from "../assests/icons8-cross-platform.png";
import icon_ui from "../assests/icons8-ui.png";
import icon_ux from "../assests/icons8-ux.png";
import icon_seo from "../assests/icons8-seo.png";
import Image from "next/image";
export default function Home() {
  return (
    <Container className="bg-primary min-h-screen tracking-wide text-white text-[16px]">
      <section className="flex flex-col relative  top-[20vh] pb-[10rem] mb-[5rem]  items-center justify-center gap-[70px]">
        <h1 className="flex flex-col  text-[46px]  font-bold  ">
          <span className=" px-2 bg-clip-text text-transparent italic bg-gradient-to-r from-pink-500 to-violet-500">
            Let's bring
          </span>{" "}
          <span className="px-2"> UI's to life.</span>
        </h1>
        <p
          className="px-[10px] text-center opacity-60
        "
        >
          "Experience Web Design at It's Finest: Seamless Functionality,
          Striking Visuals and Unforgettable User Experience"
        </p>
        <Button
          sx={{ color: "white" }}
          className="rounded-lg tracking-wider font-bold bg-gradient-to-r from-[#F83A3A] from-0% via-[#F13CC7] via-50% to-[#7000FF] to-100% py-[12px] px-[40px]"
        >
          Resume
        </Button>
      </section>
      <article className="flex flex-col text-center items-center justify-center mb-10">
        <h1 className="flex flex-col  text-[30px]  font-bold  ">
          Bringing UI's To Life
        </h1>
        <p className="px-[10px] text-center opacity-70 mt-[1rem]">
          Where Design Meets Functionality: Showcasing the Essence of My Web
          Design Portfolio
        </p>
        <Box className="flex mt-[6rem]">
          <Container className="relative flex flex-col items-center py-[3rem] h-auto w-[100vw] bg-[#1E1A25] ">
            <Container className="w-[100vw] h-[3rem] bg-primary absolute top-[-1rem] rounded-bl-[45%] rounded-br-[45%]"></Container>
            <Image
              src={project1}
              height={200}
              className="mt-[3rem] mb-[2rem]"
            />
            <Container className="flex flex-col w-full items-start gap-4">
              <Container className="flex text-[10px] gap-4">
                <div className="justify-center items-center py-[12px] px-[20px] border-[#EE4578] border-[1px] bg-[#852F4E] rounded-[1.5rem]">
                  Python
                </div>
                <div className="justify-center items-center py-[12px] px-[20px] border-[#EE4578] border-[1px] bg-[#852F4E] rounded-[1.5rem]">
                  Python
                </div>
                <div className="justify-center items-center py-[12px] px-[20px] border-[#EE4578] border-[1px] bg-[#852F4E] rounded-[1.5rem]">
                  Python
                </div>
              </Container>
              <h3 className="text-2xl font-bold">DevsClash</h3>
              <p className="w-full text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum aliquid unde dolorum assumenda! Unde libero atque
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
        <Container className="w-full my-4 flex justify-center">
          <div className="w-[6rem] py-[12px] border-r-[4B4850] border-[1px] px-[20px] bg-[#1E1A25] rounded-l-[2rem]">
            Services
          </div>
          <div className="w-[6rem] py-[12px] border-t-[4B4850] border-b-[4B4850] border-[1px] px-[20px] bg-[#1E1A25]">
            Process
          </div>
          <div className="w-[6rem] py-[12px] border-l-[4B4850] border-[1px] px-[20px] bg-[#1E1A25]  rounded-r-[2rem]">
            Skills
          </div>
        </Container>
        <Container className="flex items-center flex-col">
          <h4>What we can do?</h4>
          <h2 className="flex flex-col  text-[30px]  font-bold  ">Services</h2>
          <p className="px-[10px] text-center opacity-70 mt-[1rem]">
            “ Building Digital Dreams: Our Web Services Bring Your Vision to
            Life ”
          </p>
          <Container className="flex flex-col text-[16px] font-bold gap-5">
            <div className="flex flex-col p-[16px] bg-[#0D0D0D] rounded-md items-start gap-2">
              <div className="bg-gradient-to-r from-0% from-[#EE4578] to-100% to-[#FF6363] p-2 rounded-md"><Image height={32} src={icon_frontend}/></div>
              <p>Full stack developement</p>
            </div>
            <div className="flex flex-col p-[16px] bg-[#0D0D0D] rounded-md items-start gap-2">
              <div className="bg-gradient-to-r from-0% from-[#EE4578] to-100% to-[#FF6363] p-2 rounded-md"><Image height={32} src={icon_seo}/></div>
              <p>Search Engine Optimizations</p>
            </div>
            <div className="flex flex-col p-[16px] bg-[#0D0D0D] rounded-md items-start gap-2">
              <div className="bg-gradient-to-r from-0% from-[#EE4578] to-100% to-[#FF6363] p-2 rounded-md"><Image height={32} src={icon_ui}/></div>
              <p>UI/UX prototyping</p>
            </div>
            <div className="flex flex-col p-[16px] bg-[#0D0D0D] rounded-md items-start gap-2">
              <div className="bg-gradient-to-r from-0% from-[#EE4578] to-100% to-[#FF6363] p-2 rounded-md"><Image height={32} src={icon_ux}/></div>
              <p>Seamless User Interface</p>
            </div>
            <div className="flex flex-col p-[16px] bg-[#0D0D0D] rounded-md items-start gap-2">
              <div className="bg-gradient-to-r from-0% from-[#EE4578] to-100% to-[#FF6363] p-2 rounded-md"><Image height={32} src={icon_cross}/></div>
              <p>Cross platform compatibility</p>
            </div>
          </Container>
        </Container>
      </section>
    </Container>
  );
}
