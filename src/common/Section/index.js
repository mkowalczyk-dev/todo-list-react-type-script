import { StyledSection, SectionGrid, SectionTitle } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection>
        <SectionGrid>
            <SectionTitle>
                {title}
            </SectionTitle>
            {extraHeaderContent}
        </SectionGrid>
        {body}
    </StyledSection>
)

export default Section;