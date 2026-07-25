document.addEventListener('DOMContentLoaded', () => {
    let currentLang = localStorage.getItem('c-lang') || 'EN';

    const DICTIONARY = {
        "Interactive C Programming Fundamentals": "การเรียนรู้การเขียนโปรแกรมภาษา C เชิงโต้ตอบ",
        "An undergrad-level courseware complete with raw memory byte visualizers, expression precedence parsing trees, loop tracers, stack frames, heap allocators, and structured practice problems.": "สื่อการเรียนรู้ระดับปริญญาตรีที่มาพร้อมกับเครื่องมือจำลองไบต์ในหน่วยความจำ แผนภูมิวิเคราะห์ลำดับตัวดำเนินการ ตัวติดตามการทำงานลูป สแต็กเฟรม ตัวจัดสรรหน่วยความจำฮีป และโจทย์ฝึกปฏิบัติเชิงรุก",
        "Start Exploring Module 1": "เริ่มเรียนรู้บทเรียนที่ 1",
        "Course Modules": "บทเรียนการเรียนรู้",
        "Select a topic below or use the sidebar navigation to jump into interactive visualizers and class practice lists.": "เลือกหัวข้อการเรียนรู้ด้านล่างหรือใช้เมนูนำทางด้านข้างเพื่อศึกษาเครื่องจำลองและโจทย์ฝึกหัด",
        "Practice Problems": "โจทย์ฝึกปฏิบัติ",
        "Interactive Visualizer": "เครื่องมือจำลองเชิงโต้ตอบ",
        "Interactive Pipeline & Lecture": "เครื่องมือจำลองไปป์ไลน์และเนื้อหาบทเรียน",
        "Memory Visualizer & Lecture": "เครื่องมือจำลองหน่วยความจำและเนื้อหาบทเรียน",
        "Module 1: Intro & Memory": "บทที่ 1: บทนำและหน่วยความจำ",
        "Module 2: Operators & Expressions": "บทที่ 2: ตัวดำเนินการและนิพจน์",
        "Module 3: Control Flow": "บทที่ 3: การควบคุมทิศทางของโปรแกรม",
        "Module 4: Functions & Scope": "บทที่ 4: ฟังก์ชันและขอบเขตของตัวแปร",
        "Module 5: Arrays & Strings": "บทที่ 5: อาร์เรย์และสตริง",
        "Module 6: Pointers & Heap": "บทที่ 6: พอยเตอร์และหน่วยความจำฮีป",
        "Module 7: Structs & Files": "บทที่ 7: โครงสร้างข้อมูลและไฟล์",
        "Learn basic compilation, program layout, variables, data types, format specifiers, and visualize variable memory addresses and byte alignment.": "เรียนรู้ขั้นตอนการคอมไพล์ โครงสร้างโปรแกรม ตัวแปร ชนิดข้อมูล ตัวระบุรูปแบบ และจำลองแอดเดรสและตำแหน่งหน่วยความจำของตัวแปร",
        "Master C operators: arithmetic, relational, logical, ternary, bitwise. Analyze expression precedence using step-by-step visual evaluation trees.": "ทำความเข้าใจตัวดำเนินการทางคณิตศาสตร์ ความสัมพันธ์ ตรรกศาสตร์ เทอร์นารี และตัวดำเนินการบิต วิเคราะห์ลำดับนิพจน์ด้วยแผนภูมิวิเคราะห์เชิงโต้ตอบ",
        "Understand branching and loop iterations. Execute loops step-by-step while tracing variables and control updates in real time.": "เข้าใจคำสั่งตัดสินใจเงื่อนไขและลูปการทำซ้ำ จำลองการทำงานของลูปแบบทีละขั้นเพื่อตรวจสอบค่าตัวแปรแบบเรียลไทม์",
        "Examine scopes, lifetimes, prototypes, and recursion parameters with an interactive function call stack frame debugger visualizer.": "ศึกษาขอบเขตตัวแปร อายุการใช้งาน การประกาศฟังก์ชัน และพารามิเตอร์การเรียกซ้ำด้วยเครื่องมือจำลองสแต็กเฟรมของฟังก์ชัน",
        "Explore contiguous memory index arrays and null-terminated strings. Animate string library functions character-by-character.": "เรียนรู้อาร์เรย์ที่จัดเก็บข้อมูลแบบต่อเนื่องในหน่วยความจำ และสตริงที่สิ้นสุดด้วยอักขระว่าง (\\0) จำลองการทำงานของฟังก์ชันสตริงทีละตัวอักษร",
        "Visualize address references and pointer dereferencing. Perform heap dynamic memory allocations (malloc/free) and identify leaks.": "จำลองตัวชี้อ้างอิงพอยเตอร์และการแปลงตำแหน่งหน่วยความจำ การจัดสรรหน่วยความจำไดนามิก (malloc/free) และตรวจสอบการรั่วไหล",
        "Study user-defined structures, alignment, memory padding, unions, and file pointers buffers visually.": "ศึกษาโครงสร้างข้อมูลโครงสร้างข้อมูลที่ผู้เขียนกำหนด (struct) การจัดเรียงและแพดดิ้งหน่วยความจำ ยูเนียน และบัฟเฟอร์ไฟล์อย่างเห็นภาพ",
        "Go to Module 1": "ศึกษาบทที่ 1",
        "Go to Module 2": "ศึกษาบทที่ 2",
        "Go to Module 3": "ศึกษาบทที่ 3",
        "Go to Module 4": "ศึกษาบทที่ 4",
        "Go to Module 5": "ศึกษาบทที่ 5",
        "Go to Module 6": "ศึกษาบทที่ 6",
        "Go to Module 7": "ศึกษาบทที่ 7",
        "1.1 Structure of a C Program": "1.1 โครงสร้างของโปรแกรมภาษา C",
        "1.2 Variables & Data Types": "1.2 ตัวแปรและชนิดข้อมูล",
        "2.1 Operator Precedence & Evaluation": "2.1 ลำดับความสำคัญและการประเมินผลตัวดำเนินการ",
        "3.1 Loop Tracing & Control Flow": "3.1 ตัวติดตามและตรวจสอบลูป",
        "4.1 Function Call Stack Visualizer": "4.1 ตัวจำลองคอลสแต็กฟังก์ชัน",
        "5.1 Strings & Null Termination (\\0)": "5.1 สตริงและอักขระศูนย์สำหรับสิ้นสุดสตริง (\\0)",
        "6.1 Pointers & Addresses": "6.1 พอยเตอร์และแอดเดรสหน่วยความจำ",
        "6.2 Dynamic Memory Allocation (Heap)": "6.2 การจัดสรรหน่วยความจำแบบไดนามิก (Heap)",
        "7.1 Struct Alignment & Padding": "7.1 โครงสร้างข้อมูลแพดดิ้งและการจัดเรียงหน่วยความจำ",
        "1. Preprocessor Directives (#include & #define)": "1. คำสั่งพรีโปรเซสเซอร์ (#include & #define)",
        "2. Entry Point & Function Anatomy": "2. จุดเริ่มต้นการทำงานและโครงสร้างฟังก์ชัน main()",
        "3. Standard Stream Buffers": "3. สตรีมข้อมูลมาตรฐาน (stdin, stdout, stderr)",
        "4. Multi-Stage Compilation Pipeline": "4. ขั้นตอนกระบวนการคอมไพล์โปรแกรมภาษา C",
        "1. Fundamental Data Types & Byte Sizes": "1. ชนิดข้อมูลพื้นฐานและขนาดไบต์ในหน่วยความจำ",
        "2. Format Specifiers & I/O Modifiers": "2. ตัวกำหนดรูปแบบการแสดงผล (Format Specifiers)",
        "3. Scopes, Lifetimes & Storage Classes": "3. ขอบเขตตัวแปร อายุการใช้งาน และ Storage Classes",
        "4. Memory Endianness (Little-Endian vs Big-Endian)": "4. ระบบจัดเก็บไบต์ในหน่วยความจำ (Little-Endian & Big-Endian)"
    };

    function applyTranslation() {
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

    const UI_LANG = {
        EN: {
            title: "Practice Problems (100 Problems)",
            subtitle: "Select a problem for discussion or pick a random problem for classroom practice.",
            pickBtn: "🎲 Draw Random Problem",
            searchPlaceholder: "🔍 Search problems by keyword...",
            modalProblem: "PROBLEM",
            drawAnother: "🎲 Draw Another",
            close: "Close",
            noProblems: "No problems found matching"
        },
        TH: {
            title: "โจทย์ฝึกปฏิบัติ (100 ข้อ)",
            subtitle: "เลือกโจทย์เพื่อร่วมอภิปราย หรือสุ่มเลือกโจทย์เพื่อฝึกหัดในชั้นเรียน",
            pickBtn: "🎲 สุ่มเลือกโจทย์",
            searchPlaceholder: "🔍 ค้นหาโจทย์ตามคำสำคัญ...",
            modalProblem: "โจทย์หมายเลข",
            drawAnother: "🎲 สุ่มข้อใหม่",
            close: "ปิด",
            noProblems: "ไม่พบโจทย์ที่ตรงกับคำค้นหา"
        }
    };

    // 1. Determine root prefix dynamically
    const pathname = window.location.pathname;
    let rootPrefix = './';
    
    if (pathname.toLowerCase().includes('/modules/') || pathname.toLowerCase().includes('\\modules\\')) {
        rootPrefix = '../../';
    }

    // Load problems database & C simulator engine dynamically
    if (!window.CSimulatorUI) {
        const simScript = document.createElement('script');
        simScript.src = rootPrefix + 'c-simulator.js';
        document.head.appendChild(simScript);
    }

    if (!window.cProblems) {
        const script = document.createElement('script');
        script.src = rootPrefix + 'problems.js';
        document.head.appendChild(script);
        script.onload = () => {
            initializePracticeTab();
        };
    } else {
        initializePracticeTab();
    }

    // 2. Navigation items definition
    const navStructure = [
        {
            title: "Home",
            titleTh: "หน้าหลัก",
            path: "index.html"
        },
        {
            title: "Module 1: Intro & Memory",
            titleTh: "บทที่ 1: บทนำและหน่วยความจำ",
            id: "m1",
            pages: [
                { name: "1.1 Program Structure", nameTh: "1.1 โครงสร้างโปรแกรม", path: "modules/m1/structure.html" },
                { name: "1.2 Variables & Memory", nameTh: "1.2 ตัวแปรและหน่วยความจำ", path: "modules/m1/variables.html" }
            ]
        },
        {
            title: "Module 2: Operators & Expressions",
            titleTh: "บทที่ 2: ตัวดำเนินการและนิพจน์",
            id: "m2",
            pages: [
                { name: "2.1 Operator Precedence", nameTh: "2.1 ลำดับความสำคัญของตัวดำเนินการ", path: "modules/m2/precedence.html" }
            ]
        },
        {
            title: "Module 3: Control Flow",
            titleTh: "บทที่ 3: การควบคุมทิศทางของโปรแกรม",
            id: "m3",
            pages: [
                { name: "3.1 Conditionals", nameTh: "3.1 โครงสร้างการตัดสินใจเงื่อนไข", path: "modules/m3/conditionals.html" },
                { name: "3.2 Loop Constructs", nameTh: "3.2 โครงสร้างลูปและการทำซ้ำ", path: "modules/m3/loops.html" },
                { name: "3.3 Jump Statements", nameTh: "3.3 คำสั่งข้ามและคำสั่งย้อนกลับ", path: "modules/m3/jumps.html" }
            ]
        },
        {
            title: "Module 4: Functions & Scope",
            titleTh: "บทที่ 4: ฟังก์ชันและขอบเขตของตัวแปร",
            id: "m4",
            pages: [
                { name: "4.1 Call Stack Visualizer", nameTh: "4.1 ตัวจำลองคอลสแต็กฟังก์ชัน", path: "modules/m4/stack.html" }
            ]
        },
        {
            title: "Module 5: Arrays & Strings",
            titleTh: "บทที่ 5: อาร์เรย์และสตริง",
            id: "m5",
            pages: [
                { name: "5.1 String NULL Term", nameTh: "5.1 อักขระว่างสำหรับสิ้นสุดสตริง", path: "modules/m5/strings.html" }
            ]
        },
        {
            title: "Module 6: Pointers & Heap",
            titleTh: "บทที่ 6: พอยเตอร์และหน่วยความจำฮีป",
            id: "m6",
            pages: [
                { name: "6.1 Pointers & Addresses", nameTh: "6.1 พอยเตอร์และแอดเดรสหน่วยความจำ", path: "modules/m6/pointers.html" },
                { name: "6.2 Dynamic malloc/free", nameTh: "6.2 การจัดสรรหน่วยความจำแบบไดนามิก", path: "modules/m6/dynamic.html" }
            ]
        },
        {
            title: "Module 7: Structs & Files",
            titleTh: "บทที่ 7: โครงสร้างข้อมูลและไฟล์",
            id: "m7",
            pages: [
                { name: "7.1 Struct Alignment & Padding", nameTh: "7.1 การจัดตำแหน่งและแพดดิ้งโครงสร้างข้อมูล", path: "modules/m7/structs.html" }
            ]
        }
    ];

    // 3. Generate Sidebar HTML Container
    const sidebar = document.createElement('div');
    sidebar.id = 'sidebar-container';
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

    // Sidebar & Navigation Dynamic Render Function
    function renderSidebar() {
        const isLightMode = document.body.classList.contains('light-mode');
        const themeLabel = isLightMode ? '🌙 Dark' : '☀️ Light';
        const langLabel = currentLang === 'TH' ? '🇹🇭 TH' : '🇺🇸 EN';

        let navHtml = `
            <div class="sidebar-header">
                <a href="${rootPrefix}../index.html" style="display: inline-flex; align-items: center; gap: 4px; font-size: 0.8rem; font-weight: 600; color: var(--accent-blue); text-decoration: none; margin-bottom: 8px;">
                    ← ${currentLang === 'TH' ? 'หน้าหลักวิชาการ' : 'Main Portal'}
                </a>
                <h1 style="font-size: 1.25rem; line-height: 1.3;">C Programming Fundamentals</h1>
                <p style="margin-top: 6px;">by <a href="https://tpatikorn.com/" target="_blank" style="color: var(--accent-blue); text-decoration: none; font-weight: 500;">Thanaporn Patikorn</a></p>
                <div style="display: flex; gap: 8px; margin-top: 12px;">
                    <button id="theme-toggle-btn" class="btn btn-secondary" style="flex: 1; padding: 6px 12px; font-size: 0.8rem; font-weight: 500; text-align: center; justify-content: center; display: flex; align-items: center; gap: 4px;">
                        ${themeLabel}
                    </button>
                    <button id="lang-toggle-btn" class="btn btn-secondary" style="flex: 1; padding: 6px 12px; font-size: 0.8rem; font-weight: 500; text-align: center; justify-content: center; display: flex; align-items: center; gap: 4px;">
                        ${langLabel}
                    </button>
                </div>
            </div>
            <ul class="nav-tree">
        `;

        navStructure.forEach(item => {
            const itemTitle = currentLang === 'TH' ? (item.titleTh || item.title) : item.title;
            if (item.pages) {
                const isCurrentModule = item.pages.some(p => pathname.includes(p.path));
                const collapsedClass = isCurrentModule ? '' : 'collapsed';

                navHtml += `
                    <li class="nav-module ${collapsedClass}" data-module-id="${item.id}">
                        <div class="nav-module-title">
                            <span>${itemTitle}</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </div>
                        <ul class="nav-pages" style="${isCurrentModule ? '' : 'max-height: 0px;'}">
                `;

                item.pages.forEach(page => {
                    const isActive = pathname.includes(page.path);
                    const pageName = currentLang === 'TH' ? (page.nameTh || page.name) : page.name;
                    navHtml += `
                        <li class="${isActive ? 'active' : ''}">
                            <a href="${rootPrefix}${page.path}">${pageName}</a>
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
                            <span>${itemTitle}</span>
                        </a>
                    </li>
                `;
            }
        });

        navHtml += `</ul>`;
        sidebar.innerHTML = navHtml;

        // Re-bind sidebar header buttons listeners
        const themeBtn = document.getElementById('theme-toggle-btn');
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            const isLight = document.body.classList.contains('light-mode');
            localStorage.setItem('c-theme', isLight ? 'light' : 'dark');
            themeBtn.innerHTML = isLight ? '🌙 Dark' : '☀️ Light';
        });

        const langBtn = document.getElementById('lang-toggle-btn');
        langBtn.addEventListener('click', () => {
            currentLang = (currentLang === 'EN') ? 'TH' : 'EN';
            localStorage.setItem('c-lang', currentLang);
            renderSidebar();
            initializePracticeTab();
            applyTranslation();
        });

        // Setup Collapsible Dropdown Listeners
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
    }

    // Load initial theme class
    if (localStorage.getItem('c-theme') === 'light') {
        document.body.classList.add('light-mode');
    }

    renderSidebar();
    applyTranslation();

    // 5. Dynamic Class Footer Injection
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
            Programming Fundamentals in C class by 
            <a href="https://tpatikorn.com/" target="_blank" style="color: var(--accent-blue); text-decoration: none; font-weight: 500;">
                Thanaporn Patikorn
            </a>
        `;
        mainEl.appendChild(footer);
    }

    // 6. Dynamic Practice Problems & Random Picker Tab Bootstrap
    function initializePracticeTab() {
        const practiceSection = document.getElementById('practice-section');
        if (!practiceSection) return;

        // Determine current module ID from path
        let moduleId = 'm1';
        const match = pathname.toLowerCase().match(/[/\\]m([1-7])[/\\]/);
        if (match) {
            moduleId = 'm' + match[1];
        }

        const problems = (window.cProblems ? window.cProblems[moduleId] : []) || [];
        const lang = UI_LANG[currentLang] || UI_LANG.EN;

        // Build HTML for the practice tab
        practiceSection.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; flex-wrap: wrap; gap: 16px;">
                <div>
                    <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 4px;">${lang.title}</h3>
                    <p style="color: var(--text-secondary); font-size: 0.95rem;">${lang.subtitle}</p>
                </div>
                <div style="display: flex; gap: 12px; align-items: center;">
                    <button class="btn btn-secondary" id="btn-practice-lang-toggle" style="padding: 10px 18px; font-size: 0.9rem; border-radius: 12px;">
                        🌐 ${currentLang === 'TH' ? '🇹🇭 TH' : '🇺🇸 EN'}
                    </button>
                    <button class="btn btn-primary" id="btn-draw-random" style="padding: 10px 20px; font-size: 0.95rem; border-radius: 12px; gap: 8px;">
                        ${lang.pickBtn}
                    </button>
                </div>
            </div>

            <div style="margin-bottom: 20px;">
                <input type="text" id="problem-search" placeholder="${lang.searchPlaceholder}" style="width: 100%; padding: 12px 16px; font-size: 1rem; border-radius: 8px;">
            </div>

            <div id="problems-list-container" style="max-height: 500px; overflow-y: auto; border: 1px solid var(--glass-border); border-radius: 12px; background: rgba(255,255,255,0.02); padding: 12px;">
                <!-- List of 100 problems dynamically populated -->
            </div>

            <!-- MODAL FOR RANDOM PICKER -->
            <div id="random-picker-modal" style="display: none; position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0, 0, 0, 0.85); backdrop-filter: blur(16px); z-index: 1000; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s ease;">
                <div class="card" style="width: 90%; max-width: 800px; max-height: 90vh; overflow-y: auto; background: var(--bg-secondary); border: 2px solid var(--accent-blue); padding: 32px; border-radius: 24px; position: relative; box-shadow: 0 0 50px rgba(59, 130, 246, 0.4); text-align: left; transform: scale(0.9); transition: transform 0.3s ease;">
                    <div style="font-size: 0.9rem; font-weight: bold; color: var(--accent-blue); text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px;" id="modal-problem-id">PROBLEM</div>
                    <div style="font-size: 1.3rem; font-weight: 700; color: var(--text-primary); margin-bottom: 16px; line-height: 1.4;" id="modal-problem-text"></div>
                    <pre style="text-align: left; margin-bottom: 16px; display: none;" id="modal-problem-code"><code></code></pre>

                    <!-- Embedded Interactive C Simulator Container -->
                    <div id="modal-sim-box" style="margin-top: 16px;"></div>
                    
                    <div style="display: flex; gap: 16px; justify-content: flex-end; margin-top: 24px;">
                        <button class="btn btn-primary" id="modal-btn-redraw" style="padding: 10px 20px; border-radius: 8px;">${lang.drawAnother}</button>
                        <button class="btn btn-secondary" id="modal-btn-close" style="padding: 10px 20px; border-radius: 8px;">${lang.close}</button>
                    </div>
                </div>
            </div>
        `;

        const listContainer = document.getElementById('problems-list-container');
        const searchInput = document.getElementById('problem-search');
        const drawBtn = document.getElementById('btn-draw-random');
        const langToggleBtn = document.getElementById('btn-practice-lang-toggle');

        if (langToggleBtn) {
            langToggleBtn.addEventListener('click', () => {
                currentLang = currentLang === 'EN' ? 'TH' : 'EN';
                localStorage.setItem('c-lang', currentLang);
                renderSidebar();
                initializePracticeTab();
                applyTranslation();
            });
        }
        
        const modal = document.getElementById('random-picker-modal');
        const modalId = document.getElementById('modal-problem-id');
        const modalText = document.getElementById('modal-problem-text');
        const modalCode = document.getElementById('modal-problem-code');
        const modalCodeTag = modalCode.querySelector('code');
        const modalClose = document.getElementById('modal-btn-close');
        const modalRedraw = document.getElementById('modal-btn-redraw');

        // Render function for the problem cards
        function renderProblems(filterText = '') {
            listContainer.innerHTML = '';
            const filtered = problems.filter(p => {
                const qText = currentLang === 'TH' ? (p.questionTh || p.question) : p.question;
                return qText.toLowerCase().includes(filterText.toLowerCase()) || 
                       p.id.toLowerCase().includes(filterText.toLowerCase()) ||
                       (p.code && p.code.toLowerCase().includes(filterText.toLowerCase()));
            });

            if (filtered.length === 0) {
                listContainer.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 24px;">${lang.noProblems} "${filterText}".</div>`;
                return;
            }

            filtered.forEach(p => {
                const itemDiv = document.createElement('div');
                itemDiv.style.padding = '16px';
                itemDiv.style.borderBottom = '1px solid var(--glass-border)';
                itemDiv.style.borderRadius = '8px';
                itemDiv.className = 'practice-problem-item';
                
                const qText = currentLang === 'TH' ? (p.questionTh || p.question) : p.question;
                const simId = 'card_sim_' + p.id.replace(/[^a-zA-Z0-9]/g, '_');

                itemDiv.innerHTML = `
                    <div style="display: flex; gap: 12px; align-items: flex-start;">
                        <span style="font-family: Monaco, Menlo, 'Ubuntu Mono', Consolas, source-code-pro, monospace; color: var(--accent-blue); font-weight: 600; min-width: 90px; flex-shrink: 0;">[${p.id.toUpperCase()}]</span>
                        <div style="flex-grow: 1;">
                            <div style="font-weight: 500; line-height: 1.5; color: var(--text-primary); margin-bottom: 8px;">${qText}</div>
                            ${p.code ? `<pre style="font-size: 0.825rem; margin-top: 6px; padding: 10px; border-radius: 6px; max-height: 120px; overflow-y: auto;"><code>${escapeHtml(p.code)}</code></pre>` : ''}
                            
                            <!-- Card Embedded Simulator Area -->
                            <div id="${simId}" style="margin-top: 12px; display: none;"></div>
                        </div>
                        <button class="btn btn-secondary btn-try-sim" data-prob-id="${p.id}" style="padding: 6px 12px; font-size: 0.8rem; border-radius: 6px; flex-shrink: 0;">
                            ⚡ Try Code
                        </button>
                    </div>
                `;
                listContainer.appendChild(itemDiv);

                // Bind Try Code simulator toggle
                const tryBtn = itemDiv.querySelector('.btn-try-sim');
                tryBtn.addEventListener('click', () => {
                    const simBox = document.getElementById(simId);
                    if (simBox.style.display === 'none') {
                        simBox.style.display = 'block';
                        tryBtn.innerHTML = '❌ Close Simulator';
                        if (window.CSimulatorUI) {
                            window.CSimulatorUI.init(simId, p.code || 'int main() {\n    // Write your code here\n    return 0;\n}');
                        }
                    } else {
                        simBox.style.display = 'none';
                        tryBtn.innerHTML = '⚡ Try Code';
                        simBox.innerHTML = '';
                    }
                });
            });
        }

        function escapeHtml(str) {
            return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        }

        searchInput.addEventListener('input', (e) => {
            renderProblems(e.target.value);
        });

        // Random Draw Handler
        function drawRandomProblem() {
            if (problems.length === 0) return;
            const randomIndex = Math.floor(Math.random() * problems.length);
            const p = problems[randomIndex];

            modalId.innerText = `${lang.modalProblem} [${p.id.toUpperCase()}]`;
            modalText.innerText = currentLang === 'TH' ? (p.questionTh || p.question) : p.question;

            if (p.code) {
                modalCodeTag.innerText = p.code;
                modalCode.style.display = 'block';
            } else {
                modalCode.style.display = 'none';
            }

            // Embed Interactive Simulator inside Modal
            const modalSimBox = document.getElementById('modal-sim-box');
            modalSimBox.innerHTML = '';
            if (window.CSimulatorUI) {
                window.CSimulatorUI.init('modal-sim-box', p.code || 'int main() {\n    // Write code here\n    return 0;\n}');
            }

            // Show Modal
            modal.style.display = 'flex';
            setTimeout(() => {
                modal.style.opacity = '1';
                modal.querySelector('.card').style.transform = 'scale(1)';
            }, 10);
        }

        function closeModal() {
            modal.style.opacity = '0';
            modal.querySelector('.card').style.transform = 'scale(0.9)';
            setTimeout(() => {
                modal.style.display = 'none';
                document.getElementById('modal-sim-box').innerHTML = '';
            }, 300);
        }

        drawBtn.addEventListener('click', drawRandomProblem);
        modalRedraw.addEventListener('click', drawRandomProblem);
        modalClose.addEventListener('click', closeModal);

        // Render initial list
        renderProblems();
    }
});
