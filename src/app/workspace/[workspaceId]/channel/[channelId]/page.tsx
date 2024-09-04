"use client";

import { Loader, TriangleAlert } from "lucide-react";

import { Header } from "./header";
import { ChatInput } from "./chat-input";

import { useChannelId } from "@/hooks/use-channel-id";

import { useGetChannel } from "@/features/channels/api/use-get-channel";
import { useGetMessages } from "@/features/messages/api/use-get-messages";

const ChannelIdPage = () => {
  const channelId = useChannelId();

  const { results } = useGetMessages({ channelId });
  const { data: channel, isLoading: channelLoading } = useGetChannel({
    id: channelId,
  });

  console.log({ results });

  if (channelLoading) {
    return (
      <div className="h-full flex flex-1 items-center justify-center">
        <Loader className="animate-spin size-5 text-muted-foreground" />
      </div>
    );
  }

  if (!channel) {
    return (
      <div className="h-full flex flex-1 flex-col gap-y-2 items-center justify-center">
        <TriangleAlert className="size-5 text-destructive" />
        <span className="text-sm text-muted-foreground">Channel not found</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <Header title={channel.name} />
      <div className="flex-1">{JSON.stringify(results)}</div>
      <ChatInput placeholder={`Message # ${channel.name}`} />
    </div>
  );
};

export default ChannelIdPage;
