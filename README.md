## Three Features of this project
-Credit hours adding and also there will be some time limits.
-Course name adding on the right side of it.
-Credit remaining hours section.  

## How i managed the state in this project
-There are 4 states i have used in this project.
First one-
The first one i used is for fetching my fake data and load it.For loading data i first took a array named courses that was initially empty.After fetching my fake data, the data was stored on setCourses function.Then after transferring the props to its child and setting up the details as given by the instructor the data loaded.

Second one-
The second one is used for adding my course name in the given cart by clicking the select button.On the button,there is a onclick function and it was declared in the main component of the project.There i took a array named selectCoursed and that was initially empty.In the handleCourse function i declared a new array that will take the previous course name as well as the new course name and set it to setSelectedCourses.

Third one-
The third one is used for adding the credit hours.Here initially the totalCredit was 0.Then on the handleCourse function i declared the credit_hours of the props.Then i sum it with the new credit_hours and set it inside setTotalCredit and given an alert when the hours collection is more than 20.

Fourth one-
The fourth one is used for showing the remaing credit hours.Here insitially the remainingCredit value is 20.On the handleCourse function i removed the selected course credit hour and showed the remaining hours and given an alert when the hours collection is less than 0.
