import "./WelcomeBanner.css";

import { Button, Card } from "../../../../components/ui";

function WelcomeBanner({
  userName,
  applicationCount,
  onAddApplication,
})

{
  return (
    <Card className="welcome-banner">
      <div className="welcome-banner__content">
        <div>
          <h1 className="welcome-banner__title">
            👋 Welcome back, {userName}
          </h1>

          <p className="welcome-banner__subtitle">
            You've applied to{" "}
            <strong>{applicationCount}</strong> companies.
            Keep the momentum going!
          </p>
        </div>
        

        <Button onClick={onAddApplication}>
          + Add Application
        </Button>
      </div>
    </Card>
    
  );
}

export default WelcomeBanner;