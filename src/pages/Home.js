import React, { useContext, useEffect } from 'react'

import { Row, Col } from 'reactstrap'

import {
  H5,
  Page,
  P,
  Section,
  BACKTOP,
  LoaderWrapper,
} from './../components/Elements'

import MediaCard from './../components/MediaCard'

import { DataContext } from '../DataProvider'

import Loader from 'react-loader-spinner'

export default function Home() {
  const { projects, isLoading, isLoaded, categories, loadData } = useContext(
    DataContext,
  )

  useEffect(() => {
    if (!isLoaded) {
      loadData()
    }
  }, [])

  return (
    <Page>
      <div className="p-3">
        {isLoading && (
          <LoaderWrapper>
            <Loader type="Puff" color="#00BFFF" height={100} width={100} />
          </LoaderWrapper>
        )}

        {Object.keys(categories).map(category => {
          return (
            <Section key={category}>
              <H5 color="yellow">{categories[category].Category_title}</H5>
              <P>{categories[category].Category_intro}</P>
              <Row>
                {categories[category].projects.map(key => {
                  const project = projects[key]
                  return (
                    <Col key={key} md="3" className="mb-3">
                      <MediaCard
                        id={key}
                        title={project.title}
                        backgroundImage={`https://apps.aecom-digital.com/excellence${project.image.url}`}
                      />
                    </Col>
                  )
                })}
              </Row>
              <BACKTOP>Back to top</BACKTOP>
            </Section>
          )
        })}
      </div>
    </Page>
  )
}
