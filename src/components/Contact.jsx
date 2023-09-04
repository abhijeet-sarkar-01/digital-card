import phoneLogo from "C:/Users/Asus/Desktop/React/vite-react/src/assets/phone-solid.svg"
import mailLogo from "C:/Users/Asus/Desktop/React/vite-react/src/assets/envelope-solid.svg"
import linkedinLogo from "C:/Users/Asus/Desktop/React/vite-react/src/assets/linkedin.svg"
import igLogo from "C:/Users/Asus/Desktop/React/vite-react/src/assets/ig.svg"

export default function Contact() {
    return (
        <div className="contactContainer">
            <div className = "div1"> 
                <a href="tel:+918210237191"><button className="contact"><img src={phoneLogo} alt="" /> Contact</button></a>
            </div>
            <div className = "div2">
                <a href="mailto:abhijeet.sarkar7191@gmail.com"><button className="mail"><img src={mailLogo} alt="" /> E-mail</button></a>    
            </div>
            <div className = "div3">
                <a href="https://www.linkedin.com/in/abhjt-srkr/" target="_blank" rel="noreferrer"><button className="linkedin"><img src={linkedinLogo} alt="" /></button></a>
            </div>
            <div className = "div4">
                <a href="https://www.instagram.com/abhjt_srkr/" target="_blank" rel="noreferrer"><button className="ig"><img src={igLogo} alt="" /></button></a>
            </div>
        </div>
    )
}