document.addEventListener('DOMContentLoaded', function () {
    var _a, _b, _c;
    function validateForm() {
        var form = document.getElementById("resumeForm");
        if (!form.checkValidity()) {
            alert("Please fill all required fields correctly.");
            return false;
        }
        return true;
    }
    function generateResume() {
        var _a;
        var name = document.getElementById("name").value;
        var phone = document.getElementById("phone").value;
        var email = document.getElementById("email").value;
        var address = document.getElementById("address").value;
        var skills = document.getElementById("skills").value;
        var education = document.getElementById("education").value;
        var experience = document.getElementById("experience").value;
        var picture = (_a = document.getElementById("picture").files) === null || _a === void 0 ? void 0 : _a[0];
        // Populate resume
        document.getElementById("displayName").innerText = name;
        document.getElementById("displayPhone").innerText = phone;
        document.getElementById("displayEmail").innerText = email;
        document.getElementById("displayAddress").innerText = address;
        document.getElementById("displaySkills").innerText = skills;
        document.getElementById("displayEducation").innerText = education;
        document.getElementById("displayExperience").innerText = experience;
        if (picture) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                document.getElementById("displayPicture").src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            };
            reader.readAsDataURL(picture);
        }
    }
    (_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
        event.preventDefault();
        if (validateForm()) {
            generateResume();
        }
    });
    (_b = document.getElementById("name")) === null || _b === void 0 ? void 0 : _b.addEventListener("input", generateResume);
    (_c = document.getElementById("phone")) === null || _c === void 0 ? void 0 : _c.addEventListener("input", generateResume);
    // Repeat for other fields...
});
