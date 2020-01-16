
export default class ReportEvents {

    public logMessage(message: string) : any {
        process.emit('test:log', message);
        return this;
    };
    public logScreenshot(filename:string) : any {
        process.emit('test:screenshot', filename);
        return this;
    };

}


