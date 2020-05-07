function Movie_OnStart(){
StackTrace="On Start";
SoundPlay("musica fondo",true);
VideoSetVolume("video",0);

}

function Frame__0_0(ID){
StackTrace="Scene 1 Frame 0";
Pause();


}

function Frame__1_0(ID){
StackTrace="Scene 2 Frame 0";
Pause();


}

function pausarvideo_OnClick(){
StackTrace="pausar video.On Click";
VideoPause("video");
SoundPlay("sonido boton",false);
}

function pausarvideo_OnRelease(){
StackTrace="pausar video.On Release";
VideoResume("video");
SoundPlay("sonido boton",false);
}

function escena1_OnClick(){
StackTrace="escena 1.On Click";
GotoSceneNameAndPlay("ESCENA SONIDO",0);
SoundPlay("sonido boton",false);
}

function sonidodelvideo_OnClick(){
StackTrace="sonido del video.On Click";
VideoSetVolume("video",100);
SoundPlay("sonido boton",false);
}

function sonidodelvideo_OnRelease(){
StackTrace="sonido del video.On Release";
VideoSetVolume("video",0);
SoundPlay("sonido boton",false);
}

function HotSpot1_OnClick(){
StackTrace="HotSpot1.On Click";


}

function escena2_OnClick(){
StackTrace="escena 2.On Click";
GotoSceneNameAndPlay("ESCENA VIDEO",0);
SoundPlay("sonido boton",false);
}

function reproducirmusica_OnClick(){
StackTrace="reproducir musica.On Click";
SoundPause("musica fondo");
SoundPlay("sonido boton",false);
}

function reproducirmusica_OnRelease(){
StackTrace="reproducir musica.On Release";
SoundResume("musica fondo");
SoundPlay("sonido boton",false);
}

