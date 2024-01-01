const Category=({Categories})=>{
    console.log(Categories)
    return(
       
      Categories.map((Category)=>(
            <div key={Category?.card?.card?.title} className=" w-5/12 place-content-center flex justify-center ">
                <div className="border border-black w-5/12 h-10 m-2 p-2 flex justify-between shadow-md rounded-sm font-bold">
                {/*Header*/}
                    {Category.card?.card?.title}
                    <span>⬇️</span>
                </div>

                <div className="mx-1 my-0 px-1">
                    {Category.card?.card?.itemCards.map((item)=>(

                        <div key={item.card.info.id} className="border border-b-black p-1 w-[640px] h-10">
                            {item.card.info.name}
                        </div>

                    ))}
                    {/*Body */}
                </div>
            </div>
        ))
    )
}
export default Category;