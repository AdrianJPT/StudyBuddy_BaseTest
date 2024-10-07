import fs from 'fs';
import path from 'path';
import addContext from 'mochawesome/addContext.js';

async function captureScreenshotOnFailure(driver, testContext) {
    if (testContext.currentTest.state === 'failed') {
        let imageFileName = testContext.currentTest.title + '.jpeg';
        driver.takeScreenshot().then(
            function(image) {
            fs.writeFileSync('screenshots/'+ imageFileName, image, 'base64');
            }
        );
        addContext(testContext, 'Following comes the failed test image');
        addContext(testContext, 'screenshots/' + imageFileName);
    }
}

export { captureScreenshotOnFailure };