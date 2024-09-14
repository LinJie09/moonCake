import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import MoonCake from "../src/moonCake";

function App() {
  const audioRef = useRef(null); // 使用 useRef 來獲取 audio 元素
  const [isMuted, setIsMuted] = useState(true); // 初始為靜音
  const [isOverlayVisible,setIsOverlayVisible] = useState(true);

  useEffect(() => {
    const handleWindowLoad = async () => {
      if (audioRef.current) {
        audioRef.current.muted = true; // 初始靜音
        await audioRef.current.play(); // 嘗試播放音樂，這裡會因為沒用戶互動而失敗
      }
    };

    window.addEventListener('load', handleWindowLoad);

    return () => {
      window.removeEventListener('load', handleWindowLoad);
    };
  }, []);

  // const handleClick = async () => {
  //   if (audioRef.current) {
  //     if (isMuted) {
  //       audioRef.current.muted = false; // 點擊後解除靜音
  //       setIsMuted(false); // 更新狀態
  //     }
  //     try {
  //       await audioRef.current.play(); // 嘗試播放音樂
  //     } catch (error) {
  //       console.log("播放失敗：", error);
  //     }
  //   }
  //   setIsOverlayVisible(false);
  // };

  useEffect(()=>{
    const playMusic = async() =>{
      if(!isOverlayVisible && audioRef.current){
        if(!isMuted){
          audioRef.current.muted = false;
          
        }
        try {
          await audioRef.current.play();
        } catch (error) {
          console.log("play false",error);
        }
      }
    }
    playMusic();
  },[isOverlayVisible,isMuted])

  const handleClick = () =>{
    setIsMuted(false);
    setIsOverlayVisible(false);
  }
  



  return (
    <div className="appContainer">
      <audio ref={audioRef} preload='auto' loop>
        <source src='./backgroundMusic/bckMusic.mp3' type='audio/mpeg' />
      </audio>
      <MoonCake />
      {isOverlayVisible &&(
        <div className='divBtn' 
            onClick={handleClick} 
            style={{position:'absolute',width:'100%',height:'100%',top:0,left:0,zIndex:10}} >
          <div className='wordPosition'>
          <img className='clickImg' src='/cover.JPG'></img>
          </div>
        </div>
      )}
      {!isMuted && <div style={{ position: 'absolute', bottom: 10, right: 10, color: 'white' }}></div>}
    </div>




    // <div className='appContainer'>
    //   <MoonCake />  
    // </div>
  );
}

export default App;