import { StyledSection, SectionGrid, SectionTitle } from "./styled";
import { ReactNode } from "react";

interface SectionProps {
    title: ReactNode;
    body: ReactNode;
    extraHeaderContent?: ReactNode;
}

const Section = ({ title, body, extraHeaderContent }: SectionProps) => (
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