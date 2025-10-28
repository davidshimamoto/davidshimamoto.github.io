// Animated Counter for Stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + (target === 100 ? '+' : '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Initialize counters on page load
document.addEventListener('DOMContentLoaded', () => {
    const statCards = document.querySelectorAll('.stat-card');

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('.stat-number');
                const targetCount = parseInt(entry.target.dataset.count);
                animateCounter(statNumber, targetCount);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    statCards.forEach(card => observer.observe(card));
});

// Skills Filter Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const skillBars = document.querySelectorAll('.skill-bar');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.dataset.filter;

        skillBars.forEach(bar => {
            if (filter === 'all' || bar.dataset.category === filter) {
                bar.classList.remove('hidden');
                bar.style.display = 'block';
            } else {
                bar.classList.add('hidden');
                setTimeout(() => {
                    bar.style.display = 'none';
                }, 500);
            }
        });
    });
});

// Chart.js Visualizations
document.addEventListener('DOMContentLoaded', () => {
    // Skills Chart (Radar)
    const skillsCtx = document.getElementById('skillsChart');
    if (skillsCtx) {
        new Chart(skillsCtx, {
            type: 'radar',
            data: {
                labels: ['Data Pipelines', 'Databricks/Spark', 'Python', 'ML', 'HIPAA', 'Healthcare Standards', 'Data Modeling', 'Cost Optimization'],
                datasets: [{
                    label: 'Skill Proficiency',
                    data: [89, 90, 91, 98, 95, 90, 92, 88],
                    backgroundColor: 'rgba(52, 152, 219, 0.2)',
                    borderColor: 'rgba(52, 152, 219, 1)',
                    pointBackgroundColor: 'rgba(231, 76, 60, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(231, 76, 60, 1)',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            stepSize: 20
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

    // Technology Stack Chart (Doughnut)
    const techCtx = document.getElementById('techChart');
    if (techCtx) {
        new Chart(techCtx, {
            type: 'doughnut',
            data: {
                labels: ['Data Engineering', 'Python/ML', 'Healthcare Tech', 'Cloud & DevOps', 'Data Standards'],
                datasets: [{
                    data: [35, 25, 20, 10, 10],
                    backgroundColor: [
                        'rgba(52, 152, 219, 0.8)',
                        'rgba(46, 204, 113, 0.8)',
                        'rgba(231, 76, 60, 0.8)',
                        'rgba(155, 89, 182, 0.8)',
                        'rgba(241, 196, 15, 0.8)'
                    ],
                    borderWidth: 2,
                    borderColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 15,
                            font: {
                                size: 12
                            }
                        }
                    }
                }
            }
        });
    }

    // Experience Timeline Chart (Bar)
    const experienceCtx = document.getElementById('experienceChart');
    if (experienceCtx) {
        new Chart(experienceCtx, {
            type: 'bar',
            data: {
                labels: ['2013', '2015', '2017', '2019', '2021', '2023', '2025'],
                datasets: [{
                    label: 'Projects Completed',
                    data: [5, 10, 15, 20, 25, 30, 35],
                    backgroundColor: 'rgba(102, 126, 234, 0.8)',
                    borderColor: 'rgba(102, 126, 234, 1)',
                    borderWidth: 2,
                    borderRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 10
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
});

// Update Last Modified Date
const lastUpdateElement = document.getElementById('lastUpdate');
if (lastUpdateElement) {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    lastUpdateElement.textContent = now.toLocaleDateString('en-US', options);
}

// Scroll animations
const observeElements = () => {
    const elements = document.querySelectorAll('.slide-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(el => observer.observe(el));
};

// Initialize animations
document.addEventListener('DOMContentLoaded', observeElements);

// Smooth scroll for any internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add hover effect sound/visual feedback for interactive elements
document.querySelectorAll('.contact-btn, .filter-btn, .timeline-content, .cert-card, .edu-card').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// Dynamic particle creation for background (lightweight)
function createParticle() {
    const particles = document.getElementById('particles');
    if (!particles) return;

    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = Math.random() * 5 + 2 + 'px';
    particle.style.height = particle.style.width;
    particle.style.background = 'rgba(255, 255, 255, 0.5)';
    particle.style.borderRadius = '50%';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.pointerEvents = 'none';
    particle.style.animation = `float ${Math.random() * 20 + 10}s infinite ease-in-out`;

    particles.appendChild(particle);

    // Remove particle after animation
    setTimeout(() => {
        particle.remove();
    }, 30000);
}

// Create particles periodically (reduced frequency for performance)
setInterval(createParticle, 3000);

// Print functionality
function printResume() {
    window.print();
}

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + P for print
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        printResume();
    }
});

// Lazy load animations on scroll
const lazyAnimations = () => {
    const skills = document.querySelectorAll('.skill-fill');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fillBar 1.5s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skills.forEach(skill => observer.observe(skill));
};

document.addEventListener('DOMContentLoaded', lazyAnimations);

// Easter egg: Konami code
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join(',') === konamiPattern.join(',')) {
        document.body.style.animation = 'rainbow 2s infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

// Add rainbow animation for easter egg
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

console.log('%c👋 Welcome to my interactive resume!', 'font-size: 20px; color: #3498db; font-weight: bold;');
console.log('%c💡 Try the Konami code for a surprise!', 'font-size: 14px; color: #e74c3c;');
console.log('%c⬆️ ⬆️ ⬇️ ⬇️ ⬅️ ➡️ ⬅️ ➡️ B A', 'font-size: 12px; color: #27ae60;');
