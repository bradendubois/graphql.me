// @flow

import type { YearModifier } from "./yearModifier";

/************************* Type *************************/

export type Achievement = {
    title: string,
    year: number,
    year_modifier: YearModifier,
    description: string,
    id: string
};

/************************* Type *************************/

export const CS_USRA: Achievement = {
    title: "Computer Science USRA",
    description: "Recipient of a Department of Computer Science Undergraduate Student Research Assistant award. Research conducted under the supervision of Dr. Eric Neufeld for the Spring/Summer of 2020.",
    year: 2020,
    year_modifier: "Spring",
    id: "USRA"
};

export const Competitive_Programming: Achievement = {
    title: "Competitive Programming",
    description: "Winning team of the Advanced category for the Local Qualifier in the ACM Inter-Collegiate Programming Contest at the University of Saskatchewan. Competed in the Rocky Mountain Regional Qualifier in Edmonton in October 2019.",
    year: 2019,
    year_modifier: "Fall",
    id: "CompetitiveProgramming"
};

export const Unix_Bootcamps: Achievement = {
    title: "Unix Bootcamp Presentations",
    description: "Co-prepared and delivered intermediate-level presentations for the CSSS's Unix Bootcamp.",
    year: 2019,
    year_modifier: "Fall",
    id: "UnixBootcamps"
};

/************************* Array *************************/

export const allAchievements: Array<Achievement> = [ CS_USRA, Competitive_Programming, Unix_Bootcamps ];
