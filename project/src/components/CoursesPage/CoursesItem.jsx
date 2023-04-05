import React from 'react';
import {Card} from 'react-bootstrap'

class CoursesItem extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.FoundSemester = this.FoundSemester.bind(this);
    }

    handleClick(){
        console.log(this.props.id)
      }
    FoundSemester(){
        console.log(this.props.semester)
        if (this.props.semester == 'Autumn'){
            return 'Осенний'
        }
        else if(this.props.semester == 'Spring'){
            return 'Весенний'
        }
    }
    render() {
      return (
        <div className='p-3' type="button">
             <div>
                <Card onClick={this.handleClick}>
                    <Card.Header>
                        <h5>{this.props.name} </h5>
                        <div className='text-end text-success'>{this.props.status}</div>
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
        </div>
      )
    }
  }

  export default CoursesItem;
