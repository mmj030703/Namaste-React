/* 
 ? Episode - 13 Time to Test
 & In this Episode
 &  - Importance of Testing and why we need to Test
 &  - Types of Developer Testing
 &  - Installing different packages for testing
 &  - React Testing Library
  ?  - Installing React Testing Library
  ?  - Installing Jest
  ?  - Installing Babel Dependencies
  ?  - Configuring Babel by creating babel.config.js in the root
  ?  - Handling the Conflict between Babel config in Parcel and the root Config we defined
  ?  - Configuration of Jest 
  ?  - Install jest-environment-jsdom environment
 &  - Create __tests__ folder inside components folder
  ?  - Create test files with .test.js extension inside the __tests__ folder
  ?  - Created sum.js in components folder and written its unit test case in the sum.test.js file which was included in the __tests__ folder 
 &  - Started writing unit test cases for react 
 &  - Tested Contact component whether it loaded or not
  ?  - Solving the error of above component not rendered by installing a library @babel/preset-react to make JSX work in test cases
  ?  - Include @babel/preset-react inside the babel config 
  ?  - Again error will come on executing test script for the toBeInTheDocument() method so we will install one more library @testing-library/jest-dom
  ?  - Now you have to install package @types/jest as dev dependency in order to get suggestion of jest i.e. suggestions after expect().
  ?  - Tested using test() and rendered using render() get elements from screen and assertion using expect().toBeInTheDocument()
  ?  - Multiple test() blocks inside one test file
  ?  - Tested using test() & it() -> both are same anything can be used
  ?  - Using describe() block to combine same group of test
  ?  - Multiple describe() blocks inside one test file
  ?  - Multiple nested describe() blocks in one describe() block
 &  - Tested Header Component
 &  - Tested Restaurant Card
  ?  - How to pass props for testing the restaurant card component
  ?  - How to test Higher order component (HOC)
 &  - Integration Testing
  ?  - Tested the Search Functionality  
    * - Added a script for watch so that we dont have to again-&-again write npm run test in terminal
    * - Added dummy implementation of fetch function and created a MOCK_DATA for restaurants data
    * - Used act()
  ?  - Tested the Top Rated Restaurant Button Functionality  
  ?  - Used helper functions of JEST i.e. beforeAll, beforeEach, afterAll, afterEach
 &  - Tested the Cart Flow 
  ?  - Provided dommy fetch function   
  ?  - Provided redux provider to the rednering component where the redux is used   
  ?  - Divided single long test into multiple test into chunks 
 */


/*
  & Notes:- 
  & 
  & Link: https://www.notion.so/c6efca4d31e9401aa6521b22088716f3?v=6b17a2a2d0b64662907fcfb61a23cb7b
*/