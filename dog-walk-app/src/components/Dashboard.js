import React, { useEffect } from "react";
import TinderCard from "react-tinder-card";
import { useState } from "react";
import ChatContainer from "./ChatContainer";
import axios from "axios";
import { useCookies } from "react-cookie";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [genderedUsers, setGenderedUsers] = useState(null)
  const [lastDirection, setLastDirection] = useState();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const userId = cookies.UserId;

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:8000/user", {
        params: { userId },
      });

      setUser(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getGenderedUsers = async () => {
    try {
     const response = await axios.get('http://localhost:8000/gendered-users', {
        params: { gender: user?.gender_interest }
      })
      setGenderedUsers(response.data)
    } catch (err) {
      console.log(err)
    }
  }


  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (user) {
        getGenderedUsers()
    }
}, [user])

  // console.log("user", user);
  // console.log("gendered users", genderedUsers)



  // const db = [
  //   {
  //     name: "Richard Hendricks",
  //     url: "https://i.imgur.com/Gg6BpGn.jpeg",
  //   },
  //   {
  //     name: "Erlich Bachman",
  //     url: "https://i.imgur.com/Lnt9K7l.jpeg",
  //   },
  //   {
  //     name: "Monica Hall",
  //     url: "https://i.imgur.com/OckVkRo.jpeg",
  //   },
  //   {
  //     name: "Jared Dunn",
  //     url: "https://i.imgur.com/Q9WPlWA.jpeg",
  //   },
  //   {
  //     name: "Dinesh Chugtai",
  //     url: "https://i.imgur.com/dmwjVjG.jpeg",
  //   },
  // ];
  // const characters = db;


  const updateMatches = async (matchedUserId) => {
    try {
        await axios.put('http://localhost:8000/addmatch', {
            userId,
            matchedUserId
        })
        getUser()
    } catch (err) {
        console.log(err)
    }
  }

  const swiped = (direction, swipedUserId) => {
   if(direction ==='right'){
    updateMatches(swipedUserId)
   }
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };


const matchedUserIds = user?.matches.map(({user_id}) => user_id).concat(userId)

const filteredGenderedUsers = genderedUsers?.filter(
  genderedUser => !matchedUserIds.includes(genderedUser.user_id)
)





  return (
    <>
    {user && 
    <div className="dashboard">
      <ChatContainer user = {user}/>
      <div className="swipe-info">
        {lastDirection ? <p>You swiped {lastDirection}</p> : <p></p>}
      </div>
      <div className="swiper-container">
        <div className="card-container">

          {filteredGenderedUsers?.map((character) => (
            <TinderCard
              className="swipe"
              key={character.user_id}
              onSwipe={(dir) => swiped(dir, character.user_id)}
              onCardLeftScreen={() => outOfFrame(character.first_name)}
            >
              <div
                style={{ backgroundImage: "url(" + character.url + ")" }}
                className="card"
              >
                <h3>{character.first_name}</h3>
              </div>
            </TinderCard>
          ))}

        </div>
      </div>
    </div>
  }
  </>
  );
};

export default Dashboard;
