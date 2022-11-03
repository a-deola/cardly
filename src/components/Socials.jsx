import slack from "./slack.png"
import github from "./github_icon.png"
export default function Socials(){
    return <div className="btm-nav">
        <a target="_blank" rel="noopener noreferrer" href="https://slack.com/Adeola Samuel"><img alt="slack_img" src= {slack}/></a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Adeola-creator"><img alt="github_img" src= {github} /></a>
    </div>
}