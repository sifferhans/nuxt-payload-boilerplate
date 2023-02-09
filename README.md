# Nuxt + Payload monorepo boilerplate

A monorepo boilerplate using Nuxt and Payload.

## Why?

I was interested in using Payload as the CMS for a website project with Nuxt, but there were no good examples on how to setup a project with that specific tech stack.
I found [a pretty nice template](https://github.com/slavanossar/nuxt3-payload-template), but I specifically wanted to use a monorepo setup.

## Tech stack

- [Turborepo](https://turbo.dev/repo)  
  Makes working with a monorepo a breeze.

- [Nuxt](https://nuxt.com)  
  Full-stack framework for Vue 3.

- [Payload](https://payloadcms.com)  
  An extensible CMS with great developer experience.

## Setup

This project uses [pnpm](https://pnpm.io).
Navigate to the root of the monorepo and run the following command.

```sh
pnpm install
```

## Development

Navigate to the root of the monorepo and run the following command.

```sh
pnpm run dev
```

This will run both the Nuxt and Payload apps in parallel.

## License

This project is licensed under [MIT](/LICENSE).
