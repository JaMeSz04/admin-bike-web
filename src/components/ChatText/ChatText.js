import React, {Component} from 'react'
import { ChatBubble, Message } from 'react-chat-ui'

const ChatText = ({message, isSelf}) => (
    <ChatBubble bubbleStyles={{
        text: {
            fontSize : 12,
            fontColor : 'white',
            fontWeight : 'bold',
            fontFamily: "sans-serif"

        }
    }} message={ new Message({ id: isSelf? 1 : 0, message: message}) }/>
)

export default ChatText