import share from "./vector.png"
import ingressive from "./I4G.png"
export default function Footer() {
   return  <footer>
        <hr/>
        <div className="footer-links">
            <img className= "f-elements" alt="zuri" src={share} />
            <p>Hng Internship 9 Frontend Task</p>
            <img className= "f-elements" alt="I4G" src={ingressive} />
        </div>
    </footer>
}