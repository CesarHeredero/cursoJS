let aprendiendo;

//anterior
aprendiendo = function() {
    console.log('aprendiendo');
}

// con arrow function
aprendiendo = () => {
    console.log('aprendiendo');
}

// con arrow function sin llaves - retorna valor
aprendiendo = () => 'eeee';

// con arrow function sin llaves - retorna objeto
aprendiendo = () => ({
    aprenciendo: 'eeee'
});

//parar parametros
aprendiendo = (tecnologia) => console.log(`eeee ${tecnologia}`);

aprendiendo('javascript');