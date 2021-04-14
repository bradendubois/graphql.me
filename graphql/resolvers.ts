// @flow

import firebase from 'firebase';
import "firebase/firestore"

import {
    Achievement,
    Course,
    Employment,
    Program,
    Social,
    StudentGroup
} from "./schema/types"

/************************* Functions *************************/

/************* Firebase *************/

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
};

try {
    firebase.initializeApp(firebaseConfig);
} catch (err) {
    if (!/already exists/.test(err.message))
        console.error("Firebase initialization error", err.stack)
}

const db = firebase.database()

const firestoreGet = (ref) => db
    .ref(ref)
    .get()
    .then(snapshot => snapshot.toJSON())

const idMerge = (object) =>
    Object.keys(object)
        .map(key => { return {
            id: key,
            ...object[key]
        }})


/************* Programs *************/

export function getPrograms(): Promise<Array<Program>> {
    return firestoreGet("programs").then(programs => idMerge(programs))
}

export function getProgram(programID: string): Promise<Program | null> {
    return getPrograms().then(programs => programs.find(program => program.id === programID) ?? null)
}

/************* Courses *************/


export function getCourses(): Promise<Array<Course>> {
    return firestoreGet("courses") as any
}

export function getCourse(courseID: string): Promise<Course> {
    return getCourses().then(courses => {

        if (courses[courseID] === undefined) return null

        const c: Course = {
            courseID,
            name: courses[courseID]
        }

        return c
    })
}

export function getProgramsWithCourse(course: Course): Promise<Array<Program>> {
    return getPrograms().then(programs => programs.filter(program => program.courses_ids.find(c => c === course.courseID)))
}


export function getCoursesForProgram(program: Program): Array<Promise<Course>> {
    return Object.values(program.courses_ids).map(course_id => getCourse(course_id))
}

/************* Employment *************/

export function getEmployment(): Promise<Array<Employment>> {
    return firestoreGet("employment").then(employment => idMerge(employment))
}

/************* Achievements *************/

export function getAchievements(): Promise<Array<Achievement>> {
    return firestoreGet("achievements").then(achievements => idMerge(achievements))
}

export function getAchievement(achievementID: string): Promise<Achievement | null> {
    return getAchievements().then(achievements => achievements.find(achievement => achievement.id === achievementID) || null)
}

export function getAchievementsForProgram(program: Program): Array<Promise<Achievement>> {
    if (program.achievement_ids === undefined)
        return []

    return Object.values(program.achievement_ids).map(achievementID => getAchievement(achievementID)) || null
}

export function getProgramsWithAchievement(achievement: Achievement): Promise<Array<Program>> {
    return getPrograms().then(programs => programs.filter(program => program.achievement_ids?.find(a => a === achievement.id)))
}

/************* Groups *************/

export function getStudentGroups(): Promise<Array<StudentGroup>> {
    return firestoreGet("groups").then(groups => idMerge(groups))
}

export function getStudentGroup(groupID: string): Promise<StudentGroup | null> {
    return getStudentGroups().then(groups => groups.find(group => group.id === groupID) || null)
}


export function getGroupsForProgram(program: Program): Array<Promise<StudentGroup>> {
    if (program.groups_ids === undefined)
        return []

    return Object.values(program.groups_ids).map(groupID => getStudentGroup(groupID))
}

/************* Socials *************/

export function getSocials(): Promise<Array<Social>> {
    return firestoreGet("socials").then(social => idMerge(social))
}
