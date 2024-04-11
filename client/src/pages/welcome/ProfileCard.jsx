import React from "react";

import { styles } from "../../styles";
import ProfileModal from "./ProfileModal";


const ProfileCard = ({ profile, setId }) => {

  return (
    <div className="px-3">
      <div className="py-4">
        <h1 className={styles.Title1} >{profile && profile?.topic}</h1>
        <h2 className={styles.Title3}>{profile && profile?.name}</h2>
        <h5 className={`${styles.text5} my-7`} >{profile && profile?.description}</h5>
      </div>
      <ProfileModal setId={setId} />
    </div>
  )
}

export default ProfileCard