"use client";
import React, { useEffect, useState } from "react";
import NavBar from "@//components/nav-bar";
import Container from "@/components/container";
import WelcomeBanner from "@/components/welcome-banner";
import SearchBar from "@/components/search-bar";
import ToolsList from "@/components/tools-list";
import TeamBoard from "@/components/team/team-board";
import DownloadBanner from "@/components/download-banner";
import CultureBoard from "@/components/culture-board";
import useUserData from "@/hooks/use-userdata";
import LoadingSpinner from "@/components/loading-spinner";

const Home: React.FC = () => {
  useEffect(() => {
    if ("caches" in window) {
      caches.keys().then((cacheNames) => {
        cacheNames.forEach((cacheName) => {
          caches.delete(cacheName);
        });
      });
    }
  }, []);

  const { userInfo, loading } = useUserData();
  const onBoardTime = new Date();
  onBoardTime.setMonth(onBoardTime.getMonth() - 2);

  if (userInfo === null || loading) return <LoadingSpinner />;
  return (
    <div>
      <NavBar data={userInfo} />
      <Container>
        <WelcomeBanner data={userInfo} />
        <div className="w-full sm:flex gap-8 space-y-8 sm:space-y-0">
          <div className="w-full flex flex-col gap-8">
            <SearchBar />
            <ToolsList />
            <div className="hidden sm:block">
              <DownloadBanner />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            {/* {startDate && startDate >= onBoardTime ? (
              <CultureBoard />
            ) : (
              <ObChecklist />
            )} */}
            <CultureBoard />
            <TeamBoard data={userInfo} />
          </div>
        </div>
        <div className="sm:hidden">
          <DownloadBanner />
        </div>
      </Container>
    </div>
  );
};

export default Home;
