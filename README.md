# Youtube Clone

A YouTube Clone built using React, Vite, and YouTube's Open API. This project features **infinite scrolling, category-based feeds, search functionality, a 404 page, and full responsiveness.**

---

## Features

- **Home Page** – Displays 20 records initially with infinite scrolling for dynamic content loading  
- **Sidebar Navigation** – Includes various categories for browsing different types of content  
- **Category-Based Feed** – Updates the feed page with infinite scrolling based on the selected category  
- **Search Functionality** – Integrated into the navbar to search for videos  
- **404 Page** – Displays a custom 404 page for undefined routes  
- **Responsive Design** – Ensures a seamless experience across devices  

---

## Tech Stack

- **Frontend**: React  
- **State Management**: React Hooks (`useState`, `useEffect`)  
- **API**: [YouTube Data API](https://developers.google.com/youtube/v3/docs)  
- **Package Manager**: Yarn  
- **Icons**: [Lucide React](https://lucide.dev/icons)  

---

## Installation & Setup

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/isnayousuf/youtube-clone.git
cd youtube-clone
```

### 2️⃣ Install Dependencies  
```sh
yarn
```

### 3️⃣ Run the App  
```sh
yarn dev
```
Now open [http://localhost:5173](http://localhost:5173) in your browser!

---

## Usage

- Browse trending videos on the home page.  
- Click on categories in the sidebar to explore specific video feeds.  
- Use the search bar to find specific videos.  
- Scroll down to load more videos dynamically.  
- Navigate between pages using React Router.  

---

## Environment Variables  

Create a `.env` file in the root directory and add your YouTube API key:

```env
VITE_YOUTUBE_API_KEY=your_api_key_here
```

---

## Deployment  

To preview the project: [open the live link](http://localhost:5173) 

```sh
yarn build
yarn preview
```

---

## Contributing  

Contributions are welcome! Feel free to fork this repository, create a feature branch, and submit a pull request.

---

## License  

This project is licensed under the MIT License.
