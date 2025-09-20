# Student Committee Management

## Overview
The Student Committee section on the IISF KNIT website is now organized for easy maintenance and updates. The committee member information is stored in a separate JavaScript file for better code organization.

## How to Update Student Committee Information

### File Location
All student committee data is stored in:
```
assets/js/student-committee-data.js
```

### Structure
The data is organized into four main sections:
1. **Final Year Core Roles** - President, Vice Presidents
2. **Final Year Functional Heads** - Department heads (Social Media, Events, etc.)
3. **Third Year Core Roles** - Secretary, Joint Secretaries  
4. **Third Year Coordinators** - All coordinator positions

### Adding a New Member
To add a new member, simply add an entry to the appropriate section:

```javascript
{
  name: "Student Name",
  position: "Position Title"
}
```

### Example: Adding a New Coordinator
```javascript
thirdYearCoordinators: {
  title: "Third Year - Coordinators",
  members: [
    // ... existing members ...
    {
      name: "New Student Name",
      position: "New Coordinator Position"
    }
  ]
}
```

### Removing a Member
Simply delete the member object from the appropriate section.

### Changing Positions
Update the `position` field for the relevant member.

### Changing Names
Update the `name` field for the relevant member.

## Features
- **Automatic Layout**: The system automatically determines the appropriate column layout (3 or 4 columns) based on the section type
- **Animation Support**: All members get proper AOS (Animate On Scroll) animations with staggered delays
- **Responsive Design**: Works on all device sizes
- **Easy Maintenance**: All data in one organized file

## Benefits
1. **Centralized Data**: All student committee information in one file
2. **Easy Updates**: No need to modify HTML - just update the JavaScript data
3. **Consistent Styling**: Automatic layout and styling application
4. **Future-Proof**: Easy to extend with additional fields (photos, links, etc.)
5. **Clean Code**: Separation of data and presentation

## Files Involved
- `assets/js/student-committee-data.js` - Contains all member data
- `index.html` - Main page with student committee container
- `student-committee.html` - Standalone student committee page (if needed)

## Notes
- The student committee section appears on the main homepage (index.html)
- Changes to the data file will be reflected immediately after page refresh
- No server restart or HTML modification required for updates
