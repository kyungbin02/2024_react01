import React from 'react';
import Book from './Book';

function Library(props) {
    return (
        <div>
            <Book name="처음 만난 React" numOfPage="150" /> <hr />
            <Book name="처음 만난 Spring boot" numOfPage="550" /> <hr />
            <Book name="처음 만난 MySQL" numOfPage="250" /> <hr />
        </div>
    );
}


export default Library;