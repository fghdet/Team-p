const profiles = [
    { 
        name: "অ লি প", 
        role: "Blaster pro", 
        progress: "100%", 
        imageUrl: "alip vai.jpg", 
        details: "Name: MD AMIT HASAN Blood Group: A+", 
        socialLinks: { 
            facebook: "https://www.facebook.com/hardless.boyakash.3",
            skype: "https://join.skype.com/invite/rXP1P56sAsOG" 
        } 
    },
    { 
        name: "MD Shahed Bosunia", 
        role: "Blaster pro", 
        progress: "100%", 
        imageUrl: "bosu vaiiii.jpg", 
        details: "মন থেকে চাওয়া জিনিস গুলোই  ।। একদিন মন খারাপের   ।।। কারন হয়ে দাড়ায় ।।।", 
        socialLinks: { 
            facebook: "https://www.facebook.com/mdshahed.bosunia", 
            skype: "skype:bob" 
        } 
    },
    { 
        name: "ডাইরীর ছেরা পাতা", 
        role: "Blaster snr", 
        progress: "100%", 
        imageUrl: "sm vai.jpg", 
        details: "তোমার দেখা পাই যদি ❤️ বৃষ্টি মেঘের দিনে  তোমার প্রেমে পড়বো বাধা, ভালোবাসার ঋীনে❤ .", 
        socialLinks: { 
            facebook: "https://www.facebook.com/profile.php?id=100083327587561", 
            skype: "skype:charlie" 
        } 
    },
    { 
        name: "Alex Maruf", 
        role: "Blaster jr", 
        progress: "100%", 
        imageUrl: "caca.jpg", 
        details: "হাসবুনাল্লাহ ওয়া নি'মাল ওয়াকিল  অর্থাৎ আমার জন্য আমার আল্লাহ'ই যথেষ্ট.", 
        socialLinks: { 
            facebook: "https://www.facebook.com/profile.php?id=100060939437610", 
            skype: "skype:david" 
        } 
    },
    { 
        name: "Md Ashik Islam", 
        role: "Blaster pro", 
        progress: "100%", 
        imageUrl: "mama.jpg", 
        details: "Studied at Rangpur Ideal Institute Of Technology (RIIT).", 
        socialLinks: { 
            facebook: "https://www.facebook.com/mdashikIsla.37266", 
            skype: "skype:eve" 
        } 
        
    },
    { 
        name: "MD Rakibul Islam Ridoy", 
        role: "Fast and furious email blaster", 
        progress: "100%", 
        imageUrl: "ridoy.jpg", 
        details: "Hi, I am Rakibul Islam , also known as RK.  Allah is always with me .So I can't be hopeless ", 
        socialLinks: { 
            facebook: "https://www.facebook.com/MarketerRidoy7", 
            skype: "skype:eve" 
        } 
        
    },
    { 
        name: "Mosabbir Rahman Sabbir", 
        role: "kaj e pare na", 
        progress: "50%", 
        imageUrl: "me.jpg", 
        details: "❤Life is beautiful 💙.", 
        socialLinks: { 
            facebook: "https://www.facebook.com/profile.php?id=100021741203619", 
            skype: "skype:frank" 
        } 
    },
    { 
        name: "Abdur Rohim", 
        role: "Blaster snr", 
        progress: "100%", 
        imageUrl: "rohim vi.jpg", 
        details: "I am professional online digital marketing SEO and lead generation specialist.", 
        socialLinks: { 
            facebook: "https://www.facebook.com/mdabdurrohim017", 
            skype: "skype:grace" 
        } 
    },
    { 
        name: "রোমান সরকার সান্ত", 
        role: "Blaster snr", 
        progress: "100%", 
        imageUrl: "roman bro.jpg", 
        details: "হযরত মোহাম্মদ (সাঃ) উম্মত.", 
        socialLinks: { 
            facebook: "https://www.facebook.com/profile.php?id=100050271443515", 
            skype: "skype:hank" 
        } 
    },
    { 
        name: "So Jib", 
        role: "Blaster snr", 
        progress: "100%", 
        imageUrl: "sojib vi 2.jpg", 
        details: "Hight:5:6 Blood:O+ Weight: 62kg Looking : WOW.", 
        socialLinks: { 
            facebook: "https://www.facebook.com/so.jib.73932646", 
            skype: "skype:ivy" 
        } 
    },
    { 
        name: "Md Numan Hossen Shourov", 
        role: "Blaster snr", 
        progress: "100%", 
        imageUrl: "sourov vi.jpg", 
        details: "♦Carmicheal College Rangpur♦ 🎗️X Cadet🎗️ BNCC CCR Rongpur Blood Group: B+.", 
        socialLinks: { 
            facebook: "https://www.facebook.com/profile.php?id=100016783481423", 
            skype: "skype:jack" 
        } 
    },
    { 
        name: "Murad Hossain", 
        role: "Manager", 
        progress: "100%", 
        imageUrl: "murad caca.jpg", 
        details: "walton দেশি পন্য.", 
        socialLinks: { 
            facebook: "https://www.facebook.com/m.murad.12345", 
            skype: "skype:kate" 
        } 
    }
];

function createProfile(profile, index) {
    return `
        <div class="profile" data-index="${index}">
            <img src="${profile.imageUrl}" alt="${profile.name}">
            <h2>${profile.name}</h2>
            <p>Role: ${profile.role}</p>
            <div class="progress-container">
                <div class="progress" style="width: ${profile.progress};">${profile.progress}</div>
            </div>
        </div>
    `;
}

document.getElementById('profiles').innerHTML = profiles.map(createProfile).join('');

// Modal functionality
const modal = document.getElementById("profileModal");
const modalContent = {
    image: document.getElementById("modalImage"),
    name: document.getElementById("modalName"),
    role: document.getElementById("modalRole"),
    progress: document.getElementById("modalProgress"),
    details: document.getElementById("modalDetails"),
    links: document.getElementById("modalLinks")
};

document.querySelectorAll('.profile').forEach(profile => {
    profile.addEventListener('click', function() {
        const index = this.getAttribute('data-index');
        const profileData = profiles[index];
        modalContent.image.src = profileData.imageUrl;
        modalContent.name.textContent = profileData.name;
        modalContent.role.textContent = `Role: ${profileData.role}`;
        modalContent.progress.textContent = `Progress: ${profileData.progress}`;
        modalContent.details.textContent = profileData.details;
        modalContent.links.innerHTML = `
            <a href="${profileData.socialLinks.facebook}" target="_blank"><i class="fa fa-facebook"></i></a>
            <a href="${profileData.socialLinks.skype}" target="_blank"><i class="fa fa-skype"></i></a>
        `;
        modal.style.display = "block";
    });
});

document.querySelector('.close').onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
