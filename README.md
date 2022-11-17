# Lab 8 - Starter

### 1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

I would fit my automated tests in a GitHub action that gets triggered after a push. This ensures that code is continuously being checked to be cleared of errors. Instead of testing after the entier development cycle is complete like in answer 3, incremental testing makes bugifxing much easier and helps the developers stay in the right track through the entire dev process. I would not be opposed to answer 2 since the testing is still being done before the push. This makes sure the tests pass before pushing any code, but I am assuming all features are in branches that do not affect the main version. Testing with GitHub actions poses an advantage that running tests asynchronously can improve the efficiency of development since the developer does not necessarily wait for the test to complete before pushing. Although pushing clean code is always an advantage.

### 2. Would you use an end to end test to check if a function is returning the correct output? (yes/no)

No. end to end testing is used for the correct user flow and routing of the page; it is not focused on correctness of functions—that is the job for unit tests.

### 3.