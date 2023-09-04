import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import boot from "../assets/boot.png";
import node from "../assets/node.png";
import exp from "../assets/exp.svg";
import react from "../assets/react.png";
import cpp from "../assets/cpp.png";
import figma from "../assets/figma.png";



export default function Stack() {
    return (
        <div className="skillContainer">
            <h2>Tools in my Arsenal⚔️</h2>
            <div className="holder">
                <div className="html">
                    <a href="https://html.spec.whatwg.org/multipage/" target = "_blank" rel = "noreferrer"><img src={html} alt="HTML5" className="Logo" title="HTML5" /></a>
                </div>

                <div className="css">
                    <a href="https://www.css3.com/" target = "_blank" rel = "noreferrer"><img src={css} alt="" className="Logo" title="CSS3" /></a>
                </div>

                <div className="js">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target = "_blank" rel = "noreferrer"><img src={js} alt="" className="Logo" title="Vanilla Javascript" /></a>
                </div>

                <div className="boot">
                    <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/" target = "_blank" rel = "noreferrer"><img src={boot} alt="" className="Logo" title="Bootstrap" /></a>
                </div>

                <div className="node">
                    <a href="https://nodejs.org/en" target = "_blank" rel = "noreferrer"><img src={node} alt="" className="Logo" title="NodeJS" /></a>
                </div>

                <div className="exp">
                    <a href="http://expressjs.com/" target = "_blank" rel = "noreferrer"><img src={exp} alt="" className="Logo" title="ExpressJS" /></a>
                </div>
                
                <div className="react">
                    <a href="https://react.dev/" target = "_blank" rel = "noreferrer"><img src={react} alt="" className="Logo" title="ReactJS" /></a>   
                </div>

                <div className="cpp">
                    <a href="https://isocpp.org/" target = "_blank" rel = "noreferrer"><img src={cpp} alt="" className="Logo" title="C++" /></a>
                </div>

                <div className="figma">
                    <a href="https://www.figma.com/" target = "_blank" rel = "noreferrer"><img src={figma} alt="" className="Logo" title="Figma" /></a>
                </div>

            </div>
        </div>
    )
}