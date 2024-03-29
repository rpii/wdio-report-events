import ReportEvents  from "../src/wdio-report-events" ;

import  { expect } from  "chai";

export class EventListener {

    saveScreenshot(filepath:string ) {
        console.log("screenshot event sink:" + filepath) ;
        expect(true,"screenshot event fired:" + filepath) ;
    }

    saveVideo(filepath:string ) {
        console.log("video capture event sink:" + filepath) ;
        expect(true,"video capture event fired:" + filepath) ;
    }
    saveMessage(message:string) {
        console.log("message event sink:" + message)
        expect(true,"message event fired:" + message) ;
    }
}

suite('test suite', function () {
    let proxy = new ReportEvents() ;
    let eventSink = new EventListener() ;
    proxy.connectMessageEvent(eventSink.saveMessage.bind(this));
    proxy.connectScreenshotEvent(eventSink.saveScreenshot.bind(this));
    proxy.connectVideoCaptureEvent(eventSink.saveVideo.bind(this));
    test('fire log message', function () {
        console.log("firing message event") ;

        proxy.logMessage("This is a test log message");
    });
    test('fire log screenshot', function () {
        console.log("firing screenshot event") ;
        proxy.logScreenshot("test.png");
    });
    test('fire video capture', function () {
        console.log("firing video capture event") ;
        proxy.videoCapture("test.mp4");
    });
});
