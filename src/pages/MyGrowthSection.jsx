import {
  AwardIcon,
  PlusIcon,
  LucideBotMessageSquare,
  ChartLine,
} from "lucide-react";
import Card from "../components/Card";
import { settingItems } from "../indexBD";
export default function MyGrowthSection() {
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
      <div className="grid gap-3 bg-white-solid rounded-md m-4 px-2 py-1 border border-gray-200">
        <strong className="font-bold capitalize">quick actions</strong>
        <Card>
          <PlusIcon />
          <button>add project to showcase</button>
        </Card>
        <Card>
          <LucideBotMessageSquare />
          <button>request testimony</button>
        </Card>
        <Card>
          <ChartLine />
          <button>view leaderboard</button>
        </Card>
      </div>
    </>
  );
}

function Showcase() {
  const [link, setLink] = useState("");
  return (
    <>
      <div className="bg-black fixed inset-0 opacity-[0.5] pointer-none: z-10"></div>
      <form className="relative z-30 bg-white-solid grid place-items-center mx-5 p-7">
        <div className="grid">
          <label htmlFor="showcase">showcase</label>
          <br />
          <input
            type="text"
            id="showcase"
            className="border"
            onChange={(e) => setLink(e.target.value)}
            value={link}
          />{" "}
          <br />
          <button
            className="bg-primary text-white"
            onClick={async (e) => {
              e.preventDefault();
              await settingItems({ url: link, cors: false });
              setLink("");
            }}
          >
            Document portifolio
          </button>
        </div>
      </form>
    </>
  );
}
