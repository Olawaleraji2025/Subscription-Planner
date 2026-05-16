# Subscription Planner Wizard

A multi-step subscription builder where users enter personal details, choose a plan (monthly/yearly), select optional add-ons, and confirm their subscription.

## Features
- Step-by-step flow (stateful stepper)
- Personal information validation (via Redux)
- Plan selection with monthly vs yearly billing toggle
- Add-ons selection with dynamic pricing
- Confirmation + Thank You screen

## Tech Stack
- React (Vite)
- Redux Toolkit / React-Redux
- Tailwind CSS + shadcn/ui components


## Project Structure 
- `src/App.jsx` — main stepper layout and navigation
- `src/components/Layout/*` — UI for each step (Personal Info, Plan, Add-ons, Confirm, Thank You)
- `src/features/*` — Redux slices (stepper, personal info, plan selection, add-ons)
- `src/components/ui/*` — reusable UI primitives

## Notes
This project is designed around a subscription “wizard” experience inspired by common gaming subscription flows (plan selection + optional add-ons + summary/confirmation).
