/*
* Course Types — Shared type definitions for the course DAG
*
* Contains all types used across dag.ts and course-node.tsx.
* EdgeType defines the relationship between two courses in the graph,
* driving both Kahn's logic in dag.ts and visual state in course-node.tsx.
*
* Date: Mar 4, 2026
*/
export type EdgeType = "prereq" | "coreq" | "mutex" | "soft_prereq";

export type Edge = {
    targetId: string;
    type: EdgeType;
}

export type Warning = {
    type: "redundant_soft_prereq";
    message: string;
    courses: [string, string];
}

export type CourseNode = {
    id: string;
    title: string;
    credits: number;
}