// @flow

import type { Achievement } from "./data/achievements";
import type { Course } from "./data/courses";
import type { Employment } from "./data/employment";
import type { Program } from "./data/programs";
import type { StudentGroup } from "./data/studentGroups";

import { allAchievements } from "./data/achievements";
import { allCourses } from "./data/courses";
import { allEmployments } from "./data/employment";
import { allPrograms } from "./data/programs";
import { allStudentGroups } from "./data/studentGroups";

/************************* Functions *************************/

/************* Programs *************/

export function getProgram(programID: string): Program | null {
    return allPrograms.find(program => program.id === programID) || null
}

export function getPrograms(): Array<Program> {
    return allPrograms
}

/************* Courses *************/

export function getCourse(courseID: string): Course | null {
    return allCourses.find(course => course.courseID === courseID) || null
}

export function getCourses(): Array<Course> {
    return allCourses
}

export function getProgramsWithCourse(course: Course): Array<Program> {
    return allPrograms.filter(program => program.courses.find(c => c === course))
}

/************* Employment *************/

export function getEmployment(): Array<Employment> {
    return allEmployments
}

/************* Achievements *************/

export function getAchievement(achievementID: string): Achievement | null {
    return allAchievements.find(achievement => achievement.id === achievementID) || null
}

export function getAchievements(): Array<Achievement> {
    return allAchievements
}

/************* Groups *************/

export function getStudentGroup(groupID: string): StudentGroup | null {
    return allStudentGroups.find(group => group.id === groupID) || null
}

export function getStudentGroups(): Array<StudentGroup> {
    return allStudentGroups
}
