import "../src/wdio-process.d"
import ReportEvents  from "../src/wdio-report-events" ;

import  { expect } from  "chai";

// TODO Work in Progress
// saveScreenshot(filepath) {
//     let test = this.getTest(this.testUid) ;
//     this.moveErrorsToEvents(test) ;
//     test.events.push({type: 'screenshot', value: filepath}) ;
// }
//
// saveMessage(message) {
//     const test = this.getTest(this.testUid);
//     this.moveErrorsToEvents(test) ;
//     test.events.push({type: 'log', value: message}) ;
// }

suite('test suite', function () {
    // process.on('test:log', this.saveMessage.bind(this));
    // process.on('test:screenshot', this.saveScreenshot.bind(this));
    test('fire log message', function () {
        let proxy = new ReportEvents() ;
        proxy.logMessage("This is a test log message");
    });
    test('fire log screenshot', function () {
        let proxy = new ReportEvents() ;
        proxy.logScreenshot("test.png");
    });
});
