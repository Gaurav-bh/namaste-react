import { CDN_LINK } from "../Utils/Constants";

export const PrmotedCard=(Card)=>{
  return (props)=>
  {
    return (
      <div>
        <label className="absolute bg-red-400 text-black font-bold  px-1  rounded-lg h-[30px]">open</label>
        <Card {...props}></Card>
      </div>
    )
  }

} 





const Card = (props) => {
    const { restData } = props;
    const { cloudinaryImageId, name ,avgRating,totalRatingsString,locality} = restData?.info;
    return (
      <div className="w-[230px] m-6 p-[4px] border border-solid  h-90  rounded-sm bg-gray-200 hover:border-gray-700">
       <div className="h-48">
        <img
          src={
           CDN_LINK +
            cloudinaryImageId
          }
          className="h-48 w-[220px] rounded-lg"
        ></img>
         {restData.info.aggregatedDiscountInfoV3?
            <label className="relative  rounded-lg bottom-[22px] left-1 text-white font-bold shadow-lg bg-blend-darken">
              {restData.info.aggregatedDiscountInfoV3.header + " " +restData.info.aggregatedDiscountInfoV3.subHeader}
            </label>:<label></label>}
              {console.log(restData.info.isOpen)}
            </div>
      
          <div className="h-[135px]">

              <h4 className="font-bold text-md py-1 h-[50px]"> {name}</h4>
              <h4>Rating:-  {avgRating + "⭐ " + totalRatingsString}  </h4>
              <h4>Loc :- {locality}</h4>
            </div>
        
      </div>
    );
  };

export default Card;


