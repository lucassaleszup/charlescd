package main

import (
	"compass/datasource"
	"compass/metricsgroup"
	v1 "compass/web/api/v1"
	"fmt"
	"github.com/golang-migrate/migrate/v4"
	"github.com/golang-migrate/migrate/v4/database/postgres"
	_ "github.com/golang-migrate/migrate/v4/source/file"
	_ "github.com/lib/pq"
	"log"
	"os"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	db, err := gorm.Open("postgres", fmt.Sprintf("host=%s user=%s dbname=%s password=%s sslmode=%s",
		os.Getenv("DB_HOST"),
		os.Getenv("DB_USER"),
		os.Getenv("DB_NAME"),
		os.Getenv("DB_PASSWORD"),
		os.Getenv("DB_SSL"),
	))
	if err != nil {
		log.Fatalln("failed to connect database")
	}
	defer db.Close()

	driver, err := postgres.WithInstance(db.DB(), &postgres.Config{})

	m, err := migrate.NewWithDatabaseInstance(
		"file://migrations",
		os.Getenv("DB_NAME"), driver)
	if err != nil {
		log.Fatal(err)
	}
	if err := m.Up(); err != nil {
		log.Fatal(err)
	}

	metricsgroupMain := metricsgroup.NewMain(db)
	datasourceMain := datasource.NewMain(db)

	v1 := v1.NewV1()
	v1.NewMetricsGroupApi(metricsgroupMain)
	v1.NewDataSourceApi(datasourceMain)
	v1.Start()
}
