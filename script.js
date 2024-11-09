// script.ts
document.addEventListener('DOMContentLoaded', function () {
    var toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
    var skillsList = document.getElementById('skills-list');
    toggleSkillsBtn.addEventListener('click', function () {
        // Toggle the 'hidden' class on the skills list
        skillsList.classList.toggle('hidden');
    });
});
