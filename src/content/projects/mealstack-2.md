---
title: 'Mealstack v2'
link: 'https://github.com/jimmernauts/gleamstack'
tags: ['Full Stack','Gleam','Lustre','Tailwind']
status: 'active'
image: 
---

## Description

I am rewriting the progress so far on the [Mealstack](/projects/mealstack) application in Gleam. This is a bit of a departure from the previous approach for a few reasons:
+ I was not sold on the approach to the frontend that I landed on. Using Astro + Web Components for interactivity led to a lot of duplication between the server-rendered and client-rendered bits, and was not very ergonomic.
+ I wanted to explore the local-first idea, which lends itself more to a SPA, where all the business logic along with the database lives client-side, and only some minimal authentication / synchronization logic needs to live on a central server.
+ Gleam seemed fun and interesting and I was not thrilled about any of the other choices for "what to learn next"

## Architecture

The rewritten architecture of Mealstack is spending a few more innovation tokens, but I am enjoying exploring it so far.
It's a client-side Single Page Application written in [Gleam](https://gleam.run), a new (but growing) functional language that compiles to Erlang or Javascript. It uses Gleam's [Lustre](https://hexdocs.pm/lustre/) web framework, and bundles [CR-SQLite](https://vlcn.io/docs/cr-sqlite/intro) into the SPA for a local-first database that runs in the browser.

In the future, I aim to get a central sync service working to backup and sync the local SQLite db. I explored other options like [ElectricSQL](https://electric-sql.com/), [Replicache](https://replicache.dev/), and [others](https://localfirstweb.dev/), and really any of these should work for my use cases, I will probably just go for the one that is easiest to work with.

## Roadmap

### Port from Mealstack v1
[x] Recipe List
[x] Create Recipe
[x] Edit Recipe
[] Meal Planner
[] Recipe import

### Features
[] Add a Shopping List that can be generated from the recipes selected in the Planner
[] Shortlist recipes from the Book for inclusion in the Plan
[] Improve the recipe import with OCR
[] Improve the recipe import with fuzzy generation against a given schema using LLM
[] Chatbot interface: describe what I feel like, have AI generate the meal Plan

### NFRs
[] Auth ?
[] Tests
[] Sync
[] Rewrite to an MVC framework/language ?