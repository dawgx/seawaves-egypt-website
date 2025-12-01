# Activity Image Numbering System

Use this numbering system to name images for activity cards.

## Format: `activity-XX.jpg` or `activity-XX.png`

---

## 1. DIVING (01-XX)

- **01** - Full Day Trips (2 dives, €48)
- **02** - Half Day Trips (1 dive, €35)
- **03** - Sunset Diving (€35)
- **04** - Night Diving (€35)
- **05** - Wreck Diving (€220)

### Diving Courses (06-10)
- **06** - Scuba Diving Course (€205)
- **07** - Open Water Diver (€305)
- **08** - Advanced Open Water (€225)
- **09** - Rescue Diver (€350)
- **10** - Divemaster (€785)

### Intro Dives (11-12)
- **11** - Pool Intro (€28)
- **12** - Shore Intro (€39)

---

## 2. BOAT TRIPS (13-XX)

- **13** - Private Trips (Contact Us)
- **14** - Fishing (Contact Us)
- **15** - Sunset Trip (€30)
- **16** - Snorkeling (€30)
- **17** - Glass Boat (€25)

---

## 3. WATER SPORTS (18-XX)

### Water Sports Activities (18-20)
- **18** - Parasailing (€35 single / €60 double)
- **19** - Banana Boat (€15)
- **20** - Sofa Boat (€15)

### Speed Boats (21)
- **21** - Speed Boats (€60 per person, minimum 3 people)

---

## 4. DOLPHIN TRIPS (22-XX)

- **22** - Dolphin House (€45, regular)
- **23** - VIP Dolphin House (€60, early start)

---

## 5. SPEED BOATS (24)

- **24** - Speed Boats (€60 per person, minimum 3 people)
  - Note: This is the standalone Speed Boats section

---

## 6. ISLAND TOURS (25-XX)

- **25** - Orange Bay Island (€40, private with shade)
- **26** - VIP Orange Bay Island (€50, 7:00 start)
- **27** - Giftun Island (€35, without shade)
- **28** - Super Giftun Island (€40, with water sports)

---

## Summary by Category

| Category | Number Range | Total Activities |
|----------|--------------|------------------|
| Diving (programs + courses + intro) | 01-12 | 12 activities |
| Boat Trips | 13-17 | 5 activities |
| Water Sports & Speed Boats | 18-21 | 4 activities |
| Dolphin Trips | 22-23 | 2 activities |
| Speed Boats (standalone) | 24 | 1 activity |
| Island Tours | 25-28 | 4 activities |
| **TOTAL** | **01-28** | **28 activities** |

---

## File Naming Examples

```
activity-01.jpg  → Full Day Trips (Diving)
activity-02.jpg  → Half Day Trips (Diving)
activity-13.jpg  → Private Trips (Boat Trips)
activity-18.jpg  → Parasailing (Water Sports)
activity-21.jpg  → Speed Boats (Water Sports section)
activity-22.jpg  → Dolphin House
activity-24.jpg  → Speed Boats (standalone section)
activity-25.jpg  → Orange Bay Island
```

---

## Notes

1. **Speed Boats appears twice**:
   - Activity 21: In Water Sports section
   - Activity 24: As standalone Speed Boats section

2. **Contact-only activities** (no fixed price):
   - Activity 13: Private Trips
   - Activity 14: Fishing

3. All images should be placed in appropriate folders:
   - Main activity cards: Use in `public/images/` or relevant category folders
   - Sub-activity images: Use in component-specific rendering

---

## Alternative: Category-Based Numbering

If you prefer category prefixes:

```
diving-01.jpg     → Full Day Trips
diving-02.jpg     → Half Day Trips
boat-01.jpg       → Private Trips
boat-02.jpg       → Fishing
watersports-01.jpg → Parasailing
dolphin-01.jpg    → Dolphin House
island-01.jpg     → Orange Bay Island
```

Choose the numbering system that works best for your workflow!


