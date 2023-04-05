import React from 'react';
import GroupItem from './groupItem';
import axios from 'axios';

//необходим рефакторинг - скорее всего удалить groupItem, чтобы не передавать все функции. 
const config = {
  headers: { Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJhMjg0YmFmZC1mMmZhLTRmZjMtNTRiYS0wOGRiMzI2MjMyMTMiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9hdXRoZW50aWNhdGlvbiI6Ijg0Nzk5ZmMyLWRkMDctNGI3Mi05NmRjLTlkMTQ4NWY1YTJmMSIsIm5iZiI6MTY4MDY5MjM3MiwiZXhwIjoxNjgwNjk1OTcyLCJpYXQiOjE2ODA2OTIzNzIsImlzcyI6IkNhbXB1c0NvdXJzZS5BUEkiLCJhdWQiOiJDYW1wdXNDb3Vyc2UuQVBJIn0.dkLh2wCTfCJ1qVm8VMfZEZlIe3rvGBC71fsV8TuDK4g"}` }
};
class Group extends React.Component {
    constructor(props) {
      super(props);
     
      axios.get("https://camp-courses.api.kreosoft.space/groups", config).then(response =>{
        console.log(response)
            this.props.setGroup(response.data)
          })
  
      }
    render() {
      return (
        <div className="mt-3 mb-3 p-3">
            <div className="list-group">
            {this.props.group.map((value) => {
                return <GroupItem delete = {this.props.delete} name ={value.name}
                key = {value.id}
                id = {value.id}/>
            })
            }
            </div>
        </div>)
    }
  }
  
  export default Group;
  