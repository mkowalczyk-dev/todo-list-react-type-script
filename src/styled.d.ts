import "styled-components";

import { theme } from "./theme";

type Theme = typeof theme;

declare module "styled-components" {
    export interface DefaultTheme extends Theme {} // DefaultTheme będzie miał ten sam typ co theme - potrzebne do plików styled.ts
}