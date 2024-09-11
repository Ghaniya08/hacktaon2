var _a;
(_a = document.getElementById('generateBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var _a, _b;
    var picture = (_b = (_a = document.getElementById('picture')) === null || _a === void 0 ? void 0 : _a.files) === null || _b === void 0 ? void 0 : _b[0];
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var skills = document.getElementById('skills').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var pictureURL = '';
    if (picture) {
        pictureURL = URL.createObjectURL(picture);
    }
    var generatedResume = "\n        <div>\n            <h2>".concat(name, "</h2>\n            <img src=\"").concat(pictureURL, "\" alt=\"Profile Picture\" width=\"100\" height=\"100\"><br>\n            <strong>Phone:</strong> ").concat(phone, "<br>\n            <strong>Email:</strong> ").concat(email, "<br>\n            <strong>Address:</strong> ").concat(address, "<br><br>\n            <strong>Skills:</strong> ").concat(skills, "<br><br>\n            <strong>Education:</strong> ").concat(education, "<br><br>\n            <strong>Experience:</strong> ").concat(experience, "\n        </div>\n    ");
    document.getElementById('generatedResume').innerHTML = generatedResume;
});

