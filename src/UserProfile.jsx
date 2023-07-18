import "./UserProfile.css";

function UserProfile(user) {
  return (
    <div className="row fullbox my-3">
      <div className="col-md-4">
        <img src={user.imgUrl}/>
      </div>
      <div className="col-md-8 m-auto">
        <div className="row pt-3 text-box">
          <h1 className="text">{user.name}</h1>
          <h2 className="text">{user.email}</h2>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;