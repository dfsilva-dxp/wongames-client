import React from "react";
import type { Preview } from "@storybook/react";

import { ThemeProvider } from "styled-components";
import { DefaultTheme, GlobalStyles } from "../src/styles";

import theme from "../src/styles/theme";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    backgrounds: {
      default: "won-light",
      values: [
        {
          name: "won-light",
          value: theme.colors.white
        },
        {
          name: "won-dark",
          value: theme.colors.mainBg
        }
      ]
    }
  }
};

export default preview;

export const decorators = [
  (Story) => (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
];
