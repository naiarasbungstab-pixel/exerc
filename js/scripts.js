const mario =document.queryselector('.mario');

const junp = () => {
 mario.classlist.add('junp')

 setTimeout(() => {
    
 mario.classlist.remove('junp');
 
  },500); 

} 
 
cosnt leep = setInterval(() => {

  cosnt pipeposition = pipe.offsotleft;
   
 if (pipeposition = 120){

    pipe.style.animation = 'nome';
    pipe.style.left='{pipeposition}px';
    
    mario.style.animation= 'nome';
    mario.style.bottom='{marioposition}px';


    mario.scr='./imagem/game-over,png';
    mario.style.windth=75'
    mario.style.marginleft='50px'
 }
    
 }

}, 10);


  document.addeventlistener('keydom',junp) ;

  

