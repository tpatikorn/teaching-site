/**
 * Portable Client-Side C Simulator Engine & UI Component
 * Designed for offline file:/// protocol execution without backend servers.
 */
class CSimulator {
    constructor() {
        this.output = [];
        this.memory = {};
        this.stdinQueue = [];
    }

    /**
     * Executes raw user C statements inside main()
     * @param {string} code - C statements
     * @param {string} inputData - Space or newline separated stdin values
     */
    run(code, inputData = "") {
        this.output = [];
        this.memory = {};
        this.stdinQueue = inputData ? inputData.trim().split(/\s+/) : [];

        try {
            // Remove code comments
            let cleanCode = code
                .replace(/\/\/.*/g, '')
                .replace(/\/\*[\s\S]*?\*\//g, '');

            // Transpile C syntax constructs to runnable JS
            let jsCode = this.transpileCtoJS(cleanCode);

            // Create environment with C library functions
            const env = {
                printf: this.cPrintf.bind(this),
                scanf: this.cScanf.bind(this),
                putchar: (ch) => this.output.push(typeof ch === 'number' ? String.fromCharCode(ch) : String(ch)),
                puts: (str) => this.output.push(String(str) + '\n'),
                pow: Math.pow,
                sqrt: Math.sqrt,
                abs: Math.abs,
                floor: Math.floor,
                ceil: Math.ceil,
                memory: this.memory
            };

            const argNames = Object.keys(env);
            const argVals = Object.values(env);

            const executor = new Function(...argNames, jsCode);
            executor(...argVals);

            return {
                success: true,
                output: this.output.join('') || "(Program executed successfully with no output)",
                variables: { ...this.memory }
            };
        } catch (err) {
            return {
                success: false,
                output: `Compilation / Execution Error:\n↳ ${err.message}`,
                variables: {}
            };
        }
    }

    cPrintf(fmt, ...args) {
        if (fmt === undefined || fmt === null) return;
        fmt = String(fmt);
        let argIdx = 0;

        let result = fmt.replace(/%(\.?\d*)?([dfscgi])/g, (match, precision, type) => {
            if (argIdx >= args.length) return match;
            let val = args[argIdx++];
            if (type === 'f' || type === 'g') {
                let num = Number(val);
                if (isNaN(num)) num = 0;
                if (precision) {
                    let p = parseInt(precision.replace('.', '')) || 0;
                    return num.toFixed(p);
                }
                return num.toFixed(6).replace(/\.?0+$/, '');
            }
            if (type === 'd' || type === 'i') {
                let num = parseInt(val);
                return isNaN(num) ? '0' : String(num);
            }
            if (type === 'c') {
                if (typeof val === 'number') return String.fromCharCode(val);
                return String(val).charAt(0) || '';
            }
            return String(val);
        });

        result = result.replace(/\\n/g, '\n').replace(/\\t/g, '\t').replace(/\\"/g, '"');
        this.output.push(result);
    }

    cScanf(fmt, ...ptrGetters) {
        let count = 0;
        let specifiers = String(fmt).match(/%[dfscgi]/g) || [];

        for (let i = 0; i < specifiers.length; i++) {
            if (this.stdinQueue.length === 0) {
                throw new Error("scanf error: Insufficient input provided in stdin box");
            }
            let rawVal = this.stdinQueue.shift();
            let parsedVal;
            let spec = specifiers[i];

            if (spec === '%d' || spec === '%i') parsedVal = parseInt(rawVal, 10) || 0;
            else if (spec === '%f') parsedVal = parseFloat(rawVal) || 0.0;
            else if (spec === '%c') parsedVal = rawVal.charAt(0);
            else parsedVal = rawVal;

            if (ptrGetters[i] && typeof ptrGetters[i] === 'function') {
                ptrGetters[i](parsedVal);
                count++;
            }
        }
        return count;
    }

    transpileCtoJS(cCode) {
        let js = cCode;

        // Convert standard return statements
        js = js.replace(/\breturn\s+0\s*;/g, 'return;');

        // Track variable declarations and replace C types with JS variable syntax
        js = js.replace(/\b(int|float|double|char|long|short)\b\s+([a-zA-Z_]\w*(?:\s*=\s*[^;,]+)?(?:\s*,\s*[a-zA-Z_]\w*(?:\s*=\s*[^;,]+)?)*)\s*;/g, (match, type, decls) => {
            let parts = decls.split(',').map(d => {
                let pair = d.trim().split('=');
                let varName = pair[0].trim();
                let initVal = pair[1] ? pair[1].trim() : (type === 'char' ? "'\\0'" : "0");
                return `${varName} = ${initVal}`;
            });
            return `let ${parts.join(', ')};`;
        });

        // Convert for loop variable initializations e.g. for (int i = 0; ...) -> for (let i = 0; ...)
        js = js.replace(/\bfor\s*\(\s*(int|float|double|char)\s+/g, 'for (let ');

        // Convert &var pointer references in scanf to assignment getters
        js = js.replace(/&([a-zA-Z_]\w*)/g, '((val) => { if(val !== undefined) $1 = val; return $1; })');

        return js;
    }
}

/**
 * UI Component Generator for C Code Editor & Console Output Box Pair
 */
window.CSimulatorUI = {
    render(containerId, options = {}) {
        const target = typeof containerId === 'string' ? document.getElementById(containerId) : containerId;
        if (!target) return;

        const initialCode = options.initialCode || `int a = 10, b = 25;\nprintf("a = %d, b = %d\\n", a, b);\nif (a < b) {\n    printf("b is greater than a\\n");\n}`;
        const initialInput = options.initialInput || "";
        const boxId = 'csim_' + Math.random().toString(36).substr(2, 9);

        target.innerHTML = `
            <div class="c-sim-wrapper">
                <div class="c-sim-header">
                    <span class="c-sim-filename">main.c</span>
                    <span class="c-sim-badge">Client-Side C99 Simulator</span>
                </div>
                <div class="c-sim-code-area">
                    <div class="c-sim-boilerplate">#include &lt;stdio.h&gt;<br>int main() {</div>
                    <textarea id="${boxId}_code" class="c-sim-editor" rows="${options.rows || 7}" spellcheck="false" placeholder="// Write C statements here...">${initialCode}</textarea>
                    <div class="c-sim-boilerplate">&nbsp;&nbsp;&nbsp;&nbsp;return 0;<br>}</div>
                </div>
                <div class="c-sim-controls">
                    <button id="${boxId}_runBtn" class="c-sim-btn-run">▶ Run Code</button>
                    <button id="${boxId}_resetBtn" class="c-sim-btn-reset">↺ Reset</button>
                    <input type="text" id="${boxId}_stdin" class="c-sim-stdin" placeholder="stdin input (for scanf)..." value="${initialInput}">
                </div>
                <div class="c-sim-console-wrapper">
                    <div class="c-sim-console-header">
                        <span>Terminal Output</span>
                        <span id="${boxId}_status" class="c-sim-status">● Idle</span>
                    </div>
                    <pre id="${boxId}_output" class="c-sim-console-output">Press "Run Code" to execute simulator.</pre>
                </div>
            </div>
        `;

        const codeInput = document.getElementById(`${boxId}_code`);
        const stdinInput = document.getElementById(`${boxId}_stdin`);
        const runBtn = document.getElementById(`${boxId}_runBtn`);
        const resetBtn = document.getElementById(`${boxId}_resetBtn`);
        const outputConsole = document.getElementById(`${boxId}_output`);
        const statusBadge = document.getElementById(`${boxId}_status`);

        codeInput.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                e.preventDefault();
                const start = codeInput.selectionStart;
                const end = codeInput.selectionEnd;
                codeInput.value = codeInput.value.substring(0, start) + '    ' + codeInput.value.substring(end);
                codeInput.selectionStart = codeInput.selectionEnd = start + 4;
            }
        });

        const engine = new CSimulator();

        runBtn.addEventListener('click', () => {
            statusBadge.innerHTML = '● Executing...';
            statusBadge.style.color = 'var(--accent-amber)';
            
            setTimeout(() => {
                const res = engine.run(codeInput.value, stdinInput.value);
                outputConsole.innerText = res.output;
                if (res.success) {
                    statusBadge.innerHTML = '● Success';
                    statusBadge.style.color = 'var(--accent-emerald)';
                } else {
                    statusBadge.innerHTML = '● Error';
                    statusBadge.style.color = 'var(--accent-rose)';
                }
            }, 50);
        });

        resetBtn.addEventListener('click', () => {
            codeInput.value = initialCode;
            stdinInput.value = initialInput;
            outputConsole.innerText = 'Ready to run...';
            statusBadge.innerHTML = '● Idle';
            statusBadge.style.color = 'var(--text-muted)';
        });
    }
};
