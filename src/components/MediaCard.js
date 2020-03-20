import React from 'react'

import { LazyLoadComponent } from 'react-lazy-load-image-component'

import { Link } from 'react-router-dom'

import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 100%;
  position: relative;
  background-color: ${props => props.theme.colors.black};
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  transition: all 0.5s ease;
`

const Content = styled(Link)`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.5s ease;
  text-decoration: none;

  &:hover {
    background: rgba(0, 0, 0, 0.5);
    text-decoration: none;
  }
`

const Title = styled.h5`
  color: ${props => props.theme.colors.white};
  text-align: center;
`

export default ({
  id = 'test',
  title = 'Lorem ipsum',
  backgroundImage = '/placeholder.png',
}) => {
  return (
    <LazyLoadComponent>
      <Wrapper backgroundImage={backgroundImage}>
        <Content to={`/${id}`}>
          <Title>{title}</Title>
        </Content>
      </Wrapper>
    </LazyLoadComponent>
  )
}
