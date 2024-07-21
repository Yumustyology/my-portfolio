import Container from "@/ui/atoms/Container";
import { SkillMarquee } from "@/ui/molecules/SkillsMarquee";
import StackedCards from "@/ui/molecules/StackedCards";
import Link from "next/link";

const HomePage = () => {
  return (
    <Container className="relative py-12-sm:py-24 px-7 xxlDesktop:px-0">
      <SkillMarquee />
      <div className="container w-full flex items-center">
        <div className="app-left h-screen  w-3/5 lgDesktop:flex lgDesktop:items-center">
          <div
            className="app-intro mt-[13%] lgDesktop:-mt-60 text-left"
            style={{
              fontFamily: "Consolas",
            }}
          >
            <div
              className="hello-txt font-normal text-base mb-2 tracking-widest text-[#FFFFFF]"
              style={{
                fontFamily: "Consolas",
              }}
            >
              &lt;p&gt;Hello, I am&lt;/p&gt;
            </div>
            <div
              className="name-txt text-[50px] xxlgTablet:text-[45px] laptop:text-6xl tracking-widest text-[#FFFFFF] font-semibold"
              style={{
                fontFamily: "Consolas",
                fontStyle: "normal",
              }}
            >
              Yusuf Mustahan
            </div>
            <div className="more-info text-lg xxlgTablet:text-lg xxlgTablet:tracking-wide laptop:text-[22px] text-[#FFFFFF] leading-[74.37%] mt-2 tracking-widest">
              &lt;h2&gt;&nbsp;
              <span className="more-info-txt text-[#ff5f5c]">
                I build softwares to solve problems
              </span>
              &nbsp;&lt;/h2&gt;
            </div>
            <Link href="/contact">
              <button className="contact-btn py-4 px-5 gap-3 w-[200px] bg-[#2e2e2e] rounded-md font-normal text-2xl leading-[74.37%] tracking-wide laptop:tracking-wider text-white border-none outline-none mt-8 cursor-pointer" style={{
                fontStyle:"normal"
              }}>Contact me</button>
            </Link>
          </div>
        </div>
        <div className="app-right w-2/5 flex">
          <StackedCards />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
