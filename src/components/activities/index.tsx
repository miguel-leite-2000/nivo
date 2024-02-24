import { ActivityItem } from "./activity-item";

export function Activities() {
  return (
    <div className="flex flex-col gap-4">
      <ActivityItem
        type="video"
        user="Diego Fernandes"
        collection="Ignite"
        time="3 min ago"
        quantityVideos={3}
      />
      <ActivityItem
        type="webhook"
        user="Elias Gabriel"
        time="12 min ago"
      />
      <ActivityItem
        type="video"
        user="Joseph Oliveira"
        collection="Explorer"
        time="3 min ago"
        quantityVideos={3}
      />
      <ActivityItem
        type="webhook"
        user="Guilherme Pellizzetti"
        time="yesterday"
      />
    </div>
  );
}
