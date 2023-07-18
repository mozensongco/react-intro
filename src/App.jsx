import UserProfile from "./UserProfile";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const users = [
    {
      name: "John Doe",
      email: "john@example.com",
      imgUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      imgUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
    },
    {
      name: "Michael Johnson",
      email: "michael@example.com",
      imgUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
    },
    {
      name: "Emily Brown",
      email: "emily@example.com",
      imgUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
    },
    {
      name: "David Wilson",
      email: "david@example.com",
      imgUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
    },
    {
      name: "Sarah Davis",
      email: "sarah@example.com",
      imgUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
    },
    {
      name: "Daniel Thompson",
      email: "daniel@example.com",
      imgUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
    },
    {
      name: "Olivia Martinez",
      email: "olivia@example.com",
      imgUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
    },
  ];

  return (
    <>
      <div className="container board mt-3">
        <div className="row justify-center text-center">

        {
          users.map((profile) => {
            return <UserProfile key={profile.name} name={profile.name} email={profile.email} imgUrl={profile.imgUrl}></UserProfile>
          })
        }

{/*
          <UserProfile name={"Lynne"} email="ldel@baboo.com" imgUrl="https://xsgames.co/randomusers/avatar.php?g=female"/>
          <UserProfile name={"Missile"} email="bestboy@baboo.com" imgUrl="https://xsgames.co/randomusers/avatar.php?g=male"/>
          <UserProfile name={"Cavanaugh"} email="jcds@geemale.com" imgUrl="https://xsgames.co/randomusers/avatar.php?g=male"/>
*/}    
        
        </div>
      </div>
    </>
  );
}

export default App;