
import mypic from "./Images/image.jpg"
import { SkillBar } from "./About_skillbar"

export const About = () => {
    return (
        <> <section className="about py-5">
            <div className="container py-5" id="about">
                <div className="row">
                    <div className="col-lg-5">
                        <img src={mypic} data-aos="fade-up" data-aos-duration="10000" data-aos-delay="400" className="img-fluid" alt="mypic" />
                    </div>
                    <div className="col-lg-7">
                        <h1>About me.</h1>
                        <p>Web Developer</p>
                        <p className="py-3">I am <span className="font-weight-bold">Prakash Kumar</span>. I am from Delhi. I have done my B.Tech(Information Technology and Mathematical Innovation) from Cluster Innovation Center, University of Delhi.</p>

                        <SkillBar name="HTML / CSS" percent={95} className="pro-value1" />
                        <SkillBar name="BOOT-STRAP" percent={90} className="pro-value2" />
                        <SkillBar name="JavaScript / JQUERY" percent={65} className="pro-value3" />
                        <SkillBar name="NODE / Express" percent={70} className="pro-value4" />
                        <SkillBar name="MySQL" percent={80} className="pro-value5" />
                        <SkillBar name="React" percent={85} className="pro-value6" /><div className="col-lg-6 py-3 gap-2">
                            <a href="./Images/resume.pdf" view target="_blank"><input type="button" className="btn1 mt-5 py5" name="" value="Download  C.V" data-aos="flip-right" data-aos-duration="2000" id="" /></a>
                            <a href="#contact"><input type="button" className="btn2 mt-5" value="Contact Me" data-aos="flip-left" data-aos-duration="2000 " /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section></>
    )
}