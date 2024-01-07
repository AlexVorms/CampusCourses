import React from 'react';
import {Card} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { FoundSemester } from '../common/TranslationFuncions';
class CoursesItem extends React.Component {
    constructor(props) {
      super(props);
      this.TranslationSemester = this.TranslationSemester.bind(this);
      this.DeleteCourse = this.DeleteCourse.bind(this);
    }

    TranslationSemester(){
      if(this.props.status ==='Started'){
          return <div className = 'text-primary'>В процессе обучения</div>
      }
      else if(this.props.status === 'OpenForAssigning'){
          return <div className = 'text-success'>Открыт для записи</div>
      }
      else if(this.props.status === 'Created'){
          return <div className = 'text-secondary'>Создан</div>
      }
      else if(this.props.status === 'Finished'){
          return <div className = 'text-danger'>Закрыт</div>
      }
    }
   DeleteCourse(){
    this.props.deleteCourseThunk(this.props.id)
   }
    render() {
      return (
        <div className='p-3' type="button">
                <Card>
                <NavLink to = {'/courses/' + this.props.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Card.Header>
                        <h5>{this.props.name} </h5>
                        <div className='text-end'>{this.TranslationSemester()}</div>
                    </Card.Header>
                    </NavLink>
                     <Card.Body>
                        <div>
                        <div>Учебный год - {this.props.startYear}</div>
                        <div>Семестр - {FoundSemester(this.props)}</div>
                        <div className="fw-light">Мест всего - {this.props.maximumStudentsCount}</div>
                        <div className="fw-light">Мест свободно - {this.props.remainingSlotsCount}</div>
                        </div>
                        { this.props.Role.isAdmin? <div className = 'col d-grid gap-2 d-md-flex justify-content-md-end'>
                                 <button className="btn btn-outline-danger" onClick = {this.DeleteCourse}>Удалить</button>
                            </div> : null}
                     </Card.Body>
                </Card>
      
        </div>
      )
    }
  }

  export default CoursesItem;
