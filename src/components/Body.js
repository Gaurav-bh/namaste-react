import BodyCard from "./BodyCard";
import BodySearch from "./BodySearch";

export const Body = () => {
    return (
      <div className="body">
        <BodySearch></BodySearch>
        <BodyCard></BodyCard>
      </div>
    );
  };

export default Body;