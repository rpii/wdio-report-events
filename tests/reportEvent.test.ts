// import "../src/wdio-process.d"
import ReportEvents  from "../src/wdio-report-events" ;

import  { expect } from  "chai";

export class EventListener {

    saveScreenshot(filepath) {
        console.log("screenshot event fired:" + filepath) ;
        expect(true,"screenshot event fired:" + filepath) ;
    }

    saveMessage(message) {
        console.log("message event fired:" + message)
        expect(true,"message event fired:" + message) ;
    }
}

suite('test suite', function () {
    let eventSink = new EventListener() ;
    process.on('test:log', eventSink.saveMessage.bind(this));
    process.on('test:screenshot', eventSink.saveScreenshot.bind(this));
    test('fire log message', function () {
        console.log("firing message event") ;
        let proxy = new ReportEvents() ;
        proxy.logMessage("This is a test log message");
    });
    test('fire log screenshot', function () {
        console.log("firing screenshot event") ;
        let proxy = new ReportEvents() ;
        proxy.logScreenshot("test.png");
    });
});
