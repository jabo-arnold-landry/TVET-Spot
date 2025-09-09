import { createContext, useState } from "react";
export const roleContext = createContext();
export default function MyContextProvider({ children }) {
  const [role, setRole] = useState("students");
  const [showcase, setShowcase] = useState([
    {
      title: "Developers have a problem with side projects",
      description:
        "The truth is most side projects we work on will never see the light of day. Let's talk about why.",
      images: ["https://i.ytimg.com/vi/Y_JQti8YLn0/maxresdefault.jpg"],
      url: "https://www.youtube.com/watch?v=Y_JQti8YLn0",
      site_name: "YouTube",
    },
    {
      title:
        "How to build a Fire & Smoke Alarm System using Arduino with SMS notifications",
      description:
        "Get instant SMS alerts the moment smoke or fire is detected – even without a GSM module! In this detailed Arduino tutorial, we’ll show you how to build a Fire & Smoke Alarm System using basic components.",
      images: ["https://i.ytimg.com/vi/RpsXzV4WCnQ/maxresdefault.jpg"],
      url: "https://www.youtube.com/watch?v=RpsXzV4WCnQ",
      site_name: "YouTube",
    },
    {
      title: "jabo-arnold-landry (jabo Landry)",
      description:
        "👋 Hi, I’m @jabo-arnold-landry 👀 I’m interested in making myself great 😂 🌱 Currently learning fullstack 💞️ Open to collaborating on web-related projects 📫 Reach me at arnoldjabo@gmail.com ⚡ Fun fact: I like eating and smiling.",
      images: ["https://avatars.githubusercontent.com/u/151964267?v=4"], // GitHub avatar
      url: "https://github.com/jabo-arnold-landry",
      site_name: "GitHub",
    },
  ]);
  return (
    <roleContext.Provider value={{ role, setRole, setShowcase, showcase }}>
      {children}
    </roleContext.Provider>
  );
}
