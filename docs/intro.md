---
sidebar_position: 1
---

# Getting Started

---

useAragon hooks is a library of React hooks that make it easy to integrate your Aragon OSx DAO directly into your dApps UI. Using the useAragon library, developers can easily create highly performant and responsive web applications that interact with Aragon DAOs, without having to worry about the intricacies of interacting with the contracts.

## Quick Setup

```bash
#yarn
yarn add useAragon

#pnpm
pnpm add useAragon

#npm
npm add useAragon
```

## Basic Configuration

```typescript
function App() {
  return (
    <WagmiConfig client={client}>
      <AragonProvider>
        <DApp />
      </AragonProvider>
    </WagmiConfig>
  );
}
```
