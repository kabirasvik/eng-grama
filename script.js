/* ============================================================
   App Logic
   ============================================================ */

const rulesGrid = document.getElementById("rulesGrid");
const searchInput = document.getElementById("searchInput");
const categoryNav = document.getElementById("categoryNav");
const ruleCount = document.getElementById("ruleCount");
const ruleCountBadge = document.getElementById("ruleCountBadge");
const emptyState = document.getElementById("emptyState");
const themeToggle = document.getElementById("themeToggle");
const categoryToggle = document.getElementById("categoryToggle");
const sidebar = document.getElementById("sidebar");
const sidebarClose = document.getElementById("sidebarClose");

let categories = [];
let activeCategory = "All Rules";
let searchQuery = "";

// ---- Theme ----
const savedTheme = localStorage.getItem("engGramaTheme");
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
} else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.documentElement.setAttribute("data-theme", "dark");
}

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("engGramaTheme", next);
});

// ---- Build categories list ----
function buildCategories(rules) {
  const catSet = new Set();
  rules.forEach(r => catSet.add(r.category));
  categories = ["All Rules", ...Array.from(catSet).sort()];
}

// Render category pills/tabs
function renderCategories() {
  categoryNav.innerHTML = categories.map(cat => {
    const isActive = cat === activeCategory ? " active" : "";
    return `
      <button class="category-item${isActive}" data-category="${cat}" role="tab" aria-pressed="${cat === activeCategory}">
        <span>${escapeHtml(cat)}</span>
        <span class="category-count">${GRAMMAR_RULES.filter(r => cat === "All Rules" ? true : r.category === cat).length}</span>
      </button>
    `;
  }).join("");

  categoryNav.querySelectorAll(".category-item").forEach(btn => {
    btn.addEventListener("click", () => {
      categoryNav.querySelectorAll(".category-item").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.dataset.category;
      renderRules();
      if (window.innerWidth <= 640) {
        sidebar.classList.remove("open");
        categoryToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
}

// ---- Filter & Search ----
function getFilteredRules() {
  const q = searchQuery.toLowerCase();
  return GRAMMAR_RULES.filter(rule => {
    const matchesSearch =
      q === "" ||
      (rule.number && rule.number.toLowerCase().includes(q)) ||
      (rule.title && rule.title.toLowerCase().includes(q)) ||
      (rule.category && rule.category.toLowerCase().includes(q)) ||
      (rule.coreStatement && rule.coreStatement.toLowerCase().includes(q)) ||
      (rule.incorrect && rule.incorrect.text && rule.incorrect.text.toLowerCase().includes(q)) ||
      (rule.correct && rule.correct.text && rule.correct.text.toLowerCase().includes(q)) ||
      (rule.tip && rule.tip.toLowerCase().includes(q)) ||
      rule.examples.some(ex => ex.text.toLowerCase().includes(q));
    const matchesCat = activeCategory === "All Rules" || rule.category === activeCategory;
    return q === "" ? matchesCat : matchesSearch;
  });
}

// ---- Escape HTML ----
function escapeHtml(text) {
  if (!text) return "";
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// ---- Render **bold** markdown in coreStatement ----
function renderBold(text) {
  if (!text) return "";
  return text.split("**").map((part, i) =>
    i % 2 === 0 ? escapeHtml(part) : `<strong>${escapeHtml(part)}</strong>`
  ).join("");
}

// ---- Render highlighted word inside example text ----
function renderHighlight(text, highlightWord, cls) {
  if (!text) return "";
  if (!highlightWord) return escapeHtml(text);
  const lowerText = text.toLowerCase();
  const lowerHL = highlightWord.toLowerCase();
  const idx = lowerText.indexOf(lowerHL);
  if (idx === -1) return escapeHtml(text);
  const before = escapeHtml(text.slice(0, idx));
  const word = escapeHtml(text.slice(idx, idx + highlightWord.length));
  const after = escapeHtml(text.slice(idx + highlightWord.length));
  return `${before}<span class="${cls}">${word}</span>${after}`;
}

// ---- Render Rules ----
function renderRules() {
  const filtered = getFilteredRules();
  if (ruleCount) ruleCount.textContent = activeCategory;
  if (ruleCountBadge) ruleCountBadge.textContent = `${filtered.length} rule${filtered.length !== 1 ? "s" : ""}`;

  if (filtered.length === 0) {
    rulesGrid.innerHTML = "";
    if (emptyState) emptyState.hidden = false;
    return;
  }
  if (emptyState) emptyState.hidden = true;

  rulesGrid.innerHTML = filtered.map(rule => renderRuleCard(rule)).join("");

  // Wire up expand buttons
  document.querySelectorAll(".expand-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleCard(btn.closest(".rule-card"), btn);
    });
  });

  // Wire up card click to toggle expansion
  document.querySelectorAll(".rule-card").forEach(card => {
    card.addEventListener("click", () => {
      const btn = card.querySelector(".expand-btn");
      toggleCard(card, btn);
    });
  });

}

function renderRuleCard(rule) {

  // Filter out duplicate examples (exclude ones matching incorrect/correct text)
  const mainTexts = new Set();
  if (rule.incorrect && rule.incorrect.text) mainTexts.add(rule.incorrect.text.toLowerCase().trim());
  if (rule.correct && rule.correct.text) mainTexts.add(rule.correct.text.toLowerCase().trim());
  const uniqueExamples = (rule.examples || []).filter(ex => {
    const t = ex.text.toLowerCase().trim();
    return t !== "" && !mainTexts.has(t);
  });

  return `
    <article class="rule-card" id="${rule.id}" role="listitem" aria-label="${rule.number}: ${rule.title}">
      <div class="card-top">
        <div class="rule-number-badge">${escapeHtml(rule.number)}</div>
        <div class="card-actions">
          <button class="expand-btn" aria-expanded="false">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
        </div>
      </div>
      <h3 class="rule-title">${escapeHtml(rule.title)}</h3>
      <span class="rule-category-tag">${escapeHtml(rule.category)}</span>
      <div class="rule-body">
        <div class="core-statement">${renderBold(rule.coreStatement)}</div>

        ${rule.triggerWords && rule.triggerWords.length > 0 ? `
          <div class="trigger-chips">
            ${rule.triggerWords.map(w => `<span class="chip">${escapeHtml(w)}</span>`).join("")}
          </div>
        ` : ""}

        <div class="examples-grid">
          ${rule.incorrect && rule.incorrect.text ? `
            <div class="example-block incorrect-box">
              <div class="example-label incorrect"><span>❌</span> Incorrect</div>
              <div class="example-text incorrect">${renderHighlight(rule.incorrect.text, rule.incorrect.highlight, "highlight-wrong")}</div>
            </div>
          ` : ""}

          ${rule.correct && rule.correct.text ? `
            <div class="example-block correct-box">
              <div class="example-label correct"><span>✅</span> Correct</div>
              <div class="example-text correct">${renderHighlight(rule.correct.text, rule.correct.highlight, "highlight-right")}</div>
            </div>
          ` : ""}
        </div>
        ${uniqueExamples.length > 0 ? `
          <div class="exam-examples">
            <div class="exam-examples-label">📘 Exam Examples</div>
            ${uniqueExamples.map((ex, i) => `
              <div class="exam-example-row">
                <p class="exam-text">${renderHighlight(ex.text, ex.highlight, "highlight-crimson")}</p>
              </div>
            `).join('')}
          </div>
        ` : ""}
      </div>
    </article>
  `;
}

function toggleCard(card, btn) {
  const isExpanded = card.classList.contains("expanded");
  const scrollY = window.scrollY;
  const cardTop = card.getBoundingClientRect().top + window.scrollY;

  if (isExpanded) {
    card.classList.remove("expanded");
    if (btn) btn.querySelector("svg").style.transform = "rotate(0deg)";
  } else {
    card.classList.add("expanded");
    if (btn) btn.querySelector("svg").style.transform = "rotate(180deg)";
  }

  // Preserve scroll position across toggle
  window.scrollTo(0, scrollY);
  const newCardTop = card.getBoundingClientRect().top + window.scrollY;
  window.scrollTo(0, scrollY + (newCardTop - cardTop));
}

// ---- Search ----
searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderRules();
});

const searchBtn = document.getElementById("searchBtn");
if (searchBtn) {
  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    searchQuery = searchInput.value;
    renderRules();
  });
}

// ---- Mobile category drawer ----
categoryToggle.addEventListener("click", () => {
  const open = sidebar.classList.toggle("open");
  categoryToggle.setAttribute("aria-expanded", open);
});

sidebarClose.addEventListener("click", () => {
  sidebar.classList.remove("open");
  categoryToggle.setAttribute("aria-expanded", "false");
});

// Close sidebar when clicking outside (mobile)
document.addEventListener("click", (e) => {
  if (window.innerWidth > 640) return;
  if (!sidebar.contains(e.target) && !categoryToggle.contains(e.target)) {
    sidebar.classList.remove("open");
    categoryToggle.setAttribute("aria-expanded", "false");
  }
});

// ---- Init ----
buildCategories(GRAMMAR_RULES);
renderCategories();
renderRules();
