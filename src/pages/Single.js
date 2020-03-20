import React, { useContext, useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import { Row, Col } from 'reactstrap'

import { H2, Page, P, Section, LoaderWrapper } from './../components/Elements'

import { DataContext } from '../DataProvider'

import Loader from 'react-loader-spinner'

const Loading = () => {
  return (
    <LoaderWrapper>
      <Loader type="Puff" color="#00BFFF" height={100} width={100} />
    </LoaderWrapper>
  )
}

export default function Home({ match }) {
  const { projects, isLoading, isLoaded, categories, loadData } = useContext(
    DataContext,
  )

  const [project, setProject] = useState({})

  useEffect(() => {
    if (isLoaded) {
      setProject(projects[match.params.id])
    }
    // eslint-disable-next-line  react-hooks/exhaustive-deps
  }, [projects, categories])

  useEffect(() => {
    if (!isLoaded) {
      loadData()
    }
    // eslint-disable-next-line  react-hooks/exhaustive-deps
  }, [])

  if (!project || !project.image) {
    return <Loading />
  }

  const projectImage = `https://apps.aecom-digital.com/excellence${project.image.url}`

  return (
    <Page color="gray_1">
      {isLoading && <Loading />}
      <Row className="m-0">
        <Col md="3"></Col>
        <Col md="6">
          <Section className="py-5">
            <H2>{project.title}</H2>
            <P>{project.project_text}</P>
            <div className="pt-2 pb-2">
              <img
                src={projectImage}
                alt={project.title}
                className="img-fluid"
              />
            </div>
            <Link to="/" className="text-uppercase small text-muted">
              Back to previous
            </Link>
          </Section>
        </Col>
        <Col md="3"></Col>
      </Row>
    </Page>
  )
}
