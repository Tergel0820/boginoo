import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { useCollection } from "../firebase";

const ShortUrl = () => {
  const { docId } = useParams();
  const { data } = useCollection("allUrls");
  useEffect(() => {
    data.map((el) =>
      el.id === docId ? (window.location.href = el.url) : console.log("404")
    );
  }, [data]);
  return <div>WAIT ...</div>;
};

export { ShortUrl };