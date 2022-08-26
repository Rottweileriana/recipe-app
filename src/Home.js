import styled from "styled-components";

const StyledP = styled.p`
font-size: 1.5em
`

const Disclaimer = styled.p`
    font-size: 1.2em;
      font-style: italic;
      text-decoration: underline;
`


function Home()  {
    return(
    <div>
    <h1>Välkommen</h1>
    <StyledP>Det här är en webapplication som jag bygger för att kunna anbvända när jag vill kolla upp recept som jag sparat ifrån olika källor.</StyledP>
    <Disclaimer>Jag äger inte något utav recepten</Disclaimer>
    </div>
    )
}


export default Home