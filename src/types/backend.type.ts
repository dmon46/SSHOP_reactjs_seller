export interface IApiRes<T> {
    success: boolean;
    code: number;
    error: string;
    result: T;
}

export interface IAccount {
    authenticated: boolean;
    token: string;
}