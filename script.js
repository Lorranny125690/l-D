document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('.char');
    const characters = document.querySelectorAll('.character');
    let currentVideo = 0;

    function showVideo(index) {
        videos.forEach((video, i) => {
            video.style.display = i === index ? 'block' : 'none';
        });
        showCharacter(index);
    }

    function showCharacter(index) {
        characters.forEach((character, i) => {
            character.style.display = i === index ? 'block' : 'none';
        });
    }

    showVideo(currentVideo);

    document.getElementById('next-button').addEventListener('click', () => {
        currentVideo = (currentVideo + 1) % videos.length;
        showVideo(currentVideo);
    });

    document.getElementById('prev-button').addEventListener('click', () => {
        currentVideo = (currentVideo - 1 + videos.length) % videos.length;
        showVideo(currentVideo);
    });

    const options = document.querySelectorAll('.texto');
    options.forEach(option => {
        option.addEventListener('click', () => {
            options.forEach(opt => opt.classList.remove('clicked'));
            option.classList.add('clicked');
            const sectionId = option.id.replace('-button', '-section');
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const charactersButton = document.getElementById('characters-button');
    const charactersSection = document.getElementById('characters-section');
    charactersButton.addEventListener('click', () => {
        charactersSection.scrollIntoView({ behavior: 'smooth' });
    });

    const homeButton = document.getElementById('home-button');
    const homeSection = document.getElementById('home-section');
    homeButton.addEventListener('click', () => {
        homeSection.scrollIntoView({ behavior: 'smooth' });
    });
});
