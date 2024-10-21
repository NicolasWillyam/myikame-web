// src/interfaces/dashboard/Dashboard.tsx
"use client";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { User, UserData } from "@//entities/user";
import { fetchUserInfo } from "@//interfaces/api/keycloak-api";
import { fetchUserFromBackend } from "@//interfaces/api/backend-api";
import { getUserFromBackend } from "@/use-cases/get-user-data";
import { refreshAccessToken } from "@//utils/refresh-token-utils";
import NavBar from "@//components/nav-bar";
import Container from "@/components/container";
import WelcomeBanner from "@/components/welcome-banner";
import SearchBar from "@/components/search-bar";
import ToolsList from "@/components/tools-list";
import ObChecklist from "@/components/ob-checklist";
import TeamBoard from "@/components/team/team-board";
import DownloadBanner from "@/components/download-banner";
import CultureBoard from "@/components/culture-board";
import useUserData from "@/hooks/use-userdata";
import LoadingSpinner from "@/components/loading-spinner";
import useToolsData from "@/hooks/use-toolsdata";

const Dashboard: React.FC = () => {
  const { userInfo, loading } = useUserData();
  if (loading) return <LoadingSpinner />;
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
            <CultureBoard />
            {/* <ObChecklist /> */}
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

export default Dashboard;
