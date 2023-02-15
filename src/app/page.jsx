'use client'

export default function Home() {
  function loadIdea(idea) {
    let ideas = document.getElementById(`idea-${idea}`)
    let all = document.getElementById('all')
    ideas.style.display = 'block';
    all.style.display = 'none';
    setTimeout(()=>{
      ideas.style.display = 'none';
    all.style.display = 'block';
    }, 8000)
  }
  return (<>
  <div id="all">
  <section className="container">
    <div ><h1>Para el amor de mi vida, Jenniffer</h1>
    <p>Decidí que darte una carta convencional no era suficiente, así que quise expresarte las mismas palabras a través de algo que perdure para siempre y no pueda degradarse con el tiempo, al contrario, puedo hacer que cada vez sea mejor.</p>
    <p>Las ideas que quiero expresarte hoy son sencillas, pero que sean sencillas no las hace menos importantes para mí, abajo tendrás algunas de las más importantes.</p>
    <button onClick={()=>loadIdea(1)}>Idea número 1</button>
    <button onClick={()=>loadIdea(2)}>Idea número 2</button>
    </div>
  </section>
  <section className="container-2">
  </section>
  </div>
  <div id="idea-1" className="idea">
    <p>Me encantaría estar contigo cada noche que vayas a dormir, contarte alguna historia o solo acariciarte hasta que estés teniendo los mejores sueños.</p>
  </div>
  <div id="idea-2" className="idea">
    <p>Ya sé que no quieres llegar a viejita, pero si se diera el caso, me gustaría estar contigo en una escena como esta, luego de haber vivido toda una vida juntos.</p>
  </div>
 
  
 
  </>
  )}