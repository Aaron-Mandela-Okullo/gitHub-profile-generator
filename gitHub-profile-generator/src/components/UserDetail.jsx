import React, { useEffect, useState } from 'react'
import "./UserDetail.css";
import { useLocation, useNavigate } from 'react-router-dom';
import Tabs from './Tabs';
import Repo from './Repo';
import Events from './Events';
import UsersCont from './UsersCont';
const UserDetail = () => {
  const[user,setUser] = useState([]);
  const[type,setType] = useState("repos");
  const[infos,setInfos] = useState([]);
  const {pathname} = useLocation();
  const navigate = useNavigate();
  let BaseURL = "https://api.github.com/users";

  async function GetUserDetail() {
    const res = await fetch(BaseURL + pathname);
    const data = await res.json();
    setUser(()=>[data]);
  }
  async function GetUrls() {
    const res = await fetch(BaseURL + pathname + `/${type}`);
    const data = await res.json();
    setInfos(data);
  }
  useEffect(()=>{
    GetUserDetail();
    GetUrls();
  },[pathname,type]);
  return (
    <div className='UserDetail-container'>
      <button onClick={()=>navigate('/')} className='UserDetail-button'>Back</button>
      {
        user && user?.map((udetail,i)=>(
          <div key={i} className='userDetail-container'>
            <img src={udetail.avatar_url} className='udetail-img'/>
            <div className='udetail-h1-cont'>
              <h1 className='udetail-h1'>{udetail?.name}</h1>
              <h1>
                <span className='udetail-span'>Login_name</span> :{""} {udetail?.login}
              </h1>
              <h1>
                <span className='followers-span'>Followers : </span> {udetail?.followers}
              </h1>
              <h1>
                <span className='followers-span'>Following : </span> {udetail?.following}
              </h1>
              <h1>
                <span className='followers-span'>Public_Repos : </span> {udetail?.public_repos}
              </h1>
              <h1>
                <span className='followers-span'>Joined : </span> {new Date(udetail?.created_at).toLocaleDateString()}
              </h1>
              <a href={udetail?.html_url} target='_blank' className='visit-link'>
                Visit
              </a>
            </div>
          </div>
        ))
      }
      <div className='bttns'>
     
        <Tabs type={type} setType={setType}/>
      </div>
      {type === " repos" && 
        <div className='repo-cont'>
          {infos && <Repo repos={infos} />}
        </div>
      }
       {type === " received_events" && (
        <div>
          {infos && <Events events={infos}/>}
        </div>
      )}
      {type === " followers" && (
        <div>
          <UsersCont users={infos} />
        </div>
      )}
    </div>
  )
}

export default UserDetail
 