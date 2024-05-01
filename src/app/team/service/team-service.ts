import axios from "axios";

export const getDistinctByPositionKey = ['getDistinctByPosition'];
export const getDistinctByPosition = async() =>{
    const {data}=await axios.get(`${process.env.API_URL}/search`,
        {params:{q:'team'}}
    );

    return data;
}

export const getTeamNamePlayerNamePositionInTeamAndTeamAndPositionKey = ['getTeamNamePlayerNamePositionInTeamAndTeamAndPosition'];
export const getTeamNamePlayerNamePositionInTeamAndTeamAndPosition = async() =>{
    const {data}=await axios.get(`${process.env.API_URL}/search`,
        {params:{q:'team',team1:'',team2:'',team3:''}}
    );

    return data;
}

export const getRegionNameTeamNamStadiumKey = ['getRegionNameTeamNamStadium'];
export const getRegionNameTeamNamStadium = async() =>{
    const {data}=await axios.get(`${process.env.API_URL}/search`,
        {params:{q:'team'}}
    );

    return data;
}

export const getHeightTeamNamePlayerNameKey = ['getHeightTeamNamePlayerName'];
export const getHeightTeamNamePlayerName = async() =>{
    const {data}=await axios.get(`${process.env.API_URL}/search`,
        {params:{q:'team',team1:'',team2:'',height1:0.0,height2:0.0}}
    );

    return data;
}

export const getaPlayerWithoutPositionKey = ['getaPlayerWithoutPosition'];
export const getaPlayerWithoutPosition = async() =>{
    const {data}=await axios.get(`${process.env.API_URL}/search`,
        {params:{q:'team'}}
    );

    return data;
}

export const getAverageHeightOfTeamShorterAverageHeightOfEntireTeamKey = ['getAverageHeightOfTeamShorterAverageHeightOfEntireTeam'];
export const getAverageHeightOfTeamShorterAverageHeightOfEntireTeam = async() =>{
    const {data}=await axios.get(`${process.env.API_URL}/search`,
        {params:{q:'team', height:0.0}}
    );

    return data;
}