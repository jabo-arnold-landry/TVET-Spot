import { useContext } from "react";
import { roleContext } from "../ContextProvider";
export default function LinkPreviewCard() {
  const { showcase, setShowcase } = useContext(roleContext);
  if (!showcase) return null;

  return (
    <main className="grid gap-2 md:grid-cols-2">
      {showcase.map((object, index) => {
        const { title, description, images, url, site_name } = object;
        const thumbnail =
          images?.[0] || "https://via.placeholder.com/300x180?text=No+Image";
        return (
          <div
            className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200"
            key={index}
          >
            <img
              className="w-full h-48 object-cover"
              src={thumbnail}
              alt={title || "Thumbnail"}
            />
            <div className="px-4 py-3">
              <h3 className="text-lg font-semibold text-gray-800 truncate">
                {title}
              </h3>
              <p className="text-sm text-gray-600 mt-1 line-clamp-3">
                {description}
              </p>
              <div className="mt-2 text-xs text-gray-500">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {site_name || new URL(url).hostname}
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
}
