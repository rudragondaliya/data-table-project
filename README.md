
**📊 Data Table Management System**

A sleek and dynamic React-based application for managing product data using JSON Server. This project supports full CRUD operations (Create, Read, Update, Delete) and features modern UI styling with Bootstrap and Kaiadmin.

**🚀 Live Demo**
🔗 [https://data-table-project-ten.vercel.app/](https://data-table-project-ten.vercel.app/)

---

**🛠 Features**

* 📝 Add, update, and delete product records
* 🔍 Search and filter functionality
* 📦 Manage product details (name, price, stock, image, description, and warehouse)
* 🖼 Image upload with preview
* 💬 Toast notifications for user actions
* 📊 Line chart component (extendable)
* 🎨 Styled with Bootstrap and Kaiadmin Admin Template
* ⚙ JSON Server backend for persistence

---

**📂 Project Structure**

```
src/
├── assets/
│   └── css/          --> Bootstrap and Kaiadmin styles
├── components/
│   └── Aside.jsx     --> Sidebar navigation
├── pages/
│   ├── Home.jsx      --> Dashboard/landing view with data summary
│   ├── Form.jsx      --> Product form (add/edit)
│   └── Table.jsx     --> Product data table view
├── App.jsx           --> Main app logic and routing
└── index.js          --> React DOM rendering
```

---

**⚙ Technologies Used**

React
React Router DOM
Axios
React Toastify
Bootstrap 5
Kaiadmin CSS Template
JSON Server (for local API)

---

**🧪 Setup Instructions**

1. Clone the Repo:

```
git clone https://github.com/yourusername/data-table-project.git
cd data-table-project
```

2. Install Dependencies:

```
npm install
```

3. Start JSON Server:

If not installed:

```
npm install -g json-server
```

Start server:

```
json-server --watch db.json --port 3000
```

Example `db.json`:

```json
{
  "products": []
}
```

4. Run the React App:

```
npm run dev
```

Open `http://localhost:5173` (or the port shown)

---

**🧑‍💻 Author**

Rudra Gondaliya
Email: [rudragondaliya@email.com](mailto:gondaliyarudra2516@gmail.com)

---

**⭐️ Show your support**

If you like this project, please star it on GitHub!
GitHub: [https://github.com/yourusername/data-table-project](https://github.com/rudragondaliya/data-table-project)

---

**📃 License**

This project is licensed under the MIT License.

---

Let me know if you'd like this exported as a `README.md` file or want to customize it for deployment to GitHub.
