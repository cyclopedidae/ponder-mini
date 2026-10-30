export type FishData = {
  id: number;
  name: string;
  totalTime: number; // seconds
  position: [x: number, y: number];
  status: "alive" | "dead" | "removed";
  createdAt: number; // Date.now() at creation
  evolutionStage: number;
};
