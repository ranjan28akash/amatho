const servicesData = [
    {
        title: "Coastal Zone Planning and CRZ Support",
        desc: "We assist in coastal zone planning, CRZ interpretation, land-use compatibility checks, setback analysis, and project feasibility. This service helps clients understand regulatory requirements and plan coastal activities in a compliant and efficient manner."
    },
    {
        title: "Environmental Studies and Compliance",
        desc: "We undertake environmental baseline studies, EIA/EMP preparation, marine ecology surveys, public hearing support, and post-clearance compliance reporting. These studies help project proponents obtain approvals and meet environmental obligations."
    },
    {
        title: "Shoreline Change and Erosion Studies",
        desc: "We analyze shoreline movement, erosion and accretion trends, beach profiles, and coastal sediment dynamics. The findings support informed decisions for protection works, land management, and long-term coastal stability."
    },
    {
        title: "Coastal Hazard and Climate Risk Assessment",
        desc: "We assess risks from cyclones, storm surges, flooding, sea-level rise, and coastal inundation. Our assessments support resilience planning, disaster preparedness, and climate adaptation strategies for vulnerable coastal assets."
    },
    {
        title: "Marine and Coastal Field Investigations",
        desc: "We carry out field measurements and surveys for waves, tides, currents, bathymetry, sediment characteristics, and water quality. These inputs are essential for engineering studies, environmental assessments, and scientific analysis."
    },
    {
        title: "Coastal Protection and Engineering Advisory",
        desc: "We provide advisory support for coastal protection measures such as seawalls, groynes, breakwaters, nourishment, slope protection, and nature-based solutions. Our role is to help clients select practical and site-specific protection options."
    },
    {
        title: "GIS, Remote Sensing, and Coastal Mapping",
        desc: "We prepare maps and spatial analyses using GIS and remote sensing, including shoreline change maps, vulnerability maps, coastal asset maps, and planning layers. These tools improve decision-making and project visualization."
    },
    {
        title: "Ecological Restoration and Nature-Based Solutions",
        desc: "We support mangrove restoration, dune stabilization, wetland rehabilitation, and habitat improvement initiatives. These services help restore coastal ecosystems while improving natural protection and sustainability."
    },
    {
        title: "Port, Harbor, and Waterfront Support",
        desc: "We provide studies related to dredging, sedimentation, shoreline behavior, environmental impact, and coastal process assessment for ports, harbors, and waterfront developments. This helps reduce operational and environmental risks."
    },
    {
        title: "Monitoring and Asset Management",
        desc: "We offer long-term monitoring of coastal conditions, infrastructure performance, and environmental indicators through surveys, drones, sensors, and periodic reporting. This helps clients track changes and plan maintenance effectively."
    },
    {
        title: "Coastal Advisory and Policy Support",
        desc: "We assist government bodies and institutions with technical inputs, strategy papers, guideline preparation, and coastal management planning. This service is useful for policy development and implementation support."
    }
];

const productsData = [
    {
        title: "Directional Wave Rider Buoy",
        desc: "Used for measuring wave height, wave period, and wave direction in nearshore waters. It can be supplied with or without integrated Marine ADCP and telemetry for real-time data transfer."
    },
    {
        title: "Marine Acoustic Doppler Current Profiler (ADCP)",
        desc: "Used to measure current velocity and direction throughout the water column. It is suitable for coastal studies, port projects, and oceanographic monitoring."
    },
    {
        title: "Pressure-Based Tide Gauge",
        desc: "Used for continuous monitoring of tidal levels and sea-level variation. It supports long-term coastal monitoring and flood-related studies."
    },
    {
        title: "Water Sampler",
        desc: "Used to collect water samples from specific depths or locations for laboratory analysis of quality parameters."
    },
    {
        title: "Grab Sampler",
        desc: "Used for collecting seabed or sediment samples from the coastal and marine environment for geotechnical and environmental studies."
    },
    {
        title: "Sieve Shaker",
        desc: "Used for grain size analysis of sediment samples. It helps in understanding sediment characteristics and coastal processes."
    },
    {
        title: "Automatic Weather Station (AWS)",
        desc: "Used to record wind speed, wind direction, rainfall, humidity, temperature, and atmospheric pressure for coastal weather monitoring."
    },
    {
        title: "CTD",
        desc: "Used to measure conductivity, temperature, and depth of seawater. It is essential for water column profiling and oceanographic surveys."
    },
    {
        title: "LISST",
        desc: "Used for measuring suspended sediment concentration and particle size distribution in water. It is useful in sediment transport and turbidity studies."
    },
    {
        title: "Echo Sounder",
        desc: "Used for bathymetric surveys and depth measurement in coastal and nearshore areas. It supports seabed mapping and navigation-related studies."
    },
    {
        title: "RTK GPS",
        desc: "Used for high-precision positioning and surveying. It is valuable for shoreline mapping, topographic surveys, and field data collection."
    }
];

// Initialize Data into Grid
function renderCards(data, containerId) {
    const container = document.querySelector(containerId);
    if (!container) return;

    data.forEach((item, index) => {
        const num = (index + 1).toString().padStart(2, '0');
        const card = document.createElement('div');
        card.className = 'card reveal';
        // slight delay based on index for stagger effect
        card.style.transitionDelay = `${(index % 3) * 0.1}s`; 
        card.innerHTML = `
            <div class="card-number">${num}</div>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
        `;
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Render Grids
    renderCards(servicesData, '.services-grid');
    renderCards(productsData, '.products-grid');

    // Scroll Reveal Animation
    const reveals = document.querySelectorAll('.reveal');

    function reveal() {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', reveal);
    // Trigger once on load
    reveal();

    // Navbar Active State on Scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinksContainer = document.querySelector('.nav-links');
    const allNavItems = document.querySelectorAll('.nav-links a');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
        });
    }

    // Close mobile menu when a link is clicked
    allNavItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinksContainer.classList.remove('active');
        });
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerText;
            
            submitBtn.innerText = 'Sending...';
            submitBtn.disabled = true;

            const formData = new FormData(contactForm);

            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    contactForm.reset();
                    submitBtn.innerText = 'Message Sent Successfully!';
                    submitBtn.style.backgroundColor = '#10B981'; // green
                    setTimeout(() => {
                        submitBtn.innerText = originalBtnText;
                        submitBtn.disabled = false;
                        submitBtn.style.backgroundColor = '';
                    }, 4000);
                } else {
                    throw new Error('Server returned false for success');
                }
            })
            .catch(error => {
                console.error(error);
                submitBtn.innerText = 'Error! Please try again.';
                submitBtn.style.backgroundColor = '#EF4444'; // red
                setTimeout(() => {
                    submitBtn.innerText = originalBtnText;
                    submitBtn.disabled = false;
                    submitBtn.style.backgroundColor = '';
                }, 4000);
            });
        });
    }
});
