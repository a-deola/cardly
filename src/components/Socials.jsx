import slack from "./slack.png"
import github from "./github_icon.png"
export default function Socials(){
    return <div className="btm-nav">
        <a target="_blank" rel="noopener noreferrer" href="https://app.slack.com/client/T042F7V19Q8/C041S7VF5JR/rimeto_profile/U048K3B6MJR"><img alt="slack_img" src= {slack}/></a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Adeola-creator"><img alt="github_img" src= {github} /></a>
    </div>
}