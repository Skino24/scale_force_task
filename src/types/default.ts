export interface ErrorContent {
    message: string;
    applicationStatus: string;
}

export interface ErrorData {
    data: ErrorContent;
    status: number;
    statusText: number;
}

export interface CustomError {
    response: ErrorData;
}