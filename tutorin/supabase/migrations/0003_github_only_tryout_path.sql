-- Tutorin: GitHub-only TO workflow.
-- TO source code is maintained manually in the repository under public/tryouts/.
-- No CMS ZIP upload is used.

alter table public.tests
  add column if not exists github_path text;

comment on column public.tests.github_path is
  'Path to the TO folder inside the Tutorin GitHub repository, e.g. public/tryouts/tka/sd/paket-01';

comment on column public.tests.github_repo_url is
  'GitHub repository containing the TO source code.';

comment on column public.tests.deployment_url is
  'Public URL of the deployed TO, usually /tryouts/... for static TOs in this repository.';
