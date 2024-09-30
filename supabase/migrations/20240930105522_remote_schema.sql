create table "public"."DailyRoutine" (
    "id" uuid not null default gen_random_uuid(),
    "user_id" uuid default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "startDate" timestamp with time zone default now(),
    "description" text,
    "endDate" timestamp with time zone
);


create table "public"."DailyRoutineDetail" (
    "created_at" timestamp with time zone not null default now(),
    "id" uuid default gen_random_uuid(),
    "routine_id" uuid,
    "date" timestamp with time zone default now(),
    "isCompleted" boolean default false
);


create table "public"."bookmark" (
    "id" uuid not null default gen_random_uuid(),
    "title" character varying not null,
    "url" text,
    "thumbnail_url" text,
    "user_id" uuid
);


alter table "public"."todo_category" disable row level security;

alter table "public"."todo_detail" add column "is_done" boolean;

alter table "public"."todo_detail" disable row level security;

CREATE UNIQUE INDEX "DailyRoutine_pkey" ON public."DailyRoutine" USING btree (id);

CREATE UNIQUE INDEX bookmark_pkey ON public.bookmark USING btree (id);

alter table "public"."DailyRoutine" add constraint "DailyRoutine_pkey" PRIMARY KEY using index "DailyRoutine_pkey";

alter table "public"."bookmark" add constraint "bookmark_pkey" PRIMARY KEY using index "bookmark_pkey";

alter table "public"."DailyRoutineDetail" add constraint "public_DailyRoutineDetail_routine_id_fkey" FOREIGN KEY (routine_id) REFERENCES "DailyRoutine"(id) not valid;

alter table "public"."DailyRoutineDetail" validate constraint "public_DailyRoutineDetail_routine_id_fkey";

grant delete on table "public"."DailyRoutine" to "anon";

grant insert on table "public"."DailyRoutine" to "anon";

grant references on table "public"."DailyRoutine" to "anon";

grant select on table "public"."DailyRoutine" to "anon";

grant trigger on table "public"."DailyRoutine" to "anon";

grant truncate on table "public"."DailyRoutine" to "anon";

grant update on table "public"."DailyRoutine" to "anon";

grant delete on table "public"."DailyRoutine" to "authenticated";

grant insert on table "public"."DailyRoutine" to "authenticated";

grant references on table "public"."DailyRoutine" to "authenticated";

grant select on table "public"."DailyRoutine" to "authenticated";

grant trigger on table "public"."DailyRoutine" to "authenticated";

grant truncate on table "public"."DailyRoutine" to "authenticated";

grant update on table "public"."DailyRoutine" to "authenticated";

grant delete on table "public"."DailyRoutine" to "service_role";

grant insert on table "public"."DailyRoutine" to "service_role";

grant references on table "public"."DailyRoutine" to "service_role";

grant select on table "public"."DailyRoutine" to "service_role";

grant trigger on table "public"."DailyRoutine" to "service_role";

grant truncate on table "public"."DailyRoutine" to "service_role";

grant update on table "public"."DailyRoutine" to "service_role";

grant delete on table "public"."DailyRoutineDetail" to "anon";

grant insert on table "public"."DailyRoutineDetail" to "anon";

grant references on table "public"."DailyRoutineDetail" to "anon";

grant select on table "public"."DailyRoutineDetail" to "anon";

grant trigger on table "public"."DailyRoutineDetail" to "anon";

grant truncate on table "public"."DailyRoutineDetail" to "anon";

grant update on table "public"."DailyRoutineDetail" to "anon";

grant delete on table "public"."DailyRoutineDetail" to "authenticated";

grant insert on table "public"."DailyRoutineDetail" to "authenticated";

grant references on table "public"."DailyRoutineDetail" to "authenticated";

grant select on table "public"."DailyRoutineDetail" to "authenticated";

grant trigger on table "public"."DailyRoutineDetail" to "authenticated";

grant truncate on table "public"."DailyRoutineDetail" to "authenticated";

grant update on table "public"."DailyRoutineDetail" to "authenticated";

grant delete on table "public"."DailyRoutineDetail" to "service_role";

grant insert on table "public"."DailyRoutineDetail" to "service_role";

grant references on table "public"."DailyRoutineDetail" to "service_role";

grant select on table "public"."DailyRoutineDetail" to "service_role";

grant trigger on table "public"."DailyRoutineDetail" to "service_role";

grant truncate on table "public"."DailyRoutineDetail" to "service_role";

grant update on table "public"."DailyRoutineDetail" to "service_role";

grant delete on table "public"."bookmark" to "anon";

grant insert on table "public"."bookmark" to "anon";

grant references on table "public"."bookmark" to "anon";

grant select on table "public"."bookmark" to "anon";

grant trigger on table "public"."bookmark" to "anon";

grant truncate on table "public"."bookmark" to "anon";

grant update on table "public"."bookmark" to "anon";

grant delete on table "public"."bookmark" to "authenticated";

grant insert on table "public"."bookmark" to "authenticated";

grant references on table "public"."bookmark" to "authenticated";

grant select on table "public"."bookmark" to "authenticated";

grant trigger on table "public"."bookmark" to "authenticated";

grant truncate on table "public"."bookmark" to "authenticated";

grant update on table "public"."bookmark" to "authenticated";

grant delete on table "public"."bookmark" to "service_role";

grant insert on table "public"."bookmark" to "service_role";

grant references on table "public"."bookmark" to "service_role";

grant select on table "public"."bookmark" to "service_role";

grant trigger on table "public"."bookmark" to "service_role";

grant truncate on table "public"."bookmark" to "service_role";

grant update on table "public"."bookmark" to "service_role";


