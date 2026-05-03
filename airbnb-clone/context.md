# Airbnb Clone Context

## Project Overview

This project is a mobile-first Airbnb-style clone built with Next.js 16, TypeScript, Tailwind CSS, and the App Router.

The goal is to recreate three main Airbnb views:

1. Home page
2. Catalog/Search results page
3. Room detail page

The app is designed for a 375px mobile viewport first, then adjusted for desktop screens at 768px and above.

The project uses small, reusable React components. Each component has one responsibility. Internal navigation uses Next.js `<Link>` so pages change without a full reload.

## User Description

The user is someone looking for a place to stay, experience, or service. They may browse popular homes, search for a specific location like Orlando, compare listings by price and rating, and open a listing to view more details before booking.

The user wants to quickly find a place that matches their location, budget, guest count, and travel needs.

## Page 1: Home Page `/`

The Home page is the main browsing page. It introduces users to Airbnb-style categories and listing sections.

### What the Home page contains

- Top search bar
- Category tabs
- Horizontal listing sections
- Listing cards
- Favorite/heart buttons
- Bottom mobile navigation
- Footer/inspiration links

### Main components

- Navbar
- SearchBar
- CategoryFilter
- ListingSection
- ListingCard
- ListingGrid
- BottomNav
- Footer
- LoadingState

### Home Page Vision Prompting Notes

The Home page screenshots show mobile Airbnb Explore pages for Homes, Experiences, and Services.

The top area has a pill-shaped search bar with the text “Start your search.” Under it are category tabs such as Homes, Experiences, and Services. Each tab has an icon and label. Some include a small “NEW” badge. The active tab has an underline.

The content is divided into sections like “Popular homes in Orlando,” “Featured hotels in Miami,” “Stay in Miami,” “Popular experiences nearby,” “Homes in Kissimmee,” “Experiences in Miami,” “Photography,” “Massage,” and “Prepared meals.”

Listings appear as rounded image cards in horizontal rows. Each card includes an image, a badge such as “Guest favorite,” “Popular,” “Original,” or “Superhost,” a heart icon, title, price, and star rating.

The bottom of the page includes a fixed mobile navigation with Explore, Wishlists, and Log in.

## Page 2: Catalog/Search Results Page `/catalog`

The Catalog page shows search results after a user searches for a location, such as Orlando.

### What the Catalog page contains

- Search bar or search header
- Map preview area
- Listing results
- Price badges on the map
- Listing cards
- Sort control
- Loading state
- Mobile-first vertical layout

### Main components

- ResultsHeader
- ListingCard
- ListingGrid
- MapPlaceholder
- LoadingState
- BackLink

### Catalog Page Vision Prompting Notes

The Catalog/Search results screenshot shows Airbnb search results for Orlando.

At the top, there is a compact search header. A map appears near the top of the mobile page with price markers displayed over different locations. Under the map, the page shows a list of available homes.

Each listing result includes a large rounded image, a heart icon, title, location or description, price, rating, and short details. Some cards show real photos while others show gray loading placeholders, which supports using a loading state in the project.

For this assignment, the map can be recreated as a styled gray placeholder box with the text “Map.” On mobile, the map should appear above or below the cards. On desktop, the map should appear beside the listing results.

The Catalog page should reuse the same ListingCard component from the Home page. It should also include a sort control for ascending and descending price sorting.

## Page 3: Room Detail Page `/rooms/[id]`

The Room Detail page shows details for one selected listing.

### What the Room Detail page contains

- Photo gallery
- Back button
- Save/share icons
- Listing title
- Rating
- Review count
- Location
- Booking card
- Guest counter
- Sleeping arrangement section
- Amenities section
- Calendar/date section
- Host information
- Things to know
- Footer

### Main components

- PhotoGallery
- ListingHeader
- HostInfo
- AmenitiesGrid
- BookingCard
- BackLink
- LoadingState
- Footer

### Room Detail Page Vision Prompting Notes

The Room Detail screenshot shows one Airbnb listing page.

At the top, there is a large photo gallery image with mobile icons for navigation, saving, and sharing. The listing title appears below the image. The listing includes rating, reviews, location, and short description details.

The page includes a booking section with price per night and a strong call-to-action button. In the assignment version, this will become the BookingCard component with a guest counter.

Further down, the page has sections for where the user will sleep, what the place offers, reviews, location map, host information, and things to know.

The host section includes an avatar, host name, rating, years hosting, and host details. This maps to the HostInfo component.

The amenities section shows icons and labels for features like Wi-Fi, TV, kitchen, parking, or similar amenities. This maps to the AmenitiesGrid component.

The page design is long and scrollable on mobile. The project should recreate the main required sections, not every single Airbnb footer link.

## Required Data Types

### Listing

A listing should include:

- id
- title
- location
- price
- rating
- image
- category
- badge
- coordinates, optional for map-related data

### Room

A room should include:

- id
- title
- location
- price
- rating
- reviewCount
- hostName
- yearsHosting
- amenities
- photos
- maxGuests

## Interaction Requirements

The app should use useState for:

- Search filtering
- Active category
- Sort order
- Photo gallery index
- Guest counter

The app should use useEffect for:

- Loading Home page listing data
- Loading Room Detail page data
- Optional loading behavior on Catalog page

The app should use setTimeout to simulate data fetching.

## Navigation Requirements

The app should have these routes:

- `/`
- `/catalog`
- `/rooms/[id]`

Clicking a listing card on the Home page or Catalog page should navigate to the matching Room Detail page.

All internal navigation must use Next.js `<Link>`.

Do not use plain internal anchor tags.

## Component List

The project should include these components:

- `Navbar.tsx`
- `SearchBar.tsx`
- `CategoryFilter.tsx`
- `ListingSection.tsx`
- `ListingCard.tsx`
- `ListingGrid.tsx`
- `ResultsHeader.tsx`
- `MapPlaceholder.tsx`
- `PhotoGallery.tsx`
- `ListingHeader.tsx`
- `HostInfo.tsx`
- `AmenitiesGrid.tsx`
- `BookingCard.tsx`
- `LoadingState.tsx`
- `BackLink.tsx`
- `BottomNav.tsx`
- `Footer.tsx`

## Build Priority

1. Scaffold the Next.js project.
2. Create `context.md`.
3. Create TypeScript interfaces.
4. Create mock listing and room data.
5. Build reusable components.
6. Build the Home page.
7. Build the Catalog page.
8. Build the Room Detail page.
9. Test all routes.
10. Check the assignment requirements before submission.

## Screenshot-Based Component Specifications

### Home Page Component Spec

Navbar
- Props: searchValue, onSearchChange
- Layout: sticky top section above category filter
- Responsibility: shows logo, search bar, and user menu controls

SearchBar
- Props: searchValue, onSearchChange
- Layout: inside Navbar
- Responsibility: tracks user search input and triggers listing filtering

CategoryFilter
- Props: activeCategory, onCategoryChange
- Layout: horizontal row below Navbar
- Responsibility: displays category icons/labels and highlights selected category

ListingSection
- Props: title, listings
- Layout: stacked content section with horizontal card row
- Responsibility: groups listings under a section title

ListingCard
- Props: listing
- Layout: inside ListingSection and ListingGrid
- Responsibility: displays listing image placeholder, badge, title, location, price, rating, and Link to room detail page

ListingGrid
- Props: listings
- Layout: responsive grid, one column on mobile and multiple columns on desktop
- Responsibility: displays listing cards in grid format

BottomNav
- Props: none
- Layout: fixed bottom mobile navigation
- Responsibility: shows Explore, Wishlists, and Log in actions

Footer
- Props: none
- Layout: bottom of page
- Responsibility: displays inspiration and footer links

### Catalog Page Component Spec

ResultsHeader
- Props: resultCount, sortOrder, onSortChange
- Layout: top of catalog page above results
- Responsibility: shows result count and price sort dropdown

ListingGrid
- Props: listings
- Layout: left/main column on desktop, first section on mobile
- Responsibility: displays sorted listing cards

ListingCard
- Props: listing
- Layout: reused inside ListingGrid
- Responsibility: shows listing summary and links to /rooms/[id]

MapPlaceholder
- Props: none
- Layout: below cards on mobile, right side on desktop
- Responsibility: represents the map area with a styled gray placeholder

BottomNav
- Props: none
- Layout: fixed bottom mobile navigation
- Responsibility: provides mobile navigation actions

### Room Detail Page Component Spec

BackLink
- Props: none
- Layout: top of room detail page
- Responsibility: returns the user to /catalog using Next.js Link

PhotoGallery
- Props: photos, currentIndex, onPrevious, onNext
- Layout: top visual section below BackLink
- Responsibility: displays current photo placeholder and lets user cycle photos

ListingHeader
- Props: title, rating, reviewCount, location
- Layout: main content column under gallery
- Responsibility: displays title, rating, reviews, and location

HostInfo
- Props: hostName, yearsHosting
- Layout: below ListingHeader
- Responsibility: displays avatar placeholder, host name, and years hosting

AmenitiesGrid
- Props: amenities
- Layout: below HostInfo
- Responsibility: displays amenity labels in a grid

BookingCard
- Props: price, guests, maxGuests, onDecreaseGuests, onIncreaseGuests
- Layout: below main content on mobile, right column on desktop
- Responsibility: displays price, guest counter, and reserve CTA

LoadingState
- Props: none
- Layout: shown while simulated data is loading
- Responsibility: communicates that listings or room data are loading