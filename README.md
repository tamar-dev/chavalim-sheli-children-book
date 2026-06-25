# 📚 חוברת חבלים שלי - Chavalim Sheli Book

ספר ילדים אינטראקטיבי ודינמי עם אפשרויות התאמה, הוספת תמונות, וייצוא להדפסה.

## 📖 היסטוריית הפרויקט

פרויקט זה **שוחזר מקובץ בנדל יחיד** שהיה מכויל להטמעה ב-WIX (באמצעות WIX App Framework).
- ✅ הקוד המקורי נחלץ מתוך bundle wrapper
- ✅ כל התלויות המודולריות (React, Babel, Web Components) הוחזרו לתיקיות נפרדות
- ✅ מבנה הפרויקט שוחזר לקוד מקור נקי ופיתוח-ready

הגרסה הנוכחית דורכת **שתי ערכות להפצה**:
1. **גרסה פיתוח** (`index.html`) - עם עריכה מלאה ו-localStorage
2. **גרסה single-file** (`book.html`) - קובץ יחיד עם כל משאבים מוטבעים, מוכן ל-WIX ו-CDN

## ✨ מאפיינים

- 🎨 **בחירת צבעים דינמית** - שנה את צבע הרקע של כל דף עם picker צבעים
- 🖼️ **הוספת תמונות** - העלה תמונות לתא ההוספה בכל דף (נשמרות ב-localStorage)
- 🎬 **תצוגת שקופיות** - עבור בין עמודים בעזרת חצים, מקלדת, או לחיצה
- 🖨️ **הדפסה** - כפתור הדפסה לייצוא הספר לפורמט נייר
- 📱 **מסך מלא** - עבור מצב קרא בן-מלא בין המדיה
- 🔄 **צמודות מיוחדות** - ניתן להעלות וולטות ותמונות שהן נשמרות ברקע הדפדפן
- 🌐 **ייצוא Single-File** - ייצוא לקובץ HTML יחיד לשיתוף ובמתן קוד

## 🚀 התחלה מהירה

### גרסה מפותחת (עם עריכה)
1. התקן Node.js 14+
2. פתח תיקיה במסוף:
   ```bash
   npx serve .
   ```
   או עם Python:
   ```bash
   python -m http.server 8080
   ```
3. פתח [`http://localhost:3000`](http://localhost:3000) (או הפורט שהוחזר)
4. גש ל-`index.html`

### גרסה חד-קבצית (קריאה בלבד)
פתח את `book.html` ישירות בדפדפן - לא דרוש שרת!
- ✅ כל התמונות, כל הקוד, כל הקבצים מוטבעים
- ✅ אפשרות הדפסה פעילה
- ℹ️ צבעים וערכות אינם שינויים בגרסה זו (read-only)

## 📂 מבנה הפרויקט

```
book-clean-source/
├── index.html                          # גרסה מפותחת מלאה
├── book.html                           # ייצוא single-file (generated)
├── package.json                        # npm scripts
├── src/
│   ├── css/
│   │   └── main.css                   # כל הסטיילים
│   └── js/
│       ├── components/
│       │   ├── deck-stage.js          # Web component לתצוגת שקופיות
│       │   └── image-slot.js          # Web component לתא תמונה
│       └── app/
│           ├── tweaks-panel.jsx       # ממשק עריכה
│           └── book-customization.jsx # קישור ספציפי לספר
├── vendor/
│   ├── react/                         # React 17 development
│   └── babel/                         # Babel Standalone לקומפילציה JSX
├── assets/
│   ├── fonts/                         # גופנים בעברית
│   └── images/                        # לוגו וצמדות
└── tools/
    └── export-single-html.js         # סקריפט לייצוא לקובץ יחיד
```

## 💻 שימוש

### הוספת תמונה לדף
1. לחץ על **עריכה** (Customize)
2. לחץ על תא התמונה בדף
3. בחר תמונה מהמחשב שלך
4. התמונה נשמרת באופן אוטומטי ב-localStorage

### שינוי צבע דף
1. לחץ על **עריכה** (Customize)
2. בחר צבע מרשת הצבעים
3. כל הדפים עם צבע זה יתעדכנו מיד

### הדפסת הספר
1. לחץ על **הדפסה** (Print)
2. בחר הגדרות הדפסה (Hebrew RTL כברירת מחדל)
3. שמור כ-PDF או הדפס

### ייצוא גרסה יחידה
```bash
npm run export:single
```
ייצור חדש של `book.html` עם כל המשאבים מוטבעים.

## 🔧 דרישות טכניות

- Node.js 14+ (לפיתוח וייצוא)
- דפדפן מודרני עם תמיכה ב-:
  - ES6 JavaScript
  - Web Components (Custom Elements, Shadow DOM)
  - CSS Custom Properties
  - localStorage
  - Intl API (לתאריכים)

## � הדרכה למפתחים: תיקונים וייצוא

### שלב 1: הגדרת סביבה פיתוח

```bash
# קלון הריפו
git clone https://github.com/tamar-dev/chavalim-sheli-children-book.git
cd chavalim-sheli-children-book

# התקן Node.js (אם עדיין אין)
# https://nodejs.org/

# התחל שרת מקומי לפיתוח
npx serve .
# פתח http://localhost:3000 ובחר index.html
```

### שלב 2: עריכת קוד המקור

**שינוי מדפים** → `src/js/components/deck-stage.js`
- שנה את מבנה ה-`<section>` בתוך `index.html`
- או ערוך את ה-markup בתוך deck-stage component

**שינוי סטיילים** → `src/css/main.css`
```css
/* כל הצבעים כאן */
--rose: #f472b6;
--sage: #86efac;
--sky: #38bdf8;
--butter: #fde047;
```

**שינוי עריכה / ממשק** → `src/js/app/tweaks-panel.jsx`
- צבעים זמינים לבחירה
- שדות טקסט ודחיקות עתידיות

**שינוי הוצאת תמונה** → `src/js/components/image-slot.js`
- התמונות נשמרות ב-localStorage בצורת Data URI
- משתנה המיקום: `localStorage.setItem('image-slot-' + index, dataUri)`

### שלב 3: בדיקה מקומית

1. **בדוק ב-index.html** (פיתוח):
   ```bash
   npx serve .
   # http://localhost:3000 → index.html
   ```

2. **בדוק כל התכונות:**
   - ✅ לחץ "עריכה" - הפנל צריך להופיע
   - ✅ לחץ על תא תמונה - בחר ערך מהמחשב
   - ✅ בחר צבע מהרשת
   - ✅ לחץ "הדפסה" - המציא הדפסה

### שלב 4: ייצוא לקובץ HTML יחיד

**כל המשאבים מוטבעים - אין חיצוניות:**

```bash
# קדם: ודא שעדכנת את index.html
npm run export:single
```

זה ייצור:
- `book.html` - קובץ יחיד (~2MB)
- כל תמונות כ-Data URIs בתוך ה-HTML
- כל ה-CSS מוטבע
- כל JavaScript מוטבע
- כל הפונטים כ-Data URIs

**בדוק את הייצוא:**
```bash
# פתח ישירות בדפדפן - לא דרוש שרת!
# פעולות עריכה לא יהיו זמינות (read-only),
# אבל הדפסה תעבוד.
```

### שלב 5: שדר הנתונים (WIX Integration)

**אם משתמשים ב-WIX:**

1. העלה את `book.html` לקובץ חיצוני (CDN או WIX Storage)
2. צור HTML Embed בעמוד WIX
3. הטמע IFrame:
   ```html
   <iframe src="https://your-cdn/book.html" 
           width="100%" 
           height="600px"
           frameborder="0">
   </iframe>
   ```

**או בתור WIX App Element:**
- השתמש ב-WIX App Framework עם ה-book.html כ-iframe payload
- בעבר זה היה הקונפיגורציה המקורית של הפרויקט

### שלב 6: שדר שינויים ל-GitHub

```bash
# עדכן את הקוד שלך
git add .
git commit -m "תאור משינויים בעברית"

# לחץ ל-main
git push origin main

# ייצא גרסה יחידה חדשה
npm run export:single
git add book.html
git commit -m "Regenerate single-file export"
git push
```

### 📝 קבצים עם חשיבות מקסימלית

| קובץ | תפקיד | מפתחים |
|------|-------|--------|
| `src/js/components/deck-stage.js` | מנוע תצוגה שקופיות | ✏️ שנה סדר עמודים, ניווט |
| `src/css/main.css` | כל הסטיילים | ✏️ צבעים, פונט, פריסה |
| `src/js/app/book-customization.jsx` | וחידוש ממשק | ✏️ אפשרויות עריכה |
| `index.html` | markup | ✏️ דפים וטקסט |
| `tools/export-single-html.js` | בנאי ייצוא | ⚠️ שנה בזהירות |

## � הערות טכניות

- **JSX in-browser**: Babel Standalone משמש לקומפילציה JSX בזמן ריצה בהשקה (כרגע ב-index.html)
- **Persistence**: תמונות וערכות מאוחסנות ב-localStorage בגרסת פיתוח בלבד (index.html)
- **Styling**: משתנים CSS כמו `--rose`, `--sage`, `--sky` משפיעים על כל הדפים בשתיי הגרסות
- **Single-file export**: הסקריפט `tools/export-single-html.js` יוצר קובץ לא תלוי (אף תלויות חיצוניות)
- **Recovery artifacts**: קראו [docs/recovery-notes.md](docs/recovery-notes.md) לפרטי שחזור הבנדל

## �📦 ייצוא ופרסום

- **Source code**: זמין ב-GitHub: [tamar-dev/chavalim-sheli-children-book](https://github.com/tamar-dev/chavalim-sheli-children-book)
- **Standalone dist**: שתף את `book.html` - לא דרוש שום התקנה או שרת

## 📄 ライセンس

כל הזכויות שמורות לפרויקט חוברת חבלים שלי

---

**שאלות?** עיין ב-[recovery-notes.md](docs/recovery-notes.md) לפרטים טכניים נוספים.
