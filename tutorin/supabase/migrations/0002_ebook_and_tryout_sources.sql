-- Tutorin: Ebook purchase link + Tryout source management

alter table public.ebooks
  add column if not exists purchase_url text;

create type public.test_source_type as enum ('github', 'cms_upload', 'external_url');

alter table public.tests
  add column if not exists source_type public.test_source_type not null default 'github',
  add column if not exists github_repo_url text,
  add column if not exists github_branch text default 'main',
  add column if not exists code_storage_path text,
  add column if not exists deployment_url text;

-- Private storage for uploaded TO source packages.
insert into storage.buckets (id, name, public)
values ('to-code', 'to-code', false)
on conflict (id) do nothing;

create or replace function public.is_tutorin_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid()
      and role in ('content_admin','question_admin','program_admin','finance_admin','super_admin')
  );
$$;

create policy "admins upload TO source packages"
on storage.objects for insert
with check (bucket_id = 'to-code' and public.is_tutorin_admin());

create policy "admins read TO source packages"
on storage.objects for select
using (bucket_id = 'to-code' and public.is_tutorin_admin());

create policy "admins delete TO source packages"
on storage.objects for delete
using (bucket_id = 'to-code' and public.is_tutorin_admin());

create policy "admins manage tests"
on public.tests for all
using (public.is_tutorin_admin())
with check (public.is_tutorin_admin());

create policy "admins manage ebooks"
on public.ebooks for all
using (public.is_tutorin_admin())
with check (public.is_tutorin_admin());
