# JavaScript Process

## Process for JavaScript

### 1. Figure out what steps we need (Algorithm)
Before writing code, first break the problem into simple logical steps.

### 2. Convert these steps into code
After creating the algorithm, convert each step into JavaScript code.

---

## Example: Subscribe Button

### Steps / Algorithm

When we click the **Subscribe** button:

1. If the button text is `"Subscribe"`:
   - Change it to `"Subscribed"`.

2. Otherwise:
   - Change it back to `"Subscribe"`.

### Logic

```text
Click button
      ↓
Is text "Subscribe"?
   ↙          ↘
 YES           NO
  ↓             ↓
"Subscribed"  "Subscribe"
