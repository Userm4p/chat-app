import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client';

interface Data {
    name: string;
    message: string;
}

const socket = io("http://localhost:4000", {
    autoConnect: false
});

export const useChatApp = () => {



    const [message, setMessage] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [messages, setMessages] = useState<string[]>([]);
    const [error, setError] = useState<string>('');
    const [isConnected, setIsConnected] = useState<boolean>(false);

    useEffect(() => {
        socket.connect();
        setIsConnected(socket.connected);
        return () => {
            socket.disconnect();
        }
    },[])

 
    useEffect(() => {
        socket.on('message', (data) => {
            setMessages((messages) => [...messages, data]);
        })

        return () => {
            socket.off('message');
        }
    },[])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    }

    const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const handleClick = () => {
        setError('');
        if(message.length > 0) {
            socket.emit('message', username + '  :  ' + message);
            setMessages((messages) => [...messages, username + '  :  ' + message]);
            setMessage('');
        } else {
            setError('Please enter a message');
        }
    }



  return {
    handleChange,
    handleClick,
    message,
    messages,
    error,
    isConnected,
    handleChangeUsername,
    username

  }
}
