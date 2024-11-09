// script.ts

document.addEventListener('DOMContentLoaded', () => {
    const toggleSkillsBtn = document.getElementById('toggleSkillsBtn') as HTMLButtonElement;
    const skillsList = document.getElementById('skills-list') as HTMLElement;

    toggleSkillsBtn.addEventListener('click', () => {
        // Toggle the 'hidden' class on the skills list
        skillsList.classList.toggle('hidden');
    });
});
