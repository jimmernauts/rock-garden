---
title: 'Mealstack'
link: 'https://github.com/jimmernauts/mealstack'
tags: ['Full Stack','Typescript','Astro','Tailwind']
status: 'closed'
image: 
---

## Description

Mealstack is a full stack web application for meal planning, recipe keeping and grocery shopping.
It's a use case I am very familiar with, as I cook most nights of the week for my family and typically like to plan the shop in advance on the weekend.

There's nothing revolutionary here, it's just trying to be a nice, full-featured application that I can use to learn and that I will use regularly. My approach takes some inspiration from the "Home-cooked App" idea explored in this blog post:
https://www.robinsloan.com/notes/home-cooked-app/

## Architecture

At the moment, Mealstack has a fairly straightforward db<->server<->client architecture. The backend and templating is Astro hosted on fly.io, the db on Turso (a flavour of SQLite) and the client-side interactivity is vanilla JS Web Components.
The different bits to a more traditional enterprise stack are:
* Turso has an embedded replica db within the application server instance. So it should be fast (modulo latency from the client to the server, and cold starts).
* Astro is a newer JS framework, that isn't a Single Page App. Instead it has both backend and frontend in the same files in the codebase, and emphasizes server-rendered components with islands of interactivity added on the client side.

## Roadmap

### Features
[] Add a Shopping List that can be generated from the recipes selected in the Planner
[] Shortlist recipes from the Book for inclusion in the Plan
[] Improve the recipe import with OCR
[] Improve the recipe import with fuzzy generation against a given schema using LLM
[] Chatbot interface: describe what I feel like, have AI generate the meal Plan

### NFRs
[] Auth ?
[] Tests
[] Migrate database to local-first with sync ?
[] Rewrite to an MVC framework/language ?