import React from "react";
import Card from "./Card";
import { Award } from "lucide-react";
function RecentNotification({ notifications }) {
  return (
    <>
      {notifications.length ? (
        notifications.map((notification, index) => {
          const { achivement, title, description } = notification;
          return (
            <div
              className="flex items-center bg-gray-200 rounded-md"
              key={index}
            >
              <Award className="size-10" />
              <div>
                <strong>{title}</strong>
                <p>{description}</p>
              </div>
            </div>
          );
        })
      ) : (
        <h2>No recent notifications found</h2>
      )}
    </>
  );
}

export default RecentNotification;
