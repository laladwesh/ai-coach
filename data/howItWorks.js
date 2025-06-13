import { UserPlus, FileEdit, Users, LineChart } from "lucide-react";

export const howItWorks = [
  {
    title: "Profile Setup",
    description: "Provide your industry and experience to unlock tailored advice",
    icon: <UserPlus className="w-8 h-8 text-primary" />,
  },
  {
    title: "Document Generation",
    description: "Automatically craft ATS-ready resumes and engaging cover letters",
    icon: <FileEdit className="w-8 h-8 text-primary" />,
  },
  {
    title: "Mock Interview Sessions",
    description:
      "Practice with AI-driven interview scenarios designed for your role",
    icon: <Users className="w-8 h-8 text-primary" />,
  },
  {
    title: "Progress Analytics",
    description: "Track your performance trends with in-depth analytics",
    icon: <LineChart className="w-8 h-8 text-primary" />,
  },
];
