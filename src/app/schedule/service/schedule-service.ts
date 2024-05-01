import axios from "axios";

export const getStadiumWithMonthLongGameKey = ['getStadiumWithMonthLongGame'];
export const getStadiumWithMonthLongGame = async() =>{
    const {data}=await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/search`,
        {params:{q:'schedule',date1:'',date2:''}}
    );
    
    return data;
}