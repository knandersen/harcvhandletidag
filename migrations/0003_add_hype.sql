-- CreateTable
CREATE TABLE "Hype" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "hypeLevel" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Hype_date_key" ON "Hype"("date");
