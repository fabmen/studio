var download = document.getElementById('download');



function downloadVideo(){
  player.record().saveAs({'video': 'video.mp4'});
}function downloadAudio(){
  player.record().saveAs({'audio': 'audio.mp3'});
}
