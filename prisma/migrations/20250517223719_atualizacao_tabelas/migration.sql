/*
  Warnings:

  - Added the required column `email` to the `Gestor` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Gestor" (
    "codigo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL DEFAULT '09876'
);
INSERT INTO "new_Gestor" ("codigo", "nome", "sobrenome") SELECT "codigo", "nome", "sobrenome" FROM "Gestor";
DROP TABLE "Gestor";
ALTER TABLE "new_Gestor" RENAME TO "Gestor";
CREATE UNIQUE INDEX "Gestor_email_key" ON "Gestor"("email");
CREATE TABLE "new_Medico" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "CPF" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL DEFAULT '12345',
    "CRM" TEXT NOT NULL,
    "telefone" BIGINT NOT NULL
);
INSERT INTO "new_Medico" ("CPF", "CRM", "email", "id", "idade", "nome", "sobrenome", "telefone") SELECT "CPF", "CRM", "email", "id", "idade", "nome", "sobrenome", "telefone" FROM "Medico";
DROP TABLE "Medico";
ALTER TABLE "new_Medico" RENAME TO "Medico";
CREATE UNIQUE INDEX "Medico_CPF_key" ON "Medico"("CPF");
CREATE UNIQUE INDEX "Medico_email_key" ON "Medico"("email");
CREATE UNIQUE INDEX "Medico_CRM_key" ON "Medico"("CRM");
CREATE TABLE "new_Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "CPF" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL DEFAULT '45666',
    "telefone" BIGINT
);
INSERT INTO "new_Usuario" ("CPF", "email", "id", "idade", "nome", "sobrenome", "telefone") SELECT "CPF", "email", "id", "idade", "nome", "sobrenome", "telefone" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_CPF_key" ON "Usuario"("CPF");
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
