import { useState } from "react"
import { Avatar, Card } from "@mui/material"
import share from "./share_icon.png"
import mobile from "./mobile_icon.png"

export default function Profile() {
  const { innerWidth } = window
  const [isMobile, setIsMobile] = useState(false);
  if (innerWidth <= 800) {
    setIsMobile(true)
  }
  return <Card variant="none" className="profile">
    <picture>
      <source media="(max-width: 600px)" srcset={mobile} />
      <img className= "share" src={share} alt="share_btn" />
    </picture>
    <Avatar id="profile_img" alt="profile_img" src="https://res.cloudinary.com/dcuvw51mi/image/upload/ar_1:1,b_rgb:262c35,bo_5px_solid_rgb:070000,c_fill,g_auto,r_max,w_1000/v1667376995/IMG_0074_gzssq5.jpg" />
    <h5 id="twitter">Adextra01</h5>
    <h5 id="slack">Adeola Samuel</h5>
  </Card>
}
