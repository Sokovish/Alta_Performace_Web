/*
  Warnings:

  - You are about to drop the `Teste` table. If the table is not empty, all the data it contains will be lost.
  - You are about to alter the column `telefone` on the `Medico` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Teste";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Medico" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "CPF" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "CRM" TEXT NOT NULL,
    "telefone" BIGINT NOT NULL
);
INSERT INTO "new_Medico" ("CPF", "CRM", "email", "id", "idade", "nome", "sobrenome", "telefone") SELECT "CPF", "CRM", "email", "id", "idade", "nome", "sobrenome", "telefone" FROM "Medico";
DROP TABLE "Medico";
ALTER TABLE "new_Medico" RENAME TO "Medico";
CREATE UNIQUE INDEX "Medico_CPF_key" ON "Medico"("CPF");
CREATE UNIQUE INDEX "Medico_email_key" ON "Medico"("email");
CREATE UNIQUE INDEX "Medico_CRM_key" ON "Medico"("CRM");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
