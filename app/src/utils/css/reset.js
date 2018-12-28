import { css } from "styled-components";

const reset = css`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    box-sizing: border-box;
    font-weight: normal;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ol,
  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  @font-face {
    font-family: "Inter UI Bold";
    src: url("../../../assets/fonts/Inter/web/InterUI-Bold.woff2")
        format("woff2"),
      url("../../../assets/fonts/Inter/web/InterUI-Bold.woff") format("woff");
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: "Inter UI Medium";
    src: url("../../../assets/fonts/Inter/web/InterUI-Medium.woff2")
        format("woff2"),
      url("../../../assets/fonts/Inter/web/InterUI-Medium.woff") format("woff");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "Inter UI Italic";
    src: url("../../../assets/fonts/Inter/web/InterUI-Italic.woff2")
        format("woff2"),
      url("../../../assets/fonts/Inter/web/InterUI-Italic.woff") format("woff");
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: "Inter UI Semi Bold Italic";
    src: url("../../../assets/fonts/Inter/web/InterUI-SemiBoldItalic.woff2")
        format("woff2"),
      url("../../../assets/fonts/Inter/web/InterUI-SemiBoldItalic.woff")
        format("woff");
    font-weight: 600;
    font-style: italic;
  }

  @font-face {
    font-family: "Inter UI Extra Bold";
    src: url("../../../assets/fonts/Inter/web/InterUI-ExtraBold.woff2")
        format("woff2"),
      url("../../../assets/fonts/Inter/web/InterUI-ExtraBold.woff")
        format("woff");
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: "Inter UI Black";
    src: url("../../../assets/fonts/Inter/web/InterUI-Black.woff2")
        format("woff2"),
      url("../../../assets/fonts/Inter/web/InterUI-Black.woff") format("woff");
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: "Inter UI Extra Bold Italic";
    src: url("../../../assets/fonts/Inter/web/InterUI-ExtraBoldItalic.woff2")
        format("woff2"),
      url("../../../assets/fonts/Inter/web/InterUI-ExtraBoldItalic.woff")
        format("woff");
    font-weight: 800;
    font-style: italic;
  }

  @font-face {
    font-family: "Inter UI Semi Bold";
    src: url("../../../assets/fonts/Inter/web/InterUI-SemiBold.woff2")
        format("woff2"),
      url("../../../assets/fonts/Inter/web/InterUI-SemiBold.woff")
        format("woff");
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: "Inter UI Regular";
    src: url("../../../assets/fonts/Inter/web/InterUI-Regular.woff2")
        format("woff2"),
      url("../../../assets/fonts/Inter/web/InterUI-Regular.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Inter UI Medium Italic";
    src: url("../../../assets/fonts/Inter/web/InterUI-MediumItalic.woff2")
        format("woff2"),
      url("../../../assets/fonts/Inter/web/InterUI-MediumItalic.woff")
        format("woff");
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: "Inter UI Black Italic";
    src: url("../../../assets/fonts/Inter/web/InterUI-BlackItalic.woff2")
        format("woff2"),
      url("../../../assets/fonts/Inter/web/InterUI-BlackItalic.woff")
        format("woff");
    font-weight: 900;
    font-style: italic;
  }

  @font-face {
    font-family: "Inter UI Bold Italic";
    src: url("../../../assets/fonts/Inter/web/InterUI-BoldItalic.woff2")
        format("woff2"),
      url("../../../assets/fonts/Inter/web/InterUI-BoldItalic.woff")
        format("woff");
    font-weight: bold;
    font-style: italic;
  }
`;

export default reset;
