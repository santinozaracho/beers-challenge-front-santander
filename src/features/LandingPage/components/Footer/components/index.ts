import styled from 'styled-components'

const RowContainer = styled.div`
  background: ${({theme}) => theme.primaryColor};
  height: 126px;
  font-size: 14px;
  @media (max-width: 767px) {
    min-height: 240px;
    & > div {
      height: 167px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      padding: 0px 10px 0px;
    }
  }
  @media ${({theme}) => theme.xs} {
    font-size: 12px;
  }

  @media ${({theme}) => theme.sm} {
    padding: 40px 50px 30px;
  }

  @media ${({theme}) => theme.lg} {
    padding: 40px 100px 30px;
  }
  @media ${({theme}) => theme.xl} {
    padding: 40px 200px 30px;
  }
`

export {  RowContainer }
