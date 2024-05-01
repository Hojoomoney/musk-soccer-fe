import axios from "axios";

export const getDistinctByPositionKey = ['getDistinctByPosition'];
export const getDistinctByPosition = async() =>{
    const {data}=await axios.get(`${process.env.API_URL}/search`,
        {params:{q:'player',oq:'position'}}
    );

    return data;
}

export const getPlayerProblemKey = ['getPlayerProblem'];
export const getPlayerProblem = async() => {
    const {data} = await axios.get(`${process.env.API_URL}/search`,
        {params:{q:'player', op:'number'}}
    )
}