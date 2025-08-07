import { InfoCategory } from "@/components/InfoCategory";
import { DecisionFlow } from "@/components/DecisionFlow";
import { PriorityLegend } from "@/components/PriorityLegend";

const infoCategories = [
  {
    icon: "👁",
    title: "Vision Sources",
    priority: "high" as const,
    items: [
      { text: "Champion Last Known Positions", timing: "5-15s accuracy" },
      { text: "Trinket & Control Wards", timing: "90s-180s duration" },
      { text: "Tower Aggro Indicators", timing: "Real-time" },
      { text: "Minion Wave States", timing: "30s prediction" },
      { text: "Jungle Monster Status", timing: "Camp timers" },
      { text: "Scuttle Crab Vision", timing: "75s duration" },
      { text: "Plant Interactions", timing: "Real-time reveals" }
    ]
  },
  {
    icon: "⚡",
    title: "Power Spikes", 
    priority: "high" as const,
    items: [
      { text: "Champion Level Thresholds", timing: "1, 2, 3, 6, 11, 16" },
      { text: "Item Completion Windows", timing: "Key items" },
      { text: "Ability Cooldowns", timing: "Ultimate tracking" },
      { text: "Summoner Spell Status", timing: "5min Flash, 3min others" },
      { text: "Buff Expiration Times", timing: "Red/Blue 90s" },
      { text: "Death Timer Windows", timing: "10-65s scaling" }
    ]
  },
  {
    icon: "🎯",
    title: "Objectives & Timers",
    priority: "medium" as const,
    items: [
      { text: "Dragon Spawns", timing: "5min first, 5min respawn" },
      { text: "Baron Nashor", timing: "20min spawn, 6min respawn" },
      { text: "Rift Herald", timing: "8-19:45min window" },
      { text: "Tower Plate Gold", timing: "0-14min, 650g each" },
      { text: "Jungle Camp Respawns", timing: "Various timers" },
      { text: "Cannon Minion Waves", timing: "Every 3rd wave" }
    ]
  },
  {
    icon: "📊",
    title: "Resource Tracking",
    priority: "medium" as const,
    items: [
      { text: "Gold Leads/Deficits", timing: "Tab key info" },
      { text: "CS Differentials", timing: "Per minute tracking" },
      { text: "Experience Advantages", timing: "Level comparisons" },
      { text: "Mana/Energy States", timing: "Cast ability windows" },
      { text: "Health Percentages", timing: "All-in thresholds" },
      { text: "Item Components", timing: "Power spike timing" }
    ]
  },
  {
    icon: "🌊",
    title: "Wave Management",
    priority: "low" as const,
    items: [
      { text: "Slow Push Setup", timing: "3+ waves build" },
      { text: "Fast Push Timing", timing: "Pre-roam/recall" },
      { text: "Freeze Conditions", timing: "4 enemy minions" },
      { text: "Bounce Patterns", timing: "Tower push reset" },
      { text: "Side Lane Pressure", timing: "Split push timing" },
      { text: "Minion Advantage", timing: "Early fight power" }
    ]
  },
  {
    icon: "🎮",
    title: "Win Conditions",
    priority: "low" as const,
    items: [
      { text: "Team Composition Scaling", timing: "Early/Mid/Late" },
      { text: "Split Push Potential", timing: "1v1 matchups" },
      { text: "Teamfight Advantage", timing: "AOE vs Single target" },
      { text: "Pick Potential", timing: "Assassination windows" },
      { text: "Objective Control", timing: "Smite advantage" },
      { text: "Tower Sieging", timing: "Poke vs Engage" }
    ]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-12 p-8 bg-card/50 border border-primary/30 
                       rounded-3xl backdrop-blur-sm">
          <h1 className="text-5xl font-bold mb-4 gradient-text">
            League of Legends: Complete Information Map
          </h1>
          <p className="text-xl text-muted-foreground">
            Systematic approach to processing all game data for optimal decision-making
          </p>
        </div>
        
        {/* Info Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {infoCategories.map((category, index) => (
            <InfoCategory key={index} {...category} />
          ))}
        </div>
        
        {/* Decision Flow */}
        <DecisionFlow />
        
        {/* Priority Legend */}
        <PriorityLegend />
      </div>
    </div>
  );
};

export default Index;
