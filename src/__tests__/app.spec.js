const { test, expect, _electron: electron } = require('@playwright/test')

test('an h1 contains hello world"', async () => {
  const electronApp = await electron.launch({ args: ['.'] })

  // Wait for the first BrowserWindow to open
  const window = await electronApp.firstWindow()

  // Check for the presence of an h1 element with the text "hello"
  const headerElement = await window.$('h1');
  console.log('headerElement',headerElement);
  const headerText = await headerElement.textContent()
  expect(headerText).toBe("💖 Hello World!")

  // Close the app
  await electronApp.close()
})


// const { test, expect, _electron: electron } = require('@playwright/test')
// const path = require('path'); // Import the path module
// // const { _electron: electron } = require('playwright'); // Adjust import as needed

// test('an h1 contains hello world"', async () => {
//   console.log("pathhhh",path.join(__dirname, '../index.js'));
//   const electronApp = await electron.launch({ 
//     // args: [path.join(__dirname)],
//     args: [path.join(__dirname, '../index.js')],
//     logger: console
//   })

//   // Wait for the first BrowserWindow to open
//   const window = await electronApp.firstWindow()

//   // Check for the presence of an h1 element with the text "hello"
//   const headerElement = await window.$('h1')
//   const headerText = await headerElement.textContent();
//   console.log('loggg',headerText);
//   expect(headerText).toBe("💖 Hello World!")

//   // Close the app
//   await electronApp.close()
// })