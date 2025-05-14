
import "./index.css"
import { MainButton } from "./Main_button"

export const MainSection=()=>{
    return (
        <><section className="main py-5">
        <div className="container py-5">
            <div className="row py-5">
                <div className="col-lg-6 py-5 mr-auto">
                    <h3><small>Hello I'm</small><br />
                        <span>Prakash Kumar</span>
                    </h3>
                    <h6 className="pt-3">Web Developer  </h6>
                    <div className="gap-2">
                    <a href="#blog"><input type="button" value="My Work" className="bt1 mt-5 mr-3" style={{marginRight: "5px"}} /></a>
                    <a href="#contact"><input type="button" Value=" Hire Me" className="bt2 mt-5" id="" /></a>
                    </div>
                   
                </div>
                <h4> Connect on: </h4>
                <div className="row py-3 gap-2">
                    <MainButton  link="https://www.instagram.com/prakash_14_2002/" name="logo-instagram" />
                    <MainButton  link="https://www.facebook.com/share/1B7aXAu4PP/" name="logo-facebook" />
                    <MainButton  link="https://www.linkedin.com/in/prakash-kumar-055203220/" name="logo-linkedin" />
                </div>
            </div>
        </div>
       </section></>
    )
}