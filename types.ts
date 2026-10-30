export type FishData = {
  id: number;
  name: string;
  totalTime: number; // seconds
  position: [x: number, y: number];
  status: "alive" | "dead" | "removed";
  created_at: number; // Date.now() at creation
  evolutionStage: number;
};
