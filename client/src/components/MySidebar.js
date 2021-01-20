import React from 'react'
import './MySidebar.css'

export default function MySidebar() {

    const listItem = [
        { name: 'Computer Science & IT' },
        { name: 'Artificial Intelligence' },
        { name: 'Business Information Systems' },
        { name: 'Computer Sciences' },
        { name: 'Cyber Security' },
        { name: 'Data Science & Big Data' },
        { name: 'Geographical Information Systems' },
        { name: 'Health Informatics' },
        { name: 'Human Computer Interaction' },
        { name: 'IT Security' },
        { name: 'Informatics & Information Sciences' },
        { name: 'Machine Learning' },
        { name: 'Software Engineering' },
        { name: 'Video Games & Multimedia' },
        { name: 'Web Technologies & Cloud Computing' }]

    const Mylist = listItem.map((listItem1) => listItem1);

    return (
        <div>
            <div className="SideBarContainer">
                <div className="SideBarContent">
                    <p className="alldiscipline"><i class="fas fa-arrow-down"></i> All Discipline</p>
                    <p className="alldiscipline2">Computer Science & IT</p>
                    <hr></hr>
                    <div className="disciplineList">
                        <div className="list">
                            {listItem.map(listItem => (
                                <p className="contentList">{listItem.name}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
