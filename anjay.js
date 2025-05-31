    // Dark Mode Toggle Functionality
    const darkModeToggle = document.getElementById('darkModeToggle');
    const icon = darkModeToggle.querySelector('i');
    
    // Check for saved user preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
    
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            localStorage.setItem('darkMode', 'disabled');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    });
    
var akundemo = "{{email_user}}";
var currentUserEmail = "ngorokuliner@gmail.com";
var demoMenuItems = document.querySelectorAll('.demo-menu');
if (currentUserEmail === akundemo) {
demoMenuItems.forEach(function(item) {
item.classList.add('hidden');
});
} else {
demoMenuItems.forEach(function(item) {
item.classList.remove('hidden');
});
}

var iconButton = document.getElementById('iconButton');
var iconImg = document.getElementById('iconImg');
var originalSrc = "https://d.top4top.io/p_3218o2h4y0.png";
var newSrc = "https://g.top4top.io/p_321826fhh0.png";
iconButton.addEventListener('click', function () {
if (iconImg.src === originalSrc) {
iconImg.src = newSrc;
} else {
iconImg.src = originalSrc;
}
});

function rubah(angka) {
var reverse = angka.toString().split('').reverse().join(''),
ribuan = reverse.match(/\d{1,3}/g);
ribuan = ribuan.join('.').split('').reverse().join('');
return "Rp " + ribuan;
}
document.getElementById("saldo_didin").innerText = rubah(document.getElementById("saldo_didin").textContent)
function toggleBlur() {
var blurredText = document.getElementById('saldo_didin');
blurredText.classList.toggle('blur');
var icon1 = document.getElementById('icon1');
var icon2 = document.getElementById('icon2');

icon1.classList.toggle('hidden');
icon2.classList.toggle('hidden');
}

$(document).ready(function () {
var swiper = new Swiper('.swiper-container', {
slidesPerView: 1.1,
centeredSlides: true,
loop: true,
spaceBetween: 10,
slideToClickedSlide: true,
autoplay: {
delay: 5000,
disableOnInteraction: false,
},
pagination: {
el: '.swiper-pagination',
clickable: true,
},
});
var saldo = $('.change-saldo');

function changeSaldo(angka) {
var reverse = angka.toString().split('').reverse().join(''),
ribuan = reverse.match(/\d{1,3}/g);
ribuan = ribuan.join('.').split('').reverse().join('');
return "Rp " + ribuan;
}
saldo.text(changeSaldo(saldo.text()));
});
</script>
<div id='pergeseran'></div>
<div id="saldo_didin"></div>

function rubah(angka) {
var reverse = angka.toString().split('').reverse().join(''),
ribuan = reverse.match(/\d{1,3}/g);
ribuan = ribuan.join('.').split('').reverse().join('');
return "Rp " + ribuan;
}
document.getElementById("saldo_didin").innerText = rubah(document.getElementById("saldo_didin").textContent)
</script>
<script>
function cekMembership(link) {
var memUser = '{{nama_membership}}'
var memBoleh = [
"Mitra","Android"
]
if ($.inArray(memUser, memBoleh) === -1) {
let myModal = new bootstrap.Modal($('#membershipLevel'), {});
myModal.show()
} else {
window.location.href = link
}
}

//fungsi saat payment di jalankan
$("#payment").click(() => {
$("#payment").addClass("active").removeClass("nactive")
$("#history").addClass("nactive").removeClass("active")
})

//fungsi saat history di jalankan 
$("#history").click(() => {
$("#history").addClass("active").removeClass("nactive")
$("#payment").addClass("nactive").removeClass("active")
})

        // Tab functionality
        document.addEventListener('DOMContentLoaded', function() {
            const tabLinks = document.querySelectorAll('.tablinks');
            const tabContents = document.querySelectorAll('.tabcontent');
            const activeCircle = document.querySelector('.active-grid-circle');
            
            tabLinks.forEach(link => {
                link.addEventListener('click', function() {
                    const tabId = this.getAttribute('data-tab');
                    
                    // Update active tab
                    tabLinks.forEach(tab => tab.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Update active content
                    tabContents.forEach(content => {
                        content.classList.remove('active');
                        if(content.id === tabId) {
                            content.classList.add('active');
                        }
                    });
                    
                    // Move active circle
                    const index = Array.from(tabLinks).indexOf(this);
                    activeCircle.style.left = `${index * 33.33}%`;
                });
            });
            
            // Scrolling text functionality
            const scrollItems = document.querySelectorAll('.scroll-item');
            let currentItem = 0;
            
            function showNextItem() {
                scrollItems[currentItem].classList.remove('show');
                scrollItems[currentItem].classList.add('hide');
                
                currentItem = (currentItem + 1) % scrollItems.length;
                
                scrollItems[currentItem].classList.remove('hide');
                scrollItems[currentItem].classList.add('show');
            }
            
            // Initialize first item
            scrollItems[0].classList.add('show');
            
            // Change item every 3 seconds
            setInterval(showNextItem, 3000);
            
            // Greeting based on time of day
            const greeting = document.getElementById('greeting');
            const hour = new Date().getHours();
            
            if(hour < 12) {
                greeting.textContent = 'Selamat Pagi';
            } else if(hour < 15) {
                greeting.textContent = 'Selamat Siang';
            } else if(hour < 18) {
                greeting.textContent = 'Selamat Sore';
            } else {
                greeting.textContent = 'Selamat Malam';
            }
        });
        
        // Initialize Swiper
        const swiper = new Swiper('.swiperLanding', {
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
        
        // Progress circle for autoplay
        const progressCircle = document.querySelector('.autoplay-progress svg');
        const progressContent = document.querySelector('.autoplay-progress span');
        if(progressCircle) {
            progressCircle.style.strokeDasharray = 126;
            swiper.on('autoplayTimeLeft', (s, time, progress) => {
                progressCircle.style.strokeDashoffset = 126 * (1 - progress);
                progressContent.textContent = `${Math.ceil(time / 1000)}s`;
            });
        }
        
        $(document).ready(function() {
  $('.nav-grid-items-codingasik').click(function() {
    $('.grid-item-active').removeClass('active');
    
    var index = $(this).index();
    var percentage = 100;
    var position = percentage * index + '%';
    
    $('#active-nav-grid-item').css('animation', 'moveActive .455s cubic-bezier(0.46, 0.03, 0.21, 0.93)');
    
    $(this).addClass('active');
    $('.grid-item-active').css('left', position);
    
    setTimeout(() => {
      $('#active-nav-grid-item').css('animation', 'none');
    }, 500);
  });
});

let currentIndex = 0;

function openCity(tabName, tabContentId, animationType) {
  const tabcontents = document.getElementsByClassName('tabcontent');
  const tabcontent = document.getElementById(tabContentId);
  
  // Hide all tab contents
  for (let i = 0; i < tabcontents.length; i++) {
    tabcontents[i].style.display = 'none';
    tabcontents[i].classList.remove('active');
  }
  
  // Show the selected tab content with appropriate animation
  if (currentIndex === 0 && animationType === 'right') {
    tabcontent.style.animation = 'slideInLeft 2s forwards';
  } 
  else if (currentIndex === 0 && animationType === 'left') {
    tabcontent.style.animation = 'slideInRight 2s forwards';
  } 
  else if (currentIndex === 1 && animationType === 'right') {
    tabcontent.style.animation = 'slideInRight 2s forwards';
  } 
  else if (currentIndex === 1 && animationType === 'left') {
    tabcontent.style.animation = 'slideInLeft 2s forwards';
  }
  
  // Toggle current index
  currentIndex = currentIndex === 0 ? 1 : 0;
  
  // Show the tab content
  tabcontent.style.display = 'block';
  
  // Remove animation after it completes
  function removeAnimation() {
    tabcontent.style.animation = '';
    tabcontent.removeEventListener('animationend', removeAnimation);
  }
  
  tabcontent.addEventListener('animationend', removeAnimation);
}