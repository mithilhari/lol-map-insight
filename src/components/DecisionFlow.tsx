interface DecisionStep {
  number: number;
  title: string;
  description: string;
}

const steps: DecisionStep[] = [
  {
    number: 1,
    title: "Gather",
    description: "Collect all vision data, timers, cooldowns, and resource states every 2-3 seconds"
  },
  {
    number: 2,
    title: "Process", 
    description: "Analyze power spikes, windows, and opponent limitations based on gathered data"
  },
  {
    number: 3,
    title: "Predict",
    description: "Forecast enemy movements and identify opportunity windows using game state"
  },
  {
    number: 4,
    title: "Communicate",
    description: "Share logical reasoning with team: \"Why this works right now\""
  },
  {
    number: 5,
    title: "Execute",
    description: "Commit fully to decision based on complete information confidence"
  }
];

export const DecisionFlow = () => {
  return (
    <div className="bg-secondary/60 border-2 border-primary rounded-3xl p-8 backdrop-blur-sm">
      <h2 className="text-3xl font-bold text-center mb-8 gradient-text">
        Complete Information Processing Flow
      </h2>
      
      <div className="flex flex-wrap justify-between gap-6">
        {steps.map((step, index) => (
          <div key={step.number} className="relative flex-1 min-w-[200px]">
            <div className="bg-background/70 border-2 border-primary/60 rounded-xl p-4 
                          text-center transition-all duration-300 hover:border-primary 
                          hover:shadow-lg hover:bg-background/80">
              <div className="flex items-center justify-center w-8 h-8 mx-auto mb-3
                            bg-primary text-primary-foreground rounded-full font-bold">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
            
            {/* Arrow for desktop */}
            {index < steps.length - 1 && (
              <>
                <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 
                              text-2xl text-primary font-bold">
                  →
                </div>
                {/* Arrow for mobile */}
                <div className="lg:hidden flex justify-center mt-4 mb-2 text-2xl text-primary font-bold">
                  ↓
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};