import { MapState } from "./MapProvider";
import { Map } from "mapbox-gl";

type MapAction = { type: "setMap"; payload: Map };

export const MapReducer = (state: MapState, action: MapAction): MapState => {
  switch (action.type) {
    case "setMap":
      return { ...state };

    default:
      return {
        ...state,
        isMapReady: true,
        map: action.payload,
      };
  }
};
