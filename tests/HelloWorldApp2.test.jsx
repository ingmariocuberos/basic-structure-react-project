const { render, screen } = require("@testing-library/react")
const { HelloWorldApp } = require("../src/HelloWorldApp")

describe('Pruebas en HelloWorldApp', ()=>{

    const title = 'Hola Soy Goka';
    const subtitulo = 'Subtitulo';
    const { container } = render( <HelloWorldApp subtitulo={subtitulo}/> )

    test('Debe hacer match con el snapshot', ()=>{
        render( <HelloWorldApp title={title} subtitulo={subtitulo}/> );

        expect( screen.getByText(title) ).toBeTruthy();
    });

    test('debe de mostrar el subtitulo enviado por las props', ()=>{
        
    })

})