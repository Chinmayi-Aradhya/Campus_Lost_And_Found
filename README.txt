# 📱 Campus Lost & Found App

The **Campus Lost & Found App** is an Android application designed to help students and staff report, search, and claim lost items within a campus environment. It provides a simple and intuitive interface to bridge the gap between people who **find items** and those who **lose items**.

---

## ✨ Features
- 🔑 **Report Lost Items** – Users can log details (title, description, image) of their lost belongings.
- 📦 **Report Found Items** – Users can upload information about items they’ve found on campus.
- 🔍 **Browse Items** – View all reported items (lost/found) in a categorized list.
- 👤 **User Authentication** – Basic login system for secure access.
- 🖼️ **Image Uploads** – Icons and sample images for common lost items (wallet, keys, books, umbrella, etc.).
- ⚡ **Hybrid UI** – Mix of **native Android Java** and **HTML/JS assets** for a smooth user experience.
- 🎨 **Attractive UI** – Includes splash screen, animations, and material-style layouts.

---

## 🛠️ Tech Stack
- **Language**: Java (Android)
- **Framework**: Android SDK
- **Build Tool**: Gradle (Kotlin DSL)
- **UI**: XML layouts + WebView (HTML/CSS/JS assets in `/assets/www`)
- **Database**: (Extendable – SQLite / Firebase can be integrated)
- **Assets**: Icons and images for real-world items

---

## 📂 Project Structure
CampusLostFoundApp/
│── app/
│ ├── src/
│ │ ├── main/
│ │ │ ├── java/com/example/campuslostfoundapp/
│ │ │ │ ├── MainActivity.java
│ │ │ │ ├── SplashActivity.java
│ │ │ ├── res/ # Layouts, Drawables, Animations
│ │ │ ├── assets/www/ # Embedded web pages (HTML, CSS, JS)
│ │ │ │ ├── index.html
│ │ │ │ ├── login.html
│ │ │ │ ├── browse_items.html
│ │ │ │ ├── report_item.html
│ │ │ │ └── my_items.html
│ │ └── AndroidManifest.xml
│ ├── build.gradle.kts
│ ├── proguard-rules.pro
├── build.gradle.kts
├── settings.gradle.kts
└── gradlew / gradlew.bat


---

## ⚙️ Installation & Setup
1. Clone the repository
   ```bash
   git clone https://github.com/your-username/CampusLostFoundApp.git
   cd CampusLostFoundApp

2. Open in Android Studio
    • File > Open > Select CampusLostFoundApp/
    • Let Gradle sync automatically.
      
      3. Set up Android SDK
    • Ensure SDK 24+ (Android 7.0 or above) is installed.
    • Configure Emulator or connect a physical device.
      4. Build the project
    • ./gradlew build

▶️ Running the App
    • Run via Android Studio → Click ▶️ “Run App”.
    • Or build APK:
./gradlew assembleDebug

APK will be located in app/build/outputs/apk/debug/.

📱 Usage Guide
    1. Launch the App → Splash screen appears.
    2. Login / Register → Secure access to report items.
    3. Report Lost Item → Fill details + upload image.
    4. Report Found Item → Enter details of found belongings.
    5. Browse Items → Search and filter through reported items.
    6. Claim Items → Contact/report to rightful owner via the system.

🤝 Contribution Guidelines
    • Fork the repo
    • Create a new branch (feature/new-feature)
    • Commit changes (git commit -m "Added new feature")
    • Push to branch
    • Open a Pull Request

