
export const FoundSemester = (props) =>{
    if (props.semester === 'Autumn'){
        return 'Осенний'
    }
    else if(props.semester === 'Spring'){
        return 'Весенний'
    }
    else if(props.semester === 'Summer'){
        return 'Летний'
    }
    else if(props.semester === 'Winter'){
        return 'Зимний'
    }
}