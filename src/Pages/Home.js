import React from "react";
import "../App.css";
import "font-awesome/css/font-awesome.min.css";
import Intro from "../Components/Home/Intro";
import Services from "../Components/Home/Services";
import ChatBotEmbed from "../Components/ChatBotEmb";

function Home() {
  return (
    <div>
      <Intro />
      <Services />
      <ChatBotEmbed/>
    </div>
  );
}

export default Home;
