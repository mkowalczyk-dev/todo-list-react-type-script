import Section from "../../common/Section/index.js";
import Header from "../../common/Header/index.js";
import Container from "../../common/Container/index.js";
import { Image, ImageList } from "./styled.js";

function AuthorPage() {

  return (

    <Container>

      <Header
        title="O autorze"
      />

      <Section
        title="Michał Kowalczyk"
        body={
          <>
            <h3>
              Cześć. Z wykształcenia jestem architektem po studiach 5-letnich, natomiast postanowiłem sprawdzić się w innej dziedzinie ✊.
              Moje motto życiowe to:
            </h3>
            <h4 class="article__header article__header--boldItalic">"Po co gadać, jeśli wszystko wiadomo, a jeśli nic
              nie wiadomo, to po co gadać?"
            </h4>
            <p>W wolnym czasie lubię m.in. malować. Poniżej praca, którą aktualnie tworzę z anime "Demon Slayer"</p>
            <Image>
              <ImageList src="https://i.postimg.cc/1RqcPnqQ/Obraz.jpg" />
            </Image>
          </>
        }
      />

    </Container>
  );
}

export default AuthorPage;