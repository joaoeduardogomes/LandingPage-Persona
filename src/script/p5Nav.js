let currentSelectedProfile = null;

function selectProfile(profile, selectedImg, defaultImg) {
    profile.addEventListener('click', function() {
        // If another profile is selected, reset it
        if (currentSelectedProfile && currentSelectedProfile !== profile) {
            currentSelectedProfile.querySelector('.profile-img').src = currentSelectedProfile.defaultImg;
            currentSelectedProfile.classList.remove('selected');
        }

        // Toggle the selected state for the clicked profile
        const isSelected = profile.classList.toggle('selected');

        // Set the image based on the selection
        profile.querySelector('.profile-img').src = isSelected ? selectedImg : defaultImg;

        // Update the current selected profile if selected, or set it to null if deselected
        currentSelectedProfile = isSelected ? profile : null;
    });
}

document.getElementById('p5Protagonist-profile').defaultImg = "../img/avatars/p5-joker1.png";
document.getElementById('ryuji-profile').defaultImg = "../img/avatars/p5-ryuji1.png";
document.getElementById('ann-profile').defaultImg = "../img/avatars/p5-ann1.png";
document.getElementById('yusuke-profile').defaultImg = "../img/avatars/p5-yuusuke1.png";
document.getElementById('makoto-profile').defaultImg = "../img/avatars/p5-makoto1.png";
document.getElementById('futaba-profile').defaultImg = "../img/avatars/p5-futaba1.png";
document.getElementById('haru-profile').defaultImg = "../img/avatars/p5-haru1.png";
document.getElementById('goro-profile').defaultImg = "../img/avatars/p5-akechi1.png";


selectProfile(document.getElementById('p5Protagonist-profile'), "../img/avatars/p5-joker2.png", "../img/avatars/p5-joker1.png");
selectProfile(document.getElementById('ryuji-profile'), "../img/avatars/p5-ryuji2.png", "../img/avatars/p5-ryuji1.png");
selectProfile(document.getElementById('ann-profile'), "../img/avatars/p5-ann2.png", "../img/avatars/p5-ann1.png");
selectProfile(document.getElementById('yusuke-profile'), "../img/avatars/p5-yuusuke2.png", "../img/avatars/p5-yuusuke1.png");
selectProfile(document.getElementById('makoto-profile'), "../img/avatars/p5-makoto2.png", "../img/avatars/p5-makoto1.png");
selectProfile(document.getElementById('futaba-profile'), "../img/avatars/p5-futaba2.png", "../img/avatars/p5-futaba1.png");
selectProfile(document.getElementById('haru-profile'), "../img/avatars/p5-haru2.png", "../img/avatars/p5-haru1.png");
selectProfile(document.getElementById('goro-profile'), "../img/avatars/p5-akechi2.png", "../img/avatars/p5-akechi1.png");
