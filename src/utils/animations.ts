export const animations = {
  pulse: 'animate-pulse',
  fadeIn: 'animate-fadeIn',
  slideIn: 'animate-slideIn',
  bounce: 'animate-bounce'
} as const;

export function getLoadingAnimation(type: 'pulse' | 'bounce' = 'pulse'): string {
  return animations[type];
}