const legendItems = [
  {
    color: "bg-red-500",
    label: "High Priority - Check every 2-3 seconds"
  },
  {
    color: "bg-yellow-400", 
    label: "Medium Priority - Track consistently"
  },
  {
    color: "bg-green-400",
    label: "Low Priority - Monitor for opportunities"
  }
];

export const PriorityLegend = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-8">
      {legendItems.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <div className={`w-5 h-1 rounded ${item.color}`} />
          <span className="text-sm text-muted-foreground">{item.label}</span>
        </div>
      ))}
    </div>
  );
};