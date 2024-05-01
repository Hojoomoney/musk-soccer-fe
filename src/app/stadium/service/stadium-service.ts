import axios from "axios";

export const getTeamNameStadiumAwayTeamNameHeldDateKey = ['getTeamNameStadiumAwayTeamNameHeldDate'];
export const getTeamNameStadiumAwayTeamNameHeldDate = async() =>{
    const {data}=await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/search`,
        {params:{q:'stadium',date:''}}
    );
    
    return data;
}

export const getPlayerNamePostionTeamNameStadiumScheduleKey = ['getPlayerNamePostionTeamNameStadiumSchedule'];
export const getPlayerNamePostionTeamNameStadiumSchedule = async() =>{
    const {data}=await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/search`,
        {params:{q:'stadium',date:'',team:'',position:''}}
    );
    
    return data;
}

export const getStadiumScheduleHomeTeamNameAwayTeamNameByScoreKey = ['getStadiumScheduleHomeTeamNameAwayTeamNameByScore'];
export const getStadiumScheduleHomeTeamNameAwayTeamNameByScore = async() =>{
    const {data}=await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/search`,
        {params:{q:'stadium',score:''}}
    );
    
    return data;
}


export const getStadiumNameHomeTeamNameKey = ['getStadiumNameHomeTeamName'];
export const getStadiumNameHomeTeamName = async() =>{
    const {data}=await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/search`,
        {params:{q:'stadium'}}
    );
    
    return data;
}
