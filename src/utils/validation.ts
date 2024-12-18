export function isValidMarkSize(size: number): boolean {
  return [2, 4, 8].includes(size);
}

export function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '');
}

export function validateMessage(content: string): string | null {
  if (!content.trim()) {
    return 'Message cannot be empty';
  }
  if (content.length > 500) {
    return 'Message is too long (max 500 characters)';
  }
  return null;
}