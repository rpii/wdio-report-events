// Merge namespace with global NodeJS
export { } //This file needs to be a module
declare global {
    export namespace NodeJS {
        interface Process {
            emit(event: "test:log", message: string): boolean;
            emit(event: "test:screenshot", filename: string): boolean;
            emit(event: "test:video-capture", filename: string): boolean;
            on(event: "test:log", listener: MessageListener): this;
            on(event: "test:screenshot", listener: MessageListener): this;
            on(event: "test:video-capture", listener: MessageListener): this;
        }
    }
}


