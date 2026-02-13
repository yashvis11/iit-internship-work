{
  /*NOTES: onChange={(e) => setQuery(e.target.value)}
  this is a function that creates an event object. Here, the event object is e
  the function onChange takes e as input and calls the function setQuery with the value e.target.value
  
  About the event Object:
  Common Properties:
  e.type          // "change", "click", "submit"
  e.target        // element that triggered the event
  e.currentTarget // element the handler is attached to

  For inputs(like the SearchBar here):
  e.target.value  // text inside the input
  e.target.name   // input name attribute
  e.target.id     // input id
*/
}

import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState<string>("");

  return (
    <>
      <div>
        <input
          placeholder="Search Courses"
          value={query}
          onChange={(e) => setQuery(e.target.value)} //explanation in NOTE above
        />

        <p>Searching for: {query}</p>
      </div>
    </>
  );
}
