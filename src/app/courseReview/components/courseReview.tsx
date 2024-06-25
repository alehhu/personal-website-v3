import { time } from "console";

export class NumericalValuation {
    private difficulty: number;
    private learnedALot: number;
    private enjoyedCourse: number;
    private timelyGrading: number;

    constructor(difficulty: number, learnedALot: number, enjoyedCourse: number, timelyGrading: number) {
        this.difficulty = difficulty;
        this.learnedALot = learnedALot;
        this.enjoyedCourse = enjoyedCourse;
        this.timelyGrading = timelyGrading;
    }

    public getDifficulty() { return this.difficulty }
    public getLearnedALot() { return this.learnedALot }
    public getEnjoyedCourse() { return this.enjoyedCourse }
    public getTimelyGrading() { return this.timelyGrading }
}


export class CourseReview {
    private metadata: string;
    private name: string;
    private coveredMaterials: string[];
    private numericalValuation: NumericalValuation;

    constructor(metadata:string, name: string, coveredMaterials: string[], numericalValuation: NumericalValuation) {
        this.metadata = metadata;
        this.name = name;
        this.coveredMaterials = coveredMaterials;
        this.numericalValuation = numericalValuation;
      }
    
    public getMetadata(): string {
        return this.metadata;
    }
    
    public getName(): string {
        return this.name;
    }

    public getCoveredMaterials(): string[] {
        return this.coveredMaterials;
    }

    public getNumericalValuation(): NumericalValuation {
        return this.numericalValuation;
    }
}