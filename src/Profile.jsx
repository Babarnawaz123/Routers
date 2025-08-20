import "./Profile.css";
function Profile() {
  const user = {
    name: "Babar Nawaz",
    email: "nawazbabar398@gmail.com",
    bio: "Frontend Developer | React Enthusiast | UI Designer",
    profilePic:
      "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
  };
  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={user.profilePic} alt="Profile" className="profile-pic" />
        <h2>{user.name}</h2>
        <p className="email">{user.email}</p>
        <p className="bio">{user.bio}</p>
        <button className="edit-btn">Edit Profile</button>
      </div>
    </div>
  );
}
export default Profile;
