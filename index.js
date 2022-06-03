
let m_clave = "esc";


while (m_input != m_clave)
{
    
    let m_input =  prompt("Escríbe la palabra secreta.");
    alert("Pista: ESCríbe otra palabra.");
    m_input = prompt("Otra palabra");

    if (m_input == m_clave) 
    {
        alert("Ganaste :D");
    }
    else
    {
        alert("Esa no es la palabra mágica");
    }

}