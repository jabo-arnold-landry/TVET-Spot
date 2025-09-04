import { useEffect, useState } from "react";
const hackathon = [
  {
    id: 1,
    title: "Hello world",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nulla magnam blanditiis, numquam autem maxime asperiores. Illum voluptatibus fugit quasi et perspiciatis fugiat nulla illo, quod cupiditate tempora ipsa. Soluta beatae aperiam quasi exercitationem blanditiis consequatur nobis voluptatum, fugit ut sit quia ad? Nobis, ipsa magnam nihil mollitia illo voluptate.",
    tags: ["no", "yet", "well"],
    joinedStudent: 23,
    joinedDate: "11-23-2021",
  },
];
import { gettingItems } from "../indexBD";
import Microlink from "@microlink/react";

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
      <main onClick={SetHackathonsTab}>
        <div className="flex gap-10 cursor-pointer">
          <span id="showcase-section">showcase</span>
          <span id="hackathon-section">hackathon</span>
        </div>
        <article className="flex justify-start">
          {!activeTab ? (
            <LinkPreview />
          ) : (
            hackathon.map((element) => {
              const {
                id,
                title,
                description,
                tags,
                joinedStudent,
                joinedDate,
              } = element;
              return (
                <>
                  <div key={id}>
                    <strong>{title}</strong>
                    <p>{description}</p>
                    <ul className="tags">
                      <p>{tags.join(",")}</p>
                    </ul>
                    <div className="card-footer">
                      <p>{joinedDate}</p>
                      <p>{joinedStudent}</p>
                    </div>
                  </div>
                </>
              );
            })
          )}
        </article>
      </main>
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
