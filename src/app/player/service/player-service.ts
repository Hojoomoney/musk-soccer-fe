import axios from "axios"

//practice2
export const getDistinctByPositionKey = ['getDistinctByPosition']
export const getDistinctByPosition = async () => {
    const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/search`, {
        params : {q : "player",
                oq : "position"}
    } );
    return data
}
//practice4
export const getPlayerNameByPositionAndTeamIdKey = ['getPlayerNameByPositionAndTeamId']
export const getPlayerNameByPositionAndTeamId = async () => {
      const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/search`, {
        params : {q : "teamId",
                oq : "position"}
      } );
        return data
}

//practice5
export const getPlayerNameByNameAndHeightAndTeamIdKey = ['getPlayerNameByNameAndHeightAndTeamId']
export const getPlayerNameByNameAndHeightAndTeamId = async () => {
      const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/search`, {
        params : {q : "teamId",
                oq : "height",
                iq : "playerName"
                }
      } );
        return data
}

//practic5-1
export const getPlayerNameByNameAndPositionAndTeamIdKey = ['getPlayerNameByNameAndPositionAndTeamId']
export const getPlayerNameByNameAndPositionAndTeamId = async () => {
      const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/search`, {
        params : {q : "teamId",
                oq : "position"}
      } );
        return data
}


//practice6
export const getPlayerByTeamAndHeightAndPositionKey = ['getPlayerByTeamAndHeightAndPosition']
export const getPlayerByTeamAndHeightAndPosition = async () => {
      const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/search`, {
        params : {q : "teamName",
                oq : "height",
                iq : "position"
                }
      } );
        return data
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

//practice8
export const getPlayerByRegionNameOrderByHeightAndWeightKey = ['getPlayerByRegionNameOrderByHeightAndWeight']
export const getPlayerByRegionNameOrderByHeightAndWeight = async () => {
      const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/search`, {
        
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


