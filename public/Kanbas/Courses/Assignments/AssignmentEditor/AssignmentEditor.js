function AssignmentEditor() {
   
return `

<link rel = "stylesheet" href = "/lib/bootstrap/bootstrap.min.css">
<link rel = "stylesheet" href = "./index.css">

<fieldset class = "form-control" style="width:1200px;">
<div class="float-end" style="color:green"><i style="color:green" class="fa fa-check-circle" aria-hidden="true"></i>published</div>
   
    <label for="assignmentsName">Assignment Name:</label>
    <input class = "form-control" text id="assignmentsName" placeholder="Assignment name" value="Assignment 1 - HTML"><br><br>
    
    <label for="description">Description:</label><br>
    <textarea id="description" cols="50" rows="5">This is the first assignment to build Kanban boards.</textarea><br><br>

    <label for="points">Points:</label>
    <input type="number" id="points" value="100" max="100" min="50"><br><br>
</fieldset>

<!-- Submission Settings -->
<fieldset  class = "form-control">
    <legend>Submission Settings</legend>
    <label for="submissionType">Submission Type:</label>
    <select id="submissionType" name="submissionType">
        <option value="online">Online</option>
        <option value="offline">Offline</option>
        <option value="email">Email</option>
    </select><br><br>

    <label for="submissionAttempts">Submission Attempts:</label>
    <select id="submissionAttempts" name="submissionAttempts">
        <option value="unlimited">Unlimited</option>
        <option value="2">2 Attempts</option>
        <option value="3">3 Attempts</option>
    </select><br><br>

    <label for="plagiarismReview">Plagiarism Review:</label>
    <select id="plagiarismReview" name="plagiarismReview">
        <option value="none">None</option>
        <option value="disabled">Disabled</option>
    </select><br><br>

    <fieldset  class = "form-control">
        <legend>Online Entry Options:</legend>
        <input type="checkbox" id="textEntry" name="onlineEntryOptions" value="textEntry">
        <label for="textEntry">Text Entry</label><br>

        <input type="checkbox" id="fileUploads" name="onlineEntryOptions" value="fileUploads">
        <label for="fileUploads">File Uploads</label><br>

        <input type="checkbox" id="websiteURL" name="onlineEntryOptions" value="websiteURL">
        <label for="websiteURL">Website URL</label>
    </fieldset><br>

    <fieldset class = "form-control">
        <legend>Group Assignment:</legend>
        <input type="checkbox" id="groupAssignment" name="groupAssignment" value="groupRequired">
        <label for="groupAssignment">This is a group assignment</label>
    </fieldset><br>

    <fieldset  class = "form-control">
        <legend>Peer Reviews:</legend>
        <input type="checkbox" id="peerReview" name="peerReview" value="required">
        <label for="peerReview">Requires peer review</label>
    </fieldset>
</fieldset>

<!-- Date Settings -->
<fieldset  class = "form-control">
    <legend>Date Settings</legend>
    <label for="dueDate">Due Date:</label>
    <input type="date" id="dueDate" value="2023-09-18" min="2023-09-01"><br><br>

    <label for="availableFrom">Available From:</label>
    <input type="date" id="availableFrom" value="2023-09-18" min="2023-09-01"><br><br>

    <label for="untilDate">Until:</label>
    <input type="date" id="untilDate" value="2023-09-18" min="2023-09-01">
</fieldset><br>



<a href="/Kanbas/Courses/Assignments/screen.html">
    <button type="button">Save</button>
</a>
<a href="/Kanbas/Courses/Assignments/screen.html">
    <button type="button">Cancel</button>
</a> `;}
export default AssignmentEditor;