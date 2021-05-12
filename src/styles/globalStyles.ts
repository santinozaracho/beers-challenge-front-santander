import { createGlobalStyle } from 'styled-components'
// TODO check if is the only way to apply this styles, at the moment is the unique that works..
// EXPLANATION the tooltip renders in the main body at top level, i think that "styled" scope cant reach

const GlobalStyles = createGlobalStyle`

  .ant-tooltip-inner {
    padding: 10px 20px 10px 20px;
    font-size: 13px;
    line-height: 20px;
    border-radius: 10px;
  }

`
export { GlobalStyles }
