
let m_clave = "esc";
alert("Escríbe la palabra secreta.");
let m_input =  prompt("");

while (m_input != m_clave)
{

    alert("Pista: ESCríbe otra palabra.");
    m_input = prompt("");

    if (m_input == m_clave) 
    {
        alert("Ganaste :D");
    }
    else
    {
        alert("Esa no es la palabra mágica");
    }

}