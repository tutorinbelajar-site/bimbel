# Tutorin — Web + CMS + GitHub Tryout Architecture

Latest architecture for Tutorin:

- Next.js 15 + React 19 on Vercel
- Supabase for Auth, CMS metadata, RLS, and traffic analytics
- GitHub as source of truth for each Tryout (TO)
- One folder = one independent TO
- **No central Bank Soal module in CMS**

## Public navigation

`Home | Bimbel | Ebook | Tryout | Blog | Konsultasi`

## CMS navigation

`Dashboard | Program | Tryout | Ebook | Blog | Pengguna`

## Tryout architecture

Every TO lives in its own folder under `public/tryouts`:

```text
public/
└── tryouts/
    ├── _template/
    │   ├── index.html
    │   └── manifest.json
    ├── tka/
    │   ├── sd/
    │   │   └── paket-01/
    │   ├── smp/
    │   └── sma/
    ├── snbt/
    └── latihan/
```

The TO folder contains its own source code, questions, explanations, assets, scoring/configuration, and entry page. The central CMS stores only TO metadata.

## Create a new TO from CMS

The CMS Tryout page has **Buat dari Template + GitHub**. It:

1. validates the logged-in admin through Supabase Auth + `admin_users`;
2. generates a safe slug;
3. copies the repository template to `public/tryouts/<category>/<level>/<slug>/` through GitHub API;
4. writes the new TO `manifest.json` with its metadata;
5. saves the TO catalog metadata into Supabase.

The GitHub token is server-only and must never use a `NEXT_PUBLIC_` variable.

## Supabase

Required Vercel environment variables:

```text
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
NEXT_PUBLIC_SITE_URL
GITHUB_TOKEN
GITHUB_OWNER
GITHUB_REPO
GITHUB_BRANCH
```

Do not commit real keys. Use `.env.example` only as a template.

## CMS CRUD

### Program
- create / edit / delete
- Privat / Kelas
- level, subject, descriptions
- features
- packages, meetings, price
- draft / published / archived

### Tryout
- create / edit / delete metadata
- create a new TO from GitHub template
- category, level, subject
- duration and question count
- GitHub path
- deployment URL
- status

### Ebook
- create / edit / delete
- title, slug, category, description
- price
- cover/file URL
- purchase URL
- status

### Blog
- create / edit / delete
- title, slug, category
- excerpt and content
- cover
- SEO title/description
- status

### Users
The CMS shows admin users. Auth accounts and passwords remain managed by Supabase Auth.

## Dashboard

Dashboard reads directly from Supabase and shows:

- page views
- unique visitors
- total programs
- total ebooks
- total tryouts
- total articles

## Security

- Supabase RLS protects CMS tables.
- CMS CRUD requires membership in `admin_users`.
- Public website can read only published catalog content.
- Question-bank tables are no longer used by the CMS. Migration `0003_remove_cms_question_bank.sql` removes the old central question tables when applied.
- Never expose `service_role` or a GitHub token to the browser.

## Deployment

1. Upload the **contents** of this project to the root of the `bimbel` GitHub repository.
2. Set the environment variables in Vercel.
3. Ensure the Vercel project root is `/`.
4. Deploy with the Next.js framework preset.
5. Apply Supabase migrations in order if the target database does not already contain them.
6. Add at least one Supabase Auth user to `admin_users` before opening `/admin`.
7. Configure GitHub token/owner/repo/branch before using **Buat dari Template + GitHub**.

## Important GitHub limitation

The GitHub integration needs a token with permission to write to the selected repository. If the GitHub account/repository is suspended or access is denied, CMS metadata CRUD can still work in Supabase, but automatic TO-folder creation cannot.

## Vercel build compatibility fix

Pinned published versions for reliable Vercel installs:
- Next.js 15.5.25
- React 19.3.0
- React DOM 19.3.0
- TypeScript 5.9.3
- Node.js 22.x

The previous `typescript: 5.8.0` was invalid because that exact stable version was not published to npm; the 5.8 line includes 5.8.3.

