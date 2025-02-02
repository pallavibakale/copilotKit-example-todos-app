"use client";

import { TasksList } from "@/components/TasksList";
import { TasksProvider } from "@/lib/hooks/use-tasks";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";

export default function Home() {
  return (
    <>
      <CopilotKit publicApiKey="ck_pub_2dd697c66097f0e76b9584b861082d7e">
        <TasksProvider>
          <TasksList />
        </TasksProvider>
        <CopilotPopup />
      </CopilotKit>
    </>
  );
}
