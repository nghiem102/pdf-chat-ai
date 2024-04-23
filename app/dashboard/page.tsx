import DashboardClient from "./dashboard-client";
import prisma from "@/utils/prisma";
import { currentUser } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/api";

export default async function Page() {
  const user: User | null = await currentUser();

  return (
    <div>
      <DashboardClient docsList={[]} />
    </div>
  );
}
