
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

export const TranslationSemester = (props) =>{
    if(props.status ==='Started'){
        return <div className = 'text-primary'>В процессе обучения</div>
    }
    else if(props.status === 'OpenForAssigning'){
        return <div className = 'text-success'>Открыт для записи</div>
    }
    else if(props.status === 'Created'){
        return <div className = 'text-secondary'>Создан</div>
    }
    else if(props.status === 'Finished'){
        return <div className = 'text-danger'>Закрыт</div>
    }
}