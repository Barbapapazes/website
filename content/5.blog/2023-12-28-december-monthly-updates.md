---
title: Monthly updates (December 2023)
description: 12 releases this month! What's new in the UnJS ecosystem?
image:
  src:
  alt:
authors:
  - name:
    picture:
    twitter:
category:
  - releases
packages:
  - giget
  - node-fetch-native
  - std-env
  - unhead
  - unpdf
  - untun
  - webpackbar
publishedAt: 2023-12-28T00:40:12.905Z
modifiedAt: 2023-12-28T00:40:12.905Z
layout: blog-post
---

## giget

This month, we release 2 new releases (0 major release, 1 minor release and 1 patch release):

- [v1.2.1](https://github.com/unjs/giget/releases/tag/v1.2.1)
- [v1.2.0](https://github.com/unjs/giget/releases/tag/v1.2.0)

### fixes

- **cli:** Add missing shebang ([#135](https://github.com/unjs/giget/pull/135))

### enhancements

- Support cloning from http(s) sources ([#129](https://github.com/unjs/giget/pull/129))
- Support proxy for Node.js with native fetch ([#133](https://github.com/unjs/giget/pull/133))
- Support installing dependencies ([#134](https://github.com/unjs/giget/pull/134))
### fixes
- **gitlab:** Workaround hotlinking  protection (406 Not Acceptable) ([#123](https://github.com/unjs/giget/pull/123))
- **cli:** Display the current directory when cloning into current dir ([#132](https://github.com/unjs/giget/pull/132))
- Add URL to undici's `fetch failed` error ([6e2455a](https://github.com/unjs/giget/commit/6e2455a))
- Create dst dir only after the source is successfully downloaded ([#119](https://github.com/unjs/giget/pull/119))

### 💅 refactors

- Use citty for cli ([#113](https://github.com/unjs/giget/pull/113))

### documentation

- Add more info about auth ([ab28a9f](https://github.com/unjs/giget/commit/ab28a9f))

## node-fetch-native

This month, we release 4 new releases (0 major release, 2 minor releases and 2 patch releases):

- [v1.6.1](https://github.com/unjs/node-fetch-native/releases/tag/v1.6.1)
- [v1.6.0](https://github.com/unjs/node-fetch-native/releases/tag/v1.6.0)
- [v1.5.1](https://github.com/unjs/node-fetch-native/releases/tag/v1.5.1)
- [v1.5.0](https://github.com/unjs/node-fetch-native/releases/tag/v1.5.0)

### enhancements

- **proxy:** Export `fetch` and `createFetch` ([#108](https://github.com/unjs/node-fetch-native/pull/108))
- **proxy:** Support no_proxy ([#109](https://github.com/unjs/node-fetch-native/pull/109))

### fixes

- **proxy:** Update environment variable check order ([742d27e](https://github.com/unjs/node-fetch-native/commit/742d27e))

## std-env

This month, we release 2 new releases (0 major release, 2 minor releases and 0 patch release):

- [v3.7.0](https://github.com/unjs/std-env/releases/tag/v3.7.0)
- [v3.6.0](https://github.com/unjs/std-env/releases/tag/v3.6.0)

### enhancements

- Support `railway` provider detection ([#106](https://github.com/unjs/std-env/pull/106))

### fixes

- Check `bun` runtime before `node` ([#107](https://github.com/unjs/std-env/pull/107))

### 💅 refactors

- Clarify runtimes and `isNode` behavior ([#108](https://github.com/unjs/std-env/pull/108))

### 🌊 types

- Type `runtime` export ([#92](https://github.com/unjs/std-env/pull/92))

## unhead

This month, we release 1 new release (0 major release, 0 minor release and 1 patch release):

- [v1.8.9](https://github.com/unjs/unhead/releases/tag/v1.8.9)

### what's changed

- fix(unhead): falsey `class` / `style` breaks merging by @daniluk4000 in https://github.com/unjs/unhead/pull/290

## unpdf

This month, we release 1 new release (0 major release, 0 minor release and 1 patch release):

- [v0.10.1](https://github.com/unjs/unpdf/releases/tag/v0.10.1)

### bug fixes

- Return if PDFJS has been resolved - by @johannschopplich [<samp>(77c8c)</samp>](https://github.com/unjs/unpdf/commit/77c8c74)
- Pass canvas factory to doc proxy - by @johannschopplich in https://github.com/unjs/unpdf/issues/4 [<samp>(d7c3c)</samp>](https://github.com/unjs/unpdf/commit/d7c3ca4)

## untun

This month, we release 1 new release (0 major release, 0 minor release and 1 patch release):

- [v0.1.3](https://github.com/unjs/untun/releases/tag/v0.1.3)

### enhancements

- Allow to accept cloudflare notice ([#13](https://github.com/unjs/untun/pull/13))  (docs [fdbcf50](https://github.com/unjs/untun/commit/fdbcf50))
- Update Cloudflared to [`v2023.10.0`](https://github.com/cloudflare/cloudflared/releases/tag/2023.10.0) ([90008ca](https://github.com/unjs/untun/commit/90008ca))

## webpackbar

This month, we release 1 new release (1 major release, 0 minor release and 0 patch release):

- [v6.0.0](https://github.com/unjs/webpackbar/releases/tag/v6.0.0)

### fixes

- Automatically add `profile` reporter when `profile` option enabled ([#94](https://github.com/unjs/webpackbar/pull/94))

### 💅 refactors

- Repository updated ([e7d217c](https://github.com/unjs/webpackbar/commit/e7d217c))
- **deps:** ⚠️  Upgrade consola to v3 and minimum node version ([#128])