import { connect } from "react-redux";
import React from 'react';
import News from "./news";
import { sortNewsAsc, sortNewsDesc, setNews, getNewsThunk, setLikeThunk } from '../../store/newsReducer';

class InnerNewsContainer extends React.Component {
    componentDidMount() {
        this.props.getNewsThunk();
    }
    render() { return (<News {...this.props} />) }
}
function mapStateToProps(state) {
    return { newsPage: state.newsPage }
}

const NewsContainer = connect(mapStateToProps,
    { sortNewsAsc, sortNewsDesc, setNews, getNewsThunk, setLikeThunk })(InnerNewsContainer);
export default NewsContainer;
