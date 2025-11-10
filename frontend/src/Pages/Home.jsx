import axios from "axios";
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get("http://localhost:8000/api/user")
            console.log((await response).data)
        }
        getData()
    }, [])
    return(
        <h1>Home page</h1>
    )
}

export default Home