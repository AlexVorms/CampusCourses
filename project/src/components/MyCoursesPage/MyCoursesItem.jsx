import React from 'react';
import {Card} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { FoundSemester, TranslationSemester } from '../common/TranslationFuncions';

class MyCoursesItem extends React.Component {
    render() {
      return (
        <div className='p-3' type="button">
                <Card >
                <NavLink to = {'/courses/' + this.props.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Card.Header>
                        <h5>{this.props.name} </h5>
                        <div className='text-end'>{TranslationSemester(this.props)}</div>
                    </Card.Header>
                    </NavLink>
                     <Card.Body>
                        <div>
                        <div>Учебный год - {this.props.startYear}</div>
                        <div>Семестр - {FoundSemester(this.props)}</div>
                        <div className="fw-light">Мест всего - {this.props.maximumStudentsCount}</div>
                        <div className="fw-light">Мест свободно - {this.props.remainingSlotsCount}</div>
                        </div>
                     </Card.Body>
                </Card>
        </div>
      )
    }
  }

  export default MyCoursesItem;
