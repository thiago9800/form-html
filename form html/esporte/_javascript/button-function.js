function Sim()
    {
        window.location="formulario.html"   
    } 

function Nao()
    {
        alert('Apenas clientes maiores de idade poderão participar das promoções.');
     } 

        var button1 = document.getElementById("buttons");
        button1.addEventListener("click", Sim);

        var button2 = document.getElementById("buttonn");
        button2.addEventListener("click", Nao);

