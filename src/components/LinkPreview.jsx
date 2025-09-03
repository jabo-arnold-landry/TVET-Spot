import { useEffect, useState } from "react";

function LinkPreview(url) {
  [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetching() {
      setLoading(true);
      try {
        const url = fetch(url);
        const data = await url.text();
        const parser = new DOMParser();
      } catch (err) {
        console.log("something wrong happended:", err);
      } finally {
        setLoading(false);
      }
    }
    fetching();
  }, [url]);
  return <div>LinkPreview</div>;
}

export default LinkPreview;
