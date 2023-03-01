---
sidebar_position: 1
---

# useFetchDao

Get information in an individual DAO

### Usage

---

```typescript
import { useFetchDao } from "useAragon";

const daoAddressOrEns = "aragon.dao.eth";

function App() {
  const { dao, isLoading, isError } = useFetchDao(daoAddressOrEns, options);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error!</div>;
  return <pre>{JSON.Stringify(dao, null, 2)}</pre>;
}
```

### Return Types

---

```typescript
type DaoDetails = {
  address: string;
  ensDomain: string;
  metadata: DaoMetadata;
  creationDate: Date;
  plugins: InstalledPluginListItem[];
};
```

### Options

```typescript
type Options = {
  enabled?: boolean;
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
  onSettled?: (data: any, error: any) => void;
};
```
