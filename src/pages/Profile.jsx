import { useEffect, useState } from "react";
import { gettingItems } from "../indexBD";
import ChallengesCard from "../components/ChallengesCard";
import RecentNotification from "../components/RecentNotification";
import CardStats from "../components/CardStats";
import { Award } from "lucide-react";
import Navbar from "../components/Navbar";
import LinkPreviewCard from "../components/LinkPreview";
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
  {
    achievement: <Award />,
    title: "completed a web basics",
    description: "earned 10 points . 2days ago",
  },
];
const studentStats = [
  {
    totalPoints: 12,
    ChallengesCompleted: 2,
    Hackathons: 2,
    ProjectShowcased: 3,
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
      <Navbar />
      <strong className="text-xl font-bold">Growth Profile</strong>
      <p className="my-2 capitalize text-azure-34 text-sm">
        track your learning journey and achievements
      </p>

        <main onClick={SetHackathonsTab} className="grid gap-3 col-span-2">
          <div className="flex gap-10 cursor-pointer my-2">
            <button
              id="showcase-section"
              className={
                !activeTab
                  ? "border-b border-b-primary w-fit text-primary font-bold"
                  : "font-light text-azure-34 capitalize mb-3"
              }
            >
              showcase
            </button>
            <button
              id="hackathon-section"
              className={
                activeTab
                  ? "border-b border-b-primary w-fit text-primary font-bold"
                  : "font-light text-azure-34 capitalize mb-3"
              }
            >
              hackathon
            </button>
          </div>
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <article className="grid gap-2 sm:col-span-2">
              {!activeTab ? (
                <LinkPreviewCard />
              ) : (
                <ChallengesCard challenges={hackathon} />
              )}
              <section className="bg-white px-2.5 py-0.5 rounded grid gap-1.5">
                <strong>Recent Notification</strong>
                <RecentNotification notifications={recentUpdates} />
              </section>
            </article>
            <aside className="mx-3 grid gap-2">
              <CardStats />
            </aside>
          </section>
        </main>
      </div>
    </>
  );
}

export default Profile;
