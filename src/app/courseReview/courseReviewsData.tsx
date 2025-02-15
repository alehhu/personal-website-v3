import { UncompletedCourseReview, CompletedCourseReview, NumericalValuation } from './components/courseReview';

/*
numerical valuation, 1)difficulty, 2)learned a lot, 3)enjoyed course, 4)timely grading
*/

type CourseReview = CompletedCourseReview | UncompletedCourseReview;
export const CourseReviewsCollection: CourseReview[] = new Array(
    new UncompletedCourseReview(
        "051124 (spring 2025)",
        "physics"
    ),
    new UncompletedCourseReview(
        "082748 (spring 2025)",
        "basic circuit theory"
    ),
    new UncompletedCourseReview(
        "054303 (spring 2025)",
        "fundamentals of internet and communication networks"
    ),
    new UncompletedCourseReview(
        "085905 (spring 2025)",
        "fundamentals of automatic control"
    ),
    new UncompletedCourseReview(
        "054304 (spring 2025)",
        "theory of stochastic processes"
    ),
    new CompletedCourseReview(
        "052510 (fall 2024)",
        "software engineering",
        new Array("JML", "testing", "functional java and concurrency", "design patterns"),
        new NumericalValuation(2, 3, 4, 3)
    ),
    new CompletedCourseReview(
        "058081 (fall 2024)",
        "thermodynamics and heat transfer",
        new Array("open systems", "applied energy systems", "heat transfer mechanisms", "thermal applications",),
        new NumericalValuation(2, 3, 4, 2)
    ),
    new CompletedCourseReview(
        "052425 (fall 2024)",
        "mathematical analysis 2",
        new Array("multivariable calculus", "differential equations/systems","integral vector analysis", "fourier/power series"),
        new NumericalValuation(3, 3, 3, 3)
    ),
    new CompletedCourseReview(
        "E3101Q104 (spring 2024)",
        "computer architecture",
        new Array("MIPS32", "datapath", "logic circuits", "assembly"),
        new NumericalValuation(4, 4, 4, 5)
    ),
    new CompletedCourseReview(
        "E3101Q106 (spring 2024)",
        "object-oriented programming in java",
        new Array("java", "data structures", "polymorphism", "I/O"),
        new NumericalValuation(3, 3, 4, 3)
    ),
    new CompletedCourseReview(
        "E3101Q107 (spring 2024)",
        "data structures and algorithms",
        new Array("data structures", "algorithms", "java"),
        new NumericalValuation(3, 5, 4, 3)
    ),
    new CompletedCourseReview(
        "E3101Q132 (spring 2024)",
        "linear algebra and geometry",
        new Array("vector spaces", "determinant", "linear transformation", "matrices"),
        new NumericalValuation(2, 3, 2, 3)
    ),
    new CompletedCourseReview(
        "E3101Q102 (fall 2023)",
        "fundamentals of computer science (basically discrete math)",
        new Array("discrete math", "basics of logics", "algebric structures"),
        new NumericalValuation(1, 2, 1, 2)
    ),
    new CompletedCourseReview(
        "E3101Q105 (fall 2023)",
        "introduction to high-level programming",
        new Array("java", "programming basics", "recursion"),
        new NumericalValuation(3, 5, 4, 2)
    ),
    new CompletedCourseReview(
        "E3101Q102 (fall 2023)",
        "calculus I",
        new Array("calculus", "derivatives", "integrals", "series&sequences"),
        new NumericalValuation(2, 3, 5, 3)
    ),
);
/*
const computerArchitectureReview: CourseReview = new CourseReview(
    "E3101Q104 (spring 2024)",
    "computer architecture",
    new Array("MIPS32", "datapath", "logic circuits", "assembly") ,
    new NumericalValuation(4, 4, 4, 5)
)

const oopReview: CourseReview = new CourseReview(
    "E3101Q106 (spring 2024)",
    "object-oriented programming in java",
    new Array("java", "data structures", "polymorphism", "I/O") ,
    new NumericalValuation(3, 3, 4, 3)
)

const dataStructuresAndAlgorithmsReview: CourseReview = new CourseReview(
    "E3101Q107 (spring 2024)",
    "data structures and algorithms",
    new Array("data structures", "algorithms", "java"),
    new NumericalValuation(3, 5, 4, 3)
)
*/