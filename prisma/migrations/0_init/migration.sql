-- CreateTable
CREATE TABLE "family" (
    "id" VARCHAR NOT NULL DEFAULT uuid_generate_v4(),
    "street" VARCHAR(70) NOT NULL,
    "number" VARCHAR(10) NOT NULL,
    "neighborhood" VARCHAR(30) NOT NULL,
    "complement" VARCHAR(100) NOT NULL,
    "is_rented" BOOLEAN NOT NULL,
    "rent_price" DECIMAL NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PK_ba386a5a59c3de8593cda4e5626" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "migrations" (
    "id" SERIAL NOT NULL,
    "timestamp" BIGINT NOT NULL,
    "name" VARCHAR NOT NULL,

    CONSTRAINT "PK_8c82d7f526340ab734260ea46be" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "person" (
    "id" VARCHAR NOT NULL DEFAULT uuid_generate_v4(),
    "name" VARCHAR(70) NOT NULL,
    "is_owner" BOOLEAN NOT NULL,
    "email" VARCHAR(70) NOT NULL,
    "document" VARCHAR(25) NOT NULL,
    "kin" VARCHAR(25) NOT NULL,
    "occupation" VARCHAR(30) NOT NULL,
    "wage" DECIMAL NOT NULL,
    "wage_sources" VARCHAR(70) NOT NULL,
    "nis" VARCHAR(25) NOT NULL,
    "schooling" VARCHAR(30) NOT NULL,
    "birthdate" TIMESTAMP(6) NOT NULL,
    "phone" VARCHAR(30) NOT NULL,
    "is_whatsapp" BOOLEAN NOT NULL,
    "phone_2" VARCHAR(30),
    "is_whatsapp_2" BOOLEAN,
    "family_id" VARCHAR NOT NULL,

    CONSTRAINT "PK_4f2a2be2f43c297850e3c4c2c3f" PRIMARY KEY ("id","family_id")
);

-- CreateTable
CREATE TABLE "project" (
    "id" VARCHAR NOT NULL DEFAULT uuid_generate_v4(),
    "name" VARCHAR(70) NOT NULL,
    "description" TEXT NOT NULL,
    "days_of_work" VARCHAR(100) NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "PK_4d68b1358bb5b766d3e78f32f57" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_family" (
    "project_id" VARCHAR NOT NULL,
    "family_id" VARCHAR NOT NULL,

    CONSTRAINT "PK_c5f9fef200c43518decf2516be2" PRIMARY KEY ("project_id","family_id")
);

-- CreateTable
CREATE TABLE "project_worker" (
    "project_id" VARCHAR NOT NULL,
    "worker_id" VARCHAR NOT NULL,

    CONSTRAINT "PK_c559dd6bdda866ce70d3255bc75" PRIMARY KEY ("project_id","worker_id")
);

-- CreateTable
CREATE TABLE "worker" (
    "id" VARCHAR NOT NULL DEFAULT uuid_generate_v4(),
    "name" VARCHAR(70) NOT NULL,
    "email" VARCHAR(70) NOT NULL,
    "password" VARCHAR NOT NULL,
    "access_level" VARCHAR(20) NOT NULL,
    "position" VARCHAR(20) NOT NULL,
    "phone" VARCHAR(30) NOT NULL,
    "is_whatsapp" BOOLEAN NOT NULL,
    "street" VARCHAR NOT NULL,
    "number" VARCHAR(10) NOT NULL,
    "birthdate" TIMESTAMP(6) NOT NULL,
    "neighborhood" VARCHAR(30) NOT NULL,
    "city" VARCHAR(30) NOT NULL,
    "complement" VARCHAR,
    "postal_code" VARCHAR NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "PK_dc8175fa0e34ce7a39e4ec73b94" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UQ_13679fa10b68bb29e4303ca1c91" ON "worker"("email");

-- AddForeignKey
ALTER TABLE "person" ADD CONSTRAINT "FK_79416f3fa7ca40ca48eaab66242" FOREIGN KEY ("family_id") REFERENCES "family"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "project_family" ADD CONSTRAINT "FK_26e4b934cd53af738788e33a838" FOREIGN KEY ("project_id") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "project_family" ADD CONSTRAINT "FK_e405d9f801db716230b9cc64370" FOREIGN KEY ("family_id") REFERENCES "family"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "project_worker" ADD CONSTRAINT "FK_5567dea09a83e5424293ba7876d" FOREIGN KEY ("project_id") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "project_worker" ADD CONSTRAINT "FK_55955d1b8f98d65ec5c939c4051" FOREIGN KEY ("worker_id") REFERENCES "worker"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

