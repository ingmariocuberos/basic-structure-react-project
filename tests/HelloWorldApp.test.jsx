const { render } = require("@testing-library/react")
const { HelloWorldApp } = require("../src/HelloWorldApp")

describe('Pruebas en HelloWorldApp', ()=>{
    test('Debe hacer match con el snapshot', ()=>{
        const { container } = render( <HelloWorldApp subtitulo={'hola mundo'}/> )

        expect( container ).toMatchSnapshot();
    });

    test('debe de mostrar el titulo en un h1', ()=>{
        const title = 'Hola soy Gokú';
        const {container, getByText } = render( <HelloWorludApp title={title} subtitulo={'hola mundo'}/> )

        expect( getByText(title) ).toBeTruthy();
    })
})