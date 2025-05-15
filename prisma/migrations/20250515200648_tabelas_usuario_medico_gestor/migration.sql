-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "CPF" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" INTEGER
);

-- CreateTable
CREATE TABLE "Medico" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "CPF" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "CRM" TEXT NOT NULL,
    "telefone" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Gestor" (
    "codigo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_CPF_key" ON "Usuario"("CPF");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Medico_CPF_key" ON "Medico"("CPF");

-- CreateIndex
CREATE UNIQUE INDEX "Medico_email_key" ON "Medico"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Medico_CRM_key" ON "Medico"("CRM");
