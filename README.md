# [Live link link](https://level2-assignment2-git.vercel.app/)

# [Github repo link](https://github.com/alamindjp/level2-assignment2)

# If you want to run the server locally, follow the steps.

### 1. Open your cmd and copy github repo link and clone it.

```typescript
https://github.com/alamindjp/level2-assignment2.git
```

### 2. Now run npm install.

```typescript
npm install
```

### 3. Now Create a .env file. And configure .env file

#### example:

```typescript
PORT=5000
DB_URL= // Paste your mongodb uri
```

### 4. Now run npm build.

```typescript
npm run build
```

### 5. Now run npm build.

```typescript
npm run start
```

## Or

```typescript
npm run start:dev
```

</br>
</br>
</br>

# routes

### \* /api/products </br>

method:[ post, get, put, delete ]

### \* /api/products/:productId </br>

method:[ get, put, delete ]

### \* /api/products?searchTerm=iphone </br>

method:[ get ]

### \* /api/products </br>

method:[ post, get ]

### \* /api/orders?email=level2@programming-hero.com </br>

method:[ post, get ]
</br></br></br>

# Bonuses part

### \* Error Handling:

### \* Inventory Update: When creating new order (/api/orders ) ,reduce the quantity of the ordered product in inventory and update the inStock property.

### \* Validation with Zod: Use Zod to validate incoming data for product and order creation and updating operations.
