document.getElementById("submit").addEventListener("click", function() {
  processInput();
});

document.getElementById("intervalsInput").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
      processInput();
  }
});

function processInput() {
  const inputString = document.getElementById("intervalsInput").value.trim();
  const inputArray = inputString.split(",");

  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = ""; // Clear previous output

  // Call the groupAnagrams function with inputArray
  const result = groupAnagrams(inputArray);

  // Display the result in the outputDiv
  result.forEach(group => {
      const groupElement = document.createElement("p");
      groupElement.textContent = "[" + group.join(", ") + "]";
      outputDiv.appendChild(groupElement);
  });
}

// Function to group anagrams
var groupAnagrams = function(strs) {
  let anagrams = new Map();

  for (let word of strs) {
      let sortedWord = [...word].sort().join('');
      if (!anagrams.has(sortedWord)) {
          anagrams.set(sortedWord, []);
      }
      anagrams.get(sortedWord).push(word);
  }

  return Array.from(anagrams.values());
};

// Add this script to clear the input field on page load
document.addEventListener('DOMContentLoaded', function() {
  var intervalsInput = document.getElementById('intervalsInput');
  intervalsInput.value = ''; // Set the input value to an empty string
});
