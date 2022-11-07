import Zuri from "./vector.png"
import ingressive from "./I4G.png"
export default function Footer() {
   return  <footer>
        <hr/>
        <div className="footer-links">
            <img id="z-tag" alt="zuri" src={Zuri} />
            <p>Hng Internship 9 Frontend Task</p>
            <img  alt="I4G" src={ingressive} />
        </div>
    </footer>
}