export default function HowItWorks() {
  return (
    <div
      id="how-it-works"
      className="flex h-screen w-full flex-col items-center justify-center gap-12"
    >
      {/* Main container for the 'How It Works' section */}
      <div className="flex flex-col items-center justify-center gap-8">
        {/* Header section with title and subtitle */}
        <div className="flex flex-col items-center justify-center gap-4">
          <p>How it works</p>
          <h2 className="text-5xl font-semibold">
            Master the art of interviewing with AI
          </h2>
        </div>
        {/* Description text */}
        <p className="w-2/3 text-center text-xl">
          Our step-by-step guide will show you how to use our AI mock interview
          platform to improve your interview skills. With personalized feedback
          and realistic interview scenarios, you'll gain the confidence you need
          to succeed.
        </p>
      </div>

      {/* Steps container */}
      <div className="flex flex-row items-center justify-center gap-8 px-40">
        {/* Step 1 */}
        <div className="flex w-1/3 flex-col gap-2">
          <h3 className="text-lg font-semibold">
            Create a profile and choose an interview scenario
          </h3>
          <p>
            Sign up and create a profile to get started. Choose from a wide
            range of interview topics.
          </p>
        </div>
        {/* Step 2 */}
        <div className="flex w-1/3 flex-col gap-2">
          <h3 className="text-lg font-semibold">
            Practice with realistic interview simulations
          </h3>
          <p>
            Experience realistic interview simulations tailored to your chosen
            topic. Practice answering questions and receive instant feedback.
          </p>
        </div>
        {/* Step 3 */}
        <div className="flex w-1/3 flex-col gap-2">
          <h3 className="text-lg font-semibold">
            Analyze your performance and improve
          </h3>
          <p>
            Get detailed performance analysis and insights. Identify areas for
            improvement and track your progress over time.
          </p>
        </div>
      </div>
    </div>
  );
}
