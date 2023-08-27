import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <div className="flex justify-between">
      Dashboard Page
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default DashboardPage;
