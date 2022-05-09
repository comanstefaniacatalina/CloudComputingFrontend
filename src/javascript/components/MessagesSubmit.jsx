// MessagesSubmit.jsx
import React from 'react';
import axios from 'axios';
import { UserIcon, LocationMarkerIcon} from '@heroicons/react/solid'
import { LANGUAGES_ARRAY, DEFAULT_MAIL } from '../utils/constants';

function MessagesSubmit() {

    const handleMessageSend = async (e) => {
        const language = e.target.value;
        const senderName = document.getElementById('senderName').value;
        const senderCountry=document.getElementById('senderCountry').value;
        const receiverCountry=document.getElementById('receiverCountry').value;
        const receiverMail = document.getElementById('receiverMail').value;
        const messageContent = document.getElementById('messageContent').value;

        try {
            let response = await axios.post(
                `${process.env.REACT_APP_API_URL}/messages/foreign`,
                {
                    language,
                    senderName,
                    senderMail: DEFAULT_MAIL,
                    senderCountry,
                    receiverCountry,
                    receiverMail,
                    messageContent
                });

                if(response.status === 200) {
                    alert(`Your original messages was in ${response.data.translationData.originalLanguage}. \nMessage sent: ${response.data.translationData.translatedText}`);
                }
        }
        catch (error) {
            alert('Something went wrong');
            console.log(error);
        }
    }

    return (
        <div id="MessagesSubmit">
            <div className='text-2xl font-bold mb-4'>Fill in your message here</div>
            <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="senderName">                       
                            <UserIcon className="h-5 w-5 font-pink" aria-hidden="true" />                                                          
                            Who is writing this
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="senderName" type="text" placeholder="Cecilia" />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="senderCountry">
                        <LocationMarkerIcon className="h-5 w-5 font-pink" aria-hidden="true" />                        
                        What country are you from
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="senderCountry" type="text" placeholder="France" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="receiverCountry">
                        <UserIcon className="h-5 w-5 font-pink" aria-hidden="true" />                      
                        Who do you want to receive this message
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="receiverCountry" type="text" placeholder="cecilia@stud.ase.ro" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="receiverMail">
                        <LocationMarkerIcon className="h-5 w-5 font-pink" aria-hidden="true" />
                        Which country to send the message to
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="receiverMail" type="text" placeholder="India" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="messageContent">
                            Your message
                        </label>
                        <textarea
                            rows={4}
                            name="comment"
                            id="messageContent"
                            className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-800 rounded-md p-5"
                            placeholder={'I am writing this message because...'} />
                    </div>
                </div>
            </form>

            
            {LANGUAGES_ARRAY.map((language, index) => {
                return (
                    <button
                        key={index}
                        className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded m-2 capitalize"
                        onClick={handleMessageSend}
                        value={language}>
                        {language.toLowerCase()}
                    </button>
                )
            })}
        </div>
    );
}

export default MessagesSubmit;