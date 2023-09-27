const standardValuesLoop1 = [300, 100, 100];
const standardValuesLoop2 = [300, 100, 100];
const standardValuesLoop3 = [3000, 1000, 1000];
const standardValuesLoop4 = [30000, 10000, 10000];


let a, b, c; // Define global variables a, b, and c

document.addEventListener(
  "DOMContentLoaded",
  (mdpMenu = () => {
    var mdropdownMenu = document.getElementById("mdropdownMenu");
    var inputsToDisable = [
      "input13_1",
      "input23_1",
      "input13_2",
      "input23_2",
      "input13_3",
      "input23_3",
    ];

    // Store the initial display states of the images
    var initialDisplayStates = [];
    const images = document.getElementsByClassName("toggled");
    const toggledsImages = document.getElementsByClassName("toggleds");

    for (let i = 0; i < images.length; i++) {
      initialDisplayStates[i] = images[i].style.display;
    }

    // Hide toggleds class initially
    for (let i = 0; i < toggledsImages.length; i++) {
      toggledsImages[i].style.display = "none";
    }

    mdropdownMenu.addEventListener("click", function (event) {
      var target = event.target;
      var selectedOption = target.getAttribute("value");

      if (selectedOption === "disabled") {
        for (var i = 0; i < inputsToDisable.length; i++) {
          var inputId = inputsToDisable[i];
          var input = document.getElementById(inputId);
          input.disabled = true;
        }
        for (let i = 0; i < images.length; i++) {
          images[i].style.display = "none";
        }
      } else if (selectedOption === "enabled") {
        for (var i = 0; i < inputsToDisable.length; i++) {
          var inputId = inputsToDisable[i];
          var input = document.getElementById(inputId);
          input.disabled = false;
        }
        for (let i = 0; i < images.length; i++) {
          images[i].style.display = initialDisplayStates[i]; // Restore initial display state
        }

        // Hide toggleds class when enabled
        for (let i = 0; i < toggledsImages.length; i++) {
          toggledsImages[i].style.display = "none";
        }

        // Hide inlined image next to "enabled"
        document.getElementById("inlinedImage").style.display = "none";
      }
    });
  })
);

mdpMenu();

function calculateAll() {
  a = b = c = 0; // Initialize a, b, and c

  for (let i = 1; i <= 3; i++) {
    const input13Value = parseFloat(
      document.getElementById(`input13_${i}`).value
    );
    const input23Value = parseFloat(
      document.getElementById(`input23_${i}`).value
    );

    const sumLE = input13Value + input23Value;
    const divisionResultLE = Math.floor(sumLE);

    const input12Value = parseFloat(
      document.getElementById(`input12_${i}`).value
    );
    const input22Value = parseFloat(
      document.getElementById(`input22_${i}`).value
    );

    const sumEP = input12Value + input22Value;
    const divisionResultEP = Math.floor(sumEP / 10);

    const input1Value = parseFloat(
      document.getElementById(`input1_${i}`).value
    );
    const input2Value = parseFloat(
      document.getElementById(`input2_${i}`).value
    );

    const sumR = input1Value + input2Value;
    const divisionResultR = Math.floor(sumR / 10);

    const input11Value = parseFloat(
      document.getElementById(`input11_${i}`).value
    );
    const input21Value = parseFloat(
      document.getElementById(`input21_${i}`).value
    );

    const sumU = input11Value + input21Value;
    const divisionResultU = Math.floor(sumU / 10);

    a += (divisionResultEP * 125) + (divisionResultR * 25) + (divisionResultU * 2);
    b += (divisionResultEP * 100000) + (divisionResultR * 20000) + (divisionResultU * 2000);
    c += (divisionResultEP * 25000) + (divisionResultR * 5000) + (divisionResultU * 1000);

    document.getElementById(`divisionResultL_${i}`).textContent = divisionResultLE + divisionResultEP;
    document.getElementById(`differenceL_${i}`).textContent = Math.abs(standardValuesLoop1[i - 1] - sumLE) - divisionResultEP;
    
    document.getElementById(`divisionResultE_${i}`).textContent = divisionResultEP;
    document.getElementById(`differenceE_${i}`).textContent = Math.abs(standardValuesLoop2[i - 1] - sumEP) - divisionResultR;

    document.getElementById(`divisionResultR_${i}`).textContent = divisionResultR;
    document.getElementById(`differenceR_${i}`).textContent = Math.abs(standardValuesLoop3[i - 1] - sumR) - divisionResultU;

    document.getElementById(`divisionResultU_${i}`).textContent = divisionResultU;
    document.getElementById(`differenceU_${i}`).textContent = Math.abs(standardValuesLoop4[i - 1] - sumU);
  }


  for (let g = 1; g <= 3; g++) {
    var inputValue1 = parseFloat(document.getElementById("input441").value);
    var inputValue2 = parseFloat(document.getElementById("input442").value);
    var totalValue = inputValue1 + inputValue2;

    var selectedSet = document.getElementById("dropdownSet").value;
    var standardValue = 0;

    // Determine the standard value based on the selected set
    if (selectedSet === "set1") {
      standardValue = 13500;
    } else if (selectedSet === "set2") {
      standardValue = 76000;
    } else if (selectedSet === "set3") {
      standardValue = 62500;
    }

    var totalInputs1 =  standardValue - a;

    var result = Math.abs(totalInputs1 - totalValue); // Subtract 'a' from the result

    document.getElementById("result").innerText =
      "Glitterings Needed: " + result;
  }

  for (let c = 1; c <= 3; c++) {
    var inputValue11 = parseFloat(document.getElementById("input443").value);
    var inputValue22 = parseFloat(document.getElementById("input444").value);
    var oldSilver = inputValue22 * 10000;
    var totalValue2 = inputValue11 + oldSilver;

    var selectedSet2 = document.getElementById("dropdownSet").value;
    var standardValue2 = 0;

    // Determine the standard value based on the selected set
    if (selectedSet2 === "set1") {
      standardValue2 = 11000000;
    } else if (selectedSet2 === "set2") {
      standardValue2 = 61000000;
    } else if (selectedSet2 === "set3") {
      standardValue2 = 50000000;
    }

    var totalInputs2 = standardValue2 - b;

    var result1 = Math.abs(totalInputs2 - totalValue2); // Subtract 'b' from the result
    document.getElementById("result1").innerText = "Copper Needed: " + result1;
  }

  for (let ds = 1; ds <= 3; ds++) {
    var inputValue22 = parseFloat(document.getElementById("input445").value);
    var totalValue3 = inputValue22;

    var selectedSet3 = document.getElementById("dropdownSet").value;
    var standardValue3 = 0;

    // Determine the standard value based on the selected set
    if (selectedSet3 === "set1") {
      standardValue3 = 3000000;
    } else if (selectedSet3 === "set2") {
      standardValue3 = 15500000;
    } else if (selectedSet3 === "set3") {
      standardValue3 = 12500000;
    }

    var totalInputs3 = standardValue3 - c;

    var result2 = Math.abs(totalInputs3 - totalValue3); // Subtract 'c' from the result
    document.getElementById("result2").innerText =
      "Darksteel Needed: " + result2;
  }
}


  




function resetInputs() {
  // Reset inputs for sets 1 to 6
  for (let i = 1; i <= 6; i++) {
    document.getElementById(`input1_${i}`).value = "";
    document.getElementById(`input2_${i}`).value = "";
    document.getElementById(`input11_${i}`).value = "";
    document.getElementById(`input21_${i}`).value = "";
    document.getElementById(`input12_${i}`).value = "";
    document.getElementById(`input22_${i}`).value = "";
  }

  // Clear result values
  for (let clear = 1; clear <= 9; clear++) {
    document.getElementById(`sumU_${clear}`).textContent = "";
    document.getElementById(`divisionResultU_${clear}`).textContent = "";
    document.getElementById(`differenceU_${clear}`).textContent = "";
    document.getElementById(`sumR_${clear}`).textContent = "";
    document.getElementById(`divisionResultR_${clear}`).textContent = "";
    document.getElementById(`differenceR_${clear}`).textContent = "";
    document.getElementById(`sumE_${clear}`).textContent = "";
    document.getElementById(`divisionResultE_${clear}`).textContent = "";
    document.getElementById(`differenceE_${clear}`).textContent = "";
  }
}


//dropdown images animation
function toggleImages() {
  const dropdown = document.getElementById("imageToggleDropdown");
  const selectedValue = dropdown.value;
  const images = document.getElementsByClassName("toggle-image");

  // Hide all images
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  // Display the selected set of images
  const selectedImages = document.getElementsByClassName(selectedValue);
  for (let i = 0; i < selectedImages.length; i++) {
    selectedImages[i].style.display = "inline"; // Display inline
  }
}

// Update the images based on the initial value of the dropdown
toggleImages();

