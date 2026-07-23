/* Sidebar controller: collapsible desktop + drawer mobile/tablet */
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebarOverlay');
const hamburger = document.getElementById('hamburgerBtn');
const drawerBreakpoint = window.matchMedia('(max-width: 1100px)');
const DESKTOP_STATE_KEY = 'devguide-sidebar-collapsed';

function isDrawerMode() {
  return drawerBreakpoint.matches;
}

function setDrawerOpen(open) {
  if (!sidebar || !overlay || !hamburger) return;

  const shouldOpen = Boolean(open) && isDrawerMode();

  sidebar.classList.toggle('open', shouldOpen);
  overlay.classList.toggle('show', shouldOpen);
  document.body.classList.toggle('sidebar-open', shouldOpen);

  hamburger.setAttribute('aria-expanded', String(shouldOpen));
  sidebar.setAttribute('aria-hidden', String(!shouldOpen));
}

function setDesktopCollapsed(collapsed, save = true) {
  if (!sidebar || !hamburger) return;

  const shouldCollapse = Boolean(collapsed) && !isDrawerMode();

  document.body.classList.toggle('sidebar-collapsed', shouldCollapse);
  hamburger.setAttribute('aria-expanded', String(!shouldCollapse));
  sidebar.setAttribute('aria-hidden', String(shouldCollapse));

  if (save) {
    localStorage.setItem(DESKTOP_STATE_KEY, String(shouldCollapse));
  }
}

function closeSidebar() {
  if (isDrawerMode()) {
    setDrawerOpen(false);
  }
}

function toggleSidebar() {
  if (isDrawerMode()) {
    setDrawerOpen(!sidebar?.classList.contains('open'));
  } else {
    setDesktopCollapsed(!document.body.classList.contains('sidebar-collapsed'));
  }
}

if (hamburger) {
  hamburger.setAttribute('aria-controls', 'sidebar');
  hamburger.addEventListener('click', toggleSidebar);
}

overlay?.addEventListener('click', closeSidebar);

sidebar?.addEventListener('click', (event) => {
  if (isDrawerMode() && event.target.closest('.nav-item')) {
    closeSidebar();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    if (isDrawerMode()) {
      closeSidebar();
    } else {
      setDesktopCollapsed(true);
    }
  }
});

function syncSidebarForViewport() {
  sidebar?.classList.remove('open');
  overlay?.classList.remove('show');
  document.body.classList.remove('sidebar-open');

  if (isDrawerMode()) {
    document.body.classList.remove('sidebar-collapsed');
    hamburger?.setAttribute('aria-expanded', 'false');
    sidebar?.setAttribute('aria-hidden', 'true');
  } else {
    const savedCollapsed =
      localStorage.getItem(DESKTOP_STATE_KEY) === 'true';

    setDesktopCollapsed(savedCollapsed, false);
  }
}

if (typeof drawerBreakpoint.addEventListener === 'function') {
  drawerBreakpoint.addEventListener('change', syncSidebarForViewport);
} else {
  drawerBreakpoint.addListener(syncSidebarForViewport);
}

window.addEventListener('pageshow', syncSidebarForViewport);
syncSidebarForViewport();
