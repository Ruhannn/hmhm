import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './Friend';



const Friends =() =>{

    const [friends, setFriends] = useState([]);
    console.log(setFriends)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    }, [])

    return (
        <div className='box'>
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}

export default Friends; 