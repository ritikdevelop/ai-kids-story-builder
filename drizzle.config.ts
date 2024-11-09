import {defineConfig} from 'drizzle-kit'

export default defineConfig({
    // Your configuration here
    schema:"./config/schema.tsx",
    // ... other options ...
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://tech:G9ZonIAEx5Jr@ep-rough-block-a5ms1nqe.us-east-2.aws.neon.tech/ai-kids-story-builder?sslmode=require'
    },
    // ... other options ...
    verbose: true,
    strict: true

})