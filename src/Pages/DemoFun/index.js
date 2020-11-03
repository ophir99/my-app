import React, { useState, useEffect } from "react";

const DemoFun = () => {
  const [country, setCountry] = useState("");
  const [capital, setCapital] = useState("");
  const [title, setTitle] = useState("");
  const [msg, setMsg] = useState("No Msg");
  useEffect(() => {
    console.log("Use effect is getting called..For Mount");
    return () => {
      console.log("Good Bye from DEMO FUN");
    };
  }, []);
  useEffect(() => {
    console.log("Use effect is getting called...for title");
  }, [title]);
  useEffect(() => {
    console.log("Use effect is getting called...for capital");
  }, [capital]);
  useEffect(() => {
    console.log("Use effect is getting called..for country.");
  }, [country]);
  useEffect(() => {
    console.log("Use effect is getting called..for country and title.");
  }, [country, title]);
  return (
    <div>
      <h1>Capital : {capital}</h1>
      <h1>Country : {country}</h1>
      <h1>Title : {title}</h1>
      <h1>Msg : {msg}</h1>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                placeholder="title"
                onChange={(event) => setTitle(event.currentTarget.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                placeholder="country"
                onChange={(event) => setCountry(event.currentTarget.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                placeholder="capital"
                onChange={(event) => setCapital(event.currentTarget.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DemoFun;
