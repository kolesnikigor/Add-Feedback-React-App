import React from 'react';

import FeedbackForm from '../containers/FeedbackForm';
import Feedback from '../components/Feedback';
import '../style/FeedbackList.css';


class FeedbackList extends React.Component {
  state = {
    comments: []
  }

  addComment = comment => {
    this.setState({
      comments: [...this.state.comments, comment]
    })
  }

  render() {
    return (
      <div className="section-feedback">
        <div className="section-top"> 
          <h2 className="title">Последние отзывы</h2>  
          <a href="#" className="link">Все отзывы</a>
          <p className="likes-volume">
            <span className="icon-like">
              <span className="path2"></span>
            </span>
            131
          </p>
          <p className="comments-volume">
            <span className="icon-comment">
              <span className="path2"></span>
            </span>
            14
          </p>
        </div>
        <div className="section-middle">
          <Feedback author='Самуил' date='13 октября 2011 г.' text='Привет, Верунь! ниче себе ты крутая. фотка класс!!!!'/>
          <Feedback author='Лилия Семёновна' date='14 октября 2011 г.' text='Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?'/>
          <Feedback author='Лилия Семёновна' date='14 октября 2011 г.' text='Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?'/>
          {this.state.comments.map(comment => (
             <Feedback key={comment.id} author='Лилия Семёновна' date={new Date().toLocaleString('ru', {year: 'numeric', month: 'long', day: 'numeric'})} text={comment.text}/>
             ))}
         
        </div>
        <div className="section-bottom">
          <FeedbackForm onSubmit={this.addComment}/>
        </div>
      </div>
    );
  }
}

export default FeedbackList;
