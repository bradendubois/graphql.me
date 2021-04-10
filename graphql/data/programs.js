// @flow

import type { Achievement } from "./achievements";
import type { Course } from "./courses";
import type { StudentGroup } from "./studentGroups";

import { Competitive_Programming, CS_USRA, Unix_Bootcamps } from "./achievements";
import { allCourses, PHIL_233, PHIL_236, PHIL_262, PHIL_333, PHIL_433 } from "./courses";
import { allStudentGroups } from "./studentGroups";

/************************* Type *************************/

export type Program = {
    id: string,
    kind: string,
    major: string,
    year_began: number,
    year_finish?: number,
    courses: Array<Course>,
    achievements?: Array<Achievement>,
    groups?: Array<StudentGroup>
};

/************************* Data *************************/

export const undergrad: Program = {
    id: "undergraduate",
    kind: "B.Sc. Double Honours",
    major: "Computer Science &Philosophy",
    year_began: 2017,
    courses: allCourses,
    achievements: [CS_USRA, Competitive_Programming, Unix_Bootcamps],
    groups: allStudentGroups
};

export const certificate: Program = {
    id: "certificate",
    kind: "Certificate of Proficiency",
    major: "Ethics, Justice, and Law",
    year_began: 2017,
    year_finish: 2020,
    courses: [PHIL_233, PHIL_236, PHIL_262, PHIL_333, PHIL_433]
};

/************************* Array *************************/

export const allPrograms: Array<Program> = [ undergrad, certificate ];
