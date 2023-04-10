import React from 'react';
import GroupItem from './groupItem';
import axios from 'axios';
import Preloader from '../common/Preloader';



//необходим рефакторинг - скорее всего удалить groupItem, чтобы не передавать все функции. 
const config = {
  headers: { Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJhMjg0YmFmZC1mMmZhLTRmZjMtNTRiYS0wOGRiMzI2MjMyMTMiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9hdXRoZW50aWNhdGlvbiI6ImFlYmVjMGY5LTE3NTktNDhmZi04MDAzLTJlNDJkZTIxY2ZhMyIsIm5iZiI6MTY4MTAxMzMzMywiZXhwIjoxNjgxMDE2OTMzLCJpYXQiOjE2ODEwMTMzMzMsImlzcyI6IkNhbXB1c0NvdXJzZS5BUEkiLCJhdWQiOiJDYW1wdXNDb3Vyc2UuQVBJIn0.wn9CuZPKcAFqU796BDp70j-0L6k9TaZZGn1tVZLhW8g"}` }
};
class Group extends React.Component {
    constructor(props) {
      super(props);
      }
      
      componentDidMount(){
        this.props.setIsFetching(true)
        axios.get("https://camp-courses.api.kreosoft.space/groups", config).then(response =>{
              this.props.setGroup(response.data)
              this.props.setIsFetching(false)
            })
      }

    render() {
      return <>
      {this.props.isFetching ? <Preloader/> : null}
      <div className="mt-3 mb-3 p-3">
            <div className="list-group">
            {this.props.group.map((value) => {
                return <div key = {value.id}> <GroupItem delete = {this.props.delete} name ={value.name}
                key = {value.id}
                id = {value.id}/>
                </div>
            })
            }
            </div>
        </div>
        </>
    }
  }
  
  export default Group;
  