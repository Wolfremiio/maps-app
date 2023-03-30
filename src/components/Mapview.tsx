import { Map } from "mapbox-gl";
import { useContext, useLayoutEffect, useRef } from "react";
import { PlacesContext } from "../context";
import { Loading } from "./loading";

export const Mapview = () => {
  const { isLoading, userLocation } = useContext(PlacesContext);
  const mapDiv = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!isLoading) {
      const map = new Map({
        container: mapDiv.current!, // container ID
        style: "mapbox://styles/mapbox/streets-v12", // style URL
        center: userLocation, // starting position [lng, lat]
        zoom: 14, // starting zoom
      });
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div
      ref={mapDiv}
      style={{
        height: "100vh",
        left: "0px",
        position: "fixed",
        top: "0px",
        width: "100vw",
      }}
    >
      {userLocation?.join(",")}
    </div>
  );
};
