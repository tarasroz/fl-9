const MATRIX = { ROW_1: 123, ROW_2: 456, ROW_3: 789 };
const ROW_NUM = 198;
const COL_NUM = 594;

function reverseNumber(reverseArr) {

    reverseArr < 0 ? reverseArr = -reverseArr : reverseArr;

    if (reverseArr === MATRIX.ROW_1 || reverseArr === MATRIX.ROW_2 || reverseArr === MATRIX.ROW_3) {
        reverseArr += ROW_NUM;

    } else {
        reverseArr += COL_NUM;

    }
    console.log(reverseArr);
}

reverseNumber();