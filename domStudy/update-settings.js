const fs = require('fs');
const path = require('path');

// Specify the path to your color-theme.json file
const colorThemePath = 'C:\\Users\\-JoneeL-\\Github\\tasks\\domStudy\\color-theme.json';

// Get the path to the user settings.json file
const settingsPath = 'C:\\Users\\-JoneeL-\\AppData\\Roaming\\Code\\User\\settings.json';

// Function to display content around a specific position
function displayContentAroundPosition(content, position, length = 100) {
  console.log(content.slice(position - length, position + length));
}

// Read the content of color-theme.json
try {
  const colorThemeContent = fs.readFileSync(colorThemePath, 'utf8');

  // Display a larger portion of the content around position 556
  displayContentAroundPosition(colorThemeContent, 556, 200);

  const colorData = JSON.parse(colorThemeContent).workbench?.colorCustomizations || {};

  // Read the content of settings.json
  try {
    const settingsData = fs.readFileSync(settingsPath, 'utf8');
    const settings = JSON.parse(settingsData);
    
    // Update the workbench.colorCustomizations section
    settings['workbench.colorCustomizations'] = colorData;

    // Write the updated settings back to settings.json
    try {
      fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2), 'utf8');
      console.log('Settings updated successfully.');
    } catch (writeError) {
      console.error('Error writing settings.json:', writeError.message);
      console.error(writeError);
    }
  } catch (parseSettingsError) {
    console.error('Error parsing settings.json:', parseSettingsError.message);
    console.error(parseSettingsError);
  }
} catch (readColorError) {
  console.error('Error reading color-theme.json:', readColorError.message);
  console.error(readColorError);
}
