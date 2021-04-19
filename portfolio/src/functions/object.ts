/**
 * オブジェクトを上書きして返却する非破壊的関数
 * @param anObject {Object} - オブジェクトの初期値
 * @param anotherObject {Object} - 更新したい値を持つオブジェクト
 */
 export const objectMerge = (anObject: object, anotherObject: object): object => {
    return Object.assign({}, anObject, anotherObject)
}

/**
 * 与えられた条件を満たしていた場合オブジェクトを上書きして返却する非破壊的関数
 * @param condition {Boolean} - 更新を行うための条件
 * @param anObject {Object} - オブジェクトの初期値
 * @param anotherObject {Object} - 更新したい値を持つオブジェクト
 */
export const ifThenObjectMerge = (condition: boolean, anObject: object, anotherObject: object): object => {
    return condition? Object.assign({}, anObject, anotherObject): anObject
}