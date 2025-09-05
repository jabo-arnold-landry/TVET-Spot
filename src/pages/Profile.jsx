import { useEffect, useState } from "react";
import { gettingItems } from "../indexBD";
import Microlink from "@microlink/react";
import clsx from "clsx";
import ChallengesCard from "../components/ChallengesCard";
import RecentNotification from "../components/RecentNotification";
import CardStats from "../components/CardStats";
import { Award } from "lucide-react";
const hackathon = [
  {
    id: 1,
    title: "Hello world",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nulla magnam blanditiis, numquam autem maxime asperiores. Illum voluptatibus fugit quasi et perspiciatis fugiat nulla illo, quod cupiditate tempora ipsa. Soluta beatae aperiam quasi exercitationem blanditiis consequatur nobis voluptatum, fugit ut sit quia ad? Nobis, ipsa magnam nihil mollitia illo voluptate.",
    tags: ["no", "yet", "well"],
    participants: 23,
    joinedDate: "11-23-2021",
    sponsor: "me",
  },
  {
    id: 2,
    title: "Hello Africa",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nulla magnam blanditiis, numquam autem maxime asperiores. Illum voluptatibus fugit quasi et perspiciatis fugiat nulla illo, quod cupiditate tempora ipsa. Soluta beatae aperiam quasi exercitationem blanditiis consequatur nobis voluptatum, fugit ut sit quia ad? Nobis, ipsa magnam nihil mollitia illo voluptate.",
    tags: ["no", "yet", "well"],
    participants: 23,
    joinedDate: "11-23-2021",
    sponsor: "me",
  },
];
const recentUpdates = [
  {
    achievement: <Award />,
    title: "completed a web basics",
    description: "earned 10 points . 2days ago",
  },
];

function Profile() {
  const [linkPreview, setLinkPreview] = useState([]);
  const [activeTab, setActiveTab] = useState(false);
  useEffect(() => {
    async function gettingLinks() {
      const data = await gettingItems();
      setLinkPreview([data]);
    }
    gettingLinks();
  }, []);
  function SetHackathonsTab(e) {
    if (e.target.id === "showcase-section") {
      setActiveTab(false);
    }
    if (e.target.id === "hackathon-section") {
      setActiveTab(true);
    }
  }
  return (
    <>
      <strong>Growth Profile</strong>
      <p>track your learning journey and achievements</p>
      <div className="grid gap-5 sm:grid-cols-3">
        <main onClick={SetHackathonsTab} className="grid gap-3 col-span-2">
          <div className="flex gap-10 cursor-pointer">
            <span
              id="showcase-section"
              className={
                !activeTab
                  ? "border-b-8 border-b-primary w-fit text-primary font-bold"
                  : "font-light text-azure-34 capitalize mb-3"
              }
            >
              showcase
            </span>
            <span
              id="hackathon-section"
              className={
                activeTab
                  ? "border-b-8 border-b-primary w-fit text-primary font-bold"
                  : "font-light text-azure-34 capitalize mb-3"
              }
            >
              hackathon
            </span>
          </div>
          <article className="grid gap-2">
            {!activeTab ? (
              <LinkPreview />
            ) : (
              <ChallengesCard challenges={hackathon} />
            )}
          </article>
          <section className="notifacation mx-3 col-span-full">
            <strong>Recent Notification</strong>
            <RecentNotification notifications={recentUpdates} />
          </section>
        </main>
        <aside>
          <CardStats />
        </aside>
      </div>
    </>
  );
}
function LinkPreview() {
  return (
    <Microlink
      url="https://www.youtube.com/watch?v=twDtPs5NCjA"
      contrast
      autoPlay
      media="video"
      setData={(data) => ({
        ...data,
        title: "helloword",
        description: "fjdkfsfsdlfsdfklsdfsdkfsdf",
        image: { url: "https://i.imgur.com/1FyFxlk.jpg" },
      })}
    />
  );
}
export default Profile;
