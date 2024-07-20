function checkPassword() {
    const password = document.getElementById("password").value;
    const feedback = document.getElementById("password-feedback");
  
    // Clear previous feedback
    feedback.innerHTML = "";
  
    if (!password) {
      feedback.innerText = "Please enter a password.";
      return;
    }
  
    const score = calculatePasswordStrength(password);
  
    let message;
    let color;
  
    if (score <= 10) {
      message = "Weak password. Consider using a longer and more complex password.";
      color = "red";
    } else if (score <= 15) {
      message = "Medium strength password. Adding more complexity would improve it.";
      color = "orange";
    } else {
      message = "Strong password! Keep it safe and don't share it with anyone.";
      color = "green";
    }
  
    feedback.innerHTML = `<p style="color: ${color}">${message}</p>`;
  }
  
  function calculatePasswordStrength(password) {
    let score = 0;
  
    // Length check
    score += Math.min(password.length, 10); // Bonus points for exceeding 10 characters
  
    // Complexity check
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[!@#$%^&*()]/.test(password);
  
    score += hasUppercase ? 5 : 0;
    score += hasLowercase ? 5 : 0;
    score += hasNumber ? 5 : 0;
    score += hasSymbol ? 5 : 0;
  
    // Bonus for mixed character types
    if (hasUppercase && hasLowercase && hasNumber && hasSymbol) {
      score += 10;
    }
  
    return score;
  }
  