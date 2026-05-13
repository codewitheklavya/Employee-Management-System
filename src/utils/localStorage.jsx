
const employees = [
  {
    "id": 1,
    "firstName": "Arjun",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Sales Report",
        "taskDescription": "Create monthly sales performance report.",
        "taskDate": "2026-05-12",
        "category": "Reports"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update Client Database",
        "taskDescription": "Add latest client contact details.",
        "taskDate": "2026-05-10",
        "category": "Data"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Fix Login Bug",
        "taskDescription": "Resolve issue with employee login page.",
        "taskDate": "2026-05-08",
        "category": "Development"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Sneha",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Design Landing Page",
        "taskDescription": "Create responsive landing page UI.",
        "taskDate": "2026-05-13",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Team Meeting",
        "taskDescription": "Attend weekly development meeting.",
        "taskDate": "2026-05-09",
        "category": "Meeting"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Code Review",
        "taskDescription": "Review pull requests from team members.",
        "taskDate": "2026-05-12",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "API Integration",
        "taskDescription": "Integrate third-party payment API.",
        "taskDate": "2026-05-07",
        "category": "Development"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Ravi",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Write Documentation",
        "taskDescription": "Document REST API endpoints.",
        "taskDate": "2026-05-14",
        "category": "Documentation"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Optimize Database",
        "taskDescription": "Improve database query performance.",
        "taskDate": "2026-05-05",
        "category": "Database"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Test Application",
        "taskDescription": "Perform manual QA testing.",
        "taskDate": "2026-05-11",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Deploy Build",
        "taskDescription": "Deploy latest build to production.",
        "taskDate": "2026-05-06",
        "category": "DevOps"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Create Wireframes",
        "taskDescription": "Prepare wireframes for dashboard.",
        "taskDate": "2026-05-02",
        "category": "Design"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Priya",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Customer Support",
        "taskDescription": "Handle customer support tickets.",
        "taskDate": "2026-05-12",
        "category": "Support"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Security Audit",
        "taskDescription": "Check system vulnerabilities.",
        "taskDate": "2026-05-04",
        "category": "Security"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Refactor Code",
        "taskDescription": "Clean and optimize legacy code.",
        "taskDate": "2026-05-13",
        "category": "Development"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Karan",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Presentation",
        "taskDescription": "Create slides for client meeting.",
        "taskDate": "2026-05-15",
        "category": "Presentation"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Bug Testing",
        "taskDescription": "Test newly fixed application bugs.",
        "taskDate": "2026-05-10",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Server Maintenance",
        "taskDescription": "Perform scheduled server maintenance.",
        "taskDate": "2026-05-03",
        "category": "DevOps"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Research New Tools",
        "taskDescription": "Explore productivity tools for team.",
        "taskDate": "2026-05-16",
        "category": "Research"
      }
    ]
  }
]

const admin = {
  "id": 1,
  "firstName": "Admin",
  "email": "admin@example.com",
  "password": "123"
};

// Only seed data if it doesn't already exist
export const setLocalStorage = () => {
  if (!localStorage.getItem('employees')) {
    localStorage.setItem('employees', JSON.stringify(employees))
  }
  if (!localStorage.getItem('admin')) {
    localStorage.setItem('admin', JSON.stringify(admin))
  }
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  return { employees, admin }
}

// Update a single employee in localStorage
export const updateEmployeeInStorage = (updatedEmployee) => {
  const employees = JSON.parse(localStorage.getItem('employees')) || [];
  const index = employees.findIndex(e => e.id === updatedEmployee.id);
  if (index !== -1) {
    employees[index] = updatedEmployee;
    localStorage.setItem('employees', JSON.stringify(employees));
  }
  return employees;
}

// Save full employees array to localStorage
export const saveEmployeesToStorage = (employeesData) => {
  localStorage.setItem('employees', JSON.stringify(employeesData));
}
