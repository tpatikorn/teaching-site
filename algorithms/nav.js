document.addEventListener('DOMContentLoaded', () => {
    // 1. Determine root prefix dynamically
    const pathname = window.location.pathname;
    let rootPrefix = './';
    
    if (pathname.includes('/modules/')) {
        rootPrefix = '../../';
    }

    // 2. Navigation items definition
    const navStructure = [
        {
            title: "Home",
            path: "index.html"
        },
        {
            title: "Module 1: Basic DS",
            id: "m1",
            pages: [
                { name: "1.1 Arrays", path: "modules/m1/arrays.html" },
                { name: "1.2 Linked Lists", path: "modules/m1/linked-lists.html" },
                { name: "1.3 Stacks", path: "modules/m1/stacks.html" },
                { name: "1.4 Queues", path: "modules/m1/queues.html" },
                { name: "1.5 Priority Queues", path: "modules/m1/priority-queues.html" },
                { name: "1.6 Hash Tables & Hashing", path: "modules/m1/hash-tables.html" }
            ]
        },
        {
            title: "Module 2: Complexity",
            id: "m2",
            pages: [
                { name: "2.1 Time & Space Complexity", path: "modules/m2/complexity.html" },
                { name: "2.2 Benchmarks", path: "modules/m2/benchmarks.html" }
            ]
        },
        {
            title: "Module 3: Sorting",
            id: "m3",
            pages: [
                { name: "3.1 Quadratic Sorting", path: "modules/m3/quadratic.html" },
                { name: "3.2 Divide & Conquer", path: "modules/m3/divide-conquer.html" },
                { name: "3.3 Counting Sort", path: "modules/m3/counting.html" }
            ]
        },
        {
            title: "Module 4: Graph Intro",
            id: "m4",
            pages: [
                { name: "4.1 Graph Basics", path: "modules/m4/basics.html" },
                { name: "4.2 Graph Representations", path: "modules/m4/representations.html" }
            ]
        },
        {
            title: "Module 5: Trees",
            id: "m5",
            pages: [
                { name: "5.1 Trees & Binary Trees", path: "modules/m5/binary-trees.html" },
                { name: "5.2 Binary Search Trees (BST)", path: "modules/m5/bst.html" },
                { name: "5.3 AVL Trees", path: "modules/m5/avl.html" },
                { name: "5.4 Red-Black Trees", path: "modules/m5/red-black.html" }
            ]
        },
        {
            title: "Module 6: Graph Algos",
            id: "m6",
            pages: [
                { name: "6.1 BFS Traversal", path: "modules/m6/bfs.html" },
                { name: "6.2 DFS Traversal", path: "modules/m6/dfs.html" },
                { name: "6.3 Dijkstra's Algorithm", path: "modules/m6/dijkstra.html" },
                { name: "6.4 A* Search", path: "modules/m6/astar.html" },
                { name: "6.5 Prim's MST", path: "modules/m6/prim.html" },
                { name: "6.6 Kruskal's MST", path: "modules/m6/kruskal.html" }
            ]
        },
        {
            title: "Module 7: Recursion",
            id: "m7",
            pages: [
                { name: "7.1 Recursion Basics", path: "modules/m7/basics.html" },
                { name: "7.2 Recursion Trees", path: "modules/m7/recursion-trees.html" }
            ]
        }
    ];

    // 3. Generate Sidebar HTML
    const sidebar = document.createElement('div');
    sidebar.id = 'sidebar-container';

    let navHtml = `
        <div class="sidebar-header">
            <h1 style="font-size: 1.25rem; line-height: 1.3;">Data Structure and Algorithm</h1>
            <p style="margin-top: 6px;">by <a href="https://tpatikorn.com/" target="_blank" style="color: var(--accent-blue); text-decoration: none; font-weight: 500;">Thanaporn Patikorn</a></p>
            <button id="theme-toggle-btn" class="btn btn-secondary" style="margin-top: 12px; width: 100%; padding: 6px 12px; font-size: 0.8rem; font-weight: 500;">
                ☀️ Light Mode
            </button>
        </div>
        <ul class="nav-tree">
    `;

    navStructure.forEach(item => {
        if (item.pages) {
            const isCurrentModule = item.pages.some(p => pathname.includes(p.path));
            const collapsedClass = isCurrentModule ? '' : 'collapsed';

            navHtml += `
                <li class="nav-module ${collapsedClass}" data-module-id="${item.id}">
                    <div class="nav-module-title">
                        <span>${item.title}</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                    <ul class="nav-pages" style="${isCurrentModule ? '' : 'max-height: 0px;'}">
            `;

            item.pages.forEach(page => {
                const isActive = pathname.includes(page.path);
                navHtml += `
                    <li class="${isActive ? 'active' : ''}">
                        <a href="${rootPrefix}${page.path}">${page.name}</a>
                    </li>
                `;
            });

            navHtml += `
                    </ul>
                </li>
            `;
        } else {
            const isActive = pathname.endsWith(item.path) || (pathname.endsWith('/') && item.path === 'index.html');
            navHtml += `
                <li class="nav-module">
                    <a href="${rootPrefix}${item.path}" class="nav-module-title" style="text-decoration: none; display: flex; ${isActive ? 'color: var(--accent-blue); font-weight: bold;' : ''}">
                        <span>${item.title}</span>
                    </a>
                </li>
            `;
        }
    });

    navHtml += `</ul>`;
    sidebar.innerHTML = navHtml;

    document.body.insertBefore(sidebar, document.body.firstChild);

    // 4. Injected Collapsible Toggle Button
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'sidebar-toggle-btn';
    toggleBtn.setAttribute('title', 'Toggle Sidebar');
    toggleBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
    `;
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('sidebar-collapsed');
    });
    document.body.appendChild(toggleBtn);

    // 5. Theme Toggle Logic
    const themeBtn = document.getElementById('theme-toggle-btn');
    const updateThemeUI = () => {
        if (document.body.classList.contains('light-mode')) {
            themeBtn.innerHTML = '🌙 Dark Mode';
        } else {
            themeBtn.innerHTML = '☀️ Light Mode';
        }
    };

    // Load initial theme
    if (localStorage.getItem('dsa-theme') === 'light') {
        document.body.classList.add('light-mode');
    }
    updateThemeUI();

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('dsa-theme', 'light');
        } else {
            localStorage.setItem('dsa-theme', 'dark');
        }
        updateThemeUI();
    });

    // Setup Nav Dropdowns
    const modules = document.querySelectorAll('.nav-module');
    modules.forEach(mod => {
        const titleEl = mod.querySelector('.nav-module-title');
        const pagesEl = mod.querySelector('.nav-pages');
        
        if (titleEl && pagesEl) {
            titleEl.addEventListener('click', (e) => {
                e.stopPropagation();
                const isCollapsed = mod.classList.contains('collapsed');
                
                if (isCollapsed) {
                    mod.classList.remove('collapsed');
                    pagesEl.style.maxHeight = pagesEl.scrollHeight + "px";
                } else {
                    mod.classList.add('collapsed');
                    pagesEl.style.maxHeight = "0px";
                }
            });
        }
    });

    // 6. Dynamic Class Footer Injection
    const mainEl = document.querySelector('main');
    if (mainEl) {
        const footer = document.createElement('footer');
        footer.style.marginTop = '48px';
        footer.style.paddingTop = '24px';
        footer.style.borderTop = '1px solid var(--glass-border)';
        footer.style.textAlign = 'center';
        footer.style.fontSize = '0.85rem';
        footer.style.color = 'var(--text-muted)';
        footer.innerHTML = `
            Data Structure and Algorithm class by 
            <a href="https://tpatikorn.com/" target="_blank" style="color: var(--accent-blue); text-decoration: none; font-weight: 500;">
                Thanaporn Patikorn
            </a>
        `;
        mainEl.appendChild(footer);
    }
});
