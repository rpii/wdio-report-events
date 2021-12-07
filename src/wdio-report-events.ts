
export default class ReportEvents {

    public logMessage(message: string) : any {
        process.emit('test:log', message);
        return this;
    };
    public logScreenshot(filename:string) : any {
        process.emit('test:screenshot', filename);
        return this;
    };
    public videoCapture(filename:string) {
        process.emit('test:video-capture', filename);
        return this;
    };
    public connectMessageEvent(fn:any) : any {
        process.on('test:log', fn);
        return this;
    };
    public connectScreenshotEvent(fn:any) : any {
        process.on('test:screenshot', fn);
        return this;
    };
    public connectVideoCaptureEvent(fn:any) {
        process.on('test:video-capture', fn);
        return this;
    };
}


