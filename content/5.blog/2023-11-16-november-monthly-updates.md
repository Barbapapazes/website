---
title: Monthly updates (November 2023)
description: 16 releases this month! What's new in the UnJS ecosystem?
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
  - ipx
  - magicast
  - mkdist
  - scule
  - std-env
  - ufo
  - unhead
  - unpdf
  - unstorage
publishedAt: 2023-11-16T21:55:06.351Z
modifiedAt: 2023-11-16T21:55:06.351Z
layout: blog-post
---

## ipx

This month, we release 2 new releases (0 major release, 0 minor release and 2 patch releases):

- [v2.0.2](https://github.com/unjs/ipx/releases/tag/v2.0.2)
- [v2.0.1](https://github.com/unjs/ipx/releases/tag/v2.0.1)

### what's changed

- fix: allow httpStorage `allowAllDomains` config param to be used. by @Jarrku in https://github.com/unjs/ipx/pull/189
- deps: update to svgo v3.0.3 by @SethFalco in https://github.com/unjs/ipx/pull/188

### fixes

- **svgo:** Handle javascript uris in `removexss` plugin ([#186](https://github.com/unjs/ipx/pull/186))

## magicast

This month, we release 2 new releases (0 major release, 0 minor release and 2 patch releases):

- [v0.3.2](https://github.com/unjs/magicast/releases/tag/v0.3.2)
- [v0.3.1](https://github.com/unjs/magicast/releases/tag/v0.3.1)

### fixes

- Quoted properties of `ObjectExpression` not in exports proxy ([#94](https://github.com/unjs/magicast/pull/94))

## mkdist

This month, we release 1 new release (0 major release, 0 minor release and 1 patch release):

- [v1.3.1](https://github.com/unjs/mkdist/releases/tag/v1.3.1)

### fixes

- **cjs:** Hotfix babel transformation issue ([94444df](https://github.com/unjs/mkdist/commit/94444df))

## scule

This month, we release 1 new release (0 major release, 1 minor release and 0 patch release):

- [v1.1.0](https://github.com/unjs/scule/releases/tag/v1.1.0)

### enhancements

- Export type helpers ([#58](https://github.com/unjs/scule/pull/58))

### fixes

- Move types filed to the top ([4fd4a79](https://github.com/unjs/scule/commit/4fd4a79))
- **pascalCase, camelCase:** Lower rest of each segment ([#62](https://github.com/unjs/scule/pull/62))

### documentation

- Add missing quotation mark ([#41](https://github.com/unjs/scule/pull/41))
- Improve readme with code examples ([21f19ba](https://github.com/unjs/scule/commit/21f19ba))

## std-env

This month, we release 1 new release (0 major release, 1 minor release and 0 patch release):

- [v3.5.0](https://github.com/unjs/std-env/releases/tag/v3.5.0)

### enhancements

- Add `aws_amplify` provider ([#91](https://github.com/unjs/std-env/pull/91))

## ufo

This month, we release 1 new release (0 major release, 0 minor release and 1 patch release):

- [v1.3.2](https://github.com/unjs/ufo/releases/tag/v1.3.2)

### fixes

- **parseURL:** Parse protocol case-insensitively ([#188](https://github.com/unjs/ufo/pull/188))
- Respect fragment in trailing slash utils ([#175](https://github.com/unjs/ufo/pull/175))

## unhead

This month, we release 3 new releases (0 major release, 0 minor release and 3 patch releases):

- [v1.8.4](https://github.com/unjs/unhead/releases/tag/v1.8.4)
- [v1.8.3](https://github.com/unjs/unhead/releases/tag/v1.8.3)
- [v1.8.2](https://github.com/unjs/unhead/releases/tag/v1.8.2)

### bug fixes

- **schema-org:** `JobPosting` refinements ([85a5933](https://github.com/unjs/unhead/commit/85a5933))
- **schema-org:** allow overriding tag `tagPosition` ([6a0eb46](https://github.com/unjs/unhead/commit/6a0eb46))
- **schema-org:** isolated `Organization` for Logo rich results ([c0bd4ca](https://github.com/unjs/unhead/commit/c0bd4ca))
- **useSeoMeta:** unpack `viewport` ([17e236f](https://github.com/unjs/unhead/commit/17e236f)), closes [#265](https://github.com/unjs/unhead/issues/265)

## unpdf

This month, we release 3 new releases (0 major release, 3 minor releases and 0 patch release):

- [v0.10.0](https://github.com/unjs/unpdf/releases/tag/v0.10.0)
- [v0.9.0](https://github.com/unjs/unpdf/releases/tag/v0.9.0)
- [v0.8.0](https://github.com/unjs/unpdf/releases/tag/v0.8.0)

### breaking changes

- Remove deprecated `extractPDFText` fn - by @johannschopplich [<samp>(61fb4)</samp>](https://github.com/unjs/unpdf/commit/61fb4f8)
- Deprecate `defineUnPDFConfig` for `configureUnPDF` - by @johannschopplich [<samp>(014a6)</samp>](https://github.com/unjs/unpdf/commit/014a6ea)

### bug fixes

- Apply `useSystemFonts: true` by default - by @johannschopplich [<samp>(02afd)</samp>](https://github.com/unjs/unpdf/commit/02afd71)

### features

- Support PDF.js v4 - by @johannschopplich [<samp>(faa96)</samp>](https://github.com/unjs/unpdf/commit/faa9648)

## unstorage

This month, we release 2 new releases (0 major release, 1 minor release and 1 patch release):

- [v1.10.1](https://github.com/unjs/unstorage/releases/tag/v1.10.1)
- [v1.10.0](https://github.com/unjs/unstorage/releases/tag/v1.10.0)

### enhancements

- Support `netlify-blobs` driver ([#337](https://github.com/unjs/unstorage/pull/337)) (Read more in the [documentation](https://unstorage.unjs.io/drivers/netlify-blobs))

### fixes

- **server:** Read body as string ([dfda25f](https://github.com/unjs/unstorage/commit/dfda25f))
- **azure-key-vault-driver:** Fix character encoding ([#308](https://github.com/unjs/unstorage/pull/308))
- **lru-cache, memory, mongodb, redis:** Return falsy values when set in storage ([#320](https://github.com/unjs/unstorage/pull/320))

### documentation

- Fix memory driver description ([#286](https://github.com/unjs/unstorage/pull/286))
- **fs:** Fix typo ([#290](https://github.com/unjs/unstorage/pull/290))
- Fix typo in `getMount` usage ([#297](https://github.com/unjs/unstorage/pull/297))
- Update deps ([#310](https://github.com/unjs/unstorage/pull/310))
- **indexedb:** Fix typo in import ([#327](https://github.com/unjs/unstorage/pull/327))