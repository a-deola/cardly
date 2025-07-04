import { Avatar } from "@mui/material";

export default function Profile() {
  return (
    <div className="profile">
      <Avatar
        sx={{ width: 150, height: 150 }}
        id="profile_img"
        alt="profile_img"
        src="https://res.cloudinary.com/dcuvw51mi/image/upload/ar_1:1,b_rgb:262c35,bo_5px_solid_rgb:070000,c_fill,g_auto,r_max,w_1000/v1667376995/IMG_0074_gzssq5.jpg"
      />
      <h3 className="name">Adeola Samuel</h3>
    </div>
  );
}
