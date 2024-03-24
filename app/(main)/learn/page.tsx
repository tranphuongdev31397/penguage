import { FeedWrapper } from "@/components/wrapper";
import { StickyWrapper } from "@/components/wrapper/sticky-wrapper";
import * as React from "react";
import { Header } from "./_components/header";
import { UserProgress } from "@/components/user-progess";
import { FLAGS } from "@/configs/assets";
import { getUserProgress } from "@/db/queries";
import { RedirectType, redirect } from "next/navigation";
import ROUTES from "@/routes";

export interface LearnPageProps {}

export default async function LearnPage(props: LearnPageProps) {
  const userProgressData = await getUserProgress();

  if (!userProgressData || !userProgressData.activeCourse) {
    redirect(ROUTES.COURSES);
  }

  return (
    <div className="flex px-6 w-full flex-row gap-12">
      <FeedWrapper>
        <Header title={userProgressData.activeCourse?.title} />
        Courses
      </FeedWrapper>
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgressData.activeCourse}
          hasActiveSubscription={!!userProgressData.hasActiveSubscription}
          hearts={userProgressData.hearts}
          points={userProgressData.points}
        />
      </StickyWrapper>
    </div>
  );
}
