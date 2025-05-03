import { useContext } from "react"
import { SearchContext } from "../context/Search.Context"
import Loading from "./Loading"
import { useLocation } from "react-router-dom"

export default function Results() {

  const { loading, results, getResults, searchTerm, setSearchTerm } = useContext(SearchContext)
  const location = useLocation()

  if (loading) {
    return <Loading />
  }


  switch (location.pathname) {
    case '/search':
      return (<div>search</div>);
    case '/images':
      return (<div>images</div>);
    case '/news':
      return (<div>news</div>);
    case '/videos':
      return (<div>videos</div>);

    default:
      return (<div>Error</div>);



  }


}
