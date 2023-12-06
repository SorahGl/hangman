const wordList = ["about", "search", "other", "which", "their", "there", "contact", "business", "online", "first", "would", "services", "these", "click", "service", "price", "people", "state", "email", "health", "world", "products", "music", "should", "product", "system", "policy", "number", "please", "support", "message", "after", "software", "video", "where", "rights", "public", "books", "school", "through", "links", "review", "years", "order", "privacy", "items", "company", "group", "under", "general", "research", "january", "reviews", "program", "games", "could", "great", "united", "hotel", "center", "store", "travel", "comments", "report", "member", "details", "terms", "before", "hotels", "right", "because", "local", "those", "using", "results", "office", "national", "design", "posted", "internet", "address", "within", "states", "phone", "shipping", "reserved", "subject", "between", "forum", "family", "based", "black", "check", "special", "prices", "website", "index", "being", "women", "today", "south", "project", "pages", "version", "section", "found", "sports", "house", "related", "security", "county", "american", "photo", "members", "power", "while", "network", "computer", "systems", "three", "total", "place", "download", "without", "access", "think", "north", "current", "posts", "media", "control", "water", "history", "pictures", "personal", "since", "guide", "board", "location", "change", "white", "small", "rating", "children", "during", "return", "students", "shopping", "account", "times", "sites", "level", "digital", "profile", "previous", "events", "hours", "image", "title", "another", "shall", "property", "class", "still", "money", "quality", "every", "listing", "content", "country", "private", "little", "visit", "tools", "reply", "customer", "december", "compare", "movies", "include", "college", "value", "article", "provide", "source", "author", "press", "learn", "around", "print", "course", "canada", "process", "stock", "training", "credit", "point", "science", "advanced", "sales", "english", "estate", "select", "windows", "photos", "thread", "category", "large", "gallery", "table", "register", "however", "october", "november", "market", "library", "really", "action", "start", "series", "model", "features", "industry", "human", "provided", "required", "second", "movie", "forums", "march", "better", "yahoo", "going", "medical", "friend", "server", "study", "staff", "articles", "feedback", "again", "looking", "issues", "april", "never", "users", "complete", "street", "topic", "comment", "things", "working", "against", "standard", "person", "below", "mobile", "party", "payment", "login", "student", "programs", "offers", "legal", "above", "recent", "stores", "problem", "memory", "social", "august", "quote", "language", "story", "options", "rates", "create", "young", "america", "field", "paper", "single", "example", "girls", "password", "latest", "question", "changes", "night", "texas", "poker", "status", "browse", "issue", "range", "building", "seller", "court", "february", "always", "result", "audio", "light", "write", "offer", "groups", "given", "files", "event", "release", "analysis", "request", "china", "making", "picture", "needs", "possible", "might", "month", "major", "areas", "future", "space", "cards", "problems", "london", "meeting", "become", "interest", "child", "enter", "share", "similar", "garden", "schools", "million", "added", "listed", "learning", "energy", "delivery", "popular", "stories", "journal", "reports", "welcome", "central", "images", "notice", "original", "radio", "until", "color", "council", "includes", "track", "archive", "others", "format", "least", "society", "months", "safety", "friends", "trade", "edition", "messages", "further", "updated", "having", "provides", "david", "already", "green", "studies", "close", "common", "drive", "specific", "several", "living", "called", "short", "display", "limited", "powered", "means", "director", "daily", "beach", "natural", "whether", "period", "planning", "database", "official", "weather", "average", "window", "france", "region", "island", "record", "direct", "records", "district", "calendar", "costs", "style", "front", "update", "parts", "early", "miles", "sound", "resource", "present", "either", "document", "works", "material", "written", "federal", "hosting", "rules", "final", "adult", "tickets", "thing", "centre", "cheap", "finance", "minutes", "third", "gifts", "europe", "reading", "topics", "cover", "usually", "together", "videos", "percent", "function", "getting", "global", "economic", "player", "projects", "lyrics", "often", "submit", "germany", "amount", "watch", "included", "though", "thanks", "deals", "various", "words", "linux", "james", "weight", "heart", "received", "choose", "archives", "points", "magazine", "error", "camera", "clear", "receive", "domain", "methods", "chapter", "makes", "policies", "beauty", "manager", "india", "position", "taken", "listings", "models", "michael", "known", "cases", "florida", "simple", "quick", "wireless", "license", "friday", "whole", "annual", "later", "basic", "shows", "google", "church", "method", "purchase", "active", "response", "practice", "hardware", "figure", "holiday", "enough", "designed", "along", "among", "death", "writing", "speed", "brand", "discount", "higher", "effects", "created", "remember", "yellow", "increase", "kingdom", "thought", "stuff", "french", "storage", "japan", "doing", "loans", "shoes", "entry", "nature", "orders", "africa", "summary", "growth", "notes", "agency", "monday", "european", "activity", "although", "western", "income", "force", "overall", "river", "package", "contents", "players", "engine", "album", "regional", "supplies", "started", "views", "plans", "double", "build", "screen", "exchange", "types", "lines", "continue", "across", "benefits", "needed", "season", "apply", "someone", "anything", "printer", "believe", "effect", "asked", "sunday", "casino", "volume", "cross", "anyone", "mortgage", "silver", "inside", "solution", "mature", "rather", "weeks", "addition", "supply", "nothing", "certain", "running", "lower", "union", "jewelry", "clothing", "names", "robert", "homepage", "skills", "islands", "advice", "career", "military", "rental", "decision", "leave", "british", "teens", "woman", "sellers", "middle", "cable", "taking", "values", "division", "coming", "tuesday", "object", "lesbian", "machine", "length", "actually", "score", "client", "returns", "capital", "follow", "sample", "shown", "saturday", "england", "culture", "flash", "george", "choice", "starting", "thursday", "courses", "consumer", "airport", "foreign", "artist", "outside", "levels", "channel", "letter", "phones", "ideas", "summer", "allow", "degree", "contract", "button", "releases", "homes", "super", "matter", "custom", "virginia", "almost", "located", "multiple", "asian", "editor", "cause", "focus", "featured", "rooms", "female", "thomas", "primary", "cancer", "numbers", "reason", "browser", "spring", "answer", "voice", "friendly", "schedule", "purpose", "feature", "comes", "police", "everyone", "approach", "cameras", "brown", "physical", "medicine", "ratings", "chicago", "forms", "glass", "happy", "smith", "wanted", "thank", "unique", "survey", "prior", "sport", "ready", "animal", "sources", "mexico", "regular", "secure", "simply", "evidence", "station", "round", "paypal", "favorite", "option", "master", "valley", "recently", "probably", "rentals", "built", "blood", "improve", "larger", "networks", "earth", "parents", "nokia", "impact", "transfer", "kitchen", "strong", "carolina", "wedding", "hospital", "ground", "overview", "owners", "disease", "italy", "perfect", "classic", "basis", "command", "cities", "william", "express", "award", "distance", "peter", "ensure", "involved", "extra", "partners", "budget", "rated", "guides", "success", "maximum", "existing", "quite", "selected", "amazon", "patients", "warning", "horse", "forward", "flowers", "stars", "lists", "owner", "retail", "animals", "useful", "directly", "housing", "takes", "bring", "catalog", "searches", "trying", "mother", "traffic", "joined", "input", "strategy", "agent", "valid", "modern", "senior", "ireland", "teaching", "grand", "testing", "trial", "charge", "units", "instead", "canadian", "normal", "wrote", "ships", "entire", "leading", "metal", "positive", "fitness", "chinese", "opinion", "football", "abstract", "output", "funds", "greater", "likely", "develop", "artists", "guest", "seems", "trust", "contains", "session", "multi", "republic", "vacation", "century", "academic", "graphics", "indian", "expected", "grade", "dating", "pacific", "mountain", "filter", "mailing", "vehicle", "longer", "consider", "northern", "behind", "panel", "floor", "german", "buying", "match", "proposed", "default", "require", "outdoor", "morning", "allows", "protein", "plant", "reported", "politics", "partner", "authors", "boards", "faculty", "parties", "mission", "string", "sense", "modified", "released", "stage", "internal", "goods", "unless", "richard", "detailed", "japanese", "approved", "target", "except", "ability", "maybe", "moving", "brands", "places", "pretty", "spain", "southern", "yourself", "winter", "battery", "youth", "pressure", "boston", "keywords", "medium", "break", "purposes", "dance", "itself", "defined", "papers", "playing", "awards", "studio", "reader", "virtual", "device", "answers", "remote", "external", "apple", "offered", "theory", "enjoy", "remove", "surface", "minimum", "visual", "variety", "teachers", "martin", "manual", "block", "subjects", "agents", "repair", "civil", "steel", "songs", "fixed", "wrong", "hands", "finally", "updates", "desktop", "classes", "paris", "sector", "capacity", "requires", "jersey", "fully", "father", "electric", "quotes", "officer", "driver", "respect", "unknown", "worth", "teacher", "workers", "georgia", "peace", "campus", "showing", "creative", "coast", "benefit", "progress", "funding", "devices", "grant", "agree", "fiction", "watches", "careers", "beyond", "families", "museum", "blogs", "accepted", "former", "complex", "agencies", "parent", "spanish", "michigan", "columbia", "setting", "scale", "stand", "economy", "highest", "helpful", "monthly", "critical", "frame", "musical", "angeles", "employee", "chief", "gives", "bottom", "packages", "detail", "changed", "heard"]
let word = wordList[Math.floor(Math.random() * wordList.length)];
let wordArray = word.toUpperCase().split('');
let wordLength = wordArray.length;
let countWrong = 0;
let countCorrect = 0;
let gameOver = false;
let divArray = [];


const letterButton = document.getElementsByClassName('abc');
const letterSpace = document.getElementsByClassName('letter-space');
const letterBox = document.getElementsByClassName('letter-box');
const formButton = document.getElementById('form-button');
const canvas = document.getElementById("canvas");
const all = document.querySelector('*');
const ctx = canvas.getContext("2d");


function addBoxPerLetter() {
    for (let i = 0; i < wordLength; i++) {
        divArray[i] = document.createElement('div');
        divArray[i].classList.add('letter-box');
        letterSpace[0].appendChild(divArray[i]);
    }
}

const checkLetter = () => {
        for (let i = 0; i < letterButton.length; i++) {
            letterButton[i].addEventListener('click', function handleButtonClick() {
                let isCorrect = false;
                if (!gameOver) {
                    for (let j = 0; j < wordLength; j++) {
                        if (wordArray[j] === letterButton[i].innerHTML) {
                            letterButton[i].classList.add('correct');
                            divArray[j].textContent = letterButton[i].innerHTML;
                            countCorrect++;
                            isCorrect = true; 
                            if (countCorrect === wordLength) {
                                letterSpace[0].classList.add('win');
                                setTimeout(function(){ alert('You win!'); }, 200);
                                gameOver = true;
                            }
                        }
                    }
                    if (isCorrect){ 
                        return
                    };
                    
                    
                    letterButton[i].classList.add('wrong');
                    countWrong++;
                    if (countWrong === 1) {
                        ctx.beginPath();
                        ctx.arc(200, 100, 50, 0, 2 * Math.PI);
                        ctx.stroke();
                        ctx.closePath();
                    } else if (countWrong === 2) {
                        ctx.beginPath();
                        ctx.moveTo(200, 150);
                        ctx.lineTo(200, 300);
                        ctx.stroke();
                        ctx.closePath();
                    } else if (countWrong === 3) {
                        ctx.beginPath();
                        ctx.moveTo(200, 300);
                        ctx.lineTo(150, 350);
                        ctx.stroke();
                        ctx.closePath();
                    } else if (countWrong === 4) {
                        ctx.beginPath();
                        ctx.moveTo(200, 300);
                        ctx.lineTo(250, 350);
                        ctx.stroke();
                        ctx.closePath();
                    } else if (countWrong === 5) {
                        ctx.beginPath();
                        ctx.moveTo(200, 200);
                        ctx.lineTo(150, 250);
                        ctx.stroke();
                        ctx.closePath();       
                    } else if (countWrong === 6) {
                        ctx.beginPath();
                        ctx.moveTo(200, 200);
                        ctx.lineTo(250, 250);
                        ctx.stroke();
                        ctx.closePath(); 
                        all.style.backgroundColor = 'hsla(1, 63%, 32%, .5)';
                        setTimeout(function(){ alert('You lose! The word was ' + word + '.'); }, 200);   
                        gameOver = true; 
                            
                    }
                    
                    
                }
            })
    }
     
}

const hangmanPole = () => {  
    ctx.beginPath();
    ctx.moveTo(400, 400);
    ctx.lineTo(400, 0);
    ctx.lineTo(200, 0);
    ctx.lineTo(200, 50);
    ctx.stroke();
    ctx.closePath();
}

checkLetter();
addBoxPerLetter();
hangmanPole();