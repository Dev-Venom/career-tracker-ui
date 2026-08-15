
# Career Tracker

A modern full-stack career management platform designed to help job seekers track applications, interviews, offers, and overall career progress from a single dashboard.

## Overview

Career Tracker provides a centralized workspace for managing the complete job-search journey.

Users can:

- Track job applications
- Manage application statuses
- Search and filter applications
- Manage interviews
- Schedule and edit interviews
- Receive notifications
- Monitor career analytics
- View application activity
- Track career progress
- Manage their profile

The frontend is built with React and designed around a clean, responsive product experience.

---

## Features

### Dashboard

- Personalized welcome section
- Application statistics
- Recent applications
- Upcoming interviews
- Quick actions
- Application search
- Status filtering

### Application Management

- Create applications
- Edit applications
- Delete applications
- Track application status
- Search applications
- Filter by status
- Kanban-style application board

### Interview Management

- View upcoming interviews
- Schedule interviews
- Edit interview details
- Track interview progress

### Analytics

- Application activity
- Application status breakdown
- Career journey visualization
- Career insights

### Notifications

- Notification center
- Unread notification count
- Notification navigation

### Authentication

- Login
- Registration
- Protected application routes
- JWT-based authentication

### Profile

- View user profile
- Manage account information

---

## Tech Stack

### Frontend

- React
- Vite
- JavaScript
- React Router
- Axios
- Pure CSS
- React Hot Toast
- React Icons

### Backend

- Java
- Spring Boot
- Spring Security
- Spring Data JPA
- JWT
- MySQL

---

## Project Architecture

The frontend follows a feature-oriented structure to keep pages, components, services, and hooks organized.

```text
src/
│
├── assets/
│   └── logo/
│
├── components/
│   ├── layout/
│   └── ui/
│
├── hooks/
│
├── pages/
│   ├── Applications/
│   ├── Analytics/
│   ├── Dashboard/
│   ├── Interviews/
│   ├── Notifications/
│   ├── Profile/
│   └── ...
│
├── services/
│
├── styles/
│
├── router/
│
└── App.jsx
