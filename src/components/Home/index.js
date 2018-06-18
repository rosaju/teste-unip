import React, { Component } from 'react';
import './home.css'
import usuarios from '../../img/student.png';
import curso from '../../img/mortarboard.png';
import disciplina from '../../img/desk.png';
import video from '../../img/laptop.png';
import curriculos from '../../img/test.png';
import grade from '../../img/test (1).png';
import conteudo from '../../img/open-book.png';
import livro from '../../img/books.png';
import prova from '../../img/exam.png';
import exercicio from '../../img/blackboard.png';



class Home extends Component {
    render() {
        return (
            <section className="homeCards">
                <div className="homeCards__list"> 
                    <div className="card">
                        <img src={usuarios} alt="usuários" className="card__icon"/>
                        <p className="card__name">Usuários</p>
                    </div>
                    <div className="card">
                        <img src={curso} alt="curso" className="card__icon"/>
                        <p className="card__name">Curso</p>
                    </div>
                    <div className="card">
                        <img src={disciplina} alt="disciplina" className="card__icon"/>
                        <p className="card__name">Disciplina</p>
                    </div>
                    <div className="card">
                        <img src={video} alt="video aula e slide" className="card__icon"/>
                        <p className="card__name">Vídeo Aula/Slide</p>
                    </div>                    
                </div>

                <div className="homeCards__list"> 
                    <div className="card">
                        <img src={curriculos} alt="currículos" className="card__icon"/>
                        <p className="card__name">Currículos</p>
                    </div>
                    <div className="card">
                        <img src={grade} alt="grade" className="card__icon"/>
                        <p className="card__name">Grade</p>
                    </div>
                    <div className="card">
                        <img src={conteudo} alt="disciplina" className="card__icon"/>
                        <p className="card__name">Conteúdo do Livro</p>
                    </div>
                    <div className="card">
                        <img src={livro} alt="livro" className="card__icon"/>
                        <p className="card__name">Livro</p>
                    </div>                    
                </div>

                <div className="homeCards__list"> 
                    <div className="card">
                        <img src={prova} alt="prova" className="card__icon"/>
                        <p className="card__name">Prova</p>
                    </div>
                    <div className="card">
                        <img src={exercicio} alt="exercício" className="card__icon"/>
                        <p className="card__name">Exercício</p>
                    </div>                   
                </div>
            </section>
        )
    }
}

export default Home;

