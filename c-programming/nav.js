document.addEventListener('DOMContentLoaded', () => {
    const DICTIONARY = {
    "Interactive C Programming Fundamentals": "การเรียนรู้การเขียนโปรแกรมภาษา C เชิงโต้ตอบ",
    "An undergrad-level courseware complete with raw memory byte visualizers, expression precedence parsing trees, loop tracers, stack frames, heap allocators, and structured practice problems.": "สื่อการเรียนรู้ระดับปริญญาตรีที่มาพร้อมกับเครื่องมือจำลองไบต์ในหน่วยความจำ แผนภูมิวิเคราะห์ลำดับตัวดำเนินการ ตัวติดตามการทำงานลูป สแต็กเฟรม ตัวจัดสรรหน่วยความจำฮีป และโจทย์ฝึกปฏิบัติเชิงรุก",
    "Start Exploring Module 1": "เริ่มเรียนรู้บทเรียนที่ 1",
    "Course Modules": "บทเรียนการเรียนรู้",
    "Select a topic below or use the sidebar navigation to jump into interactive visualizers and class practice lists.": "เลือกหัวข้อการเรียนรู้ด้านล่างหรือใช้เมนูนำทางด้านข้างเพื่อศึกษาเครื่องจำลองและโจทย์ฝึกหัด",
    "Practice Problems": "โจทย์ฝึกปฏิบัติ",
    "Interactive Visualizer": "เครื่องมือจำลองเชิงโต้ตอบ",
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
    "Learn the boilerplate code, the entry point function, and how a C file converts to machine execution.": "เรียนรู้รหัสพื้นฐานเริ่มต้น ฟังก์ชันจุดเริ่มต้น และวิธีการเปลี่ยนรหัสซอร์สโค้ดภาษา C เป็นรหัสภาษาเครื่อง",
    "Understand sizes, formatting types, and visualize how variables map to raw memory bytes in Little-Endian layout.": "ทำความเข้าใจขนาดของชนิดข้อมูล การแสดงผล และเรียนรู้วิธีการแมปตัวแปรลงในไบต์หน่วยความจำแบบ Little-Endian",
    "Learn the fundamental operators, increments, logical short-circuits, bitwise math, and type castings in C.": "เรียนรู้ตัวดำเนินการพื้นฐาน การเพิ่มและลดค่า การลัดวงจรทางตรรกศาสตร์ ตัวดำเนินการบิต และการแปลงชนิดตัวแปรในภาษา C",
    "Trace loop control updates, evaluations, and modifications step-by-step.": "ติดตามการปรับปรุงเงื่อนไขลูป การวิเคราะห์คำสั่ง และการแก้ไขตัวแปรควบคุมทีละขั้นตอน",
    "Understand execution flow, stack frame pushing/popping, and recursive call footprints in memory.": "เข้าใจเส้นทางการประมวลผล การเก็บและลบสแต็กเฟรม และพฤติกรรมการเรียกซ้ำของฟังก์ชันในหน่วยความจำ",
    "Understand how C represents text as character arrays terminated by a special zero byte.": "ทำความเข้าใจสตริงในภาษา C ในรูปแบบอาร์เรย์ของตัวอักษรที่ระบุตำแหน่งปิดท้ายด้วยไบต์ศูนย์",
    "Learn standard variables references, memory address values, and dereference mechanics.": "เรียนรู้การจองตัวแปร แอดเดรสบอกตำแหน่งในหน่วยความจำ และระบบถอดรหัสของตัวชี้พอยเตอร์",
    "Allocate structures dynamically using malloc and free, manage pointer links, and trace heap leaks.": "จัดการและจัดสรรตัวแปรโครงสร้างแบบไดนามิกด้วยคำสั่ง malloc และ free การชี้ลิงก์พอยเตอร์ และวิเคราะห์ปัญหารั่วไหล",
    "Understand how compilers arrange variables in structured memory, insert padding, and calculate sizes.": "เข้าใจการจัดโครงสร้างตัวแปรในหน่วยความจำของคอมไพเลอร์ การแทรกไบต์แพดดิ้ง และวิธีการประเมินขนาดตัวแปร",
    "C Compilation Steps": "ขั้นตอนการคอมไพล์ภาษา C",
    "Unlike interpreted languages, C source code must go through a multi-stage compilation process to generate standalone binary machine code. Click each step below to inspect how the source code is converted.": "ต่างจากภาษาที่ใช้อินเตอร์พรีเตอร์ รหัสต้นฉบับภาษา C จะต้องผ่านการประมวลผลหลายระดับเพื่อสร้างคำสั่งเครื่องแบบไบนารีที่รันด้วยตัวเองได้ คลิกแต่ละขั้นด้านล่างเพื่อตรวจสอบ",
    "Click any phase to see source transformation": "คลิกเลือกขั้นตอนใดก็ได้เพื่อดูการแปลงโครงสร้างซอร์สโค้ด",
    "1. Source File": "1. ซอร์สไฟล์รหัสต้นฉบับ",
    "2. Preprocessing": "2. การเตรียมการพรีโปรเซสเซอร์",
    "3. Assembly": "3. รหัสภาษาแอสเซมบลี",
    "4. Object File": "4. ออบเจกต์ไฟล์รหัสคำสั่งเครื่อง",
    "5. Executable": "5. ไฟล์โปรแกรมที่พร้อมประมวลผล (Executable)",
    "Source Code (main.c)": "ซอร์สโค้ดต้นฉบับ (main.c)",
    "C Instruction:": "คำสั่งภาษา C:",
    "Next Step": "ขั้นตอนถัดไป",
    "Reset": "เริ่มต้นใหม่",
    "C Variables & Bytes": "สัญลักษณ์ตัวแปรและไบต์หน่วยความจำ",
    "In C, declaring a variable reserves a specific number of contiguous bytes in memory. The visualizer below demonstrates the actual byte alignment and values stored on the stack (using standard Little-Endian storage).": "ในการจองตัวแปรภาษา C คอมไพเลอร์จะจองหน่วยความจำต่อเนื่องกัน ตัวจำลองด้านล่างจำลองค่าจริงที่เก็บลงในสแต็ก (ในรูปแบบระบบจัดเก็บไบต์ Little-Endian)",
    "1. Standard Sizes & Ranges": "1. ขนาดมาตรฐานและช่วงค่าข้อมูล",
    "C defines standard ranges for data types:": "ภาษา C กำหนดช่วงและขีดจำกัดความจำไว้สำหรับแต่ละชนิดข้อมูลดังนี้:",
    "2. Format Specifiers": "2. ตัวกำหนดรูปแบบการแสดงผล (Format Specifiers)",
    "3. Local Scopes & Garbage Values": "3. ขอบเขตตัวแปรโลคอลและค่าขยะคงค้าง (Garbage Values)",
    "Variables declared inside a function are": "ตัวแปรที่ประกาศขึ้นภายในบล็อกฟังก์ชันจะมีขอบเขตจำกัดเฉพาะตัวแปรโลคอล",
    "Memory Visualizer": "ตัวจำลองหน่วยความจำสแต็ก",
    "1. Basic Arithmetic Operators": "1. ตัวดำเนินการคณิตศาสตร์พื้นฐาน",
    "2. Pre-increment vs Post-increment": "2. ความแตกต่างของการบวกค่าก่อนหน้า (Pre) และด้านหลัง (Post)",
    "3. Relational & Logical Operators": "3. ตัวดำเนินการทางความสัมพันธ์และทางตรรกศาสตร์",
    "4. Bitwise Operators": "4. ตัวดำเนินการจัดการบิต (Bitwise)",
    "5. Type Casting & Coercion": "5. การแปลงและปรับชนิดตัวแปร (Type Casting)",
    "Abstract Syntax Trees (AST)": "ผังโครงสร้างวิเคราะห์ทางไวยากรณ์ (AST)",
    "When C parses expressions, it structures operators and operands into a tree based on their precedence. Nodes lower in the tree evaluate first. Choose an expression below and step through its execution.": "เมื่อคอมไพเลอร์วิเคราะห์นิพจน์ มันจะสร้างโครงสร้างต้นไม้ขึ้นตามลำดับความสำคัญ โดยเครื่องหมายที่อยู่ล่างสุดจะคำนวณก่อน เลือกนิพจน์ด้านล่างและติดตามทีละขั้นตอน",
    "AST Evaluator & Lecture": "ตัวประเมินผลลัพธ์ AST",
    "Operators Guide & Reference": "คู่มือข้อมูลสำหรับตัวดำเนินการ",
    "1. Conditionals & Switch-Case": "1. การตัดสินใจเชิงเงื่อนไขและ Switch-Case",
    "C structures branching via": "ภาษา C เลือกทิศทางการทำงานตามบล็อกเงื่อนไขด้วยคำสั่ง",
    "2. Loop Constructs": "2. โครงสร้างประเภทของลูปการทำซ้ำ",
    "3. Break vs. Continue": "3. ข้อมูลอ้างอิงระหว่าง Break และ Continue",
    "Loop Tracer": "เครื่องมือติดตามลูปการทำงาน",
    "Tracing loops helps debug index issues and logical mistakes. Select a loop construct, then click \"Next Step\" to trace code pointers and variable changes.": "การจำลองลูปช่วยวิเคราะห์ปัญหาวนซ้ำและตรรกะ เลือกประเภทลูปและกด 'ขั้นตอนถัดไป' เพื่อวิเคราะห์ค่าตัวแปรและลำดับรหัสตัวชี้",
    "Variable States": "รายการค่าตัวแปรควบคุม",
    "Loop Execution Trace": "บันทึกขั้นตอนการทำซ้ำของลูป",
    "1. Prototypes vs. Definitions": "1. การทำตัวแบบฟังก์ชัน (Prototypes) และคำนิยาม (Definitions)",
    "2. Call-by-Value vs. Reference": "2. การส่งข้อมูลแบบสำเนาค่า (Value) และแบบอ้างอิง (Reference)",
    "3. Recursion & Stack Overflow": "3. การทำงานเรียกตัวเอง (Recursion) และพื้นที่สแต็กเต็ม (Stack Overflow)",
    "A function that calls itself is recursive. It must have a": "ฟังก์ชันที่เรียกประมวลผลตัวเองเรียกว่าฟังก์ชันวนซ้ำ ซึ่งต้องมีเงื่อนไขยุติการทำงานเสมอเพื่อหลีกเลี่ยงสแต็กหน่วยความจำเต็ม",
    "Call Stack": "คอลสแต็กฟังก์ชัน (Call Stack)",
    "Each time a function is called, the system creates a stack frame (activation record) containing its parameters, local variables, and return address. When a function finishes, its frame is immediately popped off. Observe recursion or nested calls below.": "ทุกครั้งที่ฟังก์ชันถูกเรียกใช้ ระบบจะสร้างสแต็กเฟรมเพื่อจองพารามิเตอร์และตัวแปรเฉพาะ เมื่อฟังก์ชันสิ้นสุด เฟรมนั้นจะถูกนำออกทันที ลองสังเกตพฤติกรรมนี้ด้านล่าง",
    "Reset Stack": "เริ่มต้นสแต็กใหม่",
    "Memory Call Stack (Grows Upward)": "หน่วยความจำคอลสแต็ก (แสดงการเติบโตขึ้นด้านบน)",
    "Call Log Details": "บันทึกการสลับเรียกใช้ฟังก์ชัน",
    "1. Contiguous Layout & 2D Arrays": "1. การเรียงพื้นที่อาร์เรย์ต่อเนื่องและอาร์เรย์ 2 มิติ",
    "Arrays allocate contiguous memory.": "อาร์เรย์จัดสรรพื้นที่ความจำเรียงลำดับต่อเนื่องกันตามลำดับดัชนีชี้ตำแหน่ง",
    "2. Null Terminator '\\0'": "2. ตัวอักษรว่างสิ้นสุดสายอักขระ '\\0'",
    "A C string is simply an array of characters ending with": "สตริงภาษา C คืออาร์เรย์ของตัวอักษรที่ลงท้ายด้วยตัวอักขระศูนย์พิเศษบอกตำแหน่งสิ้นสุด",
    "3. String Library Helper Functions": "3. ฟังก์ชันการจัดการสตริงในห้องสมุด string.h",
    "Unlike other languages, C strings don't store their length explicitly. Functions scan until they hit the null character": "สตริงภาษา C ไม่เก็บขนาดความยาวโดยตรง ฟังก์ชันจะอ่านตัวอักษรไปเรื่อยๆ จนกว่าจะพบตัวสิ้นสุดสตริงว่าง",
    "String Visualizer": "ตัวประเมินและจำลองสตริง",
    "Destination String buffer (for strcpy):": "อาร์เรย์ปลายทางตัวรับข้อมูล (สำหรับ strcpy):",
    "Source String buffer:": "อาร์เรย์ต้นทางตัวส่งข้อมูล:",
    "String Log": "บันทึกการทำงานสตริง",
    "1. Pointer Syntax & Size": "1. โครงสร้างไวยากรณ์พอยเตอร์และขนาดหน่วยความจำ",
    "2. Pointer Arithmetic": "2. การคำนวณตำแหน่งด้วยพอยเตอร์ (Pointer Arithmetic)",
    "Adding/subtracting from a pointer shifts the address relative to the size of the pointed type:": "การบวกและลบพอยเตอร์จะเลื่อนแอดเดรสไปตามไบต์ขนาดชนิดตัวแปรของพอยเตอร์ตัวชี้นั้น:",
    "3. Void Pointers (Generic)": "3. พอยเตอร์สากลที่ไม่กำหนดรูปแบบชนิดตัวแปร (Void Pointer)",
    "Pointer Visualizer": "ตัวจำลองคำนวณพอยเตอร์",
    "A pointer is a variable that stores the memory address of another variable. By dereferencing (": "พอยเตอร์คือตัวแปรสำหรับจัดเก็บตำแหน่งหน่วยความจำของตัวแปรตัวอื่น โดยใช้เครื่องหมาย * ในการเข้าถึงข้อมูลปลายทาง",
    "Address-Of (&) and Dereference (*)": "ตัวชี้ตำแหน่ง (&) และการถอดรหัสตำแหน่งข้อมูล (*)",
    "1. Allocators: malloc, calloc, realloc": "1. คำสั่งจัดสรรความจำไดนามิก: malloc, calloc, realloc",
    "Heap memory is managed manually by the programmer. Functions like": "หน่วยความจำฮีป (Heap) บริหารจัดการด้วยซอฟต์แวร์โดยนักเขียนโปรแกรม ผ่านกลุ่มคำสั่งเช่น:",
    "2. Memory Leaks & Dangling Pointers": "2. หน่วยความจำรั่วไหล (Memory Leaks) และตัวชี้ค้างตำแหน่ง (Dangling Pointers)",
    "Heap Visualizer": "เครื่องมือจำลองหน่วยความจำฮีป",
    "Reset Heap": "เริ่มต้นฮีปใหม่",
    "Heap Log": "บันทึกเหตุการณ์หน่วยความจำฮีป",
    "1. Struct Padding Rules": "1. การเว้นระยะว่างไบต์แพดดิ้งในโครงสร้างข้อมูล",
    "To optimize CPU memory reads, data types are aligned to address boundaries that match their sizes (e.g., 4-byte integers start at address multiples of 4). Compilers insert blank padding bytes to enforce this. The arrangement of members directly affects the struct size.": "เพื่อเพิ่มประสิทธิภาพในการอ่านเขียนของ CPU ข้อมูลจะเรียงตัวตามขอบเขตความจำ (เช่น int 4 ไบต์ จะเริ่มที่ตำแหน่งที่หารด้วย 4 ลงตัว) คอมไพเลอร์จึงใส่ไบต์แพดดิ้ง การสลับลำดับตัวแปรภายในจึงมีผลโดยตรงต่อขนาด",
    "2. Unions": "2. การเก็บรวมกลุ่มข้อมูลแบบ ยูเนียน (Unions)",
    "3. File streams (FILE * )": "3. ตัวเชื่อมทางเข้าออกไฟล์ (FILE * )",
    "C handles files via standard stream buffers:": "ภาษา C จัดการกับระบบไฟล์คอมพิวเตอร์ผ่านตัวชี้กระแสข้อมูลของหน่วยความจำ:",
    "Struct Padding Visualizer": "ตัวจำลองโครงสร้างแพดดิ้ง",
    "Structure Layout View (4-Byte Rows):": "จำลองมุมมองหน่วยความจำ (แถวละ 4 ไบต์):",
    "Alignment Explanation": "คำอธิบายการจัดตำแหน่งแอดเดรส",
    "Trace Log": "ประวัติการประมวลผลย้อนหลัง",
    "Execution Output": "ผลแสดงการทำงานคอมโซลออกจอภาพ",
    "Action Log": "บันทึกเหตุการณ์",
    "Expression:": "นิพจน์:",
    "Variable Values:": "ค่าของตัวแปร:",
    "Function Flow:": "เส้นทางการทำงานฟังก์ชัน:",
    "Interactive Pipeline:": "ไปป์ไลน์เชิงโต้ตอบ:",
    "String:": "สตริง:",
    "Buffer Capacity:": "ความจุบัฟเฟอร์:",
    "String Length:": "ความยาวสตริง:",
    "Destination String buffer (for strcpy):": "บัฟเฟอร์สตริงปลายทาง (สำหรับ strcpy):",
    "Source String buffer:": "บัฟเฟอร์สตริงต้นทาง:",
    "Recursive Factorial: fact(3)": "แฟกทอเรียลแบบเรียกซ้ำ: fact(3)",
    "Nested Calls: main() -> square() -> mult()": "การเรียกฟังก์ชันซ้อนกัน: main() -> square() -> mult()",
    "a + b * c   (Multiplication before Addition)": "a + b * c (คูณก่อนบวก)",
    "(a + b) * c  (Parenthesis override)": "(a + b) * c (วงเล็บสำคัญที่สุด)",
    "a || b && c  (Logical AND before OR)": "a || b && c (AND สำคัญกว่า OR)",
    "x = y = z = 5 (Right-to-Left Associativity)": "x = y = z = 5 (ทิศทางขวาไปซ้าย)"
};

    function applyTranslation() {
        const lang = currentLang;
        function walk(node) {
            if (node.nodeType === Node.TEXT_NODE) {
                let val = node.nodeValue.trim();
                if (val.length > 1) {
                    let origText = node.parentElement.getAttribute('data-orig-text');
                    if (!origText) {
                        origText = node.nodeValue;
                        node.parentElement.setAttribute('data-orig-text', origText);
                    }
                    if (lang === 'TH') {
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
                const tagName = node.tagName.toLowerCase();
                if (tagName !== 'script' && tagName !== 'style' && tagName !== 'code' && tagName !== 'pre') {
                    for (let child of node.childNodes) {
                        walk(child);
                    }
                }
            }
        }
        walk(document.body);
    }

    let currentLang = localStorage.getItem('c-lang') || 'EN';

    const UI_LANG = {
        EN: {
            title: "Practice Problems (100 Questions)",
            subtitle: "Select any question to discuss, or draw a random one for classroom exercises.",
            pickBtn: "🎲 Pick Random Problem",
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

    // Load problems database dynamically by adding script tag if not loaded
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
            titleTh: "หน้าแรก",
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
        const pathname = window.location.pathname;
        let rootPrefix = './';
        if (pathname.toLowerCase().includes('/modules/') || pathname.toLowerCase().includes('\\modules\\')) {
            rootPrefix = '../../';
        }

        const isLightMode = document.body.classList.contains('light-mode');
        const themeLabel = isLightMode ? '🌙 Dark' : '☀️ Light';
        const langLabel = currentLang === 'TH' ? '🇹🇭 TH' : '🇺🇸 EN';

        let navHtml = `
            <div class="sidebar-header">
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
        const updateThemeUI = () => {
            if (document.body.classList.contains('light-mode')) {
                themeBtn.innerHTML = '🌙 Dark';
            } else {
                themeBtn.innerHTML = '☀️ Light';
            }
        };
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            if (document.body.classList.contains('light-mode')) {
                localStorage.setItem('c-theme', 'light');
            } else {
                localStorage.setItem('c-theme', 'dark');
            }
            updateThemeUI();
        });

        const langBtn = document.getElementById('lang-toggle-btn');
        langBtn.addEventListener('click', () => {
            currentLang = (currentLang === 'EN') ? 'TH' : 'EN';
            localStorage.setItem('c-lang', currentLang);
            window.dispatchEvent(new Event('languagechange'));
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

    // Toggle body language classes dynamically
    const updateBodyLangClass = () => {
        if (currentLang === 'TH') {
            document.body.classList.remove('lang-en');
            document.body.classList.add('lang-th');
        } else {
            document.body.classList.remove('lang-th');
            document.body.classList.add('lang-en');
        }
    };

    updateBodyLangClass();
    renderSidebar();
    applyTranslation();
    window.addEventListener('load', applyTranslation);

    window.addEventListener('languagechange', () => {
        updateBodyLangClass();
        renderSidebar();
        initializePracticeTab();
        applyTranslation();
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
            Programming Fundamentals in C class by 
            <a href="https://tpatikorn.com/" target="_blank" style="color: var(--accent-blue); text-decoration: none; font-weight: 500;">
                Thanaporn Patikorn
            </a>
        `;
        mainEl.appendChild(footer);
    }

    // 7. Dynamic Practice Problems & Random Picker Tab Bootstrap
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
                <button class="btn btn-primary" id="btn-draw-random" style="padding: 12px 24px; font-size: 1rem; border-radius: 12px; gap: 10px;">
                    ${lang.pickBtn}
                </button>
            </div>

            <div style="margin-bottom: 20px;">
                <input type="text" id="problem-search" placeholder="${lang.searchPlaceholder}" style="width: 100%; padding: 12px 16px; font-size: 1rem; border-radius: 8px;">
            </div>

            <div id="problems-list-container" style="max-height: 500px; overflow-y: auto; border: 1px solid var(--glass-border); border-radius: 12px; background: rgba(255,255,255,0.02); padding: 12px;">
                <!-- List of 100 problems dynamically populated -->
            </div>

            <!-- MODAL FOR RANDOM PICKER -->
            <div id="random-picker-modal" style="display: none; position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0, 0, 0, 0.85); backdrop-filter: blur(16px); z-index: 1000; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s ease;">
                <div class="card" style="width: 90%; max-width: 700px; background: var(--bg-secondary); border: 2px solid var(--accent-blue); padding: 40px; border-radius: 24px; position: relative; box-shadow: 0 0 50px rgba(59, 130, 246, 0.4); text-align: center; transform: scale(0.9); transition: transform 0.3s ease;">
                    <div style="font-size: 0.9rem; font-weight: bold; color: var(--accent-blue); text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px;" id="modal-problem-id">PROBLEM</div>
                    <div style="font-size: 1.8rem; font-weight: 700; color: var(--text-primary); margin-bottom: 24px; line-height: 1.4;" id="modal-problem-text"></div>
                    <pre style="text-align: left; margin-bottom: 24px; display: none;" id="modal-problem-code"><code></code></pre>
                    
                    <div style="display: flex; gap: 16px; justify-content: center; margin-top: 32px;">
                        <button class="btn btn-primary" id="modal-btn-redraw" style="padding: 12px 24px; border-radius: 8px;">${lang.drawAnother}</button>
                        <button class="btn btn-secondary" id="modal-btn-close" style="padding: 12px 24px; border-radius: 8px;">${lang.close}</button>
                    </div>
                </div>
            </div>
        `;

        const listContainer = document.getElementById('problems-list-container');
        const searchInput = document.getElementById('problem-search');
        const drawBtn = document.getElementById('btn-draw-random');
        
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
                itemDiv.style.cursor = 'pointer';
                itemDiv.style.transition = 'background 0.2s';
                itemDiv.style.borderRadius = '8px';
                itemDiv.className = 'practice-problem-item';
                
                const qText = currentLang === 'TH' ? (p.questionTh || p.question) : p.question;
                itemDiv.innerHTML = `
                    <div style="display: flex; gap: 12px;">
                        <span style="font-family: Monaco, Menlo, 'Ubuntu Mono', Consolas, source-code-pro, monospace; color: var(--accent-blue); font-weight: 600; min-width: 90px; flex-shrink: 0;">[${p.id.toUpperCase()}]</span>
                        <div style="flex-grow: 1;">
                            <div style="color: var(--text-primary); font-weight: 500; font-size: 0.95rem; line-height: 1.4;">${escapeHTML(qText)}</div>
                             ${p.code ? `<pre style="margin-top: 10px; padding: 10px; font-size: 0.8rem; background: #010409; white-space: pre-wrap;"><code>${escapeHTML(p.code.replace(/\\n/g, '\n'))}</code></pre>` : ''}
                        </div>
                    </div>
                `;

                itemDiv.addEventListener('click', () => {
                    showProblemModal(p);
                });

                listContainer.appendChild(itemDiv);
            });
        }

        function escapeHTML(str) {
            return str.replace(/[&<>'"]/g, 
                tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
            );
        }

        // Search binding
        searchInput.addEventListener('input', (e) => {
            renderProblems(e.target.value);
        });

        // Modal triggers
        function showProblemModal(problem) {
            modalId.innerText = `${lang.modalProblem} ${problem.id.toUpperCase()}`;
            const qText = currentLang === 'TH' ? (problem.questionTh || problem.question) : problem.question;
            modalText.innerHTML = `
                <div>${escapeHTML(qText)}</div>
            `;
            if (problem.code) {
                modalCode.style.display = 'block';
                modalCodeTag.innerText = problem.code.replace(/\\n/g, '\n');
            } else {
                modalCode.style.display = 'none';
            }

            modal.style.display = 'flex';
            setTimeout(() => {
                modal.style.opacity = '1';
                modal.firstElementChild.style.transform = 'scale(1)';
            }, 10);
        }

        function hideProblemModal() {
            modal.style.opacity = '0';
            modal.firstElementChild.style.transform = 'scale(0.9)';
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        }

        function pickRandom() {
            if (problems.length === 0) return;
            const randIndex = Math.floor(Math.random() * problems.length);
            showProblemModal(problems[randIndex]);
        }

        drawBtn.addEventListener('click', pickRandom);
        modalRedraw.addEventListener('click', pickRandom);
        modalClose.addEventListener('click', hideProblemModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) hideProblemModal();
        });

        // Initial render
        renderProblems();
        applyTranslation();

        // Inject active styling for practice-problem-item hover (CSS)
        if (!document.getElementById('practice-styles')) {
            const styles = document.createElement('style');
            styles.id = 'practice-styles';
            styles.innerHTML = `
                .practice-problem-item:hover {
                    background: rgba(59, 130, 246, 0.08) !important;
                }
            `;
            document.head.appendChild(styles);
        }
    }
});
