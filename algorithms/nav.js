document.addEventListener('DOMContentLoaded', () => {
    // 1. Determine root prefix dynamically
    const pathname = window.location.pathname;
    let rootPrefix = './';
    
    if (pathname.includes('/modules/')) {
        rootPrefix = '../../';
    }

    // 2. Comprehensive Bilingual Dictionary Definition
    const DICTIONARY = {
        "Interactive Data Structures & Algorithms": "โครงสร้างข้อมูลและอัลกอริทึมเชิงโต้ตอบ",
        "An undergrad-level courseware complete with live comparative visualizers, detailed operations counts, performance tests, and step-by-step trace debugging.": "สื่อการเรียนรู้ระดับปริญญาตรีที่มาพร้อมกับเครื่องมือจำลองเชิงโต้ตอบ การนับจำนวนคำสั่งอย่างละเอียด การทดสอบประสิทธิภาพ และตัววิเคราะห์การประมวลผลทีละขั้นตอน",
        "Start Exploring Module 1": "เริ่มเรียนรู้บทเรียนที่ 1",
        "Course Modules": "บทเรียนการเรียนรู้",
        "Select a topic below or use the sidebar navigation to jump into interactive visualizers.": "เลือกหัวข้อการเรียนรู้ด้านล่างหรือใช้เมนูนำทางด้านข้างเพื่อศึกษาเครื่องมือจำลอง",
        "Module 1: Basic Data Structures": "บทที่ 1: โครงสร้างข้อมูลพื้นฐาน",
        "Module 2: Algorithm Analysis": "บทที่ 2: การวิเคราะห์อัลกอริทึม",
        "Module 3: Sorting Algorithms": "บทที่ 3: อัลกอริทึมการเรียงลำดับ",
        "Module 4: Graph Intro": "บทที่ 4: บทนำเกี่ยวกับกราฟ",
        "Module 5: Trees": "บทที่ 5: โครงสร้างข้อมูลต้นไม้",
        "Module 6: Graph Algos": "บทที่ 6: อัลกอริทึมบนกราฟ",
        "Module 7: Recursion": "บทที่ 7: การทำงานแบบเรียกตัวเอง",
        "Go to Module 1": "ศึกษาบทที่ 1",
        "Go to Module 2": "ศึกษาบทที่ 2",
        "Go to Module 3": "ศึกษาบทที่ 3",
        "Go to Module 4": "ศึกษาบทที่ 4",
        "Go to Module 5": "ศึกษาบทที่ 5",
        "Go to Module 6": "ศึกษาบทที่ 6",
        "Go to Module 7": "ศึกษาบทที่ 7",
        "Home": "หน้าหลัก",
        "1.1 Arrays": "1.1 อาร์เรย์ (Arrays)",
        "1.2 Linked Lists": "1.2 ลิงก์ลิสต์ (Linked Lists)",
        "1.3 Stacks": "1.3 สแต็ก (Stacks)",
        "1.4 Queues": "1.4 คิว (Queues)",
        "1.5 Priority Queues": "1.5 คิวลำดับความสำคัญ (Priority Queues)",
        "1.6 Hash Tables & Hashing": "1.6 แฮชเทเบิลและการแฮช (Hash Tables)",
        "2.1 Time & Space Complexity": "2.1 ประสิทธิภาพด้านเวลาและหน่วยความจำ (Big-O)",
        "2.2 Benchmarks": "2.2 การทดสอบเปรียบเทียบประสิทธิภาพ (Benchmarks)",
        "3.1 Quadratic Sorting": "3.1 การเรียงลำดับแบบ Quadratic (O(N²))",
        "3.2 Divide & Conquer": "3.2 การแบ่งแยกและเอาชนะ (Merge & Quick Sort)",
        "3.3 Counting Sort": "3.3 การเรียงลำดับแบบนับจำนวน (Counting Sort)",
        "4.1 Graph Basics": "4.1 พื้นฐานกราฟ (Graph Basics)",
        "4.2 Graph Representations": "4.2 การแทนกราฟในหน่วยความจำ (Representations)",
        "5.1 Trees & Binary Trees": "5.1 ต้นไม้และไบนารีทรี (Binary Trees)",
        "5.2 Binary Search Trees (BST)": "5.2 ไบนารีเซิร์ชทรี (BST)",
        "5.3 AVL Trees": "5.3 ต้นไม้ปรับสมดุล AVL (AVL Trees)",
        "5.4 Red-Black Trees": "5.4 ต้นไม้เรด-แบล็ก (Red-Black Trees)",
        "6.1 BFS Traversal": "6.1 การท่องในกราฟแบบกว้าง (BFS)",
        "6.2 DFS Traversal": "6.2 การท่องในกราฟแบบลึก (DFS)",
        "6.3 Dijkstra's Algorithm": "6.3 อัลกอริทึมไดก์สตรา (Dijkstra)",
        "6.4 A* Search": "6.4 การค้นหาแบบ A* Search",
        "6.5 Prim's MST": "6.5 ต้นไม้เชื่อมโยงขั้นต่ำของพริม (Prim's MST)",
        "6.6 Kruskal's MST": "6.6 ต้นไม้เชื่อมโยงขั้นต่ำของครัสคาล (Kruskal's MST)",
        "7.1 Recursion Basics": "7.1 พื้นฐานฟังก์ชันเรียกตัวเอง",
        "7.2 Recursion Trees": "7.2 แผนภาพต้นไม้การเรียกซ้ำ",
        "Memory Contiguity": "การจัดเก็บแบบต่อเนื่องในหน่วยความจำ",
        "Element Shifting": "การเลื่อนตำแหน่งข้อมูล",
        "1. Memory Contiguity & Indexing Formula": "1. การจัดเก็บต่อเนื่องในหน่วยความจำและสูตรคำนวณดัชนี",
        "2. Element Shifting & Insertion Costs": "2. การเลื่อนตำแหน่งข้อมูลและประสิทธิภาพการแทรก",
        "3. Multi-Dimensional Row-Major Order": "3. การจัดเก็บอาร์เรย์หลายมิติแบบ Row-Major Order",
        "4. CPU Cache Spatial Locality & Performance": "4. ประสิทธิภาพหน่วยความจำแคช (Spatial Locality)",
        "1. Dynamic Heap Allocation & Node Structure": "1. การจัดสรรหน่วยความจำฮีปและโครงสร้างโหนด",
        "2. Singly, Doubly & Circular Variants": "2. รูปแบบลิงก์ลิสต์เดี่ยว ลิงก์ลิสต์คู่ และแบบวงกลม",
        "3. Pointer Rewiring & Sentinel Nodes": "3. การปรับแต่งสายพอยเตอร์และ Sentinel Nodes",
        "4. Array vs Linked List Architectural Trade-offs": "4. ข้อดีข้อเสียเปรียบเทียบระหว่าง อาร์เรย์ และ ลิงก์ลิสต์",
        "Action Log": "บันทึกเหตุการณ์",
        "Operation Counts": "จำนวนคำสั่งประมวลผล",
        "Data Structure and Algorithm class by": "คอร์สเรียนโครงสร้างข้อมูลและอัลกอริทึม โดย"
    };

    let currentLang = localStorage.getItem('dsa-lang') || 'EN';

    function applyTranslation() {
        if (currentLang === 'TH') {
            document.body.classList.remove('lang-en');
            document.body.classList.add('lang-th');
        } else {
            document.body.classList.remove('lang-th');
            document.body.classList.add('lang-en');
        }

        function walk(node) {
            if (node.nodeType === Node.TEXT_NODE) {
                let val = node.nodeValue.trim();
                if (val.length > 1) {
                    let origText = node.parentElement.getAttribute('data-orig-text');
                    if (!origText) {
                        origText = node.nodeValue;
                        node.parentElement.setAttribute('data-orig-text', origText);
                    }
                    if (currentLang === 'TH') {
                        const cleanVal = val.replace(/\s+/g, ' ');
                        if (DICTIONARY[cleanVal]) {
                            node.nodeValue = node.nodeValue.replace(val, DICTIONARY[cleanVal]);
                        } else {
                            for (let key in DICTIONARY) {
                                if (cleanVal === key) {
                                    node.nodeValue = node.nodeValue.replace(val, DICTIONARY[key]);
                                    break;
                                }
                            }
                        }
                    } else {
                        node.nodeValue = origText;
                    }
                }
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                const tag = node.tagName.toLowerCase();
                if (tag !== 'script' && tag !== 'style' && tag !== 'code' && tag !== 'pre') {
                    for (let child of node.childNodes) {
                        walk(child);
                    }
                }
            }
        }
        walk(document.body);
    }

    // 3. Navigation Structure Definition
    const navStructure = [
        {
            title: "Module 1: Basic Data Structures",
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
            title: "Module 2: Algorithm Analysis",
            id: "m2",
            pages: [
                { name: "2.1 Time & Space Complexity", path: "modules/m2/complexity.html" },
                { name: "2.2 Benchmarks", path: "modules/m2/benchmarks.html" }
            ]
        },
        {
            title: "Module 3: Sorting Algorithms",
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
                { name: "5.1 Trees & Binary Trees", path: "modules/m5/trees.html" },
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

    // 4. Generate Sidebar HTML
    const sidebar = document.createElement('div');
    sidebar.id = 'sidebar-container';

    let navHtml = `
        <div class="sidebar-header">
            <a href="${rootPrefix}../index.html" style="display: inline-flex; align-items: center; gap: 4px; font-size: 0.8rem; font-weight: 600; color: var(--accent-blue); text-decoration: none; margin-bottom: 8px;">
                ← ${currentLang === 'TH' ? 'หน้าหลักวิชาการ' : 'Main Portal'}
            </a>
            <h1 style="font-size: 1.2rem; line-height: 1.3;">Data Structures & Algorithms</h1>
            <p style="margin-top: 4px; font-size: 0.85rem;">by <a href="https://tpatikorn.com/" target="_blank" style="color: var(--accent-blue); text-decoration: none; font-weight: 500;">Thanaporn Patikorn</a></p>
            <div style="display: flex; gap: 8px; margin-top: 12px;">
                <button id="theme-toggle-btn" class="btn btn-secondary" style="flex: 1; padding: 6px; font-size: 0.8rem; font-weight: 500;">
                    ☀️ Light
                </button>
                <button id="lang-toggle-btn" class="btn btn-secondary" style="flex: 1; padding: 6px; font-size: 0.8rem; font-weight: 500;">
                    🌐 ${currentLang === 'EN' ? 'TH' : 'EN'}
                </button>
            </div>
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
                const href = rootPrefix + page.path;
                const activeClass = pathname.includes(page.path) ? 'active' : '';
                navHtml += `
                    <li class="nav-page ${activeClass}">
                        <a href="${href}">${page.name}</a>
                    </li>
                `;
            });

            navHtml += `
                    </ul>
                </li>
            `;
        }
    });

    navHtml += `</ul>`;
    sidebar.innerHTML = navHtml;

    // Insert Sidebar into DOM
    document.body.prepend(sidebar);

    // Apply saved theme state
    const savedTheme = localStorage.getItem('dsa-theme') || 'dark';
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        const btn = document.getElementById('theme-toggle-btn');
        if (btn) btn.innerHTML = '🌙 Dark';
    }

    // Toggle Theme Handler
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const isLight = document.body.classList.toggle('light-mode');
            localStorage.setItem('dsa-theme', isLight ? 'light' : 'dark');
            themeBtn.innerHTML = isLight ? '🌙 Dark' : '☀️ Light';
        });
    }

    // Toggle Language Handler
    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'EN' ? 'TH' : 'EN';
            localStorage.setItem('dsa-lang', currentLang);
            langBtn.innerHTML = `🌐 ${currentLang === 'EN' ? 'TH' : 'EN'}`;
            applyTranslation();
        });
    }

    // Apply initial translation if TH
    if (currentLang === 'TH') {
        applyTranslation();
    }

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

    // Dynamic Class Footer Injection
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
            Data Structures & Algorithms class by 
            <a href="https://tpatikorn.com/" target="_blank" style="color: var(--accent-blue); text-decoration: none; font-weight: 500;">
                Thanaporn Patikorn
            </a>
        `;
        mainEl.appendChild(footer);
    }
});
