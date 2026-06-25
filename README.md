# 📚 חוברת חבלים שלי - Chavalim Sheli Book

ספר ילדים אינטראקטיבי ודינמי עם אפשרויות התאמה אישית, הוספת תמונות ודפסה.

## 📖 היסטוריית הפרויקט

פרויקט זה **שוחזר מקובץ בנדל יחיד** שתוכנן להטמעה בפלטפורמת WIX (דרך מסגרת יישומי WIX).
- ✅ קוד היישום הוצא מתוך מעטפת ההפצה
- ✅ כל התלויות (React, Babel, Web Components) הופרדו לתיקיות ייעודיות
- ✅ קוד המקור שוחזר למבנה קריא ופתוח לפיתוח

הגרסה הנוכחית מספקת **שתי ערכות הפצה**:
1. **גרסה פיתוח** (`index.html`) - יכולת עריכה מלאה עם שמירה מקומית ב-localStorage
2. **גרסה חד-קבצית** (`book.html`) - קובץ HTML יחיד עם כל המשאבים מוטבעים, מוכן ל-WIX וקבוצות הזנה

## ✨ מאפיינים

- 🎨 **בחירת צבעים דינמית** - שנה צבע רקע עבור כל דף באמצעות בורר צבעים
- 🖼️ **הוספת תמונות** - העלה תמונות לשדה יעודי בכל דף (נשמרות בשטח אחסון מקומי)
- 🎬 **הצגה במצב שקופיות** - עבור בין עמודים בעזרת חצים, מקלדת או קליק
- 🖨️ **דפסה** - ייצוא הספר לדפוס בפורמט קומפטיבלי
- 📱 **הקרנה במסך מלא** - מצב קריאה בן-מלא עם ממשק מינימלי
- 🔄 **שמירה מיידית** - תמונות וערכות צבעים נשמרות באופן אוטומטי בדפדפן
- 🌐 **ייצוא לקובץ יחיד** - חבור לקובץ HTML עצמאי לשיתוף וביטחון

## 🚀 התחלה מהירה

### גרסה מפותחת (עם יכולות עריכה)
1. התקן Node.js גרסה 14 ומעלה
2. פתח טרמינל בתיקיית הפרויקט:
   ```bash
   npx serve .
   ```
   או עם Python:
   ```bash
   python -m http.server 8080
   ```
3. בדפדפן, נווט ל-`http://localhost:3000` (או לפורט שהוחזר)
4. פתח את קובץ `index.html`

### גרסה חד-קבצית (קריאה בלבד)
פתח את `book.html` ישירות בדפדפן - אין צורך בשרת!
- ✅ כל המשאבים (תמונות, קוד, גופנים) מוטבעים בתוך הקובץ
- ✅ יכולת דפסה פעילה וחוקית
- ℹ️ תכונות עריכה אינן זמינות בגרסה זו (קריאה בלבד)

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

## 🔧 הדרכה למפתחים: עריכה וייצוא

### שלב 1: הגדרת סביבה פיתוח

```bash
# שכפול מאגר הקוד
git clone https://github.com/tamar-dev/chavalim-sheli-children-book.git
cd chavalim-sheli-children-book

# התקנת Node.js (אם טרם מותקן)
# https://nodejs.org/

# הפעלת שרת פיתוח מקומי
npx serve .
# בדפדפן: פתח את http://localhost:3000 ובחר את index.html
```

### שלב 2: עריכת קוד המקור

**שינוי המדפים (עמודים)** → `src/js/components/deck-stage.js`
- ערוך את מבנה `<section>` בתוך `index.html`
- או שנה את הגדרות deck-stage component

**שינוי סטילים וערכות צבע** → `src/css/main.css`
```css
/* הגדרות ערכות הצבע */
--rose: #f472b6;
--sage: #86efac;
--sky: #38bdf8;
--butter: #fde047;
```

**שינוי ממשק העריכה** → `src/js/app/tweaks-panel.jsx`
- ערכות צבע זמינות לבחירה
- שדות קלט טקסט לתכונות עתידיות

**שינוי הטמעת תמונות** → `src/js/components/image-slot.js`
- התמונות נשמרות בשטח אחסון מקומי כ-URI בתצורת Data
- מיקום שמירה: `localStorage.setItem('image-slot-' + index, dataUri)`

### שלב 3: בדיקה מקומית

1. **בדיקה בגרסת הפיתוח**:
   ```bash
   npx serve .
   # http://localhost:3000 → index.html
   ```

2. **אימות כל התכונות:**
   - ✅ לחץ על כפתור "עריכה" - הפנל צריך להופיע
   - ✅ לחץ על שדה תמונה - בחר ערך מהמחשב
   - ✅ בחר צבע מרשת הצבעים
   - ✅ לחץ על כפתור "דפסה" - וודא פתיחת דיאלוג ההדפסה

### שלב 4: ייצוא לקובץ HTML יחיד

**כל המשאבים יוטבעו - ללא תלויות חיצוניות:**

```bash
# ודא שעדכנת את index.html לסיכום
npm run export:single
```

הפקה:
- `book.html` - קובץ HTML יחיד (~2MB)
- כל תמונות כ-URI בתצורת Data בתוך ה-HTML
- כל קוד CSS מוטבע
- כל קוד JavaScript מוטבע
- כל הגופנים כ-URI בתצורת Data

**בדיקת הייצוא:**
```bash
# פתח ישירות בדפדפן - אין צורך בשרת!
# תכונות עריכה לא תהיינה זמינות (קריאה בלבד),
# אך דפסה תעבוד כמו צפוי.
```

### שלב 5: הטמעה בפלטפורמת WIX

**להטמעה ב-WIX:**

1. העלה את `book.html` לאחסון חיצוני (קבוצת הזנה CDN או WIX)
2. צור אלמנט HTML Embed בעמוד WIX
3. הטמע אלמנט iframe:
   ```html
   <iframe src="https://your-cdn/book.html" 
           width="100%" 
           height="600px"
           frameborder="0">
   </iframe>
   ```

**אפשרות חלופית עם WIX App Framework:**
- השתמש במסגרת יישומי WIX עם book.html בתור payload iframe
- זו הייתה התצורה המקורית של הפרויקט

### שלב 6: שדירת שינויים ל-GitHub

```bash
# עדכן את קוד המקור
git add .
git commit -m "תיאור השינויים בעברית"

# דחוף ל-ענף main
git push origin main

# ייצא גרסה חד-קבצית מעודכנת
npm run export:single
git add book.html
git commit -m "Regenerate single-file export"
git push
```

### � קבצי ליבה בעלות חשיבות

| קובץ | תפקיד | הערות עריכה |
|------|-------|------------|
| `src/js/components/deck-stage.js` | מנוע הצגת שקופיות | ✏️ שנה סדר דפים, אפשרויות ניווט |
| `src/css/main.css` | כל הסטילים ועיצוב | ✏️ צבעים, גופנים, פריסה |
| `src/js/app/book-customization.jsx` | ממשק עריכה ספציפי | ✏️ אפשרויות התאמה אישית |
| `index.html` | Markup ותוכן דפים | ✏️ הוספת דפים וטקסט |
| `tools/export-single-html.js` | בנאי ייצוא | ⚠️ שנה בזהירות רבה |

## � הערות טכניות

- **JSX in-browser**: Babel Standalone משמש לקומפילציה JSX בזמן ריצה בהשקה (כרגע ב-index.html)
- **Persistence**: תמונות וערכות מאוחסנות ב-localStorage בגרסת פיתוח בלבד (index.html)
- **Styling**: משתנים CSS כמו `--rose`, `--sage`, `--sky` משפיעים על כל הדפים בשתיי הגרסות
- **Single-file export**: הסקריפט `tools/export-single-html.js` יוצר קובץ לא תלוי (אף תלויות חיצוניות)
- **Recovery artifacts**: קראו [docs/recovery-notes.md](docs/recovery-notes.md) לפרטי שחזור הבנדל

## �📦 ייצוא ופרסום

- **Source code**: זמין ב-GitHub: [tamar-dev/chavalim-sheli-children-book](https://github.com/tamar-dev/chavalim-sheli-children-book)
- **Standalone dist**: שתף את `book.html` - לא דרוש שום התקנה או שרת

## 📄 רישיון

כל הזכויות שמורות לפרויקט חוברת חבלים שלי

---

**שאלות?** עיין ב-[recovery-notes.md](docs/recovery-notes.md) לפרטים טכניים נוספים.
