import { useRef, useEffect, useState } from "react";
export default function Courses() {
  const [searchTerms, setSearchTerm]=useState('');
  {
    /*useRef accesses the input inside the DOM if 
    there is none it stores null 
    otherwise it stores the reference of the input
    
    it works after component is rendered*/
  }
  const searchRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    {
      /*searchRef.current → DOM element or null
        ?. → prevents crash if null
        .focus() → browser API,
        [] means the useEffect runs every time the componenet is remounted */
    }
    searchRef.current?.focus();
  }, []);
  return (
    <>
      <input ref={searchRef} value={searchTerms} onChange={(e)=>{setSearchTerm(e.target.value)}} type="text" placeholder="Search Couses..." />
      <h1>Courses Page</h1>
      <p>Searching For: {searchTerms}</p>
    </>
  );
}
