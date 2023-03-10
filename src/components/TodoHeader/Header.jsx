import React from 'react'
import { Col, Row } from 'react-bootstrap'
import s from './Head.module.css'
const Header = () => {
  return (
    <Row>
      <Col>
        <div className={s.head}>Todo List</div>
      </Col>
    </Row>
  )
}

export default Header