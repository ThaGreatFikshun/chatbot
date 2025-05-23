'use client';

import React, {
  useContext, useState, useRef, useEffect,
} from 'react';
import {
  Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription,
} from '@components/ui/card';
import { Input } from '@components/ui/input';
import { Button } from '@components/ui/button';
import { ScrollArea } from '@components/ui/scroll-area';
import { ChatContext } from '@/provider';
import BotCardContent from './BotCardContent';
import BotMessageWithOptions from './BotMessageWithOptions';
import UserMessage from './UserMessage';
import BotMessageWithReference from './BotMessageWithReference';
import LoadingDots from './LoadingDots';

export default function Chat() {
  const {
    messages, sendMessage, isTyping, isFinishedConversation,
  } = useContext(ChatContext);
  const [chatInput, setChatInput] = useState('');
  const lastMessageRef = useRef(null);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    sendMessage(chatInput);
    setChatInput('');
  };

  const renderBotMessage = (message) => {
    if (message.options) {
      return (
        <BotMessageWithOptions
          key={message.id}
          message={message.content}
          options={message.options}
        />
      );
    }
    if (message.reference) {
      return (
        <BotMessageWithReference
          key={message.id}
          message={message.content}
          reference={message.reference}
        />
      );
    }

    return <BotCardContent key={message.id}>{message.content}</BotCardContent>;
  };

  return (
    <section className="self-center">
      <Card className="w-[440px]">
        <CardHeader>
          <CardTitle>Konza AI Assistant</CardTitle>
          <CardDescription>
            Welcome! 👋
            <br />
            I’m here to answer your questions, guide you through Konza Technopolis,
            and help you discover all we have to offer.
            <br />
            <br />
            <b>Not sure where to start?</b>
            {' '}
            Just ask me anything—about our services, projects, opportunities,
            or how Konza can support your goals.
            <br />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[600px] w-full pr-4 mt-2">
            {messages.map((message, index) => (
              message.role === 'assistant' ? (
                <div
                  ref={index === messages.length - 1 ? lastMessageRef : null}
                  key={message.id}
                >
                  {renderBotMessage(message)}
                </div>
              ) : (
                <UserMessage key={message.id} message={message} />
              )
            ))}
            {isTyping && <LoadingDots />}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <form onSubmit={handleSubmit} className="w-full flex gap-2">
            <Input
              placeholder="What do you want to learn today?"
              value={chatInput}
              disabled={isFinishedConversation}
              onChange={(e) => setChatInput(e.target.value)}
            />
            <Button disabled={isFinishedConversation} type="submit">
              Ask
            </Button>
          </form>
        </CardFooter>
      </Card>
    </section>
  );
}
