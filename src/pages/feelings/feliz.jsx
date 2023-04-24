import { Container } from "@mui/material";
import "../../App.css"

export default function Feliz(){
    return(
    <div>
        <Container  //organizar container!
        sx={{ bgcolor: 'var(--cor4)', height: '100vh', borderRadius: 8, width:'135vh'}} 
        ><h1 style={{ textAlign: 'center', marginTop: 10 }}>Alegriaaaaaa</h1>
        <iframe 
            style={{ borderRadius:12, marginTop:10 }}
            src="https://open.spotify.com/embed/playlist/4IuAswMJUgkNTRB81JlZVH?utm_source=generator&theme=0" 
            width="100%" 
            height="452" 
            frameBorder="0" 
            allowfullscreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
        </iframe>
        </Container>
    </div>
    );
}
