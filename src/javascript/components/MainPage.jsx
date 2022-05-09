import React from 'react';

import Header from './Header';
import MessagesList from './MessagesList';
import MessagesSubmit from './MessagesSubmit';

function MainPage(props) {
    return ( 
        <div id="MainPage">
             <Header />
            <h1 className='mt-10 text-pink-600 text-3xl font-italic'>From here you can send messages to anyone you want to any corner of the world </h1>
            <div className="flex max-w-7xl m-auto px-14 py-24">
                    <div className='w-1/2 pr-5'>
                        <MessagesSubmit /> 
                    </div>
                    <div className='w-1/2 pl-5'>
                        <MessagesList />
                    </div>
                </div>
        </div>
     );
}

export default MainPage;