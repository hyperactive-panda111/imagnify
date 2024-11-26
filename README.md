# AI SaaS Platform 🤖

## 📋 Table of Contents

1. [🤖 Introduction](#-introduction)
2. [⚙️ Tech Stack](#️-tech-stack)
3. [🔋 Features](#-features)
4. [🤸 Quick Start](#-quick-start)
5. [📦 Prerequisites](#-prerequisites)
6. [🚀 Installation](#-installation)
7. [🔐 Environment Setup](#-environment-setup)

## 🤖 Introduction

Build an AI image SaaS platform that excels in image processing capabilities, integrates a secure payment infrastructure, offers advanced image search functionalities, and supports multiple AI features, including:

- Image restoration
- Image recoloring
- Object removal
- Generative filling
- Background removal

This project can be a guide for your next AI image tool and a boost to your portfolio.

## ⚙️ Tech Stack

### Frontend
- Next.js
- TypeScript
- Shadcn
- TailwindCSS

### Backend
- MongoDB
- Clerk (Authentication)
- Cloudinary
- Stripe

## 🔋 Features

### User Management
- **Authentication and Authorization**: Secure user access with registration, login, and route protection
- **Profile Page**: Access transformed images and credit information personally

### Image Processing Capabilities
- **Image Restoration**: Revive old or damaged images effortlessly
- **Image Recoloring**: Customize images by replacing objects with desired colors easily
- **Image Generative Fill**: Fill in missing areas of images seamlessly
- **Object Removal**: Clean up images by removing unwanted objects with precision
- **Background Removal**: Extract objects from backgrounds with ease

### Advanced Functionalities
- **Community Image Showcase**: Explore user transformations with easy navigation using pagination
- **Advanced Image Search**: Find images by content or objects present inside the image quickly and accurately
- **Download Transformed Images**: Save and share AI-transformed images conveniently
- **Transformed Image Details**: View details of transformations for each image
- **Transformation Management**: Control over deletion and updates of transformations

### Credit System
- **Credits System**: Earn or purchase credits for image transformations
- **Credits Purchase**: Securely buy credits via Stripe for uninterrupted use

### User Experience
- **Responsive UI/UX**: A seamless experience across devices with a user-friendly interface

## 🤸 Quick Start

### 📦 Prerequisites

Ensure you have the following installed on your machine:
- Git
- Node.js
- npm (Node Package Manager)

### 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/adrianhajdin/imaginify.git
cd imaginify
```

2. Install project dependencies:
```bash
npm install
```

## 🔐 Environment Setup

Create a `.env.local` file in the root of your project with the following variables:

```env
# Next.js
NEXT_PUBLIC_SERVER_URL=

# MongoDB
MONGODB_URL=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
WEBHOOK_SECRET=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# Stripe
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

Replace the placeholder values with your actual account credentials from:
- Clerk
- MongoDB
- Cloudinary
- Stripe

## 🏃 Running the Project

```bash
npm run dev
```

Open http://localhost:3000 in your browser to view the project.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open-source. Please check the LICENSE file for details.
