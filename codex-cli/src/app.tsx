import type { ApprovalPolicy } from "./approvals";
import type { AppConfig } from "./utils/config";
import type { TerminalChatSession } from "./utils/session.js";
import type { ResponseItem } from "openai/resources/responses/responses";

import TerminalChat from "./components/chat/terminal-chat";
import TerminalChatPastRollout from "./components/chat/terminal-chat-past-rollout";
import { Box, Text, useApp, useStdin } from "ink";
import React from "react";

export type AppRollout = {
  session: TerminalChatSession;
  items: Array<ResponseItem>;
};

type Props = {
  prompt?: string;
  config: AppConfig;
  imagePaths?: Array<string>;
  rollout?: AppRollout;
  approvalPolicy: ApprovalPolicy;
  additionalWritableRoots: ReadonlyArray<string>;
  fullStdout: boolean;
};

export default function App({
  prompt,
  config,
  rollout,
  imagePaths,
  approvalPolicy,
  additionalWritableRoots,
  fullStdout,
}: Props): JSX.Element {
  const app = useApp();
  const { internal_eventEmitter } = useStdin();
  internal_eventEmitter.setMaxListeners(20);

  if (rollout) {
    return (
      <TerminalChatPastRollout
        session={rollout.session}
        items={rollout.items}
        fileOpener={config.fileOpener}
      />
    );
  }


  return (
    <TerminalChat
      config={config}
      prompt={prompt}
      imagePaths={imagePaths}
      approvalPolicy={approvalPolicy}
      additionalWritableRoots={additionalWritableRoots}
      fullStdout={fullStdout}
    />
  );
}

