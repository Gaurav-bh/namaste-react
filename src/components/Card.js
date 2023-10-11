import { CDN_LINK } from "../Utils/Constants";

const Card = (props) => {
    const { restData } = props;
    const { cloudinaryImageId, name } = restData?.info;
    return (
      <div className="card">
        <img
          src={
           CDN_LINK +
            cloudinaryImageId
          }
          className="bodycardimg"
        ></img>
        <div className="bodycardbody">
          <h4> {name}</h4>
          <h4></h4>
        </div>
      </div>
    );
  };

export default Card;


