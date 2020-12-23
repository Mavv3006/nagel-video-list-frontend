import { Video } from "./video";

export interface Dance {
    id: number,
    name: string,
    videos: Video[],
}