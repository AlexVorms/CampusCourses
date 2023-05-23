import React from 'react';
import {Card} from 'react-bootstrap'


class MyTeachingCoursesItem extends React.Component {
    constructor(props) {
      super(props);
      this.FoundSemester = this.FoundSemester.bind(this);
      this.TranslationSemester = this.TranslationSemester.bind(this);
    }

    FoundSemester(){
        if (this.props.semester === 'Autumn'){
            return 'Осенний'
        }
        else if(this.props.semester === 'Spring'){
            return 'Весенний'
        }
        else if(this.props.semester === 'Summer'){
          return 'Летний'
      }
      else if(this.props.semester === 'Winter'){
          return 'Зимний'
      }
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
    render() {
      return (
        <div className='p-3' type="button">
                <Card onClick={this.handleClick}>
                    <Card.Header>
                        <h5>{this.props.name} </h5>
                        <div className='text-end'>{this.TranslationSemester()}</div>
                    </Card.Header>
                     <Card.Body>
                        <div>
                        <div>Учебный год - {this.props.startYear}</div>
                        <div>Семестр - {this.FoundSemester()}</div>
                        <div className="fw-light">Мест всего - {this.props.maximumStudentsCount}</div>
                        <div className="fw-light">Мест свободно - {this.props.remainingSlotsCount}</div>
                        </div>
                     </Card.Body>
                </Card>
        </div>
      )
    }
  }

  export default MyTeachingCoursesItem;
