import { Dance } from "./dance";

export interface Level {
    id: number,
    title: string | null,
    dances: Dance[],
}