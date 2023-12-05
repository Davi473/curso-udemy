function teste1(num) {
    if (num > 7) // da para fazer if sem chaves
        console.log(num); // essa sentensa pertence ao if
    console.log("Final"); // essa sentensa sempre sera excutada por n faz parte do if
}

// quando é so usado uma sentensa no if n precisa usar as chaves

//teste1(6); // n vai mostra
//teste1(8);


function test2(num) {
    if(num > 7 ); { // o if esta sepado do block por causa do ;
        console.log(num)
    }
}
// ter cuidado com o ; em esctrutura de controle
// seria a mesma coisa
/*
function test2(num) {
    if( num > 7 );
    {
        console.log(num)
    }
}
*/
test2(6)
test2(8)