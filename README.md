# 💸 React Native Wallet App

This is a React Native application that displays a user's wallet balance along with a list of recent transactions. It provides filtering by transaction type, pull-to-refresh functionality, card management, and a clean, user-friendly interface.

---

## 🚀 Setup and Run Instructions

### ✅ Prerequisites

- **Node.js**
- **Yarn** or **npm**  
- **Expo CLI**  
- **Android Studio** for emulator
- **Git**

---

### 📦 Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/chitgo/MyWalletApp.git

cd MyWalletApp
```

#### 2. Install Dependencies

```bash
yarn install
# or
npm install
```

#### 3. Set Up Tailwind CSS

This project uses `react-native-tailwindcss` for styling.

---

### ▶️ Run the App

#### For Android:

```bash
npm run android


---

## 📚 Dependencies

- `@react-navigation/native` – Navigation library
- `@react-navigation/bottom-tabs` – Bottom tab navigation
- `react-native-vector-icons` – Icon support
- `react-native-safe-area-context` – Safe area handling

Make sure all dependencies are installed via:

```bash
npm install
```

---

## 🧠 Architecture & Approach

### 🧩 Component Structure

The app is built with reusable, modular components:

- `AppHeader`
- `BalanceCard`
- `QuickActions`
- `SearchInput`
- `TransactionFilterDropdown`
- `TransactionItem`

### 🧭 Navigation

- Uses `@react-navigation/bottom-tabs`
- Tabs: **Home**, **Transactions**, **Cards**, **More/Profile**

### 🧠 State Management

- Lightweight using React Hooks: `useState`, `useEffect`

### 🌐 API Handling

- Simulated via a mock API in `src/api/mockApi.ts`
- Includes simulated delay with `setTimeout`
- Provides mock data for users, cards, and transactions

---

## ✨ Features

- 💰 **Wallet Balance** with formatted currency and last updated time
- 📜 **Transaction List**:
    - Recent (HomeScreen) & full (TransactionsScreen)
    - Includes: amount, date, type, description, and category
- 🔍 **Filtering** by transaction type: *All / Credit / Debit*
- 🔄 **Pull-to-Refresh** with `RefreshControl`
- 🧾 **Search** transactions by description
- 💳 **Card Management UI** (CardsScreen)
- ⚡ **Quick Actions UI** (non-functional, visual only)
- 🎞️ **Animated Transaction Items** for smooth transitions

---

## 🎨 Styling

- Styled using `react-native-tailwindcss`
- Responsive layouts and dynamic coloring for transaction types (credit/debit)

---

## 🔎 Assumptions

- Single user with pre-defined balance & transaction data from mock API
- Tailwind CSS is set up correctly
- Icons are available and configured
- Targets modern iOS & Android devices

---

## ⚠️ Limitations

- 🛠️ Minimal error handling (empty `catch` blocks)
- 🧪 No unit tests included
- 🧪 Mock API doesn't simulate real network failures
- ♿ Accessibility support is basic

---

## 🚧 Future Improvements

- Add proper error handling with user-friendly messages
- Implement unit tests (Jest, React Native Testing Library)
- Improve accessibility (screen reader support, ARIA labels)
- Add infinite scroll or pagination to transactions

---

## 📌 Notes

- Built with a focus on **clean code**, **modularity**, and **clarity**
- Search and Quick Actions were added for extra UX demonstration
- Code is structured to be **easily extensible** for real backend integration

---

## 📬 Contact

For any questions or clarifications, feel free to reach out at:

**📧 kostas.chitos@gmail.com**



