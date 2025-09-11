import { Users, CheckCircle, Shield, TrendingUp } from "lucide-react";

const MetricsCards = () => {
  const metrics = [
    {
      title: "Active Students",
      value: "1,247",
      change: "+12% from last month",
      icon: Users,
      changeType: "positive",
    },
    {
      title: "Active Challenges",
      value: "2",
      subtitle: "2 Industry sponsored",
      icon: CheckCircle,
      changeType: "neutral",
    },
    {
      title: "Industry Partners",
      value: "47",
      change: "3 new this month",
      icon: Shield,
      changeType: "positive",
    },
    {
      title: "Avg. Engagement",
      value: "78%",
      change: "+5% improvement",
      icon: TrendingUp,
      changeType: "positive",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {metrics.map((metric, index) => {
        const IconComponent = metric.icon;

        return (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 mb-2">
                  {metric.title}
                </p>
                <p className="text-3xl font-bold text-gray-900 mb-2">
                  {metric.value}
                </p>
                {metric.change && (
                  <p
                    className={`text-sm ${
                      metric.changeType === "positive"
                        ? "text-green-600"
                        : metric.changeType === "negative"
                        ? "text-red-600"
                        : "text-gray-600"
                    }`}
                  >
                    {metric.change}
                  </p>
                )}
                {metric.subtitle && (
                  <p className="text-sm text-gray-600">{metric.subtitle}</p>
                )}
              </div>
              <div
                className={`p-3 rounded-full ${
                  index === 0
                    ? "bg-green-50"
                    : index === 1
                    ? "bg-blue-50"
                    : index === 2
                    ? "bg-yellow-50"
                    : "bg-green-50"
                }`}
              >
                <IconComponent
                  className={`h-6 w-6 ${
                    index === 0
                      ? "text-green-600"
                      : index === 1
                      ? "text-blue-600"
                      : index === 2
                      ? "text-yellow-600"
                      : "text-green-600"
                  }`}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MetricsCards;
