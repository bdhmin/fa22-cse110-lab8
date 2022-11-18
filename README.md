# Lab 8 - Starter

### 1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

I would fit my automated tests in a GitHub action that gets triggered after a push. This ensures that code is continuously being checked to be cleared of errors. Instead of testing after the entier development cycle is complete like in answer 3, incremental testing makes bugifxing much easier and helps the developers stay in the right track through the entire dev process. I would not be opposed to answer 2 since the testing is still being done before the push. This makes sure the tests pass before pushing any code, but I am assuming all features are in branches that do not affect the main version. Testing with GitHub actions poses an advantage that running tests asynchronously can improve the efficiency of development since the developer does not necessarily wait for the test to complete before pushing. Although pushing clean code is always an advantage.

### 2. Would you use an end to end test to check if a function is returning the correct output? (yes/no)

No. end to end testing is used for the correct user flow and routing of the page; it is not focused on correctness of functions—that is the job for unit tests.

### 3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No. This feature is too large and requires the utilization of multiple components that, if done with unit tests, there would be too many functionalities "mocked" in the unit test, essentially making the test test for something too obviously functional. 

### 4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes. This feature is most likely implemented with a function that takes in an input and returns a boolean. Else, it might be just a checker within a function. Regardless, this feature is small enough to fit inside a single component where there doesn't require any communication between multiple components that unit tests caged within the component that checks for the max characters can test for correctness. This is not to sway an End-to-End test to also be written, since the 'disabled' functionality of sending may also want to be tested on the view of the component.
