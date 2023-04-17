import React from "react";
import { Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';

class RequirementsCourse extends React.Component {
    render(){
        return (
            <div className = 'p-2'>
                <div class="card ">
                    <div class="card-header">
                        <ul class="nav nav-tabs card-header-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="true"  href="#">Требования к курсу</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Аннотация</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">Уведомления</a>
                        </li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <div class="card-text" dangerouslySetInnerHTML={{ __html: this.props.requirements}}></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RequirementsCourse