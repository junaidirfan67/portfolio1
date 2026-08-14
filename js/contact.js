/* ==========================================================================
   DEVELOPER PORTFOLIO - CONTACT FORM VALIDATION & TOAST NOTIFICATIONS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');

  if (!contactForm) return;

  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const subjectInput = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');
  const submitBtn = contactForm.querySelector('button[type="submit"]');

  // Regex email validator
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Show error helper
  function showError(input, msg) {
    const errorEl = input.nextElementSibling;
    input.style.borderColor = '#ff4757';
    if (errorEl && errorEl.classList.contains('form-error')) {
      errorEl.textContent = msg;
      errorEl.style.display = 'block';
    }
  }

  // Clear error helper
  function clearError(input) {
    const errorEl = input.nextElementSibling;
    input.style.borderColor = 'var(--border-glass)';
    if (errorEl && errorEl.classList.contains('form-error')) {
      errorEl.style.display = 'none';
    }
  }

  // Real-time input listener clearing errors on typing
  [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
    if (input) {
      input.addEventListener('input', () => clearError(input));
    }
  });

  // Toast display trigger
  function showToast(msg, duration = 4000) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = msg;
    toast.classList.add('active');
    setTimeout(() => {
      toast.classList.remove('active');
    }, duration);
  }

  // Form Submit Handler
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim()) {
      showError(nameInput, 'Please enter your name.');
      isValid = false;
    }

    // Validate Email
    if (!emailInput.value.trim()) {
      showError(emailInput, 'Please enter your email address.');
      isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      showError(emailInput, 'Please enter a valid email address.');
      isValid = false;
    }

    // Validate Message
    if (!messageInput.value.trim()) {
      showError(messageInput, 'Please enter your message.');
      isValid = false;
    } else if (messageInput.value.trim().length < 10) {
      showError(messageInput, 'Message should be at least 10 characters long.');
      isValid = false;
    }

    if (!isValid) return;

    // Simulate sending state
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending Message...';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;

      showToast('🚀 Thank you! Your message has been sent successfully. I will get back to you soon!');
      contactForm.reset();
    }, 1200);
  });
});
