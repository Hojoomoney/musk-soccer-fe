import axios from "axios";

export const getDistinctByPositionKey = ['getDistinctByPosition'];
export const getDistinctByPosition = async() =>{
    const {data}=await axios.get(`${process.env.API_URL}/search`,
        {params:{q:'player',oq:'position'}}
    );

    return data;
}

//practice7
export const getPlayerByPositionAndRegionNameKey = ['getPlayerByPositionAndRegionName']
export const getPlayerByPositionAndRegionName = async () => {
      const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/search`, {
        params : {q : "regionName",
                oq : "position"
                }
      } );
        return data
}


//practice18
export const getPlayerLimit5Key = ['getPlayerLimit5']
export const getPlayerLimit5 = async () => {
      const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/search`, {
        
      } );
        return data
}

//practice8
export const getPlayerByRegionNameOrderByHeightAndWeightKey = ['getPlayerByRegionNameOrderByHeightAndWeight']
export const getPlayerByRegionNameOrderByHeightAndWeight = async () => {
      const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/search`, {
        
      } );
        return data
}


