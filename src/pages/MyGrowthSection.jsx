import {
  AwardIcon,
  PlusIcon,
  LucideBotMessageSquare,
  ChartLine,
} from "lucide-react";
import Card from "../components/Card";
import Leaderboard from "../components/Leaderboard";
import { settingItems } from "../indexBD";
import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function MyGrowthSection() {
  const [showPopup, setShowPopup] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  const handleViewLeaderboard = () => {
    setShowLeaderboard(true);
  };

  // If leaderboard is shown, render the full Leaderboard component
  if (showLeaderboard) {
    return (
      <div>
        {/* Back button */}
        <div className="p-4">
          <button
            onClick={() => setShowLeaderboard(false)}
            className="text-white bg-primary rounded px-4 py-2 mb-4"
          >
            ← Back to Growth
          </button>
        </div>
        {/* Render the full Leaderboard component */}
        <Leaderboard />
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-3 bg-white-solid rounded-md m-4 px-2 py-1 border border-gray-200">
        <strong className="font-bold capitalize justify-self-start">
          My Growth
        </strong>
        <div className="flex items-center justify-between w-full col-span-full">
          <p className="text-azure-34">this week</p>
          <p className="text-green-500">+70pts</p>
        </div>
        <div className="bg-progress rounded-full h-[0.7rem] relative col-span-full">
          <div className="bg-progress-bar absolute w-2/3 h-[90%]"></div>
        </div>
        <button className="text-white bg-primary rounded-[0.422rem] p-2 col-span-full capitalize">
          view full profile
        </button>
      </div>

      <div className="bg-white-solid rounded-md m-4 px-2 py-1 border border-gray-200">
        <strong className="font-bold capitalize justify-self-start">
          recent badges
        </strong>
        <div className="flex gap-3">
          <AwardIcon className="size-10 text-gray-600 bg-gray-300 rounded-2xl p-1" />
          <div className="info">
            <strong>Silver Achiever</strong>
            <p className="text-azure-34">achieved last 7 days</p>
          </div>
        </div>
      </div>
      <div className="relative grid gap-3 bg-white-solid rounded-md m-4 px-2 py-1 border border-gray-200">
        <strong className="font-bold capitalize">quick actions</strong>
        <Card>
          <PlusIcon />
          <button onClick={() => setShowPopup(true)}>
            add project to showcase
          </button>
        </Card>
        <Card>
          <ChartLine />
          <NavLink to="/leader-board">view leaderboard</NavLink>
        </Card>
        <Showcase isOpen={showPopup} onClose={() => setShowPopup(false)} />
      </div>
    </>
  );
}

function Showcase({ isOpen, onClose }) {
  const [link, setLink] = useState("");

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="bg-black fixed inset-0 opacity-[0.5] z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.form
            className="absolute top-8 col-span-full justify-self-center z-30 bg-white-solid grid place-items-center mx-5 p-7 rounded-md shadow-lg"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="grid gap-1.5">
              <label htmlFor="showcase">showcase</label>
              <input
                type="text"
                id="showcase"
                className="border"
                onChange={(e) => setLink(e.target.value)}
                value={link}
              />
              <button
                className="text-white bg-primary rounded p-1 capitalize"
                onClick={async (e) => {
                  e.preventDefault();
                  await settingItems({ url: link, cors: false });
                  setLink("");
                  onClose();
                }}
              >
                Save
              </button>
            </div>
          </motion.form>
        </>
      )}
    </AnimatePresence>
  );
}
