// Student Committee Data - IISF KNIT
// This file contains all student committee member information
// Update this file to modify committee details

const studentCommitteeData = {
  finalYearCore: {
    title: "Final Year - Core Roles",
    members: [
      {
        name: "Gaurav Kushwaha",
        position: "President"
      },
      {
        name: "Srajan Tiwari",
        position: "Vice President"
      },
      {
        name: "Vani Sangwan",
        position: "Vice President"
      }
    ]
  },
  
  finalYearHeads: {
    title: "Final Year - Functional Heads",
    members: [
      {
        name: "Pulkit Singhal",
        position: "Social Media Head"
      },
      {
        name: "Anshrit Singh",
        position: "Social Media Head"
      },
      {
        name: "Aman Kumar",
        position: "Media/Photography Head"
      },
      {
        name: "Dia Chaudhary",
        position: "Content Head"
      },
      {
        name: "Anubhav Chaturvedi",
        position: "Event Head"
      },
      {
        name: "Shivam Srivastava",
        position: "Event Head"
      },
      {
        name: "Utkarsh Chaturvedi",
        position: "Equipment Head"
      },
      {
        name: "Rohit Dudy",
        position: "Web Development Head"
      },
      {
        name: "Satyam Verma",
        position: "Web Development Head"
      }
    ]
  },
  
  thirdYearCore: {
    title: "Third Year - Core Roles",
    members: [
      {
        name: "Amitesh Shukla",
        position: "Secretary"
      },
      {
        name: "Avanish Kumar Srivastava",
        position: "Joint Secretary"
      },
      {
        name: "Rohan Vishwakarma",
        position: "Joint Secretary"
      }
    ]
  },
  
  thirdYearCoordinators: {
    title: "Third Year - Coordinators",
    members: [
      {
        name: "Priyanshu Chaurasiya",
        position: "Web Development Coordinator"
      },
      {
        name: "Amit Yadav",
        position: "Event Coordinator"
      },
      {
        name: "Aayushmaan Chandra",
        position: "Event Coordinator"
      },
      {
        name: "Stuti Mishra",
        position: "Social Media Coordinator"
      },
      {
        name: "Mohd. Faizan",
        position: "Social Media Coordinator"
      },
      {
        name: "Rashi Vishwakarma",
        position: "Technical Coordinator"
      },
      {
        name: "Anurag Chaudhary",
        position: "Technical Coordinator"
      }
    ]
  }
};

// Function to generate HTML for student committee section
function generateStudentCommitteeHTML() {
  let html = `
    <!-- ======= Student Committee Section ======= -->
    <section id="student-committee" class="team">
      <div class="container">
        <div class="section-title" data-aos="fade-up">
          <h2>Student Committee - IISF</h2>
          <p>Our Student Team</p>
        </div>`;

  // Generate each section
  Object.keys(studentCommitteeData).forEach((sectionKey, sectionIndex) => {
    const section = studentCommitteeData[sectionKey];
    const isCore = sectionKey.includes('Core');
    const colClass = isCore ? 'col-lg-4 col-md-6' : 'col-lg-3 col-md-6';
    
    html += `
        <!-- ${section.title} -->
        <div class="section-title" data-aos="fade-up" ${sectionIndex > 0 ? 'style="margin-top: 40px;"' : ''}>
          <h3>${section.title}</h3>
        </div>
        <div class="row">`;

    section.members.forEach((member, index) => {
      const delay = 100 + (index * 50);
      html += `
          <div class="${colClass} d-flex align-items-stretch">
            <div class="member" data-aos="zoom-in" data-aos-delay="${delay}">
              <div class="member-info">
                <h4>${member.name}</h4>
                <span>${member.position}</span>
              </div>
            </div>
          </div>`;
    });

    html += `
        </div>`;
  });

  html += `
      </div>
    </section><!-- End Student Committee Section -->`;

  return html;
}

// Function to load student committee into the page
function loadStudentCommittee() {
  const container = document.getElementById('student-committee-container');
  if (container) {
    container.innerHTML = generateStudentCommitteeHTML();
    
    // Add fade-in effect
    setTimeout(() => {
      container.classList.add('loaded');
    }, 100);
    
    // Reinitialize AOS for dynamically loaded content
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }
}

// Auto-load when DOM is ready
document.addEventListener('DOMContentLoaded', loadStudentCommittee);
