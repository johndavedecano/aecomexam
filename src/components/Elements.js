import React from 'react'

import styled from 'styled-components'

export const H2 = styled.h2`
  font-family: ${props => props.theme.colors.fontFamily};
  color: ${props => props.theme.colors[props.color || 'white']};
`

export const H3 = styled.h3`
  font-family: ${props => props.theme.colors.fontFamily};
  color: ${props => props.theme.colors[props.color || 'white']};
`

export const H4 = styled.h4`
  font-family: ${props => props.theme.colors.fontFamily};
  color: ${props => props.theme.colors[props.color || 'white']};
`

export const H5 = styled.h5`
  font-family: ${props => props.theme.colors.fontFamily};
  color: ${props => props.theme.colors[props.color || 'white']};
`

export const H6 = styled.h6`
  font-family: ${props => props.theme.colors.fontFamily};
  color: ${props => props.theme.colors[props.color || 'white']};
`

export const SMALL = styled.small`
  font-family: ${props => props.theme.colors.fontFamily};
  color: ${props => props.theme.colors[props.color || 'white']};
`

export const P = styled.p`
  font-family: ${props => props.theme.colors.fontFamily};
  color: ${props => props.theme.colors[props.color || 'white']};
`

export const Page = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.colors[props.color || 'black']};
`

export const Section = styled.div`
  margin-bottom: ${props => props.theme.spacing.large};
`

export const BACKTOPLINK = styled.a`
  font-family: ${props => props.theme.colors.fontFamily};
  color: ${props => props.theme.colors[props.color || 'white']};
  font-size: 10px;
  text-transform: uppercase;
  &:hover {
    color: white;
    text-decoration: none;
  }
`

export const BACKTOP = ({ children, href = '#' }) => {
  return (
    <div className="d-flex mt-1">
      <div className="flex-grow-1"></div>
      <div>
        <BACKTOPLINK href={href}>{children}</BACKTOPLINK>
      </div>
    </div>
  )
}

export const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3000;
  color: rgba(0, 0, 0, 0.3);
`
