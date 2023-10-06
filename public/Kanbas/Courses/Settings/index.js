function index(){

return `


<div class="container mt-5">
    <ul class="nav nav-tabs">
        <li class="nav-item">
            <a class="nav-link active" href="./screen.html" data-toggle="tab">Course Details</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#sections" data-toggle="tab">Sections</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="./navigation.html" data-toggle="tab">Navigation</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#apps" data-toggle="tab">Apps</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#featureOptions" data-toggle="tab">Feature Options</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#integrations" data-toggle="tab">Integrations</a>
        </li>
    </ul>

<h1>Course Details</h1>

            <!-- Image -->
            <!-- Image Upload -->
<label for="courseImage"> Image:</label>
<input type="file" id="courseImage" name="courseImage" accept="image/*">

            
            <!-- Course Name -->
            <p><strong>Name:</strong> CS5610</p>
            
            <!-- Course Code -->
            <p><strong>Course Code:</strong> 5601</p>
            
            <!-- Timezone -->
            <p>
                <strong>Timezone:</strong>
                <select>
                    <option value="eastern">Eastern Timezone</option>
                    <!-- Add more timezones here -->
                </select>
            </p>
            
            <!-- SIS ID -->
            <p><strong>SIS ID:</strong> 2050</p>
            
            <!-- Term -->
            <p>
                <strong>Term:</strong>
                <select>
                    <option value="fall2020">Fall 2020</option>
                    <!-- Add more terms here -->
                </select>
            </p>
            
            <!-- Participation -->
            <p>
                <strong>Participation:</strong>
                <select>
                    <option value="participation">Term</option>
                    <!-- Add more participation types here -->
                </select>
            </p>
            
            <!-- Start Date -->
            <!-- Start Date -->
<label for="startDate">Start Date:</label>
<input type="date" id="startDate" name="startDate">

<!-- End Date -->
<label for="endDate">End Date:</label>
<input type="date" id="endDate" name="endDate">

            
            <!-- Default Time Zone -->
            <p>
                <strong>Default Time Zone:</strong>
                <select>
                    <option value="default">Default Time Zone 11:59pm</option>
                    <!-- Add more time zones here -->
                </select>
            </p>
            
            <!-- Language -->
            <p>
                <strong>Language:</strong>
                <select>
                    <option value="english">English</option>
                    <!-- Add more languages here -->
                </select>
            </p>
            
            <!-- File Storage -->
            <p><strong>File Storage:</strong> 100000MB</p>
            
            <!-- Large Course Checkbox -->
            <p>
                <strong>Large Course:</strong>
                <input type="checkbox" name="largeCourse" value="yes">is this a large course</input>
            </p>
            
            <!-- Grading Scheme Checkbox -->
            <p>
                <strong>Grading Scheme:</strong>
                <input type="checkbox" name="gradingScheme" value="yes">Grading Scheme is standard</input>
            </p>
            
            <!-- File Copyright Checkbox -->
            <p>
                <strong>File Copyright:</strong>
                <input type="checkbox" name="fileCopyright" value="authorized">authorized copyright</input>
            </p>
            
            <!-- Format -->
            <p>
                <strong>Format:</strong>
                <select>
                    <option value="oncampus">On Campus</option>
                    <option value="oncampus">online</option>
                    <!-- Add more formats here -->
                </select></br></br>
                <table>
                    <tr>
                        <td valign="middle">Description:</td>
                        <td><textarea rows="4" cols="50">enter the description here</textarea></td>
                    </tr>
                </table>
                

            </ >
        </td>`;
    }
    export default index;