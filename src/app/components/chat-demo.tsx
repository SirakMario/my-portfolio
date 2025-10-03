"use client";

import { useChat, type UseChatOptions } from "ai/react";
import { Chat } from "./ui/chat";

type ChatDemoProps = {
  initialMessages?: UseChatOptions["initialMessages"];
};

export function ChatDemo(props: ChatDemoProps) {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    append,
    stop,
    isLoading,
  } = useChat({
    ...props,
    initialMessages: [
      {
        id: "intro-1",
        role: "assistant",
        content:
          "👋 Welcome! I’m SirakAI, Ask me about my skills, projects, or career.",
      },
      ...(props.initialMessages || []),
    ],
  });

  return (
    <div className="flex h-[500px] w-full">
      <Chat
        className="grow bg-neutral-100 text-neutral-900 rounded-xl p-4 shadow-lg"
        messages={messages}
        handleSubmit={handleSubmit}
        input={input}
        handleInputChange={handleInputChange}
        isGenerating={isLoading}
        stop={stop}
        append={append}
        suggestions={[
          // "Mostly asked Questions",
        ]}
      />
    </div>
  );
}
