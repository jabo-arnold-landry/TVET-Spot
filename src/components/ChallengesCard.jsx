import { Users } from "lucide-react";
function ChallengesCard({ challenges }) {
  return (
    <>
      <div className="flex">
        {challenges.map((challenge) => (
          <div
            key={challenge.id}
            className="bg-white rounded-lg border border-gray-200 shadow-sm mx-3 hover:shadow-md transition-shadow"
          >
            <div className="px-2 py-4">
              <div className="">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {challenge.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3 text-balance">
                  {challenge.description}
                </p>

                {/* Challenge Details */}
              </div>
            </div>
            {/* tags and sponsor div */}

            {/* Tags */}
            <div className="flex items-center gap-9 pb-3 px-2 justify-between">
              <div className="flex gap-2">
                {challenge.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`border border-gray-300 text-yellow-500  text-xs px-3 py-1 rounded-full font-small`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* Sponsor */}
              <div className="text-sm text-gray-500">
                Sponsored by{" "}
                <span className="font-medium">{challenge.sponsor}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ChallengesCard;
