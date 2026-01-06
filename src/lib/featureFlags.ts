// Central place for simple feature flags.
// PUBLIC_ env vars are exposed to the client by Astro.

export const BLOG_ENABLED: boolean = import.meta.env.PUBLIC_BLOG_ENABLED === 'true';
