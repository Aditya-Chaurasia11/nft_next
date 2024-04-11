// import "./App.css";
import { useState, useEffect } from "react";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultConfig,
} from "connectkit";

// import { supabase } from "../Components/client";
import land from "../assets/land_img.png";
import star from "../assets/star.png";
import "./home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    // checkUser();
    // window.addEventListener("hashchange", function () {
    //   checkUser();
    // });
  }, []);

  // async function checkUser() {
  //   const user = supabase.auth.user();
  //   console.log(user);
  //   setUser(user);

  //   localStorage.setItem("userData", JSON.stringify(user));
  // }

  // async function signInWithGithub() {
  //   await supabase.auth.signIn({
  //     provider: "github",
  //   });
  // }

  // async function signOut() {
  //   await supabase.auth.signOut();
  //   localStorage.removeItem("userData");
  //   setUser(null);
  // }

  // const navigatehandler = () => {
  //   navigate("/create");
  // };

  return (
    <>
      <div className="home">
        <div className="home_container_left">
          <img className="star_img" src={star}></img>
          <img className="star_img2" src={star}></img>

          <h1>Buy and sell digital art nft</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            dolore ducimus maxime veniam explicabo ea quidem, et nihil deserunt
            sequi!
          </p>
          <div className="home_container_button">
            {/* {user === null ? (
              <button className="button_github" onClick={signInWithGithub}>
                Connect with github
              </button>
            ) : (
              <button className="button_github" onClick={signOut}>
                Sign out
              </button>
            )} */}
            {/* <button className="button_claim" onClick={navigatehandler}>
              <span>Claim now &#x21AA;</span>
            </button> */}
          </div>
        </div>
        {/* <h1>Hello, {user.email}</h1> */}
        {/* <ConnectKitButton /> */}
        <div className="home_container_right">
          <img src={land}></img>
        </div>
      </div>
      <div>
        <h2>Easy Steps to Create and Sell Your NFT</h2>
        <div className="home_lower">
          <div className="home_lower_first"></div>
          <div className="home_lower_second"></div>
          <div className="home_lower_third"></div>
        </div>
      </div>
    </>
  );

  //   if (user) {
  //     return (
  //       <div className="App">
  //         <h1>Hello, {user.email}</h1>
  //         {/* <ConnectKitButton /> */}
  //         <button onClick={signOut}>Sign out</button>
  //       </div>
  //     );
  //   }
  //   return (
  //     <div className="App">
  //       <h1>Hello, please sign in!</h1>
  //       {/* <ConnectKitButton /> */}
  //       <button onClick={signInWithGithub}>Sign In</button>
  //     </div>
  //   );
}

export default Home;
