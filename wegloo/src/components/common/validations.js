export const EmailValidation = (email) => {

    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email matches the regular expression
    if (emailRegex.test(email)) {
        // Check if 'com' exists after the last '.'
        const lastDotIndex = email.lastIndexOf('.');
        if (lastDotIndex !== -1) {
            const domain = email.slice(lastDotIndex + 1);
            if (domain.toLowerCase() === 'com') {
                return true; // Email is valid
            }
        }
    }
    return false; // Email is invalid
}

export const areAllAlphabets = (word) => {
    // Regular expression to match only alphabetic characters
    const regex = /^[a-zA-Z]+$/;
    return regex.test(word);
}

export const startsWithAt = (username) => {
    // Regular expression to match "@" at the start of the string
    const regex = /^@/;
    // Test if the username starts with "@"
    return regex.test(username);
}

export const areAllNumbers = (str) => {
    // Regular expression to match any character that is not a digit
    const regex = /\D/;
    // Test if the string contains any non-digit character
    return !regex.test(str);
}

export const validatePhoneNumber = (phoneNumber) => {
    // Regular expression to match valid mobile number formats
    const regex = /^\d{3}-?\d{3}-?\d{4}$/;

    // Test if the number matches the regular expression
    return regex.test(phoneNumber);
  };

export const validateInput = (input) => {
    // Username validation
    if (input.startsWith('@') && /[a-zA-Z_]/.test(input.slice(1))) {
        return 'username';
    }

    // Email validation
    if (EmailValidation(input)) {
        return 'email';
    }

    // Mobile number validation
    if (validatePhoneNumber(input)) {
        return 'mobile';
    }
    // If none of the above match, it might be an invalid input
    return 'invalid';
}

export const validatePassword = (password) => {
    const minLengthValid = password.length >= 7;
    const hasUpperCaseValid = /[A-Z]/.test(password);
    const hasLowerCaseValid = /[a-z]/.test(password);
    const hasNumberOrSymbolValid = /[\d\W]/.test(password);

    return {
        'Minimum 7 characters': minLengthValid,
        'At least 1 upper case character': hasUpperCaseValid,
        'At least 1 lower case character': hasLowerCaseValid,
        'At least 1 number or symbol': hasNumberOrSymbolValid
    };
};

export const userNameValidation = (word) => {
    // Regular expression to match the pattern
    const regex = /^@[a-z]+$/;
  
    // Test if the word matches the pattern
    return regex.test(word);
  }