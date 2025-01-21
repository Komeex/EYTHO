// Navbar responsive
function Menu(e) {
    let list = document.querySelector('ul');
    e.name = e.name === 'menu-outline' ? 'close-outline' : 'menu-outline';
    list.classList.toggle('top-[80px]');
    list.classList.toggle('opacity-100');
}


// Dropdown
document.addEventListener("DOMContentLoaded", () => {
  const trigger = document.querySelector("#dropdown-trigger");
  const dropdown = document.querySelector("#dropdown-menu");

  const showDropdown = () => {
    dropdown.classList.remove("opacity-0", "invisible", "scale-95");
    dropdown.classList.add("opacity-100", "visible", "scale-100");
  };

  const hideDropdown = () => {
    dropdown.classList.remove("opacity-100", "visible", "scale-100");
    dropdown.classList.add("opacity-0", "invisible", "scale-95");
  };

  trigger.addEventListener("mouseenter", showDropdown);
  trigger.addEventListener("mouseleave", (e) => {
    if (!dropdown.contains(e.relatedTarget)) {
      hideDropdown();
    }
  });

  
  dropdown.addEventListener("mouseenter", showDropdown);
  dropdown.addEventListener("mouseleave", (e) => {
    if (!trigger.contains(e.relatedTarget)) {
      hideDropdown();
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.stat-number'); 
  
    counters.forEach(counter => {
      const updateCounter = () => {
        const target = +counter.getAttribute('data-target'); 
        const current = +counter.innerText; 
        const speed = 200; 
        const increment = Math.max(1, target / speed); 
  
        if (current < target) {
          counter.innerText = Math.ceil(current + increment);
          setTimeout(updateCounter, 200); 
        } else {
          counter.innerText = target; 
        }
      };
  
      updateCounter();
    });
  });
  
  
// Detail JS
function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.add('hidden');
  });
  
  document.querySelectorAll('.tab-button').forEach(button => {
      button.classList.remove('border-orange-500');
  });
  
  document.getElementById(tabId).classList.remove('hidden');
  
  event.currentTarget.classList.add('border-orange-500');
}

const scrollButton = document.getElementById('scrollTop');
const tabContents = document.querySelectorAll('.tab-content');

tabContents.forEach(content => {
  content.addEventListener('scroll', () => {
      if (content.scrollTop > 300) {
          scrollButton.classList.remove('hidden');
      } else {
          scrollButton.classList.add('hidden');
      }
  });
});

scrollButton.addEventListener('click', () => {
  const activeTab = document.querySelector('.tab-content:not(.hidden)');
  activeTab.scrollTo({ top: 0, behavior: 'smooth' });
});


