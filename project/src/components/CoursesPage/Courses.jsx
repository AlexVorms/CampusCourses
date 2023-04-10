import React from 'react';
import CoursesItem from './CoursesItem';
import axios from 'axios';

const config = {
  headers: { Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJhMjg0YmFmZC1mMmZhLTRmZjMtNTRiYS0wOGRiMzI2MjMyMTMiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9hdXRoZW50aWNhdGlvbiI6ImFlYmVjMGY5LTE3NTktNDhmZi04MDAzLTJlNDJkZTIxY2ZhMyIsIm5iZiI6MTY4MTAxMzMzMywiZXhwIjoxNjgxMDE2OTMzLCJpYXQiOjE2ODEwMTMzMzMsImlzcyI6IkNhbXB1c0NvdXJzZS5BUEkiLCJhdWQiOiJDYW1wdXNDb3Vyc2UuQVBJIn0.wn9CuZPKcAFqU796BDp70j-0L6k9TaZZGn1tVZLhW8g"}` }
};

class Courses extends React.Component {
    constructor(props) {
        super(props);
        
      }
      componentDidMount(){
        if(this.props.courses.length === 0){
        axios.get("https://camp-courses.api.kreosoft.space/groups/" + this.props.match.params.id,config).then(response =>{
          console.log(response)
            this.props.setCourses(response.data)
          })
        }
      }
    render() {
      return (
        <div className="mt-3 mb-3">
            <div className="list-group">
            {this.props.courses.map((value) => {
                return <CoursesItem name ={value.name}
                key = {value.id}
                id = {value.id}
                startYear={value.startYear}
                semester = {value.semester}
                maximumStudentsCount = {value.maximumStudentsCount}
                remainingSlotsCount = {value.remainingSlotsCount}
                status = {value.status}/>
            })
            }
            </div>
        </div>)
    }
  }
  
  export default Courses;
  