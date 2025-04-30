document.getElementById('generatorForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get input values
  const version = document.getElementById('version').value;
  const board = document.getElementById('board').value;

  // Set platform version based on the ChromeOS version (e.g., for version 132)
  let platformVersion = "16093.93.0"; // Default platform version for version 132

  // Set key version based on the board
  let keyVersion = "mp-v40";  // Default key version for general cases

  // If you have specific board-based key versions, add here
  if (board.toLowerCase() === "nissa") {
    keyVersion = "mp-v40";
  } else if (board.toLowerCase() === "dedede") {
    keyVersion = "DededeMPKeys-v54";
  } else if (board.toLowerCase() === "octopus") {
    keyVersion = "mp-v36";
  }

  // Generate the URL
  const url = `https://dl.google.com/dl/edgedl/chromeos/recovery/chromeos_${platformVersion}_${board}_recovery_ltc-channel_${keyVersion}.bin.zip`;

  // Display the generated URL
  document.getElementById('url').textContent = url;
});
