document.getElementById('generateBtn')?.addEventListener('click', function() {
    const picture = (document.getElementById('picture') as HTMLInputElement)?.files?.[0];
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    let pictureURL = '';
    if (picture) {
        pictureURL = URL.createObjectURL(picture);
    }
    const generatedResume = `
        <div>
            <h2>${name}</h2>
            <img src="${pictureURL}" alt="Profile Picture" width="100" height="100"><br>
            <strong>Phone:</strong> ${phone}<br>
            <strong>Email:</strong> ${email}<br>
            <strong>Address:</strong> ${address}<br><br>
            <strong>Skills:</strong> ${skills}<br><br>
            <strong>Education:</strong> ${education}<br><br>
            <strong>Experience:</strong> ${experience}
        </div>
    `;
    (document.getElementById('generatedResume') as HTMLElement).innerHTML = generatedResume;
});
