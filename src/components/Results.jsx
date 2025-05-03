import { useContext, useEffect } from "react";
import { SearchContext } from "../context/Search.Context";
import Loading from "./Loading";
import { useLocation } from "react-router-dom";

export default function Results() {
  const { loading, results, getResults, searchTerm } = useContext(SearchContext);
  const location = useLocation();

  useEffect(() => {
    if (searchTerm) {
      getResults(`/images?q=${encodeURIComponent(searchTerm)}&gl=us&hl=en&autocorrect=true&num=10&page=1`);
    }
  }, [searchTerm, location.pathname]);

  if (loading) {
    return <Loading />;
  }

  switch (location.pathname) {
    case "/search":
      return (
        <div className="space-y-6 px-4 max-w-3xl mx-auto mt-6">
          {results?.organic?.map(({ title, link, snippet }, index) => (
            <div key={index} className="border-b pb-4">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 text-lg font-medium hover:underline"
              >
                {title}
              </a>
              <div className="text-sm text-gray-600 mt-1">{link}</div>
              <p className="text-gray-700 mt-2">{snippet}</p>
            </div>
          ))}
        </div>
      );
    case "/images":
      return <div className="text-center mt-10 text-gray-500">Images Results</div>;
    case "/news":
      return <div className="text-center mt-10 text-gray-500">News Results</div>;
    case "/videos":
      return <div className="text-center mt-10 text-gray-500">Video Results</div>;
    default:
      return <div className="text-center mt-10 text-red-500">404 - Invalid Route</div>;
  }
}
