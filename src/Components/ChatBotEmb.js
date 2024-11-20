import React, { useEffect } from 'react';

const ChatBotEmbed = () => {
  useEffect(() => {
    // Create the script element for the embedded.min.js script
    const script = document.createElement('script');
    script.src="https://www.chatbase.co/embed.min.js"
    script.chatbotId = "1CY2J_oknELhT0S0mVsu8";
    script.domain = 'www.chatbase.co';
    script.defer = true;

    // Append the script to the document's head
    document.head.appendChild(script);

    // Define the embeddedChatbotConfig object
    window.embeddedChatbotConfig = {
      chatbotId: "1CY2J_oknELhT0S0mVsu8",
      domain: "www.chatbase.co"
    };

    // Clean up by removing the script when the component unmounts
    return () => {
      document.head.removeChild(script);
      delete window.embeddedChatbotConfig;
    };
  }, []);

  return (
    <></>
  );
};


export default ChatBotEmbed;
