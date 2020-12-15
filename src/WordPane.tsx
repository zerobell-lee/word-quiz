import React, { Component } from 'react';
import ReactWordcloud from 'react-wordcloud';

export interface Color {
    r: number;
    g: number;
    b: number;
}

export interface WordElement {
    color: Color;
    text: string;
    value: number;
}

interface QuizParam {
    text: string;
}

export interface Quiz {
    nameToDisplay: string;
    id: string;
    color: Color;
}

interface Props {
    quizzes: Array<QuizParam>;
    width?: number;
    height?: number;
    colorMapper(id: string): Color;
    generateTextId(input: string): string;
    toWordElements(input: Quiz): Array<WordElement>;
}

interface State {
    quizzes: Array<Quiz>;
}

class WordPane extends Component<Props, State> {
    state: State = {
        quizzes: this.props.quizzes.map(q => {
            return {
                nameToDisplay: q.text,
                id: this.props.generateTextId(q.text),
                color: this.props.colorMapper(this.props.generateTextId(q.text))
            };
        })
    };

    submitAnswer(word: string) {
        this.setState({ quizzes: this.state.quizzes.filter(q => this.props.generateTextId(q.id) === word) });
    }

    render() {
        return <ReactWordcloud words={this.state.quizzes
            .map(q => this.props.toWordElements(q)).reduce((accum, value) => accum.concat(value), [])} />;
    }
}

export default WordPane;