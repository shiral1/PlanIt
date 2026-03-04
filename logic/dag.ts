/*
* Kahn's Topological Sort — Course Prerequisite Graph
*
* Kahn's algorithm processes a DAG by tracking in-degrees (# of incoming edges).
* Courses with in-degree 0 are immediately available; as courses are completed,
* their neighbors' in-degrees decrement — naturally unlocking the next eligible courses.
* Chosen over DFS topological sort because in-degree maps directly to
* "prerequisites remaining", making unlock logic trivial and cycle detection built-in.
*
* Edge Types:
*       Prereq      => A must be completed before B (one-way)
*       Coreq       => A and B must be taken together (bidirectional)
*       Mutex       => taking either A or B permanently locks the other (bidirectional)
*       soft_prereq => A before B is valid, but if B is already completed A is locked
*
* Date: Mar 4, 2026
*/

class CourseDAG {
    private nodes: Map<string, CourseNode>;
    private adjList: Map<string, string[]>;
    private inDegree: Map<string, number>;

    // --- setup ---
    addCourse(course: CourseNode): void
    addPrerequisite(courseId: string, prereqId: string): void

    // -- Kahn's topological sorting algorithm ---
    public KahnAlgo(): CourseNode {
        /*
        Builds DAG for courses
        Input:
            courses: courseNode
        Return:
            None
        */
        // 1. find all inDegree === 0 → seed queue

        // 2. pop → reduce neighbors' inDegree
        // 3. if neighbor inDegree hits 0 → enqueue
        // 4. return ordered list

    // --- Queries (feed into CourseNode props) ---
    isUnlocked(courseId: string): boolean   // inDegree === 0
    isCompleted(courseId: string): boolean  // marked done
    getPrereqsRemaining(courseId: string): number  // current inDegree

    // --- Actions ---
    markComplete(courseId: string): void
        // set completed
        // reduce neighbors' inDegree
        // unlock newly eligible courses
    }

    // --- helper functions ---
    private addCourse(course: CourseNode): void {
        //TODO
    }

    private addPrerequisite(courseId: string, prereqId: string): void {
        //TODO
    }

    private isUnlocked(courseId: string): boolean {
        //TODO
    }

    private isCompleted(courseId: string): boolean {
        //TODO
    }

    private getPrereqsRemaining(courseId: string): number {
        //TODO
    }

    private markComplete(courseId: string): void {
        //TODO
    }
}