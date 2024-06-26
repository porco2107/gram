import { Result, ok, err } from "neverthrow";
import { ValidationError } from "../../err";

/**
 * ユーザー名
 */
export type UserName = string;

/**
 * ユーザー名オブジェクト生成関数
 */
export function UserName(value: string): Result<UserName, ValidationError> {
  return validate(value)
    ? ok(value as UserName)
    : err(new ValidationError("Invalid user Name"));
}

/**
 * ユーザー名のバリデーション
 * ユーザー名が4文字以上10文字以下であればtrueを返す
 */
const validate = (value: string): boolean => {
  return value.length >= 4 && value.length <= 10;
};
