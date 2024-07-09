import {
  Card,
  CardHeader,
  CardContent,
  // CardFooter,
} from "@/components/ui/card";
import Message from "@/components/chat/message";
import ChatInput, { formSchema } from "@/components/chat/chat-input";

import { z } from "zod";

export interface Message {
  content: string;
  role: "assistant" | "user" | "system";
}

interface ChatProps {
  messages?: Message[];
  handleSubmit: (values: z.infer<typeof formSchema>) => void;
}

function Chat({ messages = [], handleSubmit }: ChatProps) {
  return (
    <Card className="h-full w-full mx-auto rounded-none relative border-0 border-x border-b lg:border-0 lg:border-b lg:border-r flex flex-col">
      <CardHeader className="flex items-center gap-4 p-4 border-b">
        <div className="text-sm font-medium">ChatGPT</div>
      </CardHeader>
      <CardContent className="p-4 flex flex-col gap-4 overflow-auto h-full">
        <div className="overflow-auto h-full flex flex-col gap-4">
          {messages.length === 0 && (
            <div className="text-muted-foreground text-center flex w-full h-full items-center justify-center">
              Start a conversation with ChatGPT
            </div>
          )}
          {messages.map((message, index) => (
            <Message key={index} message={message} />
          ))}
        </div>

        <div className="flex items-end flex-1">
          <ChatInput handleSubmit={handleSubmit} />
        </div>
      </CardContent>
    </Card>
  );
}

export default Chat;
