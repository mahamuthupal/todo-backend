ALTER TABLE "todos" ADD COLUMN "task" text NOT NULL;--> statement-breakpoint
ALTER TABLE "todos" ADD COLUMN "completed" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "todos" DROP COLUMN "title";--> statement-breakpoint
ALTER TABLE "todos" DROP COLUMN "description";--> statement-breakpoint
ALTER TABLE "todos" DROP COLUMN "status";