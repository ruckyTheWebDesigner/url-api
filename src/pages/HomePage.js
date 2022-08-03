import React, { useEffect } from "react";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Form from "../components/Form";
import Statistics from "../components/Statistics";
import Footer from "../components/Footer";

import { CopyToClipboard } from "react-copy-to-clipboard";

function HomePage() {
  const [result, setResult] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [copyStatus, setCopyStatus] = React.useState("Copy");
  const [selected, setSelected] = React.useState("");

  //   total array of results to map
  const totalResults = [];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target.text.value) {
      fetchUrl(e.target.text.value);
      e.target.text.value = null;
    } else if (
      e.target.text.value === "" ||
      e.target.text.value === undefined
    ) {
      setError("Please add a link");
      setIsLoading(false);
    }
  };

  const getClickID = (e) => {
    setSelected(e.target.id);
  };

  const fetchUrl = async (url) => {
    setIsLoading(true);
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const data = await response.json();

    if (response.status === 200 || response.status === 201) {
      if (result.length === 0) {
        const temp = totalResults.concat(data);
        temp.filter((item) => item.url !== "");
        setResult(temp);
        sessionStorage.setItem("totalResults", JSON.stringify(temp));
        setIsLoading(false);
      } else if (result.length > 0) {
        const temp = totalResults.concat(...result, data);
        setResult(temp);
        sessionStorage.setItem("totalResults", JSON.stringify(temp));
        setIsLoading(false);
      }
    } else
      response.status === 400
        ? setError("Please enter a valid URL")
        : setError("Something went wrong");
    setIsLoading(false);
  };

  useEffect(() => {
    const totalResults = JSON.parse(sessionStorage.getItem("totalResults"));
    if (totalResults) {
      setResult(totalResults);
    }
  }, []);

  return (
    <div>
      <div className='hero_section'>
        <NavBar />
      </div>
      <Form onSubmit={handleSubmit} error={error} />
      <div>
        {isLoading && <div className='loading'>Loading...</div>}
        {/* {error && <div className='error'>{error}</div>} */}

        {result &&
          result.map((result, index) => {
            return (
              <div
                key={index}
                id={index}
                onClick={getClickID}
                className='results_component'>
                <div>
                  <p>{result.result.original_link}</p>
                  <hr className='result_underline' />
                </div>
                <div className='result_right'>
                  <p>{result.result.full_short_link}</p>
                  <CopyToClipboard
                    id={result.result.code}
                    className={
                      selected === result.result.code ? "copy_selected" : "copy"
                    }
                    onCopy={() => {}}
                    text={result.result.full_short_link}>
                    <button className='btn_copy'>
                      {selected === result.result.code ? "Copied" : "Copy"}
                    </button>
                  </CopyToClipboard>
                </div>
              </div>
            );
          })}

        <Statistics />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
