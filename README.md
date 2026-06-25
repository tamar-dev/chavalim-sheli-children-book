# 📚 חוברת חבלים שלי - Chavalim Sheli Book

ספר ילדים אינטראקטיבי ודינמי עם אפשרויות התאמה, הוספת תמונות, וייצוא להדפסה.

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

## 📝 הערות פיתוח

- **JSX in-browser**: Babel Standalone משמש לקומפילציה JSX בזמן ריצה (מועיל לפיתוח, לא ל-production בקנה מידה גדול)
- **Persistence**: תמונות וערכות מאוחסנות ב-localStorage (עובד רק עבור גרסת index.html)
- **Styling**: משתנים CSS כמו `--rose`, `--sage`, `--sky` משפיעים על כל הדפים

## 📦 ייצוא ופרסום

- **Source code**: זמין ב-GitHub: [tamar-dev/chavalim-sheli-children-book](https://github.com/tamar-dev/chavalim-sheli-children-book)
- **Standalone dist**: שתף את `book.html` - לא דרוש שום התקנה או שרת

## 📄 ライセンس

כל הזכויות שמורות לפרויקט חוברת חבלים שלי

---

**שאלות?** עיין ב-[recovery-notes.md](docs/recovery-notes.md) לפרטים טכניים נוספים.
