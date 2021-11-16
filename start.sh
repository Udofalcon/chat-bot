#!/bin/bash
npm install

cd app
npm install
cd ..

docker compose build
docker compose up -d
