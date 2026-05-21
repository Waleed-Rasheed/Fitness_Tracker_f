import React from "react";
import Sidebar from "../components/AdminDB/Sidebar.jsx";
import Header from "../components/AdminDB/Header.jsx";
import Card from "../components/AdminDB/Card.jsx";
import CardHeader from "../components/AdminDB/CardHeader.jsx";
import ActivityChart from "../components/AdminDB/ActivityChart.jsx";
import OverviewCard from "../components/AdminDB/OverviewCard.jsx";
import GoalCard from "../components/AdminDB/GoalCard.jsx";
import TrainerCard from "../components/AdminDB/TrainerCard.jsx";
import ActivityList from "../components/AdminDB/ActivityList.jsx";
import HeartChart from "../components/AdminDB/HeartChart.jsx";
import OutputCard from "../components/AdminDB/OutputCard.jsx";
import FoodTimeline from "../components/AdminDB/FoodTimeline.jsx";
import Footer from "../components/AdminDB/Footer.jsx";

export default function AdDashboard() {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">

      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden min-w-0">

        <Header />

        <main className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">

          <div className="grid grid-cols-3 gap-4">
            <Card>
              <CardHeader title="Activity" />
              <ActivityChart />
            </Card>

            <Card>
              <CardHeader title="Overview" />
              <OverviewCard />
            </Card>

            <Card>
              <CardHeader title="Fitness goal" />
              <GoalCard />
            </Card>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <Card>
              <TrainerCard />
            </Card>

            <Card>
              <CardHeader title="Recommended activity" />
              <ActivityList />
            </Card>

            <Card>
              <CardHeader title="Heart rate" />
              <HeartChart />
            </Card>
          </div>

          <div className="grid grid-cols-2 gap-4">

            <Card >
              <CardHeader title="Output" />
              <OutputCard />
            </Card>

            <Card className="col-span-2 min-h-[260px] p-6">
              <CardHeader title="Recommended food" />
              <FoodTimeline />
            </Card>

          </div>

          <Footer />

        </main>
      </div>
    </div>
  );
}