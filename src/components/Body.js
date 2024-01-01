import BodyCard from "./BodyCard";
import BodySearch from "./BodySearch";

export const Body = () => {
    return (
      <div className="flex">
        <BodySearch></BodySearch>
        <BodyCard></BodyCard>
      </div>
    );
  };

export default Body;