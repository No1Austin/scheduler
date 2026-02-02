const tasks = [
  { name: "Study", start: 9, end: 11, priority: "High" },
  { name: "Gym", start: 10, end: 12, priority: "Medium" },
  { name: "Lunch", start: 12, end: 13, priority: "Low" }
];
// sortByStartTime
function sortByStartTime(tasks) {
  return [...tasks].sort((a, b) => a.start - b.start);
}
console.log("Sorted:", sortByStartTime(tasks));

// Time: O(n log n) due to sorting
function groupByPriority(tasks) {
  const groups = new Map();
  for (const task of tasks) {
    if (!groups.has(task.priority)) groups.set(task.priority, []);
    groups.get(task.priority).push(task);
  }
  return groups;
}
const grouped = groupByPriority(tasks);
for (const [priority, list] of grouped.entries()) {
  console.log(priority, list.map(t => t.name));
}

// Space: O(n) because we copy the array
function detectOverlaps(tasks) {
  const sorted = sortByStartTime(tasks);
  const overlaps = [];

  for (let i = 1; i < sorted.length; i++) {
    const prev = sorted[i - 1];
    const curr = sorted[i];

    if (curr.start < prev.end) {
      overlaps.push([prev.name, curr.name]);
    }
  }
  return overlaps;
}
console.log("Overlaps:", detectOverlaps(tasks));


/*
Optimization Note:
Naive overlap checking is O(n^2). Sorting + one pass reduces it to O(n log n).
*/
function estimateMemory(tasks) {
  // Rough estimate: assume ~100 bytes per task object
  return tasks.length * 100;
}

console.log("Estimated memory (bytes):", estimateMemory(tasks));


