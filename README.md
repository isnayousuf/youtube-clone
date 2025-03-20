# Youtube Clone

A YouTube Clone built using React, Vite, and YouTube's Open API. This project features **infinite scrolling, category-based feeds, search functionality, a 404 page, and full responsiveness.**

---

## Features

**Home Page** – Displays 20 records initially with infinite scrolling for dynamic content loading  
**Sidebar Navigation** – Includes various categories for browsing different types of content 
**Category-Based Feed** - Updates the feed page with infinite scrolling based on the selected **Search Functionality** - Integrated into the navbar to search for videos.
**404 page** – Displays a custom 404 page for undefined routes.  
**Responsive Design** - Ensures a seamless experience across devices.

---

## Tech Stack

- **Frontend**: React 
- **State Management**: React Hooks (`useState`, `useEffect`)  
- **API**: [Youtube Data Api](https://developers.google.com/youtube/v3/docs)  
- **Package Manager**: Yarn  
- **Icons**: [Lucide React](https://lucide.dev/icons)

---

## Installation & Setup

### 1️ Clone the Repository  
```sh
git clone https://github.com/isnayousuf/youtube-clone.git
cd youtube-clone


### 2 Install Dependencies
```sh
yarn 

### 3 Run the App
```sh
yarn dev
Now open http://localhost:5173 in your browser! 

Usage

Browse trending videos on the home page.

Click on categories in the sidebar to explore specific video feeds.

Use the search bar to find specific videos.

Scroll down to load more videos dynamically.

Navigate between pages using React Router.

Environment Variables

Create a .env file in the root directory and add your YouTube API key:


## Deployment

To preview the project:

## Contributing

Contributions are welcome! Feel free to fork this repository, create a feature branch, and submit a pull request.

## License

This project is licensed under the MIT License.