# Kenenet Design System & UI Specifications

## 1. Visual Identity & Brand Concept
The Kenenet aesthetic reflects reliability, modern engineering, security, and enterprise sophistication. It emphasizes clean layouts, generous whitespace, sharp typography, and high-contrast accents.

---

## 2. Color Palette

### Primary Colors
- **Brand Navy (Primary Base)**: `#0B132B`
  - *Usage*: Main headers, hero backgrounds, primary text, prominent structural elements.
- **Electric Cobalt (Primary Accent)**: `#1D4ED8` (Tailwind: `blue-700`)
  - *Usage*: Primary buttons, active states, key highlighted phrases, icons.
- **Teal / Cyan (Highlight Accent)**: `#06B6D4` (Tailwind: `cyan-500`)
  - *Usage*: Tech accents, badges, gradients, data visualizations.

### Neutral Colors
- **Pure White**: `#FFFFFF`
- **Surface Light**: `#F8FAFC` (Tailwind: `slate-50`)
- **Card Background**: `#FFFFFF` with `1px solid #E2E8F0` border
- **Text Main**: `#0F172A` (Tailwind: `slate-900`)
- **Text Muted**: `#475569` (Tailwind: `slate-600`)
- **Border Subtle**: `#E2E8F0` (Tailwind: `slate-200`)

### Semantic Colors
- **Success**: `#10B981` (Green)
- **Warning**: `#F59E0B` (Amber)
- **Error**: `#EF4444` (Red)
- **Info**: `#3B82F6` (Blue)

---

## 3. Typography

### Typefaces
- **Primary / Body Font**: `Inter`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `sans-serif`
- **Display / Headings**: `Plus Jakarta Sans` or `Inter` (Font weights: 600, 700, 800)
- **Code / Monospace**: `JetBrains Mono`, `Fira Code`, `monospace`

### Type Scale (Desktop & Mobile)
| Scale | Size | Line Height | Weight | Tailwind Class |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Display** | 48px – 56px | 1.15 | 800 (Bold) | `text-4xl md:text-5xl font-extrabold` |
| **Heading 1 (H1)** | 36px – 44px | 1.2 | 700 (Bold) | `text-3xl md:text-4xl font-bold` |
| **Heading 2 (H2)** | 28px – 32px | 1.25 | 600 (SemiBold) | `text-2xl md:text-3xl font-semibold` |
| **Heading 3 (H3)** | 20px – 24px | 1.3 | 600 (SemiBold) | `text-xl md:text-2xl font-semibold` |
| **Body Large** | 18px | 1.6 | 400 (Regular) | `text-lg` |
| **Body Standard**| 16px | 1.6 | 400 (Regular) | `text-base` |
| **Small / Caption**| 14px | 1.5 | 400 / 500 | `text-sm` |

---

## 4. Spacing, Layout & Breakpoints

### Responsive Breakpoints
- **Mobile (`sm`)**: `< 640px`
- **Tablet (`md`)**: `640px - 768px`
- **Desktop (`lg`)**: `768px - 1024px`
- **Wide (`xl`)**: `1024px - 1280px`
- **Max Width Container**: `1280px` (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)

---

## 5. UI Components Guidelines

### Buttons
- **Primary Button**: Background `#1D4ED8`, text `#FFFFFF`, rounded `8px`, font weight `600`. Hover: `#1E40AF`.
- **Secondary Button**: Background `transparent`, border `1px solid #CBD5E1`, text `#0F172A`. Hover: `#F1F5F9`.
- **Ghost Button**: Text `#1D4ED8`, hover with subtle background tint.

### Cards
- Background: `#FFFFFF`
- Border: `1px solid #E2E8F0`
- Border Radius: `12px` (`rounded-xl`)
- Shadow: `0 1px 3px rgba(0,0,0,0.05)`
- Hover Transition: Subtle elevation `translate-y-[-2px]` with increased shadow `shadow-md`.

### Forms & Input Fields
- Height: `44px`
- Border Radius: `8px`
- Focus State: `ring-2 ring-blue-500 border-blue-500 outline-none`

