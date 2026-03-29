


function VideoPage() {
 

 

  
 

  return ( 

    <div>
    <video
  src="/video/hacking.mp4"
  autoPlay
  loop
  muted
  
  playsInline
  style={{
    width: "350px",
    height: "400px",
    objectFit: "cover",
  }}
/>


       <audio src="/audio/hacking.mp3" autoPlay loop  />

        <audio src="/audio/PleaseWait.mp3" autoPlay  />
        

       

</div>

   );
}

export default VideoPage;