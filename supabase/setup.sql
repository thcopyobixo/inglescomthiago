-- FluentDaily: tabela de progresso, uma linha por usuário.
-- Cole tudo no Supabase em: SQL Editor > New query > Run.

create table if not exists public.progress (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  data       jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

-- Permite que usuários logados usem a tabela pelo site (as regras abaixo limitam a cada um a sua linha).
grant select, insert, update on public.progress to authenticated;

-- Segurança por linha: cada pessoa só lê e grava o próprio progresso.
alter table public.progress enable row level security;

drop policy if exists "ler o proprio progresso" on public.progress;
create policy "ler o proprio progresso" on public.progress
  for select using (auth.uid() = user_id);

drop policy if exists "criar o proprio progresso" on public.progress;
create policy "criar o proprio progresso" on public.progress
  for insert with check (auth.uid() = user_id);

drop policy if exists "atualizar o proprio progresso" on public.progress;
create policy "atualizar o proprio progresso" on public.progress
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
